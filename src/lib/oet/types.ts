// Shared OET domain primitives.
//
// OET reports a SEPARATE score from 0 to 500 for each of the four sub-tests
// (Listening, Reading, Writing, Speaking), each mapped to an A–E grade. There is
// NO composite / overall score — so we never compute one. Boundaries below are
// the official CBLA / UK NARIC mapping (verified 2026-06-26 against the UK NARIC
// "Relating the OET to the CEFR" report). AlmiOET turns practice performance into
// an HONEST estimate RANGE on this scale — deliberately wide, because a practice
// task is not a calibrated live exam — and always tells the user to confirm the
// score they need with their own regulator.

import type { OetSubTest, OetTaskType } from "@prisma/client";

export type { OetSubTest, OetTaskType, OetProfession } from "@prisma/client";

// The OET letter grades, best (A) to lowest (E). C+ sits between C and B.
export type OetGrade = "A" | "B" | "C+" | "C" | "D" | "E";

export const OET_GRADES: readonly OetGrade[] = ["A", "B", "C+", "C", "D", "E"] as const;

// A practice-estimate range on the 0–500 OET scale, always 10-point aligned.
export type Range = readonly [number, number];

// Per-sub-test practice estimate. OET scores each sub-test independently, so this
// is a single estimate (not a multi-skill object). null = not enough evidence yet.
export type GradeEstimate = { lo: number; hi: number; grade: OetGrade } | null;

export const SUBTEST_LABEL: Record<OetSubTest, string> = {
  LISTENING: "Listening",
  READING: "Reading",
  WRITING: "Writing",
  SPEAKING: "Speaking",
};

// Listening + Reading are common to all professions; Writing + Speaking are
// per-profession. Used to decide whether an item needs a profession.
export const COMMON_SUBTESTS: readonly OetSubTest[] = ["LISTENING", "READING"] as const;
export const PER_PROFESSION_SUBTESTS: readonly OetSubTest[] = ["WRITING", "SPEAKING"] as const;

export function isPerProfession(subTest: OetSubTest): boolean {
  return subTest === "WRITING" || subTest === "SPEAKING";
}

// ---- Per-task payload (stimulus + answer key) and response shapes ----
// payload lives on OetItem.payload; response on OetAttempt.response. The answer
// keys inside payloads are stripped server-side before reaching the client.

// A spoken line in a Listening audio script. `voice` lets the TTS layer alternate
// voices for the two speakers in a consultation (Part A) or extracts (Part B/C).
export type Speaker = { role: string; voice: string };

// A multiple-choice question used by Listening Part B/C and Reading Part B/C.
export type McqOption = { id: string; text: string };
export type McqQuestion = {
  id: string;
  stem: string;
  options: McqOption[];
  answer: string; // option id — answer key, stripped before client send
};

// LISTENING PART A — note completion (gap fill) over a consultation.
export type ListeningPartAGap = { id: string; label: string; answer: string };
export type ListeningPartAPayload = {
  audioScript: string;
  speakers: Speaker[];
  gaps: ListeningPartAGap[];
};

// LISTENING PART B/C — multiple choice over short extracts / a presentation.
export type ListeningMcqPayload = {
  audioScript: string;
  speakers: Speaker[];
  questions: McqQuestion[];
};

// READING PART A — expeditious reading: skim 4 short texts, matching + gap fill.
export type ReadingText = { id: string; heading: string; body: string };
export type ReadingPartAQuestion = {
  id: string;
  kind: "match" | "gap";
  stem: string;
  // For "match": option ids are the text ids. For "gap": free-text answer.
  options?: McqOption[];
  answer: string;
};
export type ReadingPartAPayload = {
  texts: ReadingText[];
  questions: ReadingPartAQuestion[];
};

// READING PART B/C — careful reading: short workplace texts / 2 long texts, MCQ.
export type ReadingPassage = { id: string; body: string };
export type ReadingMcqPayload = {
  passages: ReadingPassage[];
  questions: McqQuestion[];
};

// WRITING — a profession-specific clinical letter built from case notes.
export type LetterType = "referral" | "transfer" | "discharge" | "advice";
export type WritingLetterPayload = {
  caseNotes: string;
  recipient: string;
  taskInstruction: string;
  letterType: LetterType;
  wordMin: number; // OET expects 180–200 words
  wordMax: number;
};
export type WritingLetterResponse = { text: string };

// SPEAKING — a profession-specific role-play scenario card.
export type SpeakingRoleplayPayload = {
  setting: string;
  candidateRole: string; // the professional role the candidate plays
  patientRole: string; // who the interlocutor plays
  candidateCard: string; // the candidate's task card (what to cover)
  patientConcern: string; // the patient's core concern, used to grade clinical comms
  prepSeconds: number;
  speakSeconds: number;
};
export type SpeakingRoleplayResponse = { transcript: string };

// Objective (Listening/Reading) responses: a map of questionId → answer value.
export type ObjectiveResponse = { answers: Record<string, string | string[]> };

// Convenience: every payload shape, keyed by task type (for app-side narrowing).
export type PayloadFor<T extends OetTaskType> = T extends "LISTENING_PART_A"
  ? ListeningPartAPayload
  : T extends "LISTENING_PART_B" | "LISTENING_PART_C"
    ? ListeningMcqPayload
    : T extends "READING_PART_A"
      ? ReadingPartAPayload
      : T extends "READING_PART_B" | "READING_PART_C"
        ? ReadingMcqPayload
        : T extends "WRITING_LETTER"
          ? WritingLetterPayload
          : T extends "SPEAKING_ROLEPLAY"
            ? SpeakingRoleplayPayload
            : never;
