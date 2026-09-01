// Full-mock / practice-set aggregate. OET scores each sub-test independently, so
// we show one practice estimate per sub-test that the session touched, and never
// a composite/overall of our own. The honest range + grade per sub-test comes
// from aggregateSession.
//
// This comment used to justify that with "(OET has none)". That was FALSE — OET
// has reported an overall score since 29 January 2025, and the user-facing copy
// in this very file already said so correctly, which is how a false comment sat
// directly above true prose. The justification, unchanged, is
// overallScoreSupported() in scale.ts: we will not derive a number by a method
// OET has not published to us.

import Link from "next/link";
import type { OetAttempt, OetItem, OetSession, OetSubTest } from "@prisma/client";
import type { ChainView } from "@/lib/oet/chain";
import { aggregateSession } from "@/lib/oet/session";
import { OET_BENCHMARK_B } from "@/lib/oet/scale";
import { SUBTEST_LABEL } from "@/lib/oet/types";
import { GradeEstimate, ESTIMATE_DISCLAIMER } from "@/components/oet/GradeEstimate";

const SUBTEST_ORDER: OetSubTest[] = ["LISTENING", "READING", "WRITING", "SPEAKING"];

export function OetSessionResult({
  session,
  attempts,
  chain = null,
  continueAction,
}: {
  session: OetSession;
  attempts: (OetAttempt & { item: OetItem })[];
  /** The next-exercise chain for a practice set. Null for a mock, which has no
   *  single task type to continue within. Every number in it is read from the
   *  database by chainView() — none is written down here. */
  chain?: ChainView | null;
  continueAction?: (formData: FormData) => void | Promise<void>;
}) {
  const estimates = aggregateSession(attempts);
  const touched = SUBTEST_ORDER.filter((s) => estimates[s] !== null);
  const isMock = session.mode === "MOCK";
  // OET requires the benchmark grade in EVERY sub-test, so count per sub-test —
  // never average into a composite. A/B mean the midpoint is at/above 350.
  const atBenchmark = touched.filter((s) => {
    const g = estimates[s]?.grade;
    return g === "A" || g === "B";
  }).length;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          {session.mode === "MOCK" ? "Full mock" : "Practice set"} · result
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-almi-ink">Your practice estimates</h1>
        <p className="mt-2 text-sm text-almi-text">
          Each sub-test is estimated on its own 0–500 scale with an A–E grade. OET reports a grade per
          sub-test and, since January 2025, an overall score too — we don&apos;t estimate that one, because
          we won&apos;t put a number next to your results that we invented.
        </p>
      </header>

      <div className="space-y-3">
        {touched.map((s) => (
          <GradeEstimate key={s} label={SUBTEST_LABEL[s]} estimate={estimates[s]} />
        ))}
      </div>

      {isMock && touched.length > 0 && (
        <div className="rounded-2xl border border-almi-coral/30 bg-almi-coral/5 p-5">
          <p className="text-sm font-semibold text-almi-ink">
            {atBenchmark} of {touched.length} sub-tests at Grade B ({OET_BENCHMARK_B}) in this run
          </p>
          <p className="mt-1 text-sm text-almi-text">
            Most regulators ask for at least Grade B in <span className="font-semibold">every</span>{" "}
            sub-test — they don&apos;t average them. Use the per-sub-test grades above to see where to
            focus next. Confirm the exact grades you need with your own regulator.
          </p>
        </div>
      )}

      <p className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-xs text-almi-text-muted">
        {ESTIMATE_DISCLAIMER}
      </p>

      {/* ── THE CHAIN ────────────────────────────────────────────────────────
          The primary action after a practice set is the NEXT exercise, not a
          trip back to the library. The learner is told which one they are about
          to get and how many there are, both from the database, so "Exercise 4
          of 21" is a fact about their own pool — 15 for a nurse's Writing, never
          the 180 the bank holds across twelve professions.

          🔴 WHEN THE POOL RUNS OUT, THIS SAYS SO. It does not wrap around to
          exercise 1 on its own: starting over is a button the learner presses,
          because a silent loop tells them the library is bigger than it is. */}
      {chain && continueAction ? (
        <div
          data-testid="exercise-chain"
          className="rounded-2xl border border-almi-coral/30 bg-almi-coral/5 p-5"
        >
          {chain.next ? (
            <>
              <p data-testid="chain-position" className="text-sm font-semibold text-almi-ink">
                Next up — exercise {chain.next.position} of {chain.total}
              </p>
              <p className="mt-1 text-sm text-almi-text">{chain.next.title}</p>
              <form action={continueAction} className="mt-4">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
                >
                  Next exercise →
                </button>
              </form>
            </>
          ) : (
            <>
              <p data-testid="chain-exhausted" className="text-sm font-semibold text-almi-ink">
                You have finished all {chain.total} — start again from the top?
              </p>
              <p className="mt-1 text-sm text-almi-text">
                There is nothing new left in this task for your profession. Going round again is
                useful practice; we are not going to pretend it is fresh material.
              </p>
              <form action={continueAction} className="mt-4">
                <input type="hidden" name="restart" value="1" />
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
                >
                  Start again from the top →
                </button>
              </form>
            </>
          )}
          {/* The chain is an option, not a cage. */}
          <p className="mt-4 text-sm">
            <Link
              href={chain.libraryHref}
              data-testid="chain-library-link"
              className="font-semibold text-almi-ink underline"
            >
              Back to all {chain.total} exercises
            </Link>
            <span className="text-almi-text-muted">
              {" "}
              · {chain.doneCount} of {chain.total} done
            </span>
          </p>
        </div>
      ) : (
        <Link
          href="/practice"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-almi-coral px-6 py-3 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep"
        >
          Back to practice →
        </Link>
      )}
    </div>
  );
}
