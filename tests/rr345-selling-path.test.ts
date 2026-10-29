import { describe, it, expect, vi, beforeEach } from "vitest";
import { readFileSync } from "node:fs";

/* RR-345 · the selling path's holes found in the audit (D2–D6, D8), each closed — with fakes, never a live key */
const calls: { checkout: Array<Record<string, unknown>>; subsListed: number; earlier: number } = { checkout: [], subsListed: 0, earlier: 0 };
vi.mock("stripe", () => ({
  default: class {
    customers = { create: async () => ({ id: "cus_test" }) };
    subscriptions = { list: async () => { calls.subsListed++; return { data: Array.from({ length: calls.earlier }, (_, i) => ({ id: `sub_${i}` })) }; } };
    checkout = { sessions: { create: async (p: Record<string, unknown>) => { calls.checkout.push(p); return { url: "https://checkout.stripe.test/s" }; } } };
  },
}));
vi.mock("@/lib/prisma", () => ({ prisma: { user: { findUnique: async () => ({ stripeCustomerId: "cus_test" }), update: async () => ({}) } } }));

beforeEach(() => { calls.checkout = []; calls.subsListed = 0; calls.earlier = 0; vi.resetModules(); vi.stubEnv("STRIPE_SECRET_KEY", "sk_test_only_a_fake_for_this_test_000"); vi.stubEnv("STRIPE_PRICE_ID_MONTHLY", "price_test_monthly"); });

describe("RR-345 · the selling path", () => {
  it("D4 · the 7-day trial is given once: a learner who ever had a subscription subscribes without a new trial", async () => {
    const { createCheckoutSession } = await import("@/lib/billing/stripe");
    await createCheckoutSession({ userId: "u1", email: "a@example.test", name: null, priceId: "price_test_monthly" });
    expect((calls.checkout[0].subscription_data as Record<string, unknown>).trial_period_days).toBe(7);
    calls.earlier = 1;
    await createCheckoutSession({ userId: "u1", email: "a@example.test", name: null, priceId: "price_test_monthly" });
    expect(calls.checkout[1].subscription_data).not.toHaveProperty("trial_period_days");
    expect(calls.checkout[1].payment_method_collection).toBe("always");
    expect(calls.subsListed).toBe(2);
  });

  it("D6 · a trial whose AI feedback cannot cover the mock (1 Writing, 2 Speaking) is told before it starts; paying and comp always fit", async () => {
    const { mockTrialShortfall } = await import("@/lib/billing/trial-limits");
    const { MOCK_PLAN } = await import("@/lib/oet/registry");
    expect(mockTrialShortfall({ subscriptionStatus: "trialing", used: {}, plan: MOCK_PLAN })).toBeNull();
    expect(mockTrialShortfall({ subscriptionStatus: "trialing", used: { SPEAKING_ROLEPLAY: 1 }, plan: MOCK_PLAN })).toBe("A full mock needs AI feedback on 2 Speaking (you have 1 left), and your trial's AI feedback is used up. Subscribe to take the full mock, or keep practising Listening and Reading.");
    expect(mockTrialShortfall({ subscriptionStatus: "trialing", used: { WRITING_LETTER: 2, SPEAKING_ROLEPLAY: 2 }, plan: MOCK_PLAN })).toMatch(/^A full mock needs AI feedback on 1 Writing \(you have 0 left\) and 2 Speaking \(you have 0 left\)/);
    expect(mockTrialShortfall({ subscriptionStatus: "active", used: { SPEAKING_ROLEPLAY: 9 }, plan: MOCK_PLAN })).toBeNull();
    expect(mockTrialShortfall({ subscriptionStatus: "trialing", used: { SPEAKING_ROLEPLAY: 2 }, plan: MOCK_PLAN, bypass: true })).toBeNull();
    const entry = readFileSync("src/lib/oet/entry.ts", "utf8");
    expect(entry).toMatch(/if \(await mockShortfallFor\(user\)\) redirect\("\/practice\/mock\?trialcap=1"\);\s*\/\/[^\n]*\n\s*const id = await startSession\(\{\s*userId: user\.id,\s*mode: "MOCK"/);
  });

  it("D2 · D3 · D5 · D8 — the guards stand where the money and the truth are", () => {
    const session = readFileSync("src/app/(app)/practice/session/[sessionId]/page.tsx", "utf8");
    expect(session).toMatch(/if \(session\.status !== "COMPLETED" && !hasPaidAccess\(user\)\) redirect\("\/pricing"\);/);
    expect(session).toMatch(/if \(!hasPaidAccess\(u\)\) redirect\("\/pricing"\);[^\n]*\n\s*await advanceSession/);
    const account = readFileSync("src/app/(app)/account/page.tsx", "utf8");
    expect(account).toMatch(/\{user\.stripeCustomerId && \(\s*<form action="\/api\/billing\/portal" method="POST">/);
    expect(account).toContain("Manage or cancel my plan");
    expect(account).not.toContain("Nursing has practice content now");
    expect(account).toContain("{params.portal_error && (");
    const checkout = readFileSync("src/app/api/billing/checkout/route.ts", "utf8");
    expect(checkout).toMatch(/if \(isProActive\(user\)\) \{\s*return NextResponse\.json\(\s*\{ ok: false, error: "You already have a plan\. Manage or cancel it from your account\." \},\s*\{ status: 409 \}/);
    expect(checkout.indexOf("isProActive(user)")).toBeLessThan(checkout.indexOf("createCheckoutSession({"));
    const pricing = readFileSync("src/app/pricing/page.tsx", "utf8");
    expect(pricing).toMatch(/\) : hasPlan \? \(\s*<Link\s*href="\/account"/);
  });
});
