// The data-driven task registry — the single place that knows about OET task
// types. Pages, the practice hub, the sidebar, the mock plan, and the submit
// route all read from here; nothing branches on task type with a hand-written
// if-chain.
//
//   OET_TASKS    — declarative metadata for every task type.
//   OET_HANDLERS — server scoring dispatch. Each handler parses its own payload/
//                  response and returns a normalized result, so the submit route
//                  is a single map lookup.

import type { OetSubTest, OetTaskType } from "@prisma/client";
import {
  listeningPartAPayloadSchema,
  listeningMcqPayloadSchema,
  objectiveResponseSchema,
  scoreListeningPartA,
  scoreListeningMcq,
} from "@/lib/oet/tasks/listening";
import {
  readingPartAPayloadSchema,
  readingMcqPayloadSchema,
  scoreReadingPartA,
  scoreReadingMcq,
} from "@/lib/oet/tasks/reading";
import {
  writingLetterPayloadSchema,
  writingLetterResponseSchema,
  evaluateWritingLetter,
} from "@/lib/oet/tasks/writing-letter";
import {
  speakingRoleplayPayloadSchema,
  speakingRoleplayResponseSchema,
  evaluateSpeakingRoleplay,
} from "@/lib/oet/tasks/speaking-roleplay";

export type ScoringMode = "DETERMINISTIC" | "AI";

export type TaskDef = {
  taskType: OetTaskType;
  subTest: OetSubTest;
  slug: string; // URL segment under /practice
  label: string;
  scoringMode: ScoringMode;
  // True once the task is wired end-to-end (composer + scorer). Filled across
  // Phases 1–3; the registry knows about every task from Phase 0.
  live: boolean;
  blurb: string; // per-task intro copy
};

export const OET_TASKS: Record<OetTaskType, TaskDef> = {
  LISTENING_PART_A: {
    taskType: "LISTENING_PART_A",
    subTest: "LISTENING",
    slug: "listening-part-a",
    label: "Listening — Part A",
    scoringMode: "DETERMINISTIC",
    live: true,
    blurb:
      "Listen to two healthcare consultations and complete the notes as you hear the details. Audio plays once.",
  },
  LISTENING_PART_B: {
    taskType: "LISTENING_PART_B",
    subTest: "LISTENING",
    slug: "listening-part-b",
    label: "Listening — Part B",
    scoringMode: "DETERMINISTIC",
    live: true,
    blurb:
      "Six short workplace extracts, one multiple-choice question each. Audio plays once.",
  },
  LISTENING_PART_C: {
    taskType: "LISTENING_PART_C",
    subTest: "LISTENING",
    slug: "listening-part-c",
    label: "Listening — Part C",
    scoringMode: "DETERMINISTIC",
    live: true,
    blurb:
      "Two longer presentations or interviews, multiple-choice questions. Audio plays once.",
  },
  READING_PART_A: {
    taskType: "READING_PART_A",
    subTest: "READING",
    slug: "reading-part-a",
    label: "Reading — Part A",
    scoringMode: "DETERMINISTIC",
    live: true,
    blurb:
      "Skim four short texts on one topic and answer matching and gap-fill questions against the clock.",
  },
  READING_PART_B: {
    taskType: "READING_PART_B",
    subTest: "READING",
    slug: "reading-part-b",
    label: "Reading — Part B",
    scoringMode: "DETERMINISTIC",
    live: true,
    blurb: "Short workplace texts — read carefully and answer one multiple-choice question each.",
  },
  READING_PART_C: {
    taskType: "READING_PART_C",
    subTest: "READING",
    slug: "reading-part-c",
    label: "Reading — Part C",
    scoringMode: "DETERMINISTIC",
    live: true,
    blurb: "Two longer texts — read in detail and answer multiple-choice questions on meaning and opinion.",
  },
  WRITING_LETTER: {
    taskType: "WRITING_LETTER",
    subTest: "WRITING",
    slug: "writing-letter",
    label: "Writing — Clinical Letter",
    scoringMode: "AI",
    live: false,
    blurb:
      "Read the case notes and write a profession-specific letter (180–200 words). You'll get honest feedback against the OET writing criteria.",
  },
  SPEAKING_ROLEPLAY: {
    taskType: "SPEAKING_ROLEPLAY",
    subTest: "SPEAKING",
    slug: "speaking-roleplay",
    label: "Speaking — Role-play",
    scoringMode: "AI",
    live: false,
    blurb:
      "Play your professional role in a patient consultation. We estimate from a transcript of what you said — not your accent or audio.",
  },
};

// The full OET mock sequence, in test order. Listening → Reading → Writing →
// Speaking (two role-plays).
export const MOCK_PLAN: OetTaskType[] = [
  "LISTENING_PART_A",
  "LISTENING_PART_B",
  "LISTENING_PART_C",
  "READING_PART_A",
  "READING_PART_B",
  "READING_PART_C",
  "WRITING_LETTER",
  "SPEAKING_ROLEPLAY",
  "SPEAKING_ROLEPLAY",
];

export function taskBySlug(slug: string): TaskDef | undefined {
  return Object.values(OET_TASKS).find((t) => t.slug === slug);
}

export function tasksForSubTest(subTest: OetSubTest): TaskDef[] {
  return Object.values(OET_TASKS).filter((t) => t.subTest === subTest);
}

// ---- Server scoring dispatch ----

export type TaskRunResult = {
  pointsEarned: number;
  pointsMax: number;
  fraction: number; // 0..1 → fed to fractionToEstimate
  detail?: unknown; // per-task review data for the result page
  feedback?: unknown; // AI trait feedback (Writing/Speaking)
  telemetry?: { aiModel: string; costCents: number; latencyMs: number };
};

export type TaskHandler = {
  mode: ScoringMode;
  run: (input: {
    payload: unknown;
    response: unknown;
    userId: string;
  }) => Promise<TaskRunResult>;
};

export const OET_HANDLERS: Partial<Record<OetTaskType, TaskHandler>> = {
  LISTENING_PART_A: {
    mode: "DETERMINISTIC",
    run: async ({ payload, response }) => {
      const p = listeningPartAPayloadSchema.parse(payload);
      const r = objectiveResponseSchema.parse(response);
      return scoreListeningPartA(p, r);
    },
  },
  LISTENING_PART_B: {
    mode: "DETERMINISTIC",
    run: async ({ payload, response }) => {
      const p = listeningMcqPayloadSchema.parse(payload);
      const r = objectiveResponseSchema.parse(response);
      return scoreListeningMcq(p, r);
    },
  },
  LISTENING_PART_C: {
    mode: "DETERMINISTIC",
    run: async ({ payload, response }) => {
      const p = listeningMcqPayloadSchema.parse(payload);
      const r = objectiveResponseSchema.parse(response);
      return scoreListeningMcq(p, r);
    },
  },
  READING_PART_A: {
    mode: "DETERMINISTIC",
    run: async ({ payload, response }) => {
      const p = readingPartAPayloadSchema.parse(payload);
      const r = objectiveResponseSchema.parse(response);
      return scoreReadingPartA(p, r);
    },
  },
  READING_PART_B: {
    mode: "DETERMINISTIC",
    run: async ({ payload, response }) => {
      const p = readingMcqPayloadSchema.parse(payload);
      const r = objectiveResponseSchema.parse(response);
      return scoreReadingMcq(p, r);
    },
  },
  READING_PART_C: {
    mode: "DETERMINISTIC",
    run: async ({ payload, response }) => {
      const p = readingMcqPayloadSchema.parse(payload);
      const r = objectiveResponseSchema.parse(response);
      return scoreReadingMcq(p, r);
    },
  },
  WRITING_LETTER: {
    mode: "AI",
    run: async ({ payload, response, userId }) => {
      const p = writingLetterPayloadSchema.parse(payload);
      const r = writingLetterResponseSchema.parse(response);
      const s = await evaluateWritingLetter({ payload: p, response: r, userId });
      return {
        pointsEarned: s.pointsEarned,
        pointsMax: s.pointsMax,
        fraction: s.fraction,
        feedback: s.feedback,
        telemetry: s.telemetry,
      };
    },
  },
  SPEAKING_ROLEPLAY: {
    mode: "AI",
    run: async ({ payload, response, userId }) => {
      const p = speakingRoleplayPayloadSchema.parse(payload);
      const r = speakingRoleplayResponseSchema.parse(response);
      const s = await evaluateSpeakingRoleplay({ payload: p, response: r, userId });
      return {
        pointsEarned: s.pointsEarned,
        pointsMax: s.pointsMax,
        fraction: s.fraction,
        feedback: s.feedback,
        telemetry: s.telemetry,
      };
    },
  },
};
