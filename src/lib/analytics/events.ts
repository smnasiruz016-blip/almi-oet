/**
 * THE FUNNEL CATALOGUE — every event this product may emit, and what it may carry.
 *
 * Master Standard §J asks us to know where people drop off, and ends with the
 * sentence that makes this urgent:
 *
 *     "Product quality and funnel defects must be fixed before increasing
 *      advertising spend."
 *
 * Measured on main @ #68: zero analytics calls, zero analytics packages, zero
 * funnel events. Running ads today would mean paying to send people through a
 * pipe with no instrumentation — landing, pricing, card, first exercise, and no
 * way to see which one loses them.
 *
 * ── 🔴 NO PII. EVER. ───────────────────────────────────────────────────────
 *
 * §J: "avoiding unnecessary personal/sensitive data collection". `userId` is a
 * foreign key and is allowed; an email address is a person. The four names in
 * FORBIDDEN_KEYS can never appear in a payload, and gate:funnel fails the build
 * if one does — because the cheapest moment to keep personal data out of an
 * analytics table is before the first row is written.
 *
 * ── 🔴 AN EVENT FIRES WHERE THE THING HAPPENS, NOT WHERE A PAGE OPENS ──────
 *
 * §J again, and it is the rule this catalogue is shaped around:
 *
 *     "Do not fire a trial event merely because a user visited a page."
 *
 * `trial_started` belongs to the Stripe webhook and nowhere else. A click on the
 * pricing page is an INTENTION; until the card verifies, that person is not on a
 * trial. Firing on the click would inflate the top of the funnel — at exactly
 * the point where money is about to be spent on it. `conversion: true` marks the
 * events that may only be emitted from their own route, and gate:funnel enforces
 * where each one lives.
 */

/** Names that are a person, not a key. Never a payload key, in any event. */
export const FORBIDDEN_KEYS = ["email", "name", "token", "stripeCustomerId"] as const;

export type FunnelEventDef = {
  /** Where this may be emitted from. A conversion event may live in exactly one
   *  route; gate:funnel checks the path of every call site against this. */
  readonly owner: string;
  /** Payload keys this event may carry. Anything else is RED. */
  readonly keys: readonly string[];
  /** True for events that represent money or entitlement changing hands. */
  readonly conversion: boolean;
  readonly why: string;
};

export const FUNNEL_EVENTS = {
  // ── acquisition ─────────────────────────────────────────────────────────
  landing_view: {
    owner: "src/app/page.tsx",
    keys: ["path"],
    conversion: false,
    why: "top of the funnel — a page view, and honestly labelled as one",
  },
  pricing_view: {
    owner: "src/app/pricing/page.tsx",
    keys: ["path"],
    conversion: false,
    why: "the step before the card, where price objections show up",
  },
  progress_view: {
    owner: "src/app/(app)/progress/page.tsx",
    keys: ["path"],
    conversion: false,
    why: "retention — did they come back to look at where they stand",
  },

  // ── account ─────────────────────────────────────────────────────────────
  account_created: {
    owner: "src/app/(auth)/signup/page.tsx",
    keys: ["userId"],
    conversion: false,
    why: "fires after prisma.user.create, not on the form being shown",
  },
  email_verified: {
    owner: "src/app/api/auth/verify-email/route.ts",
    keys: ["userId"],
    conversion: false,
    why: "fires on the update that sets emailVerified, not on the link being opened",
  },

  // ── money ───────────────────────────────────────────────────────────────
  checkout_started: {
    owner: "src/app/api/billing/checkout/route.ts",
    keys: ["userId"],
    conversion: false,
    why: "an INTENTION to pay. Deliberately not a conversion — no card has verified yet",
  },
  trial_started: {
    owner: "src/app/api/webhooks/stripe/route.ts",
    keys: ["userId", "planLabel"],
    conversion: true,
    why:
      "🔴 the webhook, and nowhere else. A pricing click is intent; until Stripe " +
      "says the card verified, that person is not on a trial. Firing earlier would " +
      "inflate the funnel exactly where we are about to spend money on it",
  },
  subscription_active: {
    owner: "src/app/api/webhooks/stripe/route.ts",
    keys: ["userId", "planLabel"],
    conversion: true,
    why: "trial converted to paid, or a renewal — customer.subscription.updated",
  },
  subscription_cancelled: {
    owner: "src/app/api/webhooks/stripe/route.ts",
    keys: ["userId"],
    conversion: true,
    why: "customer.subscription.deleted — the churn number",
  },
  payment_failed: {
    owner: "src/app/api/webhooks/stripe/route.ts",
    keys: ["userId"],
    conversion: true,
    why: "invoice.payment_failed — involuntary churn, which reads very differently",
  },

  // ── the product itself ──────────────────────────────────────────────────
  paywall_blocked: {
    owner: "src/app/api/oet/submit/route.ts",
    keys: ["userId", "taskType"],
    conversion: true,
    why: "someone tried to score without access — demand meeting the wall",
  },
  trial_cap_hit: {
    owner: "src/app/api/oet/submit/route.ts",
    keys: ["userId", "taskType", "limit"],
    conversion: true,
    why: "a trial spent its AI allowance — the moment to ask them to subscribe",
  },
  exercise_submitted: {
    owner: "src/app/api/oet/submit/route.ts",
    keys: ["userId", "taskType", "subTest"],
    conversion: true,
    why: "activation: fires after the attempt is actually written SCORED",
  },

  // ── admin ───────────────────────────────────────────────────────────────
  comp_granted: {
    owner: "src/lib/admin/comp-accounts.ts",
    keys: ["userId", "days"],
    conversion: false,
    why: "a comp is access granted without money; it must not read as a sale",
  },
} as const satisfies Record<string, FunnelEventDef>;

export type FunnelEventName = keyof typeof FUNNEL_EVENTS;

/**
 * 🔴 THE ORDER OF THE JOURNEY — A PRODUCT FACT, NOT A PAGE'S LAYOUT.
 *
 * Which step follows which is what the funnel MEANS. It lives here, beside the
 * events, for the same reason progress.ts (#63), offer.ts (#67) and
 * buildProgress() (#68) each ended up in one place: a second copy in a page is
 * free to drift from this one, and the two would then disagree about where
 * people drop off — which is the only question the funnel exists to answer.
 *
 * /admin/funnel renders this order. The e2e walk asserts the events it observes
 * arrive in it. Neither writes its own.
 *
 * Page views are not steps: a view is not a commitment, and mixing them into a
 * conversion funnel would flatter every rate in it.
 */
export const FUNNEL_STEP_ORDER = [
  "account_created",
  "email_verified",
  "checkout_started",
  "trial_started",
  "exercise_submitted",
  "subscription_active",
] as const satisfies readonly FunnelEventName[];

/** Position in the journey, or null for events that are not steps. */
export function funnelStepIndex(name: string): number | null {
  const i = (FUNNEL_STEP_ORDER as readonly string[]).indexOf(name);
  return i === -1 ? null : i;
}

export const FUNNEL_EVENT_NAMES = Object.freeze(
  Object.keys(FUNNEL_EVENTS) as FunnelEventName[],
);
