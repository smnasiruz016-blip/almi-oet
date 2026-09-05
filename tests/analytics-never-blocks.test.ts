/**
 * @vitest-environment node
 *
 * gate:analytics-never-blocks — ANALYTICS FAILING MUST NOT COST A SUBMISSION.
 *
 * `track()` is called on the submit path three times: paywall_blocked,
 * trial_cap_hit, and exercise_submitted — the last of them AFTER the attempt is
 * written SCORED but BEFORE the response is returned.
 *
 * 🔴 SO A THROWING SINK SITS DIRECTLY BETWEEN A LEARNER AND THEIR RESULT. If
 * `track()` propagated, an analytics outage would turn a completed, scored,
 * already-persisted attempt into a 500 — the learner would have done the work,
 * the row would say SCORED, and the screen would say the submission failed.
 *
 * track.ts says it cannot throw. That claim is worth exactly nothing on its own:
 * this product has now twice shipped a comment describing a safety property that
 * nothing enforced — the Speaking prompt that said "two minutes" through three
 * fixes to the clock, and the cap ordering that was protected by a comment until
 * #65 replaced it with a tripwire.
 *
 * So the sink is made to throw ON PURPOSE, and the route must still answer 200
 * with a complete gradeEstimate.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import type { OetTaskType } from "@prisma/client";

const FUTURE = new Date(Date.now() + 30 * 864e5);
let USER = {
  id: "u1",
  email: "learner@example.com",
  subscriptionStatus: "active" as string | null,
  subscriptionCurrentPeriodEnd: FUTURE as Date | null,
  compProUntil: null as Date | null,
  emailVerified: new Date() as Date | null,
};
const TASK_TYPE: OetTaskType = "WRITING_LETTER";
let updated: Record<string, unknown> | null = null;

vi.mock("@/lib/auth", () => ({ getCurrentUser: async () => USER }));

// A grader that succeeds, so the ONLY thing that can break the response is the
// analytics call after it.
vi.mock("@/lib/oet/registry", async (orig) => {
  const real = (await orig()) as Record<string, unknown>;
  return {
    ...real,
    OET_HANDLERS: {
      WRITING_LETTER: {
        mode: "AI",
        run: async () => ({
          fraction: 0.8,
          pointsEarned: 8,
          pointsMax: 10,
          feedback: { summary: "ok" },
          telemetry: { aiModel: "test", costCents: 0, latencyMs: 1 },
        }),
      },
    },
  };
});

vi.mock("@/lib/prisma", () => ({
  prisma: {
    oetAttempt: {
      findFirst: async () => ({
        id: "att-1",
        userId: "u1",
        taskType: TASK_TYPE,
        subTest: "WRITING",
        status: "IN_PROGRESS",
        deadlineAt: null,
        item: {
          id: "it-1",
          title: "An item",
          taskType: TASK_TYPE,
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
      count: async () => 0,
      update: async ({ data }: { data: Record<string, unknown> }) => {
        updated = data;
        return {};
      },
    },
  },
}));

const { POST } = await import("@/app/api/oet/submit/route");
const { __setAnalyticsSink } = await import("@/lib/analytics/track");

function submit(): Promise<Response> {
  return POST(
    new Request("https://x/api/oet/submit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        attemptId: "att-1",
        response: {
          text: "A letter with real substance in it, written at length so the substance gate passes and the request reaches the grader and then the analytics call that follows it.",
        },
        timeSpentSeconds: 60,
      }),
    }) as never,
  ) as Promise<Response>;
}

let restore: ((line: string) => void) | null = null;

beforeEach(() => {
  updated = null;
});
afterEach(() => {
  if (restore) __setAnalyticsSink(restore);
  restore = null;
});

describe("a throwing analytics sink cannot cost a learner their result", () => {
  it("the control: with a working sink, a submission is scored and returns 200", async () => {
    // Without this, a route that 500s for an unrelated reason would make the
    // test below pass while proving nothing.
    const res = await submit();
    expect(res.status).toBe(200);
    const body = (await res.json()) as { ok: boolean; gradeEstimate?: unknown };
    expect(body.ok).toBe(true);
    expect(body.gradeEstimate).toBeTruthy();
    expect(updated, "the attempt was not written").not.toBeNull();
  });

  it("🔴 the sink throws on EVERY event — the response is still 200 with a full estimate", async () => {
    restore = __setAnalyticsSink(() => {
      throw new Error("ANALYTICS SINK DOWN");
    });

    const res = await submit();

    expect(res.status, "an analytics failure became a failed submission").toBe(200);
    const body = (await res.json()) as {
      ok: boolean;
      gradeEstimate?: { lo: number; hi: number; grade: string | null };
    };
    expect(body.ok).toBe(true);
    // Not merely "a 200" — the learner's actual result must be complete.
    expect(body.gradeEstimate, "the estimate was lost").toBeTruthy();
    expect(typeof body.gradeEstimate!.lo).toBe("number");
    expect(typeof body.gradeEstimate!.hi).toBe("number");
    // And the attempt must still have been written SCORED.
    expect(updated?.status, "the attempt was not scored").toBe("SCORED");
  });

  it("🔴 and it does not block: track() returns void, never a promise to await", async () => {
    // A sink that hangs would be as damaging as one that throws, if the caller
    // awaited it. track() is typed void and the call sites do not await — this
    // pins the signature so a later `async` cannot creep in unnoticed.
    const { track } = await import("@/lib/analytics/track");
    restore = __setAnalyticsSink(() => {
      throw new Error("ANALYTICS SINK DOWN");
    });
    const returned = track("landing_view", { path: "/" }) as unknown;
    expect(returned, "track() returned something awaitable").toBeUndefined();
  });
});
