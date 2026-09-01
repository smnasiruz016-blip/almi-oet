/**
 * THE NEXT-EXERCISE CHAIN — how a learner walks 1 → 2 → 3 … → N without going
 * back to the library between every single exercise.
 *
 * ── WHY THIS MODULE EXISTS ──────────────────────────────────────────────────
 *
 * The library was already there: /practice/<profession>/<task> renders every
 * exercise in the learner's pool with its own Start button. What was missing was
 * the road between them. A practice run ended on a results screen whose only
 * onward link was back to the list, so reaching exercise 2 of 21 meant
 * navigating back and starting again — twenty times over. Nasir described the
 * product as having "just 1 exercise to practice" and he was describing exactly
 * this: not an empty bank, a bank with no path through it.
 *
 * ── THE ORDER IS THE ORDER THE LEARNER SAW ──────────────────────────────────
 *
 * listPool() orders by title ascending and the page numbers the rows 1..N in
 * that order. The chain walks THE SAME sequence, so "Exercise 4 of 21" on the
 * results screen names the row that is numbered 4 on the list page. A chain that
 * ordered items differently from the list would print a position that means
 * nothing.
 *
 * ── 🔴 NO NUMBER HERE IS WRITTEN DOWN ───────────────────────────────────────
 *
 * `total` is the length of the pool read from the database through poolWhere() —
 * the same filter the picker draws from — so Writing and Speaking report 15 for
 * the learner's own profession and never the 180 the bank holds across twelve.
 * `position` is an index into that same list. Neither is a literal.
 *
 * ── EXHAUSTION IS REPORTED, NOT HIDDEN ──────────────────────────────────────
 *
 * When there is nothing left, nextInChain returns null and the caller says so.
 * It does NOT wrap around silently: a learner who is quietly handed exercise 1
 * again after finishing 21 has been told the library is bigger than it is.
 * Starting over is available, but only as something the learner clicks.
 */
import type { OetProfession, OetTaskType } from "@prisma/client";
import { listPool, type ExerciseRow } from "@/lib/oet/pool";
import { OET_TASKS } from "@/lib/oet/registry";
import { PROFESSION_LIST } from "@/lib/oet/professions";

/** One hop of the chain: which exercise, and where it sits in the learner's list. */
export type ChainPick = {
  id: string;
  /** 1-based index in the FULL ordered pool — the number printed beside the row
   *  on the task page. Not an index into the remaining candidates. */
  position: number;
};

/** The rows the picker needs. Widened from ExerciseRow so the pure walk can be
 *  driven from a fixture without inventing titles and difficulties. */
export type ChainRow = Pick<ExerciseRow, "id" | "status">;

/**
 * The next exercise after a finished run.
 *
 * Preference order, from the brief: the first NOT_STARTED, then the first that
 * is not yet SCORED (i.e. something abandoned half-way), then nothing.
 *
 * 🔴 `excludeIds` IS WHAT MAKES THE WALK TERMINATE. A practice set that ended
 * without every step being scored leaves its own items IN_PROGRESS, and "first
 * not-SCORED" would hand the learner back the run they just left. Excluding the
 * items this session already served means each hop strictly consumes ground.
 *
 * `includeScored` is the explicit start-over: only the results screen's
 * "start again from the top?" button passes it, never the automatic chain.
 */
export function nextInChain(
  pool: readonly ChainRow[],
  excludeIds: readonly string[] = [],
  opts: { includeScored?: boolean } = {},
): ChainPick | null {
  const excluded = new Set(excludeIds);
  const candidates = pool
    .map((row, i) => ({ row, position: i + 1 }))
    .filter((c) => !excluded.has(c.row.id));

  const fresh = candidates.find((c) => c.row.status === "NOT_STARTED");
  if (fresh) return { id: fresh.row.id, position: fresh.position };

  const unfinished = candidates.find((c) => c.row.status !== "SCORED");
  if (unfinished) return { id: unfinished.row.id, position: unfinished.position };

  // Only reached on an explicit restart. The automatic chain stops here and the
  // screen says the library is finished.
  if (opts.includeScored && candidates.length > 0) {
    return { id: candidates[0].row.id, position: candidates[0].position };
  }
  return null;
}

/**
 * Where "Back to all N exercises" points.
 *
 * The task page lives under a profession segment. A per-profession sub-test has
 * the session's own profession to use. Listening and Reading carry `profession:
 * null` because they are common to every profession — so the link borrows the
 * learner's chosen one, which shows the identical list. With no profession
 * chosen at all there is nowhere honest to send them but the chooser.
 */
export function libraryHrefFor(
  taskType: OetTaskType,
  sessionProfession: OetProfession | null,
  userProfession: OetProfession | null,
): string {
  const profession = sessionProfession ?? userProfession;
  const slug = profession
    ? PROFESSION_LIST.find((p) => p.profession === profession)?.slug
    : undefined;
  return slug ? `/practice/${slug}/${OET_TASKS[taskType].slug}` : "/practice";
}

/** Everything the results screen needs to offer the next exercise honestly. */
export type ChainView = {
  /** Pool size, from the database. The denominator in "Exercise 4 of 21". */
  total: number;
  /** Distinct exercises in this pool the learner has been scored on. */
  doneCount: number;
  /** The next hop, with the title so the learner sees what they are agreeing to. */
  next: (ChainPick & { title: string }) | null;
  libraryHref: string;
};

/**
 * Read the learner's pool and work out the next hop. The pool comes from
 * listPool(), which is the same query the list page renders and the same
 * `poolWhere()` the picker draws from — so the chain cannot offer an exercise
 * the list does not show, and the total cannot disagree with the list's length.
 */
export async function chainView(input: {
  taskType: OetTaskType;
  /** The SESSION's profession — null for Listening/Reading. */
  profession: OetProfession | null;
  userId: string;
  /** Items the just-finished session already served. */
  excludeIds: readonly string[];
  /** The learner's stored profession, used only to address the library link. */
  userProfession: OetProfession | null;
  includeScored?: boolean;
}): Promise<ChainView> {
  const pool = await listPool(input.taskType, input.profession, input.userId);
  const pick = nextInChain(pool, input.excludeIds, {
    includeScored: input.includeScored,
  });
  const row = pick ? pool.find((r) => r.id === pick.id) : undefined;
  return {
    total: pool.length,
    doneCount: pool.filter((r) => r.status === "SCORED").length,
    next: pick && row ? { ...pick, title: row.title } : null,
    libraryHref: libraryHrefFor(input.taskType, input.profession, input.userProfession),
  };
}
