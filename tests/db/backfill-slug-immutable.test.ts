/**
 * 🔴 A SLUG IS WRITTEN ONCE AND IS THEN IMMUTABLE.
 *
 * This is the condition the whole de-coupling rests on. Every accept-list key,
 * every gate exemption and every DEBT row is about to point at a slug. Re-mint
 * one and the row gets a new identity, and every key aimed at the old one goes
 * dead — silently, in the case of the answer overlay, which then marks a
 * learner's correct answer WRONG with no gate going red.
 *
 * So it is not proved by reading the code. It is proved by filling one row's
 * slug by hand, running the REAL script through its own command line, and
 * measuring three things:
 *
 *   1. that row is UNTOUCHED — it still carries the hand-set value
 *   2. the script SAYS how many it skipped, in its own output
 *   3. every other row got exactly the slug the seed source carries
 *
 * ── WHY THE SCRIPT IS SPAWNED AND NOT IMPORTED ──────────────────────────────
 *
 * Importing it would let this test choose which parts run. The rule lives in a
 * WHERE clause inside a transaction the script builds itself, so the only honest
 * subject is the script as somebody actually runs it — argv, guard, batching and
 * all. What is asserted is its real stdout.
 *
 * ── HOW TO SEE IT GO RED ────────────────────────────────────────────────────
 *
 * Delete `slug: null` from the updateMany WHERE in
 * scripts/backfill-slug-and-form.mts. The hand-set row is then overwritten and
 * case 1 fails on the value, not on a count — the failure names both slugs.
 */
import { describe, it, expect, beforeAll } from "vitest";
import { spawnSync } from "node:child_process";
import { PrismaClient, Prisma } from "@prisma/client";
import { GEN_ITEMS } from "../../scripts/seed/gen/index";

const prisma = new PrismaClient();

/** A value no mint could ever produce, so an overwrite cannot hide as a re-mint. */
const HAND_SET = "hand-set-sentinel-do-not-touch";

/** Five items from the real bank.
 *
 *  SAMPLE[0] — the one that gets a hand-set slug, so it is the row that must be
 *  SKIPPED — deliberately has NO form. If the skipped row were the only item
 *  with a form, no written row would carry one and "the form came across" would
 *  be a case that cannot fail. At least one of the four that ARE written has a
 *  form, and that is asserted here rather than hoped for. */
const SAMPLE = (() => {
  const all = GEN_ITEMS as unknown as (Prisma.OetItemCreateManyInput & { slug?: string | null; form?: string | null })[];
  const noForm = all.find((i) => !i.form);
  const withForm = all.filter((i) => i.form).slice(0, 2);
  if (!noForm) throw new Error("every seed item belongs to a form — this test's sample assumes one does not");
  if (withForm.length < 2) throw new Error("fewer than 2 seed items carry a form — the written half would prove nothing");
  const filler = all.filter((i) => i !== noForm && !withForm.includes(i)).slice(0, 2);
  const sample = [noForm, ...withForm, ...filler];
  if (sample.length !== 5) throw new Error(`sample is ${sample.length} items, expected 5`);
  return sample;
})();

/** The items the back-fill is expected to WRITE (everything but the hand-set one). */
const WRITTEN = SAMPLE.slice(1);

const run = (...args: string[]) =>
  spawnSync(`npx tsx scripts/backfill-slug-and-form.mts ${args.join(" ")}`, {
    shell: true,
    encoding: "utf8",
    env: process.env,
  });

/** The rows as the database has them, keyed by title. */
async function readBack() {
  const rows = await prisma.oetItem.findMany({ select: { title: true, slug: true, form: true } });
  return new Map(rows.map((r) => [r.title, r]));
}

describe("a slug is written once and is then immutable", () => {
  let first: ReturnType<typeof run>;
  let second: ReturnType<typeof run>;

  beforeAll(async () => {
    // The bank as it stands the moment before a back-fill: rows present, no slug.
    await prisma.oetAttempt.deleteMany({});
    await prisma.oetItem.deleteMany({});
    await prisma.oetItem.createMany({
      data: SAMPLE.map((i) => ({ ...i, slug: null, form: null })),
    });

    // 🔴 THE POPULATION, COUNTED BEFORE THE GUARD. Without this a later "1
    // skipped" could be true of an empty table and prove nothing.
    expect(await prisma.oetItem.count()).toBe(SAMPLE.length);
    expect(await prisma.oetItem.count({ where: { slug: null } })).toBe(SAMPLE.length);

    // One row already carries a slug — set by hand, to a value the mint would
    // never produce.
    await prisma.oetItem.update({
      where: { id: (await prisma.oetItem.findFirstOrThrow({ where: { title: SAMPLE[0].title } })).id },
      data: { slug: HAND_SET },
    });

    first = run("--confirm");
    second = run("--confirm");

    // The script's own words, printed BESIDE the assertions that read them. A
    // gate whose evidence lives somewhere else is a gate nobody can check by
    // eye when it goes red.
    console.log("\n──── run 1, with one row's slug already set by hand ────");
    console.log(first.stdout.trim());
    console.log("\n──── run 2, immediately after ────");
    console.log(second.stdout.trim());
    console.log("");
  }, 120_000);

  it("runs, and says out loud how many it skipped", () => {
    expect(first.status, first.stdout + first.stderr).toBe(0);
    expect(first.stdout).toContain(`already carry a slug: 1`);
    expect(first.stdout).toContain(`to write: ${SAMPLE.length - 1} row(s)`);
    expect(first.stdout).toContain(`wrote ${SAMPLE.length - 1} row(s); 1 skipped as already set`);
  });

  it("leaves the hand-set row exactly as it was", async () => {
    const row = (await readBack()).get(SAMPLE[0].title)!;
    expect(row.slug).toBe(HAND_SET);
    // and it did NOT quietly get the minted value instead
    expect(row.slug).not.toBe(SAMPLE[0].slug);
  });

  // CONTROL. Skipping is only half the rule; a script that wrote NOTHING would
  // pass the two cases above. Every other row must have received exactly the
  // literal the seed source carries — slug and form both.
  it("gives every other row exactly the slug and form the seed source carries", async () => {
    const after = await readBack();
    for (const item of WRITTEN) {
      const row = after.get(item.title)!;
      expect(row.slug, `slug for "${item.title}"`).toBe(item.slug);
      expect(row.form, `form for "${item.title}"`).toBe(item.form ?? null);
    }
    // and the population that made that assertion non-vacuous
    expect(WRITTEN.filter((i) => i.form).length).toBeGreaterThan(0);
  });

  it("is a no-op the second time, and changes nothing", async () => {
    expect(second.status, second.stdout + second.stderr).toBe(0);
    expect(second.stdout).toContain(`already carry a slug: ${SAMPLE.length}`);
    expect(second.stdout).toContain("nothing to do");
    const after = await readBack();
    expect(after.get(SAMPLE[0].title)!.slug).toBe(HAND_SET);
    expect(await prisma.oetItem.count({ where: { slug: null } })).toBe(0);
  });
});
