// Honest single-attempt / step result. Shows the per-sub-test practice estimate
// (0–500 range + A–E grade), the points earned, and any AI trait feedback. OET
// has no composite/overall, so a single attempt simply shows its own sub-test
// estimate. Rich per-task review UIs land with each family's phase.

import Link from "next/link";
import type { OetAttempt, OetItem } from "@prisma/client";
import type { TaskDef } from "@/lib/oet/registry";
import { SUBTEST_LABEL } from "@/lib/oet/types";
import type { GradeEstimate as GradeEstimateValue } from "@/lib/oet/scale";
import { GradeEstimate, ESTIMATE_DISCLAIMER } from "@/components/oet/GradeEstimate";

type AnyFeedback = {
  strengths?: string[];
  improvements?: string[];
  overallComment?: string;
} | null;

function FeedbackBlock({ feedback }: { feedback: AnyFeedback }) {
  if (!feedback) return null;
  return (
    <div className="space-y-3">
      {feedback.overallComment && <p className="text-sm text-almi-text">{feedback.overallComment}</p>}
      {feedback.strengths && feedback.strengths.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-almi-teal">What worked</p>
          <ul className="mt-1 space-y-1 text-sm text-almi-text">
            {feedback.strengths.map((s, i) => (
              <li key={i} className="flex gap-2"><span aria-hidden className="text-almi-teal">✓</span>{s}</li>
            ))}
          </ul>
        </div>
      )}
      {feedback.improvements && feedback.improvements.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">Improvement opportunities</p>
          <ul className="mt-1 space-y-1 text-sm text-almi-text">
            {feedback.improvements.map((s, i) => (
              <li key={i} className="flex gap-2"><span aria-hidden className="text-almi-accent-deep">→</span>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function OetResult({
  def,
  item,
  attempt,
  variant = "single",
}: {
  def: TaskDef;
  item: OetItem;
  attempt: OetAttempt;
  variant?: "single" | "step";
}) {
  const estimate = (attempt.gradeEstimate as GradeEstimateValue | null) ?? null;
  const feedback = (attempt.feedback as AnyFeedback) ?? null;

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          {def.label} · practice result
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-almi-ink">
          {variant === "step" ? "This question" : "Your practice estimate"}
        </h1>
        <p className="mt-2 text-sm text-almi-text-muted">
          {attempt.pointsEarned} / {attempt.pointsMax} practice points · {item.title}
        </p>
      </header>

      <GradeEstimate label={`${SUBTEST_LABEL[attempt.subTest]} (this item)`} estimate={estimate} />

      {feedback && (
        <section className="rounded-2xl border border-almi-bg-peach bg-almi-bg p-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">Feedback</h2>
          <div className="mt-3"><FeedbackBlock feedback={feedback} /></div>
        </section>
      )}

      {variant === "single" && (
        <>
          <p className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-xs text-almi-text-muted">
            {ESTIMATE_DISCLAIMER} We show a range, not a single number, because honest prep means
            showing the uncertainty.
          </p>
          <Link
            href={`/practice/${def.slug}`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-almi-coral px-6 py-3 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            Practise again →
          </Link>
        </>
      )}
    </div>
  );
}
