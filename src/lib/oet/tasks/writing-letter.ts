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
import { words } from "@/lib/oet/words";
import { getAnthropicClient, recordCost } from "@/lib/ai/anthropic-client";
import { MODELS } from "@/lib/ai/models";
import { professionGrading, professionHeading } from "@/lib/oet/profession-grading";

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

const POINTS_MAX = 18; // 6 criteria × 3 trait levels
const LEVEL_VALUE: Record<z.infer<typeof TRAIT>, number> = {
  strong: 1.0,
  adequate: 0.6,
  limited: 0.3,
};

const LETTER_TYPE_HINT: Record<WritingLetterPayload["letterType"], string> = {
  referral: "a referral letter (asking another professional to take on or assess the patient)",
  transfer: "a transfer letter (handing over care, e.g. to another unit or facility)",
  discharge: "a discharge letter (handing over ongoing care after discharge)",
  advice: "a letter advising or informing a non-professional (e.g. the patient or a carer)",
};

const SYSTEM = `You are an honest writing assessor for AlmiOET, an Occupational English Test (OET) practice tool for healthcare professionals.

You rate a candidate's OET Writing task: a profession-specific clinical letter written from case notes. Judge it against the SIX official OET writing criteria. Rules:
- All content here is original to AlmiOET. Never reference or reproduce real OET test material.
- This is a PRACTICE ESTIMATE, not an official OET result. Never state an OET score or band number, and never promise a grade.
- Be honest and constructive. If the letter is limited, say so plainly but kindly. Do not inflate.
- Banned words: "weak", "poor", "wrong", "failed". Prefer "improvement opportunity".
- Judge CLINICAL RELEVANCE using the case notes: did the candidate select the information the reader needs, leave out irrelevant detail, and match the correct letter genre and the recipient's needs? This — not just language — is central to OET writing.
- Judge only the letter the candidate wrote; do not invent clinical facts beyond the case notes.

The six criteria:
- purpose: is the purpose of the letter clear immediately to the reader?
- content: is the relevant clinical information selected and accurate, with irrelevant detail left out?
- concisenessAndClarity: is it appropriately concise and clear, without unnecessary content?
- genreAndStyle: correct letter genre, register and tone for this recipient?
- organisationAndLayout: logical paragraphing, salutation and sign-off?
- language: grammar, vocabulary, spelling, punctuation.

Return ONLY a JSON object, no prose around it, with exactly these keys:
{
  "purpose": "strong" | "adequate" | "limited",
  "content": "strong" | "adequate" | "limited",
  "concisenessAndClarity": "strong" | "adequate" | "limited",
  "genreAndStyle": "strong" | "adequate" | "limited",
  "organisationAndLayout": "strong" | "adequate" | "limited",
  "language": "strong" | "adequate" | "limited",
  "strengths": string[],        // 1-3 short, specific
  "improvements": string[],     // 1-3 short, specific, actionable
  "overallComment": string      // one or two honest sentences
}`;

/** The system prompt for one profession. The profession block is appended to the
 *  SAME cached system text (it is static per profession), so this costs one cache
 *  entry per profession rather than a per-request token regression.
 *
 *  An unknown or missing profession returns today's generic prompt UNCHANGED —
 *  a grade must never fail over a profession we don't have context for. */
function systemFor(profession: string | null | undefined): string {
  const grading = professionGrading(profession);
  if (!grading) return SYSTEM;
  return `${SYSTEM}

PROFESSION CONTEXT (${professionHeading(profession!)})
${grading.writingContext}

Judge "content", "genreAndStyle" and clinical relevance against THESE professional norms — not generic ones. A letter that reads well but selects the wrong information for this reader, or uses the wrong register for this profession, has not met the criteria.`;
}

function extractJson(text: string): unknown {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("No JSON object found in model output");
  }
  return JSON.parse(text.slice(start, end + 1));
}

/** The letter's length, counted the one way this project counts words.
 *
 *  🔴 It used to split on whitespace and count everything, so a bare dash was a
 *  word. This number reaches the learner twice — it sets the length multiplier
 *  and it is the figure the AI grader is TOLD the candidate wrote — so
 *  over-counting invented a penalty against OET's 180-200 guide. Ruled by the
 *  owner on 7 September 2026; see src/lib/oet/words.ts. */
export function wordCount(s: string): number {
  return words(s);
}

/** Multiplier applied to the trait fraction for length.
 *
 *  The two directions are deliberately NOT symmetrical in strength, because the
 *  faults are not equivalent:
 *
 *  UNDER-length keeps a firm 0.6 floor. A letter at well under half the task
 *  length cannot demonstrate the six criteria at all — there is not enough
 *  writing to judge, so the trait read itself is unreliable.
 *
 *  OVER-length is a 0.85 NUDGE, not a second full penalty. The model already
 *  sees the exact word count and the expected range, and "concisenessAndClarity"
 *  is one of the six criteria — so it prices over-length once on its own. This
 *  multiplier only adds the bit the trait average understates. Measured on the
 *  fixture set: a 321-word letter with otherwise strong traits scored 0.816
 *  before any multiplier; at 0.6 it fell to band E, level with a letter that
 *  omitted half the handover, which is harsher than an OET assessor would be.
 *  At 0.85 it lands mid-range — penalised, but still clearly above a letter that
 *  failed on content and register.
 *
 *  Moderate over-length (inside 1.5×) takes no code penalty at all and is left
 *  entirely to the conciseness criterion. */
export function lengthPenalty(words: number, wordMin: number, wordMax: number): number {
  if (words < wordMin * 0.6) return 0.6; // too short to demonstrate the criteria
  if (words > wordMax * 1.5) return 0.85; // nudge on top of the model's own conciseness read
  return 1;
}

/** Build the exact system + user messages the grader sends. Exported so a proof
 *  can assert on the REAL prompt rather than a reimplementation of it — the
 *  evaluator below calls this same function. */
export function buildWritingPrompt(input: {
  payload: WritingLetterPayload;
  response: WritingLetterResponse;
  profession?: string | null;
}): { system: string; userMessage: string } {
  const { payload, response, profession } = input;
  const words = wordCount(response.text);
  return {
    system: systemFor(profession),
    userMessage: `Letter type: ${LETTER_TYPE_HINT[payload.letterType]}.
Expected length: ${payload.wordMin}–${payload.wordMax} words. The candidate wrote ${words} words.
Recipient: ${payload.recipient}
Task: ${payload.taskInstruction}

CASE NOTES (the source the candidate had to work from):
${payload.caseNotes}

CANDIDATE'S LETTER:
${response.text}

Assess the letter against the six criteria and return the JSON object.`,
  };
}

/** Evaluate a clinical letter against the six OET writing criteria with Claude
 *  Sonnet. Returns conservative practice points + an honest fraction (mapped to a
 *  0–500 estimate by the caller), the trait feedback, and cost telemetry. */
export async function evaluateWritingLetter(input: {
  payload: WritingLetterPayload;
  response: WritingLetterResponse;
  userId: string;
  /** The ITEM's profession (OetItem.profession), not User.targetProfession — a
   *  user may practise a profession other than their target, and the case notes
   *  belong to the item. Null/unknown falls back to the generic prompt. */
  profession?: string | null;
}): Promise<AiScore> {
  const { payload, response, userId, profession } = input;
  const { system, userMessage } = buildWritingPrompt({ payload, response, profession });
  const words = wordCount(response.text);

  const client = getAnthropicClient();
  const started = Date.now();
  let raw = "";
  let usage = { inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 };
  try {
    const msg = await client.messages.create({
      model: MODELS.SONNET,
      max_tokens: 700,
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
      feature: "writing-letter.evaluate",
      model: MODELS.SONNET,
      usage,
      success: false,
      errorMessage: err instanceof Error ? err.message : String(err),
    });
    throw err;
  }

  const costCents = await recordCost({
    userId,
    feature: "writing-letter.evaluate",
    model: MODELS.SONNET,
    usage,
    success: true,
  });

  const feedback = writingFeedbackSchema.parse(extractJson(raw));

  const traits = [
    feedback.purpose,
    feedback.content,
    feedback.concisenessAndClarity,
    feedback.genreAndStyle,
    feedback.organisationAndLayout,
    feedback.language,
  ];
  let fraction = traits.reduce((s, t) => s + LEVEL_VALUE[t], 0) / traits.length;
  fraction *= lengthPenalty(words, payload.wordMin, payload.wordMax);
  fraction = Math.min(1, Math.max(0, fraction));

  return {
    pointsEarned: Math.round(fraction * POINTS_MAX),
    pointsMax: POINTS_MAX,
    fraction,
    feedback,
    telemetry: { aiModel: MODELS.SONNET, costCents, latencyMs: Date.now() - started },
  };
}
