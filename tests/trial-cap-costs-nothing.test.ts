/**
 * @vitest-environment node
 *
 * gate:trial-cap — A CAPPED TRIAL REQUEST MUST COST NOTHING.
 *
 * ── WHY THIS IS THE MOST IMPORTANT TEST IN SECTION F ────────────────────────
 *
 * The trial is seven days with a card on file and no charge. Its whole purpose
 * is to let somebody try the product without buying it — and the AI cap
 * (TRIAL_AI_LIMITS: 2 Writing, 2 Speaking) is what stops those seven days
 * becoming an unmetered Sonnet and Whisper bill.
 *
 * 🔴 A CAP THAT BLOCKS THE REQUEST AFTER THE API CALL IS NOT A CAP. The money is
 * already gone by then. So it is not enough to prove that the third submission
 * is refused; it has to be proved that NOTHING PAID WAS REACHED on the way to
 * refusing it.
 *
 * ── HOW THIS TEST IS SHAPED, AND WHY IT IS NOT `not.toHaveBeenCalled()` ─────
 *
 * The mocks below THROW. They do not record.
 *
 *     expect(spy).not.toHaveBeenCalled()   fails at the END of the test, and all
 *                                          it says is that something went wrong
 *     a mock that throws                   detonates AT the call site, and the
 *                                          message names which limit was crossed
 *
 * And it buys something a spy cannot: IT PROTECTS THE ORDER. If somebody moves
 * the cap below `transcribeAudio()` in a refactor, this test fails that day with
 * "CAP FAILED — Whisper was reached". Until now that ordering was protected by a
 * COMMENT (submit/route.ts:164-171), and a comment protects no ordering at all.
 *
 * ── 🔴 SPEAKING IS THE CASE THAT MATTERS ────────────────────────────────────
 *
 * On the Speaking path Whisper is the FIRST money spent, before Sonnet ever runs.
 * A cap placed before Sonnet but after transcription would still burn a
 * transcription on every capped attempt — which is exactly the shape of bill the
 * cap exists to prevent. Case 4 below covers it specifically.
 *
 * ── WHAT IS REAL HERE ───────────────────────────────────────────────────────
 *
 * The real route handler, the real trialAiAllowance(), the real TRIAL_AI_LIMITS.
 * Mocked: the database, the session user, and every paid boundary — the last of
 * those replaced by tripwires rather than stubs.
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { OetTaskType } from "@prisma/client";

type TestUser = {
  id: string;
  email: string;
  subscriptionStatus: string | null;
  subscriptionCurrentPeriodEnd: Date | null;
  compProUntil: Date | null;
  emailVerified: Date | null;
};

const FUTURE = new Date(Date.now() + 30 * 864e5);
let USER: TestUser;
let SCORED_COUNT = 0;
let TASK_TYPE: OetTaskType = "WRITING_LETTER";

// ── the tripwires ───────────────────────────────────────────────────────────
//
// Each one is a paid boundary. Reaching any of them on a capped request is the
// defect, so each throws a sentence naming the limit that was crossed.
vi.mock("@/lib/ai/openai", () => ({
  transcribeAudio: () => {
    throw new Error("CAP FAILED — Whisper was reached on a capped request");
  },
}));
vi.mock("@/lib/ai/anthropic-client", () => ({
  getAnthropicClient: () => {
    throw new Error("CAP FAILED — a paid Anthropic call was reached on a capped request");
  },
  recordCost: () => {
    throw new Error("CAP FAILED — a cost-ledger row was written on a capped request");
  },
  recordTranscriptionCost: () => {
    throw new Error("CAP FAILED — a transcription cost row was written on a capped request");
  },
}));

vi.mock("@/lib/auth", () => ({ getCurrentUser: async () => USER }));

vi.mock("@/lib/prisma", () => ({
  prisma: {
    oetAttempt: {
      findFirst: async () => ({
        id: "att-1",
        userId: USER.id,
        taskType: TASK_TYPE,
        subTest: TASK_TYPE === "WRITING_LETTER" ? "WRITING" : "SPEAKING",
        status: "IN_PROGRESS",
        deadlineAt: null,
        // 🔴 A REAL PAYLOAD, NOT AN EMPTY ONE. With `{}` the handler's schema
        // threw before any paid call, so the uncapped path died on validation
        // and the test "failed" for a reason that had nothing to do with the
        // cap — a failed dependency wearing the costume of a result. With a
        // valid payload the uncapped request genuinely reaches the paid
        // boundary, which is the only way "nothing paid was reached" can mean
        // anything.
        item: {
          id: "it-1",
          title: "An item",
          taskType: TASK_TYPE,
          payload:
            TASK_TYPE === "WRITING_LETTER"
              ? {
                  caseNotes: "Patient seen today; stable; for discharge.",
                  recipient: "The community nursing team",
                  taskInstruction: "Write a discharge letter.",
                  letterType: "discharge",
                  wordMin: 180,
                  wordMax: 200,
                }
              : {
                  setting: "A community clinic",
                  candidateRole: "Nurse",
                  patientRole: "Patient",
                  candidateCard: "Explain the plan.",
                  patientConcern: "You are worried about going home.",
                  prepSeconds: 180,
                  speakSeconds: 300,
                },
        },
      }),
      // The cap reads this to learn how many AI evaluations the trial has spent.
      count: async () => SCORED_COUNT,
      update: async () => ({}),
    },
    oetItem: { findFirst: async () => null },
    aICostLedger: {
      create: () => {
        throw new Error("CAP FAILED — a cost-ledger row was written on a capped request");
      },
    },
  },
}));

const { POST } = await import("@/app/api/oet/submit/route");
const { TRIAL_AI_LIMITS } = await import("@/lib/billing/trial-limits");

/**
 * 🔴 A DELIBERATE LITERAL, AND THE FIRST VERSION OF THIS TEST WAS BROKEN WITHOUT IT.
 *
 * It originally set the "already used" count to TRIAL_AI_LIMITS itself. That made
 * the test SELF-REFERENTIAL: raise the cap to 99 and the used-count rose to 99
 * with it, so the request stayed capped and the test passed. Run against the
 * sabotage the spec prescribes — cap 2 -> 99 — it reported 4 passed. A test that
 * cannot fail when the thing it guards is removed is not a test.
 *
 * So the count is a literal. Raising the cap now makes case 3 ALLOWED, the
 * request runs on, and a tripwire detonates. The pinned expectation below means
 * a genuine cap change fails here loudly and on purpose: changing what a trial
 * costs is a money decision, and it should not be possible to make it quietly.
 */
const USED_AT_CAP = 2;
const PINNED_WRITING_LIMIT = 2;
const PINNED_SPEAKING_LIMIT = 2;

/**
 * 🔴 THE ROUTE SWALLOWS A THROW INTO A GENERIC 500, so a tripwire that fires is
 * invisible in the status alone — submit/route.ts:197 and :233 both catch, log
 * to console.error, and return "Could not score this attempt."
 *
 * Measured: with the cap raised to 99 the capped cases came back 500, not 402.
 * The breach WAS detected, but the failure read "expected 500 to be 402", which
 * is the vague ending this test exists to avoid. So console.error is captured
 * and any "CAP FAILED" sentence is surfaced into the assertion — the whole
 * reason the mocks throw instead of recording.
 */
async function submitAndWatch(): Promise<{ res: Response; breach: string | null }> {
  const seen: string[] = [];
  const original = console.error;
  console.error = (...args: unknown[]) => {
    seen.push(args.map((a) => (a instanceof Error ? a.message : String(a))).join(" "));
  };
  try {
    const res = await (TASK_TYPE === "SPEAKING_ROLEPLAY" ? submitSpeakingWithAudio() : submit());
    const breach = seen.find((l) => l.includes("CAP FAILED")) ?? null;
    return { res, breach };
  } finally {
    console.error = original;
  }
}

/**
 * 🔴 SPEAKING MUST BE SUBMITTED AS MULTIPART, OR IT NEVER REACHES WHISPER.
 *
 * submit/route.ts:188 only calls transcribeAudio() when the request carried an
 * audio Blob. A JSON body with a ready-made transcript skips transcription
 * entirely — so case 4, written that way, could never have proved anything
 * about Whisper no matter what the cap did. It was passing on a path that does
 * not contain the thing it names.
 */
function submitSpeakingWithAudio(): Promise<Response> {
  const form = new FormData();
  form.set("attemptId", "att-1");
  form.set("timeSpentSeconds", "60");
  form.set("durationSeconds", "42");
  // Big enough and long enough to clear the substance floors, so that WITHOUT
  // the cap this request genuinely reaches transcribeAudio(). With a 4-byte blob
  // the substance gate answered 422 first and the case proved nothing about Whisper.
  form.set("audio", new File([new Uint8Array(200_000)], "speech.webm", { type: "audio/webm" }));
  const req = new Request("https://x/api/oet/submit", { method: "POST", body: form });
  return POST(req as never) as Promise<Response>;
}

function submit(): Promise<Response> {
  const req = new Request("https://x/api/oet/submit", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      attemptId: "att-1",
      response:
        TASK_TYPE === "WRITING_LETTER"
          ? { text: "A letter with real substance in it, written at length so the substance gate passes and the request reaches the paid boundary if the cap does not stop it first." }
          : { transcript: "A spoken answer with real substance in it, long enough to pass the substance gate and reach the paid boundary if nothing stops it." },
      timeSpentSeconds: 60,
    }),
  });
  return POST(req as never) as Promise<Response>;
}

beforeEach(() => {
  TASK_TYPE = "WRITING_LETTER";
  SCORED_COUNT = 0;
  USER = {
    id: "u1",
    email: "learner@example.com",
    subscriptionStatus: "trialing",
    subscriptionCurrentPeriodEnd: FUTURE,
    compProUntil: null,
    emailVerified: new Date(),
  };
});

describe("the trial AI cap — and it costs nothing when it bites", () => {
  it("the caps are what this test assumes — a change here must be deliberate", () => {
    // Not decoration: every other case below is written against these numbers.
    expect(TRIAL_AI_LIMITS.WRITING_LETTER).toBe(PINNED_WRITING_LIMIT);
    expect(TRIAL_AI_LIMITS.SPEAKING_ROLEPLAY).toBe(PINNED_SPEAKING_LIMIT);
  });

  it(`case 3 · a trialing user at the cap is refused, and NOTHING paid is reached`, async () => {
    SCORED_COUNT = USED_AT_CAP;
    const { res, breach } = await submitAndWatch();
    // The important assertion is this one: not "it was refused" but "nothing
    // paid was reached on the way to refusing it".
    expect(breach, `a paid boundary was reached on a capped request: ${breach}`).toBeNull();
    expect(res.status, "a capped trial submission must be refused").toBe(402);
    const body = (await res.json()) as { trial?: { remaining?: number } };
    expect(body.trial?.remaining).toBe(0);
  });

  it("🔴 case 4 · Speaking is capped BEFORE Whisper, not merely before Sonnet", async () => {
    // Whisper is the FIRST money on the Speaking path. A cap after it would still
    // pay for a transcription on every capped attempt.
    TASK_TYPE = "SPEAKING_ROLEPLAY";
    SCORED_COUNT = USED_AT_CAP;
    const { res, breach } = await submitAndWatch();
    expect(breach, `Whisper or a ledger row was reached before the cap: ${breach}`).toBeNull();
    expect(res.status).toBe(402);
  });

  it("case 5 · a paying subscriber is NOT capped", async () => {
    USER.subscriptionStatus = "active";
    SCORED_COUNT = 50;
    const res = await submit();
    // It gets past the cap; what happens after is the grader's business, and the
    // tripwires would have thrown if it had been refused for the wrong reason.
    expect(res.status, "a paying subscriber was capped").not.toBe(402);
  });

  it("case 6 · a comped account is NOT capped", async () => {
    USER.subscriptionStatus = null;
    USER.compProUntil = FUTURE;
    SCORED_COUNT = 50;
    const res = await submit();
    expect(res.status, "a comped account was capped").not.toBe(402);
  });
});
