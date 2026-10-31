/**
 * TAG THE ITEMS OF MOCK FORMS 4–10 IN PRODUCTION — the `form` column ONLY, BY SLUG, ONLY WHERE IT IS STILL EMPTY.
 *
 *   npx tsx scripts/content/tag-forms-2026-11-01.ts                       DRY RUN (default)
 *   ALLOW_PROD_WRITE=1 npx tsx scripts/content/tag-forms-2026-11-01.ts --confirm
 *
 * The list is scripts/content/forms-4-10-2026-11-01.json: [{ slug, taskType, form }] — 133 rows, 19 per form, drawn
 * from active items that already have audio and explanations (beta-g PASS, 1 Nov 2026). Practice keeps them too: the
 * practice pool has no form filter, the same as forms 1–3.
 *
 * ── WHY "ONLY WHERE EMPTY" ──────────────────────────────────────────────────
 * prisma/schema.prisma: `slug` and `form` are WRITTEN ONCE, THEN IMMUTABLE. These rows have never had a form, so this
 * is that one write. A row that already carries ANY form — the same one or another — is never written: the same one
 * is reported and skipped (a re-run writes nothing), a different one stops the whole run.
 *
 * ── WHAT IT REFUSES (before any write) ──────────────────────────────────────
 *   1  a slug matching no row, or more than one
 *   2  a row whose taskType differs from the list
 *   3  a row that already carries a DIFFERENT form
 *   4  a row that is not active (a form of retired rows cannot start — form-completeness.ts counts active rows)
 *   5  a list row whose form the seed source does not carry for that slug (source and database must agree)
 *   6  a list that is not 19 items for each of form-4 … form-10
 * Afterwards every written row is read back; any that differs fails the run.
 */
import "../load-env.mjs";
import { readFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";
import { GEN_ITEMS } from "../seed/gen/index";
import { requireProdWrite } from "../prod-write-guard";

const SCRIPT = "scripts/content/tag-forms-2026-11-01.ts";
const LIST = "scripts/content/forms-4-10-2026-11-01.json";
const FORMS = ["form-4", "form-5", "form-6", "form-7", "form-8", "form-9", "form-10"];
const CONFIRM = process.argv.includes("--confirm");
type Row = { slug: string; taskType: string; form: string };
const rows = JSON.parse(readFileSync(LIST, "utf8")) as Row[];
const prisma = new PrismaClient();

async function main() {
  const stops: string[] = [];
  for (const f of FORMS) {
    const n = rows.filter((r) => r.form === f).length;
    if (n !== 19) stops.push(`6  ${f}: ${n} row(s) in the list, expected 19`);
  }
  if (rows.length !== 133 || new Set(rows.map((r) => r.slug)).size !== 133) stops.push(`6  the list holds ${rows.length} row(s), expected 133 distinct slugs`);
  const plan: { id: string; slug: string; form: string }[] = [];
  let already = 0;
  for (const r of rows) {
    const src = (GEN_ITEMS as { slug?: string | null; form?: string | null }[]).find((i) => i.slug === r.slug);
    if (!src || src.form !== r.form) stops.push(`5  ${r.slug}: the seed source does not carry ${r.form}`);
    const found = await prisma.oetItem.findMany({ where: { slug: r.slug }, select: { id: true, taskType: true, form: true, active: true } });
    if (found.length !== 1) { stops.push(`1  ${r.slug}: ${found.length} row(s)`); continue; }
    const row = found[0];
    if (row.taskType !== r.taskType) { stops.push(`2  ${r.slug}: taskType ${row.taskType}, list says ${r.taskType}`); continue; }
    if (row.form === r.form) { already++; continue; }
    if (row.form !== null) { stops.push(`3  ${r.slug}: already carries ${row.form}`); continue; }
    if (!row.active) { stops.push(`4  ${r.slug}: not active`); continue; }
    plan.push({ id: row.id, slug: r.slug, form: r.form });
  }
  if (stops.length) { console.error(`[forms] REFUSING — ${stops.length} stop(s):\n  ${stops.join("\n  ")}`); process.exit(1); }
  for (const f of FORMS) console.log(`[forms] ${f}: ${plan.filter((p) => p.form === f).length} to tag`);
  console.log(`[forms] already tagged, skipped: ${already}`);
  if (!CONFIRM) { console.log(`\n[forms] dry run: NOTHING WRITTEN. ${plan.length} row(s) would get a form.`); return; }
  requireProdWrite(SCRIPT);
  // The empty-form condition is in the WHERE as well, so a row tagged between the read and the write is not overwritten.
  const res = await prisma.$transaction(plan.map((p) => prisma.oetItem.updateMany({ where: { id: p.id, form: null }, data: { form: p.form } })));
  const written = res.reduce((a, r) => a + r.count, 0);
  const back = await prisma.oetItem.findMany({ where: { id: { in: plan.map((p) => p.id) } }, select: { id: true, form: true } });
  const wrong = plan.filter((p) => back.find((b) => b.id === p.id)?.form !== p.form);
  console.log(`[forms] wrote ${written} of ${plan.length}; read back ${back.length}; ${wrong.length} differ`);
  if (written !== plan.length || wrong.length) process.exit(1);
}
main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
