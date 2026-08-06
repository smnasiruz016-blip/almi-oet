// The rich-page renderer.
//
// It invents nothing. Every section it draws has already been composed from real
// fields and has already cleared the quality gate; this file only decides how
// that material appears on screen and what the crawler is told about it. If a
// page should not be indexed, the decision was made in the currency gate — the
// renderer just carries it out.
//
// What it adds on top of the composed body is the connective tissue the old
// surface never had: breadcrumbs, links out to the hubs a page belongs to, and
// structured data. 99.7% of the previous 240k pages were orphans with nothing
// linking to them, which is most of why they were never indexed.

import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/oet-seo/sitemap-urls";
import type { Section, Table } from "@/lib/oet-seo/compose";
import {
  OetSeoCrossLinks,
  OetSeoCta,
  OetSeoShamool,
  OetSeoDisclaimer,
  FaqJsonLd,
} from "./master";

export type Crumb = { label: string; href: string };
export type RelatedLink = { label: string; href: string; blurb?: string };

// ── metadata ────────────────────────────────────────────────────────────────

/** Self-referential canonical on every page; `noindex, follow` where the
 *  currency gate held the page back — follow, because its links still lead
 *  somewhere true even when its own figures are awaiting re-confirmation. */
export function buildRichMetadata(input: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${input.path}`;
  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical: url },
    robots: input.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      type: "article",
      siteName: "AlmiOET",
    },
    twitter: { card: "summary", title: input.title, description: input.description },
  };
}

// ── structured data ─────────────────────────────────────────────────────────

export function BreadcrumbJsonLd({ trail }: { trail: Crumb[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

// ── chrome ──────────────────────────────────────────────────────────────────

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl px-6 pt-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-almi-text-muted">
        {trail.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === trail.length - 1 ? (
              <span aria-current="page" className="font-semibold text-almi-text">
                {c.label}
              </span>
            ) : (
              <Link href={c.href} className="hover:text-almi-coral hover:underline">
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** The internal-linking spine: a page always says what it belongs to and what
 *  sits beside it, so nothing on this surface is an orphan again. */
export function RelatedLinks({ heading, links }: { heading: string; links: RelatedLink[] }) {
  if (!links.length) return null;
  return (
    <section className="mx-auto max-w-3xl px-6 py-8">
      <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">{heading}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block rounded-2xl border border-almi-bg-peach bg-almi-paper p-4 transition hover:border-almi-coral"
            >
              <span className="text-sm font-semibold text-almi-ink">{l.label}</span>
              {l.blurb && <span className="mt-1 block text-sm text-almi-text">{l.blurb}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Shown on a page the currency gate is holding back, so a reader is told the
 *  same thing the crawler is — not left to assume the figures are confirmed. */
function AwaitingConfirmation({ body }: { body: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <p className="rounded-2xl border border-almi-coral bg-almi-paper px-5 py-4 text-sm text-almi-text">
        <span className="font-semibold text-almi-ink">Awaiting re-confirmation.</span> {body}
      </p>
    </div>
  );
}

/** The PERMANENT caveat — law #5.
 *
 *  Distinct from AwaitingConfirmation above, and the distinction is the whole
 *  point of the refined gate. That one means "we cannot stand behind this as
 *  current" and goes away when the fact is re-read. This one means "confirm your
 *  own case" and never goes away, because it is a property of the material: a
 *  registration requirement is decided on an individual record, and no amount of
 *  verification on our side changes that.
 *
 *  So it renders on every page, indexable or not, above the fold. A page that
 *  stops saying it once it passes the gate has quietly promised it checked for
 *  the reader. */
function PermanentCaveat({ body }: { body: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <p className="rounded-2xl border border-almi-bg-peach bg-almi-bg-peach/40 px-5 py-4 text-sm text-almi-text">
        <span className="font-semibold text-almi-ink">Check your own case.</span> {body}
      </p>
    </div>
  );
}

/** A composed comparison table.
 *
 *  The table IS the material on a matrix page, which is why the composer hands
 *  its text to the gate rather than letting it ship unmeasured. Wide tables get
 *  their own horizontal scroll container so the page body never scrolls sideways
 *  on a phone. */
export function ComparisonTable({ table }: { table: Table }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-6">
      <h2 className="text-lg font-semibold text-almi-ink">{table.caption}</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-almi-bg-peach">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">{table.caption}</caption>
          <thead className="bg-almi-paper">
            <tr>
              {table.columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="whitespace-nowrap px-3 py-2 text-xs font-bold uppercase tracking-wider text-almi-text-muted"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={row.join("|")} className={i % 2 ? "bg-almi-paper/50" : undefined}>
                {row.map((cell, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="px-3 py-2 font-semibold text-almi-ink">
                      {cell}
                    </th>
                  ) : (
                    <td key={j} className="whitespace-nowrap px-3 py-2 text-almi-text">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── the page ────────────────────────────────────────────────────────────────

export function RichPage({
  eyebrow,
  title,
  subtitle,
  trail,
  sections,
  tables,
  faqs,
  related,
  noindexNote,
  caveat,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string | null;
  trail: Crumb[];
  sections: Section[];
  /** Rendered after the prose, in composed order. */
  tables?: Table[];
  faqs?: { q: string; a: string }[];
  related?: { heading: string; links: RelatedLink[] }[];
  /** Present iff the currency gate held this page out of the index. Temporary:
   *  it goes away when the fact is re-read at source. */
  noindexNote?: string | null;
  /** The permanent "confirm your own case" caveat. Renders on every page whether
   *  indexable or not, and is never cleared. */
  caveat?: string | null;
  children?: React.ReactNode;
}) {
  return (
    <article className="bg-almi-bg">
      <BreadcrumbJsonLd trail={trail} />
      {faqs?.length ? <FaqJsonLd faqs={faqs} /> : null}

      <Breadcrumbs trail={trail} />

      <header className="mx-auto max-w-3xl px-6 pt-6">
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold text-almi-ink">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-almi-text-muted">{subtitle}</p>}
      </header>

      {caveat && (
        <div className="pt-6">
          <PermanentCaveat body={caveat} />
        </div>
      )}

      {noindexNote && (
        <div className="pt-4">
          <AwaitingConfirmation body={noindexNote} />
        </div>
      )}

      {children}

      {tables?.map((t) => (
        <ComparisonTable key={t.id} table={t} />
      ))}

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="mx-auto max-w-3xl px-6 py-6">
          <h2 className="text-lg font-semibold text-almi-ink">{s.heading}</h2>
          {s.paras.map((p, i) => (
            <p key={i} className="mt-3 text-sm leading-relaxed text-almi-text">
              {p}
            </p>
          ))}
        </section>
      ))}

      {faqs?.length ? (
        <section className="mx-auto max-w-3xl px-6 py-6">
          <h2 className="text-lg font-semibold text-almi-ink">Common questions</h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4">
                <dt className="text-sm font-semibold text-almi-ink">{f.q}</dt>
                <dd className="mt-2 text-sm text-almi-text">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {related?.map((r) => (
        <RelatedLinks key={r.heading} heading={r.heading} links={r.links} />
      ))}

      <OetSeoCrossLinks />
      <OetSeoCta />
      <OetSeoShamool />
      <OetSeoDisclaimer />
    </article>
  );
}
