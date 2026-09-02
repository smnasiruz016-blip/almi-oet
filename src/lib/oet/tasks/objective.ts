// Shared deterministic marking for the objective sub-tests (Listening + Reading).
// Both sub-tests reduce to "count correct answers out of total"; the fraction is
// correct/total, which the scale layer turns into an honest 0–500 estimate.

import { z } from "zod";
import type { TaskRunResult } from "@/lib/oet/registry";

// The user's answers, keyed by question/gap id. MCQ → option id (string);
// gap fill / matching → typed text or selected id (string).
export const objectiveResponseSchema = z.object({
  answers: z.record(z.string(), z.union([z.string(), z.array(z.string())])),
});
export type ObjectiveResponse = z.infer<typeof objectiveResponseSchema>;

// ── NORMALISING A FREE-TEXT ANSWER ──────────────────────────────────────────
//
// The old rule was: trim, lowercase, collapse spaces, strip punctuation FROM THE
// END ONLY. Measured against the bank on 1 September 2026, that marked a
// candidate who had heard everything correctly WRONG for writing "the dog"
// instead of "dog", "toast" instead of "white toast", "biscuit" for "biscuits",
// or "3 weeks" where the key said "three weeks". 127 of 146 Listening Part A
// gaps and 39 of 54 Reading Part A gaps had no accept-list at all, so the
// normaliser was the only thing standing between a right answer and a zero.
//
// The seven rules below are Nasir's, from the handoff of 1 September 2026. They
// are spelling leniency, and nothing else.
//
// 🔴 WHAT IS NEVER STRIPPED, BECAUSE IT IS MEANING AND NOT WORDING:
//
//     over · under · more than · less than · at least · at most ·
//     no more than · fewer
//
// "under 5" and "over 5" are not the same answer. Those words are the answer.
// A leading "about"/"around" IS stripped — it is a hedge on a number, not a
// direction — and that asymmetry is the whole distinction.
//
// 🔴 AND IT NEVER TOUCHES A UNIT. `400 micrograms` and `400 mg` stay different
// strings under every rule here; that is a thousand-fold dose and no amount of
// leniency may bridge it. scripts/gates/accept-lists.ts asserts it directly.
//
// 🔴 FREE TEXT ONLY. markObjective applies this to non-`exact` keys. MCQ and
// matching answers are option ids and are still compared with a plain trim.

/** Leading hedges on a quantity. Dropped only at the START of an answer. */
const LEADING_APPROXIMATORS = new Set([
  "about",
  "approximately",
  "around",
  "roughly",
  "nearly",
  "almost",
]);

/** Leading articles. Dropped only at the START — "the level of the bladder"
 *  keeps its inner "the", because dropping every article would start merging
 *  answers that differ. */
const LEADING_ARTICLES = new Set(["a", "an", "the"]);

const NUMBER_WORDS: Record<string, number> = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
  eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13,
  fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18,
  nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60,
  seventy: 70, eighty: 80, ninety: 90, hundred: 100,
};

/** Trailing plural leniency: "biscuit" = "biscuits", "bowel" = "bowels".
 *  Deliberately conservative — a word ending in "ss" keeps it (so "less" is
 *  never turned into "les"), and "-es" is only dropped after a sibilant, so
 *  "glasses" becomes "glass" while "toes" becomes "toe" rather than "to". */
function depluralise(word: string): string {
  if (word.length <= 3) return word;
  if (word.endsWith("ss")) return word;
  if (/(s|x|z|ch|sh)es$/.test(word)) return word.slice(0, -2);
  if (word.endsWith("s")) return word.slice(0, -1);
  return word;
}

/**
 * Canonical form of a free-text answer. Two answers are the same answer when
 * their canonical forms are identical.
 *
 * ⚠️ KNOWN LIMIT, stated rather than discovered later: number words are folded
 * left to right with two compound cases ("<n> hundred" and "<tens> <unit>").
 * Anything longer — "one hundred and twenty" — is mapped token by token and
 * will not equal "120". It is applied to BOTH sides, so it can only ever cost a
 * match that an authored variant then covers; it cannot create a false accept.
 */
export function normalize(s: string): string {
  return normalizeTokens(s).join("");
}

/**
 * The same pipeline as normalize(), stopping one step earlier — before the
 * spaces are dropped. Exported so gate:accept-lists check A11 can ask "does this
 * WORD appear in the audio script" using the marker's own rules rather than a
 * second, slightly different, copy of them.
 */
export function normalizeTokens(s: string): string[] {
  let t = String(s ?? "").toLowerCase();

  // (6) symbols that are words. Done BEFORE punctuation is stripped, or the
  // symbol itself would be deleted and the meaning with it.
  t = t.replace(/%/g, " percent ").replace(/&/g, " and ");

  // (4) hyphens (and any dash) read as spaces: "hot-water" = "hot water".
  t = t.replace(/[-\u2010-\u2015]/g, " ");

  // (1) ALL punctuation, not only trailing. "Two sugars." = "two sugars".
  //     Kept: letters, digits, whitespace and "/" (7/10 is written that way).
  t = t.replace(/[^a-z0-9\s/]/g, " ");

  let tokens = t.split(/\s+/).filter(Boolean);

  // (7) then (2): a leading hedge, then a leading article. Both, and in that
  //     order, so "about the three weeks" reduces the same way "the three
  //     weeks" does.
  while (tokens.length > 1 && LEADING_APPROXIMATORS.has(tokens[0])) tokens = tokens.slice(1);
  while (tokens.length > 1 && LEADING_ARTICLES.has(tokens[0])) tokens = tokens.slice(1);

  // (6) "per cent" is two tokens; "percent" is one.
  const joined: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "per" && tokens[i + 1] === "cent") {
      joined.push("percent");
      i += 1;
      continue;
    }
    joined.push(tokens[i]);
  }
  tokens = joined;

  // (3) number words become digits, so "three weeks" = "3 weeks".
  //     Two compounds are folded, because both appear in the bank and a
  //     candidate writing the digits is not making a mistake:
  //       "<n> hundred"      four hundred      -> 400
  //       "<tens> <unit>"    twenty eight      -> 28   (hyphen already a space)
  //     gate:accept-lists caught the second one: the Antenatal item's answer is
  //     "twenty-eight weeks" and "28 weeks" was being marked wrong.
  const numbered: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const value = NUMBER_WORDS[tokens[i]];
    if (value === undefined) {
      numbered.push(tokens[i]);
      continue;
    }
    if (value < 100 && tokens[i + 1] === "hundred") {
      numbered.push(String(value * 100));
      i += 1;
      continue;
    }
    const next = NUMBER_WORDS[tokens[i + 1]];
    if (value >= 20 && value <= 90 && value % 10 === 0 && next !== undefined && next >= 1 && next <= 9) {
      numbered.push(String(value + next));
      i += 1;
      continue;
    }
    numbered.push(String(value));
  }
  tokens = numbered;

  // (5) plural leniency, per token.
  tokens = tokens.map(depluralise);

  // (4, continued) the caller joins these with no separator, which is what
  // makes "hotwater bottle" equal to "hot water bottle". Dropping the spaces is
  // LAST, so every rule above still had words to work on.
  return tokens;
}

/**
 * Pull one learner answer out of a stored response.
 *
 * EXPORTED because the review screen needs the same string the grader marked.
 * It used to read the response itself, with its own array handling; two readers
 * of one shape is the same class of mistake as two comparers of one answer.
 */
export function answerFor(response: unknown, id: string): string {
  const answers = (response as { answers?: Record<string, unknown> } | null)?.answers ?? {};
  const v = answers[id];
  if (Array.isArray(v)) return String(v[0] ?? "");
  return v == null ? "" : String(v);
}

/** `variants` are ADDITIONAL accepted answers, marked identically to `answer`.
 *  A note-completion gap often has more than one legitimate wording of the same
 *  heard phrase ("moving boxes" / "lifting boxes"), and marking one of them wrong
 *  penalises a candidate for the authoring, not for the listening. */
export type AnswerKey = { id: string; answer: string; exact?: boolean; variants?: string[] };

/**
 * 🔴 THE ONE PLACE A GIVEN ANSWER IS COMPARED TO A KEY. There is no second one,
 * and adding one is the defect this function exists to prevent.
 *
 * Measured on 3 September 2026: `src/lib/oet/review.ts` carried its OWN
 * comparison — trim, lowercase, collapse spaces, strip trailing punctuation —
 * against `q.answer` alone. It never read `variants`, never merged the
 * accept-list overlay, and applied none of the seven leniency rules above. On
 * one result screen, at one moment, a learner saw:
 *
 *     4 / 20 practice points          ← this file, the score
 *     Answer review · 3/20 correct     ← review.ts, the screen
 *
 * 688 of the 882 authored accepted answers in the bank were scored right and
 * shown wrong. A wrong score is a wrong number; that TEACHES THE MISTAKE — a
 * learner who wrote "five minutes" and reads "✗ Correct: 5 minutes" corrects
 * themselves away from a correct answer.
 *
 * So the verdict lives here and callers ask it. Anything that wants to know
 * whether an answer is right imports this; nothing reimplements it.
 */
export function isAnswerCorrect(key: AnswerKey, given: string): boolean {
  const accepted = [key.answer, ...(key.variants ?? [])];
  return key.exact
    ? accepted.some((a) => given.trim() === a.trim())
    : accepted.some((a) => normalize(given) === normalize(a));
}

/** Mark a set of answers against a key. `exact` items (MCQ/matching by id) must
 *  match exactly; the rest use lenient normalised comparison (gap fill). Any
 *  declared variant is accepted on the same terms as the primary answer. */
export function markObjective(
  key: AnswerKey[],
  response: ObjectiveResponse,
): TaskRunResult {
  let correct = 0;
  const detail: { id: string; correct: boolean }[] = [];
  for (const k of key) {
    const ok = isAnswerCorrect(k, answerFor(response, k.id));
    if (ok) correct += 1;
    detail.push({ id: k.id, correct: ok });
  }
  const total = key.length || 1;
  return {
    pointsEarned: correct,
    pointsMax: key.length,
    fraction: correct / total,
    detail,
  };
}
