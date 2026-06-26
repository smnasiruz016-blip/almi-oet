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
): TaskRunResult {
  // "match" answers are option/text ids (exact); "gap" answers are free text (lenient).
  return markObjective(
    payload.questions.map((q) => ({
      id: q.id,
      answer: q.answer,
      exact: q.kind === "match",
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
