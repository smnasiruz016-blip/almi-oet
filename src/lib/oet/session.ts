// OET's published scale and sub-test structure are cited in docs/sources/README.md.
// Session engine for practice sets and the full mock.
//
// PRACTICE_SET: a run of several items of ONE task type. We vary the difficulty
// pool (FOUNDATION/CORE/STRETCH) between items for variety — NOT a claim to be
// adaptive (OET is a fixed-form test).
//
// MOCK: the full OET in test order (Listening → Reading → Writing → Speaking).
// Each sub-test is scored independently into its own 0–500 grade. We NEVER
// compute an overall — whether OET reports one is disputed (see scale.ts), and
// either way its method is not something we will guess at; see
// overallScoreSupported(). A mock is built
// for one profession — its Writing + Speaking items come from that profession's
// bank; Listening + Reading are common.

import { Prisma } from "@prisma/client";
import type { OetDifficulty, OetProfession, OetSubTest, OetTaskType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { OET_TASKS, MOCK_PLAN } from "@/lib/oet/registry";
import { fractionToEstimate, type GradeEstimate } from "@/lib/oet/scale";
import { isPerProfession } from "@/lib/oet/types";
import { poolWhere } from "@/lib/oet/pool";
import { attemptDeadline } from "@/lib/oet/deadline";

const DIFFICULTIES: OetDifficulty[] = ["FOUNDATION", "CORE", "STRETCH"];
/** Items served in one PRACTICE_SET run of an auto-marked task type.
 *  Exported because the practice screens now SAY this number up front: a
 *  learner who is handed 3 items with no context reads 3 as the size of the
 *  library, which is how a bank of 21 looked like one test. A hard-coded 3 in
 *  the UI would be free to drift from the engine, so the UI imports this. */
export const PRACTICE_SET_STEPS = 3;

function fractionOf(a: { pointsEarned: number; pointsMax: number }): number {
  return a.pointsMax ? a.pointsEarned / a.pointsMax : 0;
}

function adaptDifficulty(current: OetDifficulty, fraction: number): OetDifficulty {
  let i = DIFFICULTIES.indexOf(current);
  if (fraction >= 0.8) i = Math.min(DIFFICULTIES.length - 1, i + 1);
  else if (fraction < 0.5) i = Math.max(0, i - 1);
  return DIFFICULTIES[i];
}

// ── FORM COHERENCE ──────────────────────────────────────────────────────────
// A full mock must be ONE form end to end. Drawing each part at random from the
// whole bank produced a "full-length" mock of 18–42 Listening questions, because
// the bank is heterogeneous: legacy practice items carry 4 gaps or 2 MCQs where a
// real form's carry 12 and 6. Multiplying the MOCK_PLAN steps was necessary and
// not sufficient — the plan asks for 2 Part A items, and two legacy items are 8
// questions, not 24.
//
// 🔴 A FORM IS A COLUMN, NOT A PREFIX ON A TITLE.
//
// This used to parse "OET Form 1 · " out of the title with a regex, and the pool
// filter below used `title: { startsWith }`. That made a rename of any of the 57
// form items a silent product change: forms would simply stop being recognised,
// every mock would fall back to the mixed bank, and no gate would go red. The
// title is for a human; `OetItem.form` is what the machine reads.
//
// Legacy items carry no form and stay active on purpose: they are good short
// practice, and retiring them would drop parts below the served floor.
const formOf = (item: { form: string | null }): string | null => item.form;

/** The objective items one full mock consumes, per task type. */
function mockObjectiveNeeds(): Map<OetTaskType, number> {
  const need = new Map<OetTaskType, number>();
  for (const t of MOCK_PLAN) {
    if (isPerProfession(OET_TASKS[t].subTest)) continue;
    need.set(t, (need.get(t) ?? 0) + 1);
  }
  return need;
}

/** Pick a form that can satisfy the WHOLE objective plan. A form missing even one
 *  Part B item cannot carry a coherent mock, and half a form is worse than none —
 *  it would silently fall back to the mixed bank this exists to prevent. */
async function chooseCompleteForm(): Promise<string | null> {
  const need = mockObjectiveNeeds();
  const rows = await prisma.oetItem.findMany({
    where: { active: true, profession: null, taskType: { in: [...need.keys()] } },
    select: { form: true, taskType: true },
  });
  const counts = new Map<string, Map<OetTaskType, number>>();
  for (const r of rows) {
    const f = formOf(r);
    if (!f) continue;
    const m = counts.get(f) ?? new Map<OetTaskType, number>();
    m.set(r.taskType, (m.get(r.taskType) ?? 0) + 1);
    counts.set(f, m);
  }
  const complete = [...counts.entries()]
    .filter(([, m]) => [...need.entries()].every(([t, n]) => (m.get(t) ?? 0) >= n))
    .map(([f]) => f);
  if (complete.length === 0) return null;
  return complete[Math.floor(Math.random() * complete.length)];
}

/** Pick an item for a task type, honouring the profession axis: Writing/Speaking
 *  draw from the chosen profession's bank; Listening/Reading are common (null).
 *  When `form` is set the pick is CONFINED to that form — no fallback to the
 *  wider bank, because a silent fallback is exactly the dilution this prevents. */
async function pickItemId(
  taskType: OetTaskType,
  difficulty: OetDifficulty,
  profession: OetProfession | null,
  excludeIds: string[] = [],
  form?: string | null,
): Promise<string | null> {
  const subTest = OET_TASKS[taskType].subTest;
  // 🔴 THE POOL IS DEFINED ONCE, IN pool.ts, AND SHARED WITH THE UI.
  //
  // This used to build `{ taskType, active: true, ...professionFilter }` inline.
  // The practice screens now print how many exercises a learner has, and a count
  // computed from a SECOND copy of this filter would be free to drift from the
  // set actually drawn from — advertising 21 while handing out of a pool of 18,
  // silently. Same function, one definition, no drift possible.
  const base = poolWhere(taskType, profession);
  const notIn = excludeIds.length ? { id: { notIn: excludeIds } } : {};
  // Form coherence applies to the objective sub-tests only; Writing and Speaking
  // are per-profession and belong to no form.
  const formFilter = form && !isPerProfession(subTest) ? { form } : {};

  // Prefer the difficulty pool, then any unused item, then anything at all — all
  // three within the form when one is set.
  let pool = await prisma.oetItem.findMany({
    where: { ...base, difficulty, ...formFilter, ...notIn },
    select: { id: true },
  });
  if (pool.length === 0) {
    pool = await prisma.oetItem.findMany({
      where: { ...base, ...formFilter, ...notIn },
      select: { id: true },
    });
  }
  if (pool.length === 0 && !form) {
    pool = await prisma.oetItem.findMany({
      where: base,
      select: { id: true },
    });
  }
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)].id;
}

async function pickPracticeStart(
  userId: string,
  taskType: OetTaskType,
): Promise<OetDifficulty> {
  const recent = await prisma.oetAttempt.findMany({
    where: { userId, taskType, status: "SCORED" },
    orderBy: { submittedAt: "desc" },
    take: 5,
    select: { pointsEarned: true, pointsMax: true },
  });
  if (recent.length === 0) return "CORE";
  const fr = recent.reduce((s, a) => s + fractionOf(a), 0) / recent.length;
  if (fr >= 0.8) return "STRETCH";
  if (fr < 0.5) return "FOUNDATION";
  return "CORE";
}

async function createStepAttempt(params: {
  userId: string;
  sessionId: string;
  step: number;
  taskType: OetTaskType;
  difficulty: OetDifficulty;
  profession: OetProfession | null;
  excludeIds?: string[];
  form?: string | null;
  /** A specific exercise the learner chose. Already validated against their pool
   *  by startSession; when absent the picker chooses at random as before. */
  itemId?: string | null;
}): Promise<boolean> {
  const itemId =
    params.itemId ??
    (await pickItemId(
      params.taskType,
      params.difficulty,
      params.profession,
      params.excludeIds ?? [],
      params.form,
    ));
  if (!itemId) return false;
  // 🔴 THE CLOCK STARTS ON THE SERVER, NOT IN THE BROWSER. Read from the item so
  // a per-item limit is honoured, and never from anything the client sent — a
  // deadline a candidate can choose is not a deadline. Null for the task types
  // whose screens show no overall countdown; see src/lib/oet/deadline.ts.
  const item = await prisma.oetItem.findUnique({
    where: { id: itemId },
    select: { timeLimitSeconds: true },
  });
  await prisma.oetAttempt.create({
    data: {
      userId: params.userId,
      itemId,
      subTest: OET_TASKS[params.taskType].subTest,
      taskType: params.taskType,
      status: "IN_PROGRESS",
      sessionId: params.sessionId,
      sessionStep: params.step,
      deadlineAt: attemptDeadline(params.taskType, item?.timeLimitSeconds ?? 0),
    },
  });
  return true;
}

export async function startSession(input: {
  userId: string;
  mode: "PRACTICE_SET" | "MOCK";
  taskType?: OetTaskType;
  profession?: OetProfession | null;
  /** Start on a SPECIFIC exercise the learner chose from the browsable list.
   *  Ignored for MOCK, where the form decides. Validated against the learner's
   *  own pool before use — a chosen id is user input, and accepting it unchecked
   *  would let anyone open any item in the bank regardless of profession or
   *  active flag. */
  itemId?: string | null;
}): Promise<string | null> {
  if (input.mode === "MOCK") {
    const profession = input.profession ?? null;
    // One form, end to end. If no form is complete we refuse to start rather than
    // assemble a mixed-bank mock and call it full-length.
    const form = await chooseCompleteForm();
    if (!form) return null;
    const session = await prisma.oetSession.create({
      data: {
        userId: input.userId,
        mode: "MOCK",
        profession,
        targetCount: MOCK_PLAN.length,
        currentDifficulty: "CORE",
        plan: MOCK_PLAN as unknown as Prisma.InputJsonValue,
      },
    });
    const ok = await createStepAttempt({
      userId: input.userId,
      sessionId: session.id,
      step: 0,
      taskType: MOCK_PLAN[0],
      difficulty: "CORE",
      profession,
      form,
    });
    if (!ok) {
      await prisma.oetSession.delete({ where: { id: session.id } });
      return null;
    }
    return session.id;
  }

  const taskType = input.taskType;
  if (!taskType) return null;
  const def = OET_TASKS[taskType];
  const profession = isPerProfession(def.subTest) ? (input.profession ?? null) : null;
  const targetCount = def.scoringMode === "DETERMINISTIC" ? PRACTICE_SET_STEPS : 1;

  // A chosen exercise must be IN THIS LEARNER'S POOL. poolWhere is the same
  // filter the picker draws from, so "choose your own" can never reach an item
  // the random path would not have offered — a deactivated item, or another
  // profession's Writing task.
  let chosenId: string | null = null;
  if (input.itemId) {
    const found = await prisma.oetItem.findFirst({
      where: { ...poolWhere(taskType, profession), id: input.itemId },
      select: { id: true },
    });
    if (!found) return null;
    chosenId = found.id;
  }
  const startDifficulty = await pickPracticeStart(input.userId, taskType);
  const session = await prisma.oetSession.create({
    data: {
      userId: input.userId,
      mode: "PRACTICE_SET",
      subTest: def.subTest,
      profession,
      targetCount,
      currentDifficulty: startDifficulty,
    },
  });
  const ok = await createStepAttempt({
    userId: input.userId,
    sessionId: session.id,
    step: 0,
    taskType,
    difficulty: startDifficulty,
    profession,
    itemId: chosenId,
  });
  if (!ok) {
    await prisma.oetSession.delete({ where: { id: session.id } });
    return null;
  }
  return session.id;
}

export async function getSessionView(sessionId: string, userId: string) {
  return prisma.oetSession.findFirst({
    where: { id: sessionId, userId },
    include: {
      attempts: { include: { item: true }, orderBy: { sessionStep: "asc" } },
    },
  });
}

export async function advanceSession(sessionId: string, userId: string): Promise<void> {
  const session = await prisma.oetSession.findFirst({
    where: { id: sessionId, userId },
    include: { attempts: true },
  });
  if (!session || session.status === "COMPLETED") return;

  const current = session.attempts.find((a) => a.sessionStep === session.currentStep);
  if (!current || current.status !== "SCORED") return; // can't advance until scored

  const nextStep = session.currentStep + 1;
  if (nextStep >= session.targetCount) {
    await prisma.oetSession.update({
      where: { id: session.id },
      data: { status: "COMPLETED", completedAt: new Date() },
    });
    return;
  }

  let nextTask: OetTaskType;
  let nextDifficulty: OetDifficulty;
  // A mock stays on the form it started with. The form is derived from step 0's
  // item title rather than stored on the session — it is already recorded there,
  // and a second copy is a second thing that can disagree.
  let form: string | null = null;
  if (session.mode === "MOCK") {
    const plan = (session.plan as OetTaskType[] | null) ?? MOCK_PLAN;
    nextTask = plan[nextStep];
    nextDifficulty = "CORE";
    const first = session.attempts.find((a) => a.sessionStep === 0);
    if (first) {
      const item = await prisma.oetItem.findUnique({
        where: { id: first.itemId },
        select: { form: true },
      });
      form = item ? formOf(item) : null;
    }
  } else {
    const t = session.subTest ? OET_TASKS[current.taskType].taskType : null;
    if (!t) return;
    nextTask = current.taskType;
    nextDifficulty = adaptDifficulty(session.currentDifficulty, fractionOf(current));
  }

  const ok = await createStepAttempt({
    userId,
    sessionId: session.id,
    step: nextStep,
    taskType: nextTask,
    difficulty: nextDifficulty,
    profession: session.profession,
    excludeIds: session.attempts.map((a) => a.itemId),
    form,
  });
  await prisma.oetSession.update({
    where: { id: session.id },
    data: {
      currentStep: nextStep,
      currentDifficulty: nextDifficulty,
      // If no item exists for the next step, end the run gracefully.
      ...(ok ? {} : { status: "COMPLETED", completedAt: new Date() }),
    },
  });
}

/** Aggregate independent per-sub-test grade estimates from a session's scored
 *  attempts. OET scores each sub-test on its own 0–500 scale; we average the
 *  performance fractions within a sub-test, then map to one honest estimate.
 *  No composite/overall is ever produced. */
export function aggregateSession(
  attempts: { subTest: OetSubTest; status: string; pointsEarned: number; pointsMax: number }[],
): Record<OetSubTest, GradeEstimate | null> {
  const fractionsBySubTest: Partial<Record<OetSubTest, number[]>> = {};
  for (const a of attempts) {
    if (a.status !== "SCORED") continue;
    (fractionsBySubTest[a.subTest] ??= []).push(fractionOf(a));
  }
  const out: Record<OetSubTest, GradeEstimate | null> = {
    LISTENING: null,
    READING: null,
    WRITING: null,
    SPEAKING: null,
  };
  for (const subTest of Object.keys(fractionsBySubTest) as OetSubTest[]) {
    const fractions = fractionsBySubTest[subTest]!;
    const avg = fractions.reduce((s, f) => s + f, 0) / fractions.length;
    out[subTest] = fractionToEstimate(avg);
  }
  return out;
}
