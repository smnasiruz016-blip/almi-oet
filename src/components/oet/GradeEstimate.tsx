// Honest per-sub-test score display. OET reports each sub-test on a 0–500 scale
// (OET's published scale and bands are cited in docs/sources/README.md.)
// with a published grade band, so we show a single estimate RANGE (lo–hi) plus
// the most-likely grade — A, B, C+ or C, or no letter where OET publishes no
// band — never a precise number, and always the standing "practice
// estimate, confirm with your regulator" disclaimer.
//
// This comment used to add "and NO composite/overall". That was FALSE: OET has
// reported an overall score alongside the four sub-test scores since 29 January
// 2025. The claim is deleted rather than corrected in place, because it was
// being used as the REASON we show no overall — and it is not the reason.
//
// The real reason is unchanged and still stands: see overallScoreSupported() in
// scale.ts, which returns false because OET's official method for deriving the
// overall score is not published in a form we have an artefact for, and a
// plausible-looking invented number beside real sub-test grades would read as
// authoritative while being guesswork. "OET has none" and "we will not guess at
// OET's" are different statements, and only the second one is true.

import {
  BELOW_PUBLISHED_BANDS,
  formatRange,
  gradeForScore,
  OET_BENCHMARK_B,
  rangeMidpoint,
  readinessBand,
} from "@/lib/oet/scale";
import type { GradeEstimate as GradeEstimateValue } from "@/lib/oet/scale";

export const ESTIMATE_DISCLAIMER =
  "Practice estimate only — not an official OET result. Confirm the score you need with your regulator.";

export function GradeEstimate({
  label,
  estimate,
}: {
  label: string;
  estimate: GradeEstimateValue | null;
}) {
  if (!estimate) {
    return (
      <div className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3">
        <p className="text-sm font-semibold text-almi-ink">{label}</p>
        <p className="mt-1 text-xs text-almi-text-muted">Not enough practice yet.</p>
      </div>
    );
  }
  // 🔴 THIS WAS `estimate.hi >= OET_BENCHMARK_B`, A BINARY, AND IT MISREAD ITS
  // OWN BEST CASE. Any range whose TOP touched 350 printed "Within reach of
  // Grade B" — so a learner estimated 430-500, comfortably Grade A, was told
  // they were within reach of a grade they had already passed.
  //
  // readinessBand() has existed since it was written and nothing called it. It
  // reads the MIDPOINT, not the optimistic end, and distinguishes four states
  // instead of two.
  const band = readinessBand(rangeMidpoint([estimate.lo, estimate.hi]));

  // 🔴 THE LETTER IS RECOMPUTED FROM THE RANGE, NOT READ FROM THE STORED ROW.
  //
  // `gradeEstimate` is written to OetAttempt at submit time and never rewritten,
  // so a row scored before 2026-08-31 carries the letter the OLD floors produced.
  // Measured on production 2026-08-31: 15 attempts hold a gradeEstimate, and 8 of
  // them store the letter "E" for a midpoint below 200 — a grade the artefact
  // publishes no range for. Reading `estimate.grade` here would keep printing "E"
  // to those learners forever, because a code fix does not repair stored rows.
  //
  // fractionToEstimate() derives its grade as gradeForScore(midpoint(lo,hi)), so
  // recomputing it here is exactly reproducible and can never disagree with a
  // freshly-scored row. It only differs where the stored letter is stale — which
  // is the whole point. The stored value is left alone; nothing is migrated.
  const displayGrade = gradeForScore(rangeMidpoint([estimate.lo, estimate.hi]));
  return (
    <div className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-semibold text-almi-ink">{label}</p>
        {displayGrade ? (
          <span className="rounded-full bg-almi-coral/10 px-2.5 py-0.5 text-sm font-bold text-almi-coral-deep">
            Grade {displayGrade}
          </span>
        ) : (
          <span className="rounded-full bg-almi-bg-peach px-2.5 py-0.5 text-xs font-semibold text-almi-text-muted">
            {BELOW_PUBLISHED_BANDS}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-almi-text">
        Estimated {formatRange([estimate.lo, estimate.hi])} on the 0–500 scale
      </p>
      {!displayGrade && (
        <p className="mt-1 text-xs text-almi-text-muted">
          OET&apos;s published scoring document lists bands down to 200 only. Below that it
          publishes no range, so we show the estimated score and no letter rather than one
          we cannot point at a source for.
        </p>
      )}
      <p className="mt-1 text-xs text-almi-text-muted">
        {`${band} — Grade B (${OET_BENCHMARK_B}) is the grade most regulators ask for.`}
      </p>
    </div>
  );
}
