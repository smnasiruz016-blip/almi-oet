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
import type { Section } from "@/lib/oet-seo/compose";
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

// ── the page ────────────────────────────────────────────────────────────────

export function RichPage({
  eyebrow,
  title,
  subtitle,
  trail,
  sections,
  faqs,
  related,
  noindexNote,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string | null;
  trail: Crumb[];
  sections: Section[];
  faqs?: { q: string; a: string }[];
  related?: { heading: string; links: RelatedLink[] }[];
  /** Present iff the currency gate held this page out of the index. */
  noindexNote?: string | null;
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

      {noindexNote && (
        <div className="pt-6">
          <AwaitingConfirmation body={noindexNote} />
        </div>
      )}

      {children}

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
