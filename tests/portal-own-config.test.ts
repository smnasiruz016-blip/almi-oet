import { describe, it, expect } from "vitest";
import { findOetPortalConfig, ensureOetPortalConfig, oetPortalParams, PORTAL_TAG } from "@/lib/billing/portal-config";

/* RR-345 · "Manage or cancel my plan" opens AlmiOET's OWN portal configuration — never the shared Stripe account's default one */
function fakeStripe(configs: Array<Record<string, unknown>>, prices: Record<string, { product: string; active?: boolean; recurring?: object | null }> = {}) {
  const created: unknown[] = [];
  const stripe = {
    billingPortal: {
      configurations: {
        list: async () => ({ data: configs }),
        create: async (p: unknown) => { created.push(p); return { id: "bpc_new_oet" }; },
      },
    },
    prices: { retrieve: async (id: string) => { const p = prices[id]; if (!p) throw new Error("No such price"); return { id, active: p.active ?? true, recurring: p.recurring === undefined ? { interval: "month" } : p.recurring, product: p.product }; } },
  };
  return { stripe: stripe as never, created };
}

describe("RR-345 · AlmiOET's own customer portal", () => {
  it("finds only AlmiOET's tagged configuration — never the default, never another product's", async () => {
    const { stripe } = fakeStripe([
      { id: "bpc_default", active: true, is_default: true, metadata: {} },
      { id: "bpc_visibility", active: true, is_default: false, metadata: { product: "almi-visibility" } },
      { id: "bpc_oet_old", active: false, is_default: false, metadata: { product: "almi-oet" } },
      { id: "bpc_oet", active: true, is_default: false, metadata: { product: "almi-oet" } },
    ]);
    expect(await findOetPortalConfig(stripe)).toBe("bpc_oet");
    const none = fakeStripe([{ id: "bpc_default", active: true, is_default: true, metadata: { product: "almi-oet" } }]);
    expect(await findOetPortalConfig(none.stripe)).toBe(null);
  });

  it("makes it ONCE: an existing one is used; otherwise one is made with AlmiOET's prices only, cancel at the period's end, tagged", async () => {
    const has = fakeStripe([{ id: "bpc_oet", active: true, is_default: false, metadata: { product: "almi-oet" } }]);
    expect(await ensureOetPortalConfig(has.stripe, { priceIds: ["price_m"], baseUrl: "https://almioet.almiworld.com" })).toEqual({ id: "bpc_oet", created: false });
    expect(has.created).toHaveLength(0);
    const fresh = fakeStripe([], { price_m: { product: "prod_oet" }, price_y: { product: "prod_oet" }, price_gone: { product: "prod_oet", active: false } });
    expect(await ensureOetPortalConfig(fresh.stripe, { priceIds: ["price_m", "price_y", "price_gone", "price_unknown", ""], baseUrl: "https://almioet.almiworld.com" })).toEqual({ id: "bpc_new_oet", created: true });
    const p = fresh.created[0] as ReturnType<typeof oetPortalParams>;
    expect(p.metadata).toEqual({ [PORTAL_TAG.key]: "almi-oet" });
    expect(p.features.subscription_cancel).toMatchObject({ enabled: true, mode: "at_period_end" });
    expect(p.features.subscription_update).toMatchObject({ enabled: true, products: [{ product: "prod_oet", prices: ["price_m", "price_y"] }] });
    expect(p.default_return_url).toBe("https://almioet.almiworld.com/account");
  });

  it("the portal session names the configuration (the account's default is never used)", async () => {
    const src = (await import("node:fs")).readFileSync("src/lib/billing/stripe.ts", "utf8");
    const block = src.slice(src.indexOf("export async function createCustomerPortalSession"));
    expect(block).toMatch(/ensureOetPortalConfig\(stripe/);
    expect(block).toMatch(/billingPortal\.sessions\.create\(\{\s*customer: stripeCustomerId,\s*configuration,/);
  });
});
