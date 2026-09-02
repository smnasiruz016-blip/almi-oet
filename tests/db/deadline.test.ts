/**
 * THE TIMER THAT F5 USED TO RESET.
 *
 * `OetAttempt` had no deadline column, so the countdown lived entirely in
 * OetComposer and restarted on every mount. A candidate who pressed F5 got a
 * fresh fifteen minutes, and Reading Part A — the sealed section PR #19 built —
 * was sealed only in the markup.
 *
 * These tests drive the REAL POST /api/oet/submit against a throwaway PostgreSQL
 * (scripts/measure/blank-submit.mts boots it). Nothing is mocked except the
 * signed-in user and the paid-model boundary, which is never reached here.
 *
 * ── WHAT IS ASSERTED ────────────────────────────────────────────────────────
 *
 *   · a Reading attempt is created WITH a server deadline, in the future
 *   · submitting after that deadline is REFUSED, and the attempt is not consumed
 *   · submitting before it still works — without this the refusal could be
 *     passing because submission is broken outright
 *   · an attempt with deadlineAt = NULL is never refused, which is every attempt
 *     that existed before the column and every task type with no on-screen clock
 *
 * ── HOW IT WAS SEEN RED ─────────────────────────────────────────────────────
 *
 * The `isPastDeadline` block was commented out of the submit route. The expired
 * submission was accepted (HTTP 200) and the attempt went to SCORED; both the
 * status assertion and the refusal assertion failed. Restored afterwards; the
 * output is in the PR body.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

let CURRENT_USER: Record<string, unknown> | null = null;
vi.mock("@/lib/auth", () => ({
  getCurrentUser: async () => CURRENT_USER,
  requireUser: async () => CURRENT_USER,
}));

const { prisma } = await import("@/lib/prisma");
const { POST } = await import("@/app/api/oet/submit/route");
const { GEN_ITEMS } = await import("../../scripts/seed/gen/index");
const { attemptLimitSeconds, attemptDeadline, isPastDeadline, secondsRemaining } = await import(
  "@/lib/oet/deadline"
);
const { TIMING } = await import("@/lib/oet/exam-shape");

let readingItemId = "";
let listeningItemId = "";
let userId = "";

beforeAll(async () => {
  const seeds = GEN_ITEMS as Record<string, unknown>[];
  const reading = seeds.find((i) => i.taskType === "READING_PART_A");
  const listening = seeds.find((i) => i.taskType === "LISTENING_PART_B");
  if (!reading || !listening) throw new Error("seed source is missing an item to test with");
  readingItemId = (await prisma.oetItem.create({ data: reading as never })).id;
  listeningItemId = (await prisma.oetItem.create({ data: listening as never })).id;

  const user = await prisma.user.create({
    data: {
      email: `deadline-${Date.now()}@almioet.invalid`,
      passwordHash: "not-used-getCurrentUser-is-stubbed",
      emailVerified: new Date(),
      subscriptionStatus: "active",
      subscriptionCurrentPeriodEnd: new Date(Date.now() + 30 * 86_400_000),
      targetProfession: "NURSING",
    },
  });
  userId = user.id;
  CURRENT_USER = user as unknown as Record<string, unknown>;
});

afterAll(async () => {
  await prisma.$disconnect();
});

async function makeAttempt(itemId: string, taskType: string, subTest: string, deadlineAt: Date | null) {
  return prisma.oetAttempt.create({
    data: {
      userId,
      itemId,
      subTest: subTest as never,
      taskType: taskType as never,
      status: "IN_PROGRESS",
      deadlineAt,
    },
  });
}

async function submit(attemptId: string) {
  const res = await POST(
    new Request("http://localhost/api/oet/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ attemptId, response: { answers: {} }, timeSpentSeconds: 1 }),
    }),
  );
  const body = (await res.json()) as Record<string, unknown>;
  const after = await prisma.oetAttempt.findUnique({ where: { id: attemptId } });
  return { status: res.status, body, attemptStatus: after?.status };
}

describe("the rule itself", () => {
  it("gives Reading a limit and everything else none — the population is not empty", () => {
    // 🔴 The command said `deadlineAt = now + timeLimitSeconds`. Measured: every
    // seeded Reading item carries timeLimitSeconds 0, so that would have expired
    // every Reading attempt on creation. The limit comes from TIMING instead.
    expect(attemptLimitSeconds("READING_PART_A", 0)).toBe(TIMING.readingPartASeconds);
    expect(attemptLimitSeconds("READING_PART_B", 0)).toBe(TIMING.readingPartsBandCSeconds);
    expect(attemptLimitSeconds("READING_PART_C", 0)).toBe(TIMING.readingPartsBandCSeconds);
    expect(attemptLimitSeconds("LISTENING_PART_A", 0)).toBeNull();
    expect(attemptLimitSeconds("WRITING_LETTER", 2700)).toBeNull();
    expect(attemptLimitSeconds("SPEAKING_ROLEPLAY", 0)).toBeNull();
    // An item that sets its own limit is honoured.
    expect(attemptLimitSeconds("READING_PART_A", 60)).toBe(60);
  });

  it("a null deadline never expires, and a past one does", () => {
    expect(isPastDeadline(null)).toBe(false);
    expect(isPastDeadline(undefined)).toBe(false);
    expect(isPastDeadline(new Date(Date.now() + 60_000))).toBe(false);
    expect(isPastDeadline(new Date(Date.now() - 1))).toBe(true);
  });

  it("remaining time counts DOWN from the deadline, so a reload cannot add any", () => {
    const now = new Date("2026-09-02T10:00:00Z");
    const deadline = attemptDeadline("READING_PART_A", 0, now)!;
    expect(secondsRemaining(deadline, now)).toBe(TIMING.readingPartASeconds);
    // Five minutes later — a reload at this instant sees LESS, not a fresh clock.
    const later = new Date(now.getTime() + 5 * 60_000);
    expect(secondsRemaining(deadline, later)).toBe(TIMING.readingPartASeconds - 300);
    expect(secondsRemaining(deadline, new Date(deadline.getTime() + 1))).toBe(0);
  });
});

describe("the submit route", () => {
  it("CONTROL: an attempt inside its deadline is still accepted", async () => {
    const a = await makeAttempt(readingItemId, "READING_PART_A", "READING", new Date(Date.now() + 600_000));
    const r = await submit(a.id);
    expect(r.status).toBe(200);
    expect(r.attemptStatus).toBe("SCORED");
  });

  it("🔴 refuses an attempt whose deadline has passed", async () => {
    const a = await makeAttempt(readingItemId, "READING_PART_A", "READING", new Date(Date.now() - 1000));
    const r = await submit(a.id);
    expect(r.status).toBe(422);
    expect(r.body.reason).toBe("PAST_DEADLINE");
  });

  it("and does NOT consume the attempt when it refuses", async () => {
    const a = await makeAttempt(readingItemId, "READING_PART_A", "READING", new Date(Date.now() - 1000));
    const r = await submit(a.id);
    expect(r.attemptStatus).toBe("IN_PROGRESS");
  });

  it("never refuses an attempt with no server deadline", async () => {
    // Every attempt created before this column existed carries NULL, and so does
    // every task type whose screen shows no overall clock. They behave exactly
    // as they did before.
    const a = await makeAttempt(listeningItemId, "LISTENING_PART_B", "LISTENING", null);
    const r = await submit(a.id);
    expect(r.status).toBe(200);
    expect(r.attemptStatus).toBe("SCORED");
  });
});
