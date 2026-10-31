// LESSONS — short, phone-first lessons per assessment criterion (Writing 6, Speaking 9) and one technique lesson per
// Reading/Listening part. The content is in lessons-content.ts (beta-g PASS, Nov 2026); this file is how the app reads it.
//
// Every lesson a result screen links to is found HERE, by the same trait key the AI grader writes
// (src/lib/oet/tasks/writing-letter.ts, speaking-roleplay.ts) and by task type. tests/lessons.test.tsx asserts that every
// trait the graders can return, and every objective task type, reaches a lesson — a link to nothing is a defect nobody sees.
import type { OetTaskType } from "@prisma/client";
import { LESSONS } from "./lessons-content";

export type Lesson = {
  area: "writing" | "speaking" | "reading-listening";
  id: string;
  criterion: string;
  title: string;
  looksFor: string;
  rules: readonly string[];
  example: { situation: string; weak: string; good: string; why: string };
  selfCheck: readonly { q: string; options: readonly string[]; answer: string; explain: string }[];
};

export { LESSONS };

export const LESSON_AREAS: { area: Lesson["area"]; label: string; blurb: string }[] = [
  { area: "writing", label: "Writing", blurb: "One lesson for each of the six criteria your letter is marked on." },
  { area: "speaking", label: "Speaking", blurb: "Four lessons on your English and five on how you communicate with the patient." },
  { area: "reading-listening", label: "Reading and Listening", blurb: "One technique lesson for each part of each test." },
];

/** The facts the Reading/Listening lessons rest on that are NOT in exam-shape.ts, each read on the official page
 *  (beta-g asked for them to be confirmed, Nov 2026). Also cited in docs/sources/README.md. */
export const LESSON_FACT_SOURCES = [
  { fact: "Each Listening recording is heard once.", quote: "You only hear the recording once", url: "https://oet.com/en-us/post/listening-part-a-the-complete-guide", retrieved: "2026-10-31" },
  { fact: "There is time to read the questions before the audio starts.", quote: "You have 30 seconds to look at the notes before the audio starts playing.", url: "https://oet.com/en-us/post/listening-part-a-the-complete-guide", retrieved: "2026-10-31" },
  { fact: "There is time to read the questions before the audio starts.", quote: "Before the audio begins, you have 90 seconds to read through the questions and answer options.", url: "https://oet.com/en-us/post/listening-part-c-the-complete-guide", retrieved: "2026-10-31" },
  { fact: "Reading Part C questions follow the order of the text.", quote: "these follow the order of the text", url: "https://oet.com/en-us/post/reading-part-c-the-complete-guide", retrieved: "2026-10-31" },
  { fact: "Listening questions follow the order of the recording.", quote: "The questions come in order too.", url: "https://oet.com/en-us/post/listening-part-a-the-complete-guide", retrieved: "2026-10-31" },
] as const;

export const lessonById = (id: string): Lesson | undefined => LESSONS.find((l) => l.id === id);

/** The grader's trait key (feedback JSON) -> the lesson for that criterion. */
const TRAIT_LESSON: Record<string, string> = {
  purpose: "writing-purpose",
  content: "writing-content",
  concisenessAndClarity: "writing-conciseness-and-clarity",
  genreAndStyle: "writing-genre-and-style",
  organisationAndLayout: "writing-organisation-and-layout",
  language: "writing-language",
  intelligibility: "speaking-intelligibility",
  fluency: "speaking-fluency",
  appropriatenessOfLanguage: "speaking-appropriateness-of-language",
  resourcesOfGrammarAndExpression: "speaking-resources-of-grammar-and-expression",
  relationshipBuilding: "speaking-relationship-building",
  understandingPatientPerspective: "speaking-understanding-the-patients-perspective",
  providingStructure: "speaking-providing-structure",
  informationGathering: "speaking-information-gathering",
  informationGiving: "speaking-information-giving",
};
export const lessonForTrait = (trait: string): Lesson | undefined => (TRAIT_LESSON[trait] ? lessonById(TRAIT_LESSON[trait]) : undefined);

const TASK_LESSON: Partial<Record<OetTaskType, string>> = {
  READING_PART_A: "reading-part-a",
  READING_PART_B: "reading-part-b",
  READING_PART_C: "reading-part-c",
  LISTENING_PART_A: "listening-part-a",
  LISTENING_PART_B: "listening-part-b",
  LISTENING_PART_C: "listening-part-c",
};
export const lessonForTask = (taskType: OetTaskType): Lesson | undefined => (TASK_LESSON[taskType] ? lessonById(TASK_LESSON[taskType]!) : undefined);

export const lessonHref = (l: Pick<Lesson, "id">) => `/lessons/${l.id}`;
