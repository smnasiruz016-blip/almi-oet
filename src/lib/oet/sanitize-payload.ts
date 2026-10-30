// What of an item's payload may reach the browser BEFORE the learner answers it. Moved out of the session page so it can be tested.
//
// Strip any server-only answer key before sending the payload to the client.
// Objective items keep their questions/gaps but lose the `answer` field; audio
// scripts never go to the client (audio is fetched server-side).
//
// 🔴 B2/B3 (30 Oct 2026): a Writing item's model letter (payload.modelLetter) and a Speaking card's model role-play (payload.modelScript)
// are answers too. They are shown only AFTER the attempt (OetResult, the mock's final review — ModelAnswer.tsx) and never travel to the
// composer: before this, "Writing payloads carry no objective answer key" sent the whole payload, model letter included.
import type { OetTaskType } from "@prisma/client";

export function sanitizePayload(taskType: OetTaskType, payload: unknown): unknown {
  const p = payload as Record<string, unknown>;
  if (taskType === "LISTENING_PART_A") {
    const gaps = (p.gaps as { id: string; label: string }[] | undefined) ?? [];
    return { gaps: gaps.map((g) => ({ id: g.id, label: g.label })) };
  }
  if (taskType === "LISTENING_PART_B" || taskType === "LISTENING_PART_C") {
    const questions = (p.questions as { id: string; stem: string; options: unknown[] }[] | undefined) ?? [];
    return { questions: questions.map((q) => ({ id: q.id, stem: q.stem, options: q.options })) };
  }
  if (taskType === "READING_PART_A") {
    const questions = (p.questions as { id: string; stem: string; options?: unknown[] }[] | undefined) ?? [];
    return {
      texts: p.texts,
      questions: questions.map((q) => ({ id: q.id, stem: q.stem, options: q.options })),
    };
  }
  if (taskType === "READING_PART_B" || taskType === "READING_PART_C") {
    const questions = (p.questions as { id: string; stem: string; options: unknown[] }[] | undefined) ?? [];
    return {
      passages: p.passages,
      questions: questions.map((q) => ({ id: q.id, stem: q.stem, options: q.options })),
    };
  }
  if (taskType === "SPEAKING_ROLEPLAY") {
    // The candidate sees their own card, not the patient's hidden concern —
    // drawing that out is part of the task and what the grader scores.
    // B3: nor the model role-play.
    const { patientConcern: _omit, modelScript: _model, ...rest } = p as { patientConcern?: unknown; modelScript?: unknown };
    void _omit; void _model;
    return rest;
  }
  if (taskType === "WRITING_LETTER") {
    // B2: the model letter is an answer — it waits until the letter is submitted.
    const { modelLetter: _model, ...rest } = p as { modelLetter?: unknown };
    void _model;
    return rest;
  }
  return payload;
}
