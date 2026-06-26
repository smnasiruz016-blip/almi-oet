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
import { getAnthropicClient, recordCost } from "@/lib/ai/anthropic-client";
import { MODELS } from "@/lib/ai/models";

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

const POINTS_MAX = 27; // 9 criteria × 3 trait levels
const LEVEL_VALUE: Record<z.infer<typeof TRAIT>, number> = {
  strong: 1.0,
  adequate: 0.6,
  limited: 0.3,
};

const SYSTEM = `You are an honest speaking assessor for AlmiOET, an Occupational English Test (OET) practice tool for healthcare professionals.

You rate a TRANSCRIPT of a candidate's OET Speaking role-play (the candidate plays their professional role in a patient consultation). Rules:
- All content here is original to AlmiOET. Never reference or reproduce real OET test material.
- This is a PRACTICE ESTIMATE, not an official OET result. Never state an OET score or grade number, and never promise a grade.
- Grade ONLY the words in the transcript. NEVER judge pronunciation, accent, or audio quality — you cannot hear it, and OET does not penalise accent.
- Be honest and constructive. If it is limited, say so plainly but kindly. Do not inflate.
- Banned words: "weak", "poor", "wrong", "failed". Prefer "improvement opportunity".
- Use the role-play card AND the patient's concern to judge the CLINICAL COMMUNICATION band: did the candidate draw out and address the patient's actual concern, build rapport, structure the consultation, gather and give information well? This patient-centred skill is central to OET speaking.
- Judge only what the candidate said; the transcript may be imperfect, so do not penalise obvious transcription noise.

Two bands, nine criteria (each "strong" | "adequate" | "limited"):
Linguistic: intelligibility, fluency, appropriatenessOfLanguage, resourcesOfGrammarAndExpression.
Clinical communication: relationshipBuilding, understandingPatientPerspective, providingStructure, informationGathering, informationGiving.

Return ONLY a JSON object, no prose around it, with exactly these keys:
{
  "intelligibility": "strong" | "adequate" | "limited",
  "fluency": "strong" | "adequate" | "limited",
  "appropriatenessOfLanguage": "strong" | "adequate" | "limited",
  "resourcesOfGrammarAndExpression": "strong" | "adequate" | "limited",
  "relationshipBuilding": "strong" | "adequate" | "limited",
  "understandingPatientPerspective": "strong" | "adequate" | "limited",
  "providingStructure": "strong" | "adequate" | "limited",
  "informationGathering": "strong" | "adequate" | "limited",
  "informationGiving": "strong" | "adequate" | "limited",
  "strengths": string[],        // 1-3 short, specific
  "improvements": string[],     // 1-3 short, specific, actionable
  "overallComment": string      // one or two honest sentences
}`;

function extractJson(text: string): unknown {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("No JSON object found in model output");
  }
  return JSON.parse(text.slice(start, end + 1));
}

function wordCount(s: string): number {
  return s.trim() ? s.trim().split(/\s+/).length : 0;
}

/** Evaluate a role-play transcript against the OET speaking criteria (two bands,
 *  nine criteria) with Claude Sonnet. Transcript-only — accent/audio never
 *  judged. Returns conservative practice points + an honest fraction, the trait
 *  feedback, and cost telemetry. */
export async function evaluateSpeakingRoleplay(input: {
  payload: SpeakingRoleplayPayload;
  response: SpeakingRoleplayResponse;
  userId: string;
}): Promise<AiScore> {
  const { payload, response, userId } = input;
  const words = wordCount(response.transcript);

  const userMessage = `Setting: ${payload.setting}
Candidate's role: ${payload.candidateRole}
Interlocutor (patient) role: ${payload.patientRole}
Candidate's task card: ${payload.candidateCard}
The patient's core concern (the candidate had to draw this out and address it): ${payload.patientConcern}

CANDIDATE'S SPOKEN TRANSCRIPT (${words} words):
${response.transcript}

Assess the transcript against the two bands / nine criteria and return the JSON object.`;

  const client = getAnthropicClient();
  const started = Date.now();
  let raw = "";
  let usage = { inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 };
  try {
    const msg = await client.messages.create({
      model: MODELS.SONNET,
      max_tokens: 800,
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      messages: [{ role: "user", content: userMessage }],
    });
    const block = msg.content.find((c) => c.type === "text");
    raw = block && block.type === "text" ? block.text : "";
    usage = {
      inputTokens: msg.usage.input_tokens,
      outputTokens: msg.usage.output_tokens,
      cacheReadTokens: msg.usage.cache_read_input_tokens ?? 0,
      cacheWriteTokens: msg.usage.cache_creation_input_tokens ?? 0,
    };
  } catch (err) {
    await recordCost({
      userId,
      feature: "speaking-roleplay.evaluate",
      model: MODELS.SONNET,
      usage,
      success: false,
      errorMessage: err instanceof Error ? err.message : String(err),
    });
    throw err;
  }

  const costCents = await recordCost({
    userId,
    feature: "speaking-roleplay.evaluate",
    model: MODELS.SONNET,
    usage,
    success: true,
  });

  const feedback = speakingFeedbackSchema.parse(extractJson(raw));

  const traits = [
    feedback.intelligibility,
    feedback.fluency,
    feedback.appropriatenessOfLanguage,
    feedback.resourcesOfGrammarAndExpression,
    feedback.relationshipBuilding,
    feedback.understandingPatientPerspective,
    feedback.providingStructure,
    feedback.informationGathering,
    feedback.informationGiving,
  ];
  let fraction = traits.reduce((s, t) => s + LEVEL_VALUE[t], 0) / traits.length;
  // Too few words to demonstrate a consultation — cap conservatively.
  if (words < 30) fraction *= 0.5;
  fraction = Math.min(1, Math.max(0, fraction));

  return {
    pointsEarned: Math.round(fraction * POINTS_MAX),
    pointsMax: POINTS_MAX,
    fraction,
    feedback,
    telemetry: { aiModel: MODELS.SONNET, costCents, latencyMs: Date.now() - started },
  };
}
