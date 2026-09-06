/**
 * APPLY THE VERIFIED CONTENT OF 6 SEPTEMBER 2026 — 682 items, UPDATE ONLY.
 *
 *   npx tsx scripts/content/apply-verified-content-2026-09-06.ts C:\Projects\_handoffs --dry-run
 *   ALLOW_PROD_WRITE=1 npx tsx scripts/content/apply-verified-content-2026-09-06.ts C:\Projects\_handoffs --confirm
 *
 * ── 🔴 WHY NOT scripts/seed/append.ts ───────────────────────────────────────
 *
 * append.ts is INSERT-ONLY and dedupes on (taskType, profession, title) —
 * append.ts:56. Every one of these 682 slugs is already a row, so append.ts
 * would report success, insert nothing, and change nothing. It would look like
 * a completed content update and be a no-op on all 682.
 *
 * This script UPDATES, matched on `slug`, and writes `payload` AND NOTHING ELSE.
 * slug, taskType, profession, title, prompt, difficulty, topicTag,
 * timeLimitSeconds and active are never named in a `data` object here.
 *
 * ── WHAT IT REFUSES ─────────────────────────────────────────────────────────
 *
 * It refuses to write a payload that the grader could not mark. The shape rules
 * live in ./payload-shape.ts and are shared with verify-bank-shape.ts, so there
 * is one answer to "is this payload sound", not two.
 *
 * 🔴 AND THERE IS NO REPAIR FLAG, DELIBERATELY. The first version of this batch
 * arrived with 558 questions across 51 items carrying no `id`, which would have
 * marked every answer on those items wrong, silently. The fix belongs upstream,
 * in the files; a `--assign-question-ids` here would have made the applier a
 * second author of the content and hidden the next export defect instead of
 * stopping on it. The owner's ruling of 6 September 2026: the repair belongs
 * upstream, not in the applier.
 */
import "../load-env.mjs";
import { PrismaClient, Prisma } from "@prisma/client";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { structuralProblems, type Payload } from "./payload-shape";
import { requireProdWrite } from "../prod-write-guard";

const SCRIPT = "scripts/content/apply-verified-content-2026-09-06.ts";
const DRY = process.argv.includes("--dry-run");

/** The nine files and the row count each must carry. A file that has drifted is
 *  a file somebody re-exported without saying so. */
const FILES: [string, number][] = [
  ["AlmiOET_Forms_ALL_57_payloads_2026-09-06.json", 57],
  ["AlmiOET_ReadingPartA_15_short_items_2026-09-06.json", 15],
  ["AlmiOET_ReadingPartC_15_short_items_2026-09-06.json", 15],
  ["AlmiOET_ListeningPartA_15_short_items_2026-09-06.json", 15],
  ["AlmiOET_ListeningPartC_15_short_items_2026-09-06.json", 15],
  ["AlmiOET_Writing_dates_and_labels_2026-09-06.json", 169],
  ["AlmiOET_Writing_180_case_notes_2026-09-06.json", 180],
  ["AlmiOET_Speaking_180_cards_2026-09-06.json", 180],
  ["AlmiOET_final_corrections_2026-09-06.json", 36],
];
const TOTAL = 682;

type Row = { slug?: string; taskType?: string; payload?: Payload };

const die = (msg: string): never => {
  console.error(`\n[apply-content] 🔴 ${msg}\n`);
  process.exit(1);
};

const dir = process.argv[2];
if (!dir || dir.startsWith("--")) {
  die("give the directory holding the nine JSON files as the first argument");
}

/** Both shapes the exporter produces: `{ items: [...] }` and a bare array. */
function rowsOf(json: unknown, file: string): Row[] {
  if (Array.isArray(json)) return json as Row[];
  const items = (json as { items?: unknown } | null)?.items;
  if (Array.isArray(items)) return items as Row[];
  return die(`${file}: neither an array nor an object with an "items" array`);
}

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // ── 1 · read, count, and check the shape of every incoming payload ────────
  const perFile: { file: string; rows: Row[] }[] = [];
  const bySlug = new Map<string, { file: string; payload: Payload }>();
  const shape: string[] = [];

  for (const [file, want] of FILES) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(readFileSync(join(dir!, file), "utf8"));
    } catch (e) {
      die(`${file}: could not be read or parsed — ${(e as Error).message}`);
    }
    const rows = rowsOf(parsed, file);
    if (rows.length !== want) die(`${file}: ${rows.length} row(s), expected ${want}`);

    rows.forEach((r, i) => {
      const slug = r.slug ?? die(`${file} row ${i + 1}: no slug`);
      const payload = r.payload ?? die(`${file} row ${i + 1} (${slug}): no payload`);
      const prev = bySlug.get(slug);
      if (prev) die(`slug ${slug} appears in both ${prev.file} and ${file}`);
      bySlug.set(slug, { file, payload });
      // Extra keys ("form", "restyled", "note") are ignored entirely; only slug,
      // taskType and payload are read.
      if (r.taskType) shape.push(...structuralProblems(r.taskType, slug, payload));
    });
    perFile.push({ file, rows });
  }

  const rowTotal = perFile.reduce((a, f) => a + f.rows.length, 0);
  console.log(`[apply-content] ${rowTotal} row(s) across ${FILES.length} file(s) · ${bySlug.size} distinct slug(s)`);
  if (rowTotal !== TOTAL) die(`${rowTotal} rows, expected ${TOTAL}`);
  if (bySlug.size !== TOTAL) die(`${bySlug.size} distinct slugs, expected ${TOTAL}`);

  if (shape.length > 0) {
    console.error(`\n[apply-content] 🔴 ${shape.length} payload(s) the grader could not mark:`);
    for (const s of shape.slice(0, 30)) console.error(`    ${s}`);
    if (shape.length > 30) console.error(`    …and ${shape.length - 30} more`);
    die(
      "these are structural, not stylistic. Fix them in the source files — this script has no\n" +
        "  repair flag on purpose, because an applier that mends its input hides the next defect.",
    );
  }
  console.log(`[apply-content] shape: every incoming payload is markable (ids q1..qN, answers name an option)`);

  // ── 2 · every slug must already be a row. Nothing is inserted, ever ───────
  const rows = await prisma.oetItem.findMany({ select: { id: true, slug: true, payload: true } });
  const dbBySlug = new Map(rows.filter((r) => r.slug).map((r) => [r.slug!, r]));
  console.log(`[apply-content] database ${rows.length} row(s)`);

  const absent = [...bySlug.keys()].filter((s) => !dbBySlug.has(s));
  if (absent.length > 0) {
    console.error(`\n[apply-content] 🔴 ${absent.length} slug(s) are in the files but on no row:`);
    for (const s of absent.slice(0, 30)) console.error(`    ${s}  (${bySlug.get(s)!.file})`);
    die("this script is UPDATE-ONLY and inserts nothing. A missing row is a question, not a gap to fill.");
  }

  // ── 3 · the plan, per file ───────────────────────────────────────────────
  const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);
  const plan: { id: string; slug: string; payload: Payload }[] = [];
  console.log(`\n[apply-content] file                                        rows  changed  unchanged`);
  for (const { file, rows: rs } of perFile) {
    let changed = 0;
    for (const r of rs) {
      const row = dbBySlug.get(r.slug!)!;
      if (same(row.payload, r.payload)) continue;
      changed += 1;
      plan.push({ id: row.id, slug: r.slug!, payload: r.payload! });
    }
    console.log(
      `[apply-content] ${file.replace("AlmiOET_", "").replace("_2026-09-06.json", "").padEnd(42)} ` +
        `${String(rs.length).padStart(4)} ${String(changed).padStart(8)} ${String(rs.length - changed).padStart(10)}`,
    );
  }
  console.log(
    `[apply-content] ${"TOTAL".padEnd(42)} ${String(rowTotal).padStart(4)} ` +
      `${String(plan.length).padStart(8)} ${String(rowTotal - plan.length).padStart(10)}`,
  );

  if (plan.length === 0) {
    console.log("\n[apply-content] every payload already matches — nothing to write.");
    return;
  }
  if (DRY) {
    console.log(`\n[apply-content] --dry-run: no rows written. ${plan.length} row(s) would change.`);
    return;
  }

  // ── 4 · write. payload ONLY, in a transaction ────────────────────────────
  requireProdWrite(SCRIPT);

  const before = await prisma.oetItem.count();
  let written = 0;
  const SIZE = 50;
  for (let i = 0; i < plan.length; i += SIZE) {
    const chunk = plan.slice(i, i + SIZE);
    const res = await prisma.$transaction(
      chunk.map((p) =>
        prisma.oetItem.updateMany({
          where: { slug: p.slug },
          // 🔴 ONE FIELD. Naming any other column here would make this a content
          // edit nobody asked for.
          data: { payload: p.payload as Prisma.InputJsonValue },
        }),
      ),
    );
    written += res.reduce((a, r) => a + r.count, 0);
    console.log(`[apply-content]   ${Math.min(i + SIZE, plan.length)}/${plan.length}`);
  }

  const after = await prisma.oetItem.count();
  console.log(`\n[apply-content] updated ${written} row(s) of a planned ${plan.length}`);
  console.log(`[apply-content] OetItem rows before ${before}, after ${after}  (inserted ${after - before})`);
  if (written !== plan.length) die(`planned ${plan.length} and the database changed ${written}`);
  if (after !== before) die(`the row count moved by ${after - before} — this script inserts nothing`);

  // Read back, from the database, not from the plan.
  const check = await prisma.oetItem.findMany({
    where: { slug: { in: plan.map((p) => p.slug) } },
    select: { slug: true, payload: true },
  });
  const wrong = check.filter((r) => !same(r.payload, bySlug.get(r.slug!)!.payload));
  console.log(`[apply-content] read back ${check.length} row(s); ${wrong.length} still differ from the file`);
  if (wrong.length > 0) die(`${wrong.length} row(s) did not take the new payload`);
  console.log("[apply-content] ✅ every planned row now holds the payload its file carries");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect().catch(() => {});
    // 🔴 process.exit(1), not exitCode — see scripts/measure/blank-submit.mts.
    process.exit(1);
  });
