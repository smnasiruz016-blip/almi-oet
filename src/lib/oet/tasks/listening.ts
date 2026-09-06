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
import {
  markObjective,
  objectiveResponseSchema,
  type AnswerKey,
} from "@/lib/oet/tasks/objective";
import { listeningAcceptFor } from "@/lib/oet/accept-lists";

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
  gaps: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      answer: z.string(),
      // Additional accepted wordings of the same heard phrase — see markObjective.
      variants: z.array(z.string()).optional(),
    }),
  ),
});
export type ListeningPartAPayload = z.infer<typeof listeningPartAPayloadSchema>;

export const listeningMcqPayloadSchema = z.object({
  audioScript: z.string(),
  speakers: z.array(speakerSchema),
  questions: z.array(mcqQuestionSchema),
});
export type ListeningMcqPayload = z.infer<typeof listeningMcqPayloadSchema>;

/**
 * THE LISTENING PART A ANSWER KEY — built once, used by the grader AND the
 * review. See readingPartAAnswerKey and the header of objective.ts for why the
 * review is not allowed to build its own.
 */
export function listeningPartAAnswerKey(
  payload: ListeningPartAPayload,
  /** The item's SLUG. Used ONLY to look up the authored accept-lists; when it
   *  is absent the marking falls back to the payload's own variants, which is
   *  what happened before the overlay existed. */
  slug?: string,
): AnswerKey[] {
  return payload.gaps.map((g) => ({
    id: g.id,
    answer: g.answer,
    // The overlay is MERGED with whatever the payload already carried, never
    // substituted for it — a variant authored into the seed keeps working.
    variants: [...(g.variants ?? []), ...listeningAcceptFor(slug, g.label)],
  }));
}

export function listeningMcqAnswerKey(payload: ListeningMcqPayload): AnswerKey[] {
  return payload.questions.map((q) => ({ id: q.id, answer: q.answer, exact: true }));
}

export function scoreListeningPartA(
  payload: ListeningPartAPayload,
  response: z.infer<typeof objectiveResponseSchema>,
  slug?: string,
): TaskRunResult {
  return markObjective(listeningPartAAnswerKey(payload, slug), response);
}

export function scoreListeningMcq(
  payload: ListeningMcqPayload,
  response: z.infer<typeof objectiveResponseSchema>,
): TaskRunResult {
  return markObjective(listeningMcqAnswerKey(payload), response);
}
