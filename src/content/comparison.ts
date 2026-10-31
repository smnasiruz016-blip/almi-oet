/**
 * THE HOME-PAGE COMPARISON — owner GREEN, 31 Oct 2026 (named providers).
 *
 * 🔴 EVERY OTHER PROVIDER'S CELL IS WHAT THEIR OWN PAGE SAYS, checked on CHECKED_ON. Nothing is guessed: where their page does not
 * clearly say it, the cell is NOT_STATED. The quotes behind each cell are in the owner's file
 * Desktop\oet test\Comparison_Sources_2026-10-31.md. Re-check monthly: `npm run check:comparison` prints every URL below.
 * Facts only — no judging words about anyone (gate:claims refuses "guarantee" and a missing or stale date here).
 *
 * 🔴 ALMIOET'S OWN COLUMN IS NOT TYPED HERE. Counts come from the live bank at render time (liveCounts — the same query as the home
 * page's counts line); the explanation coverage is declared below and gate:claims re-counts it from the seed and refuses a mismatch.
 */

/** The day every provider page below was read. gate:claims refuses the section without it, or when it is older than MAX_AGE_DAYS. */
export const CHECKED_ON = "2026-10-31";
export const MAX_AGE_DAYS = 62;

export const NOT_STATED = "Not stated";

export type RowKey = "price" | "tests" | "professions" | "writing" | "speaking" | "explanations" | "feedback";

export const ROWS: { key: RowKey; label: string }[] = [
  { key: "price", label: "Price" },
  { key: "tests", label: "Full tests and mocks" },
  { key: "professions", label: "Professions" },
  { key: "writing", label: "Writing model answers" },
  { key: "speaking", label: "Speaking practice" },
  { key: "explanations", label: "Answer explanations" },
  { key: "feedback", label: "Feedback" },
];

export type Provider = { id: string; name: string; sources: string[]; cells: Record<RowKey, string> };

export const PROVIDERS: Provider[] = [
  {
    id: "benchmark",
    name: "Benchmark Education",
    sources: ["https://edubenchmark.com/course/oet", "https://edubenchmark.com/oet-mock-tests"],
    cells: {
      price: "From $79 for 3 months (Essentials); currency not stated",
      tests: "20 full tests in the course packages; 10 mock tests sold separately",
      professions: "Writing and Speaking for medicine, nursing, pharmacy and physiotherapy",
      writing: "Case notes with sample letters",
      speaking: "Role-play cards with sample recordings; Zoom speaking test with a teacher (Pro, Pro Max)",
      explanations: "Listening and Reading answers with explanations",
      feedback: "Teacher marking; written feedback in 24 hours",
    },
  },
  {
    id: "e2",
    name: "E2 Language",
    sources: ["https://www.e2language.com/en/oet"],
    cells: {
      price: "From 75.90 USD (Express)",
      tests: "Not stated (Express+ adds one teacher-graded mock test)",
      professions: "12 professions",
      writing: "Writing samples; sample answers on most practice questions",
      speaking: "Speaking samples; live classes and one-to-one online tutorials",
      explanations: NOT_STATED,
      feedback: "Teacher feedback on Writing and Speaking within 48 hours",
    },
  },
  {
    id: "cambridge",
    name: "Cambridge OET Trainer (book)",
    sources: [
      "https://shop.cambridge.org/english/product/2700225644",
      "https://cambridge.es/en/catalogue/exams/practice-material/trainers/oet-trainers",
    ],
    cells: {
      price: "€44.78 per book (Medicine edition, Cambridge shop)",
      tests: "6 practice tests per book",
      professions: "Nursing and Medicine editions",
      writing: NOT_STATED,
      speaking: "Speaking paper in each practice test",
      explanations: "Answer keys with explanations",
      feedback: NOT_STATED,
    },
  },
  {
    id: "oplo",
    name: "Oplo",
    sources: ["https://apps.apple.com/us/app/id6772713510"],
    cells: {
      price: "$24.99/month or $149.99/year (US App Store)",
      tests: NOT_STATED,
      professions: "Nurses, doctors and healthcare students",
      writing: "Model answer with Writing practice",
      speaking: "Patient and colleague role-plays",
      explanations: "Listening explanations; Reading rationales",
      feedback: "AI feedback; Listening and Reading marked instantly",
    },
  },
];

/** Listening and Reading questions with an explanation (payload.explanations[id].why, the way the review screen reads them), counted
 *  over the SERVED items (seed minus scripts/retire) on CHECKED_ON. gate:claims re-counts and refuses a mismatch, so this line cannot
 *  outlive the bank it describes. 31 Oct 2026: the first count (1,943 of 2,384) included 46 retired items no learner is ever given. */
export const EXPLAINED = { explained: 1943, questions: 1943 } as const;

export const DISCLAIMER = (on: string) =>
  `Information from each provider's public website, checked ${on}. Names are trademarks of their owners; AlmiOET is not affiliated with them.`;
