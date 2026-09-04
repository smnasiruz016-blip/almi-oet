/**
 * gate:wraps — A SENTENCE MAY NOT BE CUT IN HALF BY A LINE BREAK.
 *
 * ── WHY THIS GATE EXISTS ────────────────────────────────────────────────────
 *
 * On 4 September 2026 the owner opened a Speaking role-play on a phone and every
 * paragraph of the task card was split in two, mid-sentence:
 *
 *     Find out when she stopped, whether she reduced the dose or stopped
 *                                    <- rendered as a paragraph break
 *     altogether, and how she has felt in the three weeks since.
 *
 * All 360 new Writing and Speaking items were affected. They had been authored
 * in markdown wrapped by hand at ~100 characters, the breaks travelled into the
 * payload, and the composer renders `whitespace-pre-wrap`.
 *
 * 🔴 NOT ONE GATE COULD HAVE CAUGHT IT, and the reason is worth keeping. Every
 * length gate in this repo counts words, and `words()` treats a newline and a
 * space identically — the counts are the same either way. Only the SHAPE
 * changed, and no count measures shape. It was the third time that day that
 * everything was green and the page was still wrong, and the third time an eye
 * found it rather than a check.
 *
 * So this gate measures shape. It reads the same `isWrapBreak` the repair used —
 * scripts/wrap-rule.ts — so the gate and the fix cannot disagree about what a
 * wrap is. That mattered: while the measurement had its own looser copy it
 * reported 7,245 wraps remaining after the repair had removed every one it was
 * asked to.
 *
 * ── WHAT IT CHECKS ──────────────────────────────────────────────────────────
 *
 * Every authored prose field in the seed source, for a break where the line ran
 * to the author's wrap column and its sentence is unfinished. Paragraph breaks,
 * labelled fields ("Patient:", "The injury:") and bullets are structure and are
 * left alone — see wrap-rule.ts for the twelve lines that settled that boundary.
 *
 * NO DEBT LIST. Every one of the 360 was repaired in production and in the seed
 * source on the day this gate was written, so there is nothing to exempt and
 * nothing to grow. A list here would be an excuse looking for a use.
 */
import { GEN_ITEMS } from "../seed/gen/index";
import { isWrapBreak } from "../wrap-rule";

/** Every field that holds prose a candidate reads. */
const FIELDS: Record<string, string[]> = {
  WRITING_LETTER: ["caseNotes", "taskInstruction"],
  SPEAKING_ROLEPLAY: ["setting", "candidateRole", "patientRole", "candidateCard"],
  LISTENING_PART_A: ["audioScript"],
  LISTENING_PART_B: ["audioScript"],
  LISTENING_PART_C: ["audioScript"],
};

type Item = { taskType: string; title: string; payload: Record<string, unknown> };

const failures: string[] = [];
let fieldsRead = 0;
let breaksSeen = 0;

for (const item of GEN_ITEMS as unknown as Item[]) {
  const fields = FIELDS[item.taskType];
  if (!fields) continue;
  for (const f of fields) {
    const text = item.payload?.[f];
    if (typeof text !== "string" || text === "") continue;
    fieldsRead += 1;
    const lines = text.replace(/\r\n/g, "\n").split("\n");
    for (let i = 0; i < lines.length - 1; i++) {
      if (!isWrapBreak(lines[i], lines[i + 1])) continue;
      breaksSeen += 1;
      if (failures.length < 25) {
        failures.push(
          `${item.taskType}::${item.title} · payload.${f}\n` +
            `      "…${lines[i].slice(-60)}"\n` +
            `   +  "${lines[i + 1].slice(0, 60)}…"`,
        );
      }
    }
  }
}

// A gate over nothing passes vacuously. Say so instead.
if (fieldsRead === 0) {
  console.error("[gate:wraps] no prose field was read — this gate would pass over nothing");
  process.exit(1);
}

console.log(`[gate:wraps] ${fieldsRead} prose field(s) read across ${Object.keys(FIELDS).length} task type(s)`);
if (breaksSeen > 0) {
  console.error(`\n[gate:wraps] ${breaksSeen} sentence(s) cut in half by a line break:`);
  for (const f of failures) console.error(`  ${f}`);
  if (breaksSeen > failures.length) console.error(`  …and ${breaksSeen - failures.length} more`);
  console.error(
    "\n[gate:wraps] The author's editor wrapped these; the reader's screen shows the wrap.\n" +
      "             Fix them at the SOURCE and re-run the builder — scripts/wrap-rule.ts\n" +
      "             carries the rule, and scripts/fix-hard-wraps.mts repairs live rows.",
  );
  process.exit(1);
}
console.log("[gate:wraps] all clear — no sentence is broken by a line break");
