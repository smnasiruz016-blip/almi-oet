/**
 * THE ONE DOOR ANALYTICS LEAVES BY.
 *
 * Every funnel event in this product goes through `track()`. There is no second
 * way out, and gate:funnel fails the build if one appears.
 *
 * The reason is the shape this repository has now used three times — offer.ts
 * (#67), progress.ts (#63), format-date.ts (#62): one implementation cannot
 * disagree with itself. Here it buys something extra. Changing analytics
 * provider becomes an edit to ONE function instead of an audit of every call
 * site, and the decision recorded in the Section J command — our own
 * FunnelEvent table rather than GA4, because UK/EU healthcare learners would
 * meet a consent banner, and a consent banner is itself the funnel's first
 * drop-off — can be revisited without touching a single caller.
 *
 * ── 🔴 IT CANNOT THROW AND IT CANNOT BLOCK ─────────────────────────────────
 *
 * Analytics failing must never cost a learner their submission. So:
 *
 *   · every call is wrapped — a sink that throws is swallowed here
 *   · nothing is awaited by the caller; `track()` returns void, not a promise
 *
 * AND THAT IS PROVED, NOT ASSERTED. tests/analytics-never-blocks.test.ts makes
 * the sink throw on purpose and checks that /api/oet/submit still answers 200
 * with a complete gradeEstimate. A comment promising "this is safe" is worth
 * nothing; that is what the "two minutes" prompt and the cap-ordering comment
 * both taught this product.
 *
 * ── TODAY'S SINK ────────────────────────────────────────────────────────────
 *
 * A structured server log line prefixed ANALYTICS — the same approach the Stripe
 * webhook already uses for its own trail. Zero schema change, zero production
 * risk, zero cost. PR 10 replaces the body of `emit()` with a write to the
 * FunnelEvent table; no caller changes.
 */
import { FUNNEL_EVENTS, FORBIDDEN_KEYS, type FunnelEventName } from "@/lib/analytics/events";

export type FunnelProps = Record<string, string | number | boolean | null | undefined>;

/**
 * 🔴 A LAST GUARD AT RUNTIME, NOT A SUBSTITUTE FOR THE GATE.
 *
 * gate:funnel catches a forbidden key at build time by reading the source. This
 * catches one that arrives through a variable, which the gate cannot see — a
 * `props` object spread from somewhere else, for instance. It drops the key and
 * carries on rather than throwing, because refusing to record an event is a
 * smaller harm than breaking the request that triggered it.
 */
function stripForbidden(props: FunnelProps): FunnelProps {
  const out: FunnelProps = {};
  for (const [k, v] of Object.entries(props)) {
    if ((FORBIDDEN_KEYS as readonly string[]).includes(k)) continue;
    out[k] = v;
  }
  return out;
}

/** Swappable so a test can make the sink fail on purpose. PR 10 replaces the
 *  default with a FunnelEvent insert. */
let emit: (line: string) => void = (line) => {
  console.log(line);
};

/** Test-only seam. Returns the previous sink so a test can restore it. */
export function __setAnalyticsSink(next: (line: string) => void): (line: string) => void {
  const previous = emit;
  emit = next;
  return previous;
}

export function track(name: FunnelEventName, props: FunnelProps = {}): void {
  try {
    // An unknown name is a programming error, not a runtime one. The gate fails
    // the build for it; here it is simply not emitted, so a typo can never
    // silently become a new event name in the data.
    if (!(name in FUNNEL_EVENTS)) return;
    const safe = stripForbidden(props);
    emit(
      `ANALYTICS ${JSON.stringify({ name, at: new Date().toISOString(), props: safe })}`,
    );
  } catch {
    // Deliberately silent. An analytics failure is not a user-facing failure,
    // and re-throwing here would turn a logging problem into a lost submission.
  }
}
