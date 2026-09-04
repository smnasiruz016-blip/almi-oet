import { NextResponse } from "next/server";
import Stripe from "stripe";

// Read-only billing self-check. OWNER ONLY — guarded by ADMIN_API_SECRET
// (header x-admin-secret), FAIL-CLOSED: if the secret is unset this endpoint
// always 401s, so it is never open by default. Same guard as /api/admin/stats.
//
// Exposes no secret values and no secret SHAPE — only key MODE (live/test),
// booleans, and price IDs. Any value that is not a clean `price_…` id is
// redacted, so a mis-pasted secret can never be echoed.
//
// 🔴 This comment used to say "Exposes NO secret values" while the handler was
// returning `keyLen: key.length` and `keyLast4: key.slice(-4)` to anyone who
// opened the URL. The comment is not what holds this line now — `gate:no-secret-
// shape` is. Do not re-add a length, a suffix, or a hash of a credential here.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function keyMode(k: string): string {
  if (!k) return "missing";
  if (k.startsWith("sk_live_")) return "live";
  if (k.startsWith("sk_test_")) return "test";
  return "unknown";
}

const safeId = (v: string): string =>
  /^price_[A-Za-z0-9]+$/.test(v) ? v : "REDACTED_NON_PRICE_VALUE";

export async function GET(req: Request) {
  // Fail-closed: no ADMIN_API_SECRET configured means no access, ever.
  const adminSecret = process.env.ADMIN_API_SECRET;
  if (!adminSecret || req.headers.get("x-admin-secret") !== adminSecret) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const key = process.env.STRIPE_SECRET_KEY ?? "";
  const mode = keyMode(key);
  const priceVars = ["STRIPE_PRICE_ID_MONTHLY", "STRIPE_PRICE_ID_YEARLY", "STRIPE_PRICE_ID"] as const;
  const present: Record<string, string> = {};
  for (const v of priceVars) {
    const val = process.env[v];
    if (val) present[v] = val;
  }

  const out: Record<string, unknown> = {
    keyPresent: Boolean(key),
    keyMode: mode,
    priceVarsPresent: Object.keys(present),
    // `keyClean` is a BOOLEAN about hygiene — no length, no characters. The
    // length and the last four characters used to sit here; they answered no
    // question that keyMode / keyClean / keyValid do not already answer, and
    // they were being served without auth. See gate:no-secret-shape.
    keyClean: key === key.trim() && !/\s/.test(key), // no leading/trailing/inner whitespace
    appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "(unset→fallback)",
    appUrlValid: (() => { try { new URL((process.env.NEXT_PUBLIC_APP_URL ?? "https://almioet.almiworld.com") + "/account?upgraded=true"); return true; } catch { return false; } })(),
  };
  if (!key) {
    out.ok = false;
    out.reason = "STRIPE_SECRET_KEY missing";
    return NextResponse.json(out);
  }

  const stripe = new Stripe(key);

  let keyValid = false;
  try {
    await stripe.balance.retrieve();
    keyValid = true;
  } catch (e) {
    out.keyError = (e as { code?: string; type?: string }).code || (e as { type?: string }).type || "auth_failed";
  }
  out.keyValid = keyValid;

  let portalReachable = false;
  try {
    const cfgs = await stripe.billingPortal.configurations.list({ limit: 1 });
    portalReachable = cfgs.data.some((c) => c.active);
  } catch {
    portalReachable = false;
  }
  out.portalReachable = portalReachable;

  const prices: Record<string, unknown> = {};
  for (const [v, id] of Object.entries(present)) {
    const clean = /^price_[A-Za-z0-9]+$/.test(id);
    try {
      const p = await stripe.prices.retrieve(id);
      prices[v] = {
        priceId: safeId(id),
        cleanFormat: clean,
        valid: true,
        active: p.active,
        recurring: p.recurring?.interval ?? "one-time",
        amount: p.unit_amount,
        modeMatch: (mode === "live") === p.livemode,
      };
    } catch (e) {
      prices[v] = { priceId: safeId(id), cleanFormat: clean, valid: false, error: (e as { code?: string }).code || "retrieve_failed" };
    }
  }
  out.prices = prices;

  const anyPrice = Object.keys(present).length > 0;
  const pricesOk = anyPrice && Object.values(prices).every(
    (p) => (p as { valid?: boolean }).valid && (p as { modeMatch?: boolean }).modeMatch && (p as { cleanFormat?: boolean }).cleanFormat,
  );
  out.ok = keyValid && portalReachable && pricesOk;
  return NextResponse.json(out);
}
