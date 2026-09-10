/**
 * THE POST-DEPLOY CACHE RULE, DRIVEN FROM RECORDED PRODUCTION MEASUREMENTS.
 *
 * 🔴 WHY THIS FILE EXISTS. The rule was changed on 10 September 2026 — the hour
 * after it first went red. That is the shape of the most dangerous edit there is:
 * *a gate that goes red gets rewritten instead of being believed.* The test for
 * it is not "does the new rule sound right", it is:
 *
 *   **DOES THE NEW RULE STILL FAIL THE STATE IT WAS BUILT TO CATCH?**
 *
 * So every sequence below is a REAL measurement, copied from a run, with the run
 * named. Nothing here is invented to make the rule look good.
 *
 * The claim being tested is the one I made when I changed it: "it keeps all of
 * its power over the actual defect". A claim, until it is forced.
 */
import { describe, expect, it } from "vitest";
import { judgePublicRoute, WARMUP_CEILING } from "@/lib/ops/cache-rule";

/** Cache-Control exactly as production served it BEFORE the GAP-055 fix. */
const CC_BROKEN = "private, no-cache, no-store, max-age=0, must-revalidate";
/** Cache-Control exactly as production serves it AFTER the fix. */
const CC_FIXED = "public, max-age=0, must-revalidate";

describe("🔴 the state the rule was built to catch — RECORDED, before the GAP-055 fix", () => {
  // Measured on https://almioet.almiworld.com, 10 September 2026, BEFORE commit
  // 908b5aa. The same four shapes, three requests each, every one a MISS.
  const BEFORE: [string, string[]][] = [
    ["/nursing", ["MISS", "MISS", "MISS"]],
    ["/nursing/from-india", ["MISS", "MISS", "MISS"]],
    ["/nursing/from-india/uk-nmc", ["MISS", "MISS", "MISS"]],
    ["/register/uk-nmc", ["MISS", "MISS", "MISS"]],
  ];

  it.each(BEFORE)("%s — the NEW rule still fails it", (label, caches) => {
    const v = judgePublicRoute({ label, caches, cacheControl: CC_BROKEN });
    expect(v.requestsToFirstHit).toBeNull();
    // Two independent breaches: never cached, AND a Cache-Control that forbids
    // caching. Either alone is a failure; both is what production looked like.
    expect(v.breaches.length).toBe(2);
    expect(v.breaches.join(" ")).toContain("NOT CACHED");
    expect(v.breaches.join(" ")).toContain("no-store");
  });

  it("and it fails even if the header had been fine — the sequence alone is enough", () => {
    const v = judgePublicRoute({
      label: "/nursing/from-india/uk-nmc",
      caches: ["MISS", "MISS", "MISS"],
      cacheControl: CC_FIXED,
    });
    expect(v.breaches.length).toBe(1);
    expect(v.breaches[0]).toContain("NOT CACHED");
  });

  it("…and on the header alone, even if it cached — private is ABSOLUTE", () => {
    const v = judgePublicRoute({
      label: "/anything",
      caches: ["MISS", "HIT", "HIT"],
      cacheControl: CC_BROKEN,
    });
    expect(v.requestsToFirstHit).toBe(2);
    expect(v.breaches.length).toBe(1);
    expect(v.breaches[0]).toContain("private");
  });
});

describe("the state that is CORRECT — recorded on TWO separate cold caches", () => {
  // Each deployment gets its own ISR cache, so each post-deploy run is one — and
  // only one — chance to see a warm-up. Both of the runs that have happened:
  //
  //   run 34428615639, commit 908b5aa   (3 requests, the rule's first version)
  //   run 34429507516, commit 7383ff7   (4 requests, after the calibration)
  //
  // The numbers are IDENTICAL across both, and the mechanism predicts them in
  // advance: build-time pages hit on the 2nd request, on-demand pages on the 3rd.
  const AFTER: [string, string[], number][] = [
    // run 34428615639
    ["908b5aa /", ["PRERENDER", "HIT", "HIT"], 2],
    ["908b5aa /nursing", ["PRERENDER", "HIT", "HIT"], 2],
    ["908b5aa /nursing/from-india", ["MISS", "MISS", "HIT"], 3],
    ["908b5aa /nursing/from-india/uk-nmc", ["MISS", "MISS", "HIT"], 3],
    ["908b5aa /register/uk-nmc", ["MISS", "MISS", "HIT"], 3],
    // run 34429507516 — the second cold cache, same answers
    ["7383ff7 /", ["PRERENDER", "HIT", "HIT", "HIT"], 2],
    ["7383ff7 /nursing", ["PRERENDER", "HIT", "HIT", "HIT"], 2],
    ["7383ff7 /nursing/from-india", ["MISS", "MISS", "HIT", "HIT"], 3],
    ["7383ff7 /nursing/from-india/uk-nmc", ["MISS", "MISS", "HIT", "HIT"], 3],
    ["7383ff7 /register/uk-nmc", ["MISS", "MISS", "HIT", "HIT"], 3],
  ];

  it.each(AFTER)("%s passes, and reports its warm-up", (label, caches, expected) => {
    const v = judgePublicRoute({ label, caches, cacheControl: CC_FIXED });
    expect(v.breaches).toEqual([]);
    expect(v.requestsToFirstHit).toBe(expected);
  });

  it("the two cold runs agree — which is why the ceiling rests on a measurement, not one reading", () => {
    const run1 = AFTER.filter(([l]) => l.startsWith("908b5aa")).map(([, c]) => judgePublicRoute({ label: "x", caches: c, cacheControl: CC_FIXED }).requestsToFirstHit);
    const run2 = AFTER.filter(([l]) => l.startsWith("7383ff7")).map(([, c]) => judgePublicRoute({ label: "x", caches: c, cacheControl: CC_FIXED }).requestsToFirstHit);
    expect(run1).toEqual([2, 2, 3, 3, 3]);
    expect(run2).toEqual([2, 2, 3, 3, 3]);
    expect(Math.max(...(run1 as number[]))).toBe(WARMUP_CEILING - 1);
  });

  it("the warm-up number is what the OLD rule threw away", () => {
    // The previous rule asserted only that the LAST request was a HIT. Both of
    // these satisfy it; they cost different amounts on every deploy, across
    // 240,327 URLs, and only one of them is reported by a pass/fail check.
    const cheap = judgePublicRoute({ label: "a", caches: ["PRERENDER", "HIT", "HIT"], cacheControl: CC_FIXED });
    const dear = judgePublicRoute({ label: "b", caches: ["MISS", "MISS", "HIT"], cacheControl: CC_FIXED });
    expect(cheap.breaches).toEqual([]);
    expect(dear.breaches).toEqual([]);
    expect(dear.requestsToFirstHit).toBeGreaterThan(cheap.requestsToFirstHit!);
  });
});

describe("🔴 the SILENT regression the old rule let through", () => {
  it("three quietly becoming six is caught by the ceiling, not by the last request", () => {
    const caches = ["MISS", "MISS", "MISS", "MISS", "MISS", "HIT"];
    // The old rule — "the last request must be HIT" — passes this without a word.
    expect(caches[caches.length - 1]).toBe("HIT");
    const v = judgePublicRoute({ label: "/nursing/from-india/uk-nmc", caches, cacheControl: CC_FIXED });
    expect(v.requestsToFirstHit).toBe(6);
    expect(v.breaches.length).toBe(1);
    expect(v.breaches[0]).toContain("WARM-UP REGRESSION");
  });

  it("the ceiling has exactly one request of slack over today's worst case", () => {
    // Today's worst measured warm-up is 3. The ceiling is 4: one step of room,
    // so a slow propagation is not a false alarm, while 3 -> 6 cannot hide.
    expect(WARMUP_CEILING).toBe(4);
    const atCeiling = judgePublicRoute({
      label: "x",
      caches: ["MISS", "MISS", "MISS", "HIT"],
      cacheControl: CC_FIXED,
    });
    expect(atCeiling.breaches).toEqual([]);
    const overCeiling = judgePublicRoute({
      label: "x",
      caches: ["MISS", "MISS", "MISS", "MISS", "HIT"],
      cacheControl: CC_FIXED,
    });
    expect(overCeiling.breaches.length).toBe(1);
  });
});

describe("a route that is dynamic BY DESIGN — measured live, 10 Sep 2026", () => {
  it("/pricing fails on both counts, which is why it is not in the public list", () => {
    // Real output from pointing the check at /pricing, which is deliberately
    // dynamic (its page.tsx calls getCurrentUser directly).
    const v = judgePublicRoute({
      label: "/pricing",
      caches: ["MISS", "MISS", "MISS", "MISS"],
      cacheControl: CC_BROKEN,
    });
    expect(v.requestsToFirstHit).toBeNull();
    expect(v.breaches.length).toBe(2);
  });
});
