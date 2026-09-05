// Section G — one learner's progress and scores, for the owner.
//
// Master Standard §G asks admin to show "progress, relevant scores/results".
// Measured on main @ #67: five admin routes (/admin, accounts, comp-accounts,
// costs, reviews) and NOT ONE of them showed a learner's progress or score. The
// only attempt data anywhere in admin was a bare count on the costs page.
//
// ── 🔴 THIS PAGE COMPUTES NOTHING. THAT IS THE POINT. ───────────────────────
//
// Every number here comes from buildProgress() — the same function
// src/app/(app)/progress/page.tsx calls for the learner themselves. Admin does
// not get its own copy of the arithmetic.
//
// The reason is the one that has now bitten this product twice in two days:
// two implementations of one calculation agree until the day one of them
// changes. The comp "days remaining" was written twice and drifted by a
// millisecond of clock sampling (#67); the billing date was formatted twice and
// would have drifted by a timezone (#62). A learner's grade is a worse thing to
// have two answers for than either.
//
// ── AND THE SPECIFIC DISAGREEMENT THIS AVOIDS ──────────────────────────────
//
// `gradeEstimate.grade` is written at submit time and never rewritten, so rows
// scored before the floors were corrected on 2026-08-31 still carry the old
// letter. Measured on production 2026-09-05: 18 SCORED attempts, 8 of them
// storing "D" or "E" — bands the artefact publishes no range for.
//
// If admin read the stored letter, the owner would see "E" while the learner's
// own page said "below the published grade bands", for the same attempt. Going
// through buildProgress() means the letter is recomputed with gradeForScore()
// in both places, and they cannot disagree.

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { buildProgress } from "@/lib/oet/progress";
import { formatDateUTC } from "@/lib/format-date";
import { BELOW_PUBLISHED_BANDS, OET_BENCHMARK_B, formatRange } from "@/lib/oet/scale";

export const dynamic = "force-dynamic";

export default async function AdminLearnerProgressPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, name: true, targetProfession: true },
  });
  if (!user) notFound();

  const progress = await buildProgress(user.id, user.targetProfession ?? null);

  return (
    <main className="px-4 py-6" data-testid="admin-learner-progress">
      <Link href="/admin/accounts" className="text-sm text-almi-coral-deep underline">
        ← Accounts
      </Link>
      <h1 className="mt-2 text-2xl font-semibold text-almi-ink">
        {user.name ?? user.email}
      </h1>
      {user.name ? <p className="text-sm text-almi-text-muted">{user.email}</p> : null}

      {progress.isNewLearner ? (
        <p data-testid="admin-progress-empty" className="mt-6 text-sm text-almi-text-muted">
          No scored attempts yet — {progress.totalExercises} exercises available to them.
        </p>
      ) : null}

      <section className="mt-6 grid gap-3 sm:grid-cols-2" data-testid="admin-progress-cards">
        {progress.cards.map((c) => (
          <article
            key={c.subTest}
            data-testid="admin-progress-card"
            data-subtest={c.subTest}
            className="rounded-2xl border border-almi-bg-peach bg-almi-paper px-4 py-4"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-sm font-semibold text-almi-ink">{c.label}</h2>
              {/* The SAME value the learner sees — recomputed, never the stored letter. */}
              <span data-testid="admin-progress-grade" className="text-sm font-bold text-almi-coral-deep">
                {c.latest
                  ? (c.latest.grade ? `Grade ${c.latest.grade}` : BELOW_PUBLISHED_BANDS)
                  : "Not practised yet"}
              </span>
            </div>
            {c.latest ? (
              <>
                <p data-testid="admin-progress-estimate" className="mt-2 text-sm text-almi-text">
                  {formatRange([c.latest.lo, c.latest.hi])} on the 0–500 scale
                </p>
                <p data-testid="admin-progress-band" className="mt-1 text-xs text-almi-text-muted">
                  {c.band} — Grade B ({OET_BENCHMARK_B})
                </p>
              </>
            ) : null}
            <p className="mt-2 text-xs text-almi-text-muted">
              <span data-testid="admin-progress-done">{c.done}</span> of{" "}
              <span data-testid="admin-progress-total">{c.total}</span> exercises
              {c.latest ? <> · last {formatDateUTC(c.latest.at)}</> : null}
            </p>
          </article>
        ))}
      </section>

      {progress.recent.length > 0 ? (
        <section className="mt-6" data-testid="admin-progress-recent">
          <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
            Recent results
          </h2>
          <ul className="mt-3 divide-y divide-almi-bg-peach overflow-hidden rounded-2xl border border-almi-bg-peach bg-almi-paper">
            {progress.recent.map((r) => (
              <li key={r.id} data-testid="admin-recent-row" className="px-4 py-3 text-sm">
                <span className="text-almi-ink">{r.taskLabel} · {r.itemTitle}</span>
                <span className="ml-2 text-xs text-almi-text-muted">
                  {r.score ? (
                    <>
                      {formatRange([r.score.lo, r.score.hi])} ·{" "}
                      {r.score.grade ? `Grade ${r.score.grade}` : BELOW_PUBLISHED_BANDS}
                    </>
                  ) : (
                    <>scored before estimates were recorded</>
                  )}{" "}
                  · {formatDateUTC(r.at)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {progress.next ? (
        <p data-testid="admin-progress-next" className="mt-6 text-sm text-almi-text-muted">
          Next up for them: <span className="text-almi-ink">{progress.next.itemTitle}</span> —{" "}
          {progress.next.reason}
        </p>
      ) : null}
    </main>
  );
}
