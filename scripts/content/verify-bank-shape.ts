/**
 * gate:bank-shape — IS EVERY ITEM IN THE BANK A FULL-LENGTH, MARKABLE OET ITEM?
 *
 *   npm run gate:bank-shape
 *
 * It reads GEN_ITEMS — all 1066 — and asks two different kinds of question, both
 * defined once in ./payload-shape.ts and shared with the applier:
 *
 *   STRUCTURAL   can the grader mark this at all? Every question carries an id,
 *                the ids are q1..qN in array order, every option carries an id,
 *                and the answer names one of them. A question with no id reads
 *                `answers[undefined]` -> "" -> marked WRONG, silently, forever.
 *
 *   EXAM SHAPE   is it the length and shape OET publishes? 4 texts and 20
 *                questions for Reading Part A, 12 gaps for Listening Part A, and
 *                so on, plus the Reading Part A matching lead-in, the Writing
 *                case-note bounds and the Speaking card and timings.
 *
 * ── AND ONE THING THAT IS NEITHER ───────────────────────────────────────────
 *
 * A LENGTH CUE. A key that is simply longer than every distractor can be picked
 * without reading the passage, which makes the item measure attention to
 * formatting rather than English. Both conditions must hold before it counts —
 * >= 8 characters longer than EVERY distractor AND >= 15% longer than the
 * longest — because either alone fires on honest items.
 *
 * 🔴 THIS GATE EXISTS BECAUSE THE BANK ONCE SHIPPED WITHOUT IT. On 6 September
 * 2026 a verified batch of 682 payloads arrived with 558 questions carrying no
 * `id`. Every gate in this repo was green on it: they count words, options and
 * markers, and none of them had ever been asked whether the grader could address
 * the question at all.
 */
import { GEN_ITEMS } from "../seed/gen/index";
import {
  structuralProblems,
  bankShapeProblems,
  lengthCue,
  type Payload,
} from "./payload-shape";

type Item = { slug?: string; title?: string; taskType: string; payload: Payload };
const ITEMS = GEN_ITEMS as unknown as Item[];

if (ITEMS.length === 0) {
  console.error("[gate:bank-shape] the seed source is empty — this gate would pass over nothing");
  process.exit(1);
}

const structural: string[] = [];
const shape: string[] = [];
const cues: string[] = [];
let mcq = 0;
const byTask = new Map<string, number>();

for (const item of ITEMS) {
  const slug = item.slug ?? `<no slug: ${item.title}>`;
  byTask.set(item.taskType, (byTask.get(item.taskType) ?? 0) + 1);
  structural.push(...structuralProblems(item.taskType, slug, item.payload));
  shape.push(...bankShapeProblems(item.taskType, slug, item.payload));

  // 🔴 EVERY QUESTION THAT OFFERS OPTIONS, NOT JUST THE FOUR MCQ TASK TYPES.
  //
  // Reading Part A's seven matching questions per item offer the four texts as
  // options, so they can carry a length cue exactly like a Part B stem can.
  // Counting only READING_PART_B/C and LISTENING_PART_B/C measures 738 of them
  // and calls that the bank; the real population is 1074, and the 336 it leaves
  // out are the ones a candidate meets first.
  for (const q of item.payload.questions ?? []) {
    if (!Array.isArray(q.options) || q.options.length === 0) continue;
    mcq += 1;
    const cue = lengthCue(q);
    if (cue) {
      cues.push(
        `${slug} ${q.id}: the key is ${cue.key} characters, the longest distractor ${cue.longestDistractor}`,
      );
    }
  }
}

console.log(`[gate:bank-shape] ${ITEMS.length} item(s) across ${byTask.size} task type(s)`);
for (const t of [...byTask.keys()].sort()) console.log(`    ${t.padEnd(20)} ${byTask.get(t)}`);
console.log(`[gate:bank-shape] ${mcq} multiple-choice question(s) measured for a length cue`);

// Population before the guard: 0 checked is not 0 found.
if (mcq === 0) {
  console.error("[gate:bank-shape] no multiple-choice question was measured — the length-cue half is vacuous");
  process.exit(1);
}

const report = (label: string, list: string[]) => {
  console.log(`[gate:bank-shape] ${label}: ${list.length}`);
  if (list.length === 0) return;
  console.error(`\n[gate:bank-shape] 🔴 ${label} (${list.length}):`);
  for (const l of list.slice(0, 40)) console.error(`    ${l}`);
  if (list.length > 40) console.error(`    …and ${list.length - 40} more`);
};

report("structural failures", structural);
report("exam-shape failures", shape);
report("length cues", cues);

if (structural.length + shape.length + cues.length > 0) process.exit(1);
console.log(
  `[gate:bank-shape] all clear — ${ITEMS.length} item(s) are markable and full length, ` +
    `and none of the ${mcq} multiple-choice questions can be answered on length alone`,
);
