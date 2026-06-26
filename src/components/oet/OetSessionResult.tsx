// Full-mock / practice-set aggregate. OET scores each sub-test independently, so
// we show one practice estimate per sub-test that the session touched — and
// NEVER a composite/overall (OET has none). The honest range + grade per
// sub-test comes from aggregateSession.

import Link from "next/link";
import type { OetAttempt, OetItem, OetSession, OetSubTest } from "@prisma/client";
import { aggregateSession } from "@/lib/oet/session";
import { SUBTEST_LABEL } from "@/lib/oet/types";
import { GradeEstimate, ESTIMATE_DISCLAIMER } from "@/components/oet/GradeEstimate";

const SUBTEST_ORDER: OetSubTest[] = ["LISTENING", "READING", "WRITING", "SPEAKING"];

export function OetSessionResult({
  session,
  attempts,
}: {
  session: OetSession;
  attempts: (OetAttempt & { item: OetItem })[];
}) {
  const estimates = aggregateSession(attempts);
  const touched = SUBTEST_ORDER.filter((s) => estimates[s] !== null);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          {session.mode === "MOCK" ? "Full mock" : "Practice set"} · result
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-almi-ink">Your practice estimates</h1>
        <p className="mt-2 text-sm text-almi-text">
          Each sub-test is estimated on its own 0–500 scale with an A–E grade. OET reports a separate
          grade per sub-test — there is no overall score, so we don&apos;t invent one.
        </p>
      </header>

      <div className="space-y-3">
        {touched.map((s) => (
          <GradeEstimate key={s} label={SUBTEST_LABEL[s]} estimate={estimates[s]} />
        ))}
      </div>

      <p className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-xs text-almi-text-muted">
        {ESTIMATE_DISCLAIMER}
      </p>

      <Link
        href="/practice"
        className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-almi-coral px-6 py-3 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep"
      >
        Back to practice →
      </Link>
    </div>
  );
}
