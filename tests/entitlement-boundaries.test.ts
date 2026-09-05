/**
 * @vitest-environment node
 *
 * SECTION F, 5b — THE ENTITLEMENT BOUNDARIES, PINNED.
 *
 * ── WHY THESE FUNCTIONS AND NOT OTHERS ──────────────────────────────────────
 *
 * Measured on origin/main @ #65, counting test files that name each symbol:
 *
 *     hasPaidAccess              7
 *     isComped                   1
 *     trialAiAllowance           1
 *     isProActive                0   <- decides whether a paying customer has access
 *     getCompProDaysRemaining    0
 *     grantCompPro               0
 *     revokeCompPro              0
 *     isEmailVerified            0
 *
 * `isProActive` is consulted by `hasPaidAccess` on every scored submission and by
 * `getUserPlan` on the account page, and nothing tested it. Its edges are all
 * time-based, which is the kind that fails quietly at midnight rather than loudly
 * in review.
 *
 * ── 🔴 WHAT IS DELIBERATELY NOT TESTED HERE ────────────────────────────────
 *
 * Nothing in this file changes behaviour, and `hasPaidAccess` is not touched. The
 * owner/comp short-circuit at plans.ts:92 runs BEFORE any Stripe state is read,
 * on purpose: a comped account and the owner must not need a verified email or a
 * live subscription. These tests record that order rather than questioning it.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import type { User } from "@prisma/client";

const NOW = Date.now();
const MINUTE = 60_000;

/** Only the fields the entitlement functions actually read. */
function user(over: Partial<User> = {}): User {
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

const { isProActive, isComped, getCompProDaysRemaining, isEmailVerified, hasPaidAccess } =
  await import("@/lib/billing/plans");

describe("isProActive — every edge, and it had none before", () => {
  it("inside the period and 'active' -> true", () => {
    expect(
      isProActive(user({ subscriptionStatus: "active", subscriptionCurrentPeriodEnd: new Date(NOW + MINUTE) })),
    ).toBe(true);
  });

  it("inside the period and 'trialing' -> true", () => {
    expect(
      isProActive(user({ subscriptionStatus: "trialing", subscriptionCurrentPeriodEnd: new Date(NOW + MINUTE) })),
    ).toBe(true);
  });

  it("🔴 inside the period but 'canceled' -> FALSE — ACTIVE_STATUSES holds the line", () => {
    // plans.ts:43 — the set is {trialing, active}. A canceled subscription whose
    // period has not yet run out is NOT access; Stripe leaves the period end in
    // place, so only the status distinguishes this from a live subscription.
    expect(
      isProActive(user({ subscriptionStatus: "canceled", subscriptionCurrentPeriodEnd: new Date(NOW + MINUTE) })),
    ).toBe(false);
  });

  it("🔴 'active' but the period has PASSED -> FALSE — this is expiry", () => {
    expect(
      isProActive(user({ subscriptionStatus: "active", subscriptionCurrentPeriodEnd: new Date(NOW - MINUTE) })),
    ).toBe(false);
  });

  it("'active' with no period end at all -> false", () => {
    expect(isProActive(user({ subscriptionStatus: "active", subscriptionCurrentPeriodEnd: null }))).toBe(false);
  });

  it("no subscription at all -> false", () => {
    expect(isProActive(user())).toBe(false);
  });

  it("🔴 a comp short-circuits BEFORE any subscription state is read", () => {
    // plans.ts:70. A comped user with no Stripe record at all is Pro-active.
    // The spec's table did not list this case; the code does it, so it is pinned.
    expect(
      isProActive(user({ subscriptionStatus: null, subscriptionCurrentPeriodEnd: null, compProUntil: new Date(NOW + MINUTE) })),
    ).toBe(true);
  });
});

describe("comp duration — three points around the expiry instant", () => {
  it("expired yesterday -> not comped, no days remaining", () => {
    const u = user({ compProUntil: new Date(NOW - 864e5) });
    expect(isComped(u)).toBe(false);
    expect(getCompProDaysRemaining(u)).toBeNull();
  });

  it("a moment BEFORE now -> not comped", () => {
    const u = user({ compProUntil: new Date(NOW - 1000) });
    expect(isComped(u)).toBe(false);
    expect(getCompProDaysRemaining(u)).toBeNull();
  });

  it("a moment AFTER now -> comped, and the remaining days round UP", () => {
    const u = user({ compProUntil: new Date(NOW + 1000) });
    expect(isComped(u)).toBe(true);
    // ceil: a comp with seconds left still reads as "1 day", never 0 — a grant
    // that reports 0 days while still granting access would read as expired.
    expect(getCompProDaysRemaining(u)).toBe(1);
  });

  it("no comp at all -> null, not 0", () => {
    // null and 0 mean different things: "no grant" vs "a grant with none left".
    expect(getCompProDaysRemaining(user())).toBeNull();
  });
});

describe("hasPaidAccess — the chokepoint, recorded not changed", () => {
  it("paying + verified -> true", () => {
    expect(
      hasPaidAccess(user({ subscriptionStatus: "active", subscriptionCurrentPeriodEnd: new Date(NOW + MINUTE) })),
    ).toBe(true);
  });

  it("🔴 paying but UNVERIFIED email -> false", () => {
    expect(
      hasPaidAccess(
        user({ subscriptionStatus: "active", subscriptionCurrentPeriodEnd: new Date(NOW + MINUTE), emailVerified: null }),
      ),
    ).toBe(false);
  });

  it("🔴 comped and UNVERIFIED -> true — the comp bypasses verification, on purpose", () => {
    expect(hasPaidAccess(user({ compProUntil: new Date(NOW + MINUTE), emailVerified: null }))).toBe(true);
  });

  it("expired period + verified -> false", () => {
    expect(
      hasPaidAccess(user({ subscriptionStatus: "active", subscriptionCurrentPeriodEnd: new Date(NOW - MINUTE) })),
    ).toBe(false);
  });

  it("isEmailVerified is exactly 'emailVerified is not null'", () => {
    expect(isEmailVerified(user({ emailVerified: null }))).toBe(false);
    expect(isEmailVerified(user({ emailVerified: new Date() }))).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// grantCompPro / revokeCompPro — both had zero tests, and both write to users
// ─────────────────────────────────────────────────────────────────────────────
let ADMIN = true;
let TARGET: User | null = null;
const updated: Record<string, unknown>[] = [];

vi.mock("@/lib/auth", () => ({
  getCurrentUser: async () => ({ id: "admin", email: "admin@example.com" }),
}));
vi.mock("@/lib/founder", () => ({ isAdmin: () => ADMIN }));
vi.mock("next/cache", () => ({ revalidatePath: () => {} }));
vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      findUnique: async () => TARGET,
      update: async ({ data }: { data: Record<string, unknown> }) => {
        updated.push(data);
        return {};
      },
    },
  },
}));

const { grantCompPro, revokeCompPro } = await import("@/lib/admin/comp-accounts");

describe("comp grants are admin-only, single, and reversible", () => {
  beforeEach(() => {
    ADMIN = true;
    TARGET = user({ id: "target", email: "target@example.com" });
    updated.length = 0;
  });

  it("🔴 a non-admin is refused, and NOTHING is written", () => {
    ADMIN = false;
    return grantCompPro({ email: "target@example.com", days: 7 }).then((r) => {
      expect(r).toEqual({ ok: false, error: "Not authorized" });
      expect(updated, "a refused grant still wrote to the user").toHaveLength(0);
    });
  });

  it("a non-admin cannot revoke either", async () => {
    ADMIN = false;
    const r = await revokeCompPro({ userId: "target" });
    expect(r).toEqual({ ok: false, error: "Not authorized" });
    expect(updated).toHaveLength(0);
  });

  it("granting to a user who does not exist is refused", async () => {
    TARGET = null;
    const r = await grantCompPro({ email: "nobody@example.com", days: 7 });
    expect(r.ok).toBe(false);
    expect(r.error).toContain("must sign up first");
    expect(updated).toHaveLength(0);
  });

  it("🔴 a second grant over an ACTIVE comp is refused — one grant per user", async () => {
    TARGET = user({ id: "target", email: "target@example.com", compProUntil: new Date(NOW + 864e5) });
    const r = await grantCompPro({ email: "target@example.com", days: 7 });
    expect(r.ok).toBe(false);
    expect(r.error).toContain("Extend");
    expect(updated, "a refused grant still overwrote the existing comp").toHaveLength(0);
  });

  it("a grant over an EXPIRED comp is allowed, and sets a future expiry", async () => {
    TARGET = user({ id: "target", email: "target@example.com", compProUntil: new Date(NOW - 864e5) });
    const r = await grantCompPro({ email: "target@example.com", days: 7 });
    expect(r.ok).toBe(true);
    const until = updated[0]?.compProUntil as Date;
    expect(isComped(user({ compProUntil: until })), "the new grant is not active").toBe(true);
  });

  it("days outside 1–1825 are refused", async () => {
    expect((await grantCompPro({ email: "target@example.com", days: 0 })).ok).toBe(false);
    expect((await grantCompPro({ email: "target@example.com", days: 99999 })).ok).toBe(false);
    expect(updated).toHaveLength(0);
  });

  it("🔴 revoke nulls the grant, and isComped is false afterwards", async () => {
    const r = await revokeCompPro({ userId: "target" });
    expect(r.ok).toBe(true);
    expect(updated[0]?.compProUntil).toBeNull();
    // The point of the revoke, checked through the predicate the product uses.
    expect(isComped(user({ compProUntil: updated[0]?.compProUntil as Date | null }))).toBe(false);
  });
});
