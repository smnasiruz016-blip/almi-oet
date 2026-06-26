// SPEAKING — role-play (per-profession, AI).
//
// The candidate plays their professional role in a patient consultation (two
// role-plays per test). We grade a TRANSCRIPT of what they said — never accent or
// audio quality. An AI rater returns qualitative TRAIT levels against the OET
// speaking criteria, in TWO bands:
//
//   Linguistic criteria       — intelligibility, fluency, appropriateness of
//                                language, resources of grammar & expression.
//   Clinical communication     — relationship building, understanding the
//                                patient's perspective, providing structure,
//                                information gathering, information giving.
//
// The clinical-communication band is OET's real differentiator and is genuinely
// new vs a generic speaking grader: the rater is given the role-play card and the
// patient's concern, and judges whether the candidate addressed that concern,
// built rapport and structured the consultation.
//
// Structured output is validated with Zod AFTER parsing (the Anthropic
// structured-output endpoint rejects min/max/items).

import { z } from "zod";

export const speakingRoleplayPayloadSchema = z.object({
  setting: z.string(),
  candidateRole: z.string(),
  patientRole: z.string(),
  candidateCard: z.string(),
  patientConcern: z.string(),
  prepSeconds: z.number().int().nonnegative(),
  speakSeconds: z.number().int().nonnegative(),
});
export type SpeakingRoleplayPayload = z.infer<typeof speakingRoleplayPayloadSchema>;

export const speakingRoleplayResponseSchema = z.object({ transcript: z.string() });
export type SpeakingRoleplayResponse = z.infer<typeof speakingRoleplayResponseSchema>;

const TRAIT = z.enum(["strong", "adequate", "limited"]);

export const speakingFeedbackSchema = z.object({
  // Linguistic band
  intelligibility: TRAIT,
  fluency: TRAIT,
  appropriatenessOfLanguage: TRAIT,
  resourcesOfGrammarAndExpression: TRAIT,
  // Clinical communication band
  relationshipBuilding: TRAIT,
  understandingPatientPerspective: TRAIT,
  providingStructure: TRAIT,
  informationGathering: TRAIT,
  informationGiving: TRAIT,
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  overallComment: z.string(),
});
export type SpeakingRoleplayFeedback = z.infer<typeof speakingFeedbackSchema>;

export type AiScore = {
  pointsEarned: number;
  pointsMax: number;
  fraction: number;
  feedback: SpeakingRoleplayFeedback;
  telemetry: { aiModel: string; costCents: number; latencyMs: number };
};

/** Evaluate a role-play transcript against the OET speaking criteria.
 *  Phase 0 wires the schema + dispatch; the Anthropic call lands in Phase 3. */
export async function evaluateSpeakingRoleplay(_input: {
  payload: SpeakingRoleplayPayload;
  response: SpeakingRoleplayResponse;
  userId: string;
}): Promise<AiScore> {
  throw new Error("Speaking role-play AI grading lands in Phase 3");
}
