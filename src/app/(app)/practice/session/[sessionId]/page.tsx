// Session driver: walks the user through a practice set or the full mock.
// IN_PROGRESS step → composer; SCORED step → per-step result + advance; all
// steps done → the aggregate result. Advancing is an explicit server action.

import { notFound, redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { getSessionView, advanceSession } from "@/lib/oet/session";
import { OET_TASKS } from "@/lib/oet/registry";
import { OetComposer } from "@/components/oet/composer-map";
import { OetResult } from "@/components/oet/OetResult";
import { OetSessionResult } from "@/components/oet/OetSessionResult";
import type { OetTaskType } from "@prisma/client";

// Strip any server-only answer key before sending the payload to the client.
// Objective items keep their questions/gaps but lose the `answer` field; audio
// scripts never go to the client (audio is fetched server-side).
function sanitizePayload(taskType: OetTaskType, payload: unknown): unknown {
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
    const { patientConcern: _omit, ...rest } = p as { patientConcern?: unknown };
    void _omit;
    return rest;
  }
  // Writing payloads carry no objective answer key.
  return payload;
}

export default async function SessionPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const user = await requireUser();
  const { sessionId } = await params;
  const session = await getSessionView(sessionId, user.id);
  if (!session) notFound();

  if (session.status === "COMPLETED") {
    return <OetSessionResult session={session} attempts={session.attempts} />;
  }

  const current = session.attempts.find((a) => a.sessionStep === session.currentStep);
  if (!current) notFound();

  const def = OET_TASKS[current.taskType];
  const stepLabel = `Step ${session.currentStep + 1} of ${session.targetCount}`;
  const isLast = session.currentStep + 1 >= session.targetCount;

  if (current.status === "SCORED") {
    async function advance() {
      "use server";
      const u = await requireUser();
      await advanceSession(sessionId, u.id);
      redirect(`/practice/session/${sessionId}`);
    }
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <p className="text-xs font-bold uppercase tracking-wider text-almi-text-muted">{stepLabel}</p>
        <OetResult def={def} item={current.item} attempt={current} variant="step" />
        <form action={advance}>
          <button
            type="submit"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            {isLast ? "See results →" : "Next step →"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          {def.label} · {stepLabel}
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-almi-ink">{current.item.title}</h1>
      </header>
      <OetComposer
        attemptId={current.id}
        taskType={current.taskType}
        prompt={current.item.prompt}
        payload={sanitizePayload(current.taskType, current.item.payload)}
      />
    </div>
  );
}
