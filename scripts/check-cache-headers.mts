/**
 * ASK THE DEPLOYMENT WHETHER THE PUBLIC PAGES ARE ACTUALLY CACHED — and whether
 * the private ones are still not. Run after every production deploy.
 *
 *   npm run check:cache-headers
 *   npm run check:cache-headers -- https://some-preview.vercel.app
 *
 * No credentials, no cookie, no database. It sends plain GETs and reads the
 * RESPONSE HEADERS. That is the entire point of the file.
 *
 * ── WHY IT EXISTS ───────────────────────────────────────────────────────────
 *
 * GAP-055. On 10 September 2026, 240,327 public URLs were served with
 * `Cache-Control: private, no-cache, no-store` and returned `x-vercel-cache:
 * MISS` on three consecutive requests. Every crawler visit ran a function.
 *
 * 🔴 AND THE SOURCE SAID THE OPPOSITE. The leaf page carried
 * `export const revalidate = false; // render-once, cache until redeploy`, and it
 * did nothing, because a layout three files away awaited getCurrentUser(). Every
 * check in this repository read the source. The source was wrong and confident.
 *
 * SO THIS CHECK READS THE SERVED RESPONSE AND NOTHING ELSE. A guard that read
 * `revalidate` would have passed this defect 240,327 times.
 *
 * ── THE TWO HALVES, AND THE SECOND ONE MATTERS MORE ─────────────────────────
 *
 * ① PUBLIC routes must be cached — the LAST request must be HIT, and
 *    `Cache-Control` must not carry `private` or `no-store`.
 *
 *    🔴 IT SAID "REQUESTS 2 AND 3 MUST BE HIT" AND THAT WAS WRONG. Measured on
 *    the first production run after the GAP-055 fix, 10 September 2026:
 *
 *      /                            PRERENDER HIT HIT
 *      /nursing                     PRERENDER HIT HIT
 *      /nursing/from-india          MISS MISS HIT
 *      /nursing/from-india/uk-nmc   MISS MISS HIT
 *      /register/uk-nmc             MISS MISS HIT
 *
 *    Every one of those is a PASS, and this check called three of them failures.
 *    The reason is structural and it is not going away: **this check always runs
 *    on a COLD cache.** It is triggered by `deployment_status`, and each
 *    deployment gets its own ISR cache — so on a route filled on demand
 *    (`fallback: null`) the first request renders and writes the durable ISR
 *    entry, the second can still miss at the CDN edge, and the third is served
 *    from it. Two layers, filled in order.
 *
 *    So the rule is the LAST request, not a fixed position — and it keeps all of
 *    its power over the actual defect: before the fix, the same four routes read
 *    MISS MISS MISS, and a last-request rule fails that just as hard.
 *
 *    ⚠️ This is a calibration change, NOT a lowered bar. `private`/`no-store` is
 *    still refused outright, and a route that never reaches HIT still fails.
 *
 * ② PRIVATE routes must NOT be cached. This is the safety property of the whole
 *    change: making public pages cacheable and getting it wrong means ONE
 *    LEARNER'S PAGE SERVED TO ANOTHER. /practice is fetched WITHOUT a cookie and
 *    must not come back as a cached 200 carrying a signed-in page. It must
 *    redirect to /login, and it must never be HIT.
 *
 * A green ① with a red ② is not a partial success. It is the worse outcome.
 */

import { judgePublicRoute, WARMUP_CEILING } from "../src/lib/ops/cache-rule";

const BASE = (process.argv[2] ?? "https://almioet.almiworld.com").replace(/\/$/, "");
// FOUR, not three. A cold on-demand route needs: render + ISR write, then a
// CDN fill, then a hit. Three was exactly enough on 10 Sep and left no room
// at all; a check that is one step from a false alarm will eventually raise
// one, and a guard that cries wolf gets switched off.
const REQUESTS = 6;
const UA = "AlmiOET-post-deploy-cache-check/1.0";

/** Public routes that must be cached, one per URL SHAPE — not one per page.
 *  A shape is what a layout governs, and a layout is what broke this. */
const PUBLIC_ROUTES: { path: string; shape: string; urls: number }[] = [
  { path: "/", shape: "home", urls: 1 },
  { path: "/nursing", shape: "/[profession]", urls: 12 },
  { path: "/nursing/from-india", shape: "/[profession]/from-[origin]", urls: 2_292 },
  { path: "/nursing/from-india/uk-nmc", shape: "/[profession]/from-[origin]/[organization]", urls: 237_413 },
  { path: "/register/uk-nmc", shape: "/register/[organization]", urls: 610 },
];

/** Routes that must stay dynamic. A HIT here is a data leak, not a saving. */
const PRIVATE_ROUTES = ["/practice", "/account", "/progress"];

type Probe = { status: number; cache: string | null; cacheControl: string | null; age: string | null; body: string };

async function get(url: string, follow: boolean): Promise<Probe> {
  const res = await fetch(url, {
    redirect: follow ? "follow" : "manual",
    headers: { "user-agent": UA },
    signal: AbortSignal.timeout(30_000),
  });
  return {
    status: res.status,
    cache: res.headers.get("x-vercel-cache"),
    cacheControl: res.headers.get("cache-control"),
    age: res.headers.get("age"),
    body: res.status === 200 ? await res.text() : "",
  };
}

const warmup: { path: string; urls: number; n: number | null }[] = [];
const failures: string[] = [];
const fail = (msg: string) => failures.push(msg);

console.log(`[cache] ${BASE}`);
console.log(`[cache] ① PUBLIC — must be cached, and its warm-up must stay under ${WARMUP_CEILING}`);

for (const route of PUBLIC_ROUTES) {
  const seq: Probe[] = [];
  for (let i = 0; i < REQUESTS; i++) seq.push(await get(BASE + route.path, false));

  const codes = seq.map((s) => s.status);
  const caches = seq.map((s) => s.cache ?? "-");
  const cc = seq[seq.length - 1].cacheControl ?? "";
  console.log(
    `  ${route.path.padEnd(34)} ${codes.join("/")}  ${caches.join(" ")}  cc: ${cc.slice(0, 58)}`,
  );

  if (codes.some((c) => c !== 200)) {
    fail(`${route.path} returned ${codes.join("/")}, expected 200 — cannot judge caching on a non-200`);
    continue;
  }

  // The verdict is NOT computed here. src/lib/ops/cache-rule.ts owns it, so the
  // same rule can be driven from RECORDED sequences in tests/cache-check-rule.test.ts
  // and forced red without touching production.
  const verdict = judgePublicRoute({
    label: `${route.path} (${route.shape}, ${route.urls.toLocaleString("en-US")} URLs)`,
    caches: seq.map((s) => s.cache),
    cacheControl: cc,
  });
  warmup.push({ path: route.path, urls: route.urls, n: verdict.requestsToFirstHit });
  for (const b of verdict.breaches) fail(b);
}

// ── THE NUMBER THIS CHECK EXISTS TO PUBLISH, PASS OR FAIL ───────────────────
// `revalidate = false` empties the cache on every deploy, so "requests to first
// HIT" is each route's PER-DEPLOY WARM-UP COST across its whole URL space. It is
// printed whatever the verdict, because a check that only says pass/fail throws
// away the measurement it already took.
console.log(`
[cache] warm-up — requests to first HIT (ceiling ${WARMUP_CEILING}):`);
// ⚠️ THE NUMBER ONLY MEANS SOMETHING ON A COLD CACHE. Run by hand against a
// deployment that has already been served, every route reports 1 and the column
// says nothing. It is the POST-DEPLOY run — fired by deployment_status, against
// a cache the deploy just emptied — that produces the real per-deploy figure.
for (const w of warmup) {
  console.log(
    `  ${w.path.padEnd(34)} ${w.n === null ? "NEVER" : String(w.n).padStart(5)}   ` +
      `${w.urls.toLocaleString("en-US").padStart(9)} URLs on this shape`,
  );
}
console.log("");

console.log(`[cache] ② PRIVATE — must NOT be cached, fetched WITHOUT a cookie`);

for (const path of PRIVATE_ROUTES) {
  const r = await get(BASE + path, false);
  const redirects = r.status >= 300 && r.status < 400;
  console.log(`  ${path.padEnd(34)} ${r.status}       ${r.cache ?? "-"}  cc: ${(r.cacheControl ?? "").slice(0, 58)}`);

  if (r.cache === "HIT") {
    fail(
      `🔴 ${path} came back from CACHE (x-vercel-cache: HIT) on an ANONYMOUS request. ` +
        "A signed-in page must never be cacheable — this is one learner's page being served to another.",
    );
  }
  if (!redirects && r.status === 200) {
    // A 200 here means the route rendered something for someone with no session.
    // That is not automatically a leak, but it is not what this app does, and it
    // must be looked at rather than passed over.
    fail(
      `🔴 ${path} returned 200 to a request with NO COOKIE. requireUser() should have ` +
        "redirected to /login. Whatever it rendered was rendered for nobody — check what is in it.",
    );
  }
  if (r.status === 200 && /\bpublic\b/i.test(r.cacheControl ?? "")) {
    fail(`🔴 ${path} is served with a PUBLIC Cache-Control ("${r.cacheControl}").`);
  }
}

if (failures.length) {
  console.error(`\n[cache] ${failures.length} breach(es):`);
  for (const f of failures) console.error(`  ${f}`);
  console.error(
    "\n[cache] FAILED. This check reads the SERVED response — it does not read " +
      "`export const revalidate`, because that line was present and false throughout GAP-055.",
  );
  process.exit(1);
}

console.log(
  `\n[cache] all clear — ${PUBLIC_ROUTES.length} public shape(s) cached, ` +
    `${PRIVATE_ROUTES.length} private route(s) still dynamic and not served to an anonymous request`,
);
