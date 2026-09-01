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

export type ExerciseRow = {
  id: string;
  title: string;
  difficulty: string;
  topicTag: string | null;
  status: ExerciseStatus;
};

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

  const attempts = await prisma.oetAttempt.findMany({
    where: { userId, itemId: { in: items.map((i) => i.id) } },
    select: { itemId: true, status: true },
  });

  // A learner may have attempted the same item more than once. SCORED wins over
  // IN_PROGRESS: "you have done this" is the more useful of the two.
  const byItem = new Map<string, ExerciseStatus>();
  for (const a of attempts) {
    const current = byItem.get(a.itemId);
    if (current === "SCORED") continue;
    byItem.set(a.itemId, a.status === "SCORED" ? "SCORED" : "IN_PROGRESS");
  }

  return items.map((i) => ({
    id: i.id,
    title: i.title,
    difficulty: String(i.difficulty),
    topicTag: i.topicTag,
    status: byItem.get(i.id) ?? "NOT_STARTED",
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
