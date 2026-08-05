// /[profession] — the main per-profession landing. Carries the doctrine-clean
// master landing copy, scoped to one profession with REAL recognition numbers.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GET_STARTED_HREF } from "@/components/GlobalHeader";
import { SITE_URL } from "@/lib/oet-seo/sitemap-urls";
import { PROFESSIONS } from "@/lib/oet/professions";
import { professionBySlug } from "@/lib/oet/professions";
import { orgsForProfession, gradeLine, orgBySlug } from "@/lib/oet-seo/data";
import { nameVariants } from "@/lib/oet-seo/regulators";
import { hubCountries, orgsForProfessionRenderable } from "@/lib/oet-seo/links";
import { OetSeoCrossLinks, OetSeoCta, OetSeoShamool, OetSeoDisclaimer, FaqJsonLd, GRADE_DOCTRINE } from "./master";
import { Breadcrumbs, BreadcrumbJsonLd, RelatedLinks, type Crumb } from "./rich-page";

export function buildProfessionMetadata(professionSlug: string): Metadata {
  const def = professionBySlug(professionSlug);
  if (!def) return { robots: { index: false, follow: true } };
  const count = orgsForProfession(professionSlug).length;
  const url = `${SITE_URL}/${professionSlug}`;
  const title = `${def.label} OET Practice & Recognition | AlmiOET`;
  const description = `Practise the OET for ${def.label} with honest AI feedback per sub-test. ${count} organisations recognise OET for ${def.label}. Original healthcare material, never copied from OET.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", siteName: "AlmiOET" },
    twitter: { card: "summary", title, description },
  };
}

export function ProfessionLanding({ professionSlug }: { professionSlug: string }) {
  const def = professionBySlug(professionSlug);
  if (!def) notFound();
  const orgs = orgsForProfession(professionSlug);
  const countries = new Set(orgs.map((o) => o.country).filter((c): c is string => !!c && c !== "All"));

  // Link only to pages that were actually built. The old landing listed any org
  // whose `type` looked like a regulator, which after the prune would have been
  // a hub pointing at 404s.
  const linkable = orgsForProfessionRenderable(professionSlug);
  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label: def.label, href: `/${professionSlug}` },
  ];
  const hubs = hubCountries().filter((c) =>
    linkable.some((s) => orgBySlug(s)?.country === c.country),
  );

  const faqs = [
    {
      q: `Who accepts OET for ${def.label}?`,
      a: `OET's official list shows ${orgs.length} organisations recognising OET for ${def.label} across ${countries.size} countries — regulators, boards, councils and employers. Always confirm the exact requirement with your own regulator.`,
    },
    {
      q: `What OET grade do I need for ${def.label}?`,
      a: GRADE_DOCTRINE,
    },
    {
      q: `Which professions does AlmiOET cover?`,
      a: `All 12 OET professions — ${Object.values(PROFESSIONS).map((p) => p.label).join(", ")}. Writing and Speaking are tailored to your profession; Listening and Reading are shared.`,
    },
    {
      q: `Is AlmiOET affiliated with OET?`,
      a: `No. AlmiOET is independent and not affiliated with OET or CBLA. All practice material is original and never copied from the Occupational English Test.`,
    },
  ];

  return (
    <article className="bg-almi-bg">
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd trail={trail} />
      <Breadcrumbs trail={trail} />

      <header className="mx-auto max-w-3xl px-6 pt-6">
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          ALMIOET · OCCUPATIONAL ENGLISH TEST
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-almi-ink">
          {def.label} OET — practice and recognition
        </h1>
        <p className="mt-3 text-base text-almi-text">
          Practise the OET for {def.label.toLowerCase()} using real clinical scenarios, not general
          academic topics. Get an honest grade for each sub-test so you know exactly where you stand
          before test day. {orgs.length} organisations across {countries.size} countries recognise OET
          for {def.label}.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {/* Card-first: /signup, not /practice — see the note in master.tsx. */}
          <Link
            href={GET_STARTED_HREF}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            Start your 7-day free trial
          </Link>
          <span className="text-xs text-almi-text-muted">
            $12/month · 7-day free trial · never copied from OET
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="text-xl font-semibold text-almi-ink">Real clinical feedback, not flattering scores</h2>
        <p className="mt-2 text-sm text-almi-text">
          OET grades you on professional communication across Listening, Reading, Writing and Speaking.
          AlmiOET grades your responses against healthcare communication rubrics — if your referral
          letter layout is weak or your consultation pacing is off, we tell you exactly what to fix.
          Honest assessments, original material, and a clear view of where you stand.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["Listening & Reading", "Auto-marked on the real 0–500 scale, in healthcare contexts."],
            [`${def.label} Writing`, "AI feedback on letter layout, case selection and clinical relevance."],
            ["Clinical Speaking", "Role-play feedback on patient communication — never on accent."],
          ].map(([h, b]) => (
            <div key={h} className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4">
              <p className="text-sm font-semibold text-almi-ink">{h}</p>
              <p className="mt-1 text-sm text-almi-text">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {linkable.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 pb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
            Bodies that recognise OET for {def.label} — with the grade each asks
          </h2>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {linkable.map((s) => {
              const o = orgBySlug(s);
              if (!o) return null;
              const nv = nameVariants(o.name);
              return (
                <li key={s} className="text-sm">
                  <Link
                    href={`/${professionSlug}/${s}`}
                    className="font-medium text-almi-coral hover:underline"
                  >
                    {nv.abbrev ?? nv.full}
                  </Link>
                  <span className="text-almi-text-muted"> — {gradeLine(o) ?? "confirm grade"}</span>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs text-almi-text-muted">{GRADE_DOCTRINE}</p>
        </section>
      )}

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

      {hubs.length > 0 && (
        <RelatedLinks
          heading={`${def.label} OET by country`}
          links={[
            ...hubs.map((c) => ({
              label: `OET in ${c.country}`,
              href: `/${c.slug}`,
              blurb: "Every body in this country that recognises OET, and what each asks.",
            })),
            { label: "All recognising organisations", href: "/register" },
          ]}
        />
      )}

      <OetSeoCrossLinks />
      <OetSeoCta />
      <OetSeoShamool />
      <OetSeoDisclaimer />
    </article>
  );
}
