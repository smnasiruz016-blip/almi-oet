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

/** Normalise a free-text answer for lenient gap-fill comparison. */
function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,;:!?]+$/g, "");
}

function firstValue(v: string | string[] | undefined): string {
  if (Array.isArray(v)) return v[0] ?? "";
  return v ?? "";
}

/** `variants` are ADDITIONAL accepted answers, marked identically to `answer`.
 *  A note-completion gap often has more than one legitimate wording of the same
 *  heard phrase ("moving boxes" / "lifting boxes"), and marking one of them wrong
 *  penalises a candidate for the authoring, not for the listening. */
export type AnswerKey = { id: string; answer: string; exact?: boolean; variants?: string[] };

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
    const given = firstValue(response.answers[k.id]);
    const accepted = [k.answer, ...(k.variants ?? [])];
    const ok = k.exact
      ? accepted.some((a) => given.trim() === a.trim())
      : accepted.some((a) => normalize(given) === normalize(a));
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
