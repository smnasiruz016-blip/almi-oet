/**
 * THE THREE TRAIT LEVELS AND WHAT EACH ONE IS WORTH. ONE DEFINITION.
 *
 * Both AI-graded task types read a rater's qualitative level per criterion and
 * average the numbers below into a 0..1 fraction. Until 10 September 2026 the
 * list and the numbers existed TWICE — writing-letter.ts and
 * speaking-roleplay.ts each carried their own copy, identical by luck rather
 * than by construction.
 *
 * 🔴 WHY THAT IS A DEFECT AND NOT A TIDYING NOTE. src/lib/oet/audio.ts says it
 * in its own header, about the audio key: a rule with two copies is a rule that
 * drifts, and the drift is SILENT — nothing errors, nothing goes red, the two
 * halves simply stop agreeing. Here the failure would be worse than silent: it
 * would be invisible AND scoring. Change `adequate` in one file to tune a
 * Writing complaint and Speaking keeps the old number; the same trait profile
 * then means two different things depending on which exercise a learner opened,
 * and every gate stays green because no gate compares the two files.
 *
 * ⚠️ THESE NUMBERS ARE THE SCALE. They are not a rubric knob. The rubric — what
 * earns "strong" rather than "adequate" — lives in each evaluator's system
 * prompt, and that is the thing to change when grading is too kind or too harsh.
 * Moving a number here moves EVERY past comparison with it, on both skills at
 * once, and it re-bands answers nobody re-graded.
 *
 * Measured 10 September 2026: these values reproduce all six control runs
 * (WEAK / MID / STRONG × Writing / Speaking) exactly — points and band. A model
 * with `limited: 0.2` reproduced only three of the six.
 */

/** The levels a rater may return, in descending order. */
export const TRAIT_LEVELS = ["strong", "adequate", "limited"] as const;

export type TraitLevel = (typeof TRAIT_LEVELS)[number];

/** What each level contributes to the 0..1 fraction. */
export const TRAIT_LEVEL_VALUE: Record<TraitLevel, number> = {
  strong: 1.0,
  adequate: 0.6,
  limited: 0.3,
};
