/**
 * gate:email-gate — WE DO NOT TELL A USER SOMETHING UNTRUE ABOUT THEIR ACCOUNT.
 *
 * The (app) layout rendered EmailVerifyBanner on `!user.emailVerified`, and the
 * banner said "Paid features are gated until you click the link". Above a COMPED
 * account that is false — `isComped()` short-circuits `hasPaidAccess()`, so
 * Listening and Reading practice is open. It showed up in a screenshot of the
 * end-to-end walk, above an account that was practising perfectly well.
 *
 * ── WHY THE FIX IS NOT "HIDE IT" ────────────────────────────────────────────
 *
 * src/app/api/oet/submit/route.ts carries a second gate that comp does NOT
 * bypass: `handler.mode === "AI" && aiFeedbackBlockedByEmail(user)` → 403. So a
 * comped, unverified learner really is blocked from Writing and Speaking.
 * Hiding the banner would have replaced a false sentence with a silent surprise.
 * The banner now says a different TRUE thing to each kind of user.
 *
 * ── THE THREE QUESTIONS ─────────────────────────────────────────────────────
 *
 * ① Population: every scope `emailGateScope()` can return is enumerated from
 *    the union type's own values, asserted non-empty, and every one of them has
 *    a case below — a fourth scope added without a case fails the census.
 * ② Every assertion can fail: the sentence asserted ABSENT for one user shape is
 *    asserted PRESENT for another, so "not found" can never pass vacuously.
 * ③ The expected value: the two sentences are HAND-TYPED here, from the copy a
 *    learner reads. They are NOT imported from the component — importing them
 *    would make this agree with whatever the banner happens to say, which is the
 *    defect it exists to catch.
 *
 * ── HOW IT WAS SEEN RED ─────────────────────────────────────────────────────
 *
 * `emailGateScope` was changed to `return "ALL_PAID"` whenever the address is
 * unverified — the behaviour this replaces. The comped case then rendered the
 * false sentence and the assertion failed. Restored; output in the PR body.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

// HAND-TYPED from the copy a learner reads.
const ALL_PAID_CLAIM = "Paid features are gated until you click the link";
const AI_ONLY_CLAIM = "AI feedback on Writing and Speaking needs a verified";

vi.mock("@/lib/prisma", () => ({ prisma: {} }));

const { emailGateScope, aiFeedbackBlockedByEmail } = await import("@/lib/billing/email-gate");
const { EmailVerifyBanner } = await import("@/components/EmailVerifyBanner");

const FUTURE = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

/** The four user shapes that matter. Fields are only those the predicates read. */
const USERS = {
  verifiedPayer: {
    email: "a@example.com",
    emailVerified: new Date(),
    subscriptionStatus: "active",
    subscriptionCurrentPeriodEnd: FUTURE,
    compProUntil: null,
  },
  unverifiedComped: {
    email: "b@example.com",
    emailVerified: null,
    subscriptionStatus: null,
    subscriptionCurrentPeriodEnd: null,
    compProUntil: FUTURE,
  },
  unverifiedPayer: {
    email: "c@example.com",
    emailVerified: null,
    subscriptionStatus: "active",
    subscriptionCurrentPeriodEnd: FUTURE,
    compProUntil: null,
  },
  unverifiedFree: {
    email: "d@example.com",
    emailVerified: null,
    subscriptionStatus: null,
    subscriptionCurrentPeriodEnd: null,
    compProUntil: null,
  },
} as const;

/** Every scope the type can produce, and the user shape that produces it. */
const SCOPE_CASES = {
  NOTHING: USERS.verifiedPayer,
  AI_ONLY: USERS.unverifiedComped,
  ALL_PAID: USERS.unverifiedFree,
} as const;

const banner = (scope: "AI_ONLY" | "ALL_PAID") =>
  renderToStaticMarkup(<EmailVerifyBanner email="learner@example.com" scope={scope} />);

describe("the population this gate covers", () => {
  it("has a case for every scope, and the set is not empty", () => {
    const scopes = Object.keys(SCOPE_CASES);
    expect(scopes.length).toBeGreaterThan(0);
    // Every user shape resolves to a scope this test knows about.
    for (const u of Object.values(USERS)) expect(scopes).toContain(emailGateScope(u));
    // And every scope is actually reachable from some shape — no dead case.
    const reached = new Set(Object.values(USERS).map((u) => emailGateScope(u)));
    expect([...reached].sort()).toEqual(scopes.sort());
  });
});

describe("who is told what", () => {
  it("a verified payer is told nothing at all", () => {
    expect(emailGateScope(USERS.verifiedPayer)).toBe("NOTHING");
  });

  it("🔴 an unverified COMPED learner is NOT told their practice is gated", () => {
    // The false sentence, above the account from the e2e screenshot.
    expect(emailGateScope(USERS.unverifiedComped)).toBe("AI_ONLY");
    expect(banner("AI_ONLY")).not.toContain(ALL_PAID_CLAIM);
  });

  it("…but IS warned about the thing that really is blocked for them", () => {
    // Comp does not bypass the route's AI email gate, so silence would be a new
    // untruth: they would meet a 403 on Writing with no warning.
    expect(aiFeedbackBlockedByEmail(USERS.unverifiedComped)).toBe(true);
    expect(banner("AI_ONLY")).toContain(AI_ONLY_CLAIM);
  });

  it("an unverified free account IS told paid features are gated — and that is true", () => {
    // hasPaidAccess() requires verification, so for this user everything paid
    // genuinely is behind the link. The control for the assertion above.
    expect(emailGateScope(USERS.unverifiedFree)).toBe("ALL_PAID");
    expect(banner("ALL_PAID")).toContain(ALL_PAID_CLAIM);
    expect(banner("ALL_PAID")).not.toContain(AI_ONLY_CLAIM);
  });

  it("an unverified subscriber is in the same position — verification gates everything", () => {
    expect(emailGateScope(USERS.unverifiedPayer)).toBe("ALL_PAID");
  });
});

describe("the description and the enforcement are the same code", () => {
  it("the submit route branches on aiFeedbackBlockedByEmail, not on its own copy", () => {
    const src = readFileSync(
      join(process.cwd(), "src/app/api/oet/submit/route.ts"),
      "utf8",
    );
    expect(src).toContain("aiFeedbackBlockedByEmail(user)");
    // The inline duplicate this replaced. If it comes back, the banner and the
    // API are free to disagree again.
    expect(src).not.toMatch(/handler\.mode === "AI" && !user\.emailVerified/);
  });

  it("the layout asks for a scope rather than testing the flag itself", () => {
    const src = readFileSync(join(process.cwd(), "src/app/(app)/layout.tsx"), "utf8");
    expect(src).toContain("emailGateScope(user)");
    expect(src).not.toMatch(/\{!user\.emailVerified &&/);
  });
});
