import type { OetSubTest } from "@prisma/client";
import { TIMING } from "@/lib/oet/exam-shape";

/**
 * RR-345 · what each sub-test IS, for the home page — the WHOLE real test, not its first part.
 *
 * The cards used to print Part A's blurb (Listening: "two consultations", Reading: "four short texts") and "1 task" for Speaking,
 * so a visitor read that AlmiOET has only Part A and one role-play. The bank has Parts A, B and C and two role-plays a mock.
 * The numbers here are OET's published format (exam-shape.ts holds the sources and their dates).
 */
const min = (s: number) => Math.round(s / 60);
export const SUBTEST_COPY: Record<OetSubTest, { what: string; shape: string }> = {
  LISTENING: {
    what: "Three parts, 42 questions: two consultations with notes to complete, six short workplace extracts, and two talks or interviews. In a full mock each recording plays once.",
    shape: "Parts A, B and C · 42 questions",
  },
  READING: {
    what: `Three parts, 42 questions: four short texts on one topic against a strict ${min(TIMING.readingPartASeconds)}-minute clock, then six workplace texts and two long articles in ${min(TIMING.readingPartsBandCSeconds)} minutes.`,
    shape: "Parts A, B and C · 42 questions",
  },
  WRITING: {
    what: `Read the case notes for ${min(TIMING.writingReadingSeconds)} minutes, then write a profession-specific letter (180–200 words) in ${min(TIMING.writingWritingSeconds)}. You'll get honest feedback against the OET writing criteria.`,
    shape: "1 letter a test",
  },
  SPEAKING: {
    what: `Two role-plays a test, each about ${min(TIMING.speakingSpeakSeconds)} minutes after ${min(TIMING.speakingPrepSecondsMin)} minutes to prepare, set in your profession. We estimate from a transcript of what you said — not your accent or audio.`,
    shape: "2 role-plays a test",
  },
};
