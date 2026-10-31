/**
 * THE 48-HOUR TASTE — owner decision 31 Oct 2026 (direct selling).
 *
 * The four things the owner asked to be proven:
 *   ① a NEW user gets the taste limits (1 Reading set, 1 Listening set, 1 AI Writing, 1 Speaking; 48 hours)
 *   ② a locked mock shows the paywall ("Unlock everything — $12/month"), never a dead end
 *   ③ checkout carries no trial            (tests/rr345-selling-path.test.ts D4, and pinned again here)
 *   ④ an EXISTING 7-day trial user is unaffected — the taste is never asked for them
 *
 * The doors are the real lib/oet/entry.ts and the real lib/billing/plans.ts — only
 * auth, the session store and prisma are faked, so a change to who-gets-in shows here.
 */
import { readFileSync } from "node:fs";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

const HOUR = 3600_000;
const NOW = Date.now();

type FakeUser = Record<string, unknown>;
let USER: FakeUser;
let SESSIONS: { id: string; subTest: string | null; status: string; attempts: { status: string; deadlineAt: Date | null }[] }[] = [];

class RedirectError extends Error {
  constructor(public to: string) {
    super(`REDIRECT:${to}`);
  }
}
vi.mock("next/navigation", () => ({
  redirect: (to: string) => {
    throw new RedirectError(to);
  },
  notFound: () => {
    throw new Error("NOT_FOUND");
  },
}));
vi.mock("@/lib/auth", () => ({ requireUser: async () => USER, getCurrentUser: async () => USER }));
const startSession = vi.fn(async () => "new-session-id");
vi.mock("@/lib/oet/session", () => ({ startSession, getSessionView: async () => null }));
vi.mock("@/lib/prisma", () => ({
  prisma: {
    oetSession: { findMany: async () => SESSIONS, findFirst: async () => null },
    oetAttempt: { groupBy: async () => [], findMany: async () => [] },
  },
}));

const newUser = (over: FakeUser = {}): FakeUser => ({
  id: "u-new",
  email: "new@example.test",
  emailVerified: new Date(NOW - HOUR),
  createdAt: new Date(NOW - 2 * HOUR), // signed up two hours ago
  subscriptionStatus: null,
  stripeSubscriptionId: null,
  subscriptionCurrentPeriodEnd: null,
  compProUntil: null,
  targetProfession: "NURSING",
  ...over,
});
const scored = (id: string, subTest: string) => ({ id, subTest, status: "IN_PROGRESS", attempts: [{ status: "SCORED", deadlineAt: null }] });

const entry = await import("@/lib/oet/entry");
const taste = await import("@/lib/billing/taste");
const { OFFER } = await import("@/lib/billing/offer");

beforeEach(() => {
  USER = newUser();
  SESSIONS = [];
  startSession.mockClear();
});

async function door(fn: () => Promise<unknown>): Promise<string> {
  try {
    await fn();
  } catch (e) {
    if (e instanceof RedirectError) return e.to;
    throw e;
  }
  throw new Error("a door returned normally");
}
const startReading = () => door(() => entry.beginPracticeSession({ taskSlug: "reading-part-b", professionSlug: "nursing" }));

describe("① a new user gets exactly the taste", () => {
  it("the offer is 48 hours, 1 of each — the numbers the copy is held to", () => {
    expect(OFFER.tasteHours).toBe(48);
    expect(OFFER.tasteLimits).toEqual({ READING: 1, LISTENING: 1, WRITING: 1, SPEAKING: 1 });
  });

  it("a new account may START one set of each sub-test", async () => {
    for (const [slug] of [["reading-part-b"], ["listening-part-a"], ["writing-letter"], ["speaking-roleplay"]]) {
      startSession.mockClear();
      const to = await door(() => entry.beginPracticeSession({ taskSlug: slug, professionSlug: "nursing" }));
      expect(to, slug).toBe("/practice/session/new-session-id");
      expect(startSession, slug).toHaveBeenCalledTimes(1);
    }
  });

  it("🔴 once a Reading set holds a scored answer, a second Reading set meets the paywall — and nothing starts", async () => {
    SESSIONS = [scored("s1", "READING")];
    expect(await startReading()).toBe("/pricing?locked=used&for=reading");
    expect(startSession).not.toHaveBeenCalled();
  });

  it("…but Listening is still free: the limit is per sub-test", async () => {
    SESSIONS = [scored("s1", "READING")];
    const to = await door(() => entry.beginPracticeSession({ taskSlug: "listening-part-b", professionSlug: "nursing" }));
    expect(to).toBe("/practice/session/new-session-id");
  });

  it("an opened, unanswered set is RESUMED, not replaced — the taste cannot page through the bank", async () => {
    SESSIONS = [{ id: "open1", subTest: "READING", status: "IN_PROGRESS", attempts: [{ status: "IN_PROGRESS", deadlineAt: new Date(NOW + HOUR) }] }];
    expect(await startReading()).toBe("/practice/session/open1");
    expect(startSession).not.toHaveBeenCalled();
  });

  it("…and one whose clock ran out is set aside, so the learner is never stuck on it", async () => {
    SESSIONS = [{ id: "stale", subTest: "READING", status: "IN_PROGRESS", attempts: [{ status: "IN_PROGRESS", deadlineAt: new Date(NOW - 60_000) }] }];
    expect(await startReading()).toBe("/practice/session/new-session-id");
  });

  it("🔴 after 48 hours every door is the paywall", async () => {
    USER = newUser({ createdAt: new Date(NOW - 49 * HOUR) });
    expect(await startReading()).toBe("/pricing?locked=expired&for=reading");
    expect(startSession).not.toHaveBeenCalled();
  });

  it("the 48-hour boundary: one minute before is open, one minute after is not", () => {
    const at = (h: number) => taste.isTasteActive(newUser({ createdAt: new Date(NOW - h * HOUR) }) as never, NOW);
    expect(at(48 - 1 / 60)).toBe(true);
    expect(at(48 + 1 / 60)).toBe(false);
  });

  it("a cancelled subscriber or an ex-comp account gets NO new taste", () => {
    expect(taste.tasteEndsAt(newUser({ subscriptionStatus: "canceled" }) as never)).toBeNull();
    expect(taste.tasteEndsAt(newUser({ compProUntil: new Date(NOW - HOUR) }) as never)).toBeNull();
  });

  it("🔴 the money guard behind the door: a taste learner can never be scored a SECOND AI evaluation", () => {
    const base = { user: newUser() as never, sessionMode: "PRACTICE_SET", subTest: "WRITING" as const, isAi: true, now: NOW };
    expect(taste.tasteMayScore({ ...base, scoredOfThisSubTest: 0 })).toBe(true);
    expect(taste.tasteMayScore({ ...base, scoredOfThisSubTest: 1 })).toBe(false);
    expect(taste.tasteMayScore({ ...base, scoredOfThisSubTest: 0, sessionMode: "MOCK" })).toBe(false);
    expect(taste.tasteMayScore({ ...base, scoredOfThisSubTest: 0, user: newUser({ createdAt: new Date(NOW - 49 * HOUR) }) as never })).toBe(false);
  });

  it("the submit route asks tasteMayScore BEFORE the email gate, transcription and grading", () => {
    const src = readFileSync("src/app/api/oet/submit/route.ts", "utf8");
    const at = (s: string) => src.indexOf(s);
    expect(at("tasteOk = tasteMayScore(")).toBeGreaterThan(0);
    expect(at("if (!paid && !tasteOk)")).toBeLessThan(at("aiFeedbackBlockedByEmail(user)"));
    expect(at("if (!paid && !tasteOk)")).toBeLessThan(at("await transcribeAudio("));
    expect(at("if (!paid && !tasteOk)")).toBeLessThan(at("await handler.run("));
  });
});

describe("② a locked mock shows the paywall", () => {
  it("🔴 the mock door sends a taste learner to the paywall — the mock is never in the taste", async () => {
    expect(await door(() => entry.beginMockSession())).toBe("/pricing?locked=mock&for=mock");
    expect(startSession).not.toHaveBeenCalled();
  });

  it("🔴 the mock page renders the paywall with what it unlocks and the $12 button — no dead end", async () => {
    vi.stubEnv("STRIPE_SECRET_KEY", "sk_test_only_a_fake_for_this_test_000");
    vi.stubEnv("STRIPE_PRICE_ID_MONTHLY", "price_test_monthly");
    const { default: MockStartPage } = await import("@/app/(app)/practice/mock/page");
    const html = renderToStaticMarkup(await MockStartPage());
    expect(html).toContain('data-paywall="MOCK"');
    expect(html).toContain("Unlock everything — $12/month");
    expect(html).toContain("Full mocks across all four sub-tests");
    expect(html).not.toContain("Begin full mock");
    vi.unstubAllEnvs();
  });

  it("the paywall never promises a refund", async () => {
    const { Paywall } = await import("@/components/oet/Paywall");
    for (const r of ["USED", "EXPIRED", "MOCK", "MODEL", "VOCABULARY", "NONE"] as const) {
      expect(renderToStaticMarkup(<Paywall reason={r} />).toLowerCase()).not.toContain("refund");
    }
  });
});

describe("③ checkout has no trial", () => {
  it("createCheckoutSession hands Stripe no trial of any kind", () => {
    const src = readFileSync("src/lib/billing/stripe.ts", "utf8").replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, "");
    expect(src).not.toMatch(/trial_period_days|trial_end|trial_from_plan|trial_settings/);
  });
});

describe("④ an existing 7-day trial is unaffected", () => {
  const trialing = () =>
    newUser({
      id: "u-trial",
      createdAt: new Date(NOW - 30 * 24 * HOUR), // long past any 48 hours
      subscriptionStatus: "trialing",
      stripeSubscriptionId: "sub_trial",
      subscriptionCurrentPeriodEnd: new Date(NOW + 3 * 24 * HOUR),
    });

  it("🔴 a trialing learner starts a second Reading set — the taste limit is never asked of them", async () => {
    USER = trialing();
    SESSIONS = [scored("s1", "READING"), scored("s2", "READING")];
    expect(await startReading()).toBe("/practice/session/new-session-id");
    expect(startSession).toHaveBeenCalledTimes(1);
  });

  it("they have no taste at all (so no taste rule can reach them) and keep the trial's own AI cap of 2", async () => {
    expect(taste.tasteEndsAt(trialing() as never)).toBeNull();
    const { trialAiAllowance } = await import("@/lib/billing/trial-limits");
    expect(trialAiAllowance({ subscriptionStatus: "trialing", taskType: "WRITING_LETTER", used: 1 }).allowed).toBe(true);
    expect(trialAiAllowance({ subscriptionStatus: "trialing", taskType: "WRITING_LETTER", used: 2 }).allowed).toBe(false);
  });

  it("a paying learner is likewise untouched", async () => {
    USER = newUser({ subscriptionStatus: "active", stripeSubscriptionId: "sub_paid", subscriptionCurrentPeriodEnd: new Date(NOW + 20 * 24 * HOUR) });
    SESSIONS = [scored("s1", "READING")];
    expect(await startReading()).toBe("/practice/session/new-session-id");
  });
});
