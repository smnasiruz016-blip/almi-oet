import Link from "next/link";
import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/auth";
import { isBillingEnabled, isProActive } from "@/lib/billing/plans";
// Family GlobalHeader + GlobalFooter come from the root layout.
import { PricingCheckoutButton } from "./PricingCheckoutButton";
import { track } from "@/lib/analytics/track";
import { ContentCounts } from "@/components/oet/ContentCounts";

export const metadata: Metadata = {
  title: "Pricing — try free for 48 hours",
  description:
    "AlmiOET Pro — try free for 48 hours, no card, then $12/month, cancel anytime. Honest AI feedback on the OET Writing letter and Speaking role-plays, full-length practice, and per-sub-test estimates on the 0–500 scale, graded A, B, C+ or C.",
};

const FEATURES = [
  "Honest AI feedback on the OET Writing letter and Speaking role-plays",
  "Full-length practice across all four sub-tests",
  "Per-sub-test estimates on the 0–500 scale, graded A, B, C+ or C, shown as ranges (never a fabricated overall)",
  "Adaptive practice that adjusts to your level",
  "Original material — never copied from OET",
  "Cancel anytime from your account",
];

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ cancelled?: string }>;
}) {
  // The step before the card, where price objections show up. A view, not a
  // conversion — checkout_started is fired by the checkout route, and
  // trial_started only ever by the Stripe webhook.
  track("pricing_view", { path: "/pricing" });
  const user = await getCurrentUser();
  const params = await searchParams;
  const billingLive = isBillingEnabled();

  return (
    <div className="flex flex-1 flex-col bg-almi-bg">
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-almi-ink">Try free for 48 hours. Then $12/month.</h1>
          <p className="mt-3 text-base text-almi-text-muted">
            One subscription. Honest AI feedback and full-length practice. Cancel anytime.
          </p>
          {/* RR-345: what the subscription holds, counted from the live bank */}
          <ContentCounts className="mt-3 text-base" />
        </div>

        {params.cancelled && (
          <p className="mx-auto mt-6 max-w-md rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-center text-sm text-almi-text">
            Checkout cancelled. You can try again whenever you&apos;re ready.
          </p>
        )}

        {!billingLive && (
          <p className="mx-auto mt-6 max-w-md rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-center text-sm text-almi-text-muted">
            Billing is in setup. Subscriptions open shortly — leave your email on the homepage to be notified.
          </p>
        )}

        <div className="mx-auto mt-10 grid max-w-md gap-6">
          <PlanCard
            name="Pro"
            price="$12"
            period="/month"
            blurb="One subscription. Cancel anytime."
            features={FEATURES}
            plan="monthly"
            isLoggedIn={Boolean(user)}
            hasPlan={Boolean(user && isProActive(user))}
            billingLive={billingLive}
            featured
          />
        </div>

        <p className="mt-10 text-center text-xs text-almi-text-muted">
          The 48-hour try needs no card. When you unlock everything, $12 is charged at checkout and then monthly; cancel anytime from your account.
        </p>
      </main>
    </div>
  );
}

function PlanCard({
  name,
  price,
  period,
  blurb,
  features,
  plan,
  isLoggedIn,
  hasPlan,
  billingLive,
  featured,
}: {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  plan: "monthly" | "yearly";
  isLoggedIn: boolean;
  /** RR-345 (D5): already on a plan — the card points to "Manage or cancel my plan", never to a second checkout */
  hasPlan: boolean;
  billingLive: boolean;
  featured?: boolean;
}) {
  return (
    <div
      className={
        "rounded-2xl border bg-almi-paper p-8 shadow-sm " +
        (featured ? "border-almi-coral/40 ring-2 ring-almi-coral/20" : "border-almi-bg-peach")
      }
    >
      {featured && (
        <p className="mb-3 inline-block rounded-md bg-almi-coral px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-almi-ink">
          Best value
        </p>
      )}
      <h2 className="text-xl font-semibold text-almi-ink">{name}</h2>
      <p className="mt-2">
        <span className="text-4xl font-bold text-almi-ink">{price}</span>
        <span className="text-almi-text-muted">{period}</span>
      </p>
      <p className="mt-2 text-sm text-almi-text-muted">{blurb}</p>

      <ul className="mt-6 space-y-2 text-sm text-almi-text">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-almi-teal" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        {!isLoggedIn ? (
          <Link
            href={`/signup?next=${encodeURIComponent(`/pricing?plan=${plan}`)}`}
            className="inline-flex w-full min-h-[44px] items-center justify-center bg-almi-coral px-6 py-3 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep"
            style={{ borderRadius: 9999 }}
          >
            Try free for 48 hours — no card
          </Link>
        ) : hasPlan ? (
          <Link
            href="/account"
            className="inline-flex w-full min-h-[44px] items-center justify-center border border-almi-ink/15 bg-almi-paper px-6 py-3 text-sm font-semibold text-almi-ink hover:border-almi-coral"
            style={{ borderRadius: 9999 }}
          >
            You have a plan — manage or cancel it
          </Link>
        ) : (
          <PricingCheckoutButton plan={plan} disabled={!billingLive} />
        )}
      </div>
    </div>
  );
}
