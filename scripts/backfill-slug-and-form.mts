/**
 * COPY `slug` AND `form` FROM THE SEED SOURCE ONTO THE ROWS THAT ARE ALREADY THERE.
 *
 *   npx tsx scripts/backfill-slug-and-form.mts --dry        plan only, writes nothing
 *   ALLOW_PROD_WRITE=1 npx tsx scripts/backfill-slug-and-form.mts --confirm
 *
 * ── WHAT IT IS AND IS NOT ───────────────────────────────────────────────────
 *
 * It is a COPY, not a derivation. The values were struck once, by
 * scripts/seed/gen/_apply_slug_and_form.mts, and live as literals in gen/*.ts.
 * This script does not compute a slug; it carries the literal across to the row
 * the seed source already describes. If the source and the database ever
 * disagree about which row that is, it stops rather than guessing.
 *
 * ── 🔴 A SLUG IS WRITTEN ONCE AND IS THEN IMMUTABLE ─────────────────────────
 *
 * This is a CONDITION, not a preference. Every accept-list key, every gate
 * exemption and every DEBT row will point at a slug; re-minting one would hand
 * the row a new identity and kill every key aimed at the old one — silently, in
 * the case of the answer overlay, which marks a learner's correct answer wrong
 * with no gate going red.
 *
 * So the rule is enforced AT THE WRITE, not in the plan:
 *
 *     updateMany({ where: { id, slug: null }, data: { slug, form } })
 *
 * A row whose slug is already set matches nothing and is left exactly as it is,
 * even if the plan was computed a moment before someone else set it. The plan's
 * count and the count the database actually reports are then compared, and a
 * disagreement is an error rather than a line nobody reads.
 *
 * ── AND IT REFUSES TO WRITE A ROW IT CANNOT IDENTIFY ────────────────────────
 *
 * Rows are matched on (taskType, profession, title) — the same key
 * scripts/seed/append.ts dedupes on. Measured on 5 September 2026, source and
 * production agreed exactly: 1066 rows, 1066 source items, 0 rows without a
 * source item and 0 source items without a row. If that ever stops being true
 * this script stops too. A row given the wrong item's slug is worse than a row
 * with no slug at all: the second is visible, the first is not.
 */
import "./load-env.mjs";
import { PrismaClient } from "@prisma/client";
import { GEN_ITEMS } from "./seed/gen/index";
import { requireProdWrite } from "./prod-write-guard";

const DRY = process.argv.includes("--dry");
const SCRIPT = "scripts/backfill-slug-and-form.mts";

type Src = { taskType: string; profession?: string | null; title: string; slug?: string | null; form?: string | null };

const die = (msg: string): never => {
  console.error(`\n[backfill-slug] 🔴 ${msg}\n`);
  process.exit(1);
};

const key = (taskType: string, profession: string | null | undefined, title: string) =>
  `${taskType}::${profession ?? "_"}::${title}`;

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // ── 1 · the source, and it must be complete ───────────────────────────────
  const source = GEN_ITEMS as unknown as Src[];
  if (source.length === 0) die("the seed source is empty — this would back-fill nothing and call it done");

  const missing = source.filter((s) => !s.slug);
  if (missing.length > 0) {
    die(
      `${missing.length} of ${source.length} source item(s) carry NO slug. Run ` +
        `scripts/seed/gen/_apply_slug_and_form.mts first:\n` +
        missing.slice(0, 5).map((s) => `      ${s.taskType} · "${s.title}"`).join("\n"),
    );
  }

  const bySrcKey = new Map<string, Src>();
  const slugsInSource = new Map<string, string>();
  for (const s of source) {
    const k = key(s.taskType, s.profession, s.title);
    if (bySrcKey.has(k)) die(`the seed source holds two items keyed ${k}`);
    bySrcKey.set(k, s);
    const prev = slugsInSource.get(s.slug!);
    if (prev) die(`the seed source uses slug "${s.slug}" for both "${prev}" and "${s.title}"`);
    slugsInSource.set(s.slug!, s.title);
  }

  // ── 2 · the rows ──────────────────────────────────────────────────────────
  const rows = await prisma.oetItem.findMany({
    select: { id: true, taskType: true, profession: true, title: true, slug: true, form: true, active: true },
  });
  console.log(
    `[backfill-slug] source ${source.length} item(s) · database ${rows.length} row(s) ` +
      `(${rows.filter((r) => r.active).length} active, ${rows.filter((r) => !r.active).length} retired)`,
  );

  // 🔴 THE POPULATION IS COUNTED BEFORE THE GUARD, so "0 to write" can never be
  // read as success when the real answer is "nothing matched".
  const already = rows.filter((r) => r.slug !== null);
  const unmatched = rows.filter((r) => !bySrcKey.has(key(r.taskType, r.profession, r.title)));
  const orphanSource = [...bySrcKey.keys()].filter(
    (k) => !rows.some((r) => key(r.taskType, r.profession, r.title) === k),
  );

  console.log(`[backfill-slug] already carry a slug: ${already.length}  (these are SKIPPED — a slug is written once)`);
  console.log(`[backfill-slug] rows with no source item: ${unmatched.length}`);
  console.log(`[backfill-slug] source items with no row: ${orphanSource.length}`);

  if (unmatched.length > 0) {
    die(
      `${unmatched.length} row(s) match no seed item, so this script cannot say which slug is theirs:\n` +
        unmatched.slice(0, 10).map((r) => `      ${r.taskType} · ${r.profession ?? "_"} · "${r.title}"`).join("\n") +
        `\n\n  A row given the wrong item's slug is worse than a row with none.`,
    );
  }

  // ── 3 · the plan — EVERY row it can identify. The skipping is NOT done here ──
  //
  // 🔴 THE IMMUTABILITY RULE LIVES IN EXACTLY ONE PLACE, AND IT IS THE WHERE
  // CLAUSE IN STEP 4.
  //
  // The first version of this script filtered `slug === null` HERE as well as in
  // the WHERE. Deleting the WHERE's condition then changed nothing:
  // tests/db/backfill-slug-immutable.test.ts stayed green — 4/4 — with the guard
  // removed, because the plan had already dropped the row. That is the fifth
  // "green, but on what?" in this repo, and it was found by sabotaging a guard
  // that had just been written and believed.
  //
  // A rule stated twice is a rule whose real enforcer is unknown. So the plan
  // now carries every matched row, and the DATABASE decides which of them
  // change. Sabotage the WHERE and the hand-set row is overwritten, which is
  // exactly what the test measures.
  const plan = rows.map((r) => {
    const s = bySrcKey.get(key(r.taskType, r.profession, r.title))!;
    return { id: r.id, title: r.title, slug: s.slug!, form: s.form ?? null };
  });
  /** What the database is expected to change — a PREDICTION, checked after the
   *  write against what it actually reports. Never a filter. */
  const expected = plan.length - already.length;

  // Uniqueness, asked of the database rather than of the plan: is a slug this
  // run would write already sitting on a DIFFERENT row? The unique index would
  // throw, but a partial earlier run is a state to name, not to hit an index on.
  const byExistingSlug = new Map(rows.filter((r) => r.slug).map((r) => [r.slug!, r.id]));
  const clash = plan.filter((p) => {
    const holder = byExistingSlug.get(p.slug);
    return holder !== undefined && holder !== p.id;
  });
  if (clash.length > 0) {
    die(
      `${clash.length} slug(s) this run would write are already on a DIFFERENT row — a partial earlier\n` +
        `  run left the database in a state this script must not paper over:\n` +
        clash.slice(0, 10).map((p) => `      ${p.slug}`).join("\n"),
    );
  }

  console.log(
    `[backfill-slug] to write: ${expected} row(s) — ` +
      `${plan.filter((p) => p.form && !already.some((a) => a.id === p.id)).length} of them also get a form`,
  );
  if (expected === 0) {
    console.log(
      `[backfill-slug] nothing to do. ${already.length} of ${rows.length} row(s) already carry a slug` +
        `${already.length === rows.length ? " — the back-fill is complete." : "."}`,
    );
    return;
  }
  if (DRY) {
    console.log("\n[backfill-slug] --dry: no rows written. Re-run with --confirm.");
    return;
  }

  // ── 4 · write ─────────────────────────────────────────────────────────────
  requireProdWrite(SCRIPT);

  // 🔴 `slug: null` HERE IS THE IMMUTABILITY RULE. Nothing above filters on it,
  // on purpose (see step 3), so this clause is the only thing standing between a
  // row that already has an identity and a second one. Delete it and the proof
  // in tests/db/backfill-slug-immutable.test.ts goes red on the value.
  let written = 0;
  const SIZE = 100;
  for (let i = 0; i < plan.length; i += SIZE) {
    const chunk = plan.slice(i, i + SIZE);
    const results = await prisma.$transaction(
      chunk.map((p) =>
        prisma.oetItem.updateMany({
          where: { id: p.id, slug: null },
          data: { slug: p.slug, form: p.form },
        }),
      ),
    );
    written += results.reduce((a, r) => a + r.count, 0);
    console.log(`[backfill-slug]   ${Math.min(i + SIZE, plan.length)}/${plan.length}`);
  }

  console.log(`[backfill-slug] wrote ${written} row(s); ${already.length} skipped as already set`);
  if (written !== expected) {
    die(
      `expected the database to change ${expected} row(s) and it changed ${written}. The difference is ` +
        `rows whose slug was set between the read and the write — nothing was overwritten, which is ` +
        `correct, but re-read before assuming the back-fill is complete.`,
    );
  }

  // ── 5 · read back, from the database, not from the plan ───────────────────
  const after = await prisma.oetItem.count({ where: { slug: null } });
  const forms = await prisma.oetItem.groupBy({ by: ["form"], _count: { _all: true } });
  console.log(`[backfill-slug] rows still without a slug: ${after}`);
  for (const f of forms.sort((a, b) => String(a.form).localeCompare(String(b.form)))) {
    console.log(`[backfill-slug]   form ${String(f.form ?? "(none)").padEnd(8)} ${f._count._all}`);
  }
  if (after !== 0) die(`${after} row(s) still have no slug after a complete run`);
}

// 🔴 `process.exit(1)`, not `process.exitCode = 1`. The same rule as
// scripts/measure/blank-submit.mts and scripts/e2e/run.mts: an explicit exit
// somewhere below can override `exitCode`, and a production-write script that
// throws and then leaves with 0 tells its caller the write succeeded.
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect().catch(() => {});
    process.exit(1);
  });
