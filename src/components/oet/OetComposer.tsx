"use client";

// In-progress composer for every OET task type, dispatched by task family:
//   Listening Part A/B/C → ListeningComposer (play-once audio + questions)
//   Reading Part A/B/C    → ReadingComposer (texts/passages + questions + timer)
//   Writing clinical letter → WritingComposer (case notes + letter; AI grade Phase 2)
//   Speaking role-play      → SpeakingComposer (card + transcript; audio Phase 3)
//
// The server passes a SANITIZED payload (answer keys + audio scripts stripped).
// Objective answers post as { answers: { [questionId]: value } }.

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { OetTaskType } from "@prisma/client";
import { TIMING } from "@/lib/oet/exam-shape";
import { usePublishTimer } from "@/components/oet/ExamChrome";

const SUBMIT_BTN =
  "inline-flex min-h-[44px] items-center justify-center rounded-full bg-almi-coral px-6 py-3 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep disabled:opacity-60";
const FIELD =
  "w-full rounded-lg border border-almi-bg-peach bg-almi-bg px-3 py-2 text-sm text-almi-ink";

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

// ---- Timing ----------------------------------------------------------------
//
// 🔴 THESE COUNTDOWNS ARE THE POINT OF THIS FILE'S 2026-08-31 CHANGE.
//
// Measured on 2026-08-31, before any of this existed:
//   - `timeLimitSeconds` was stored on every seed item and read NOWHERE in src/.
//   - Reading's only timer was `ElapsedTimer`, which counted UP from 00:00 and
//     was therefore not a limit at all.
//   - `prepSeconds` was stored on all 507 items, validated by a schema and
//     guarded by gate G6 — and never destructured by SpeakingComposer. Of the
//     five payload fields the Speaking composer read, prepSeconds was not one.
//   - Only `speakSeconds` reached a learner.
//
// A stored number the product never reads is not a feature. G6 was green for
// weeks over a value nothing rendered, which is why scripts/gates/timing.tsx
// asserts what the RENDERED MARKUP contains rather than what the payload holds.
//
// Every duration below comes from TIMING in src/lib/oet/exam-shape.ts, where each
// number sits beside the OET sentence and URL it was read from. None is written
// as a literal here.
function mmss(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

/** Counts DOWN from `totalSeconds`, and stops at zero. Paused when !running. */
function useCountdown(totalSeconds: number, running = true): number {
  const [left, setLeft] = useState(totalSeconds);
  useEffect(() => setLeft(totalSeconds), [totalSeconds]);
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setLeft((s) => (s <= 0 ? 0 : s - 1)), 1000);
    return () => clearInterval(t);
  }, [running, totalSeconds]);
  return left;
}

/**
 * ONE CLOCK PER SECTION, DISPLAYED WHEREVER THE FRAME WANTS IT.
 *
 * The composer owns the countdown because the composer knows the phase — Writing
 * runs five minutes of reading time and then forty of writing, and a frame that
 * recomputed that would be a second implementation free to disagree with this
 * one. So the value is PUBLISHED upward and ExamChrome renders it in the fixed
 * top bar, labelled by what it counts.
 *
 * With no frame mounted, `usePublishTimer` returns false and this draws itself
 * inline exactly as before. The timing gates gate the composer, and they must
 * keep passing whether or not the frame is around it.
 */
function Countdown({ secondsLeft, label }: { secondsLeft: number; label: string }) {
  const takenByChrome = usePublishTimer({ label, secondsLeft });
  const out = secondsLeft <= 0;
  if (takenByChrome) return null;
  const low = !out && secondsLeft <= 60;
  return (
    <span
      role="timer"
      aria-live="off"
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        out
          ? "bg-almi-coral text-almi-ink"
          : low
            ? "bg-almi-coral/15 text-almi-coral-deep"
            : "bg-almi-bg-peach text-almi-text-muted"
      }`}
    >
      {out ? `⏱ Time is up — ${label}` : `⏱ ${mmss(secondsLeft)} ${label}`}
    </span>
  );
}

// When a countdown expires we DISABLE further answering and leave Submit
// enabled. We deliberately do not auto-submit: OET's Part A is strictly timed,
// so the limit has to bite, but silently posting a learner's half-finished work
// on a timer destroys something they cannot get back. Locking the inputs makes
// the constraint real without taking the decision away from them.
const TIME_UP_NOTE =
  "Time is up. You can't change your answers now — submit to see how you did.";

// ---- Shared question types (sanitized — no answer keys) ----
type Option = { id: string; text: string };
type Question = { id: string; stem?: string; label?: string; options?: Option[] };

function QuestionField({
  q,
  value,
  onChange,
  disabled = false,
}: {
  q: Question;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3">
      <p className="text-sm font-medium text-almi-ink">{q.stem ?? q.label ?? q.id}</p>
      {q.options && q.options.length > 0 ? (
        <div className="mt-2 space-y-1.5">
          {q.options.map((o) => (
            <label key={o.id} className="flex items-start gap-2 text-sm text-almi-text">
              <input
                type="radio"
                name={q.id}
                value={o.id}
                checked={value === o.id}
                onChange={() => onChange(o.id)}
                disabled={disabled}
                className="mt-1"
              />
              <span>{o.text}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`mt-2 ${FIELD}`}
          placeholder="Type your answer"
        />
      )}
    </div>
  );
}

// ---- Listening: play-once audio + questions ----
/**
 * Listening audio.
 *
 * THE ELEMENT STREAMS THE ROUTE. It used to fetch() the route, build a Blob, make
 * an object URL and play that. The blob round-trip bought nothing — the route is
 * cookie-authenticated and a same-origin <audio src> carries the same cookie, so
 * the paywall and the ownership check are unchanged — and it put a whole transfer
 * and decode step between the bytes and the speaker that nothing could observe.
 *
 * 🔴 THE STATE IS DERIVED FROM ELEMENT EVENTS, NEVER FROM `await play()`.
 *
 * The previous version did this:
 *
 *     audio.onended = () => setState("done");
 *     await audio.play();
 *     setState("playing");
 *
 * If the audio ended BEFORE `play()` resolved, "done" was written and then
 * immediately overwritten by "playing" — and the badge sat on "Playing…"
 * forever. If it ended after, the badge read "Played". SAME DEFECT, TWO
 * SYMPTOMS, decided by a race. Both were reported from production on the same
 * item within a day of each other, which is why the observed symptom changed
 * without anything being deployed. `setState` after an await is not a state
 * machine; the element's own events are.
 *
 * 🔴 SILENCE MUST NOT CONSUME THE PLAY. OET's rule is that a recording is heard
 * once, and the button disables to honour it. But a learner who heard nothing has
 * lost the item with no way back, so "played" now requires EVIDENCE of playback:
 * the element must report progress past PROGRESS_SECONDS. An element that ends
 * without ever advancing is a failed play, the button stays live, and it says so.
 */
const PROGRESS_SECONDS = 1;

function ListeningAudio({ attemptId }: { attemptId: string }) {
  const [state, setState] = useState<"idle" | "loading" | "playing" | "done" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressedRef = useRef(false);

  // Ask the route why it refused, so a paywall reads as a paywall rather than as
  // "audio could not be played". The element only tells us that it failed.
  async function explainFailure() {
    try {
      const res = await fetch(`/api/oet/audio/${attemptId}`);
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setMessage(data?.error ?? `Audio unavailable (HTTP ${res.status}).`);
        return;
      }
      setMessage("The audio downloaded but could not be played. Press Retry.");
    } catch {
      setMessage("Network error while loading the audio. Press Retry.");
    }
  }

  async function play() {
    setMessage(null);
    progressedRef.current = false;
    setState("loading");
    // Setting src starts the load; preload="none" means nothing is fetched until
    // this point, so the audio is never pulled before the learner asks for it.
    const url = `/api/oet/audio/${attemptId}?t=${Date.now()}`;
    setSrc(url);
    const el = audioRef.current;
    if (!el) return;
    el.src = url;
    try {
      await el.play();
    } catch {
      setState("error");
      void explainFailure();
    }
  }

  return (
    <div className="rounded-xl border border-almi-teal/30 bg-almi-teal/5 px-4 py-4">
      <div className="flex items-center gap-3">
        <span aria-hidden className="text-xl">🎧</span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-almi-ink">Audio</p>
          <p className="text-xs text-almi-text-muted">
            Plays once, like the real test. Read the questions first.
          </p>
        </div>
        <button
          type="button"
          onClick={play}
          disabled={state === "loading" || state === "playing" || state === "done"}
          className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-almi-teal px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
        >
          {state === "idle" && "Play audio"}
          {state === "loading" && "Loading…"}
          {state === "playing" && "Playing…"}
          {state === "done" && "Played"}
          {state === "error" && "Retry"}
        </button>
      </div>

      <audio
        ref={audioRef}
        preload="none"
        controls={state === "playing" || state === "done"}
        className={state === "playing" || state === "done" ? "mt-3 w-full" : "hidden"}
        // Terminal states are FINAL. `playing` can arrive after `ended` — that
        // ordering is exactly what buried the old state machine — so a late one
        // must not resurrect a finished play.
        onPlaying={() => setState((s) => (s === "done" || s === "error" ? s : "playing"))}
        onTimeUpdate={(e) => {
          if (e.currentTarget.currentTime > PROGRESS_SECONDS) progressedRef.current = true;
        }}
        onEnded={() => {
          if (progressedRef.current) {
            setState("done");
            return;
          }
          // It "ended" without ever playing anything. That is the silent-play
          // failure: do NOT spend the one play on it.
          setState("error");
          setMessage(
            "That played back silently — no audio actually ran, so it hasn't been counted. Press Retry.",
          );
        }}
        onError={() => {
          setState("error");
          void explainFailure();
        }}
      >
        {src ? <source src={src} type="audio/mpeg" /> : null}
      </audio>

      {state === "error" && (
        <p className="mt-2 text-xs font-medium text-almi-coral-deep">
          {message ?? "Audio could not be played. Press Retry."}
        </p>
      )}
    </div>
  );
}

function ListeningComposer({
  attemptId,
  prompt,
  payload,
}: {
  attemptId: string;
  prompt: string;
  payload: unknown;
}) {
  const { submit, submitting, error } = useSubmit(attemptId);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const p = (payload ?? {}) as { questions?: Question[]; gaps?: Question[] };
  const questions: Question[] = p.questions ?? p.gaps ?? [];

  return (
    <div className="space-y-5">
      <p className="text-sm text-almi-text">{prompt}</p>
      <ListeningAudio attemptId={attemptId} />
      <div className="space-y-3">
        {questions.map((q) => (
          <QuestionField
            key={q.id}
            q={q}
            value={answers[q.id] ?? ""}
            onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))}
          />
        ))}
      </div>
      {error && <p className="text-sm font-medium text-almi-coral-deep">{error}</p>}
      <button type="button" data-testid="submit-answers" onClick={() => submit({ answers })} disabled={submitting} className={SUBMIT_BTN}>
        {submitting ? "Checking…" : "Submit answers"}
      </button>
    </div>
  );
}

/**
 * READING TEXTS THE CANDIDATE CAN HIGHLIGHT.
 *
 * OET tells candidates to practise highlighting, and we had nothing — a
 * candidate who practises here and then meets a highlightable text on the day is
 * learning the tool during the exam.
 *
 * Selection-based, not click-per-word: that is how highlighting works everywhere
 * else, and a candidate should not have to learn OUR interaction. Select text and
 * press Highlight; press Clear to drop them all.
 *
 * 🔴 THE MARKS ARE LOCAL AND DISPOSABLE. They are never submitted, never scored
 * and never stored — they are a reading aid, and a highlight posted to the server
 * would be answer-shaped data we have no use for. They are lost on reload, which
 * matches the exam and is one fewer thing to explain.
 */
function HighlightableTexts({ texts }: { texts: ReadingText[] }) {
  // Offsets into each text body, kept sorted and non-overlapping.
  const [marks, setMarks] = useState<Record<string, [number, number][]>>({});
  const hostRef = useRef<HTMLDivElement | null>(null);

  function addFromSelection() {
    const sel = typeof window !== "undefined" ? window.getSelection() : null;
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    // Only accept a selection that sits inside ONE text body, so a drag across
    // two passages cannot produce offsets that belong to neither.
    const host = (range.commonAncestorContainer as HTMLElement)?.parentElement?.closest?.(
      "[data-reading-body]",
    ) as HTMLElement | null;
    if (!host || !hostRef.current?.contains(host)) return;
    const id = host.getAttribute("data-reading-body");
    if (!id) return;

    const pre = document.createRange();
    pre.selectNodeContents(host);
    pre.setEnd(range.startContainer, range.startOffset);
    const start = pre.toString().length;
    const end = start + range.toString().length;
    if (end <= start) return;

    setMarks((m) => {
      const next = [...(m[id] ?? []), [start, end] as [number, number]].sort((a, b) => a[0] - b[0]);
      // Merge overlaps, so highlighting the same phrase twice does not nest.
      const merged: [number, number][] = [];
      for (const r of next) {
        const last = merged[merged.length - 1];
        if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
        else merged.push([...r] as [number, number]);
      }
      return { ...m, [id]: merged };
    });
    sel.removeAllRanges();
  }

  function render(id: string, body: string) {
    const ranges = marks[id] ?? [];
    if (ranges.length === 0) return body;
    const out: React.ReactNode[] = [];
    let cursor = 0;
    ranges.forEach(([a, b], i) => {
      if (a > cursor) out.push(body.slice(cursor, a));
      out.push(
        <mark key={i} data-testid="reading-highlight" className="rounded bg-almi-accent/40 px-0.5">
          {body.slice(a, b)}
        </mark>,
      );
      cursor = b;
    });
    if (cursor < body.length) out.push(body.slice(cursor));
    return out;
  }

  const total = Object.values(marks).reduce((n, r) => n + r.length, 0);

  return (
    <div className="space-y-3" data-testid="reading-texts">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          data-testid="highlight-add"
          onClick={addFromSelection}
          className="inline-flex min-h-[36px] items-center rounded-full border border-almi-ink/15 bg-almi-paper px-4 py-1.5 text-xs font-semibold text-almi-ink hover:border-almi-coral"
        >
          Highlight selection
        </button>
        <button
          type="button"
          data-testid="highlight-clear"
          onClick={() => setMarks({})}
          disabled={total === 0}
          className="inline-flex min-h-[36px] items-center rounded-full border border-almi-bg-peach px-4 py-1.5 text-xs font-semibold text-almi-text-muted hover:border-almi-coral disabled:opacity-50"
        >
          Clear {total > 0 ? `(${total})` : ""}
        </button>
        <span className="text-xs text-almi-text-muted">
          Select any part of a text, then Highlight. Marks are yours only — never submitted or
          scored.
        </span>
      </div>

      <div ref={hostRef} className="space-y-3">
        {texts.map((t) => (
          <div key={t.id} className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3">
            {t.heading && (
              <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
                {t.id}. {t.heading}
              </p>
            )}
            <p
              data-reading-body={t.id}
              className="mt-1 whitespace-pre-wrap text-sm text-almi-text selection:bg-almi-accent/40"
            >
              {render(t.id, t.body)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Reading: texts/passages + questions + a COUNTDOWN ----
//
// This replaces `ElapsedTimer`, which counted UP from 00:00. A stopwatch tells a
// learner how long they took; it never tells them they have run out, which is
// the only thing Reading Part A's timing actually is:
//
//   "Part A is strictly timed and you must complete all 20 question items
//    within 15 minutes."
//   — https://oet.com/en-us/post/reading-part-a-the-complete-guide
//
//   "You have 45 minutes in total to complete Reading Parts B and C."
//   — https://oet.com/en-us/post/reading-part-b-the-complete-guide
//
// ⚠️ SCOPE, STATED RATHER THAN HIDDEN. OET's 45 minutes covers Parts B and C
// TOGETHER — six Part B extracts plus two Part C texts, in one sitting. This
// composer serves ONE item at a time, so it gives each B or C item the whole 45
// minutes. That is more generous than the exam, not less, and it is the honest
// shape available until sessions carry a sub-test-wide clock. Part A's 15 minutes
// is exact, because one Part A item IS the whole of Part A.
type ReadingText = { id: string; heading?: string; body: string };

function ReadingComposer({
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
  const { submit, submitting, error } = useSubmit(attemptId);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const p = (payload ?? {}) as {
    texts?: ReadingText[];
    passages?: ReadingText[];
    questions?: Question[];
  };
  const texts = p.texts ?? p.passages ?? [];
  const questions: Question[] = p.questions ?? [];

  const limitSeconds =
    taskType === "READING_PART_A" ? TIMING.readingPartASeconds : TIMING.readingPartsBandCSeconds;
  const secondsLeft = useCountdown(limitSeconds);
  const expired = secondsLeft <= 0;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-almi-text">{prompt}</p>
        <Countdown
          secondsLeft={secondsLeft}
          label={taskType === "READING_PART_A" ? "left (Part A)" : "left (Parts B & C)"}
        />
      </div>
      {expired && (
        <p className="rounded-xl border border-almi-coral/40 bg-almi-coral/10 px-4 py-3 text-sm font-semibold text-almi-ink">
          {TIME_UP_NOTE}
        </p>
      )}

      <HighlightableTexts texts={texts} />

      <div className="space-y-3">
        {questions.map((q) => (
          <QuestionField
            key={q.id}
            q={q}
            value={answers[q.id] ?? ""}
            onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))}
            disabled={expired}
          />
        ))}
      </div>
      {error && <p className="text-sm font-medium text-almi-coral-deep">{error}</p>}
      <button type="button" data-testid="submit-answers" onClick={() => submit({ answers })} disabled={submitting} className={SUBMIT_BTN}>
        {submitting ? "Checking…" : "Submit answers"}
      </button>
    </div>
  );
}

// ---- Writing (Phase 2 grades it) ----
// OET Writing is TWO timed phases, not one 45-minute block:
//
//   "The five minutes of reading time at the start of the Writing sub-test…"
//   "…the remaining 40 minutes to write a response of the required length and
//    check over what you have written."
//   — https://oet.com/ready/writing
//
// 5 + 40 = 45, which is why two OET pages appeared to disagree about 45 vs 40.
// Both were right. Case notes are readable throughout; only the composer is
// held shut during the reading phase, which is what the reading time IS.
function WritingComposer({ attemptId, prompt, payload }: { attemptId: string; prompt: string; payload: unknown }) {
  const { submit, submitting, error } = useSubmit(attemptId);
  const [text, setText] = useState("");
  const p = payload as { caseNotes?: string; recipient?: string; taskInstruction?: string; wordMin?: number; wordMax?: number };
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const [phase, setPhase] = useState<"reading" | "writing">("reading");
  const readingLeft = useCountdown(TIMING.writingReadingSeconds, phase === "reading");
  const writingLeft = useCountdown(TIMING.writingWritingSeconds, phase === "writing");
  useEffect(() => {
    if (phase === "reading" && readingLeft <= 0) setPhase("writing");
  }, [phase, readingLeft]);
  const reading = phase === "reading";
  const expired = !reading && writingLeft <= 0;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-almi-text">{prompt}</p>
        {reading ? (
          <Countdown secondsLeft={readingLeft} label="reading time" />
        ) : (
          <Countdown secondsLeft={writingLeft} label="left to write" />
        )}
      </div>
      {reading && (
        <p className="rounded-xl border border-almi-teal/30 bg-almi-teal/5 px-4 py-3 text-sm text-almi-text">
          <span className="font-semibold text-almi-ink">Reading time.</span> Read the case notes.
          You can&apos;t start writing yet — that matches the exam, where the first{" "}
          {Math.round(TIMING.writingReadingSeconds / 60)} minutes are for reading only. You&apos;ll
          then have {mmss(TIMING.writingWritingSeconds)} to write.
        </p>
      )}
      {expired && (
        <p className="rounded-xl border border-almi-coral/40 bg-almi-coral/10 px-4 py-3 text-sm font-semibold text-almi-ink">
          {TIME_UP_NOTE}
        </p>
      )}
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
        disabled={reading || expired}
        className="w-full rounded-xl border border-almi-bg-peach bg-almi-bg px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60"
        placeholder={reading ? "Writing opens when the reading time ends…" : "Write your letter here…"}
      />
      <p className="text-xs text-almi-text-muted">
        {words} words{p.wordMin ? ` · OET expects ${p.wordMin}–${p.wordMax ?? p.wordMin}` : ""}. You&apos;ll get honest feedback against the six OET writing criteria.
      </p>
      {error && <p className="text-sm font-medium text-almi-coral-deep">{error}</p>}
      <button
        type="button"
        onClick={() => submit({ text })}
        disabled={submitting || reading}
        className={SUBMIT_BTN}
      >
        {submitting ? "Submitting…" : "Submit letter"}
      </button>
    </div>
  );
}

/** Whole minutes read as "2 minutes"; anything else falls back to mm:ss so the
 *  sentence can never claim a duration the timer beside it is not counting. */
function humanPrep(totalSeconds: number): string {
  if (totalSeconds > 0 && totalSeconds % 60 === 0) {
    const m = totalSeconds / 60;
    return `${m} ${m === 1 ? "minute" : "minutes"}`;
  }
  return mmss(totalSeconds);
}

/** The sentence shown beside the skip button, in the owner's words. Built as ONE
 *  string rather than JSX fragments: React's server renderer inserts `<!-- -->`
 *  between adjacent text nodes, which would split the sentence in the rendered
 *  markup and make it unassertable by scripts/gates/timing.tsx. */
export function skipPreparationExplanation(prepSeconds: number): string {
  return (
    `You have got this skip option only in practice. In a full mock test — and in the real OET — you get ` +
    `${humanPrep(prepSeconds)} to prepare and there is no skip.`
  );
}

// ---- Speaking: record the role-play → Whisper transcript → AI grade ----
function SpeakingComposer({
  attemptId,
  prompt,
  payload,
  allowSkipPreparation,
}: {
  attemptId: string;
  prompt: string;
  payload: unknown;
  allowSkipPreparation?: boolean;
}) {
  const router = useRouter();
  // 🔴 `prepSeconds` IS READ HERE. It was not, until 2026-08-31.
  //
  // The destructured payload shape below used to be
  // { setting, candidateRole, patientRole, candidateCard, speakSeconds } — five
  // fields, and prepSeconds was not one of them. So the number was stored on all
  // 507 items, schema-validated, and guarded by gate G6 against OET's published
  // 2–3 minute range, while the learner got no preparation phase at all: the
  // "Start recording" button was live the moment the card appeared.
  //
  // It is taken FROM THE PAYLOAD, per item, never written as a literal. The
  // fallback is TIMING.speakingPrepSecondsMin (exam-shape.ts, "2-3 minutes to
  // prepare for each"), used only if an item somehow arrives without the field.
  const p = payload as {
    setting?: string;
    candidateRole?: string;
    patientRole?: string;
    candidateCard?: string;
    prepSeconds?: number;
    speakSeconds?: number;
  };
  const cap = p.speakSeconds ?? TIMING.speakingSpeakSeconds;
  const prepTotal =
    typeof p.prepSeconds === "number" && Number.isFinite(p.prepSeconds) && p.prepSeconds >= 0
      ? p.prepSeconds
      : TIMING.speakingPrepSecondsMin;
  const startedAt = useState(() => Date.now())[0];

  const [phase, setPhase] = useState<"idle" | "recording" | "recorded" | "submitting">("idle");
  const [secs, setSecs] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // The preparation phase runs before recording can start, exactly as the exam
  // does.
  //
  // ── SKIPPABLE IN PRACTICE, MANDATORY IN A MOCK ──────────────────────────────
  //
  // 🔴 `allowSkipPreparation` DEFAULTS TO NO SKIP, AND THE `=== true` IS LOAD-BEARING.
  // The prop is optional, so a caller that forgets it, passes undefined, or
  // passes a value that is merely truthy gets the EXAM-LIKE behaviour. Nothing
  // here can turn a mock into a practice run by omission — the only way to get a
  // skip button is to positively ask for one.
  //
  // The decision itself is not made here. It is derived from the session record
  // by speakingPrepPolicy() in src/lib/oet/prep-policy.ts, which every caller
  // shares, so the rule cannot be right on one screen and wrong on another.
  const allowSkip = allowSkipPreparation === true;
  const [skipped, setSkipped] = useState(false);
  const prepLeft = useCountdown(prepTotal, phase === "idle" && !skipped);
  const preparing = phase === "idle" && !skipped && prepLeft > 0;
  const [typed, setTyped] = useState("");
  const [showType, setShowType] = useState(false);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const blobRef = useRef<Blob | null>(null);
  const durationRef = useRef(0);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function stopTick() {
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = null;
  }

  async function startRecording() {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      recorderRef.current = rec;
      chunksRef.current = [];
      rec.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      rec.onstop = () => {
        blobRef.current = new Blob(chunksRef.current, { type: "audio/webm" });
        stream.getTracks().forEach((t) => t.stop());
        stopTick();
        setPhase("recorded");
      };
      rec.start();
      setSecs(0);
      setPhase("recording");
      tickRef.current = setInterval(() => {
        setSecs((s) => {
          const next = s + 1;
          durationRef.current = next;
          if (next >= cap) stopRecording();
          return next;
        });
      }, 1000);
    } catch {
      setError("Microphone not available. You can type your transcript instead.");
      setShowType(true);
    }
  }

  function stopRecording() {
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }
  }

  async function submitAudio() {
    if (!blobRef.current) return;
    setPhase("submitting");
    setError(null);
    try {
      const form = new FormData();
      form.append("attemptId", attemptId);
      form.append("timeSpentSeconds", String(Math.round((Date.now() - startedAt) / 1000)));
      form.append("durationSeconds", String(durationRef.current));
      form.append("audio", blobRef.current, "speech.webm");
      const res = await fetch("/api/oet/submit", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Could not submit. Try again.");
        setPhase("recorded");
        return;
      }
      router.refresh();
    } catch {
      setError("Network error. Try again.");
      setPhase("recorded");
    }
  }

  async function submitTyped() {
    setPhase("submitting");
    setError(null);
    try {
      const res = await fetch("/api/oet/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attemptId,
          response: { transcript: typed },
          timeSpentSeconds: Math.round((Date.now() - startedAt) / 1000),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Could not submit. Try again.");
        setPhase("idle");
        return;
      }
      router.refresh();
    } catch {
      setError("Network error. Try again.");
      setPhase("idle");
    }
  }

  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  return (
    <div className="space-y-5">
      <p className="text-sm text-almi-text">{prompt}</p>
      {p.candidateCard && (
        <div className="rounded-xl border border-almi-bg-peach bg-almi-paper p-4">
          {p.setting && <p className="text-sm text-almi-text"><span className="font-semibold">Setting:</span> {p.setting}</p>}
          {p.candidateRole && <p className="mt-1 text-sm text-almi-text"><span className="font-semibold">Your role:</span> {p.candidateRole}</p>}
          {p.patientRole && <p className="mt-1 text-sm text-almi-text"><span className="font-semibold">You are speaking with:</span> {p.patientRole}</p>}
          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-almi-text-muted">Your task card</p>
          <pre className="mt-1 whitespace-pre-wrap font-sans text-sm text-almi-text">{p.candidateCard}</pre>
        </div>
      )}

      <p className="text-xs text-almi-text-muted">
        Speak your part of the consultation aloud (up to {Math.round(cap / 60)} min). We transcribe
        what you say and grade the words only — never your accent or audio.
      </p>

      {!showType && (
        <div className="rounded-xl border border-almi-teal/30 bg-almi-teal/5 px-4 py-4">
          {phase === "idle" && (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Countdown
                  secondsLeft={preparing ? prepLeft : 0}
                  label={preparing ? "preparation time" : "— recording can start"}
                />
              </div>
              {preparing && (
                <p className="text-sm text-almi-text">
                  <span className="font-semibold text-almi-ink">Preparation time.</span> Read your
                  task card and plan how you&apos;ll open. Recording starts when this reaches zero —
                  OET gives you {mmss(prepTotal)} to prepare for each role-play.
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={startRecording}
                  disabled={preparing}
                  className={SUBMIT_BTN}
                >
                  ● Start recording
                </button>
                {preparing && allowSkip && (
                  <button
                    type="button"
                    onClick={() => setSkipped(true)}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-almi-ink/15 bg-almi-paper px-5 py-3 text-sm font-semibold text-almi-ink hover:border-almi-coral"
                  >
                    Skip preparation
                  </button>
                )}
              </div>
              {/* Always visible while preparing — never a tooltip, never behind an
                  info icon. A learner who skips has to be told, in the same
                  glance, what they are opting out of. */}
              {preparing && allowSkip && (
                <p className="text-sm font-medium text-almi-coral-deep">
                  {skipPreparationExplanation(prepTotal)}
                </p>
              )}
            </div>
          )}
          {phase === "recording" && (
            <div className="flex items-center gap-3">
              <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-almi-coral" aria-hidden />
              <span className="text-sm font-semibold text-almi-ink">Recording {mm}:{ss}</span>
              <button
                type="button"
                onClick={stopRecording}
                className="ml-auto inline-flex min-h-[40px] items-center rounded-full border border-almi-ink/15 bg-almi-paper px-4 py-2 text-sm font-semibold text-almi-ink hover:border-almi-coral"
              >
                ■ Stop
              </button>
            </div>
          )}
          {(phase === "recorded" || phase === "submitting") && (
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-almi-text">Recorded {mm}:{ss}.</span>
              <button type="button" onClick={() => setPhase("idle")} className="text-sm font-semibold text-almi-text-muted underline">
                Re-record
              </button>
              <button type="button" onClick={submitAudio} disabled={phase === "submitting"} className={`ml-auto ${SUBMIT_BTN}`}>
                {phase === "submitting" ? "Transcribing & grading…" : "Submit role-play →"}
              </button>
            </div>
          )}
        </div>
      )}

      {showType && (
        <div className="space-y-3">
          <textarea
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            rows={8}
            className="w-full rounded-xl border border-almi-bg-peach bg-almi-bg px-4 py-3 text-sm"
            placeholder="Type a transcript of your role-play…"
          />
          <button type="button" onClick={submitTyped} disabled={phase === "submitting"} className={SUBMIT_BTN}>
            {phase === "submitting" ? "Grading…" : "Submit transcript"}
          </button>
        </div>
      )}

      {/* 🔴 `!preparing` closes a BYPASS, not a cosmetic case. Without it this
          link opened the transcript box and its Submit button during the
          preparation phase — so in a MOCK, where there is deliberately no skip,
          a learner could click here and start composing immediately. A mandatory
          phase with an unlocked side door is not mandatory. */}
      {!showType && phase === "idle" && !preparing && (
        <button type="button" onClick={() => setShowType(true)} className="text-xs font-semibold text-almi-text-muted underline">
          No microphone? Type your transcript instead
        </button>
      )}

      {error && <p className="text-sm font-medium text-almi-coral-deep">{error}</p>}
    </div>
  );
}

export function OetComposer({
  attemptId,
  taskType,
  prompt,
  payload,
  allowSkipPreparation,
}: {
  attemptId: string;
  taskType: OetTaskType;
  prompt: string;
  payload: unknown;
  /** Speaking only. OPTIONAL AND SAFE-BY-DEFAULT: omitted or undefined means the
   *  preparation phase is mandatory. Callers must not compute this themselves —
   *  pass speakingPrepPolicy(session).allowSkip from src/lib/oet/prep-policy.ts. */
  allowSkipPreparation?: boolean;
}) {
  if (taskType === "WRITING_LETTER") {
    return <WritingComposer attemptId={attemptId} prompt={prompt} payload={payload} />;
  }
  if (taskType === "SPEAKING_ROLEPLAY") {
    return (
      <SpeakingComposer
        attemptId={attemptId}
        prompt={prompt}
        payload={payload}
        allowSkipPreparation={allowSkipPreparation}
      />
    );
  }
  if (taskType.startsWith("LISTENING")) {
    return <ListeningComposer attemptId={attemptId} prompt={prompt} payload={payload} />;
  }
  return (
    <ReadingComposer attemptId={attemptId} taskType={taskType} prompt={prompt} payload={payload} />
  );
}

export type ComposerArgs = { attemptId: string; prompt: string; payload: unknown };
