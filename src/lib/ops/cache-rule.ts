/**
 * THE RULE THE POST-DEPLOY CACHE CHECK APPLIES — as a pure function, so it can be
 * driven from RECORDED measurements instead of being believed.
 *
 * It lives apart from scripts/check-cache-headers.mts for one reason: a rule that
 * can only be exercised by hitting production cannot be forced red on demand, and
 * "a gate is trusted only once its red has been FORCED" is our rule, not a
 * preference. tests/cache-check-rule.test.ts feeds this the sequences production
 * actually returned, before and after GAP-055.
 *
 * ── WHAT IT MEASURES, AND THE NUMBER IT NO LONGER THROWS AWAY ───────────────
 *
 * `revalidate = false` means the cache is EMPTY AFTER EVERY DEPLOY. So
 * "how many requests until this route answered from cache" is not noise on the
 * way to a verdict — it is the route's PER-DEPLOY WARM-UP COST, and at 240,327
 * URLs it is the number Gate C is about. A route that needs three requests is
 * 50% dearer to warm than one that needs two, every single deploy.
 *
 * An earlier version asserted only "the last request must be HIT" and printed
 * nothing else. That discarded the measurement and let a 3 -> 6 regression pass
 * in silence.
 *
 * ── THE FOUR OUTCOMES ───────────────────────────────────────────────────────
 *
 *   REPORT   requestsToFirstHit, always, pass or fail
 *   FAIL     no HIT anywhere in the sequence          — the route is not cached
 *   FAIL     Cache-Control carries private or no-store — ABSOLUTE, never relaxed
 *   FAIL     requestsToFirstHit exceeds WARMUP_CEILING — the silent regression
 */

/**
 * 🔴 HOW MANY REQUESTS A ROUTE MAY TAKE TO ANSWER FROM CACHE AFTER A DEPLOY.
 *
 * MEASURED ON PRODUCTION, TWICE, ON TWO SEPARATE COLD CACHES. Each deployment
 * gets its own ISR cache, so each post-deploy run is one — and only one —
 * opportunity to see this. Both runs, 10 September 2026:
 *
 *                                 run 34428615639        run 34429507516
 *                                 commit 908b5aa         commit 7383ff7
 *   /                             PRERENDER HIT HIT      PRERENDER HIT HIT HIT     → 2
 *   /nursing                      PRERENDER HIT HIT      PRERENDER HIT HIT HIT     → 2
 *   /nursing/from-india           MISS MISS HIT          MISS MISS HIT HIT         → 3
 *   /nursing/from-india/uk-nmc    MISS MISS HIT          MISS MISS HIT HIT         → 3
 *   /register/uk-nmc              MISS MISS HIT          MISS MISS HIT HIT         → 3
 *
 * IDENTICAL ACROSS BOTH: 2, 2, 3, 3, 3. Two populations, and both are predictable
 * from the mechanism rather than read off the result — routes prerendered at
 * build time answer from cache on the SECOND request; routes filled on demand
 * (`fallback: null`) need render + durable ISR write, then a CDN fill, then a
 * hit — the THIRD. A number that repeats on two independent cold caches, and
 * that the mechanism predicts in advance, is a measurement rather than a
 * coincidence.
 *
 * The ceiling is FOUR: today's worst case plus exactly one request of slack.
 *
 * Why not three, which is what we measure? Because a threshold sitting exactly on
 * the observed value has no headroom, and a check one step from a false alarm
 * eventually raises one — and a guard that cries wolf gets switched off. That is
 * the A7 mistake (a band whose edge sat 0.1s from our own mean) and it is not
 * repeated here.
 *
 * Why not six or eight? Because the regression this is here to catch is exactly
 * "three quietly became six". A ceiling that permits six cannot see it.
 *
 * ⚠️ THIS NUMBER MOVES ONLY WITH A NEW MEASUREMENT, in the same edit, with the
 * evidence written above it. It is never raised to make a red run green.
 */
export const WARMUP_CEILING = 4;

export type CacheVerdict = {
  /** 1-based index of the first HIT, or null if the sequence never hit. */
  requestsToFirstHit: number | null;
  breaches: string[];
};

/** `x-vercel-cache` values that mean "served from cache". PRERENDER is a hit on
 *  a build-time page but it is the FIRST fill of the edge, so it is not counted
 *  as the route being warm — the request after it is. */
const HIT = "HIT";

export function judgePublicRoute(input: {
  label: string;
  caches: readonly (string | null)[];
  cacheControl: string | null;
}): CacheVerdict {
  const { label, caches, cacheControl } = input;
  const breaches: string[] = [];

  const idx = caches.findIndex((c) => c === HIT);
  const requestsToFirstHit = idx === -1 ? null : idx + 1;

  if (requestsToFirstHit === null) {
    breaches.push(
      `${label} is NOT CACHED — x-vercel-cache was ${caches.map((c) => c ?? "-").join(", ")} across ` +
        `${caches.length} requests and never hit. Every request to this shape runs a function, ` +
        "including every crawler visit. Look for a cookie/header read in a LAYOUT above this " +
        "route (GAP-055), not in the page.",
    );
  } else if (requestsToFirstHit > WARMUP_CEILING) {
    breaches.push(
      `${label} took ${requestsToFirstHit} requests to answer from cache (ceiling ${WARMUP_CEILING}). ` +
        "It does cache, so this is not the GAP-055 defect — it is a WARM-UP REGRESSION, and the " +
        "cache is empty again after every deploy, so this cost is paid per deploy across the " +
        "whole URL space.",
    );
  }

  const cc = cacheControl ?? "";
  // ABSOLUTE. `private` forbids any shared cache from keeping the response and
  // `no-store` forbids storing it at all; neither is ever acceptable on a public
  // page, whatever the hit sequence looked like.
  if (/\bprivate\b/i.test(cc) || /\bno-store\b/i.test(cc)) {
    breaches.push(
      `${label} is served with "${cc}" — \`private\`/\`no-store\` forbids the CDN from keeping it ` +
        "at all. A public page must not carry them.",
    );
  }

  return { requestsToFirstHit, breaches };
}
