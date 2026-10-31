// "Why AlmiOET? Compare for yourself" — owner GREEN, 31 Oct 2026. Facts only: other providers' cells are what their own pages say
// (src/content/comparison.ts, quotes in the owner's sources file); AlmiOET's counts are read LIVE from the bank at render time.
// Phone first: below md every provider is a card (AlmiOET open, the others fold); from md up, one table whose own box scrolls
// sideways if it must — the page itself never does.
import Link from "next/link";
import { liveCounts } from "@/components/oet/ContentCounts";
import { formatDateUTC } from "@/lib/format-date";
import { tasteThenPriceLabel, priceMonthlyLabel, OFFER } from "@/lib/billing/offer";
import { CHECKED_ON, DISCLAIMER, EXPLAINED, PROVIDERS, ROWS, type RowKey } from "@/content/comparison";

const n = (x: number) => String(Math.trunc(x)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/** AlmiOET's column. Counts come from the live bank; with no database (a build), the count-bearing cells say less, never a guess. */
export async function almiCells(): Promise<Record<RowKey, string>> {
  const c = await liveCounts();
  return {
    price: `${priceMonthlyLabel()} · try free for ${OFFER.tasteHours} hours, no card`,
    tests: c
      ? `${c.mocks} full timed mocks · ${n(c.listening)} Listening and ${n(c.reading)} Reading practice items`
      : "Full timed mocks and Listening and Reading practice",
    professions: "All 12 OET professions",
    writing: c ? `${n(c.writingAll)} Writing tasks (${n(c.writingEach)} for each profession), each with a model letter` : "Writing tasks, each with a model letter",
    speaking: c
      ? `${n(c.speakingAll)} role-play cards (${n(c.speakingEach)} for each profession), each with a model role-play; you record your answer`
      : "Role-play cards, each with a model role-play; you record your answer",
    explanations: `On ${n(EXPLAINED.explained)} of ${n(EXPLAINED.questions)} Listening and Reading questions`,
    feedback: "AI feedback on Writing and Speaking when you submit; Listening and Reading marked instantly",
  };
}

export async function CompareSection() {
  const almi = await almiCells();
  const checked = formatDateUTC(CHECKED_ON) ?? CHECKED_ON;
  const columns = [{ id: "almioet", name: "AlmiOET", cells: almi, ours: true }, ...PROVIDERS.map((p) => ({ ...p, ours: false }))];

  return (
    <section data-compare className="border-t border-almi-bg-peach bg-almi-paper px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-almi-ink">Why AlmiOET? Compare for yourself</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-almi-text-muted">
          What each OET preparation option offers, as stated on its own website. Also in AlmiOET: lessons on how each task is
          marked, and vocabulary for your profession.
        </p>

        {/* Phone: one card per provider. AlmiOET first and open; the others fold so the page stays short. */}
        <div className="mt-8 space-y-3 md:hidden" data-compare-cards>
          {columns.map((col) => {
            const body = (
              <dl className="space-y-2 px-4 pb-4 text-sm">
                {ROWS.map((r) => (
                  <div key={r.key}>
                    <dt className="text-xs font-bold uppercase tracking-wider text-almi-text-muted">{r.label}</dt>
                    <dd className="mt-0.5 text-almi-ink">{col.cells[r.key]}</dd>
                  </div>
                ))}
              </dl>
            );
            return col.ours ? (
              <div key={col.id} data-compare-ours className="rounded-2xl border-2 border-almi-coral bg-almi-coral/5">
                <p className="px-4 pt-4 pb-2 text-lg font-semibold text-almi-ink">AlmiOET</p>
                {body}
              </div>
            ) : (
              <details key={col.id} className="rounded-2xl border border-almi-bg-peach bg-white">
                <summary className="flex min-h-[48px] cursor-pointer items-center justify-between px-4 text-base font-semibold text-almi-ink">
                  {col.name} <span aria-hidden className="text-sm text-almi-text-muted">▾</span>
                </summary>
                {body}
              </details>
            );
          })}
        </div>

        {/* md and up: one table; only its own box may scroll sideways. */}
        <div className="mt-8 hidden max-w-full overflow-x-auto rounded-2xl border border-almi-bg-peach md:block" data-compare-table>
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th scope="col" className="w-36 bg-almi-bg px-3 py-3 text-xs font-bold uppercase tracking-wider text-almi-text-muted">
                  &nbsp;
                </th>
                {columns.map((col) => (
                  <th
                    key={col.id}
                    scope="col"
                    data-compare-col={col.id}
                    className={col.ours ? "bg-almi-coral px-3 py-3 text-base font-semibold text-almi-ink" : "bg-almi-bg px-3 py-3 text-sm font-semibold text-almi-ink"}
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.key} className="border-t border-almi-bg-peach align-top">
                  <th scope="row" className="bg-almi-bg px-3 py-3 text-xs font-bold uppercase tracking-wider text-almi-text-muted">
                    {r.label}
                  </th>
                  {columns.map((col) => (
                    <td key={col.id} className={col.ours ? "bg-almi-coral/10 px-3 py-3 font-medium text-almi-ink" : "bg-white px-3 py-3 text-almi-text"}>
                      {col.cells[r.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/signup"
            data-compare-cta
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            {tasteThenPriceLabel()}
          </Link>
        </div>
        <p data-compare-disclaimer className="mx-auto mt-4 max-w-3xl text-center text-xs text-almi-text-muted">
          {DISCLAIMER(checked)}
        </p>
      </div>
    </section>
  );
}
