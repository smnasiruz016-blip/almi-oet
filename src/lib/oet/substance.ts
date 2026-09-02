/**
 * SUBSTANCE BEFORE TOKENS.
 *
 * MONEY BEFORE TOKENS was already the rule: the submit route refuses an
 * unentitled user with a 402 before anything is spent. This is the same
 * principle one step further in — an entitled user who submitted *nothing*
 * should not spend anything either.
 *
 * ── WHAT WAS MEASURED, ON 2 SEPTEMBER 2026 ──────────────────────────────────
 *
 * Counted at the model boundary against a throwaway database, no real model
 * called (tests/db/blank-submit.test.ts):
 *
 *   Writing   { text: "" }                 1 model call   200   attempt SCORED
 *   Writing   { text: "   " }              1 model call   200   attempt SCORED
 *   Speaking  zero-length audio, 0s        1 model call + 1 transcription
 *   Speaking  { transcript: "" } as JSON   1 model call   200   attempt SCORED
 *
 * Four of the six empty cases reached a paid model, each wrote a cost-ledger
 * row, and each marked the attempt SCORED — so the learner was charged tokens
 * AND lost the exercise. The trial cap does not help: `trialAiAllowance()`
 * returns UNCAPPED for any subscription status that is not "trialing", so a
 * paying subscriber had no ceiling at all.
 *
 * ── WHERE THIS LIVES, AND WHY ───────────────────────────────────────────────
 *
 * The RULE is here, in one pure module with no I/O, so it can be tested and so
 * there is one definition of "nothing". The ENFORCEMENT is in
 * src/app/api/oet/submit/route.ts, immediately beside the entitlement gates and
 * before both `transcribeAudio()` and `handler.run()`. A check in the composer
 * would be a suggestion; the API is what spends the money.
 *
 * ⚠️ The brief that asked for this described the existing gate as
 * `refuseUnlessEntitled` "at the lib layer". No such function exists in this
 * repo — the entitlement gates are written inline in the route. The rule is put
 * at the lib layer and called from beside those gates, which satisfies both
 * halves of the instruction; the name was the only thing wrong.
 *
 * ── 🔴 TWO TIERS, AND ONLY ONE OF THEM IS A JUDGEMENT ───────────────────────
 *
 * HARD — no number is invented and none can be wrong:
 *   · text that is empty after trimming is not a letter
 *   · an upload of zero bytes is not a recording
 *   · a transcript with no words is nothing to grade
 *
 * PROPOSED — a number somebody has to agree to. Every one is marked below and
 * none was chosen alone. THEY ARE A PROPOSAL FOR NASIR, NOT A DECISION.
 *
 * The floors exist to stop *empty*, never to stop a *short attempt*. The bound
 * that keeps them honest is already in the codebase: `lengthPenalty()` in
 * writing-letter.ts treats anything below `wordMin * 0.6` — 108 words against
 * the measured 180–200 law — as a SCORING matter, not a refusal. So a refusal
 * floor has to sit far below 108 or it would take over territory the product
 * already decided belongs to the grader. Five words is 4.6% of that threshold:
 * a letter of 5–107 words is still accepted, still graded, and still carries the
 * existing 0.6 penalty. Nothing that anybody tried at is refused.
 */
import type { OetTaskType } from "@prisma/client";

// ── PROPOSED FLOORS — for Nasir to approve, change or reject ────────────────

/** PROPOSED. Bounded above by `lengthPenalty()`'s `wordMin * 0.6` = 108 words,
 *  which is where this product already decided "too short" is the grader's job.
 *  5 words cannot catch a real attempt at a clinical letter. */
export const MIN_LETTER_WORDS = 5;

/** PROPOSED — ⚠️ UNSOURCED. No published OET figure bounds this and none was
 *  measured; it is a judgement that a container this small holds no speech.
 *  Bounded above by the item's own `speakSeconds` (300s in the seeded bank), so
 *  it is three orders of magnitude below a real answer. */
export const MIN_AUDIO_BYTES = 1024;

/** PROPOSED — ⚠️ UNSOURCED. Same standing as MIN_AUDIO_BYTES: a judgement, not
 *  a measurement. A role-play runs five minutes; three seconds is not a short
 *  answer, it is a slipped finger on the record button. NOTE this value arrives
 *  from the CLIENT as a form field, so it is a hint that can be refused on but
 *  never one to trust — MIN_AUDIO_BYTES and the transcript check are the
 *  server-side truths. */
export const MIN_SPEAK_SECONDS = 3;

export type SubstanceVerdict =
  | { ok: true }
  | {
      ok: false;
      /** Machine-readable, for the gate and the logs. */
      reason:
        | "NO_LETTER"
        | "LETTER_TOO_SHORT"
        | "NO_AUDIO"
        | "AUDIO_TOO_SMALL"
        | "AUDIO_TOO_SHORT"
        | "NO_SPEECH";
      /** 🔴 What the learner reads. It must be TRUE and it must not blame them:
       *  submitting an empty box by accident is a slip, not a fault, and every
       *  message says the exercise is still theirs — because it is. */
      message: string;
    };

const OK: SubstanceVerdict = { ok: true };

/** Words, counted the way the grader counts them. */
export function wordsIn(s: unknown): number {
  if (typeof s !== "string") return 0;
  const t = s.trim();
  return t ? t.split(/\s+/).length : 0;
}

/**
 * Everything known BEFORE a transcription is paid for.
 *
 * For Speaking this is the only chance to stop the Whisper call, so it runs on
 * the upload itself. For Writing there is no upload and this is simply the
 * response check.
 */
export function checkBeforeTranscription(input: {
  taskType: OetTaskType;
  /** The uploaded recording, when the request was multipart. */
  audio: { bytes: number; durationSeconds: number } | null;
  /** The JSON response body, when it was not. */
  response: unknown;
}): SubstanceVerdict {
  if (input.taskType === "WRITING_LETTER") {
    return checkLetter((input.response as { text?: unknown } | null)?.text);
  }
  if (input.taskType !== "SPEAKING_ROLEPLAY") return OK;

  if (input.audio) {
    // HARD: zero bytes is not a recording.
    if (input.audio.bytes <= 0) {
      return {
        ok: false,
        reason: "NO_AUDIO",
        message:
          "That recording arrived empty, so there was nothing to send for feedback. " +
          "Record your reply and submit again — this role-play is still yours to do, " +
          "and nothing has been used up.",
      };
    }
    // PROPOSED floors.
    if (input.audio.bytes < MIN_AUDIO_BYTES) {
      return {
        ok: false,
        reason: "AUDIO_TOO_SMALL",
        message:
          "That recording is too small to contain any speech. " +
          "Record your reply and submit again — this role-play is still yours to do, " +
          "and nothing has been used up.",
      };
    }
    if (input.audio.durationSeconds > 0 && input.audio.durationSeconds < MIN_SPEAK_SECONDS) {
      return {
        ok: false,
        reason: "AUDIO_TOO_SHORT",
        message:
          `That recording is under ${MIN_SPEAK_SECONDS} seconds long. ` +
          "Record your reply and submit again — this role-play is still yours to do, " +
          "and nothing has been used up.",
      };
    }
    return OK;
  }

  // Multipart with no audio field at all, or a JSON transcript. Both end up
  // here, and both are answered by the transcript check.
  return checkTranscript((input.response as { transcript?: unknown } | null)?.transcript);
}

/**
 * Everything known BEFORE the grading model is paid for.
 *
 * For Speaking this runs AFTER transcription, so it catches the case the upload
 * check cannot see: a recording big enough to look real that Whisper heard no
 * speech in. The Whisper money is already spent by then; the Sonnet money is
 * not, and this is where it is saved.
 */
export function checkBeforeGrading(input: {
  taskType: OetTaskType;
  response: unknown;
}): SubstanceVerdict {
  if (input.taskType === "WRITING_LETTER") {
    return checkLetter((input.response as { text?: unknown } | null)?.text);
  }
  if (input.taskType === "SPEAKING_ROLEPLAY") {
    return checkTranscript((input.response as { transcript?: unknown } | null)?.transcript);
  }
  return OK;
}

function checkLetter(text: unknown): SubstanceVerdict {
  const words = wordsIn(text);
  // HARD: nothing, or nothing but whitespace.
  if (words === 0) {
    return {
      ok: false,
      reason: "NO_LETTER",
      message:
        "There is no letter to give feedback on yet. Write your reply to the case notes " +
        "and submit again — this exercise is still waiting for you, and nothing has been " +
        "used up.",
    };
  }
  // PROPOSED floor.
  if (words < MIN_LETTER_WORDS) {
    return {
      ok: false,
      reason: "LETTER_TOO_SHORT",
      message:
        `There are only ${words} word${words === 1 ? "" : "s"} here, which is not enough to ` +
        "give you feedback worth reading. Write your reply to the case notes and submit " +
        "again — this exercise is still waiting for you, and nothing has been used up.",
    };
  }
  return OK;
}

function checkTranscript(transcript: unknown): SubstanceVerdict {
  // HARD: no words is nothing to grade. Whisper returns an empty string for
  // silence, so this is the shape a silent recording actually arrives in.
  if (wordsIn(transcript) === 0) {
    return {
      ok: false,
      reason: "NO_SPEECH",
      message:
        "We could not hear any speech in that recording, so there was nothing to give " +
        "feedback on. Check your microphone and try again — this role-play is still yours " +
        "to do, and nothing has been used up.",
    };
  }
  return OK;
}
