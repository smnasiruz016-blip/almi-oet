// Practice hub — the logged-in "Choose a Test" page. Lists the eight OET task
// types from the registry grouped by sub-test, plus the full mock. All practice
// needs a subscription; the 7-day trial is the free tier.

import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { OET_TASKS } from "@/lib/oet/registry";
import type { TaskDef } from "@/lib/oet/registry";
import { SUBTEST_LABEL, isPerProfession } from "@/lib/oet/types";
import { poolCounts, completedCounts } from "@/lib/oet/pool";
import type { OetSubTest } from "@prisma/client";

const SUBTEST_ORDER: OetSubTest[] = ["LISTENING", "READING", "WRITING", "SPEAKING"];

// 🔴 THE COUNT IS THE POINT OF THIS CARD.
//
// This page used to render the registry and nothing else: eight cards, no
// numbers. The bank held 21 Listening Part A items and 15 Writing tasks per
// profession, all active, all reachable across repeated sessions — and the
// product never said so. A learner saw one card per skill and reasonably
// concluded there was one test per skill.
//
// `total` comes from poolCounts(), which runs the SAME query the picker draws
// from (src/lib/oet/pool.ts), against the database, on every request. There is no
// hard-coded 15 or 21 anywhere on this page: a number typed into the UI is the
// defect class that has cost this product twice this week.
function TaskCard({ def, total, done }: { def: TaskDef; total: number; done: number }) {
  const tag = def.scoringMode === "AI" ? "AI feedback" : "Auto-marked";
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-base font-semibold text-almi-ink">{def.label}</h3>
        <span className="text-xs text-almi-text-muted">{def.live ? tag : "Coming soon"}</span>
      </div>
      <p className="mt-2 text-sm text-almi-text">{def.blurb}</p>
      {def.live && (
        <p className="mt-3 flex flex-wrap items-baseline gap-x-2 text-sm">
          <span className="font-semibold text-almi-ink">
            {total} {total === 1 ? "exercise" : "exercises"}
          </span>
          <span className="text-almi-text-muted">
            {done > 0 ? `· you’ve done ${done}` : "· none done yet"}
          </span>
        </p>
      )}
      <p className="mt-3 text-sm font-semibold">
        {def.live ? (
          <span className="text-almi-coral">Browse &amp; practise →</span>
        ) : (
          <span className="text-almi-text-muted">Coming soon</span>
        )}
      </p>
    </>
  );
  return def.live ? (
    <Link
      href={`/practice/${def.slug}`}
      className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 shadow-sm transition hover:border-almi-accent"
    >
      {inner}
    </Link>
  ) : (
    <div className="rounded-2xl border border-almi-bg-peach bg-almi-bg p-5 opacity-80">{inner}</div>
  );
}

export default async function PracticePage() {
  const user = await requireUser();
  // Card-first: the practice hub itself is behind the subscription. Everything
  // it links to is gated, so showing the menu to an account with no card only
  // routes them into a redirect.
  if (!hasPaidAccess(user)) redirect("/pricing");
  const tasks = Object.values(OET_TASKS);

  // Counted at request time, per learner. Writing and Speaking are filtered to
  // this learner's own profession, so they read 15 rather than the 180 the bank
  // holds across twelve professions — 180 would be a claim about material this
  // learner will never be shown.
  const profession = user.targetProfession ?? null;
  const [totals, done] = await Promise.all([
    poolCounts(profession),
    completedCounts(user.id, profession),
  ]);
  const needsProfession = !profession;

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          AlmiOET · Occupational English Test practice
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-almi-ink">Choose a task</h1>
        <p className="mt-2 max-w-2xl text-sm text-almi-text">
          Listening and Reading are common to every profession. Writing and
          Speaking are specific to your profession and graded with honest AI feedback. Each sub-test
          is estimated on the 0–500 scale with an A–E grade — shown as a range, never a single number.
        </p>
      </header>

      {SUBTEST_ORDER.map((subTest) => {
        const group = tasks.filter((t) => t.subTest === subTest);
        if (group.length === 0) return null;
        const perProfession = isPerProfession(subTest);
        return (
          <section key={subTest}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
              {SUBTEST_LABEL[subTest]}
            </h2>
            {perProfession && needsProfession && (
              <p className="mt-2 rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-2 text-sm text-almi-ink">
                These are specific to your profession. Set yours on{" "}
                <a href="/account" className="font-semibold underline">
                  your account
                </a>{" "}
                and the exercise counts below will fill in.
              </p>
            )}
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.map((def) => (
                <TaskCard
                  key={def.taskType}
                  def={def}
                  total={totals[def.taskType] ?? 0}
                  done={done[def.taskType] ?? 0}
                />
              ))}
            </div>
          </section>
        );
      })}

      <Link
        href="/practice/mock"
        className="block rounded-2xl border border-almi-coral/40 bg-almi-coral/10 p-6 shadow-sm transition hover:border-almi-coral"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span aria-hidden className="text-xl">🏁</span>
              <h2 className="text-lg font-semibold text-almi-ink">Full mock</h2>
              <span className="rounded-full bg-almi-coral px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-almi-ink">
                Pro
              </span>
            </div>
            <p className="mt-2 max-w-xl text-sm text-almi-text">
              All four sub-tests in OET order, then an honest 0–500 estimate and A–E grade for each.
              No fabricated overall.
            </p>
          </div>
          <span className="text-sm font-semibold text-almi-coral">Start full mock →</span>
        </div>
      </Link>

      <p className="text-xs text-almi-text-muted">
        Every task here is written from scratch by AlmiOET. We never copy or reproduce OET&apos;s test
        material. Scores are practice estimates, not official Occupational English Test results —
        confirm the score you need with your regulator.
      </p>
    </div>
  );
}
