/**
 * THE SPEAKING PROMPT SAYS TWO MINUTES. OET GIVES THREE. FIX THE LIVE ROWS.
 *
 * ── WHY A SCRIPT AND NOT A SEED ─────────────────────────────────────────────
 *
 * `scripts/seed/append.ts` is INSERT-ONLY. It dedupes on
 * (taskType, profession, title) and skips anything already present, which is what
 * makes re-seeding safe — and which means correcting the seed source changes
 * NOTHING for a learner. All 180 Speaking rows are already in production. Only
 * an UPDATE reaches them.
 *
 * ── WHAT WENT WRONG ─────────────────────────────────────────────────────────
 *
 * On 4 September the preparation time was corrected from 120 to 180 seconds:
 * exam-shape.ts, the payload on all 360 rows, gate:exam-numbers, and the clock
 * on screen. Every gate went green.
 *
 * The owner then opened a Speaking item and read, two lines under a clock
 * counting 02:57:
 *
 *     "Read your role-play card. You have two minutes to prepare…"
 *
 * The number was right in every place a number lives. The SENTENCE was wrong on
 * all 180 live items, because nothing read the items' own words.
 *
 * ── WHAT THIS TOUCHES, AND WHAT IT REFUSES TO ───────────────────────────────
 *
 *   · only taskType = SPEAKING_ROLEPLAY
 *   · only rows whose `prompt` contains "two minutes to prepare"
 *   · inside that prompt, only the word "two" in that phrase
 *   · `payload` is NOT touched. prepSeconds is already 180 and correct, and
 *     gate:exam-numbers holds it. Rewriting a payload to fix a prompt is how a
 *     one-word repair turns into a content incident.
 *
 * Idempotent by construction: after a successful run no row matches the pattern,
 * so a second run reports 0 and writes nothing.
 *
 * ── RUNNING IT ──────────────────────────────────────────────────────────────
 *
 * Dry run (writes nothing, and is the default):
 *
 *     npx tsx scripts/seed/update-speaking-prompt.mts
 *
 * The real write needs BOTH of prod-write-guard's conditions. The command is
 * deliberately not written here in runnable form — see docs/content-repairs.md
 * and the rule in scripts/prod-write-guard.ts.
 *
 *     --confirm on the command line, and ALLOW_PROD_WRITE=1 in the environment
 *
 * `--restore` runs it backwards (three -> two). It exists so the change is
 * reversible and has NOT been run.
 */
import "../load-env.mjs";
import { PrismaClient } from "@prisma/client";
import { requireProdWrite } from "../prod-write-guard";

const FROM = "two minutes to prepare";
const TO = "three minutes to prepare";
const TASK_TYPE = "SPEAKING_ROLEPLAY";

const restore = process.argv.includes("--restore");
const confirm = process.argv.includes("--confirm");
const [needle, replacement] = restore ? [TO, FROM] : [FROM, TO];

async function main(): Promise<void> {
  const prisma = new PrismaClient();
  try {
    // ── the population, before any guard ────────────────────────────────────
    const all = await prisma.oetItem.findMany({
      where: { taskType: TASK_TYPE as never },
      select: { id: true, title: true, prompt: true, active: true },
    });
    const hits = all.filter((r) => (r.prompt ?? "").includes(needle));

    console.log(
      `[update-speaking-prompt] ${restore ? "RESTORE" : "REPAIR"} — ${needle} -> ${replacement}`,
    );
    console.log(
      `  ${TASK_TYPE} rows: ${all.length} (${all.filter((r) => r.active).length} active) · matching: ${hits.length}`,
    );

    // A repair over an empty population is not a success. Say which it is.
    if (hits.length === 0) {
      console.log(
        "  Nothing to change — no row carries that phrase. If this is the FIRST run,\n" +
          "  the pattern is wrong and nothing was checked; if it is a re-run, this is\n" +
          "  the expected idempotent result.",
      );
      return;
    }

    // 🔴 A row may carry the phrase more than once. Count occurrences, not rows,
    // so "180 rows" can never quietly mean "180 rows and 187 sentences".
    const occurrences = hits.reduce(
      (n, r) => n + (r.prompt ?? "").split(needle).length - 1,
      0,
    );
    console.log(`  occurrences of the phrase across those rows: ${occurrences}`);
    if (occurrences !== hits.length) {
      console.log(
        `  ⚠ ${occurrences} occurrence(s) over ${hits.length} row(s) — at least one row says it twice.`,
      );
    }

    for (const r of hits.slice(0, 3)) {
      console.log(`    e.g. ${r.title}`);
    }
    if (hits.length > 3) console.log(`    …and ${hits.length - 3} more`);

    if (!confirm) {
      console.log(
        `\n  DRY RUN — nothing was written. ${hits.length} row(s) would be updated.\n` +
          "  Re-run with --confirm AND ALLOW_PROD_WRITE=1 to write.",
      );
      return;
    }

    // Both conditions, immediately before the first write, never at import time.
    requireProdWrite("scripts/seed/update-speaking-prompt.mts");

    let updated = 0;
    for (const r of hits) {
      const next = (r.prompt ?? "").split(needle).join(replacement);
      if (next === r.prompt) continue;
      await prisma.oetItem.update({ where: { id: r.id }, data: { prompt: next } });
      updated += 1;
    }

    // Read back rather than trusting the loop counter.
    const after = await prisma.oetItem.findMany({
      where: { taskType: TASK_TYPE as never },
      select: { prompt: true },
    });
    const stillWrong = after.filter((r) => (r.prompt ?? "").includes(needle)).length;
    const nowRight = after.filter((r) => (r.prompt ?? "").includes(replacement)).length;

    console.log(`\n  UPDATE complete — ${updated} row(s) updated.`);
    console.log(`  read back: ${nowRight} row(s) now say "${replacement}", ${stillWrong} still say "${needle}"`);
    if (stillWrong !== 0) {
      console.error("  🔴 some rows were not changed — do not report this as done.");
      process.exitCode = 1;
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error("[update-speaking-prompt] failed:", e);
  process.exit(1);
});
