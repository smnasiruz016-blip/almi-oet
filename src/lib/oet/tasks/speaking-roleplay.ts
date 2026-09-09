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
import { words } from "@/lib/oet/words";
import { TRAIT_LEVELS, TRAIT_LEVEL_VALUE } from "@/lib/oet/trait-levels";
import { getAnthropicClient, recordCost } from "@/lib/ai/anthropic-client";
import { MODELS } from "@/lib/ai/models";
import { professionGrading, professionHeading } from "@/lib/oet/profession-grading";

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

const TRAIT = z.enum(TRAIT_LEVELS);

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
// The level values are shared with Writing — see src/lib/oet/trait-levels.ts
// for why they are not defined here any more.
const LEVEL_VALUE = TRAIT_LEVEL_VALUE;

const SYSTEM = `You are an honest speaking assessor for AlmiOET, an Occupational English Test (OET) practice tool for healthcare professionals.

You rate a TRANSCRIPT of a candidate's OET Speaking role-play (the candidate plays their professional role in a patient consultation). Rules:
- All content here is original to AlmiOET. Never reference or reproduce real OET test material.
- This is a PRACTICE ESTIMATE, not an official OET result. Never state an OET score or grade number, and never promise a grade.
- Grade ONLY the words in the transcript. NEVER judge pronunciation, accent, or audio quality — you cannot hear it.
- Be honest and constructive. If it is limited, say so plainly but kindly. Do not inflate.
- Banned words: "weak", "poor", "wrong", "failed". Prefer "improvement opportunity".
- Use the role-play card AND the patient's concern to judge the CLINICAL COMMUNICATION band: did the candidate draw out and address the patient's actual concern, build rapport, structure the consultation, gather and give information well? This patient-centred skill is central to OET speaking.
- Judge only what the candidate said; the transcript may be imperfect, so do not penalise obvious transcription noise.
- THE CARD'S CORE TASK IS THE MEASURE. Missing what the card actually asked for counts against relationshipBuilding and understandingPatientPerspective — not only against informationGiving. Fluent, courteous English that never does the card's job has not met the clinical communication criteria.

Two bands, nine criteria (each "strong" | "adequate" | "limited"):
Linguistic: intelligibility, fluency, appropriatenessOfLanguage, resourcesOfGrammarAndExpression.
Clinical communication: relationshipBuilding, understandingPatientPerspective, providingStructure, informationGathering, informationGiving.

The linguistic four are about the English only. Clear, fluent, well-chosen language earns "strong" there and settles nothing about the five below.

What the clinical communication criteria actually ask:
- relationshipBuilding: did the candidate make it possible for this patient to say the difficult thing?
    If the card's job is to let the patient voice a worry they are embarrassed or frightened to raise, and the candidate never opens that door — never invites the worry, never normalises it, never offers a way to stop or pause what is happening — relationshipBuilding is not "strong", however warm and polite the words are. Reassurance offered before the patient has been allowed to say what frightens them is not rapport.
- understandingPatientPerspective: did the candidate reach the patient's ACTUAL concern, in the patient's own terms, and answer THAT?
    If the concern named in the task never surfaces, or the candidate answers a nearby easier question instead, this is "limited". Naming the topic without addressing what the patient fears about it is "adequate" at best.
- providingStructure: does the consultation have a shape the patient can follow — what will happen, in what order, and what happens next?
- informationGathering: did the candidate ask, and then listen — open questions before closed ones, checking rather than assuming?
- informationGiving: was the information accurate, in lay terms, checked for understanding, and did it include what this patient must be able to act on?

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

/** System prompt for one profession. Appended to the SAME cached system text
 *  (static per profession), so this is one cache entry per profession, not a
 *  per-request token regression. Unknown/missing profession returns today's
 *  generic prompt UNCHANGED — a grade must never fail over a missing context. */
export function buildSpeakingSystem(profession: string | null | undefined): string {
  return systemFor(profession);
}

function systemFor(profession: string | null | undefined): string {
  const grading = professionGrading(profession);
  if (!grading) return SYSTEM;
  return `${SYSTEM}

PROFESSION CONTEXT (${professionHeading(profession!)})
${grading.speakingContext}

Judge the CLINICAL COMMUNICATION band and appropriateness of language against THESE professional norms — not generic ones.`;
}

function wordCount(s: string): number {
  return words(s); // one definition — src/lib/oet/words.ts
}

/** Evaluate a role-play transcript against the OET speaking criteria (two bands,
 *  nine criteria) with Claude Sonnet. Transcript-only — accent/audio never
 *  judged. Returns conservative practice points + an honest fraction, the trait
 *  feedback, and cost telemetry. */
export async function evaluateSpeakingRoleplay(input: {
  payload: SpeakingRoleplayPayload;
  response: SpeakingRoleplayResponse;
  userId: string;
  /** The ITEM's profession (OetItem.profession), not User.targetProfession. */
  profession?: string | null;
}): Promise<AiScore> {
  const { payload, response, userId, profession } = input;
  const system = systemFor(profession);
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
      system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
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
