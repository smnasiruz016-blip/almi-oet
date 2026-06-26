"use client";

// Generic in-progress composer for every OET task type. Phase 0 scaffold: it
// renders the prompt and a response form matched to the task family, and POSTs
// to /api/oet/submit. The rich, exam-faithful UIs land per family in later
// phases:
//   Listening Part A/B/C, Reading Part A/B/C  → Phase 1
//   Writing clinical letter                   → Phase 2
//   Speaking role-play (audio capture)        → Phase 3
//
// The server passes a SANITIZED payload (answer keys already stripped). Until the
// real composers exist, objective tasks render their answer-stripped questions as
// simple inputs so the submit/score loop works end to end.

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { OetTaskType } from "@prisma/client";

type Args = { attemptId: string; prompt: string; payload: unknown };

type Question = { id: string; stem?: string; label?: string; options?: { id: string; text: string }[] };

function useSubmit(attemptId: string) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedAt = useState(() => Date.now())[0];

  async function submit(response: unknown) {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/oet/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attemptId,
          response,
          timeSpentSeconds: Math.round((Date.now() - startedAt) / 1000),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
        setSubmitting(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Network error. Try again.");
      setSubmitting(false);
    }
  }
  return { submit, submitting, error };
}

const SUBMIT_BTN =
  "inline-flex min-h-[44px] items-center justify-center rounded-full bg-almi-coral px-6 py-3 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep disabled:opacity-60";

function ObjectiveComposer({ attemptId, prompt, questions }: { attemptId: string; prompt: string; questions: Question[] }) {
  const { submit, submitting, error } = useSubmit(attemptId);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <div className="space-y-6">
      <p className="text-sm text-almi-text">{prompt}</p>
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3">
            <p className="text-sm font-medium text-almi-ink">{q.stem ?? q.label ?? q.id}</p>
            {q.options && q.options.length > 0 ? (
              <div className="mt-2 space-y-1">
                {q.options.map((o) => (
                  <label key={o.id} className="flex items-center gap-2 text-sm text-almi-text">
                    <input
                      type="radio"
                      name={q.id}
                      value={o.id}
                      checked={answers[q.id] === o.id}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: o.id }))}
                    />
                    {o.text}
                  </label>
                ))}
              </div>
            ) : (
              <input
                type="text"
                value={answers[q.id] ?? ""}
                onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                className="mt-2 w-full rounded-lg border border-almi-bg-peach bg-almi-bg px-3 py-2 text-sm"
                placeholder="Your answer"
              />
            )}
          </div>
        ))}
        {questions.length === 0 && (
          <p className="text-xs text-almi-text-muted">
            No questions in this item yet — the full Listening/Reading UI lands in Phase 1.
          </p>
        )}
      </div>
      {error && <p className="text-sm font-medium text-almi-coral-deep">{error}</p>}
      <button type="button" onClick={() => submit({ answers })} disabled={submitting} className={SUBMIT_BTN}>
        {submitting ? "Checking…" : "Submit answers"}
      </button>
    </div>
  );
}

function WritingComposer({ attemptId, prompt, payload }: { attemptId: string; prompt: string; payload: unknown }) {
  const { submit, submitting, error } = useSubmit(attemptId);
  const [text, setText] = useState("");
  const p = payload as { caseNotes?: string; recipient?: string; taskInstruction?: string; wordMin?: number; wordMax?: number };
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-5">
      <p className="text-sm text-almi-text">{prompt}</p>
      {p.caseNotes && (
        <div className="rounded-xl border border-almi-bg-peach bg-almi-paper p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-text-muted">Case notes</p>
          <pre className="mt-1 whitespace-pre-wrap font-sans text-sm text-almi-text">{p.caseNotes}</pre>
          {p.recipient && <p className="mt-3 text-sm text-almi-text"><span className="font-semibold">Write to:</span> {p.recipient}</p>}
          {p.taskInstruction && <p className="mt-1 text-sm text-almi-text">{p.taskInstruction}</p>}
        </div>
      )}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={12}
        className="w-full rounded-xl border border-almi-bg-peach bg-almi-bg px-4 py-3 text-sm"
        placeholder="Write your letter here…"
      />
      <p className="text-xs text-almi-text-muted">
        {words} words{p.wordMin ? ` · OET expects ${p.wordMin}–${p.wordMax ?? p.wordMin}` : ""}. AI feedback against the OET writing criteria lands in Phase 2.
      </p>
      {error && <p className="text-sm font-medium text-almi-coral-deep">{error}</p>}
      <button type="button" onClick={() => submit({ text })} disabled={submitting} className={SUBMIT_BTN}>
        {submitting ? "Submitting…" : "Submit letter"}
      </button>
    </div>
  );
}

function SpeakingComposer({ attemptId, prompt, payload }: { attemptId: string; prompt: string; payload: unknown }) {
  const { submit, submitting, error } = useSubmit(attemptId);
  const [transcript, setTranscript] = useState("");
  const p = payload as { setting?: string; candidateRole?: string; candidateCard?: string };

  return (
    <div className="space-y-5">
      <p className="text-sm text-almi-text">{prompt}</p>
      {p.candidateCard && (
        <div className="rounded-xl border border-almi-bg-peach bg-almi-paper p-4">
          {p.setting && <p className="text-sm text-almi-text"><span className="font-semibold">Setting:</span> {p.setting}</p>}
          {p.candidateRole && <p className="mt-1 text-sm text-almi-text"><span className="font-semibold">Your role:</span> {p.candidateRole}</p>}
          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-almi-text-muted">Your task card</p>
          <pre className="mt-1 whitespace-pre-wrap font-sans text-sm text-almi-text">{p.candidateCard}</pre>
        </div>
      )}
      <p className="text-xs text-almi-text-muted">
        Audio recording + Whisper transcription land in Phase 3. For now you can paste a transcript of
        what you would say. We grade only the words — never accent or audio.
      </p>
      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        rows={8}
        className="w-full rounded-xl border border-almi-bg-peach bg-almi-bg px-4 py-3 text-sm"
        placeholder="Transcript of your role-play…"
      />
      {error && <p className="text-sm font-medium text-almi-coral-deep">{error}</p>}
      <button type="button" onClick={() => submit({ transcript })} disabled={submitting} className={SUBMIT_BTN}>
        {submitting ? "Submitting…" : "Submit role-play"}
      </button>
    </div>
  );
}

export function OetComposer({
  attemptId,
  taskType,
  prompt,
  payload,
}: {
  attemptId: string;
  taskType: OetTaskType;
  prompt: string;
  payload: unknown;
}) {
  if (taskType === "WRITING_LETTER") {
    return <WritingComposer attemptId={attemptId} prompt={prompt} payload={payload} />;
  }
  if (taskType === "SPEAKING_ROLEPLAY") {
    return <SpeakingComposer attemptId={attemptId} prompt={prompt} payload={payload} />;
  }
  // Objective families (Listening + Reading). Pull whatever question/gap list the
  // sanitized payload carries.
  const p = (payload ?? {}) as { questions?: Question[]; gaps?: Question[] };
  const questions: Question[] = p.questions ?? p.gaps ?? [];
  return <ObjectiveComposer attemptId={attemptId} prompt={prompt} questions={questions} />;
}

// re-exported through composer-map for the session page
export type ComposerArgs = Args;
