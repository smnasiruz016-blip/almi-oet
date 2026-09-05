/**
 * THE OFFER — trial length, price, and what a trial may spend. One place.
 *
 * Master Standard §F: *"Access policy must be centrally configurable because
 * trial length, price and offer can change."*
 *
 * Until this file existed those three lived apart: the trial length was a const
 * in stripe.ts, the price a const in plans.ts, the AI caps a const in
 * trial-limits.ts, and the public pages said "7-day free trial" and "$12/month"
 * in prose. Changing the offer meant finding all of them.
 *
 * ── 🔴 WHAT THIS FILE IS NOT ────────────────────────────────────────────────
 *
 * It is NOT an access-policy engine, and it does not decide who gets in.
 * `hasPaidAccess()` remains the single chokepoint and is untouched:
 *
 *     if (isOwner(user.email) || isComped(user)) return true;   // plans.ts:92
 *     return isProActive(user) && isEmailVerified(user);
 *
 * Owner and comp short-circuit FIRST, deliberately — a comped account and the
 * owner must not need a verified email or a live subscription. THE CONFIG FEEDS
 * THAT ORDER, IT DOES NOT SIT INSIDE IT. tests/entitlement-contract.test.ts pins
 * the order, and its RED was shown by inserting a check above the short-circuit.
 *
 * ── WHY THE CONTRACT TEST WAS WRITTEN FIRST ────────────────────────────────
 *
 * tests/entitlement-contract.test.ts was written and made GREEN before this file
 * existed, and it must still be green with NOT ONE LINE EDITED. If making it pass
 * required changing it, this refactor changed who has access — red, however
 * better the new behaviour looked. §F: "prove that existing paying customers,
 * progress and entitlements will not be damaged."
 *
 * That is also why the contract names no trial length, price or cap: those are
 * precisely what this file makes changeable, and a contract hard-coding them
 * would fail the moment the config did its job.
 *
 * ── 🔴 AND THE TRAP TO WATCH WHEN YOU CHANGE ANYTHING HERE ─────────────────
 *
 * `gate:claims` checks that the public copy matches the SYMBOL. It used to read
 * the old hard-coded constants. If it had been left pointing at those, it would
 * now be guarding values nobody can see any more, and every number in THIS file
 * would be unguarded — a gate green over a dead constant. gate:claims reads this
 * file now. If you add an offer value, point the gate at it in the same commit.
 */
import type { OetTaskType } from "@prisma/client";

export const OFFER = {
  /** Free-trial length in days. Handed to Stripe at checkout, and the number the
   *  public pages must print. */
  trialDays: 7,

  /** The advertised monthly price, in cents.
   *
   *  🔴 THIS IS WHAT WE CLAIM, NOT WHAT WE CHARGE. The price object behind
   *  STRIPE_PRICE_ID_MONTHLY is the authority; /api/billing/health reconciles
   *  them at runtime by retrieving it and reporting unit_amount. A gate cannot
   *  reach Stripe from CI, so it holds the copy to this figure and leaves the
   *  live reconciliation to health. */
  priceMonthlyCents: 1200,

  /** AI evaluations a TRIAL may spend, per task type, for the whole trial —
   *  not per day.
   *
   *  This is the money guard, not a fairness rule: seven days with a card on
   *  file and no charge would otherwise be an unmetered Sonnet and Whisper bill.
   *  tests/trial-cap-costs-nothing.test.ts proves a capped request reaches
   *  NEITHER — and pins these values, so changing them fails there loudly. That
   *  is deliberate: what a trial costs should not be changeable quietly. */
  trialAiLimits: {
    WRITING_LETTER: 2,
    SPEAKING_ROLEPLAY: 2,
  } as Partial<Record<OetTaskType, number>>,
} as const;

/** The trial length as the public copy writes it, e.g. "7-day free trial". */
export const trialLabel = (): string => `${OFFER.trialDays}-day free trial`;

/** The monthly price as the public copy writes it, e.g. "$12/month". */
export const priceMonthlyLabel = (): string =>
  `$${(OFFER.priceMonthlyCents / 100).toFixed(OFFER.priceMonthlyCents % 100 === 0 ? 0 : 2)}/month`;
