/**
 * DOES EVERY SOURCE TITLE STILL MATCH THE ONE IN PRODUCTION?
 *
 *   npm run check:titles-match-prod
 *
 * ── WHY THIS EXISTS ─────────────────────────────────────────────────────────
 *
 * `scripts/seed/append.ts` is INSERT-ONLY and dedupes on
 * (taskType, profession, title). Change a title in the seed source without
 * changing it in the database and the next seed does not update that row — it
 * INSERTS A SECOND ONE. The bank quietly grows a duplicate of an item that is
 * already live, and nothing says so.
 *
 * That is the exact hazard the rename PR walks into: 30 active titles change at
 * once. The condition on that PR was "source and production must be identical
 * after the rename", and until now NOTHING WAS STANDING BEHIND THAT SENTENCE.
 *
 * ── 🔴 WHY gate:title-collision DOES NOT COVER IT ───────────────────────────
 *
 * That gate's database half only reads `NEW_BATCHES`, which is EMPTY in the
 * steady state — correctly, because nothing is waiting to be seeded. After a
 * source-only rename it prints
 *
 *     no batch is pending — the database half had nothing to check
 *
 * and exits 0, while 30 source titles have just diverged from 30 live rows. It
 * is green, and blind to precisely this.
 *
 * ── WHAT IT MATCHES ON, AND WHY NOT ON THE TITLE ────────────────────────────
 *
 * On the SLUG. Matching rows by title and then comparing titles would be a
 * tautology: every row that matched would agree by construction, and a renamed
 * row would simply drop out of the population and be counted as "not found"
 * rather than as the mismatch it is. The slug is written once and never changes,
 * so it is the identity, and the title is the VALUE being compared.
 *
 * A row missing on either side is reported too — that is the same defect wearing
 * a different hat.
 */
import "./load-env.mjs";
import { PrismaClient } from "@prisma/client";
import { GEN_ITEMS } from "./seed/gen/index";

type Src = { taskType: string; title: string; slug?: string | null };

const source = GEN_ITEMS as unknown as Src[];
const failures: string[] = [];
const fail = (m: string) => failures.push(m);

if (source.length === 0) {
  console.error("[titles-match] the seed source is empty — this check would pass over nothing");
  process.exit(1);
}

const noSlug = source.filter((s) => !s.slug);
if (noSlug.length > 0) {
  console.error(
    `[titles-match] ${noSlug.length} source item(s) carry no slug — there is no identity to match on:\n` +
      noSlug.slice(0, 5).map((s) => `      ${s.taskType} · ${JSON.stringify(s.title)}`).join("\n"),
  );
  process.exit(1);
}

const url = process.env.DATABASE_URL;
if (!url) {
  // 🔴 NOT A PASS. This check is source-vs-production; with no production there
  // is nothing to compare and saying "all clear" would be a lie in the exact
  // shape this file exists to prevent.
  console.error(
    "[titles-match] 🔴 NO DATABASE_URL — this check CANNOT RUN.\n" +
      "  It compares the seed source against production; there is no half of it that\n" +
      "  works without a database. Run it before any seed, and before merging a rename.",
  );
  process.exit(1);
}

const prisma = new PrismaClient();
try {
  const rows = await prisma.oetItem.findMany({ select: { slug: true, title: true, active: true } });
  console.log(
    `[titles-match] source ${source.length} item(s) · database ${rows.length} row(s) ` +
      `(${rows.filter((r) => r.active).length} active, ${rows.filter((r) => !r.active).length} retired)`,
  );

  const bySlug = new Map(rows.filter((r) => r.slug).map((r) => [r.slug!, r]));
  const nullSlug = rows.filter((r) => r.slug === null).length;
  if (nullSlug > 0) {
    fail(`${nullSlug} database row(s) have no slug — run scripts/backfill-slug-and-form.mts`);
  }

  // Population before the guard: 0 compared is not 0 mismatches.
  let compared = 0;
  for (const s of source) {
    const row = bySlug.get(s.slug!);
    if (!row) {
      fail(`slug ${s.slug} is in the seed source but on no row: ${JSON.stringify(s.title)}`);
      continue;
    }
    compared += 1;
    if (row.title !== s.title) {
      fail(
        `slug ${s.slug} — the title differs:\n` +
          `        source     ${JSON.stringify(s.title)}\n` +
          `        production ${JSON.stringify(row.title)}`,
      );
    }
  }

  const srcSlugs = new Set(source.map((s) => s.slug!));
  for (const [slug, row] of bySlug) {
    if (!srcSlugs.has(slug)) {
      fail(`slug ${slug} is on a row but not in the seed source: ${JSON.stringify(row.title)}`);
    }
  }

  console.log(`[titles-match] ${compared} title(s) compared`);
  if (compared === 0) {
    fail("nothing was compared — every source item failed to find its row, so this proved nothing");
  }

  if (failures.length > 0) {
    console.error(`\n[titles-match] 🔴 ${failures.length} disagreement(s) between the seed source and production:`);
    for (const f of failures.slice(0, 30)) console.error(`  ${f}`);
    if (failures.length > 30) console.error(`  …and ${failures.length - 30} more`);
    console.error(
      "\n  scripts/seed/append.ts is INSERT-ONLY and dedupes on (taskType, profession, title).\n" +
        "  A source title that no longer matches its row does not update it — the next seed\n" +
        "  INSERTS A SECOND ROW for an item that is already live.",
    );
    process.exit(1);
  }
  console.log("[titles-match] ✅ every source title matches the row it belongs to, and no row is unaccounted for");
} finally {
  await prisma.$disconnect();
}
