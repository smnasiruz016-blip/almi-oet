"use client";

/**
 * The segment error boundary.
 *
 * Without this file, an unhandled render error inside a route segment gives the
 * learner Next.js's own error screen — a stack trace on a white page, mid-exam.
 * `not-found.tsx` already existed; this is its sibling for the case where
 * something broke rather than something was missing.
 *
 * ── 🔴 WHAT THIS PAGE DOES NOT PROMISE ──────────────────────────────────────
 *
 * The obvious reassuring line is "your progress has been saved up to your last
 * answer". IT WOULD BE FALSE HERE, so it is not written.
 *
 * Measured on 2 September 2026: answers live in React state in OetComposer
 * (`const [answers, setAnswers] = useState({})`) and the ONLY write to the
 * server is POST /api/oet/submit. There is no partial-save route, no
 * localStorage, nothing. A render error loses whatever was typed in this
 * attempt.
 *
 * What IS true is that nothing was marked: the attempt is still IN_PROGRESS, so
 * the exercise can be done again and nothing has been used up. That is what the
 * page says, and no more.
 *
 * ── AND WHAT IT NEVER SHOWS ─────────────────────────────────────────────────
 *
 * Not `error.message`, not the stack. Those can carry query fragments, ids, or
 * anything an upstream library decided to put in a string, and a learner can do
 * nothing with them. The digest is logged for us; the learner gets words.
 */
import { useEffect } from "react";
import Link from "next/link";

export default function SegmentError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // The digest is Next's own correlation id for the server-side error. It is
    // the one thing worth recording and the one thing safe to record.
    console.error("[oet.error] segment error", { digest: error.digest });
  }, [error]);

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">AlmiOET</p>
        <h1 className="mt-2 text-3xl font-semibold text-almi-ink">
          Something went wrong at our end
        </h1>
        <p className="mt-3 text-sm text-almi-text">
          This one is ours, not yours. Nothing has been marked and nothing has been used up — the
          exercise is still there to do. Anything you had typed in this attempt is gone, so start it
          again when you are ready.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            Try again
          </button>
          <Link
            href="/practice"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-almi-ink/20 px-6 py-3 text-sm font-semibold text-almi-ink hover:border-almi-coral"
          >
            Back to practice
          </Link>
        </div>
        {error.digest && (
          <p className="mt-6 text-xs text-almi-text-muted">
            If you tell us about this, quote reference{" "}
            <span className="font-mono">{error.digest}</span>.
          </p>
        )}
      </div>
    </main>
  );
}
