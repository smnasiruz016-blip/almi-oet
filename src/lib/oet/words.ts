/**
 * 🔴 THE ONE PLACE THIS PROJECT DECIDES WHAT A WORD IS — FOR THE GATES AND FOR
 * THE STUDENT, WHICH UNTIL 7 SEPTEMBER 2026 WERE TWO DIFFERENT ANSWERS.
 *
 * Split on whitespace, then keep only the tokens carrying a letter or a digit.
 * "—" alone is dropped; "-" alone is dropped; "mid-sentence", "1:1000", "92%",
 * "4.5" and "18" are all words.
 *
 * ── WHAT WAS WRONG, AND WHO PAID FOR IT ─────────────────────────────────────
 *
 * This repo held ELEVEN implementations of "what is a word". Measured, they
 * disagreed on 4 of 7 probes, and the disagreement reduced to exactly one class:
 * A WHITESPACE TOKEN CARRYING NEITHER A LETTER NOR A DIGIT — a bare em dash, a
 * bullet, a lone bracket, a lone slash, an ellipsis, a middot. Everything else —
 * hyphenated words, numerals, decimals, apostrophes, quoted words, brackets
 * attached to a word — they already agreed on.
 *
 * The gates counted one way and `wordCount()` counted the other, and
 * `wordCount()` is the one that MARKS THE LEARNER'S LETTER against OET's
 * 180-200 guide. So the bank was measured by one definition and the student by
 * another.
 *
 * 🔴 THE OWNER'S RULING, 7 SEPTEMBER 2026:
 *
 *     A TOKEN WITH NO LETTER AND NO DIGIT IS NOT A WORD.
 *
 * and the reason he gave is the student, not the tidiness:
 *
 *     "A learner who writes 198 real words and uses three dashes is shown 201
 *     and told they exceeded a 200-word limit they did not exceed. An
 *     over-counting word counter invents a penalty."
 *
 * ── EVERY COUNTER NOW COMES HERE ────────────────────────────────────────────
 *
 * scripts/gates/words.ts · writing-letter.ts (the letter's mark AND the number
 * the AI grader is told) · speaking-roleplay.ts · substance.ts · the on-screen
 * counter in OetComposer. One definition, one answer.
 *
 * ⚠️ IT LIVES IN src/, NOT IN scripts/. The shipped code cannot import from a
 * gate — and a gate is a script that RUNS when imported, which is what pushed
 * the old copy of this rule into eleven places to begin with.
 *
 * ── THE SEAM ────────────────────────────────────────────────────────────────
 *
 * This is deliberately ONE FUNCTION with one caller-facing shape, so that when
 * the word service lands the tokeniser behind it changes and no call site does.
 * `Intl.Segmenter` will replace the whitespace split here; the RULING above is
 * policy and stays whatever the tokeniser becomes.
 */
export function words(s: string | undefined | null): number {
  if (typeof s !== "string") return 0;
  return (s.match(/[^\s]+/g) ?? []).filter((t) => /[A-Za-z0-9]/.test(t)).length;
}
