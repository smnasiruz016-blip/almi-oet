/**
 * THE ANSWER TO "WHERE AM I, AND WHAT DO I DO NEXT?"
 *
 * ── WHY THIS IS A SEPARATE PAGE FROM /account ───────────────────────────────
 *
 * They answer two different questions:
 *
 *   /account    what is my plan, when is my card charged, is my email verified?
 *   /progress   where am I, and what should I do next?
 *
 * Until now the sidebar said "My Progress" and opened /account, which answers
 * the first question and says nothing at all about the second. A menu naming
 * progress tells a learner progress exists; showing them a billing card instead
 * is worse than not offering it.
 *
 * ── 🔴 NOTHING HERE IS INVENTED, AND NOTHING IS STORED ──────────────────────
 *
 * Every number comes from a function that already existed and a column that was
 * already written. This file computes no score of its own:
 *
 *   poolCounts()       src/lib/oet/pool.ts   the denominator, per task type
 *   completedCounts()  src/lib/oet/pool.ts   DISTINCT items scored, not attempts
 *   listPool()         src/lib/oet/pool.ts   the browsable order, and now latest/best
 *   gradeForScore()    src/lib/oet/scale.ts  the letter — RECOMPUTED, never the stored one
 *   readinessBand()    src/lib/oet/scale.ts  the benchmark sentence
 *
 * ── 🔴 TWO RULES THAT LOOK LIKE DETAILS AND ARE NOT ─────────────────────────
 *
 * 1. THE GRADE IS RECOMPUTED. `gradeEstimate.grade` is written at submit time
 *    and never rewritten, so rows scored before 2026-08-31 carry the letter the
 *    old floors produced. Measured on production 2026-09-05: 18 SCORED attempts,
 *    8 of them storing "D" or "E" — bands the artefact publishes no range for.
 *    toAttemptScore() recomputes with gradeForScore(midpoint); the stored value
 *    is read but never displayed.
 *
 * 2. THE BENCHMARK SENTENCE COMES FROM readinessBand(), NOT FROM `hi >= 350`.
 *    That binary is what told a Grade A learner "Within reach of Grade B" —
 *    true, technically, and useless. readinessBand() distinguishes Below /
 *    Approaching / At / Above, and it has existed unused since it was written.
 *
 * ── WHAT THIS PAGE MAY NOT SAY ──────────────────────────────────────────────
 *
 * No overall or composite score: overallScoreSupported() returns false and that
 * is deliberate. And no "A–E" — the letters are whatever gradeForScore() returns,
 * which is A, B, C+, C and nothing below. gate:claims reads this text too.
 */
import type { OetProfession, OetSubTest, OetTaskType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { OET_TASKS } from "@/lib/oet/registry";
import { SUBTEST_LABEL } from "@/lib/oet/types";
import { readinessBand, type ReadinessBand } from "@/lib/oet/scale";
import {
  attemptScoreValue,
  completedCounts,
  listPool,
  poolCounts,
  toAttemptScore,
  type AttemptScore,
  type ExerciseRow,
} from "@/lib/oet/pool";

const SUBTEST_ORDER: OetSubTest[] = ["LISTENING", "READING", "WRITING", "SPEAKING"];

export type SubTestCard = {
  subTest: OetSubTest;
  label: string;
  total: number;
  done: number;
  /** The learner's most recent SCORED attempt anywhere in this sub-test. */
  latest: AttemptScore | null;
  /** From readinessBand(midpoint) — never from `hi >= 350`. */
  band: ReadinessBand | null;
};

export type RecentAttempt = {
  id: string;
  subTest: OetSubTest;
  taskLabel: string;
  itemTitle: string;
  /** null where the attempt predates estimates being recorded. */
  score: AttemptScore | null;
  at: Date;
};

export type NextRecommended = {
  taskType: OetTaskType;
  taskSlug: string;
  subTest: OetSubTest;
  itemId: string;
  itemTitle: string;
  /** Always present. A recommendation without a reason is an instruction. */
  reason: string;
};

export type Progress = {
  cards: SubTestCard[];
  recent: RecentAttempt[];
  next: NextRecommended | null;
  /** Sum of every pool this learner can practise — the empty-state number. */
  totalExercises: number;
  /** True when they have never been scored on anything. */
  isNewLearner: boolean;
};

export async function buildProgress(
  userId: string,
  profession: OetProfession | null,
): Promise<Progress> {
  const taskTypes = Object.keys(OET_TASKS) as OetTaskType[];
  const [totals, done] = await Promise.all([
    poolCounts(profession),
    completedCounts(userId, profession),
  ]);

  // Every pool, in the browsable order, WITH the scores listPool now reads.
  const pools = new Map<OetTaskType, ExerciseRow[]>();
  await Promise.all(
    taskTypes.map(async (t) => {
      pools.set(t, await listPool(t, profession, userId));
    }),
  );

  // ── four cards ──────────────────────────────────────────────────────────
  const cards: SubTestCard[] = SUBTEST_ORDER.map((subTest) => {
    const types = taskTypes.filter((t) => OET_TASKS[t].subTest === subTest);
    let latest: AttemptScore | null = null;
    for (const t of types) {
      for (const row of pools.get(t) ?? []) {
        if (row.latest && (!latest || row.latest.at.getTime() > latest.at.getTime())) {
          latest = row.latest;
        }
      }
    }
    return {
      subTest,
      label: SUBTEST_LABEL[subTest],
      total: types.reduce((n, t) => n + (totals[t] ?? 0), 0),
      done: types.reduce((n, t) => n + (done[t] ?? 0), 0),
      latest,
      band: latest ? readinessBand(attemptScoreValue(latest)) : null,
    };
  });

  // ── the last five scored attempts ───────────────────────────────────────
  const rows = await prisma.oetAttempt.findMany({
    where: { userId, status: "SCORED" },
    orderBy: { submittedAt: "desc" },
    take: 5,
    select: {
      id: true,
      subTest: true,
      taskType: true,
      pointsEarned: true,
      pointsMax: true,
      gradeEstimate: true,
      submittedAt: true,
      updatedAt: true,
      item: { select: { title: true } },
    },
  });
  const recent: RecentAttempt[] = rows.map((r) => ({
    id: r.id,
    subTest: r.subTest,
    taskLabel: OET_TASKS[r.taskType]?.label ?? String(r.taskType),
    itemTitle: r.item?.title ?? "(exercise no longer in your pool)",
    // A row with no stored estimate is shown in words, not as a blank.
    score: r.gradeEstimate === null ? null : toAttemptScore(r),
    at: r.submittedAt ?? r.updatedAt,
  }));

  // ── next recommended: ONE item, and always a reason ─────────────────────
  //
  // 🔴 NOT chain.ts. That walks the sequence INSIDE one task's set and drives
  // "exercise 2 of 15", and it works. This is a different question — one
  // suggestion across the whole pool — and merging the two would break a thing
  // that is right to build a thing that is new.
  let next: NextRecommended | null = null;
  for (const t of taskTypes) {
    const row = (pools.get(t) ?? []).find((r) => r.status === "NOT_STARTED");
    if (row) {
      next = {
        taskType: t,
        taskSlug: OET_TASKS[t].slug,
        subTest: OET_TASKS[t].subTest,
        itemId: row.id,
        itemTitle: row.title,
        reason: "You haven't tried this one yet.",
      };
      break;
    }
  }
  if (!next) {
    // Everything has been attempted: point at the weakest, by the one ranking rule.
    let worst: { t: OetTaskType; row: ExerciseRow; value: number } | null = null;
    for (const t of taskTypes) {
      for (const row of pools.get(t) ?? []) {
        if (!row.best) continue;
        const value = attemptScoreValue(row.best);
        if (!worst || value < worst.value) worst = { t, row, value };
      }
    }
    if (worst) {
      next = {
        taskType: worst.t,
        taskSlug: OET_TASKS[worst.t].slug,
        subTest: OET_TASKS[worst.t].subTest,
        itemId: worst.row.id,
        itemTitle: worst.row.title,
        reason: "Your lowest score so far.",
      };
    }
  }

  const totalExercises = taskTypes.reduce((n, t) => n + (totals[t] ?? 0), 0);
  return {
    cards,
    recent,
    next,
    totalExercises,
    isNewLearner: recent.length === 0,
  };
}
