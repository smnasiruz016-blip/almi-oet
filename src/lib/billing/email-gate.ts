/**
 * WHAT AN UNVERIFIED EMAIL ACTUALLY BLOCKS — stated once, so the banner cannot
 * describe something different from what the API enforces.
 *
 * ── THE FALSE SENTENCE ──────────────────────────────────────────────────────
 *
 * The (app) layout showed EmailVerifyBanner on `!user.emailVerified`, and the
 * banner said:
 *
 *     "Please verify your email. Paid features are gated until you click the
 *      link we sent to <email>."
 *
 * Above a COMPED account that sentence is not true. `isComped()` short-circuits
 * `hasPaidAccess()`, so Listening and Reading practice is wide open for them.
 *
 * ── BUT IT IS NOT SIMPLY FALSE EITHER, AND THAT MATTERS ─────────────────────
 *
 * The brief that raised this asked for the banner to be hidden from users for
 * whom it is untrue. Hiding it would have produced a NEW untruth, by omission.
 * src/app/api/oet/submit/route.ts carries a SECOND gate that comp does not
 * bypass:
 *
 *     if (handler.mode === "AI" && !user.emailVerified) return 403
 *
 * So for a comped, unverified learner, Writing and Speaking really are blocked —
 * they would have met that 403 with no warning at all. The honest fix is not to
 * delete the sentence but to make it true, which means saying a different true
 * thing to each kind of user.
 *
 * ── 🔴 THE ROUTE AND THE BANNER SHARE THIS CODE ─────────────────────────────
 *
 * `aiFeedbackBlockedByEmail()` is what the route branches on AND what the scope
 * below is derived from. A description of a rule that is a second copy of the
 * rule is a description free to drift; there is one copy, and the gate asserts
 * the route holds no inline duplicate of it.
 */
import type { User } from "@prisma/client";
import { hasPaidAccess, isEmailVerified } from "@/lib/billing/plans";

type GateUser = Pick<
  User,
  "emailVerified" | "email" | "subscriptionStatus" | "subscriptionCurrentPeriodEnd" | "compProUntil"
>;

/**
 * The rule the submit route enforces before any AI grading. Comp and owner do
 * NOT bypass it — an address nobody has proven they own must not be able to
 * burn metered tokens, however the account was granted access.
 */
export function aiFeedbackBlockedByEmail(user: Pick<User, "emailVerified">): boolean {
  return !isEmailVerified(user);
}

/**
 * How much an unverified address actually costs this particular user.
 *
 *   NOTHING   verified — say nothing
 *   AI_ONLY   unverified, but access granted another way (comp / owner):
 *             practice is open, AI feedback is not
 *   ALL_PAID  unverified and not otherwise granted: hasPaidAccess() requires
 *             verification, so everything paid is behind it
 */
export type EmailGateScope = "NOTHING" | "AI_ONLY" | "ALL_PAID";

export function emailGateScope(user: GateUser): EmailGateScope {
  if (!aiFeedbackBlockedByEmail(user)) return "NOTHING";
  return hasPaidAccess(user) ? "AI_ONLY" : "ALL_PAID";
}
