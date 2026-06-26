// Session engine for practice sets and the full mock.
//
// PRACTICE_SET: a run of several items of ONE task type. We vary the difficulty
// pool (FOUNDATION/CORE/STRETCH) between items for variety — NOT a claim to be
// adaptive (OET is a fixed-form test).
//
// MOCK: the full OET in test order (Listening → Reading → Writing → Speaking).
// Each sub-test is scored independently into its own 0–500 grade. We NEVER
// compute a composite/overall (OET reports per sub-test only). A mock is built
// for one profession — its Writing + Speaking items come from that profession's
// bank; Listening + Reading are common.

import { Prisma } from "@prisma/client";
import type { OetDifficulty, OetProfession, OetSubTest, OetTaskType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { OET_TASKS, MOCK_PLAN } from "@/lib/oet/registry";
import { fractionToEstimate, type GradeEstimate } from "@/lib/oet/scale";
import { isPerProfession } from "@/lib/oet/types";

const DIFFICULTIES: OetDifficulty[] = ["FOUNDATION", "CORE", "STRETCH"];
const PRACTICE_SET_STEPS = 3;

function fractionOf(a: { pointsEarned: number; pointsMax: number }): number {
  return a.pointsMax ? a.pointsEarned / a.pointsMax : 0;
}

function adaptDifficulty(current: OetDifficulty, fraction: number): OetDifficulty {
  let i = DIFFICULTIES.indexOf(current);
  if (fraction >= 0.8) i = Math.min(DIFFICULTIES.length - 1, i + 1);
  else if (fraction < 0.5) i = Math.max(0, i - 1);
  return DIFFICULTIES[i];
}

/** Pick an item for a task type, honouring the profession axis: Writing/Speaking
 *  draw from the chosen profession's bank; Listening/Reading are common (null). */
async function pickItemId(
  taskType: OetTaskType,
  difficulty: OetDifficulty,
  profession: OetProfession | null,
  excludeIds: string[] = [],
): Promise<string | null> {
  const subTest = OET_TASKS[taskType].subTest;
  const professionFilter = isPerProfession(subTest) ? { profession } : { profession: null };
  const notIn = excludeIds.length ? { id: { notIn: excludeIds } } : {};

  // Prefer the difficulty pool, then any unused item, then anything at all.
  let pool = await prisma.oetItem.findMany({
    where: { taskType, active: true, difficulty, ...professionFilter, ...notIn },
    select: { id: true },
  });
  if (pool.length === 0) {
    pool = await prisma.oetItem.findMany({
      where: { taskType, active: true, ...professionFilter, ...notIn },
      select: { id: true },
    });
  }
  if (pool.length === 0) {
    pool = await prisma.oetItem.findMany({
      where: { taskType, active: true, ...professionFilter },
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
}): Promise<boolean> {
  const itemId = await pickItemId(
    params.taskType,
    params.difficulty,
    params.profession,
    params.excludeIds ?? [],
  );
  if (!itemId) return false;
  await prisma.oetAttempt.create({
    data: {
      userId: params.userId,
      itemId,
      subTest: OET_TASKS[params.taskType].subTest,
      taskType: params.taskType,
      status: "IN_PROGRESS",
      sessionId: params.sessionId,
      sessionStep: params.step,
    },
  });
  return true;
}

export async function startSession(input: {
  userId: string;
  mode: "PRACTICE_SET" | "MOCK";
  taskType?: OetTaskType;
  profession?: OetProfession | null;
}): Promise<string | null> {
  if (input.mode === "MOCK") {
    const profession = input.profession ?? null;
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
  if (session.mode === "MOCK") {
    const plan = (session.plan as OetTaskType[] | null) ?? MOCK_PLAN;
    nextTask = plan[nextStep];
    nextDifficulty = "CORE";
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
