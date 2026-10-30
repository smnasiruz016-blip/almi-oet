/**
 * RENAME NAMED ITEMS' TITLES IN PRODUCTION — `title` ONLY, BY SLUG. A deliberate, separately reviewed rename
 * (apply-verified-content-2026-09-08.ts never writes `title`, on purpose).
 *
 *   npx tsx scripts/content/rename-titles-2026-10-31.ts                       DRY RUN (default)
 *   ALLOW_PROD_WRITE=1 npx tsx scripts/content/rename-titles-2026-10-31.ts --confirm
 *
 * The list is scripts/content/rename-titles-2026-10-31.json: [{ slug, taskType, from, to, why }].
 *
 * ── WHY IT MUST RUN RIGHT AFTER THE SEED SOURCE CHANGES ─────────────────────
 * scripts/seed/append.ts is insert-only and dedupes on (taskType, profession, title). While the source says `to`
 * and the row still says `from`, a seed would INSERT A DUPLICATE (scripts/check-titles-match-prod.mts says so).
 * Running this closes that window; `npm run check:titles-match-prod` afterwards proves it.
 *
 * ── WHAT IT REFUSES (before any write) ──────────────────────────────────────
 *   1  a slug matching no row, or more than one
 *   2  a row whose taskType differs from the list
 *   3  a row whose title is neither `from` nor `to` (somebody else changed it — look first)
 *   4  `to` already used by ANOTHER row of the same taskType + profession (append.ts would then see a clash)
 *   5  a `to` that is not the title the seed source now carries for that slug
 * A row already at `to` is reported and skipped, so a re-run writes nothing.
 */
import "../load-env.mjs";
import { readFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";
import { GEN_ITEMS } from "../seed/gen/index";
import { requireProdWrite } from "../prod-write-guard";

const SCRIPT = "scripts/content/rename-titles-2026-10-31.ts";
const LIST = "scripts/content/rename-titles-2026-10-31.json";
const CONFIRM = process.argv.includes("--confirm");
type Row = { slug: string; taskType: string; from: string; to: string; why: string };
const rows = JSON.parse(readFileSync(LIST, "utf8")) as Row[];
const prisma = new PrismaClient();

async function main() {
  const plan: { id: string; slug: string; from: string; to: string }[] = [];
  const stops: string[] = [];
  for (const r of rows) {
    const src = GEN_ITEMS.find((i) => i.slug === r.slug);
    if (!src || src.title !== r.to) stops.push(`5  ${r.slug}: the seed source does not carry the new title`);
    const found = await prisma.oetItem.findMany({ where: { slug: r.slug }, select: { id: true, taskType: true, profession: true, title: true } });
    if (found.length !== 1) { stops.push(`1  ${r.slug}: ${found.length} row(s)`); continue; }
    const row = found[0];
    if (row.taskType !== r.taskType) { stops.push(`2  ${r.slug}: taskType ${row.taskType}, list says ${r.taskType}`); continue; }
    if (row.title === r.to) { console.log(`[rename] already renamed, skipped: ${r.slug}`); continue; }
    if (row.title !== r.from) { stops.push(`3  ${r.slug}: current title is neither the old nor the new one — look first`); continue; }
    const clash = await prisma.oetItem.count({ where: { taskType: row.taskType, profession: row.profession, title: r.to, NOT: { id: row.id } } });
    if (clash) { stops.push(`4  ${r.slug}: another row already has the new title`); continue; }
    plan.push({ id: row.id, slug: r.slug, from: r.from, to: r.to });
  }
  if (stops.length) { console.error(`[rename] REFUSING — ${stops.length} stop(s):\n  ${stops.join("\n  ")}`); process.exit(1); }
  for (const p of plan) console.log(`[rename] ${p.slug}\n   from: ${p.from}\n   to:   ${p.to}`);
  if (!CONFIRM) { console.log(`\n[rename] dry run: NOTHING WRITTEN. ${plan.length} title(s) would change.`); return; }
  requireProdWrite(SCRIPT);
  await prisma.$transaction(plan.map((p) => prisma.oetItem.update({ where: { id: p.id }, data: { title: p.to } })));
  const back = await prisma.oetItem.findMany({ where: { id: { in: plan.map((p) => p.id) } }, select: { id: true, title: true } });
  const wrong = plan.filter((p) => back.find((b) => b.id === p.id)?.title !== p.to);
  console.log(`[rename] updated ${plan.length} title(s); read back ${back.length}; ${wrong.length} still differ`);
  if (wrong.length) process.exit(1);
}
main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
