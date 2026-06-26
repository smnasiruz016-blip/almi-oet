// Honest per-sub-test score display. OET reports each sub-test on a 0–500 scale
// with an A–E grade and NO composite/overall — so we show a single estimate
// RANGE (lo–hi) plus the most-likely grade, never a precise number, and always
// the standing "practice estimate, confirm with your regulator" disclaimer.

import { formatRange, OET_BENCHMARK_B } from "@/lib/oet/scale";
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
  const atBenchmark = estimate.hi >= OET_BENCHMARK_B;
  return (
    <div className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-semibold text-almi-ink">{label}</p>
        <span className="rounded-full bg-almi-coral/10 px-2.5 py-0.5 text-sm font-bold text-almi-coral-deep">
          Grade {estimate.grade}
        </span>
      </div>
      <p className="mt-1 text-sm text-almi-text">
        Estimated {formatRange([estimate.lo, estimate.hi])} on the 0–500 scale
      </p>
      <p className="mt-1 text-xs text-almi-text-muted">
        {atBenchmark
          ? `Within reach of Grade B (${OET_BENCHMARK_B}) — the grade most regulators ask for.`
          : `Below the common Grade B (${OET_BENCHMARK_B}) benchmark.`}
      </p>
    </div>
  );
}
