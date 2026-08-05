// /[country] — the country hub. TYPE 4, upgraded.
//
// It began as a list of organisation links: real, but thin, and it existed only
// because an organisation page belonged to nothing before it. It is now a
// composed page like the rest — every profession that has a body behind it in
// this country, the grade each asks, and a route into the per-profession page —
// and it goes through the same quality gate as everything else. A country does
// not get a hub because it is a country; it gets one when there is enough here
// to be worth a page.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gradeLine, orgBySlug } from "@/lib/oet-seo/data";
import { nameVariants, isCurrentEnoughToIndex } from "@/lib/oet-seo/regulators";
import { composeCountryHubPage, cellVerifiedOn } from "@/lib/oet-seo/compose-matrix";
import {
  countryNameForSlug,
  isHubCountry,
  orgsInCountry,
  hubProfessions,
  countryProfessionsForCountry,
} from "@/lib/oet-seo/links";
import { GRADE_DOCTRINE } from "./master";
import { inCountry } from "@/lib/oet-seo/compose-core";
import { RichPage, buildRichMetadata, type Crumb, type RelatedLink } from "./rich-page";

export function buildCountryMetadata(slug: string): Metadata {
  const country = countryNameForSlug(slug);
  const c = composeCountryHubPage(slug);
  if (!country || !isHubCountry(slug) || !c) return { robots: { index: false, follow: true } };
  const title = `OET in ${inCountry(country)} — every profession and the grade each body asks | AlmiOET`;
  const description = `The ${c.cells.length} ${c.cells.length === 1 ? "profession" : "professions"} with an OET requirement in ${inCountry(country)}, which body sets it, and what it is per sub-test.`;
  return buildRichMetadata({ title, description, path: `/${slug}` });
}

export function CountryHub({ slug }: { slug: string }) {
  const country = countryNameForSlug(slug);
  const c = composeCountryHubPage(slug);
  if (!country || !isHubCountry(slug) || !c) notFound();

  const orgSlugs = orgsInCountry(slug);
  const orgs = orgSlugs.map((s) => orgBySlug(s)).filter((o): o is NonNullable<typeof o> => !!o);
  const withPages = new Set(countryProfessionsForCountry(slug));
  const allBodies = [...new Map(c.cells.flatMap((x) => x.bodies).map((b) => [b.org.slug, b])).values()];

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label: "Recognising organisations", href: "/register" },
    { label: country, href: `/${slug}` },
  ];

  const faqs = [
    {
      q: `Which professions can use OET in ${inCountry(country)}?`,
      a: `${c.cells.map((x) => x.professionLabel).join(", ")}.`,
    },
    {
      q: `Which bodies in ${inCountry(country)} accept OET?`,
      a: `${allBodies.map((b) => b.org.name).join("; ")}.`,
    },
    { q: `What OET grade is needed in ${inCountry(country)}?`, a: GRADE_DOCTRINE },
  ];

  const related: { heading: string; links: RelatedLink[] }[] = [
    // The spec's Type 4 job: link to every Type 1 page this country has.
    ...(withPages.size
      ? [
          {
            heading: `Profession by profession in ${inCountry(country)}`,
            links: c.cells
              .filter((x) => withPages.has(x.professionSlug))
              .map((x) => ({
                label: `${x.professionLabel} in ${inCountry(country)}`,
                href: `/${slug}/${x.professionSlug}`,
                blurb: `${x.bodies.length} ${x.bodies.length === 1 ? "body" : "bodies"}.`,
              })),
          },
        ]
      : []),
    {
      heading: "OET by profession",
      links: hubProfessions()
        .filter((p) => c.cells.some((x) => x.professionSlug === p.slug))
        .map((p) => ({ label: `OET for ${p.label.toLowerCase()}`, href: `/${p.slug}` })),
    },
    { heading: "Elsewhere", links: [{ label: "All recognising organisations", href: "/register" }] },
  ];

  return (
    <RichPage
      eyebrow="AlmiOET · by country"
      title={`OET in ${inCountry(country)} — who recognises it, and what they ask`}
      subtitle={`${c.cells.length} ${c.cells.length === 1 ? "profession" : "professions"} · ${allBodies.length} bodies · verified ${cellVerifiedOn(allBodies)}`}
      trail={trail}
      sections={c.sections}
      tables={c.tables}
      faqs={faqs}
      related={related}
    >
      {orgs.length ? (
        <section className="mx-auto max-w-3xl px-6 py-6">
          <h2 className="text-lg font-semibold text-almi-ink">
            Bodies in {inCountry(country)} with their own page
          </h2>
          <ul className="mt-4 space-y-3">
            {orgs.map((o) => {
              const nv = nameVariants(o.name);
              const grade = gradeLine(o);
              return (
                <li key={o.slug} className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4">
                  <Link
                    href={`/register/${o.slug}`}
                    className="text-sm font-semibold text-almi-coral hover:underline"
                  >
                    {nv.full}
                    {nv.abbrev ? ` (${nv.abbrev})` : ""}
                  </Link>
                  <p className="mt-1 text-sm text-almi-text">
                    {grade ?? "Grade not published — confirm with the body"}
                  </p>
                  <p className="mt-1 text-xs text-almi-text-muted">
                    {o.professions.length} {o.professions.length === 1 ? "profession" : "professions"}
                    {isCurrentEnoughToIndex(o.slug) ? "" : " · awaiting re-confirmation"}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </RichPage>
  );
}
