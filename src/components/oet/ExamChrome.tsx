"use client";

/**
 * EXAM CHROME — the frame around a practice item.
 *
 * ── WHAT WAS TAKEN, AND FROM WHERE ──────────────────────────────────────────
 *
 * The ARRANGEMENT below was observed on OET's own interactive sample: a fixed
 * top bar carrying position and section on the left, a labelled countdown in the
 * centre and a persistent finish control on the right; a numbered rail down the
 * left marking where you are; back/next pinned bottom-right; and chrome that
 * stays put while only the content scrolls.
 *
 * 🔴 THAT IS ALL THAT WAS TAKEN. No passage, question, option, audio, wording,
 * colour, logo, icon or stylesheet. Every string here is ours, every component is
 * ours, and the palette is AlmiOET's. The arrangement of functional controls is
 * not test content — but the content those controls surround is, and none of it
 * is here. See the PR for what OET's IP policy actually says.
 *
 * ── THE TIMER IS PUBLISHED UPWARD, NOT RECOMPUTED HERE ──────────────────────
 *
 * There is exactly ONE clock per section and the composer owns it, because the
 * composer is what knows the phase: Writing runs five minutes of reading time and
 * then forty of writing, and a chrome that recomputed that would be a second
 * implementation free to disagree with the first. So the composer publishes
 * `{ label, secondsLeft }` and this renders it in the fixed bar.
 *
 * When no provider is mounted, `publish` is null and the composer falls back to
 * rendering its countdown inline exactly as before. That is deliberate: the
 * timing gates gate the COMPOSER, and they must keep passing whether or not the
 * frame is around it.
 */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type PublishedTimer = { label: string; secondsLeft: number };

type ChromeApi = { publish: (t: PublishedTimer | null) => void };

const ExamChromeContext = createContext<ChromeApi | null>(null);

/** Composers call this. Returns true when a frame is mounted and has taken the
 *  timer — in which case the composer must NOT also draw it. */
export function usePublishTimer(timer: PublishedTimer | null): boolean {
  const api = useContext(ExamChromeContext);
  const label = timer?.label ?? null;
  const secondsLeft = timer?.secondsLeft ?? null;
  useEffect(() => {
    if (!api) return;
    api.publish(label !== null && secondsLeft !== null ? { label, secondsLeft } : null);
  }, [api, label, secondsLeft]);
  return api !== null;
}

function mmss(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

/** Wall clock, so a candidate can pace against the room as well as the section. */
function WallClock() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", hour12: false }),
      );
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  // Renders nothing on the server: a clock in server markup is wrong the instant
  // it is sent, and would differ between server and client on hydration.
  return (
    <span suppressHydrationWarning className="text-xs font-medium text-almi-text-muted">
      {now ?? ""}
    </span>
  );
}

export function ExamChrome({
  sectionLabel,
  pageNumber,
  pageCount,
  onFinishHref,
  rail,
  nav,
  children,
}: {
  /** The section this item belongs to, named as the exam names it. */
  sectionLabel: string;
  /** 1-based position within the current set. */
  pageNumber: number;
  /** How many items this set serves. Comes from the engine, never retyped. */
  pageCount: number;
  onFinishHref: string;
  /** Optional slot: <ExamPageRail>. Dropping it removes the rail and nothing else. */
  rail?: React.ReactNode;
  /** Optional slot: <ExamNav>. Dropping it removes back/next and nothing else. */
  nav?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [timer, setTimer] = useState<PublishedTimer | null>(null);
  const api = useMemo<ChromeApi>(() => ({ publish: setTimer }), []);
  const out = timer !== null && timer.secondsLeft <= 0;

  return (
    <ExamChromeContext.Provider value={api}>
      <div data-testid="exam-chrome" className="flex min-h-[70vh] flex-col">
        {/* TOP BAR — sticky, so it does not scroll away from the candidate. */}
        <div
          data-testid="exam-topbar"
          className="sticky top-0 z-30 -mx-4 flex items-center gap-3 border-b border-almi-bg-peach bg-almi-paper px-4 py-2 sm:-mx-6 sm:px-6"
        >
          <div className="min-w-0 flex-1 text-xs text-almi-text-muted">
            <span data-testid="exam-page-indicator" className="font-semibold text-almi-ink">
              Page {pageNumber} of {pageCount}
            </span>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            <span data-testid="exam-section-label">Section: {sectionLabel}</span>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <WallClock />
            {timer && (
              <span
                data-testid="exam-countdown"
                role="timer"
                aria-live="off"
                className={
                  "rounded-full px-3 py-1 text-xs font-semibold " +
                  (out
                    ? "bg-almi-coral text-almi-ink"
                    : timer.secondsLeft <= 60
                      ? "bg-almi-coral/15 text-almi-coral-deep"
                      : "bg-almi-bg-peach text-almi-text-muted")
                }
              >
                {/* LABELLED BY WHAT IT COUNTS. A bare clock does not tell a
                    candidate whether it is the section, the phase, or the room. */}
                {out ? `Time is up — ${timer.label}` : `${timer.label} ${mmss(timer.secondsLeft)}`}
              </span>
            )}
          </div>

          <div className="shrink-0 pl-2">
            <a
              data-testid="exam-finish"
              href={onFinishHref}
              className="inline-flex min-h-[32px] items-center rounded-full border border-almi-ink/15 bg-almi-bg px-3 py-1 text-xs font-semibold text-almi-ink hover:border-almi-coral"
            >
              Finish test
            </a>
          </div>
        </div>

        <div className="flex flex-1 gap-4 pt-4">
          {rail}
          {/* Only this scrolls. */}
          <div className="min-w-0 flex-1">{children}</div>
        </div>

        {nav}
      </div>
    </ExamChromeContext.Provider>
  );
}
