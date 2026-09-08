/**
 * gate:prompt-shape — A PROMPT PROMISES NUMBERS. THE ITEM MUST KEEP THEM.
 *
 * An item's prompt is what the learner reads before they answer. When it says
 * "answer questions 1–8" and "(a, b, c or d)", it has made two promises about
 * the item underneath it: how many questions there are, and how many options
 * each carries. Nothing checked either until 8 September 2026.
 *
 * ── THE DEFECT THAT PUT THIS HERE (GAP-046) ────────────────────────────────
 *
 * Six Reading Part C rows carried
 *
 *     "Read the text and answer questions 1-8. Choose the answer (A, B or C) which fits best."
 *
 * while offering FOUR options. On reactivation they would have told a learner
 * there were three answers to choose from and then shown four. The row's own
 * prompt is what renders — src/app/(app)/practice/session/[sessionId]/page.tsx:231,
 * `prompt={current.item.prompt}` — and registry.ts carries no prompt at all, so
 * there was no second copy to disagree with and no check to notice.
 *
 * ⚠️ AND THE SAME DEFECT POINTS BOTH WAYS. The first instinct was to give all
 * twenty-one Reading Part C items without the standard prompt the standard
 * prompt. Measured, fifteen of them are two questions of three options in the
 * DATABASE: that prompt would have promised eight questions and four options on
 * an item that has two and three — the same lie, fifteen times, in the opposite
 * direction. So this gate checks the QUESTION COUNT as well as the letters. A
 * prompt promising eight questions on a two-question item is the same defect.
 *
 * ── 🔴 WHAT THIS GATE CANNOT SEE, AND SAYING SO IS THE POINT ───────────────
 *
 * IT READS GEN_ITEMS. IT CAN NEVER SEE DATABASE-SIDE DRIFT.
 *
 * `prompt` and the questions both live in the seed source, which is why a gate
 * can compare them at all — that is this check's whole opportunity. But runtime
 * serves the DATABASE, and the database is free to disagree with the source: it
 * did for these six for weeks, and it still does for fifteen others, whose rows
 * hold two questions of three options while gen/ holds eight of four.
 *
 * So a green here means THE SOURCE IS CONSISTENT WITH ITSELF. It does not mean
 * a learner is shown a true prompt. Nothing in the gate suite reads the database
 * except gate:title-collision, and that reads titles. The next person will
 * assume this covers both unless the file says otherwise, so the file says
 * otherwise.
 *
 * ── THE TWO CHECKS ─────────────────────────────────────────────────────────
 *
 *   P1  a prompt naming question RANGES ("questions 1–8"; or "1–7" and "8–20"
 *       together) must account for exactly the answers the item has — every one
 *       of them, and no more.
 *   P2  a prompt naming OPTION LETTERS ("(a, b, c or d)", "(A, B or C)") must
 *       name as many as every question actually offers.
 *
 * A prompt that names neither is not checked: plenty are legitimately silent
 * about shape ("You will hear part of a presentation…"), and inventing a rule
 * that every prompt must state its numbers would be a style opinion, not a
 * defect. What is checked is that a prompt which DOES make a promise keeps it.
 *
 * The rule itself lives in scripts/prompt-shape-rule.ts so a test can drive it
 * without running this gate — see tests/gates-can-fail.test.ts.
 */
import { GEN_ITEMS } from "../seed/gen/index";
import {
  optionCountBreach,
  questionCountBreach,
  statedOptionCount,
  statedQuestionNumbers,
} from "../prompt-shape-rule";

type Item = {
  slug: string;
  taskType: string;
  prompt?: string;
  payload?: { questions?: { options?: unknown[] }[]; gaps?: unknown[] };
};

const failures: string[] = [];
const fail = (gate: string, msg: string) => failures.push(`${gate}  ${msg}`);

const items = GEN_ITEMS as unknown as Item[];
if (items.length === 0) fail("P1", "GEN_ITEMS is empty — this gate would pass over nothing");

let checkedQ = 0;
let checkedO = 0;
let silent = 0;

for (const it of items) {
  const prompt = it.prompt ?? "";
  const saysQ = statedQuestionNumbers(prompt) !== null;
  const saysO = statedOptionCount(prompt) !== null;

  if (!saysQ && !saysO) {
    silent += 1;
    continue;
  }

  if (saysQ) {
    checkedQ += 1;
    const b = questionCountBreach(prompt, it.payload);
    if (b) {
      fail(
        "P1",
        `${it.slug} — the prompt accounts for question(s) ${b.said[0]}-${b.said[b.said.length - 1]} ` +
          `(${b.said.length} of them), the item has ${b.have}`,
      );
    }
  }

  if (saysO) {
    checkedO += 1;
    const b = optionCountBreach(prompt, it.payload);
    if (b) {
      fail(
        "P2",
        b.offered.length === 0
          ? `${it.slug} — the prompt names ${b.said} option(s) but the item has no questions`
          : `${it.slug} — the prompt says ${b.said} option(s), questions offer ${b.offered.join("/")}`,
      );
    }
  }
}

console.log(
  `[gate:prompt-shape] ${items.length} item(s) · ${checkedQ} prompt(s) state a question count · ` +
    `${checkedO} state an option count · ${silent} state neither and are not checked`,
);
console.log("  🔴 READS GEN_ITEMS. A green here means the SOURCE agrees with itself; it cannot");
console.log("     see the database, and the database has disagreed before. See this file's header.");

for (const g of ["P1 question count", "P2 option count"]) {
  const hits = failures.filter((f) => f.startsWith(g.slice(0, 2)));
  console.log(`  ${hits.length === 0 ? "PASS" : "FAIL"}  ${g}${hits.length ? ` (${hits.length})` : ""}`);
}

if (failures.length > 0) {
  console.error(`\n[gate:prompt-shape] ${failures.length} breach(es):`);
  for (const f of failures) console.error(`  ${f}`);
  console.error("\n[gate:prompt-shape] BUILD BLOCKED.");
  process.exit(1);
}
console.log("[gate:prompt-shape] all clear — every prompt that promises a number keeps it");
