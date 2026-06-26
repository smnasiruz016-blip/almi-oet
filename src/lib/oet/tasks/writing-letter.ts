// WRITING — clinical letter (per-profession, AI).
//
// The candidate reads case notes and writes a profession-specific letter
// (referral / transfer / discharge / advice), 180–200 words. An AI rater returns
// qualitative TRAIT levels against the SIX official OET writing criteria plus
// honest, constructive notes. The trait read is converted to conservative
// practice points and an honest 0–500 estimate — never a real OET score.
//
// The big difference from a generic writing grader: the rater is given the CASE
// NOTES as well as the letter, and judges whether the candidate selected the
// RIGHT clinical information for the recipient and used the correct letter genre
// — clinical relevance, not just language.
//
// Structured output: we ask for a JSON object and validate it with Zod AFTER
// parsing (the Anthropic structured-output endpoint rejects min/max/items, so we
// keep the request plain and enforce shape in code).

import { z } from "zod";

export const writingLetterPayloadSchema = z.object({
  caseNotes: z.string(),
  recipient: z.string(),
  taskInstruction: z.string(),
  letterType: z.enum(["referral", "transfer", "discharge", "advice"]),
  wordMin: z.number().int().nonnegative(),
  wordMax: z.number().int().nonnegative(),
});
export type WritingLetterPayload = z.infer<typeof writingLetterPayloadSchema>;

export const writingLetterResponseSchema = z.object({ text: z.string() });
export type WritingLetterResponse = z.infer<typeof writingLetterResponseSchema>;

const TRAIT = z.enum(["strong", "adequate", "limited"]);

// The six official OET writing assessment criteria.
export const writingFeedbackSchema = z.object({
  purpose: TRAIT, // is the purpose of the letter immediately clear?
  content: TRAIT, // is the right clinical information selected (and irrelevant info left out)?
  concisenessAndClarity: TRAIT, // appropriately concise; no unnecessary content
  genreAndStyle: TRAIT, // correct letter genre + register for the recipient
  organisationAndLayout: TRAIT, // logical paragraphing, salutation, sign-off
  language: TRAIT, // grammar, vocabulary, spelling, punctuation
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  overallComment: z.string(),
});
export type WritingLetterFeedback = z.infer<typeof writingFeedbackSchema>;

export type AiScore = {
  pointsEarned: number;
  pointsMax: number;
  fraction: number;
  feedback: WritingLetterFeedback;
  telemetry: { aiModel: string; costCents: number; latencyMs: number };
};

/** Evaluate a clinical letter against the OET writing criteria.
 *  Phase 0 wires the schema + dispatch; the Anthropic call lands in Phase 2. */
export async function evaluateWritingLetter(_input: {
  payload: WritingLetterPayload;
  response: WritingLetterResponse;
  userId: string;
}): Promise<AiScore> {
  throw new Error("Writing letter AI grading lands in Phase 2");
}
