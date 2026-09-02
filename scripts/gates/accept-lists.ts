/**
 * gate:accept-lists — THE ACCEPT LISTS ACTUALLY REACH THE ANSWERS THEY NAME.
 *
 * The accept-lists in src/lib/oet/accept-lists.ts are a code-side overlay keyed
 * by item title and, inside that, by gap label (Listening) or by the question's
 * own answer (Reading). Every one of those keys is a string typed by hand
 * against content that lives somewhere else. A key that matches nothing is not
 * an error at runtime — it is SILENCE: the lookup returns an empty array, the
 * gap keeps whatever it had, and a candidate who wrote a right answer is still
 * marked wrong. Nobody would ever find out.
 *
 * So: A KEY THAT MATCHES NOTHING FAILS THE BUILD. This gate runs inside
 * `gate:all`, which runs inside `npm run build`. It reads scripts/seed/gen and
 * the overlay; it opens no database and needs no credential.
 *
 * ── WHAT IT CHECKS ──────────────────────────────────────────────────────────
 *
 *   A1 every overlay title exists in the seed source
 *   A2 every Listening gap label exists on that item
 *   A3 every Reading key matches EXACTLY ONE question's `answer` on that item
 *   A4 coverage: every free-text answer in the bank HAS an accept-list
 *   A5 the original answer is accepted
 *   A6 every authored variant is accepted
 *   A7 "the " + the answer is accepted, and so is the digit/word counterpart
 *   A8 a deliberately WRONG answer is refused  ← without this the gate is
 *      unfalsifiable: a normaliser that returned "" would pass A5–A7 perfectly
 *   A9 `400 mg` is refused on the folic-acid gap
 *
 * ── HOW IT WAS SEEN RED ─────────────────────────────────────────────────────
 *
 * The article rule was removed from normalize() — the two `while` loops that
 * drop a leading hedge and a leading article. A7 fell over, naming the gap and
 * the answer it could no longer accept. Restored; the output is in the PR body.
 *
 * ── 🔴 WHERE THE EXPECTED VALUES COME FROM ──────────────────────────────────
 *
 * A5–A7 build their inputs from the SEED (the answer) and from the OVERLAY (the
 * variants) and push them through the real markObjective. A8 and A9 use
 * hand-typed literals, because the whole point of a refusal case is that it is
 * not derived from the thing being tested.
 */
import { GEN_ITEMS } from "../seed/gen/index";
import {
  LISTENING_PART_A_ACCEPT,
  READING_PART_A_ACCEPT,
  listeningAcceptFor,
  readingAcceptFor,
} from "../../src/lib/oet/accept-lists";
import { markObjective } from "../../src/lib/oet/tasks/objective";

type Gap = { id: string; label: string; answer: string; variants?: string[] };
type ReadingQ = { id: string; kind: string; stem: string; answer: string; variants?: string[] };
type Item = { taskType: string; title: string; payload: { gaps?: Gap[]; questions?: ReadingQ[] } };

const ITEMS = GEN_ITEMS as unknown as Item[];
const LISTENING = ITEMS.filter((i) => i.taskType === "LISTENING_PART_A");
const READING = ITEMS.filter((i) => i.taskType === "READING_PART_A");

const failures: string[] = [];
const fail = (check: string, msg: string) => failures.push(`${check}  ${msg}`);

/** Would `markObjective` accept `given` for this key? The REAL marker, so this
 *  gate cannot drift from what a candidate actually experiences. */
function accepts(answer: string, variants: readonly string[], given: string): boolean {
  const res = markObjective(
    [{ id: "q", answer, variants: [...variants] }],
    { answers: { q: given } },
  );
  return res.pointsEarned === 1;
}

// ── population, before any guard ────────────────────────────────────────────
if (LISTENING.length === 0) fail("A0", "no LISTENING_PART_A items in the seed source");
if (READING.length === 0) fail("A0", "no READING_PART_A items in the seed source");

const listeningByTitle = new Map(LISTENING.map((i) => [i.title, i]));
const readingByTitle = new Map(READING.map((i) => [i.title, i]));

// ── A1 · every overlay title exists ─────────────────────────────────────────
for (const title of Object.keys(LISTENING_PART_A_ACCEPT)) {
  if (!listeningByTitle.has(title)) {
    fail("A1", `Listening accept-list names an item that does not exist: "${title}"`);
  }
}
for (const title of Object.keys(READING_PART_A_ACCEPT)) {
  if (!readingByTitle.has(title)) {
    fail("A1", `Reading accept-list names an item that does not exist: "${title}"`);
  }
}

// ── A2 · every Listening label exists on its item ───────────────────────────
for (const [title, labels] of Object.entries(LISTENING_PART_A_ACCEPT)) {
  const item = listeningByTitle.get(title);
  if (!item) continue; // already reported by A1
  const known = new Set((item.payload.gaps ?? []).map((g) => g.label));
  for (const label of Object.keys(labels)) {
    if (!known.has(label)) {
      fail("A2", `"${title}" has no gap labelled "${label}"`);
    }
  }
}

// ── A3 · every Reading key matches exactly one question's answer ────────────
for (const [title, keys] of Object.entries(READING_PART_A_ACCEPT)) {
  const item = readingByTitle.get(title);
  if (!item) continue;
  const free = (item.payload.questions ?? []).filter((q) => q.kind !== "match");
  for (const key of Object.keys(keys)) {
    const hits = free.filter((q) => q.answer === key);
    if (hits.length !== 1) {
      fail(
        "A3",
        `"${title}" has ${hits.length} free-text questions whose answer is exactly "${key}" (need 1)`,
      );
    }
  }
}

// ── A4 · coverage — no free-text answer without an accept-list ──────────────
//
// The handoff states the bank is fully covered: 146 Listening gaps and 54
// Reading free-text answers, 200 in all. Asserting it means a NEW item cannot
// ship without its accept-list — which is the discipline, not an accident.
let listeningGaps = 0;
for (const item of LISTENING) {
  for (const gap of item.payload.gaps ?? []) {
    listeningGaps += 1;
    if (listeningAcceptFor(item.title, gap.label).length === 0) {
      fail("A4", `no accept-list for "${item.title}" → "${gap.label}"`);
    }
  }
}
let readingFree = 0;
for (const item of READING) {
  for (const q of (item.payload.questions ?? []).filter((x) => x.kind !== "match")) {
    readingFree += 1;
    if (readingAcceptFor(item.title, q.answer).length === 0) {
      fail("A4", `no accept-list for "${item.title}" → answer "${q.answer}"`);
    }
  }
}

// ── A5-A7 · the marking actually accepts what it should ────────────────────
type Case = { where: string; answer: string; variants: readonly string[] };
const CASES: Case[] = [];
for (const item of LISTENING) {
  for (const gap of item.payload.gaps ?? []) {
    CASES.push({
      where: `${item.title} → ${gap.label}`,
      answer: gap.answer,
      variants: [...(gap.variants ?? []), ...listeningAcceptFor(item.title, gap.label)],
    });
  }
}
for (const item of READING) {
  for (const q of (item.payload.questions ?? []).filter((x) => x.kind !== "match")) {
    CASES.push({
      where: `${item.title} → "${q.answer}"`,
      answer: q.answer,
      variants: [...(q.variants ?? []), ...readingAcceptFor(item.title, q.answer)],
    });
  }
}

/** Digit ↔ word, for A7. Hand-typed here rather than imported from normalize(),
 *  so the gate does not agree with the mapping under test. */
const WORD_FOR: Record<string, string> = {
  "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six",
  "7": "seven", "8": "eight", "9": "nine", "10": "ten", "12": "twelve",
  "18": "eighteen", "28": "twenty-eight", "50": "fifty",
};
const DIGIT_FOR: Record<string, string> = Object.fromEntries(
  Object.entries(WORD_FOR).map(([d, w]) => [w, d]),
);

let numericChecked = 0;
for (const c of CASES) {
  // A5 · the authored answer itself.
  if (!accepts(c.answer, c.variants, c.answer)) {
    fail("A5", `${c.where}: the item's own answer "${c.answer}" is not accepted`);
  }
  // A6 · every variant.
  for (const v of c.variants) {
    if (!accepts(c.answer, c.variants, v)) {
      fail("A6", `${c.where}: authored variant "${v}" is not accepted`);
    }
  }
  // A7a · "the " + answer.
  if (!accepts(c.answer, c.variants, `the ${c.answer}`)) {
    fail("A7", `${c.where}: "the ${c.answer}" is not accepted`);
  }
  // A7b · the digit/word counterpart, where the answer opens with one.
  const first = c.answer.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  const swapped = WORD_FOR[first] ?? DIGIT_FOR[first];
  if (swapped) {
    const rest = c.answer.trim().split(/\s+/).slice(1).join(" ");
    const alt = rest ? `${swapped} ${rest}` : swapped;
    numericChecked += 1;
    if (!accepts(c.answer, c.variants, alt)) {
      fail("A7", `${c.where}: numeric counterpart "${alt}" is not accepted`);
    }
  }
}
if (numericChecked === 0) {
  fail("A7", "no answer in the bank starts with a number — the numeric check was vacuous");
}

// ── A8 · a wrong answer is REFUSED, or none of the above means anything ────
const REFUSALS: { where: string; answer: string; variants: readonly string[]; given: string }[] = [
  // Hand-typed. Each is a plausible thing a candidate might write that is wrong.
  { where: "generic", answer: "dog", variants: [], given: "cat" },
  { where: "generic", answer: "three weeks", variants: [], given: "four weeks" },
  { where: "generic", answer: "ibuprofen", variants: [], given: "paracetamol" },
  // 🔴 THE HEDGES THAT ARE MEANING, NOT WORDING.
  { where: "hedge", answer: "under 5", variants: [], given: "over 5" },
  { where: "hedge", answer: "at least 50 hours", variants: [], given: "50 hours or fewer" },
  { where: "hedge", answer: "more than 20", variants: [], given: "less than 20" },
  // 🔴 The line the handoff drew deliberately: the word was never said.
  { where: "migraine", answer: "flashing lines", variants: ["lines"], given: "flashing lights" },
  { where: "urinary", answer: "stings", variants: ["stinging"], given: "burning" },
];
for (const r of REFUSALS) {
  if (accepts(r.answer, r.variants, r.given)) {
    fail("A8", `${r.where}: "${r.given}" was ACCEPTED for "${r.answer}" — it must not be`);
  }
}

// ── A9 · the dose that must never be forgiven ──────────────────────────────
const FOLIC_TITLE = "OET Form 3 · Listening Part A — Midwife antenatal booking visit";
const FOLIC_LABEL = "Folic acid dose:";
const folicItem = listeningByTitle.get(FOLIC_TITLE);
const folicGap = folicItem?.payload.gaps?.find((g) => g.label === FOLIC_LABEL);
if (!folicGap) {
  // Population before the guard: if this gap is ever renamed, the check below
  // would silently test nothing.
  fail("A9", `the folic-acid gap ("${FOLIC_TITLE}" → "${FOLIC_LABEL}") was not found`);
} else {
  const variants = [
    ...(folicGap.variants ?? []),
    ...listeningAcceptFor(FOLIC_TITLE, FOLIC_LABEL),
  ];
  for (const wrong of ["400 mg", "400mg", "400 milligrams", "400 mgs"]) {
    if (accepts(folicGap.answer, variants, wrong)) {
      fail("A9", `"${wrong}" was ACCEPTED for the folic acid dose — that is a 1000× dose`);
    }
  }
  // The control: the real answer and the authored variants still work, so a
  // normaliser that refused everything could not pass A9 by accident.
  if (!accepts(folicGap.answer, variants, "400 micrograms")) {
    fail("A9", "the folic-acid gap no longer accepts its own answer");
  }
  if (!accepts(folicGap.answer, variants, "400 mcg")) {
    fail("A9", "the folic-acid gap no longer accepts \"400 mcg\"");
  }
}

// ── report ─────────────────────────────────────────────────────────────────
console.log(
  `[gate:accept-lists] ${LISTENING.length} Listening Part A item(s), ${listeningGaps} gap(s); ` +
    `${READING.length} Reading Part A item(s), ${readingFree} free-text answer(s); ` +
    `${CASES.length} answer(s) checked, ${numericChecked} with a numeric counterpart`,
);
for (const check of ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"]) {
  const hits = failures.filter((f) => f.startsWith(check));
  console.log(`  ${hits.length === 0 ? "PASS" : "FAIL"}  ${check}${hits.length ? ` (${hits.length})` : ""}`);
}
if (failures.length > 0) {
  console.error(`\n[gate:accept-lists] ${failures.length} failure(s):`);
  for (const f of failures.slice(0, 60)) console.error(`  ${f}`);
  if (failures.length > 60) console.error(`  …and ${failures.length - 60} more`);
  process.exit(1);
}
console.log("[gate:accept-lists] all clear");
