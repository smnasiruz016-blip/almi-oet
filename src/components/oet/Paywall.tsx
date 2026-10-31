// THE PAYWALL — owner decision 31 Oct 2026 (direct selling). Shown wherever an
// unpaid learner meets something locked: what it unlocks, and the $12 button,
// in one card. Never a dead end: the button starts checkout directly, and a
// learner who is not signed in is sent to sign up first. Phone first: one
// column, 48px targets, no client script beyond the checkout button itself.
import Link from "next/link";
import { isBillingEnabled } from "@/lib/billing/plans";
import { OFFER, unlockLabel } from "@/lib/billing/offer";
import { PricingCheckoutButton } from "@/app/pricing/PricingCheckoutButton";

export type PaywallReason = "USED" | "EXPIRED" | "MOCK" | "MODEL" | "VOCABULARY" | "NONE";

const SUBTEST_WORD: Record<string, string> = {
  reading: "Reading set",
  listening: "Listening set",
  writing: "AI-scored Writing letter",
  speaking: "Speaking role-play",
};

/** The headline for each reason — what happened, in plain words. */
export function paywallHeadline(reason: PaywallReason, what?: string | null): string {
  switch (reason) {
    case "USED":
      return `You have used your free ${SUBTEST_WORD[String(what ?? "").toLowerCase()] ?? "practice"}.`;
    case "EXPIRED":
      return `Your free ${OFFER.tasteHours} hours have ended.`;
    case "MOCK":
      return "The full mock is part of the full plan.";
    case "MODEL":
      return "Model letters and model role-plays are part of the full plan.";
    case "VOCABULARY":
      return "This is a short sample of the vocabulary.";
    default:
      return "This is part of the full plan.";
  }
}

/** What $12/month unlocks — every line is something the paid plan really does. */
export const UNLOCKS = [
  "Every Reading and Listening set, with explanations",
  "AI feedback on your Writing letters and Speaking role-plays",
  "Full mocks across all four sub-tests, in OET order",
  "Model letters and model role-plays to learn from",
  "The full vocabulary for your profession",
] as const;

export function Paywall({
  reason,
  what = null,
  signedIn = true,
  compact = false,
}: {
  reason: PaywallReason;
  what?: string | null;
  signedIn?: boolean;
  compact?: boolean;
}) {
  const billingLive = isBillingEnabled();
  return (
    <section
      data-paywall={reason}
      className="rounded-2xl border border-almi-coral/40 bg-almi-coral/5 p-5"
      aria-label="Unlock everything"
    >
      <p className="text-sm font-semibold text-almi-ink">{paywallHeadline(reason, what)}</p>
      {!compact && (
        <ul className="mt-3 space-y-1.5 text-sm text-almi-text">
          {UNLOCKS.map((u) => (
            <li key={u} className="flex items-start gap-2">
              <span aria-hidden className="mt-0.5 select-none font-bold text-almi-teal">✓</span>
              <span>{u}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 max-w-sm">
        {signedIn ? (
          <PricingCheckoutButton plan="monthly" disabled={!billingLive} label={unlockLabel()} />
        ) : (
          <Link
            href="/signup"
            className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-6 py-3 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            {unlockLabel()}
          </Link>
        )}
      </div>
      <p className="mt-2 text-xs text-almi-text-muted">Monthly. Cancel anytime from your account.</p>
    </section>
  );
}
