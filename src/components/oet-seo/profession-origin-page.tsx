// /[profession]/from-[origin] — "[Profession] OET requirement — from [Origin]".
// Lists the organisations that recognise OET for this profession, grouped by
// destination country, each linking to its deep org page. Real data only.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/oet-seo/sitemap-urls";
import { findOrigin, originAngle } from "@/lib/oet-seo/origins";
import {
  orgsForProfession,
  professionSlugToLabel,
  gradeLine,
  type SeoOrg,
} from "@/lib/oet-seo/data";
import { OetSeoCrossLinks, OetSeoCta, OetSeoShamool, OetSeoDisclaimer, FaqJsonLd, GRADE_DOCTRINE } from "./master";

type Args = { professionSlug: string; originSlug: string };

export function buildProfessionOriginMetadata({ professionSlug, originSlug }: Args): Metadata {
  const label = professionSlugToLabel(professionSlug);
  const origin = findOrigin(originSlug);
  if (!label || !origin) return { robots: { index: false, follow: true } };
  const count = orgsForProfession(professionSlug).length;
  const url = `${SITE_URL}/${professionSlug}/from-${originSlug}`;
  const title = `${label} OET requirement — from ${origin.name} | AlmiOET`;
  const description = `${count} organisations recognise OET for ${label} — regulators, boards and employers. Honest grades and practice for ${label} candidates from ${origin.name}. Confirm each requirement with the organisation.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", siteName: "AlmiOET" },
    twitter: { card: "summary", title, description },
  };
}

const PER_COUNTRY_CAP = 30;

export function ProfessionOriginPage({ professionSlug, originSlug }: Args) {
  const label = professionSlugToLabel(professionSlug);
  const origin = findOrigin(originSlug);
  if (!label || !origin) notFound();
  const orgs = orgsForProfession(professionSlug);

  // group by country (null/All → "International")
  const groups = new Map<string, SeoOrg[]>();
  for (const o of orgs) {
    const k = o.country && o.country !== "All" ? o.country : "International / multi-country";
    (groups.get(k) ?? groups.set(k, []).get(k)!).push(o);
  }
  const countries = [...groups.entries()].sort((a, b) => b[1].length - a[1].length);

  const faqs = [
    {
      q: `How many organisations accept OET for ${label}?`,
      a: `OET's official list shows ${orgs.length} recognising organisations for ${label} across regulators, boards, credentialing agencies and employers. Each sets its own grade — confirm with the organisation.`,
    },
    { q: `What grade do ${label} candidates need?`, a: GRADE_DOCTRINE },
    {
      q: `Does OET registration replace a visa for someone from ${origin.name}?`,
      a: `No. OET supports professional registration; a visa is a separate process. Check both for your route.`,
    },
  ];

  return (
    <article className="bg-almi-bg">
      <FaqJsonLd faqs={faqs} />
      <header className="mx-auto max-w-3xl px-6 pt-12">
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">AlmiOET · {label}</p>
        <h1 className="mt-2 text-3xl font-semibold text-almi-ink">
          {label} OET requirement — from {origin.name}
        </h1>
        <p className="mt-3 text-base text-almi-text">{originAngle(origin)}</p>
        <p className="mt-2 text-sm text-almi-text-muted">
          {orgs.length} organisations on OET&apos;s official list recognise OET for {label}.
        </p>
      </header>

      <section className="mx-auto max-w-3xl space-y-6 px-6 py-8">
        {countries.map(([country, list]) => (
          <div key={country}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
              {country} <span className="text-almi-text-muted/70">({list.length})</span>
            </h2>
            <ul className="mt-2 space-y-1.5">
              {list.slice(0, PER_COUNTRY_CAP).map((o) => {
                const g = gradeLine(o);
                return (
                  <li key={o.slug} className="text-sm">
                    <Link
                      href={`/${professionSlug}/from-${originSlug}/${o.slug}`}
                      className="font-medium text-almi-coral hover:underline"
                    >
                      {o.name}
                    </Link>
                    <span className="text-almi-text-muted"> — {g ?? "grade: confirm with organisation"}</span>
                  </li>
                );
              })}
              {list.length > PER_COUNTRY_CAP && (
                <li className="text-xs text-almi-text-muted">
                  + {list.length - PER_COUNTRY_CAP} more {country} organisations
                </li>
              )}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">FAQ</h2>
        <dl className="mt-3 space-y-4">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="text-sm font-semibold text-almi-ink">{f.q}</dt>
              <dd className="mt-1 text-sm text-almi-text">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <OetSeoCrossLinks />
      <OetSeoCta />
      <OetSeoShamool />
      <OetSeoDisclaimer />
    </article>
  );
}
