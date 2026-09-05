/**
 * gate:funnel-visible — THE FUNNEL SHOWS THE DROP, AND ZERO SHOWS NOTHING.
 *
 * Two things are proved here, and the second is the one that could cost money.
 *
 * 1. RED case — 10 account_created, 4 trial_started, 1 exercise_submitted must
 *    render as a visible fall, not as three unrelated numbers.
 *
 * 2. 🔴 CONTROL — with ZERO events, no percentage may be rendered at all.
 *
 * ── WHY THE ZERO CASE IS THE DANGEROUS ONE ─────────────────────────────────
 *
 * "How many of step 2 survived step 1" with no data is 0/0, and what appears
 * depends only on how it was written:
 *
 *     NaN    obviously broken — but only to a developer reading it
 *     0%     reads as "everyone drops off"
 *     100%   reads as "nothing drops off"
 *
 * All three are lies. The last is the one that gets acted on: a brand-new
 * product with no data showing a perfect funnel, on the strength of which
 * somebody increases ad spend. §J exists to prevent exactly that decision being
 * made blind.
 *
 * So the assertion below is not "the empty state renders". It is that the string
 * "%" does not appear ANYWHERE in the rendered page when there is nothing to
 * divide by — which no amount of careful wording can satisfy by accident.
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import type React from "react";

type Row = { name: string; _count: { _all: number } };
let ROWS: Row[] = [];
let TOTAL = 0;

vi.mock("@/lib/prisma", () => ({
  prisma: {
    funnelEvent: {
      groupBy: async () => ROWS,
      count: async () => TOTAL,
    },
  },
}));

const FunnelPage = (await import("@/app/admin/funnel/page")).default;
const { survival, buildFunnelReport } = await import("@/lib/analytics/funnel-report");

const render = async (days = "30") =>
  renderToStaticMarkup(
    await (FunnelPage as (p: { searchParams: Promise<{ days?: string }> }) => Promise<React.ReactElement>)(
      { searchParams: Promise.resolve({ days }) },
    ),
  );

const readAll = (html: string, testid: string): string[] =>
  [...html.matchAll(new RegExp(`data-testid="${testid}"[^>]*>([^<]*)<`, "g"))].map((m) => m[1].trim());

beforeEach(() => {
  ROWS = [];
  TOTAL = 0;
});

describe("survival() — the arithmetic, pinned directly", () => {
  it("🔴 a zero denominator is null — never 0, never 100, never NaN", () => {
    expect(survival(0, 0)).toBeNull();
    expect(survival(5, 0)).toBeNull();
  });

  it("an ordinary fall is a percentage", () => {
    expect(survival(4, 10)).toBe(40);
    expect(survival(10, 10)).toBe(100);
  });
});

describe("the RED case — a real fall is visible", () => {
  beforeEach(() => {
    ROWS = [
      { name: "account_created", _count: { _all: 10 } },
      { name: "trial_started", _count: { _all: 4 } },
      { name: "exercise_submitted", _count: { _all: 1 } },
    ];
    TOTAL = 15;
  });

  it("renders 10 → 4 → 1 as counts on their own steps", async () => {
    const report = await buildFunnelReport(new Date(0), new Date());
    const byName = new Map(report.steps.map((s) => [s.name, s]));
    expect(byName.get("account_created")!.count).toBe(10);
    expect(byName.get("trial_started")!.count).toBe(4);
    expect(byName.get("exercise_submitted")!.count).toBe(1);

    const html = await render();
    const counts = readAll(html, "funnel-count").map(Number);
    expect(counts, "the steps did not render").not.toHaveLength(0);
    expect(counts).toContain(10);
    expect(counts).toContain(4);
    expect(counts).toContain(1);
  });

  it("shows the LOSS between steps, which is the whole point", async () => {
    const html = await render();
    const lost = readAll(html, "funnel-lost").filter(Boolean);
    expect(lost.join(" "), "no drop-off was shown").toMatch(/−|-/);
    expect(html).not.toContain("funnel-empty");
  });

  it("friction and churn are counted BESIDE the funnel, not inside it", async () => {
    const report = await buildFunnelReport(new Date(0), new Date());
    const stepNames = report.steps.map((s) => s.name);
    expect(stepNames, "churn was folded into the forward funnel").not.toContain(
      "subscription_cancelled",
    );
    expect(stepNames, "friction was folded into the forward funnel").not.toContain("paywall_blocked");
    const html = await render();
    expect(readAll(html, "funnel-friction").length).toBeGreaterThan(0);
    expect(readAll(html, "funnel-churn").length).toBeGreaterThan(0);
  });
});

describe("🔴 the CONTROL — zero events renders NO percentage at all", () => {
  it("the empty state appears", async () => {
    const html = await render();
    expect(html).toContain("No funnel events in this range");
  });

  it("🔴 not one '%' is rendered, and no NaN", async () => {
    const html = await render();
    // Not "the empty state exists" — that a rate cannot have been printed.
    expect(html, "a percentage was rendered with nothing to divide by").not.toContain("%");
    expect(html, "NaN reached the page").not.toContain("NaN");
  });

  it("every survival rate is null when the funnel is empty", async () => {
    const report = await buildFunnelReport(new Date(0), new Date());
    for (const s of report.steps) {
      expect(s.survivalPct, `${s.name} produced a rate from no data`).toBeNull();
    }
    expect(report.isEmpty).toBe(true);
  });
});
