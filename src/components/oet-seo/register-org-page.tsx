// /register/[organization] — one recognising organisation, the professions it
// accepts OET for, and its published grade. Real data only.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/oet-seo/sitemap-urls";
import { orgBySlug, gradeLine, professionLabelToSlug, isOrgIndexable } from "@/lib/oet-seo/data";
import { OetSeoCrossLinks, OetSeoCta, OetSeoShamool, OetSeoDisclaimer, FaqJsonLd, GRADE_DOCTRINE } from "./master";

export function buildRegisterMetadata(orgSlug: string): Metadata {
  const org = orgBySlug(orgSlug);
  if (!org) return { robots: { index: false, follow: true } };
  const url = `${SITE_URL}/register/${org.slug}`;
  const grade = gradeLine(org);
  const title = `${org.name} — OET recognition & grade | AlmiOET`;
  const description = `${org.name} (${org.country ?? "international"}) recognises OET for ${org.professions.length} profession(s). ${grade ? `Published grade: ${grade}.` : "Confirm the grade with the organisation."} Honest OET practice with AlmiOET.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: isOrgIndexable(org) ? undefined : { index: false, follow: true },
    openGraph: { title, description, url, type: "article", siteName: "AlmiOET" },
    twitter: { card: "summary", title, description },
  };
}

export function RegisterOrgPage({ orgSlug }: { orgSlug: string }) {
  const org = orgBySlug(orgSlug);
  if (!org) notFound();
  const grade = gradeLine(org);

  const faqs = [
    {
      q: `Does ${org.name} accept OET?`,
      a: `Yes — ${org.name} is on OET's official list of recognising organisations. ${grade ? `The published requirement is ${grade}.` : "OET does not publish a fixed grade for this organisation — confirm directly."}`,
    },
    { q: `What grade does ${org.name} require?`, a: grade ? `${grade}. ${GRADE_DOCTRINE}` : GRADE_DOCTRINE },
    {
      q: `Which professions does ${org.name} cover?`,
      a: `${org.name} recognises OET for: ${org.professions.join(", ")}.`,
    },
  ];

  return (
    <article className="bg-almi-bg">
      <FaqJsonLd faqs={faqs} />
      <header className="mx-auto max-w-3xl px-6 pt-12">
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          AlmiOET · OET recognition
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-almi-ink">{org.name}</h1>
        <p className="mt-2 text-sm text-almi-text-muted">
          {org.type ?? "Recognising organisation"} · {org.country ?? "International"}
        </p>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-8">
        <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-text-muted">
            Published OET grade
          </p>
          {grade ? (
            <p className="mt-1 text-base font-semibold text-almi-ink">{grade}</p>
          ) : (
            <p className="mt-1 text-base font-semibold text-almi-coral-deep">
              Not published — confirm with {org.name}
            </p>
          )}
          <p className="mt-1 text-xs text-almi-text-muted">Per sub-test on the 0–500 scale.</p>
        </div>

        <h2 className="mt-8 text-sm font-bold uppercase tracking-wider text-almi-text-muted">
          Professions {org.name} recognises OET for
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {org.professions.map((label) => {
            const slug = professionLabelToSlug(label);
            return slug ? (
              <li key={label}>
                <Link
                  href={`/${slug}`}
                  className="inline-flex rounded-full border border-almi-bg-peach bg-almi-paper px-3 py-1.5 text-sm font-medium text-almi-coral hover:border-almi-coral"
                >
                  {label}
                </Link>
              </li>
            ) : (
              <li key={label} className="rounded-full bg-almi-bg-peach px-3 py-1.5 text-sm text-almi-text">
                {label}
              </li>
            );
          })}
        </ul>

        <p className="mt-6 rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-sm text-almi-text">
          {GRADE_DOCTRINE}
        </p>
        {org.website && (
          <p className="mt-3 text-sm text-almi-text">
            Official page:{" "}
            <a href={org.website} rel="nofollow noopener" className="font-semibold text-almi-coral underline">
              {org.website.replace(/^https?:\/\//, "")}
            </a>
          </p>
        )}
      </section>

      <OetSeoCrossLinks />
      <OetSeoCta />
      <OetSeoShamool />
      <OetSeoDisclaimer />
    </article>
  );
}
