// /admin/funnel — where people drop off.
//
// §J: "Product quality and funnel defects must be fixed before increasing
// advertising spend." This is the page that makes that sentence actionable: the
// count at each step, and the loss between steps.
//
// 🔴 EVERY NUMBER HERE IS COUNTED ELSEWHERE. buildFunnelReport() does the
// arithmetic and the ORDER comes from the catalogue, not from this file — the
// same rule as progress.ts (#63), offer.ts (#67) and buildProgress() (#68). The
// e2e walk asserts against that same order, so a page that reordered its own
// steps would disagree with the walk rather than quietly relabel the funnel.
//
// 🔴 AND ZERO IS A FIRST-CLASS CASE, NOT AN EDGE ONE. With no events, "how many
// survived step 1" is 0/0 — which renders as NaN, 0% or 100% depending only on
// how it was written, and all three are lies. The dangerous one is 100%: a
// brand-new product with no data showing a perfect funnel, which somebody could
// increase ad spend on. survivalPct is `number | null`, null is never coerced,
// and this page renders a dash plus an explicit empty state instead.

import { prisma } from "@/lib/prisma";
import { buildFunnelReport, whyOf } from "@/lib/analytics/funnel-report";
import { formatDateUTC } from "@/lib/format-date";

export const dynamic = "force-dynamic";

const RANGES = [7, 30, 90] as const;

export default async function AdminFunnelPage({
  searchParams,
}: {
  searchParams: Promise<{ days?: string }>;
}) {
  const params = await searchParams;
  const days = RANGES.includes(Number(params.days) as never) ? Number(params.days) : 30;
  const to = new Date();
  const from = new Date(to.getTime() - days * 864e5);
  const report = await buildFunnelReport(from, to);

  // Whether the table exists at all is worth knowing here: the migration is
  // applied before the deploy that reads it, so an empty page during that window
  // is expected rather than broken.
  const everRecorded = await prisma.funnelEvent.count();

  return (
    <main className="px-4 py-6" data-testid="admin-funnel">
      <h1 className="text-2xl font-semibold text-almi-ink">Funnel</h1>
      <p className="mt-1 text-sm text-almi-text-muted">
        {formatDateUTC(from)} → {formatDateUTC(to)} · last {days} days
      </p>
      <nav className="mt-3 flex gap-2">
        {RANGES.map((d) => (
          <a
            key={d}
            href={`/admin/funnel?days=${d}`}
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              d === days ? "bg-almi-coral text-white" : "bg-almi-bg-peach text-almi-text-muted"
            }`}
          >
            {d} days
          </a>
        ))}
      </nav>

      {report.isEmpty ? (
        // 🔴 The empty state. NOT a funnel of zeros with percentages beside them.
        <section
          data-testid="funnel-empty"
          className="mt-6 rounded-2xl border border-almi-bg-peach bg-almi-paper px-5 py-6"
        >
          <p className="text-sm text-almi-ink">
            No funnel events in this range.
            {everRecorded === 0
              ? " Nothing has been recorded yet — the table is new and the events start flowing on the next deploy."
              : ` ${everRecorded} event(s) exist outside this range — try a longer one.`}
          </p>
          <p className="mt-2 text-xs text-almi-text-muted">
            No rates are shown, deliberately: with nothing to divide by, any rate here would be
            invented. Total drop-off and a perfect funnel look identical when there is no data,
            and the second is the one somebody would spend money on.
          </p>
        </section>
      ) : (
        <section className="mt-6" data-testid="funnel-steps">
          <ol className="overflow-hidden rounded-2xl border border-almi-bg-peach bg-almi-paper">
            {report.steps.map((s) => (
              <li
                key={s.name}
                data-testid="funnel-step"
                data-step={s.name}
                className="flex flex-wrap items-baseline gap-3 border-b border-almi-bg-peach px-4 py-3 last:border-b-0"
              >
                <span className="min-w-0 flex-1 text-sm text-almi-ink">{s.label}</span>
                <span data-testid="funnel-count" className="text-sm font-semibold text-almi-ink">
                  {s.count}
                </span>
                <span data-testid="funnel-survival" className="w-24 text-right text-xs text-almi-text-muted">
                  {s.survivalPct === null ? "—" : `${s.survivalPct}%`}
                </span>
                <span data-testid="funnel-lost" className="w-24 text-right text-xs text-almi-coral-deep">
                  {s.lost === null || s.lost === 0 ? "" : `−${s.lost} lost`}
                </span>
                <span className="w-full text-xs text-almi-text-muted">{whyOf(s.name)}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Friction and churn are counted BESIDE the funnel, never inside it —
          folding them into the steps would make every rate above wrong. */}
      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper px-4 py-4">
          <h2 className="text-sm font-semibold text-almi-ink">Friction</h2>
          <p className="text-xs text-almi-text-muted">Wanted the product, was stopped.</p>
          <ul className="mt-2 space-y-1">
            {report.friction.map((f) => (
              <li key={f.name} data-testid="funnel-friction" className="flex justify-between text-sm">
                <span className="text-almi-text">{f.label}</span>
                <span className="font-semibold text-almi-ink">{f.count}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper px-4 py-4">
          <h2 className="text-sm font-semibold text-almi-ink">Churn</h2>
          <p className="text-xs text-almi-text-muted">Access ending — chosen, or a card that failed.</p>
          <ul className="mt-2 space-y-1">
            {report.churn.map((c) => (
              <li key={c.name} data-testid="funnel-churn" className="flex justify-between text-sm">
                <span className="text-almi-text">{c.label}</span>
                <span className="font-semibold text-almi-ink">{c.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
