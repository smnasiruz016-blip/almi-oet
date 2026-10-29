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

/**
 * RR-345 (D6) · can a trialling learner FINISH a full mock? The mock grades each AI step (1 Writing, 2 Speaking) and has no skip, so a
 * trial with too little AI allowance left was refused at step 21 or 22 and the mock never ended. The check is made BEFORE the mock
 * starts (and shown on its page): null = it fits; otherwise the words to show. Owner, comp and paying learners always fit.
 */
export function mockTrialShortfall(input: { subscriptionStatus: string | null; used: Partial<Record<OetTaskType, number>>; plan: readonly OetTaskType[]; bypass?: boolean }): string | null {
  const short: string[] = [];
  for (const t of Object.keys(TRIAL_AI_LIMITS) as OetTaskType[]) {
    const need = input.plan.filter((x) => x === t).length;
    if (!need) continue;
    const a = trialAiAllowance({ subscriptionStatus: input.subscriptionStatus, taskType: t, used: input.used[t] ?? 0, bypass: input.bypass });
    const left = a.remaining ?? 0;
    if (a.capped && left < need) short.push(`${need} ${t === "WRITING_LETTER" ? "Writing" : "Speaking"} (you have ${left} left)`);
  }
  return short.length ? `A full mock needs AI feedback on ${short.join(" and ")}, and your trial's AI feedback is used up. Subscribe to take the full mock, or keep practising Listening and Reading.` : null;
}
