// EXAM SHAPE — the published shape of the Occupational English Test.
//
// Every number in this file was READ BY A HUMAN from an OET-owned page on
// 2026-08-31 and is HAND-TYPED here beside the sentence it came from. Nothing is
// derived from our own bank, our own gates, or from another file in this repo.
//
// 🔴 WHY THAT MATTERS. On 2026-08-04 someone edited `scale.ts`, replaced OET's
// published C band with an invented one, wrote "re-verified" beside it, and
// attached no artefact. It shipped wrong for 27 days and was only caught when
// the owner fetched OET's own PDF. A number with a confident comment and no
// source is not evidence — it is a claim. So: if you change a number here, you
// change the quoted sentence and the URL in the same edit, or you do not change
// it at all.
//
// ⚠️ occupationalenglishtest.org returns 403 to an automated fetch; oet.com
// serves the same material. Try the shorter domain first.

/**
 * One question TYPE inside a part that mixes several.
 *
 * Reading Part A is the only such part, and collapsing it to a single
 * `optionsPerQuestion` was a mistake that cost a false positive: it was set to 0
 * on the reasoning that Part A "is not multiple choice", so `report:shape`
 * reported our four-option matching questions as a defect against a published
 * figure of "not multiple choice". The bank was right and the published figure
 * was wrong. A part with three question types needs three shapes.
 */
export type QuestionTypeShape = {
  /** The type as OET names it. */
  type: string;
  /** Options the candidate chooses between. 0 = the candidate writes an answer. */
  optionsPerQuestion: number;
  /**
   * The value(s) our seed payloads use in `questions[].kind` for this type, so a
   * report can compare like with like instead of comparing a count against a
   * vocabulary it does not share. This is a NAMING map, never a source of truth:
   * the option counts above are hand-typed from OET, not read from the bank.
   */
  bankKinds: readonly string[];
  note: string;
};

export type ExamShape = {
  /** Words in the stimulus a candidate must read or hear, per item. */
  stimulusWords?: { min: number; max: number };
  /** Seconds of audio per recording, where OET publishes a duration. */
  audioSeconds?: { min: number; max: number };
  /** Questions attached to ONE stimulus. */
  questionsPerStimulus: number;
  /**
   * Options per multiple-choice question, where ONE number describes the whole
   * part. 0 = the part is not multiple choice at all.
   *
   * null = the part MIXES question types and no single number is true of it.
   * Read `questionTypes` instead. Never treat null as 0: they mean opposite
   * things, and reading one as the other is exactly the bug this field grew a
   * third state to prevent.
   */
  optionsPerQuestion: number | null;
  /** Present only where `optionsPerQuestion` is null. */
  questionTypes?: readonly QuestionTypeShape[];
  /** How many stimuli make one whole sub-test part. */
  stimuliPerPart: number;
  /** The sentence this was taken from, quoted. */
  source: string;
  url: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// READING
// ─────────────────────────────────────────────────────────────────────────────

// 🔴 CORRECTED 2026-09-01. This shape previously said `optionsPerQuestion: 0`
// with the comment "matching, short answer, sentence completion", on the
// reasoning that Part A is not a multiple-choice part. That was WRONG, and it
// made `npm run report:shape` print a false positive against a bank that was
// correct: our 65 matching questions carry four options each, and the report
// flagged them for existing at all.
//
// Part A has three question types and they do not share a shape. Only the
// matching questions offer options; short answer and sentence completion are
// written. The bank already encodes this in `questions[].kind` — measured
// 2026-09-01 across all 18 Part A items: kind "match" n=65, every one with
// exactly 4 options; kind "gap" n=54, every one with none. The bank was not
// changed to match the mistake.
//
// ⚠️ PROVENANCE OF THE NUMBER 4, STATED EXACTLY. Two of the three inputs are
// quoted from the OET page in `source` below: that there are four texts, and
// that the three question types are Matching, Short Answer and Sentence
// Completion. The third input — that a MATCHING question is a choice between
// those four texts, and therefore has four options — is the OWNER'S statement,
// made on 2026-09-01. It is NOT a sentence retrieved by this repo's tooling.
// Both oet.com and occupationalenglishtest.org return HTTP 403 to an automated
// fetch (re-confirmed against this exact URL on 2026-09-01), so no agent here
// can quote it or re-check it. Treat the 4 as owner-attested, not page-quoted,
// until an artefact lands in docs/sources/.
export const READING_PART_A: ExamShape = {
  questionsPerStimulus: 20, // 20 questions across the set of four texts
  optionsPerQuestion: null, // MIXED — see questionTypes. null is not 0.
  questionTypes: [
    {
      type: "Matching",
      optionsPerQuestion: 4,
      bankKinds: ["match"],
      note:
        "A matching question is answered by choosing which of the four texts contains the " +
        'information, so its options are the texts themselves: "Four texts on a single ' +
        'healthcare topic" gives 4. Owner-attested 2026-09-01; not page-quoted (403).',
    },
    {
      type: "Short Answer",
      optionsPerQuestion: 0,
      bankKinds: ["gap"],
      note: 'Written, not chosen: "Answers are usually between 1 and 3 words."',
    },
    {
      type: "Sentence Completion",
      optionsPerQuestion: 0,
      bankKinds: ["gap"],
      note:
        'Written, not chosen: "Answers are usually between 1 and 3 words." Our bank does not ' +
        "distinguish this from Short Answer — both are kind \"gap\" — so a report cannot tell " +
        "the two apart. They agree on the option count, so nothing is lost here; they would " +
        "have to be separated before anything else could be said about either.",
    },
  ],
  stimuliPerPart: 4,
  source:
    '"Four texts on a single healthcare topic" · "There are 20 questions and three question types: ' +
    'Matching, Short Answer and Sentence Completion." · "Part A is strictly timed and you must ' +
    'complete all 20 question items within 15 minutes." · "Answers are usually between 1 and 3 words."',
  url: "https://oet.com/en-us/post/reading-part-a-the-complete-guide",
};

export const READING_PART_B: ExamShape = {
  stimulusWords: { min: 100, max: 140 },
  questionsPerStimulus: 1,
  optionsPerQuestion: 3,
  stimuliPerPart: 6,
  source:
    '"There are six short extracts in Part B." · "Each one is about 100-140 words." · ' +
    '"one 3-option multiple choice question per extract"',
  url: "https://oet.com/en-us/post/reading-part-b-the-complete-guide",
};

export const READING_PART_C: ExamShape = {
  stimulusWords: { min: 700, max: 900 }, // "around 800 words" — a band around the published figure
  questionsPerStimulus: 8,
  optionsPerQuestion: 4, // 🔴 our bank ships 3. This is the number that must win.
  stimuliPerPart: 2,
  source:
    '"The two Part C texts are around 800 words each." · ' +
    '"Each Part C text has eight 4-option multiple-choice questions."',
  url: "https://oet.com/en-us/post/reading-part-c-the-complete-guide",
};

// ─────────────────────────────────────────────────────────────────────────────
// LISTENING
//
// ⚠️ OET publishes DURATIONS, not word counts. `audioSeconds` is therefore the
// authoritative field for Listening and the one a gate should assert against —
// measure the rendered audio, not the script. `stimulusWords` below is a
// CONVENIENCE band derived at 130 words/minute. THAT RATE IS OURS, NOT OET'S.
// Never quote it as published. If the rendered audio can be measured, prefer it
// and ignore the word band entirely.
// ─────────────────────────────────────────────────────────────────────────────

export const SPEECH_WORDS_PER_MINUTE_ASSUMPTION = 130; // OURS. Not OET's.

export const LISTENING_PART_A: ExamShape = {
  audioSeconds: { min: 270, max: 300 }, // 4.5–5 minutes
  stimulusWords: { min: 550, max: 700 },
  questionsPerStimulus: 12,
  optionsPerQuestion: 0, // note completion
  stimuliPerPart: 2,
  source:
    '"Two audio recordings" · "Each audio is approximately 4.5 - 5 minutes long" · ' +
    '"12 questions per extract" · answers "generally between one and three words"',
  url: "https://oet.com/en-us/post/listening-part-a-the-complete-guide",
};

export const LISTENING_PART_B: ExamShape = {
  audioSeconds: { min: 40, max: 55 }, // "approximately 45 seconds each"
  stimulusWords: { min: 85, max: 120 },
  questionsPerStimulus: 1,
  optionsPerQuestion: 3,
  stimuliPerPart: 6,
  source:
    '"Six audio recordings of workplace interactions" · "Approximately 45 seconds each" · ' +
    '"One 3-option multiple-choice question per audio"',
  url: "https://oet.com/en-us/post/listening-part-b-the-complete-guide",
};

export const LISTENING_PART_C: ExamShape = {
  audioSeconds: { min: 240, max: 300 }, // 4–5 minutes
  stimulusWords: { min: 500, max: 650 },
  questionsPerStimulus: 6,
  optionsPerQuestion: 3,
  stimuliPerPart: 2,
  source:
    '"Two audio recordings" · "Each recording is around 4-5 minutes" · ' +
    '"six 3-option multiple-choice questions per audio"',
  url: "https://oet.com/en-us/post/listening-part-c-the-complete-guide",
};

// ─────────────────────────────────────────────────────────────────────────────
// TIMING — published, and currently reaching the learner in ONE case out of four
//
// 🔴 Measured 2026-08-31: `timeLimitSeconds` is read NOWHERE in src/. Reading's
// only timer counts UP. `prepSeconds` is not destructured by SpeakingComposer at
// all. Only `speakSeconds` is honoured. A stored number the product never reads
// is not a feature, and a gate that validates it proves nothing about what the
// learner sees.
// ─────────────────────────────────────────────────────────────────────────────

export const TIMING = {
  readingPartASeconds: 15 * 60,
  readingPartsBandCSeconds: 45 * 60,
  /** Writing = 5 minutes reading time, THEN 40 minutes writing. 45 total. */
  writingReadingSeconds: 5 * 60,
  writingWritingSeconds: 40 * 60,
  /**
   * 🔴 PER ROLE-PLAY: THREE MINUTES. CORRECTED 4 SEPTEMBER 2026.
   *
   * Two OET pages, and they are not equally specific. The older one this file
   * already cited says "2-3 minutes to prepare for each" — a range — and we took
   * the BOTTOM of it, 120, and shipped that as the item default. The newer page
   * states one number and states it four times:
   *
   *   "Before each role play, you are given a role card and three minutes to
   *    prepare."   — oet.com/post/did-you-know-the-oet-speaking-test-gives-you-
   *                  three-preparation-minutes (14 November 2024)
   *
   * A range and a specific figure are not two measurements in conflict; the
   * specific one is the measurement and the range is a summary of it. Same
   * ruling as READING_PART_C's 653-836 over 750-850: where a measured value and
   * a round summary disagree, the measurement governs.
   *
   * CORROBORATED ARITHMETICALLY, which is why this is not just a newer page
   * winning: 2 role plays x (3 prep + 5 speak) = 16 minutes, plus the
   * introduction, lands on OET's own "approximately 20 minutes" for the Speaking
   * sub-test. At two minutes it would be 14, which that figure does not fit.
   *
   * The min/max pair is kept because scripts/report-shape.ts reports a band, but
   * BOTH ENDS ARE NOW 180: there is no range left to sit at the bottom of.
   */
  speakingPrepSecondsMin: 180,
  speakingPrepSecondsMax: 180,
  speakingSpeakSeconds: 5 * 60,
} as const;

export const TIMING_SOURCES = {
  readingPartA:
    '"Part A is strictly timed and you must complete all 20 question items within 15 minutes." — ' +
    "https://oet.com/en-us/post/reading-part-a-the-complete-guide",
  readingBandC:
    '"You have 45 minutes in total to complete Reading Parts B and C." — ' +
    "https://oet.com/en-us/post/reading-part-b-the-complete-guide",
  writing:
    '"The five minutes of reading time at the start of the Writing sub-test…" and "…the remaining ' +
    '40 minutes to write a response of the required length and check over what you have written." — ' +
    "https://oet.com/ready/writing  " +
    "(This RESOLVES the apparent 45-vs-40 contradiction: 5 + 40 = 45. Both OET pages were right.)",
  speaking:
    '"Before each role play, you are given a role card and three minutes to prepare." and ' +
    '"the three-minute preparation time before each role play" — ' +
    "https://oet.com/post/did-you-know-the-oet-speaking-test-gives-you-three-preparation-minutes " +
    "(14 November 2024, read 2026-09-04). " +
    'SUPERSEDES the earlier "2-3 minutes to prepare for each" at ' +
    "https://www.occupationalenglishtest.org/test-information/speaking/ (read 2026-08-31), which " +
    "is a range summarising the same figure. We had taken the bottom of that range and shipped " +
    "120 seconds on 180 live items.",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// WRITING LENGTH — and a warning about our own grader
// ─────────────────────────────────────────────────────────────────────────────

export const WRITING_WORDS = { min: 180, max: 200 } as const;

/**
 * 🔴 OET calls this a GUIDE, and its page states no automatic penalty:
 *   "the word limit of 180-200 words in OET Writing is there as a guide"
 *   "Only the body of the letter (the paragraphs) is included within the word limit."
 *   — https://oet.com/en-us/post/writing-word-limit
 *
 * Our grader multiplies the score by 0.6 under the floor and 0.85 over the top.
 * THOSE MULTIPLIERS ARE OURS, from a fixture run. They are not an OET rule and
 * must never be described as one in any UI copy, and a hard cliff at 179 words
 * contradicts the word "guide". Treat this as an open question for the owner,
 * not a number to defend.
 */
export const WORD_COUNT_PENALTY_IS_OURS_NOT_OETS = true;

// ─────────────────────────────────────────────────────────────────────────────
// GRADE BANDS — from the official page the owner read; CITED, never stored
// ─────────────────────────────────────────────────────────────────────────────

/**
 * "Understanding OET scores", Occupational English Test, retrieved 2026-08-31.
 * Cited in docs/sources/README.md; the PDF itself is deliberately NOT in this
 * repository — see the standing rule at the top of that file.
 * Published table: A 450-500 · B 400-440 and 350-390 · C+ 300-340 · C 250-290 and 200-240.
 *
 * 🔴 The document has NO D row and NO E row, yet OET's Results-and-Scoring page
 * says grades run "from A (highest) to E (lowest)". Two official sources, and
 * they do not agree about what lies below 200. REPORT THAT; DO NOT RESOLVE IT.
 * Restoring C's floor to 200 is sourced. Inventing D and E beneath it is not.
 */
export const GRADE_FLOORS_PUBLISHED = [
  { grade: "A", floor: 450 },
  { grade: "B", floor: 350 },
  { grade: "C+", floor: 300 },
  { grade: "C", floor: 200 }, // 🔴 currently 250 in scale.ts — a 220 is graded D and OET says C
] as const;
