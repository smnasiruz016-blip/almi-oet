/**
 * gate:exam-numbers — A NUMBER THAT BELONGS TO THE EXAM MAY NOT BE CHANGED QUIETLY.
 *
 * ── WHY THIS GATE EXISTS ────────────────────────────────────────────────────
 *
 * On 4 September 2026 every one of the 180 live Speaking items carried
 * `prepSeconds: 120`, and the screen told the candidate, in OET's name:
 *
 *     "OET gives you 02:00 to prepare for each role-play."
 *     "in the real OET — you get 2 minutes to prepare and there is no skip."
 *
 * OET gives three minutes. The two sentences were not badly written; they were
 * correct copy printing a wrong number, because both read the payload.
 *
 * 🔴 AND THE NUMBER WAS NOT UNSOURCED — WHICH IS THE WORSE VERSION. The repo
 * already cited an OET page saying "2-3 minutes to prepare for each", and 120 is
 * the BOTTOM OF THAT RANGE. Somebody read a range and shipped its minimum as a
 * fact. A newer OET page states one figure and states it four times:
 *
 *   "Before each role play, you are given a role card and three minutes to
 *    prepare."
 *   "the three-minute preparation time before each role play"
 *   "cover all essential points within the five-minute role play"
 *   — oet.com/post/did-you-know-the-oet-speaking-test-gives-you-three-
 *     preparation-minutes, 14 November 2024, read 2026-09-04
 *
 * Corroborated by arithmetic, so this is not merely the newer page winning:
 * 2 role plays x (3 prep + 5 speak) = 16 minutes plus the introduction, which
 * lands on OET's own "approximately 20 minutes" for the sub-test. At two minutes
 * it is 14, which that figure does not fit.
 *
 * ── WHAT IT CHECKS, AND WHY IT IS A GATE AND NOT A COMMENT ──────────────────
 *
 * Every SPEAKING_ROLEPLAY item's `prepSeconds` and `speakSeconds` against the
 * cited constants in src/lib/oet/exam-shape.ts — the same TIMING the composer
 * falls back to, so the gate and the screen cannot hold different numbers.
 *
 * This is the kind of check the project did not have: a value that is the
 * EXAM'S, that nobody may change without changing a cited constant, and that
 * cannot drift item by item. `gate:timing` proves a published timing REACHES the
 * page; this proves the timing in the items IS the published one.
 *
 * NO DEBT LIST. All 360 rows were corrected in production and in the seed source
 * on the day this was written, retired ones included — a retired item can come
 * back under the retirement ratchet and must carry the right number when it does.
 */
import { GEN_ITEMS } from "../seed/gen/index";
import { TIMING, TIMING_SOURCES } from "../../src/lib/oet/exam-shape";

type Item = { taskType: string; title: string; payload: Record<string, unknown> };

const EXPECT: { field: string; value: number; why: string }[] = [
  {
    field: "prepSeconds",
    value: TIMING.speakingPrepSecondsMin,
    why: TIMING_SOURCES.speaking,
  },
  {
    field: "speakSeconds",
    value: TIMING.speakingSpeakSeconds,
    why: 'OET: "cover all essential points within the five-minute role play" — same page',
  },
];

const failures: string[] = [];
let checked = 0;

for (const item of GEN_ITEMS as unknown as Item[]) {
  if (item.taskType !== "SPEAKING_ROLEPLAY") continue;
  checked += 1;
  for (const e of EXPECT) {
    const got = item.payload?.[e.field];
    if (got !== e.value) {
      failures.push(`${item.title} — ${e.field} is ${JSON.stringify(got)}, OET's figure is ${e.value}`);
    }
  }
}

// A gate over an empty population passes vacuously. Say so instead.
if (checked === 0) {
  console.error("[gate:exam-numbers] no SPEAKING_ROLEPLAY item was read — this gate would pass over nothing");
  process.exit(1);
}

console.log(`[gate:exam-numbers] ${checked} Speaking item(s) x ${EXPECT.length} exam figure(s)`);
console.log(`  prepSeconds  ${TIMING.speakingPrepSecondsMin}s · speakSeconds ${TIMING.speakingSpeakSeconds}s`);
if (failures.length > 0) {
  console.error(`\n[gate:exam-numbers] ${failures.length} item(s) do not carry OET's own figure:`);
  for (const f of failures.slice(0, 20)) console.error(`  ${f}`);
  if (failures.length > 20) console.error(`  …and ${failures.length - 20} more`);
  console.error(`\n  Source of record:\n    ${TIMING_SOURCES.speaking}`);
  console.error(
    "\n  These are the EXAM'S numbers, not ours. If OET changes one, change the cited\n" +
      "  constant in src/lib/oet/exam-shape.ts with its citation and its date — never\n" +
      "  the item, and never this gate.",
  );
  process.exit(1);
}
console.log("[gate:exam-numbers] all clear — every Speaking item carries OET's published timings");
