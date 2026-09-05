/**
 * @vitest-environment node
 *
 * 🔴 THE ENTITLEMENT CONTRACT — WRITTEN BEFORE THE OFFER CONFIG EXISTS.
 *
 * ── READ THIS BEFORE EDITING ANYTHING IN THIS FILE ──────────────────────────
 *
 * This file exists to be UNCHANGED across the offer-config refactor. It was
 * written and made green BEFORE any config was introduced, and it must still be
 * green afterwards WITHOUT A SINGLE LINE BEING EDITED.
 *
 * If making this file pass requires changing it, the refactor changed who has
 * access — and that is RED, however much better the new behaviour looks. Master
 * Standard §F:
 *
 *     "Before changing access logic, prove that existing paying customers,
 *      progress and entitlements will not be damaged."
 *
 * A test rewritten to match new behaviour proves nothing about the old. That is
 * the entire reason this is a separate file with its own name, rather than cases
 * added to entitlement-boundaries.test.ts: this one is a CONTRACT, and the other
 * is a description.
 *
 * ── WHAT IT PINS ────────────────────────────────────────────────────────────
 *
 * Four kinds of user who must keep full access, and four who must not get it.
 * Both surfaces are checked for each: `hasPaidAccess` (can they score at all)
 * and `trialAiAllowance` (are they metered while they do).
 *
 * ── WHAT IT DELIBERATELY DOES NOT DO ────────────────────────────────────────
 *
 * It does not name a trial LENGTH, a PRICE, or a cap VALUE. Those are exactly
 * what the config is meant to make changeable, and a contract that hard-codes
 * them would fail the moment the config did its job — for a reason that has
 * nothing to do with entitlement. It pins WHO gets access and WHETHER they are
 * metered, never how much.
 */
import { describe, expect, it, vi } from "vitest";
import type { User } from "@prisma/client";

const NOW = Date.now();
const HOUR = 3_600_000;

const OWNER_EMAIL = "owner@almiworld.test";
vi.mock("@/lib/auth/owner-check", () => ({
  isOwner: (email: string) => email === "owner@almiworld.test",
}));

const { hasPaidAccess } = await import("@/lib/billing/plans");
const { trialAiAllowance } = await import("@/lib/billing/trial-limits");
const { isOwner } = await import("@/lib/auth/owner-check");
const { isComped } = await import("@/lib/billing/plans");

function u(over: Partial<User> = {}): User {
  return {
    id: "u1",
    email: "learner@example.com",
    subscriptionStatus: null,
    subscriptionCurrentPeriodEnd: null,
    subscriptionCancelAtPeriodEnd: false,
    subscriptionPlan: null,
    compProUntil: null,
    emailVerified: new Date(),
    ...over,
  } as unknown as User;
}

const PAYING = u({ subscriptionStatus: "active", subscriptionCurrentPeriodEnd: new Date(NOW + HOUR) });
const TRIALING = u({ subscriptionStatus: "trialing", subscriptionCurrentPeriodEnd: new Date(NOW + HOUR) });
const COMPED = u({ compProUntil: new Date(NOW + HOUR) });
const OWNER = u({ email: OWNER_EMAIL });

const UNVERIFIED_PAYING = u({
  subscriptionStatus: "active",
  subscriptionCurrentPeriodEnd: new Date(NOW + HOUR),
  emailVerified: null,
});
const EXPIRED_COMP = u({ compProUntil: new Date(NOW - HOUR) });
const EXPIRED_PERIOD = u({ subscriptionStatus: "active", subscriptionCurrentPeriodEnd: new Date(NOW - HOUR) });
const NO_SUBSCRIPTION = u();

/** Metered exactly when the trial cap applies — the bypass mirrors the route. */
const metered = (user: User) =>
  trialAiAllowance({
    subscriptionStatus: user.subscriptionStatus,
    taskType: "WRITING_LETTER",
    used: 0,
    bypass: isOwner(user.email) || isComped(user),
  }).capped;

describe("who has access — the contract that must survive the offer config", () => {
  it("a paying subscriber has full access, and is NOT metered", () => {
    expect(hasPaidAccess(PAYING), "a paying customer lost access").toBe(true);
    expect(metered(PAYING), "a paying customer was metered like a trial").toBe(false);
  });

  it("a trialing user has full access, AND is metered", () => {
    expect(hasPaidAccess(TRIALING), "a trialing user lost access").toBe(true);
    expect(metered(TRIALING), "the trial stopped being metered").toBe(true);
  });

  it("a comped account has full access, and is NOT metered", () => {
    expect(hasPaidAccess(COMPED), "a comped account lost access").toBe(true);
    expect(metered(COMPED), "a comped account was metered").toBe(false);
  });

  it("the owner has full access, and is NOT metered", () => {
    expect(hasPaidAccess(OWNER), "the owner lost access").toBe(true);
    expect(metered(OWNER), "the owner was metered").toBe(false);
  });
});

describe("who does NOT have access — the same contract, from the other side", () => {
  it("🔴 paying but email unverified -> no access", () => {
    // Without this half, "everyone has access" would satisfy the block above.
    expect(hasPaidAccess(UNVERIFIED_PAYING)).toBe(false);
  });

  it("an EXPIRED comp -> no access", () => {
    expect(hasPaidAccess(EXPIRED_COMP)).toBe(false);
  });

  it("an EXPIRED subscription period -> no access", () => {
    expect(hasPaidAccess(EXPIRED_PERIOD)).toBe(false);
  });

  it("no subscription at all -> no access", () => {
    expect(hasPaidAccess(NO_SUBSCRIPTION)).toBe(false);
  });
});

describe("the order inside the chokepoint, which the config must feed and not replace", () => {
  it("🔴 comp and owner short-circuit BEFORE email verification", () => {
    // plans.ts:92 checks isOwner || isComped first, deliberately: a comped
    // account and the owner must not need a verified email. If a config were
    // inserted between those two lines this would fail, which is the point.
    expect(hasPaidAccess(u({ compProUntil: new Date(NOW + HOUR), emailVerified: null }))).toBe(true);
    expect(hasPaidAccess(u({ email: OWNER_EMAIL, emailVerified: null }))).toBe(true);
  });
});
