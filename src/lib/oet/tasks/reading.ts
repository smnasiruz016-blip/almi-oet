// READING (common to all professions, deterministic).
//
// Part A — expeditious reading: skim four short texts on one topic, answer
//          matching and gap-fill questions against the clock.
// Part B — short workplace texts, one MCQ each.
// Part C — two longer texts, several MCQ each on detail, meaning and opinion.
//
// Answer keys inside the payload are stripped server-side before the payload
// reaches the client.

import { z } from "zod";
import type { TaskRunResult } from "@/lib/oet/registry";
import {
  markObjective,
  objectiveResponseSchema,
  type AnswerKey,
} from "@/lib/oet/tasks/objective";
import { readingAcceptFor } from "@/lib/oet/accept-lists";

export { objectiveResponseSchema };

const mcqOptionSchema = z.object({ id: z.string(), text: z.string() });

const mcqQuestionSchema = z.object({
  id: z.string(),
  stem: z.string(),
  options: z.array(mcqOptionSchema),
  answer: z.string(),
  /**
   * What a Reading Part C question is ABOUT. Applied to the 168 four-option
   * items on 4 September 2026 from the marker data file; the 78 legacy
   * three-option questions carry none, deliberately.
   *
   *   reference  — the question asks what a word or phrase POINTS TO
   *   writer     — the answer is the writer's own position: opinion, concession,
   *                objection, suggestion, or a change of mind
   *   paragraph  — the answer is the CONTENT of a particular paragraph
   *
   * An ARRAY, because one question can legitimately be two of these at once.
   *
   * ⚠️ NOT THE SAME FIELD AS READING PART A's `kind`, which is a STRING
   * ("match" | "gap") and says how a question is ANSWERED. Same name, from the
   * 3 September ruling; nothing else in common. Optional here because Part B
   * shares this schema and carries no markers.
   */
  kind: z.array(z.enum(["paragraph", "reference", "writer"])).optional(),
});

/**
 * ⚠️ THE THREE QUESTION TYPES A CANDIDATE SEES ARE TWO STORED `kind`s.
 * OET Part A asks 1-7 by matching, 8-14 as short answers, and 15-20 as sentence
 * completions. Only `match` and `gap` exist here: a short answer and a sentence
 * completion are BOTH `gap`, told apart only by whether the stem prints a blank.
 * That is not a defect and nothing depends on the difference today — but a rule
 * written "for short answers" would have nothing in the data to attach to, and
 * would silently cover the completions as well. Noted 3 September 2026.
 */
export const readingPartAPayloadSchema = z.object({
  texts: z.array(z.object({ id: z.string(), heading: z.string(), body: z.string() })),
  questions: z.array(
    z.object({
      id: z.string(),
      kind: z.enum(["match", "gap"]),
      stem: z.string(),
      options: z.array(mcqOptionSchema).optional(),
      answer: z.string(),
      // Additional accepted wordings for a `gap` answer — see markObjective.
      variants: z.array(z.string()).optional(),
    }),
  ),
});
export type ReadingPartAPayload = z.infer<typeof readingPartAPayloadSchema>;

export const readingMcqPayloadSchema = z.object({
  passages: z.array(z.object({ id: z.string(), body: z.string() })),
  questions: z.array(mcqQuestionSchema),
});
export type ReadingMcqPayload = z.infer<typeof readingMcqPayloadSchema>;

/**
 * THE READING PART A ANSWER KEY — built once, used by the grader AND the review.
 *
 * It is exported for that second caller. The review screen used to decide for
 * itself what "correct" meant and got a different answer from the grader on 688
 * of the bank's 882 accepted answers; both now mark against THIS key, through
 * isAnswerCorrect(). See the header of objective.ts.
 */
export function readingPartAAnswerKey(
  payload: ReadingPartAPayload,
  /** The item's title, for the authored accept-lists. See listeningPartAAnswerKey. */
  title?: string,
): AnswerKey[] {
  // "match" answers are option/text ids (exact); "gap" answers are free text (lenient).
  return payload.questions.map((q) => ({
    id: q.id,
    answer: q.answer,
    exact: q.kind === "match",
    // 🔴 The overlay is keyed by the question's own `answer`, not by its stem:
    // Reading stems are long sentences and copying them into the accept-list
    // file would be a transcription error waiting to happen. It is applied to
    // free-text questions only — a "match" answer is an id, and leniency has
    // no business there.
    variants:
      q.kind === "match"
        ? q.variants
        : [...(q.variants ?? []), ...readingAcceptFor(title, q.answer)],
  }));
}

export function readingMcqAnswerKey(payload: ReadingMcqPayload): AnswerKey[] {
  return payload.questions.map((q) => ({ id: q.id, answer: q.answer, exact: true }));
}

export function scoreReadingPartA(
  payload: ReadingPartAPayload,
  response: z.infer<typeof objectiveResponseSchema>,
  title?: string,
): TaskRunResult {
  return markObjective(readingPartAAnswerKey(payload, title), response);
}

export function scoreReadingMcq(
  payload: ReadingMcqPayload,
  response: z.infer<typeof objectiveResponseSchema>,
): TaskRunResult {
  return markObjective(readingMcqAnswerKey(payload), response);
}
