/**
 * 🔴 THE ONE PLACE THIS PROJECT DECIDES WHETHER A DATABASE IS THROWAWAY.
 *
 * A URL is disposable only if it is on loopback, names no hosted provider, and
 * is not this machine's own DATABASE_URL. Anything else is treated as
 * production — including anything it cannot parse, because "I do not recognise
 * this" must never mean "go ahead".
 *
 * ── WHY IT IS ITS OWN FILE ──────────────────────────────────────────────────
 *
 * It was inside `scripts/e2e/disposable-db.mts`, which imports
 * `embedded-postgres` at the top — a devDependency. Importing the predicate from
 * a production script would have dragged that in with it. It has no imports of
 * its own so anything can use it, and there is exactly one definition of
 * "throwaway" rather than two that can drift.
 *
 * ── WHY THE PRODUCTION-WRITE GUARD NEEDS IT ─────────────────────────────────
 *
 * `scripts/prod-write-guard.ts` demands `--confirm` AND `ALLOW_PROD_WRITE=1`
 * before a production write. On 4 September 2026 that guard turned the e2e walk
 * red: `retire-legacy.spec.ts` and `retire-part-c.spec.ts` run the REAL retire
 * script — deliberately, so the walk exercises the thing that runs in anger —
 * against a THROWAWAY database, and the guard refused it.
 *
 * The guard was right to fire and the rule was wrong: it said "before any
 * write", and it should say "before any write TO PRODUCTION". A throwaway
 * database on loopback is not production, and making the walk set
 * `ALLOW_PROD_WRITE=1` would have taught the habit the guard exists to prevent.
 */

const LOOPBACK = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);

/** Hosts that must never be treated as throwaway, whatever else is true. */
const HOSTED = /neon\.tech|supabase|amazonaws|azure|vercel-storage|\.render\.com/i;

/**
 * Why this URL is NOT throwaway, or null when it is.
 * Fails closed: an unparseable or missing URL is production.
 */
export function whyNotDisposable(url: string | undefined): string | null {
  if (!url) return "no database URL given";
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return "the database URL does not parse";
  }
  if (HOSTED.test(url)) return `the URL names a hosted provider (${parsed.hostname})`;
  if (!LOOPBACK.has(parsed.hostname)) return `the host is "${parsed.hostname}", not loopback`;
  return null;
}

/**
 * 🔴 THE SECOND CHECK, AND WHY IT IS NOT IN THE FIRST ONE.
 *
 * "the target must not be this machine's own DATABASE_URL" only makes sense when
 * a caller hands over a URL to compare against the ambient one — which is what
 * the e2e runner does. It is meaningless inside a process the runner has
 * SPAWNED with DATABASE_URL already set to the throwaway server: there the two
 * are equal by construction, and folding this into whyNotDisposable made the
 * production-write guard call a loopback test database "production" and refuse.
 *
 * So the two questions stay apart: is this URL throwaway (above), and is the
 * caller pointing at the machine's own database (here).
 */
export function isThisMachinesDatabase(url: string): boolean {
  const own = process.env.DATABASE_URL;
  return Boolean(own && url.trim() === own.trim());
}

export const isDisposableUrl = (url: string | undefined): boolean => whyNotDisposable(url) === null;
