/**
 * 🔴 THE ONE PLACE THIS PROJECT DECIDES HOW LONG AN ITEM IS.
 *
 * A companion to ./words.ts, which decides what a WORD is. This decides which
 * FIELDS a length law is measured over, per task type, and the two answers
 * together are the only ones the repo may use.
 *
 * ── WHY IT LIVES IN ITS OWN FILE ────────────────────────────────────────────
 *
 * It used to live inside length.ts. On 6 September 2026 an export script needed
 * the same number, counted Reading Part A as "the four texts" — the obvious
 * reading — and reported 0 items over the law while gate:length reported 16. The
 * law is measured over the four texts AND the twenty question stems, because
 * that is what OET's own 885-976-1009 was measured over, and the candidate reads
 * both.
 *
 * Importing it from length.ts instead would have run length.ts: it is a script,
 * not a library, and importing it executes the whole gate. So the rule moved
 * here, where anything can read it and nothing runs.
 */
import { words } from "./words";

export type LengthItem = {
  taskType: string;
  payload: {
    audioScript?: string;
    caseNotes?: string;
    setting?: string;
    candidateRole?: string;
    patientRole?: string;
    candidateCard?: string;
    texts?: { body?: string }[];
    passages?: { body?: string }[];
    questions?: { stem?: string }[];
  };
};

export function textWords(item: LengthItem): number {
  if (item.taskType.startsWith("LISTENING")) return words(item.payload.audioScript);
  // 🔴 THE TWO AI TASKS, AND WHICH FIELD EACH LAW COUNTS. Added with the LAW rows
  // on 4 September 2026 — and the gate itself found this missing: with the rows
  // in but this branch absent, every one of the 360 measured "0 words, law
  // 650-850". A bound with no reader is not a law, it is a refusal.
  //
  // WRITING_LETTER counts the CASE NOTES: the stimulus we author, not the
  // recipient line or the task instruction, which are the wrapper around it. It
  // is NOT the letter the candidate writes — that is governed by the item's own
  // wordMin/wordMax, which is OET's 180-200 guide.
  if (item.taskType === "WRITING_LETTER") return words(item.payload.caseNotes);
  // SPEAKING_ROLEPLAY counts the whole of what the CANDIDATE is shown.
  // `patientConcern` is excluded on purpose: the session page strips it before
  // the payload reaches the client, because drawing it out is the task, so
  // counting it would measure text the candidate never sees.
  if (item.taskType === "SPEAKING_ROLEPLAY") {
    return (
      words(item.payload.setting) +
      words(item.payload.candidateRole) +
      words(item.payload.patientRole) +
      words(item.payload.candidateCard)
    );
  }
  if (item.taskType === "READING_PART_A") {
    // Combined: the four texts AND the twenty question stems, because that is
    // what OET's own 885-976-1009 was measured over. Option text is excluded on
    // purpose — see the header of length.ts.
    const texts = (item.payload.texts ?? []).reduce((n, t) => n + words(t.body), 0);
    const stems = (item.payload.questions ?? []).reduce((n, q) => n + words(q.stem), 0);
    return texts + stems;
  }
  return (item.payload.passages ?? []).reduce((n, t) => n + words(t.body), 0);
}
