/**
 * SHAPE REPORT  —  `npm run report:shape`
 *
 * THIS IS A REPORT, NOT A GATE. It always exits 0. It exempts nothing, silences
 * nothing, and has no allow-list: every task type in the seed source is printed,
 * whether it matches OET's published shape or not.
 *
 * 🔴 IT BECOMES A BLOCKING GATE WHEN THE BANK IS REBUILT. The bank does not
 * currently match OET's published shape — Reading Part C is the loudest case, at
 * 3 options where OET publishes 4 — and turning this red today would block every
 * build for a defect no build can fix. Writing the missing distractors is a
 * CONTENT pass, not a tooling one. When that pass lands, this file moves into
 * scripts/gates/, gains a non-zero exit, and joins `gate:all`. Until then it
 * exists so nobody has to rediscover the gap, and so the gap has a number.
 *
 * MEASURED vs PUBLISHED. Everything in the "measured" columns is computed from
 * scripts/seed/gen/ — what actually ships. Everything in the "published" columns
 * comes from src/lib/oet/exam-shape.ts, where each figure sits beside the OET
 * sentence and URL it was read from. The two are never derived from each other.
 *
 * ⚠️ THE UNIT MATTERS AND IS NOT ASSUMED. OET publishes figures per STIMULUS
 * (one Part B extract, one Part C text) or per PART (Part A's 20 questions across
 * four texts). One of our items is not automatically one of either. So the report
 * prints what one of our items actually CONTAINS — stimuli per item — instead of
 * quietly normalising it away. Where our unit and OET's differ, the ratio is
 * still shown, and the unit line is what tells you how to read it.
 *
 * ⚠️ LISTENING WORD COUNTS ARE NOT AN OET FIGURE. OET publishes DURATIONS for
 * Listening, not word counts. The `stimulusWords` band in exam-shape.ts is a
 * convenience derived at 130 words/minute, and THAT RATE IS OURS. The audio
 * duration OET actually publishes cannot be measured from the seed source at all
 * — it needs the rendered file — so this report says so rather than printing a
 * comparison it cannot make.
 */
import { GEN_ITEMS } from "./seed/gen";
import {
  LISTENING_PART_A,
  LISTENING_PART_B,
  LISTENING_PART_C,
  READING_PART_A,
  READING_PART_B,
  READING_PART_C,
  SPEECH_WORDS_PER_MINUTE_ASSUMPTION,
  TIMING,
  WRITING_WORDS,
  type ExamShape,
} from "../src/lib/oet/exam-shape";

type Opt = { id: string; text?: string };
type Q = { id: string; stem?: string; answer?: string; options?: Opt[] };
type Gap = { id: string; label?: string; answer?: string };
type Text = { id: string; heading?: string; body?: string };
type Payload = {
  texts?: Text[];
  passages?: Text[];
  questions?: Q[];
  gaps?: Gap[];
  audioScript?: string;
  caseNotes?: string;
  wordMin?: number;
  wordMax?: number;
  prepSeconds?: number;
  speakSeconds?: number;
};
type Item = { taskType: string; title: string; payload: Payload; timeLimitSeconds?: number };

const items = GEN_ITEMS as unknown as Item[];

const words = (s: string | undefined) => (s ? s.trim().split(/\s+/).filter(Boolean).length : 0);
const median = (xs: number[]) => {
  if (xs.length === 0) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const fmt = (n: number) => (Number.isFinite(n) ? (Number.isInteger(n) ? String(n) : n.toFixed(1)) : "—");
const span = (xs: number[]) =>
  xs.length === 0 ? "—" : `${fmt(Math.min(...xs))}–${fmt(Math.max(...xs))} (median ${fmt(median(xs))})`;
const ratio = (measured: number, published: number) =>
  !Number.isFinite(measured) || !published ? "—" : `${(measured / published).toFixed(2)}×`;

const PAD = 24;
const row = (name: string, measured: string, published: string, r: string) =>
  console.log(`    ${name.padEnd(PAD)}  measured ${measured.padEnd(28)}  published ${published.padEnd(14)}  ratio ${r}`);
const note = (s: string) => console.log(`    ${"".padEnd(PAD)}  ↳ ${s}`);

const SHAPES: Record<string, ExamShape> = {
  LISTENING_PART_A,
  LISTENING_PART_B,
  LISTENING_PART_C,
  READING_PART_A,
  READING_PART_B,
  READING_PART_C,
};

const ORDER = [
  "LISTENING_PART_A",
  "LISTENING_PART_B",
  "LISTENING_PART_C",
  "READING_PART_A",
  "READING_PART_B",
  "READING_PART_C",
  "WRITING_LETTER",
  "SPEAKING_ROLEPLAY",
];

const byType = new Map<string, Item[]>();
for (const it of items) {
  const list = byType.get(it.taskType);
  if (list) list.push(it);
  else byType.set(it.taskType, [it]);
}

console.log("");
console.log("SHAPE REPORT — measured seed source vs OET's published shape");
console.log(`source: scripts/seed/gen  ·  ${items.length} items  ·  published figures: src/lib/oet/exam-shape.ts`);
console.log("REPORT ONLY — exits 0. Becomes a blocking gate when the bank is rebuilt.");
console.log("");

// Every task type in the source is printed, and every task type we EXPECT is
// printed even if the source has none of it — a task type that silently vanished
// from the bank must not vanish from the report too.
const seen = new Set<string>([...byType.keys(), ...ORDER]);
for (const taskType of [...seen].sort((a, b) => {
  const ia = ORDER.indexOf(a), ib = ORDER.indexOf(b);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
})) {
  const list = byType.get(taskType) ?? [];
  console.log("─".repeat(100));
  console.log(`${taskType}   n=${list.length} item(s)`);
  if (list.length === 0) {
    console.log("    NO ITEMS IN THE SEED SOURCE for this task type.");
    console.log("");
    continue;
  }

  const shape = SHAPES[taskType];

  // ---- what one of our items actually contains -----------------------------
  const stimuliPerItem = list.map(
    (i) =>
      (i.payload.texts?.length ?? 0) +
      (i.payload.passages?.length ?? 0) +
      (i.payload.audioScript ? 1 : 0),
  );
  if (stimuliPerItem.some((n) => n > 0)) {
    console.log(
      `    unit: one item holds ${span(stimuliPerItem)} stimulus/stimuli` +
        (shape ? `; OET builds a full part from ${shape.stimuliPerPart}` : ""),
    );
  }

  // ---- stimulus words ------------------------------------------------------
  const isListening = taskType.startsWith("LISTENING");
  const stimWords = list.map((i) =>
    isListening
      ? words(i.payload.audioScript)
      : [...(i.payload.texts ?? []), ...(i.payload.passages ?? [])].reduce(
          (n, t) => n + words(t.body),
          0,
        ),
  );
  if (stimWords.some((n) => n > 0)) {
    const pub = shape?.stimulusWords;
    const mid = pub ? (pub.min + pub.max) / 2 : NaN;
    row(
      "stimulus words / item",
      span(stimWords),
      pub ? `${pub.min}–${pub.max}` : "not published",
      pub ? ratio(median(stimWords), mid) : "—",
    );
    if (pub) {
      const inBand = stimWords.filter((n) => n >= pub.min && n <= pub.max).length;
      note(`${inBand} of ${stimWords.length} item(s) inside the published band`);
    }
    if (isListening) {
      note(
        `OET publishes DURATION for Listening, not words. The band above is OURS, derived at ` +
          `${SPEECH_WORDS_PER_MINUTE_ASSUMPTION} wpm — never quote it as published.`,
      );
      if (shape?.audioSeconds) {
        note(
          `OET publishes ${shape.audioSeconds.min}–${shape.audioSeconds.max}s of audio per recording. ` +
            `NOT MEASURED HERE: duration needs the rendered file, not the script.`,
        );
      }
    }
  }

  // ---- questions per item --------------------------------------------------
  const qPerItem = list.map((i) => (i.payload.questions?.length ?? 0) + (i.payload.gaps?.length ?? 0));
  if (qPerItem.some((n) => n > 0) || shape) {
    row(
      "questions / item",
      span(qPerItem),
      shape ? String(shape.questionsPerStimulus) : "not published",
      shape ? ratio(median(qPerItem), shape.questionsPerStimulus) : "—",
    );
    if (taskType === "READING_PART_A") {
      note(
        "OET's 20 is the whole of Part A across its four texts, and one of our items IS a whole " +
          "Part A set — so this ratio is comparing like with like.",
      );
    }
  }

  // ---- options per question ------------------------------------------------
  //
  // A part that mixes question types (Reading Part A) gets one row PER TYPE.
  // Rolling it into a single number is what previously reported four-option
  // matching questions as a defect against a published "not multiple choice".
  const allQs = list.flatMap((i) => i.payload.questions ?? []);

  const compareOptions = (
    rowLabel: string,
    questions: Q[],
    published: number,
    extra?: string,
  ) => {
    const counts = questions.map((q) => q.options?.length ?? 0);
    row(
      rowLabel,
      counts.length ? span(counts) : "no questions of this type",
      published === 0 ? "0 (written answer)" : String(published),
      published === 0 ? "—" : ratio(median(counts), published),
    );
    if (extra) note(extra);
    if (!counts.length) return;
    const short = counts.filter((n) => n < published).length;
    const over = counts.filter((n) => n > published).length;
    note(
      `${counts.length} question(s); ${short} below the published ${published}, ${over} above, ` +
        `${counts.length - short - over} exact`,
    );
    if (published === 0 && over > 0) {
      note(
        `🔴 ${over} question(s) carry options where OET's answer is WRITTEN. Offering a choice ` +
          "turns a recall task into a recognition task — easier than the exam, in the other direction.",
      );
    }
    if (published > 0 && short > 0) {
      note(
        `🔴 ${short} question(s) ship fewer options than OET publishes. Each missing distractor ` +
          "raises the odds of a correct guess and makes the practice easier than the exam.",
      );
    }
  };

  if (shape?.questionTypes) {
    // Group the bank's questions by their own `kind` vocabulary, then attach each
    // published type to the kind(s) it names. Anything unmatched on EITHER side is
    // printed rather than dropped — a silently unmatched group is how a whole
    // question type disappears from a report without disappearing from the bank.
    const byKind = new Map<string, Q[]>();
    for (const q of allQs) {
      const k = (q as Q & { kind?: string }).kind ?? "(no kind field)";
      const g = byKind.get(k);
      if (g) g.push(q);
      else byKind.set(k, [q]);
    }

    const claimed = new Map<string, number[]>();
    for (const qt of shape.questionTypes) {
      for (const k of qt.bankKinds) {
        const seenCounts = claimed.get(k) ?? [];
        seenCounts.push(qt.optionsPerQuestion);
        claimed.set(k, seenCounts);
      }
    }

    for (const qt of shape.questionTypes) {
      const questions = qt.bankKinds.flatMap((k) => byKind.get(k) ?? []);
      const shared = qt.bankKinds.filter((k) => (claimed.get(k)?.length ?? 0) > 1);
      const sharedNote = shared.length
        ? `shares bank kind "${shared.join(",")}" with another published type — the ` +
          "measured column below is the COMBINED group, not this type alone"
        : undefined;
      compareOptions(`options · ${qt.type}`, questions, qt.optionsPerQuestion, sharedNote);
      note(qt.note);
    }

    for (const [k, qs] of byKind) {
      const isClaimed = shape.questionTypes.some((qt) => qt.bankKinds.includes(k));
      if (!isClaimed) {
        row(`options · kind "${k}"`, span(qs.map((q) => q.options?.length ?? 0)), "UNMATCHED", "—");
        note(
          `🔴 the bank uses questions[].kind = "${k}", which no published question type in ` +
            "exam-shape.ts claims. Either OET publishes a type we have not recorded, or the bank " +
            "invented one. Neither is checkable until it is named.",
        );
      }
    }
  } else if (shape || allQs.some((q) => q.options?.length)) {
    const withOptions = allQs.filter((q) => Array.isArray(q.options) && q.options.length > 0);
    const optCounts = withOptions.map((q) => q.options!.length);
    const pub = shape?.optionsPerQuestion ?? null;
    row(
      "options / MCQ question",
      optCounts.length ? span(optCounts) : "no MCQ questions",
      pub === null ? "mixed (see questionTypes)" : pub === 0 ? "not multiple choice" : String(pub),
      pub === null || pub === 0 ? "—" : ratio(median(optCounts), pub),
    );
    if (pub !== null && pub > 0 && optCounts.length) {
      const short = optCounts.filter((n) => n < pub).length;
      const over = optCounts.filter((n) => n > pub).length;
      note(
        `${withOptions.length} MCQ question(s); ${short} below the published ${pub}, ${over} above, ` +
          `${withOptions.length - short - over} exact`,
      );
      if (short > 0) {
        note(
          `🔴 ${short} question(s) ship fewer options than OET publishes. Each missing distractor ` +
            "raises the odds of a correct guess and makes the practice easier than the exam.",
        );
      }
    }
    if (pub === 0 && optCounts.length) {
      note("OET does not publish this part as multiple choice, yet our items carry options.");
    }
  }
  if (shape) {
    console.log(`    source: ${shape.source}`);
    console.log(`            ${shape.url}`);
  }

  // ---- task types exam-shape.ts does not describe --------------------------
  if (taskType === "WRITING_LETTER") {
    const wordMins = list.map((i) => i.payload.wordMin ?? NaN).filter(Number.isFinite);
    const wordMaxs = list.map((i) => i.payload.wordMax ?? NaN).filter(Number.isFinite);
    const caseWords = list.map((i) => words(i.payload.caseNotes));
    row("case-notes words / item", span(caseWords), "not published", "—");
    row("payload wordMin", span(wordMins), String(WRITING_WORDS.min), ratio(median(wordMins), WRITING_WORDS.min));
    row("payload wordMax", span(wordMaxs), String(WRITING_WORDS.max), ratio(median(wordMaxs), WRITING_WORDS.max));
    note('OET calls 180–200 a GUIDE and states no automatic penalty — see exam-shape.ts.');
    note("OET publishes no case-notes length, so there is nothing to compare the first row against.");
  }
  if (taskType === "SPEAKING_ROLEPLAY") {
    const prep = list.map((i) => i.payload.prepSeconds ?? NaN).filter(Number.isFinite);
    const speak = list.map((i) => i.payload.speakSeconds ?? NaN).filter(Number.isFinite);
    row(
      "prepSeconds",
      span(prep),
      `${TIMING.speakingPrepSecondsMin}–${TIMING.speakingPrepSecondsMax}`,
      ratio(median(prep), TIMING.speakingPrepSecondsMin),
    );
    const outside = prep.filter(
      (n) => n < TIMING.speakingPrepSecondsMin || n > TIMING.speakingPrepSecondsMax,
    ).length;
    note(`${outside} item(s) outside OET's published "2-3 minutes to prepare for each"`);
    row("speakSeconds", span(speak), String(TIMING.speakingSpeakSeconds), ratio(median(speak), TIMING.speakingSpeakSeconds));
    const cardWords = list.map((i) => words(i.payload.caseNotes ?? undefined));
    void cardWords;
  }

  // ---- the stored field nothing reads --------------------------------------
  const tls = [...new Set(list.map((i) => i.timeLimitSeconds ?? 0))].sort((a, b) => a - b);
  console.log(
    `    timeLimitSeconds stored: ${tls.join(", ")}` +
      (tls.every((n) => n === 0)
        ? "   ← zero on every item; the column carries no information"
        : ""),
  );
  console.log("");
}

console.log("─".repeat(100));
console.log(
  "timeLimitSeconds is stored on every item and read NOWHERE in src/ (measured 2026-08-31).\n" +
    "The countdowns a learner now sees come from TIMING in src/lib/oet/exam-shape.ts, not from\n" +
    "this column — so the column is dead data, not a second opinion. Either it becomes the\n" +
    "source of truth per item or it should go; it should not sit here looking authoritative.",
);
console.log("");
