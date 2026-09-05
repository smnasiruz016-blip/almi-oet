import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { priceIdToPlanLabel } from "@/lib/billing/plans";
import { OFFER } from "@/lib/billing/offer";

/** The free-trial length, in days — now sourced from the OFFER config so trial
 *  length, price and caps all move together. Still EXPORTED, because
 *  gate:claims checks the public copy against the very value Stripe is handed
 *  at checkout, and a gate reading its own copy of a number proves nothing. */
export const TRIAL_PERIOD_DAYS = OFFER.trialDays;

let cachedClient: Stripe | null = null;

export function getStripeClient(): Stripe {
  if (cachedClient) return cachedClient;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key.length < 20 || key === "TODO_FOUNDER_PROVIDES") {
    throw new Error("STRIPE_SECRET_KEY is missing or invalid");
  }
  // Don't override apiVersion — the SDK pins its own. Pinning a different
  // version against the SDK's type defs causes type errors when the SDK upgrades.
  cachedClient = new Stripe(key, { typescript: true });
  return cachedClient;
}

function getPublicBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL ?? "https://almioet.almiworld.com"
  );
}

/**
 * Lazily creates a Stripe customer for the user on first checkout.
 * Subsequent checkouts reuse the same customer record so Stripe dashboards
 * and the Customer Portal stay coherent.
 */
export async function getOrCreateStripeCustomer(input: {
  userId: string;
  email: string;
  name: string | null;
}): Promise<string> {
  const existing = await prisma.user.findUnique({
    where: { id: input.userId },
    select: { stripeCustomerId: true },
  });
  if (existing?.stripeCustomerId) return existing.stripeCustomerId;

  const stripe = getStripeClient();
  const customer = await stripe.customers.create({
    email: input.email,
    name: input.name ?? undefined,
    metadata: { userId: input.userId, product: "almi-oet" },
  });

  await prisma.user.update({
    where: { id: input.userId },
    data: { stripeCustomerId: customer.id },
  });

  return customer.id;
}

export async function createCheckoutSession(input: {
  userId: string;
  email: string;
  name: string | null;
  priceId: string;
}): Promise<{ url: string }> {
  const planLabel = priceIdToPlanLabel(input.priceId);
  if (!planLabel) {
    // Caller should have validated; defense in depth.
    throw new Error("Unsupported priceId");
  }

  const customerId = await getOrCreateStripeCustomer({
    userId: input.userId,
    email: input.email,
    name: input.name,
  });

  const baseUrl = getPublicBaseUrl();
  const stripe = getStripeClient();
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: input.priceId, quantity: 1 }],
    // Stated explicitly rather than left to the Stripe default. Card-first is
    // the whole model here, and a silent default change would turn the trial
    // into a no-card trial without a line of code moving.
    payment_method_collection: "always",
    subscription_data: {
      trial_period_days: TRIAL_PERIOD_DAYS,
      metadata: { userId: input.userId, plan: planLabel, product: "almi-oet" },
    },
    metadata: { userId: input.userId, plan: planLabel, product: "almi-oet" },
    allow_promotion_codes: true,
    success_url: `${baseUrl}/account?upgraded=true`,
    cancel_url: `${baseUrl}/pricing?cancelled=true`,
  });

  if (!session.url) {
    throw new Error("Stripe did not return a Checkout URL");
  }

  return { url: session.url };
}

export async function createCustomerPortalSession(
  stripeCustomerId: string,
): Promise<{ url: string }> {
  const stripe = getStripeClient();
  const baseUrl = getPublicBaseUrl();
  const session = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${baseUrl}/account`,
  });
  return { url: session.url };
}
