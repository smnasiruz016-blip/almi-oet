// Task start page: opens a practice session for the task and routes into it.
// Objective tasks (Listening/Reading) run a short practice set; AI
// tasks (Writing/Speaking) run a single item and need a subscription. Per-
// profession tasks use the user's chosen target profession.

import { notFound, redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { startSession, PRACTICE_SET_STEPS } from "@/lib/oet/session";
import { taskBySlug } from "@/lib/oet/registry";
import { SUBTEST_LABEL, isPerProfession } from "@/lib/oet/types";
import { listPool } from "@/lib/oet/pool";

async function beginAction(formData: FormData) {
  "use server";
  const slug = String(formData.get("slug") ?? "");
  // Optional: the exercise the learner picked from the list below. startSession
  // re-checks it against their own pool, so this is a preference, not a grant.
  const chosen = String(formData.get("itemId") ?? "").trim() || null;
  const def = taskBySlug(slug);
  if (!def || !def.live) redirect("/practice");
  const user = await requireUser();
  // Card-first: starting ANY practice set needs a subscription, not only the
  // AI-graded ones. Previously Listening and Reading started without one.
  if (!hasPaidAccess(user)) redirect("/pricing");
  const profession = isPerProfession(def.subTest) ? user.targetProfession : null;
  const id = await startSession({
    userId: user.id,
    mode: "PRACTICE_SET",
    taskType: def.taskType,
    profession,
    itemId: chosen,
  });
  if (!id) redirect(`/practice/${def.slug}?empty=1`);
  redirect(`/practice/session/${id}`);
}

export default async function TaskStartPage({
  params,
  searchParams,
}: {
  params: Promise<{ task: string }>;
  searchParams: Promise<{ empty?: string }>;
}) {
  const user = await requireUser();
  const { task } = await params;
  const { empty } = await searchParams;
  const def = taskBySlug(task);
  if (!def || !def.live) notFound();

  const isObjective = def.scoringMode === "DETERMINISTIC";
  const needsPaid = !hasPaidAccess(user);
  const needsProfession = isPerProfession(def.subTest) && !user.targetProfession;

  // 🔴 THE BROWSABLE LIST. Every exercise this learner can be given, from the
  // database, at request time — the same pool the picker draws from. Before this,
  // the only way to reach an exercise was to be handed a random one, so a bank of
  // 21 was indistinguishable from a bank of 1.
  const profession = isPerProfession(def.subTest) ? user.targetProfession : null;
  const pool = needsPaid || needsProfession ? [] : await listPool(def.taskType, profession, user.id);
  const setSize = isObjective ? PRACTICE_SET_STEPS : 1;
  const doneCount = pool.filter((e) => e.status === "SCORED").length;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
        AlmiOET · {SUBTEST_LABEL[def.subTest]}
      </p>
      <h1 className="text-3xl font-semibold text-almi-ink">{def.label}</h1>
      <p className="text-base text-almi-text">{def.blurb}</p>

      <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 text-sm text-almi-text">
        <p>
          <span className="font-semibold text-almi-ink">Scoring:</span>{" "}
          {isObjective ? "auto-marked instantly" : "honest AI trait feedback"}, turned into a 0–500
          practice estimate and an A–E grade for {SUBTEST_LABEL[def.subTest]}.
        </p>
      </div>

      {empty && (
        <p className="rounded-xl border border-almi-coral/40 bg-almi-coral/5 px-4 py-3 text-sm text-almi-coral-deep">
          No practice items are seeded for this task yet.
        </p>
      )}

      {needsProfession ? (
        <div className="rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-3 text-sm text-almi-ink">
          Choose your healthcare profession first so we can show the right Writing and Speaking
          material.{" "}
          <a href="/account" className="font-semibold underline">
            Set your profession
          </a>
          .
        </div>
      ) : needsPaid ? (
        <div className="rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-3 text-sm text-almi-ink">
          Practice is part of a subscription, and the 7-day trial is free.{" "}
          <a href="/pricing" className="font-semibold underline">
            See plans
          </a>{" "}
          — the 7-day trial covers all four sub-tests.
        </div>
      ) : (
        <div className="space-y-6">
          {/* (c) Say the SET LENGTH up front. A learner handed 3 items with no
              context reads 3 as the size of the library. PRACTICE_SET_STEPS is
              imported from the engine, not retyped here. */}
          <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5">
            <p className="text-sm text-almi-text">
              <span className="font-semibold text-almi-ink">
                {pool.length} {pool.length === 1 ? "exercise" : "exercises"} available
              </span>{" "}
              in {def.label}
              {doneCount > 0 ? ` · you’ve done ${doneCount}` : ""}. A practice set serves{" "}
              <span className="font-semibold text-almi-ink">
                {setSize} {setSize === 1 ? "item" : "items"}
              </span>{" "}
              from that list — come back for more, or pick one yourself below.
            </p>
            <form action={beginAction} className="mt-4">
              <input type="hidden" name="slug" value={def.slug} />
              <button
                type="submit"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
              >
                Start a set of {setSize} →
              </button>
            </form>
          </div>

          {pool.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
                All {pool.length} {pool.length === 1 ? "exercise" : "exercises"}
              </h2>
              <ul className="mt-3 divide-y divide-almi-bg-peach overflow-hidden rounded-2xl border border-almi-bg-peach bg-almi-paper">
                {pool.map((ex, i) => (
                  <li key={ex.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
                    <span className="w-6 shrink-0 text-xs font-semibold text-almi-text-muted">
                      {i + 1}
                    </span>
                    <span className="min-w-0 flex-1 text-sm text-almi-ink">{ex.title}</span>
                    <span
                      className={
                        "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold " +
                        (ex.status === "SCORED"
                          ? "bg-almi-teal/15 text-almi-teal"
                          : ex.status === "IN_PROGRESS"
                            ? "bg-almi-accent/20 text-almi-ink"
                            : "bg-almi-bg-peach text-almi-text-muted")
                      }
                    >
                      {ex.status === "SCORED"
                        ? "Done"
                        : ex.status === "IN_PROGRESS"
                          ? "In progress"
                          : "Not started"}
                    </span>
                    <form action={beginAction} className="shrink-0">
                      <input type="hidden" name="slug" value={def.slug} />
                      <input type="hidden" name="itemId" value={ex.id} />
                      <button
                        type="submit"
                        className="inline-flex min-h-[40px] items-center rounded-full border border-almi-ink/15 bg-almi-bg px-4 py-2 text-sm font-semibold text-almi-ink hover:border-almi-coral"
                      >
                        {ex.status === "NOT_STARTED" ? "Start" : "Again"}
                      </button>
                    </form>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}

      <p className="text-xs text-almi-text-muted">
        Original to AlmiOET — never copied from OET. Results are a practice estimate, not an official
        Occupational English Test result.
      </p>
    </div>
  );
}
