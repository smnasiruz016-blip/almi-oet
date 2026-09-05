// /progress — "where am I, and what do I do next?"
//
// The sidebar has said "My Progress" since it was written and opened /account,
// which answers a different question entirely (plan, card, email). This is the
// page that name was always promising.
//
// 🔴 EVERY NUMBER HERE COMES FROM A SOURCE, NOT FROM THIS FILE. Counts from
// poolCounts()/completedCounts(), the letter from gradeForScore() via
// toAttemptScore(), the benchmark sentence from readinessBand(). See
// src/lib/oet/progress.ts for why each of those matters. Nothing is hard-coded,
// and gate:progress-visible reads these numbers back OUT OF THE RENDERED MARKUP
// rather than out of the props, the same discipline gate:pool-visible uses.
//
// 🔴 AND THE WORDS ARE HELD TOO. No overall score (overallScoreSupported() is
// false, deliberately) and no "A–E" — the letters are whatever gradeForScore()
// returns, which is A, B, C+, C and nothing beneath. gate:claims reads this text.

import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { buildProgress } from "@/lib/oet/progress";
import { formatDateUTC } from "@/lib/format-date";
import { BELOW_PUBLISHED_BANDS, OET_BENCHMARK_B, formatRange } from "@/lib/oet/scale";
import { PROFESSIONS, professionLabel } from "@/lib/oet/professions";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "My Progress",
  description:
    "Where you stand on each OET sub-test, on the 0–500 scale, and what to practise next.",
};

export default async function ProgressPage() {
  const user = await requireUser();
  const progress = await buildProgress(user.id, user.targetProfession ?? null);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8" data-testid="progress-page">
      <h1 className="text-2xl font-semibold text-almi-ink">My Progress</h1>
      <p className="mt-1 text-sm text-almi-text-muted">
        {user.targetProfession
          ? `${professionLabel(user.targetProfession)} · practice estimates only — confirm what you need with your regulator.`
          : "Practice estimates only — confirm what you need with your regulator."}
      </p>

      {/* ── the brand-new learner: one line, not four empty cards ────────── */}
      {progress.isNewLearner ? (
        <section
          data-testid="progress-empty"
          className="mt-6 rounded-2xl border border-almi-bg-peach bg-almi-paper px-5 py-6"
        >
          <p className="text-sm text-almi-ink">
            You haven&apos;t practised yet.{" "}
            <span data-testid="progress-total-exercises">{progress.totalExercises}</span> exercises
            are waiting.
          </p>
          <Link
            href="/practice"
            className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-almi-coral px-5 py-2 text-sm font-semibold text-white"
          >
            Choose a task →
          </Link>
        </section>
      ) : null}

      {/* ── four sub-tests, four cards ───────────────────────────────────── */}
      <section className="mt-6 grid gap-3 sm:grid-cols-2" data-testid="progress-cards">
        {progress.cards.map((c) => (
          <article
            key={c.subTest}
            data-testid="progress-card"
            data-subtest={c.subTest}
            className="rounded-2xl border border-almi-bg-peach bg-almi-paper px-4 py-4"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-sm font-semibold text-almi-ink">{c.label}</h2>
              {c.latest ? (
                c.latest.grade ? (
                  <span
                    data-testid="progress-grade"
                    className="rounded-full bg-almi-coral/10 px-2.5 py-0.5 text-sm font-bold text-almi-coral-deep"
                  >
                    Grade {c.latest.grade}
                  </span>
                ) : (
                  <span
                    data-testid="progress-grade"
                    className="rounded-full bg-almi-bg-peach px-2.5 py-0.5 text-xs font-semibold text-almi-text-muted"
                  >
                    {BELOW_PUBLISHED_BANDS}
                  </span>
                )
              ) : (
                // Never an empty cell where a grade would be — say it in words.
                <span
                  data-testid="progress-grade"
                  className="rounded-full bg-almi-bg-peach px-2.5 py-0.5 text-xs font-semibold text-almi-text-muted"
                >
                  Not practised yet
                </span>
              )}
            </div>

            {c.latest ? (
              <>
                <p data-testid="progress-estimate" className="mt-2 text-sm text-almi-text">
                  Estimated {formatRange([c.latest.lo, c.latest.hi])} on the 0–500 scale
                </p>
                <p data-testid="progress-band" className="mt-1 text-xs text-almi-text-muted">
                  {c.band} — Grade B ({OET_BENCHMARK_B}) is the grade most regulators ask for.
                </p>
              </>
            ) : null}

            {/* The count shows even with no attempt, so the learner sees the size
                of what is available rather than a card that looks broken. */}
            <p className="mt-2 text-xs text-almi-text-muted">
              <span data-testid="progress-done">{c.done}</span> of{" "}
              <span data-testid="progress-total">{c.total}</span> exercises
              {c.latest ? (
                <> · last practised {formatDateUTC(c.latest.at)}</>
              ) : null}
            </p>
          </article>
        ))}
      </section>

      {/* ── next recommended: ONE item, always with its reason ───────────── */}
      {progress.next ? (
        <section
          data-testid="progress-next"
          className="mt-6 rounded-2xl border border-almi-coral/30 bg-almi-paper px-5 py-4"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
            Next up
          </h2>
          <p data-testid="progress-next-title" className="mt-1 text-sm font-semibold text-almi-ink">
            {progress.next.itemTitle}
          </p>
          <p data-testid="progress-next-reason" className="mt-1 text-xs text-almi-text-muted">
            {progress.next.reason}
          </p>
          <Link
            data-testid="progress-next-link"
            href={`/practice/${PROFESSIONS[user.targetProfession ?? "NURSING"].slug}/${progress.next.taskSlug}`}
            className="mt-3 inline-flex min-h-[44px] items-center rounded-full bg-almi-coral px-5 py-2 text-sm font-semibold text-white"
          >
            Start →
          </Link>
        </section>
      ) : null}

      {/* ── the last five ───────────────────────────────────────────────── */}
      {progress.recent.length > 0 ? (
        <section className="mt-6" data-testid="progress-recent">
          <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
            Recent results
          </h2>
          <ul className="mt-3 divide-y divide-almi-bg-peach overflow-hidden rounded-2xl border border-almi-bg-peach bg-almi-paper">
            {progress.recent.map((r) => (
              <li key={r.id} data-testid="progress-recent-row" className="px-4 py-3">
                <p className="text-sm text-almi-ink">
                  {r.taskLabel} · {r.itemTitle}
                </p>
                <p className="mt-0.5 text-xs text-almi-text-muted">
                  {r.score ? (
                    <>
                      {formatRange([r.score.lo, r.score.hi])} ·{" "}
                      {r.score.grade ? `Grade ${r.score.grade}` : BELOW_PUBLISHED_BANDS} ·{" "}
                    </>
                  ) : (
                    // An older row with no stored estimate must not break the page.
                    <>scored before estimates were recorded · </>
                  )}
                  {formatDateUTC(r.at)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
