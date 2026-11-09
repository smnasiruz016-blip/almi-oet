/**
 * @vitest-environment node
 *
 * RR-399 A3 — THE TASTE'S ONE AI EVALUATION IS ATOMIC.
 *
 * tasteMayScore() counts SCORED attempts. Two submits at the same moment both
 * saw "0 scored" and both reached the model: two free Writing evaluations for
 * one taste. The route now RESERVES the taste's AI use (FreeAiUse, unique
 * userId + kind) as the last step before the first paid call.
 *
 * This drives the REAL route with a fake database that keeps the unique rule,
 * and counts how many times the grader runs. No database, no AI.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import type { OetTaskType } from "@prisma/client";

const HOUR = 3_600_000;
const TASTE_USER = {
  id: "taste-1",
  email: "learner@example.com",
  createdAt: new Date(Date.now() - HOUR),
  subscriptionStatus: null as string | null,
  stripeSubscriptionId: null as string | null,
  subscriptionCurrentPeriodEnd: null as Date | null,
  compProUntil: null as Date | null,
  emailVerified: new Date() as Date | null,
};
const PAID_USER = {
  ...TASTE_USER,
  id: "paid-1",
  createdAt: new Date(Date.now() - 90 * 24 * HOUR),
  subscriptionStatus: "active",
  stripeSubscriptionId: "sub_a",
  subscriptionCurrentPeriodEnd: new Date(Date.now() + 20 * 24 * HOUR),
};
let USER: typeof TASTE_USER = TASTE_USER;
const TASK_TYPE: OetTaskType = "WRITING_LETTER";

let graderRuns = 0;
let graderFails = false;
let claimCalls = 0;
let tableMissing = false;
const rows = new Set<string>();

vi.mock("@/lib/auth", () => ({ getCurrentUser: async () => USER }));
vi.mock("@/lib/billing/free-ai-budget", async (orig) => ({
  ...((await orig()) as Record<string, unknown>),
  freeAiAllowedToday: async () => true,
}));

vi.mock("@/lib/oet/registry", async (orig) => {
  const real = (await orig()) as Record<string, unknown>;
  return {
    ...real,
    OET_HANDLERS: {
      WRITING_LETTER: {
        mode: "AI",
        run: async () => {
          graderRuns++;
          await new Promise((r) => setTimeout(r, 5));
          if (graderFails) throw new Error("model down");
          return {
            fraction: 0.8,
            pointsEarned: 8,
            pointsMax: 10,
            feedback: { summary: "ok" },
            telemetry: { aiModel: "test", costCents: 0, latencyMs: 1 },
          };
        },
      },
    },
  };
});

vi.mock("@/lib/prisma", () => ({
  prisma: {
    oetAttempt: {
      findFirst: async () => ({
        id: "att-1",
        userId: USER.id,
        sessionId: "sess-1",
        taskType: TASK_TYPE,
        subTest: "WRITING",
        status: "IN_PROGRESS",
        deadlineAt: null,
        item: {
          id: "it-1",
          title: "An item",
          taskType: TASK_TYPE,
          profession: "NURSING",
          slug: "an-item",
          payload: {
            caseNotes: "Patient seen today; stable; for discharge.",
            recipient: "The community nursing team",
            taskInstruction: "Write a discharge letter.",
            letterType: "discharge",
            wordMin: 180,
            wordMax: 200,
          },
        },
      }),
      count: async () => 0, // the race: both requests see "0 scored"
      update: async () => ({}),
    },
    oetSession: { findFirst: async () => ({ mode: "PRACTICE_SET" }) },
    /* the database's rule: (userId, kind) is unique; a second insert fails with Prisma's P2002 */
    freeAiUse: {
      create: async ({ data }: { data: { userId: string; kind: string } }) => {
        claimCalls++;
        await new Promise((r) => setTimeout(r, Math.random() * 3));
        if (tableMissing) throw Object.assign(new Error('relation "FreeAiUse" does not exist'), { code: "P2021" });
        const k = `${data.userId}|${data.kind}`;
        if (rows.has(k)) throw Object.assign(new Error("Unique constraint failed"), { code: "P2002" });
        rows.add(k);
        return data;
      },
      deleteMany: async ({ where }: { where: { userId: string; kind: string } }) => {
        rows.delete(`${where.userId}|${where.kind}`);
        return { count: 1 };
      },
    },
  },
}));

const { POST } = await import("@/app/api/oet/submit/route");

function submit(): Promise<Response> {
  return POST(
    new Request("https://x/api/oet/submit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        attemptId: "att-1",
        response: {
          text: "A letter with real substance in it, written at length so the substance gate passes and the request reaches the grader, which is what this test counts.",
        },
        timeSpentSeconds: 60,
      }),
    }) as never,
  ) as Promise<Response>;
}

beforeEach(() => {
  USER = TASTE_USER;
  graderRuns = 0;
  graderFails = false;
  claimCalls = 0;
  tableMissing = false;
  rows.clear();
});

describe("RR-399 A3: the taste's one AI-scored Writing cannot be given twice", () => {
  it("🔴 two submits at the same moment: exactly one is scored, the other gets the taste-used 402", async () => {
    const res = await Promise.all([submit(), submit()]);
    expect(res.map((r) => r.status).sort()).toEqual([200, 402]);
    expect(graderRuns, "the grader ran for both requests").toBe(1);
  });

  it("a failed AI scoring gives the taste back, so the learner can try again", async () => {
    graderFails = true;
    expect((await submit()).status).toBe(500);
    expect(rows.size, "the reservation was kept after a failed scoring").toBe(0);
    graderFails = false;
    expect((await submit()).status).toBe(200);
  });

  it("before the migration (no FreeAiUse table) the count decision stands and nothing breaks", async () => {
    tableMissing = true;
    expect((await submit()).status).toBe(200);
  });

  it("the control: a paying learner never touches the taste's reservation", async () => {
    USER = PAID_USER as typeof TASTE_USER;
    const res = await Promise.all([submit(), submit()]);
    expect(res.map((r) => r.status)).toEqual([200, 200]);
    expect(claimCalls).toBe(0);
  });
});
