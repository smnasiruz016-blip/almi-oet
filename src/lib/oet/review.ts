// Builds a post-submission review for objective (Listening/Reading) attempts:
// for each question, the user's answer vs the correct answer. Safe to show now —
// the attempt is already scored, so the answer key is no longer a secret. Pure
// function (server-usable), reads the stored item payload + the user's response.

import type { OetTaskType } from "@prisma/client";

export type ReviewRow = { label: string; your: string; correct: string; ok: boolean };
export type Review = { rows: ReviewRow[]; correct: number; total: number };

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,;:!?]+$/g, "");
}

function answerOf(response: unknown, id: string): string {
  const answers = (response as { answers?: Record<string, unknown> } | null)?.answers ?? {};
  const v = answers[id];
  if (Array.isArray(v)) return String(v[0] ?? "");
  return v == null ? "" : String(v);
}

type Option = { id: string; text: string };
type Mcq = { id: string; stem: string; options: Option[]; answer: string };
type Gap = { id: string; label: string; answer: string };
type PartAQ = { id: string; kind: "match" | "gap"; stem: string; options?: Option[]; answer: string };

function optionText(options: Option[] | undefined, id: string): string {
  return options?.find((o) => o.id === id)?.text ?? id;
}

/** Returns null for non-objective task types (Writing/Speaking use AI feedback). */
export function buildObjectiveReview(
  taskType: OetTaskType,
  payload: unknown,
  response: unknown,
): Review | null {
  const p = (payload ?? {}) as Record<string, unknown>;
  const rows: ReviewRow[] = [];

  const pushMcq = (questions: Mcq[]) => {
    for (const q of questions) {
      const your = answerOf(response, q.id);
      rows.push({
        label: q.stem,
        your: your ? optionText(q.options, your) : "—",
        correct: optionText(q.options, q.answer),
        ok: your.trim() === q.answer.trim(),
      });
    }
  };

  if (taskType === "LISTENING_PART_A") {
    for (const g of (p.gaps as Gap[] | undefined) ?? []) {
      const your = answerOf(response, g.id);
      rows.push({
        label: g.label,
        your: your || "—",
        correct: g.answer,
        ok: normalize(your) === normalize(g.answer),
      });
    }
  } else if (taskType === "LISTENING_PART_B" || taskType === "LISTENING_PART_C") {
    pushMcq((p.questions as Mcq[] | undefined) ?? []);
  } else if (taskType === "READING_PART_B" || taskType === "READING_PART_C") {
    pushMcq((p.questions as Mcq[] | undefined) ?? []);
  } else if (taskType === "READING_PART_A") {
    for (const q of (p.questions as PartAQ[] | undefined) ?? []) {
      const your = answerOf(response, q.id);
      if (q.kind === "gap") {
        rows.push({
          label: q.stem,
          your: your || "—",
          correct: q.answer,
          ok: normalize(your) === normalize(q.answer),
        });
      } else {
        rows.push({
          label: q.stem,
          your: your ? optionText(q.options, your) : "—",
          correct: optionText(q.options, q.answer),
          ok: your.trim() === q.answer.trim(),
        });
      }
    }
  } else {
    return null;
  }

  return { rows, correct: rows.filter((r) => r.ok).length, total: rows.length };
}
