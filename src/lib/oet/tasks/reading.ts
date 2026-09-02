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
import { markObjective, objectiveResponseSchema } from "@/lib/oet/tasks/objective";
import { readingAcceptFor } from "@/lib/oet/accept-lists";

export { objectiveResponseSchema };

const mcqOptionSchema = z.object({ id: z.string(), text: z.string() });

const mcqQuestionSchema = z.object({
  id: z.string(),
  stem: z.string(),
  options: z.array(mcqOptionSchema),
  answer: z.string(),
});

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

export function scoreReadingPartA(
  payload: ReadingPartAPayload,
  response: z.infer<typeof objectiveResponseSchema>,
  /** The item's title, for the authored accept-lists. See scoreListeningPartA. */
  title?: string,
): TaskRunResult {
  // "match" answers are option/text ids (exact); "gap" answers are free text (lenient).
  return markObjective(
    payload.questions.map((q) => ({
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
    })),
    response,
  );
}

export function scoreReadingMcq(
  payload: ReadingMcqPayload,
  response: z.infer<typeof objectiveResponseSchema>,
): TaskRunResult {
  return markObjective(
    payload.questions.map((q) => ({ id: q.id, answer: q.answer, exact: true })),
    response,
  );
}
