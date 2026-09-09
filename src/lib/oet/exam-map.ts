/**
 * WHAT SHAPE IS THIS TEST, AND WHERE IN IT IS THE STUDENT?
 *
 * ── GAP-048 · THE MOCK NEVER TOLD ANYONE WHAT THE 22 STEPS WERE ─────────────
 *
 * The owner opened a real mock, saw "Page 1 of 22 · Section: Listening — Part A"
 * and a strip of 22 bare numbers, and asked where Reading, Writing and Speaking
 * were. He built this product. If the map is not obvious to him it is not
 * obvious to anyone.
 *
 * The rail could not have shown it: it was handed `pageNumber` and `pageCount`
 * and nothing else, so every square it drew was an integer with no idea what
 * task sat behind it.
 *
 * ── 🔴 THE TASK TYPES COME FROM THE SESSION'S PLAN, NEVER FROM THE INDEX ────
 *
 * A map derived by counting — "steps 1 to 10 are Listening because that is what
 * MOCK_PLAN looked like when I wrote this" — is a second copy of the plan that
 * is free to drift from the one the session is actually walking. `planOf` reads
 * the plan the session stored when it was created, which is the same array
 * advanceSession walks to choose the next step.
 *
 * `planOf` is also what session.ts uses, so there is exactly one answer to "what
 * plan is this session on" and the rail cannot show a map the engine is not
 * following.
 */
import type { OetSubTest, OetTaskType } from "@prisma/client";
import { MOCK_PLAN, OET_TASKS } from "@/lib/oet/registry";
import { SUBTEST_LABEL } from "@/lib/oet/types";

/**
 * The step plan this session is walking, or null when it has none.
 *
 * A MOCK stores MOCK_PLAN on the row at creation. The `?? MOCK_PLAN` fallback
 * covers a mock created before the column carried it — the same fallback
 * advanceSession has always applied, which is why both now call this rather than
 * each writing it out.
 *
 * A PRACTICE_SET has no plan and gets null: it is N items of ONE task type, so
 * a four-group map would be an invention.
 */
export function planOf(
  session: { mode?: unknown; plan?: unknown } | null | undefined,
): OetTaskType[] | null {
  if (!session || session.mode !== "MOCK") return null;
  const stored = session.plan as OetTaskType[] | null | undefined;
  return Array.isArray(stored) && stored.length > 0 ? stored : MOCK_PLAN;
}

export type ExamGroup = {
  subTest: OetSubTest;
  /** "Listening" — the same label the rest of the product uses. */
  label: string;
  /** "L" — for the 430px strip, where a word does not fit. */
  letter: string;
  /** 1-based, inclusive, so it can be read straight out as "11–19". */
  from: number;
  to: number;
  /** How many steps this section takes. `to - from + 1`, stated rather than
   *  left for the reader to subtract. */
  count: number;
};

/**
 * Contiguous runs of one sub-test, in plan order.
 *
 * Runs, not a group-by: if a plan ever interleaved sub-tests this returns the
 * interleaving rather than pretending the test is tidier than it is. Today's
 * MOCK_PLAN produces exactly four — Listening 1-10, Reading 11-19, Writing 20,
 * Speaking 21-22 — and that is measured from the plan, never asserted here.
 */
export function examMap(plan: OetTaskType[]): ExamGroup[] {
  const groups: ExamGroup[] = [];
  plan.forEach((taskType, i) => {
    const subTest = OET_TASKS[taskType].subTest;
    const last = groups[groups.length - 1];
    if (last && last.subTest === subTest) {
      last.to = i + 1;
      last.count = last.to - last.from + 1;
      return;
    }
    groups.push({
      subTest,
      label: SUBTEST_LABEL[subTest],
      letter: SUBTEST_LABEL[subTest].charAt(0),
      from: i + 1,
      to: i + 1,
      count: 1,
    });
  });
  return groups;
}

/** Which group a 1-based page sits in, or -1. Used to mark the current one. */
export function groupIndexOfPage(groups: ExamGroup[], page: number): number {
  return groups.findIndex((g) => page >= g.from && page <= g.to);
}
