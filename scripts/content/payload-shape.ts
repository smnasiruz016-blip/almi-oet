/**
 * 🔴 THE ONE PLACE THIS PROJECT DECIDES WHAT A WELL-FORMED PAYLOAD IS.
 *
 * Two callers, one implementation:
 *
 *   scripts/content/apply-verified-content-2026-09-06.ts  refuses to WRITE a
 *       payload that breaks the structural rules.
 *   scripts/content/verify-bank-shape.ts                  asserts the whole bank
 *       against the structural rules AND the exam-shape rules.
 *
 * A second, inline copy of either rule set would be a second answer to "is this
 * payload sound", and two answers to one question is the family of defect this
 * repo has spent the most time on.
 *
 * ── WHY THE STRUCTURAL RULES ARE NOT NEGOTIABLE ─────────────────────────────
 *
 * The grader reads a learner's answer with `answerFor(response, q.id)`, which is
 * a plain `answers[id]` lookup. A question with no `id` reads `answers[undefined]`
 * -> "" -> MARKED WRONG, every time, silently.
 *
 * On 6 September 2026 a verified content batch arrived with 558 questions across
 * 51 items carrying no `id` at all. Nothing in the repo would have caught it: the
 * payload column is `Json`, the gates read counts and words, and the walk does
 * not sit those particular items. It was caught by measuring the incoming files
 * against what the code actually reads. This module is that measurement, kept.
 *
 * The id convention is `q1`..`qN` IN ARRAY ORDER, which is what all 1066 live
 * items use. Order is part of the rule, not decoration: ids that are present but
 * shuffled would mark a learner against the wrong question and every count in
 * every gate would still be right.
 */
import { words } from "../gates/words";

export type Option = { id?: string; text?: string };
export type Question = { id?: string; stem?: string; kind?: unknown; answer?: string; options?: Option[] };
export type Payload = {
  questions?: Question[];
  gaps?: { id?: string; label?: string; answer?: string }[];
  texts?: { heading?: string; body?: string }[];
  passages?: { id?: string; body?: string }[];
  audioScript?: string;
  caseNotes?: string;
  candidateCard?: string;
  prepSeconds?: number;
  speakSeconds?: number;
};

/** The task types whose questions are multiple choice. */
export const MCQ_TASKS = ["READING_PART_B", "READING_PART_C", "LISTENING_PART_B", "LISTENING_PART_C"] as const;
const isMcq = (t: string) => (MCQ_TASKS as readonly string[]).includes(t);

/**
 * STRUCTURAL RULES — what the GRADER needs to be able to mark this item at all.
 * Breaking one of these is not a content opinion; it is an item that cannot be
 * scored. The applier hard-fails on any of them.
 */
export function structuralProblems(taskType: string, slug: string, payload: Payload): string[] {
  const out: string[] = [];
  const add = (m: string) => out.push(`${slug}: ${m}`);
  const qs = payload.questions ?? [];

  // Every question carries an id, and the ids are q1..qN in array order.
  if (qs.length > 0) {
    qs.forEach((q, i) => {
      const want = `q${i + 1}`;
      if (!q.id) add(`question ${i + 1} of ${qs.length} has no id — the grader reads answers[q.id]`);
      else if (q.id !== want) add(`question ${i + 1} has id ${JSON.stringify(q.id)}, expected ${JSON.stringify(want)}`);
    });
  }

  // Multiple choice: options carry ids, and the answer names one of them.
  if (isMcq(taskType)) {
    for (const q of qs) {
      const opts = q.options ?? [];
      if (opts.length === 0) add(`${q.id ?? "?"} has no options`);
      opts.forEach((o, i) => {
        if (!o.id) add(`${q.id ?? "?"} option ${i + 1} has no id`);
        if (typeof o.text !== "string" || !o.text.trim()) add(`${q.id ?? "?"} option ${o.id ?? i + 1} has no text`);
      });
      if (!opts.some((o) => o.id === q.answer)) {
        add(`${q.id ?? "?"} answer ${JSON.stringify(q.answer)} is not one of its option ids`);
      }
    }
  }

  // Reading Part A is free text, and its questions are match|gap ONLY.
  if (taskType === "READING_PART_A") {
    for (const q of qs) {
      if (q.kind !== "match" && q.kind !== "gap") add(`${q.id ?? "?"} has kind ${JSON.stringify(q.kind)} (match|gap only)`);
      if (typeof q.answer !== "string" || !q.answer.trim()) add(`${q.id ?? "?"} has no answer`);
    }
  }

  // Listening Part A is note completion: every gap is addressed by its own id.
  if (taskType === "LISTENING_PART_A") {
    const gaps = payload.gaps ?? [];
    if (gaps.length === 0) add("has no gaps");
    gaps.forEach((g, i) => {
      if (!g.id) add(`gap ${i + 1} has no id — the grader reads answers[gap.id]`);
      if (typeof g.answer !== "string" || !g.answer.trim()) add(`gap ${g.id ?? i + 1} has no answer`);
    });
  }

  return out;
}

/** The lead-in every Reading Part A matching stem must carry. */
export const READING_A_MATCH_LEADIN = "In which text can you find information about ";

/** A stored per-attempt count, so a superseded attempt can be recognised later. */
export function answerableCount(taskType: string, payload: Payload): number {
  if (taskType === "LISTENING_PART_A") return (payload.gaps ?? []).length;
  return (payload.questions ?? []).length;
}

/**
 * A KEY THAT IS SIMPLY LONGER THAN EVERY DISTRACTOR IS GUESSABLE WITHOUT READING.
 *
 * Both conditions must hold before it counts, because either alone fires on
 * honest items: a long key among long options is not a cue, and a key one word
 * longer than a short distractor is not either.
 *
 *   >= 8 characters longer than EVERY distractor, AND
 *   >= 15% longer than the LONGEST distractor
 */
export function lengthCue(q: Question): { key: number; longestDistractor: number } | null {
  const opts = q.options ?? [];
  const key = opts.find((o) => o.id === q.answer);
  if (!key || typeof key.text !== "string") return null;
  const others = opts.filter((o) => o.id !== q.answer).map((o) => (o.text ?? "").length);
  if (others.length === 0) return null;
  const k = key.text.length;
  const longest = Math.max(...others);
  const beatsAll = others.every((n) => k - n >= 8);
  const beatsLongest = k >= longest * 1.15;
  return beatsAll && beatsLongest ? { key: k, longestDistractor: longest } : null;
}

/**
 * EXAM-SHAPE RULES — what a full-length OET item looks like. Counted across the
 * whole bank by verify-bank-shape.
 */
export function bankShapeProblems(taskType: string, slug: string, payload: Payload): string[] {
  const out: string[] = [];
  const add = (m: string) => out.push(`${slug}: ${m}`);
  const qs = payload.questions ?? [];

  if (taskType === "READING_PART_A") {
    const texts = payload.texts ?? [];
    if (texts.length !== 4) add(`${texts.length} texts, law 4`);
    if (qs.length !== 20) add(`${qs.length} questions, law 20`);
    const match = qs.filter((q) => q.kind === "match");
    const gap = qs.filter((q) => q.kind === "gap");
    if (match.length !== 7) add(`${match.length} match questions, law 7`);
    if (gap.length !== 13) add(`${gap.length} gap questions, law 13`);
    for (const q of match) {
      const stem = q.stem ?? "";
      if (!stem.startsWith(READING_A_MATCH_LEADIN)) {
        add(`${q.id} does not begin ${JSON.stringify(READING_A_MATCH_LEADIN)}: ${JSON.stringify(stem.slice(0, 60))}`);
      }
      if (!stem.endsWith("?")) add(`${q.id} does not end with "?": ${JSON.stringify(stem.slice(-40))}`);
    }
  }

  if (taskType === "READING_PART_B") {
    if (qs.length !== 1) add(`${qs.length} questions, law 1`);
    for (const q of qs) if ((q.options ?? []).length !== 3) add(`${q.id} has ${(q.options ?? []).length} options, law 3`);
  }

  if (taskType === "READING_PART_C") {
    if (qs.length !== 8) add(`${qs.length} questions, law 8`);
    for (const q of qs) if ((q.options ?? []).length !== 4) add(`${q.id} has ${(q.options ?? []).length} options, law 4`);
  }

  if (taskType === "LISTENING_PART_A") {
    const gaps = (payload.gaps ?? []).length;
    if (gaps !== 12) add(`${gaps} gaps, law 12`);
  }

  if (taskType === "LISTENING_PART_B") {
    if (qs.length !== 1) add(`${qs.length} questions, law 1`);
    for (const q of qs) if ((q.options ?? []).length !== 3) add(`${q.id} has ${(q.options ?? []).length} options, law 3`);
  }

  if (taskType === "LISTENING_PART_C") {
    if (qs.length !== 6) add(`${qs.length} questions, law 6`);
    for (const q of qs) if ((q.options ?? []).length !== 3) add(`${q.id} has ${(q.options ?? []).length} options, law 3`);
  }

  if (taskType === "WRITING_LETTER") {
    const n = words(payload.caseNotes);
    if (n < 280 || n > 850) add(`caseNotes ${n} words, law 280-850`);
    if ((payload.caseNotes ?? "").includes("Non-relevant")) add(`caseNotes contain "Non-relevant"`);
    for (const m of (payload.caseNotes ?? "").matchAll(/\b(20\d{2})\b/g)) {
      if (Number(m[1]) > 2026) add(`caseNotes name the year ${m[1]}, which is after 2026`);
    }
  }

  if (taskType === "SPEAKING_ROLEPLAY") {
    const n = words(payload.candidateCard);
    if (n < 150) add(`candidateCard ${n} words, law >= 150`);
    if (payload.prepSeconds !== 180) add(`prepSeconds ${payload.prepSeconds}, law 180`);
    if (payload.speakSeconds !== 300) add(`speakSeconds ${payload.speakSeconds}, law 300`);
  }

  return out;
}
