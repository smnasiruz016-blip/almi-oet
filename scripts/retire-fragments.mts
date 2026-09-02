/**
 * RETIRE (or RESTORE) NAMED ITEMS — a production write, and a reversible one.
 *
 * It sets `active = false` on `OetItem` rows named by `taskType + title`. It
 * NEVER deletes: a retired item keeps its rows, its attempts and its history,
 * and `--restore` puts it back in one command.
 *
 *   npx tsx scripts/retire-fragments.mts <list.json>              DRY RUN
 *   npx tsx scripts/retire-fragments.mts <list.json> --confirm    writes
 *   npx tsx scripts/retire-fragments.mts <list.json> --restore --confirm
 *
 * ── 🔴 IT WILL NOT WRITE WITHOUT --confirm ──────────────────────────────────
 *
 * Without it, the script connects, resolves every title, prints the exact rows
 * it WOULD touch, and exits without writing. That is the default because the
 * mistake this guards against — retiring the wrong titles, or retiring before
 * replacements are live — leaves a paying customer with an empty pool.
 *
 * ── WHY THE LIST IS A FILE AND NOT CODE ─────────────────────────────────────
 *
 * The titles come from a JSON argument so the list is reviewable in a diff, and
 * so running it twice with different lists needs no code change. The list for
 * the eighteen legacy Reading Part A items is checked in beside this script at
 * scripts/retire/reading-part-a-legacy.json.
 *
 * ── ORDER OF OPERATIONS (this is not optional) ──────────────────────────────
 *
 *   1. npm run seed:prod             inserts the 9 new Reading Part A items
 *   2. see them at /practice         with eyes, answerable
 *   3. this script --confirm         hides the 18 short ones
 *
 * Step 3 before step 2 would empty the Reading Part A pool for a paying
 * customer. The script refuses to help with that: before retiring it counts how
 * many ACTIVE items of each affected taskType would remain, and stops if that
 * count would fall below the fifteen-per-skill floor unless --below-floor is
 * passed deliberately.
 */
import { readFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";

type Row = { taskType: string; title: string };

const args = process.argv.slice(2);
const listPath = args.find((a) => !a.startsWith("--"));
const confirm = args.includes("--confirm");
const restore = args.includes("--restore");
const allowBelowFloor = args.includes("--below-floor");
const FLOOR = 15;

if (!listPath) {
  console.error(
    "usage: tsx scripts/retire-fragments.mts <list.json> [--restore] [--confirm] [--below-floor]",
  );
  process.exit(2);
}

const rows: Row[] = JSON.parse(readFileSync(listPath, "utf8"));
if (!Array.isArray(rows) || rows.length === 0) {
  console.error(`[retire] ${listPath} holds no rows — refusing to run`);
  process.exit(2);
}
for (const r of rows) {
  if (!r.taskType || !r.title) {
    console.error(`[retire] a row is missing taskType or title: ${JSON.stringify(r)}`);
    process.exit(2);
  }
}

const verb = restore ? "RESTORE" : "RETIRE";
const nextActive = restore;

const prisma = new PrismaClient();

async function main() {
  console.log(`[retire] ${verb} — ${rows.length} title(s) from ${listPath}`);
  console.log(`[retire] mode: ${confirm ? "🔴 WRITING (--confirm)" : "dry run (no --confirm)"}`);

  // Resolve every title first, so a typo is reported before anything is written.
  const found: { id: string; taskType: string; title: string; active: boolean }[] = [];
  const missing: Row[] = [];
  for (const r of rows) {
    const item = await prisma.oetItem.findFirst({
      where: { taskType: r.taskType as never, title: r.title },
      select: { id: true, taskType: true, title: true, active: true },
    });
    if (item) found.push(item);
    else missing.push(r);
  }

  console.log(`\n[retire] rows that WOULD be touched (${found.length}):`);
  for (const f of found) {
    const change = f.active === nextActive ? "already there" : `active ${f.active} -> ${nextActive}`;
    console.log(`   ${f.taskType}  ${f.title}  (${change})`);
  }
  if (missing.length > 0) {
    console.error(`\n[retire] ${missing.length} title(s) NOT FOUND in the database:`);
    for (const m of missing) console.error(`   ${m.taskType}  ${m.title}`);
    console.error("[retire] refusing to run: a list that does not match the bank is not reviewed.");
    process.exit(1);
  }

  // What would be left standing, per affected taskType.
  const affected = [...new Set(found.map((f) => f.taskType))];
  let wouldBreachFloor = false;
  console.log("");
  for (const taskType of affected) {
    const activeNow = await prisma.oetItem.count({ where: { taskType: taskType as never, active: true } });
    const delta = found.filter((f) => f.taskType === taskType && f.active !== nextActive).length;
    const after = restore ? activeNow + delta : activeNow - delta;
    const flag = after < FLOOR ? "  🔴 BELOW THE 15-PER-SKILL FLOOR" : "";
    console.log(`[retire] ${taskType}: ${activeNow} active now -> ${after} after${flag}`);
    if (after < FLOOR) wouldBreachFloor = true;
  }

  if (wouldBreachFloor && !allowBelowFloor) {
    console.error(
      "\n[retire] REFUSING: this would leave a sub-test below the fifteen-per-skill floor.\n" +
        "         Seed the replacements and SEE them at /practice first (step 2 of the\n" +
        "         order at the top of this file). Pass --below-floor only if that is\n" +
        "         genuinely what you mean.",
    );
    process.exit(1);
  }

  if (!confirm) {
    console.log(
      `\n[retire] DRY RUN — nothing was written. Re-run with --confirm to ${verb.toLowerCase()}.`,
    );
    return;
  }

  // One transaction: either every named row moves or none does.
  const ids = found.filter((f) => f.active !== nextActive).map((f) => f.id);
  const result = await prisma.$transaction(async (tx) => {
    return tx.oetItem.updateMany({ where: { id: { in: ids } }, data: { active: nextActive } });
  });
  console.log(`\n[retire] ${verb} complete — ${result.count} row(s) updated, 0 deleted.`);
  console.log(
    `[retire] to undo: npx tsx scripts/retire-fragments.mts ${listPath} ` +
      `${restore ? "" : "--restore "}--confirm`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
