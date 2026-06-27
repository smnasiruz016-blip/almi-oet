// Leaf page: /[profession]/from-[origin]/[organization]
// "[Profession] OET requirement for [Organization] — from [Origin]".
// Real data only: exact org name, destination country, OET-published grade (or an
// honest "confirm with the organisation" when OET publishes none).

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/oet-seo/sitemap-urls";
import { findOrigin, originAngle } from "@/lib/oet-seo/origins";
import {
  orgBySlug,
  orgCoversProfession,
  professionSlugToLabel,
  gradeLine,
  isOrgIndexable,
  type SeoOrg,
} from "@/lib/oet-seo/data";
import {
  OetSeoCrossLinks,
  OetSeoCta,
  OetSeoShamool,
  OetSeoDisclaimer,
  FaqJsonLd,
  GRADE_DOCTRINE,
} from "./master";

type Args = { professionSlug: string; originSlug: string; orgSlug: string };

function resolve({ professionSlug, originSlug, orgSlug }: Args) {
  const professionLabel = professionSlugToLabel(professionSlug);
  const origin = findOrigin(originSlug);
  const org = orgBySlug(orgSlug);
  const ok = !!professionLabel && !!origin && !!org && orgCoversProfession(org, professionSlug);
  return { professionLabel, origin, org, ok };
}

export function buildOrgPageMetadata(args: Args): Metadata {
  const { professionLabel, origin, org, ok } = resolve(args);
  if (!ok || !professionLabel || !origin || !org) return { robots: { index: false, follow: true } };
  const url = `${SITE_URL}/${args.professionSlug}/from-${args.originSlug}/${args.orgSlug}`;
  const title = `${professionLabel} OET requirement for ${org.name} — from ${origin.name} | AlmiOET`;
  const grade = gradeLine(org);
  const description = grade
    ? `${org.name} (${org.country ?? "international"}) accepts OET for ${professionLabel}. Published grade: ${grade}. Honest practice from ${origin.name} — confirm the requirement with the organisation.`
    : `${org.name} (${org.country ?? "international"}) recognises OET for ${professionLabel}. Confirm the exact grade with the organisation. Honest OET practice from ${origin.name}.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: isOrgIndexable(org) ? undefined : { index: false, follow: true },
    openGraph: { title, description, url, type: "article", siteName: "AlmiOET" },
    twitter: { card: "summary", title, description },
  };
}

function OtherProfessions({ org, currentSlug }: { org: SeoOrg; currentSlug: string }) {
  const others = org.professions.filter((label) => label !== professionSlugToLabel(currentSlug));
  if (others.length === 0) return null;
  return (
    <p className="text-sm text-almi-text">
      {org.name} also recognises OET for: {others.join(", ")}.
    </p>
  );
}

export function OrgPage(args: Args) {
  const { professionLabel, origin, org, ok } = resolve(args);
  if (!ok || !professionLabel || !origin || !org) notFound();

  const grade = gradeLine(org);
  const dest = org.country ?? "multiple countries";
  const faqs = [
    {
      q: `Does ${org.name} accept OET for ${professionLabel}?`,
      a: `Yes — ${org.name} is on OET's official list of recognising organisations for ${professionLabel}. ${grade ? `The published requirement is ${grade}.` : "OET does not publish a fixed grade for this organisation — confirm it directly."} Always check the current requirement on the organisation's own page.`,
    },
    {
      q: `What OET grade do I need for ${org.name}?`,
      a: grade
        ? `OET lists ${grade} for ${org.name}. ${GRADE_DOCTRINE}`
        : `OET does not publish a fixed grade for ${org.name}. ${GRADE_DOCTRINE}`,
    },
    {
      q: `Is OET registration the same as a visa?`,
      a: `No. OET evidence supports professional registration with a regulator or body like ${org.name}. A visa is a separate step. Confirm both routes for your situation.`,
    },
  ];

  return (
    <article className="bg-almi-bg">
      <FaqJsonLd faqs={faqs} />
      <header className="mx-auto max-w-3xl px-6 pt-12">
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          AlmiOET · OET recognition
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-almi-ink">
          {professionLabel} OET requirement for {org.name} — from {origin.name}
        </h1>
        <p className="mt-3 text-base text-almi-text">{originAngle(origin)}</p>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-8">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-almi-text-muted">Organisation</p>
            <p className="mt-1 text-base font-semibold text-almi-ink">{org.name}</p>
            <p className="text-sm text-almi-text-muted">
              {org.type ?? "Recognising organisation"} · {dest}
            </p>
          </div>
          <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-almi-text-muted">
              Required OET grade
            </p>
            {grade ? (
              <p className="mt-1 text-base font-semibold text-almi-ink">{grade}</p>
            ) : (
              <p className="mt-1 text-base font-semibold text-almi-coral-deep">
                Not published — confirm with {org.name}
              </p>
            )}
            <p className="mt-1 text-xs text-almi-text-muted">
              Per sub-test on the 0–500 scale. Practice estimate only.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3 text-sm text-almi-text">
          <p>
            If you trained in {origin.name} and are pursuing {professionLabel.toLowerCase()}{" "}
            registration recognised by {org.name}, OET is the healthcare-specific English test built
            for clinical communication — referral letters, patient consultations, and workplace
            listening and reading.
          </p>
          <p className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3">
            {GRADE_DOCTRINE}
          </p>
          <OtherProfessions org={org} currentSlug={args.professionSlug} />
          {org.website && (
            <p>
              Official organisation page:{" "}
              <a href={org.website} rel="nofollow noopener" className="font-semibold text-almi-coral underline">
                {org.website.replace(/^https?:\/\//, "")}
              </a>
            </p>
          )}
          <p>
            <Link href={`/register/${org.slug}`} className="font-semibold text-almi-coral underline">
              See every profession {org.name} recognises →
            </Link>
          </p>
        </div>
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
