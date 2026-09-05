/**
 * THE FUNNEL, COUNTED — steps, the drop between them, friction and churn.
 *
 * ── 🔴 THE ZERO-DENOMINATOR TRAP ───────────────────────────────────────────
 *
 * With no events at all, "how many of step 2 survived step 1" is `0 / 0`. What a
 * page does with that decides whether it tells the truth:
 *
 *     0 / 0 written naively  ->  NaN     obviously broken, but only to a developer
 *     guarded with `|| 0`    ->  0%      reads as "everyone drops off"
 *     guarded with `?? 100`  ->  100%    reads as "nothing drops off"
 *
 * ALL THREE ARE LIES, and the last is the dangerous one: a brand-new product with
 * no data would show a perfect funnel. Somebody could look at 100% and increase
 * ad spend on the strength of it.
 *
 * So a rate is `number | null`, and null means "not enough data to say". It is
 * never coerced. The page renders a dash and an explicit empty state, and
 * tests/funnel-report.test.ts asserts that no percentage is produced when the
 * denominator is zero.
 *
 * ── ORDER COMES FROM THE CATALOGUE ─────────────────────────────────────────
 *
 * FUNNEL_STEP_ORDER, FUNNEL_FRICTION_ORDER and FUNNEL_CHURN_ORDER live in
 * events.ts beside the events themselves. Which step follows which is a fact
 * about the product, not a page's layout — the same reason progress.ts (#63),
 * offer.ts (#67) and buildProgress() (#68) each ended up in one place. The e2e
 * walk asserts against the same order this page renders.
 */
import { prisma } from "@/lib/prisma";
import {
  FUNNEL_CHURN_ORDER,
  FUNNEL_EVENTS,
  FUNNEL_FRICTION_ORDER,
  FUNNEL_STEP_ORDER,
  type FunnelEventName,
} from "@/lib/analytics/events";

export type FunnelStep = {
  name: FunnelEventName;
  label: string;
  count: number;
  /**
   * Share of the PREVIOUS step that reached this one.
   * 🔴 null when the previous step is zero — never 0, never 100, never NaN.
   */
  survivalPct: number | null;
  /** How many were lost since the previous step, or null at the first step. */
  lost: number | null;
};

export type FunnelReport = {
  steps: FunnelStep[];
  friction: { name: FunnelEventName; label: string; count: number }[];
  churn: { name: FunnelEventName; label: string; count: number }[];
  total: number;
  /** True when nothing has been recorded at all — the page must say so. */
  isEmpty: boolean;
  from: Date;
  to: Date;
};

const label = (n: FunnelEventName) => n.replace(/_/g, " ");

/**
 * Share of `previous` that reached `current`.
 * Exported so a test can pin the zero case directly rather than through a page.
 */
export function survival(current: number, previous: number): number | null {
  if (previous <= 0) return null; // not enough data to say. NOT 0, NOT 100.
  return Math.round((current / previous) * 100);
}

export async function buildFunnelReport(from: Date, to: Date): Promise<FunnelReport> {
  const rows = await prisma.funnelEvent.groupBy({
    by: ["name"],
    where: { createdAt: { gte: from, lte: to } },
    _count: { _all: true },
  });
  const counts = new Map<string, number>(rows.map((r) => [r.name, r._count._all]));
  const countOf = (n: FunnelEventName) => counts.get(n) ?? 0;

  const steps: FunnelStep[] = FUNNEL_STEP_ORDER.map((name, i) => {
    const count = countOf(name);
    const previous = i === 0 ? null : countOf(FUNNEL_STEP_ORDER[i - 1]);
    return {
      name,
      label: label(name),
      count,
      survivalPct: previous === null ? null : survival(count, previous),
      lost: previous === null ? null : Math.max(0, previous - count),
    };
  });

  const total = [...counts.values()].reduce((a, b) => a + b, 0);

  return {
    steps,
    friction: FUNNEL_FRICTION_ORDER.map((n) => ({ name: n, label: label(n), count: countOf(n) })),
    churn: FUNNEL_CHURN_ORDER.map((n) => ({ name: n, label: label(n), count: countOf(n) })),
    total,
    isEmpty: total === 0,
    from,
    to,
  };
}

/** The reason each event exists, for the page's own explanatory text. */
export const whyOf = (n: FunnelEventName): string => FUNNEL_EVENTS[n].why;
