import type Stripe from "stripe";

/**
 * RR-345 (owner, 29 Oct 2026) · ALMIOET'S OWN "Manage or cancel my plan" PORTAL.
 *
 * 🔴 The AlmiWorld Stripe account is SHARED by about twenty products. Its DEFAULT
 * customer-portal configuration belongs to none of them: a portal session made
 * without `configuration` shows whatever the default allows — another product's
 * plans to switch to, or none, and a cancel rule nobody chose for AlmiOET. So a
 * learner's portal ALWAYS names AlmiOET's own configuration, found by its tag
 * (metadata.product = "almi-oet"), made once on the first click if it is not
 * there yet. The default configuration is never read for use and never changed.
 *
 * What the learner can do there: cancel (at the end of the paid period — the
 * plan stays on until then), switch between AlmiOET's own prices, change the
 * card, see invoices, change the e-mail and address.
 */
export const PORTAL_TAG = { key: "product", value: "almi-oet" } as const;

type PortalApi = Pick<Stripe, "billingPortal" | "prices">;

/** AlmiOET's own configuration's id, or null — never the default one. */
export async function findOetPortalConfig(stripe: PortalApi): Promise<string | null> {
  const list = await stripe.billingPortal.configurations.list({ limit: 100, active: true });
  const mine = list.data.find((c) => c.active && !c.is_default && c.metadata?.[PORTAL_TAG.key] === PORTAL_TAG.value);
  return mine?.id ?? null;
}

/** The configuration Stripe is asked to make: AlmiOET's own prices only, cancel at the period's end. */
export function oetPortalParams(products: { product: string; prices: string[] }[], baseUrl: string): Stripe.BillingPortal.ConfigurationCreateParams {
  return {
    business_profile: { headline: "AlmiOET — manage or cancel your plan", privacy_policy_url: `${baseUrl}/privacy`, terms_of_service_url: `${baseUrl}/terms` },
    default_return_url: `${baseUrl}/account`,
    features: {
      invoice_history: { enabled: true },
      payment_method_update: { enabled: true },
      customer_update: { enabled: true, allowed_updates: ["email", "address"] },
      subscription_cancel: { enabled: true, mode: "at_period_end", cancellation_reason: { enabled: true, options: ["too_expensive", "missing_features", "unused", "other"] } },
      subscription_update: products.length ? { enabled: true, default_allowed_updates: ["price"], proration_behavior: "create_prorations", products } : { enabled: false },
    },
    metadata: { [PORTAL_TAG.key]: PORTAL_TAG.value },
  };
}

/**
 * Find AlmiOET's configuration, or make it once from the prices AlmiOET sells
 * (STRIPE_PRICE_ID_MONTHLY / _YEARLY). A price Stripe does not know is left out
 * of plan switching, never guessed.
 */
export async function ensureOetPortalConfig(stripe: PortalApi, { priceIds, baseUrl }: { priceIds: string[]; baseUrl: string }): Promise<{ id: string; created: boolean }> {
  const found = await findOetPortalConfig(stripe);
  if (found) return { id: found, created: false };
  const byProduct = new Map<string, string[]>();
  for (const id of priceIds.filter(Boolean)) {
    try {
      const p = await stripe.prices.retrieve(id);
      const product = typeof p.product === "string" ? p.product : p.product?.id;
      if (p.active && p.recurring && product) byProduct.set(product, [...(byProduct.get(product) ?? []), id]);
    } catch { /* left out of switching */ }
  }
  const products = [...byProduct.entries()].map(([product, prices]) => ({ product, prices }));
  const made = await stripe.billingPortal.configurations.create(oetPortalParams(products, baseUrl));
  return { id: made.id, created: true };
}
