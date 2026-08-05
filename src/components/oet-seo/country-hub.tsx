// /[country] — the country hub. NEW.
//
// This is the spine of the internal linking. Before it existed, an organisation
// page belonged to nothing: nothing linked in, nothing linked across, and 99.7%
// of the surface was orphaned. A hub answers a real question of its own — which
// bodies in this country recognise OET, and what each of them asks — built
// entirely from pages that were actually emitted.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gradeLine, orgBySlug } from "@/lib/oet-seo/data";
import { nameVariants, isCurrentEnoughToIndex } from "@/lib/oet-seo/regulators";
import { countryNameForSlug, isHubCountry, orgsInCountry, hubProfessions } from "@/lib/oet-seo/links";
import { GRADE_DOCTRINE } from "./master";
import { RichPage, buildRichMetadata, type Crumb, type RelatedLink } from "./rich-page";

export function buildCountryMetadata(slug: string): Metadata {
  const country = countryNameForSlug(slug);
  if (!country || !isHubCountry(slug)) return { robots: { index: false, follow: true } };
  const n = orgsInCountry(slug).length;
  const title = `OET requirements in ${country} — every recognising body | AlmiOET`;
  const description = `The ${n} ${n === 1 ? "body" : "bodies"} in ${country} that recognise OET, the grade each one asks for, and which professions each covers.`;
  return buildRichMetadata({ title, description, path: `/${slug}` });
}

export function CountryHub({ slug }: { slug: string }) {
  const country = countryNameForSlug(slug);
  if (!country || !isHubCountry(slug)) notFound();
  const orgSlugs = orgsInCountry(slug);
  const orgs = orgSlugs.map((s) => orgBySlug(s)).filter((o): o is NonNullable<typeof o> => !!o);

  // Professions actually covered by the bodies in this country — real, not the
  // full list of twelve.
  const professionLabels = [...new Set(orgs.flatMap((o) => o.professions))].sort();

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label: "Recognising organisations", href: "/register" },
    { label: country, href: `/${slug}` },
  ];

  const faqs = [
    {
      q: `Which bodies in ${country} accept OET?`,
      a: `${orgs.map((o) => o.name).join("; ")}.`,
    },
    { q: `What OET grade is needed in ${country}?`, a: GRADE_DOCTRINE },
    ...(professionLabels.length
      ? [
          {
            q: `Which professions can use OET in ${country}?`,
            a: `${professionLabels.join(", ")}.`,
          },
        ]
      : []),
  ];

  const related: { heading: string; links: RelatedLink[] }[] = [
    {
      heading: "OET by profession",
      links: hubProfessions()
        .filter((p) => professionLabels.includes(p.label))
        .map((p) => ({ label: `OET for ${p.label.toLowerCase()}`, href: `/${p.slug}` })),
    },
    { heading: "Elsewhere", links: [{ label: "All recognising organisations", href: "/register" }] },
  ];

  return (
    <RichPage
      eyebrow="AlmiOET · by country"
      title={`OET in ${country} — who recognises it, and what they ask`}
      subtitle={`${orgs.length} ${orgs.length === 1 ? "body" : "bodies"} · grades per sub-test on the 0–500 scale`}
      trail={trail}
      sections={[]}
      faqs={faqs}
      related={related}
    >
      <section className="mx-auto max-w-3xl px-6 py-6">
        <h2 className="text-lg font-semibold text-almi-ink">Recognising bodies in {country}</h2>
        <ul className="mt-4 space-y-3">
          {orgs.map((o) => {
            const nv = nameVariants(o.name);
            const grade = gradeLine(o);
            return (
              <li key={o.slug} className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4">
                <Link href={`/register/${o.slug}`} className="text-sm font-semibold text-almi-coral hover:underline">
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
        <p className="mt-4 text-xs text-almi-text-muted">{GRADE_DOCTRINE}</p>
      </section>
    </RichPage>
  );
}
