// Trial caps on the metered surface.
//
// Writing (Sonnet) and Speaking (Whisper -> Sonnet) are the only per-use costs
// left after the Piper switch — Listening audio is pre-rendered and Reading is
// deterministic. Before this file, `trialing` was treated as fully paid with no
// cap of any kind, so a 7-day trial bought unlimited Sonnet and Whisper on a
// card that had not yet been charged, and could then be cancelled on day 7.
//
// The cap applies ONLY during the trial. A paying subscriber is uncapped, and
// owner/comp accounts bypass it entirely — they never had a trial to limit.

import type { OetTaskType } from "@prisma/client";
import { OFFER } from "@/lib/billing/offer";

/** AI evaluations allowed per task type for the whole trial (not per day). */
export const TRIAL_AI_LIMITS: Partial<Record<OetTaskType, number>> = OFFER.trialAiLimits;

export type TrialAllowance = {
  /** False only when a trialling user has spent this task type's allowance. */
  allowed: boolean;
  /** True when the cap applies at all (trialling, non-owner, non-comp). */
  capped: boolean;
  limit: number | null;
  used: number;
  remaining: number | null;
  message: string | null;
};

const UNCAPPED: TrialAllowance = {
  allowed: true,
  capped: false,
  limit: null,
  used: 0,
  remaining: null,
  message: null,
};

/**
 * Pure decision — no database, so it is provable without one.
 *
 * `used` is the count of already-SCORED attempts of this task type for this
 * user. `bypass` covers owner and comp grants, which are resolved by the
 * caller so this stays free of auth imports.
 */
export function trialAiAllowance(input: {
  subscriptionStatus: string | null;
  taskType: OetTaskType;
  used: number;
  bypass?: boolean;
}): TrialAllowance {
  if (input.bypass) return UNCAPPED;
  // Only a trial is capped. `active` (paying) and anything else that reached
  // this point through hasPaidAccess is uncapped.
  if (input.subscriptionStatus !== "trialing") return UNCAPPED;

  const limit = TRIAL_AI_LIMITS[input.taskType];
  if (limit === undefined) return UNCAPPED;

  const used = Math.max(0, input.used);
  const remaining = Math.max(0, limit - used);
  const allowed = used < limit;

  return {
    allowed,
    capped: true,
    limit,
    used,
    remaining,
    message: allowed
      ? `${remaining} of ${limit} trial evaluation(s) left for this task type.`
      : `Your free trial includes ${limit} AI evaluation(s) per task type, and you have used all ${limit}. ` +
        `Your subscription starts at the end of the trial and lifts this limit — or you can keep practising ` +
        `the tasks that need no AI evaluation.`,
  };
}
