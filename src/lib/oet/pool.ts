/**
 * THE EXERCISE POOL — one definition of "the items this learner can be given",
 * shared by the picker that hands them out and by every screen that counts them.
 *
 * ── WHY THIS MODULE EXISTS ──────────────────────────────────────────────────
 *
 * The bank holds 21 Listening Part A items, 33 Part B, 18 Reading Part A, and 15
 * per profession for Writing and Speaking. A learner saw EIGHT CARDS and no
 * numbers at all. The exercises were seeded, active, and reachable — and the
 * product never said they existed. From the outside it looked like one Listening
 * test and one Writing test.
 *
 * That is the same failure as `prepSeconds`: a value correct in the data and
 * absent from the screen. Twice in two days. So the rule this module enforces is
 * that the number on the card and the number the picker draws from CANNOT
 * disagree, because they are the same query — not two queries that happen to
 * match today.
 *
 * ── 🔴 WRITING AND SPEAKING ARE 15, NOT 180 ──────────────────────────────────
 *
 * The bank holds 180 Writing items. That is 15 × 12 professions, and a learner
 * only ever sees their own profession's 15: `pickItemId` filters on
 * `{ profession }` for the per-profession sub-tests. Printing 180 on a card would
 * be a false claim about what that learner gets. `poolWhere` applies the same
 * filter the picker applies, so the count is 15 by construction rather than by
 * remembering to divide.
 *
 * Listening and Reading are common to every profession and are stored with
 * `profession: null`, so they are filtered on `{ profession: null }` — not left
 * unfiltered, which would let a profession-tagged item leak into a shared pool.
 */
import type { OetProfession, OetTaskType, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { OET_TASKS } from "@/lib/oet/registry";
import { isPerProfession } from "@/lib/oet/types";
import { fractionToEstimate, gradeForScore, rangeMidpoint } from "@/lib/oet/scale";
import type { OetGrade } from "@/lib/oet/types";

/**
 * The `where` clause that defines a learner's pool for one task type.
 *
 * 🔴 THIS IS THE SHARED DEFINITION. `pickItemId` in session.ts builds its query
 * on top of this, and every count in the UI calls it. Do not inline a copy: the
 * whole point is that a card cannot advertise a number the picker would not draw
 * from. scripts/../tests assert the two stay identical.
 */
export function poolWhere(
  taskType: OetTaskType,
  profession: OetProfession | null,
): Prisma.OetItemWhereInput {
  const subTest = OET_TASKS[taskType].subTest;
  // Per-profession sub-tests filter to THIS learner's profession; the shared ones
  // filter to `null` rather than not filtering at all.
  const professionFilter = isPerProfession(subTest) ? { profession } : { profession: null };
  return { taskType, active: true, ...professionFilter };
}

/** How many exercises this learner can actually be given, per task type. */
export async function poolCounts(
  profession: OetProfession | null,
): Promise<Record<OetTaskType, number>> {
  const taskTypes = Object.keys(OET_TASKS) as OetTaskType[];
  const counts = await Promise.all(
    taskTypes.map((t) => prisma.oetItem.count({ where: poolWhere(t, profession) })),
  );
  return Object.fromEntries(taskTypes.map((t, i) => [t, counts[i]])) as Record<OetTaskType, number>;
}

export type ExerciseStatus = "NOT_STARTED" | "IN_PROGRESS" | "SCORED";

/**
 * One SCORED attempt, reduced to what a learner is shown about it.
 *
 * 🔴 `grade` IS NOT THE STORED LETTER. It is recomputed with gradeForScore()
 * from the midpoint of the stored range, for the reason written at length in
 * GradeEstimate.tsx:48-60: gradeEstimate is written once at submit time and
 * never rewritten, so rows scored before the floors were corrected on
 * 2026-08-31 still carry the OLD letter. Measured on production 2026-09-05:
 * 18 SCORED attempts, and 8 of them store "D" or "E" — bands the artefact
 * publishes no range for. Reading the stored letter would print those forever.
 * The stored value is left alone; nothing is migrated.
 */
export type AttemptScore = {
  grade: OetGrade | null;
  lo: number;
  hi: number;
  points: number;
  max: number;
  at: Date;
};

/**
 * 🔴 THE ONE RANKING RULE. "Best" has to mean one thing everywhere it is shown,
 * so every comparison in this product goes through this function and no caller
 * invents its own.
 *
 * A score is its position on the 0-500 scale: the midpoint of the estimated
 * range. Where an attempt has no stored range — possible on old rows, since
 * gradeEstimate is nullable — the raw fraction is put through the SAME
 * fractionToEstimate() the grader uses, so the two paths cannot disagree about
 * what a given performance is worth.
 */
export function attemptScoreValue(a: AttemptScore): number {
  return rangeMidpoint([a.lo, a.hi]);
}

export type ExerciseRow = {
  id: string;
  title: string;
  difficulty: string;
  topicTag: string | null;
  status: ExerciseStatus;
  /** The most recent SCORED attempt, or null where there is none. */
  latest: AttemptScore | null;
  /** The highest SCORED attempt by attemptScoreValue(), or null. */
  best: AttemptScore | null;
};

/** Turn a stored attempt row into an AttemptScore, recomputing the letter. */
export function toAttemptScore(a: {
  gradeEstimate: unknown;
  pointsEarned: number;
  pointsMax: number;
  submittedAt: Date | null;
  updatedAt?: Date;
}): AttemptScore {
  const stored = (a.gradeEstimate ?? null) as { lo?: number; hi?: number } | null;
  let lo: number;
  let hi: number;
  if (stored && typeof stored.lo === "number" && typeof stored.hi === "number") {
    lo = stored.lo;
    hi = stored.hi;
  } else {
    // No stored range. Derive one the same way the grader would, so this row is
    // comparable with the others instead of being dropped from "best".
    const frac = a.pointsMax > 0 ? a.pointsEarned / a.pointsMax : 0;
    const est = fractionToEstimate(frac);
    lo = est.lo;
    hi = est.hi;
  }
  return {
    grade: gradeForScore(rangeMidpoint([lo, hi])),
    lo,
    hi,
    points: a.pointsEarned,
    max: a.pointsMax,
    at: a.submittedAt ?? a.updatedAt ?? new Date(0),
  };
}

/**
 * Every exercise in the learner's pool for one task type, with what they have
 * done to it. Ordered by title so the list is stable between visits — a browsable
 * list that reshuffles is not browsable.
 */
export async function listPool(
  taskType: OetTaskType,
  profession: OetProfession | null,
  userId: string,
): Promise<ExerciseRow[]> {
  const items = await prisma.oetItem.findMany({
    where: poolWhere(taskType, profession),
    select: { id: true, title: true, difficulty: true, topicTag: true },
    orderBy: { title: "asc" },
  });
  if (items.length === 0) return [];

  // 🔴 THIS SELECT USED TO BE `{ itemId, status }` AND NOTHING ELSE.
  //
  // Every score a learner has ever been given was already stored on these rows
  // — pointsEarned, pointsMax and the gradeEstimate range — and this query threw
  // all of it away, so the browsable list could say "Done" and not what they
  // scored. Section D is a DISPLAY problem, not a data one; nothing new is
  // stored here.
  const attempts = await prisma.oetAttempt.findMany({
    where: { userId, itemId: { in: items.map((i) => i.id) } },
    select: {
      itemId: true,
      status: true,
      pointsEarned: true,
      pointsMax: true,
      gradeEstimate: true,
      submittedAt: true,
      updatedAt: true,
    },
  });

  // A learner may have attempted the same item more than once. SCORED wins over
  // IN_PROGRESS: "you have done this" is the more useful of the two.
  const byItem = new Map<string, ExerciseStatus>();
  for (const a of attempts) {
    const current = byItem.get(a.itemId);
    if (current === "SCORED") continue;
    byItem.set(a.itemId, a.status === "SCORED" ? "SCORED" : "IN_PROGRESS");
  }

  // latest = most recent SCORED attempt · best = highest by the ONE ranking
  // rule (attemptScoreValue). Both are per item, and both are null where the
  // learner has no scored attempt on it — a caller must print words there, not
  // an empty cell.
  const latestByItem = new Map<string, AttemptScore>();
  const bestByItem = new Map<string, AttemptScore>();
  for (const a of attempts) {
    if (a.status !== "SCORED") continue;
    const score = toAttemptScore(a);
    const latest = latestByItem.get(a.itemId);
    if (!latest || score.at.getTime() > latest.at.getTime()) latestByItem.set(a.itemId, score);
    const best = bestByItem.get(a.itemId);
    if (!best || attemptScoreValue(score) > attemptScoreValue(best)) bestByItem.set(a.itemId, score);
  }

  return items.map((i) => ({
    id: i.id,
    title: i.title,
    difficulty: String(i.difficulty),
    topicTag: i.topicTag,
    status: byItem.get(i.id) ?? "NOT_STARTED",
    latest: latestByItem.get(i.id) ?? null,
    best: bestByItem.get(i.id) ?? null,
  }));
}

/**
 * How many DISTINCT exercises in each pool this learner has already been scored
 * on. Counted per item, not per attempt, so re-doing one does not inflate it —
 * "you've done 4" has to mean four different exercises.
 */
export async function completedCounts(
  userId: string,
  profession: OetProfession | null,
): Promise<Record<OetTaskType, number>> {
  const taskTypes = Object.keys(OET_TASKS) as OetTaskType[];
  const rows = await prisma.oetAttempt.findMany({
    where: { userId, status: "SCORED" },
    select: { itemId: true, taskType: true },
    distinct: ["itemId"],
  });

  // An attempt can outlive the item's presence in the pool (deactivated, or the
  // learner changed profession), so intersect with the CURRENT pool rather than
  // trusting the attempt's own taskType alone. Otherwise "12 of 15 done" can
  // print with a denominator of 15 and a numerator drawn from a wider set.
  const inPool = new Map<OetTaskType, Set<string>>();
  await Promise.all(
    taskTypes.map(async (t) => {
      const ids = await prisma.oetItem.findMany({
        where: poolWhere(t, profession),
        select: { id: true },
      });
      inPool.set(t, new Set(ids.map((i) => i.id)));
    }),
  );

  const out = Object.fromEntries(taskTypes.map((t) => [t, 0])) as Record<OetTaskType, number>;
  for (const r of rows) {
    if (inPool.get(r.taskType)?.has(r.itemId)) out[r.taskType] += 1;
  }
  return out;
}
