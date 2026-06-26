// LISTENING (common to all professions, deterministic).
//
// Part A — note completion (gap fill) over two consultation extracts.
// Part B — six short workplace extracts, one MCQ each.
// Part C — two longer presentations/interviews, several MCQ each.
//
// Audio is generated on demand from `audioScript` (see src/lib/ai/openai.ts) and
// plays once. The answer keys inside the payload are stripped server-side before
// the payload reaches the client.

import { z } from "zod";
import type { TaskRunResult } from "@/lib/oet/registry";
import { markObjective, objectiveResponseSchema } from "@/lib/oet/tasks/objective";

export { objectiveResponseSchema };

const speakerSchema = z.object({ role: z.string(), voice: z.string() });

const mcqQuestionSchema = z.object({
  id: z.string(),
  stem: z.string(),
  options: z.array(z.object({ id: z.string(), text: z.string() })),
  answer: z.string(),
});

export const listeningPartAPayloadSchema = z.object({
  audioScript: z.string(),
  speakers: z.array(speakerSchema),
  gaps: z.array(z.object({ id: z.string(), label: z.string(), answer: z.string() })),
});
export type ListeningPartAPayload = z.infer<typeof listeningPartAPayloadSchema>;

export const listeningMcqPayloadSchema = z.object({
  audioScript: z.string(),
  speakers: z.array(speakerSchema),
  questions: z.array(mcqQuestionSchema),
});
export type ListeningMcqPayload = z.infer<typeof listeningMcqPayloadSchema>;

export function scoreListeningPartA(
  payload: ListeningPartAPayload,
  response: z.infer<typeof objectiveResponseSchema>,
): TaskRunResult {
  return markObjective(
    payload.gaps.map((g) => ({ id: g.id, answer: g.answer })),
    response,
  );
}

export function scoreListeningMcq(
  payload: ListeningMcqPayload,
  response: z.infer<typeof objectiveResponseSchema>,
): TaskRunResult {
  return markObjective(
    payload.questions.map((q) => ({ id: q.id, answer: q.answer, exact: true })),
    response,
  );
}
