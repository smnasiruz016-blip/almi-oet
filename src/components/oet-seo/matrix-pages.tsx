// The page types v2 renderers: country×profession, profession-by-country, and
// the ranking.
//
// Each one draws a body the composer has already built and the gate has already
// judged. Nothing is decided here except presentation and what the crawler is
// told — a page that reaches this file has earned its place, and a page that did
// not never gets here, because the route only builds what `emitted()` listed.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  composeCountryProfessionPage,
  composeProfessionByCountryPage,
  composeProfessionRankingPage,
  cellVerifiedOn,
  isMatrixCurrent,
} from "@/lib/oet-seo/compose-matrix";
import { professionSlugToLabel } from "@/lib/oet-seo/data";
import { nameVariants } from "@/lib/oet-seo/regulators";
import {
  BY_COUNTRY_SEGMENT,
  RANKING_SEGMENT,
  countryNameForSlug,
  countryProfessionsForCountry,
  countryProfessionsForProfession,
  isByCountryRenderable,
  isCountryProfessionRenderable,
  isHubCountry,
  isRankingRenderable,
} from "@/lib/oet-seo/links";
import { GRADE_DOCTRINE } from "./master";
import { inCountry } from "@/lib/oet-seo/compose-core";
import { RichPage, buildRichMetadata, type Crumb, type RelatedLink } from "./rich-page";

const AWAITING =
  "The figures below are compiled from published sources and have not yet been re-read against every body's own current page. Treat them as a starting point and confirm before you act on them.";

/** "the United Kingdom" reads correctly in a sentence; the bare name reads
 *  correctly in a title. Titles use the bare name. */
function label(professionSlug: string): string {
  return (professionSlugToLabel(professionSlug) ?? professionSlug).toLowerCase();
}

// ── TYPE 1 · /{country}/{profession} ────────────────────────────────────────

export function buildCountryProfessionMetadata(
  countrySlugValue: string,
  professionSlug: string,
): Metadata {
  const c = composeCountryProfessionPage(countrySlugValue, professionSlug);
  if (!c || !isCountryProfessionRenderable(countrySlugValue, professionSlug)) {
    return { robots: { index: false, follow: true } };
  }
  const { cell } = c;
  const n = cell.bodies.length;
  const term = c.wording.termPlural;
  const title =
    n === 1
      ? `OET for ${term} in ${inCountry(cell.country)} — ${nameVariants(cell.bodies[0].org.name).abbrev ?? cell.bodies[0].org.name} | AlmiOET`
      : `OET for ${term} in ${inCountry(cell.country)} — all ${n} bodies compared | AlmiOET`;
  const description =
    n === 1
      ? `What ${cell.bodies[0].org.name} requires of ${term} on OET, per sub-test, and how a result is used.`
      : `The ${n} bodies that publish an OET requirement for ${term} in ${inCountry(cell.country)}, each one's grade per sub-test, and what varies between them.`;
  return buildRichMetadata({
    title,
    description,
    path: `/${countrySlugValue}/${professionSlug}`,
    noindex: !isMatrixCurrent(cell.bodies),
  });
}

export function CountryProfessionPage({
  countrySlug: countrySlugValue,
  professionSlug,
}: {
  countrySlug: string;
  professionSlug: string;
}) {
  const c = composeCountryProfessionPage(countrySlugValue, professionSlug);
  if (!c || !isCountryProfessionRenderable(countrySlugValue, professionSlug)) notFound();
  const { cell } = c;
  const term = c.wording.termPlural;
  const n = cell.bodies.length;
  const current = isMatrixCurrent(cell.bodies);

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    ...(isHubCountry(countrySlugValue) ? [{ label: cell.country, href: `/${countrySlugValue}` }] : []),
    { label: cell.professionLabel, href: `/${countrySlugValue}/${professionSlug}` },
  ];

  const faqs = [
    {
      q: `What OET grade do ${term} need in ${inCountry(cell.country)}?`,
      a:
        n === 1
          ? `${cell.bodies[0].org.name} publishes the requirement, and it is shown in full on this page. ${GRADE_DOCTRINE}`
          : `There is no single figure: ${n} bodies publish one, and the table on this page shows each. ${GRADE_DOCTRINE}`,
    },
    {
      q: `Which bodies in ${inCountry(cell.country)} accept OET for ${term}?`,
      a: `${cell.bodies.map((b) => b.org.name).join("; ")}.`,
    },
    ...(cell.registrars.length
      ? [
          {
            q: `Which of them actually holds the register?`,
            a: `${cell.registrars.map((b) => b.org.name).join("; ")}. The others set an English requirement for a different decision, such as a visa or an assessment of qualifications.`,
          },
        ]
      : []),
  ];

  // Cross-links: the country hub and the profession page, as the spec asks, plus
  // the same profession in other countries — offered only where the target exists.
  const siblingCountries = countryProfessionsForProfession(professionSlug).filter(
    (s) => s !== countrySlugValue,
  );
  const related: { heading: string; links: RelatedLink[] }[] = [
    {
      heading: "Where this sits",
      links: [
        ...(isHubCountry(countrySlugValue)
          ? [{ label: `Every profession in ${inCountry(cell.country)}`, href: `/${countrySlugValue}` }]
          : []),
        {
          label: `OET for ${label(professionSlug)} — the test itself`,
          href: `/${professionSlug}`,
          blurb: `What the Writing letter and Speaking role-play ask of a ${c.wording.term}.`,
        },
        ...(isByCountryRenderable(professionSlug)
          ? [
              {
                label: `${cell.professionLabel} requirements by country`,
                href: `/${professionSlug}/${BY_COUNTRY_SEGMENT}`,
              },
            ]
          : []),
      ],
    },
    ...(siblingCountries.length
      ? [
          {
            heading: `${cell.professionLabel} elsewhere`,
            links: siblingCountries.map((s) => ({
              label: `${cell.professionLabel} in ${inCountry(countryNameForSlug(s) ?? s)}`,
              href: `/${s}/${professionSlug}`,
            })),
          },
        ]
      : []),
  ];

  return (
    <RichPage
      eyebrow={`AlmiOET · ${cell.country}`}
      title={
        n === 1
          ? `OET for ${term} in ${inCountry(cell.country)}`
          : `OET for ${term} in ${inCountry(cell.country)}: all ${n} bodies compared`
      }
      subtitle={`${n} ${n === 1 ? "body" : "bodies"} · grades per sub-test on the 0–500 scale · verified ${cellVerifiedOn(cell.bodies)}`}
      trail={trail}
      sections={c.sections}
      tables={c.tables}
      faqs={faqs}
      related={related}
      noindexNote={current ? null : AWAITING}
    />
  );
}

// ── TYPE 2 · /{profession}/by-country ───────────────────────────────────────

export function buildByCountryMetadata(professionSlug: string): Metadata {
  const c = composeProfessionByCountryPage(professionSlug);
  if (!c || !isByCountryRenderable(professionSlug)) return { robots: { index: false, follow: true } };
  const name = professionSlugToLabel(professionSlug) ?? professionSlug;
  return buildRichMetadata({
    title: `OET requirements for ${name.toLowerCase()} by country — ${c.rows.length} compared | AlmiOET`,
    description: `The OET grade ${name.toLowerCase()} need in ${c.rows.length} countries, the body that sets it in each, and where the bar is highest and lowest.`,
    path: `/${professionSlug}/${BY_COUNTRY_SEGMENT}`,
  });
}

export function ByCountryPage({ professionSlug }: { professionSlug: string }) {
  const c = composeProfessionByCountryPage(professionSlug);
  if (!c || !isByCountryRenderable(professionSlug)) notFound();
  const name = professionSlugToLabel(professionSlug) ?? professionSlug;

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label: name, href: `/${professionSlug}` },
    { label: "By country", href: `/${professionSlug}/${BY_COUNTRY_SEGMENT}` },
  ];

  const faqs = [
    {
      q: `Which countries accept OET for ${name.toLowerCase()}?`,
      a: `${c.rows.map((r) => r.cell.country).join("; ")}.`,
    },
    { q: `What OET grade is needed for ${name.toLowerCase()}?`, a: GRADE_DOCTRINE },
  ];

  const withPages = countryProfessionsForProfession(professionSlug);
  const related: { heading: string; links: RelatedLink[] }[] = [
    {
      heading: "Where this sits",
      links: [
        {
          label: `OET for ${name.toLowerCase()} — the test itself`,
          href: `/${professionSlug}`,
        },
        ...(isRankingRenderable(professionSlug)
          ? [
              {
                label: `Where the bar is lowest for ${name.toLowerCase()}`,
                href: `/${professionSlug}/${RANKING_SEGMENT}`,
              },
            ]
          : []),
      ],
    },
    ...(withPages.length
      ? [
          {
            heading: "Country by country",
            links: withPages.map((s) => ({
              label: `${name} in ${inCountry(countryNameForSlug(s) ?? s)}`,
              href: `/${s}/${professionSlug}`,
            })),
          },
        ]
      : []),
  ];

  return (
    <RichPage
      eyebrow="AlmiOET · by country"
      title={`OET requirements for ${name.toLowerCase()}, country by country`}
      subtitle={`${c.rows.length} countries · grades per sub-test on the 0–500 scale`}
      trail={trail}
      sections={c.sections}
      tables={c.tables}
      faqs={faqs}
      related={related}
    />
  );
}

// ── TYPE 3 · /{profession}/where-oet-is-easiest ─────────────────────────────

export function buildRankingMetadata(professionSlug: string): Metadata {
  const c = composeProfessionRankingPage(professionSlug);
  if (!c || !isRankingRenderable(professionSlug)) return { robots: { index: false, follow: true } };
  const name = professionSlugToLabel(professionSlug) ?? professionSlug;
  return buildRichMetadata({
    title: `Where the OET bar is lowest for ${name.toLowerCase()} — ${c.rows.length} countries ranked | AlmiOET`,
    description: `${c.rows.length} countries ordered by the OET grade ${name.toLowerCase()} must reach, lowest first — and why a lower English bar does not mean an easier registration.`,
    path: `/${professionSlug}/${RANKING_SEGMENT}`,
  });
}

export function RankingPage({ professionSlug }: { professionSlug: string }) {
  const c = composeProfessionRankingPage(professionSlug);
  if (!c || !isRankingRenderable(professionSlug)) notFound();
  const name = professionSlugToLabel(professionSlug) ?? professionSlug;
  const lowest = c.rows[0];

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label: name, href: `/${professionSlug}` },
    { label: "Where the bar is lowest", href: `/${professionSlug}/${RANKING_SEGMENT}` },
  ];

  const faqs = [
    {
      q: `Which country has the lowest OET requirement for ${name.toLowerCase()}?`,
      a: `On the published English requirement alone, ${inCountry(lowest.cell.country)} at grade ${lowest.bar?.grade}. That is the language condition only — registration also turns on qualifications, practice history and usually a competence assessment, and immigration is separate again.`,
    },
    { q: `Does a lower OET grade mean easier registration?`, a: `No. ${GRADE_DOCTRINE}` },
  ];

  const related: { heading: string; links: RelatedLink[] }[] = [
    {
      heading: "Where this sits",
      links: [
        ...(isByCountryRenderable(professionSlug)
          ? [
              {
                label: `${name} requirements by country`,
                href: `/${professionSlug}/${BY_COUNTRY_SEGMENT}`,
                blurb: "The same countries, with the full per-sub-test table.",
              },
            ]
          : []),
        { label: `OET for ${name.toLowerCase()} — the test itself`, href: `/${professionSlug}` },
      ],
    },
  ];

  return (
    <RichPage
      eyebrow="AlmiOET · ranked"
      title={`Where the OET bar is lowest for ${name.toLowerCase()}`}
      subtitle={`${c.rows.length} countries, ordered by the grade that binds · the English condition only`}
      trail={trail}
      sections={c.sections}
      tables={c.tables}
      faqs={faqs}
      related={related}
    />
  );
}

/** Exported for the country hub, which lists the professions it can link to. */
export function professionsWithPagesIn(countrySlugValue: string): string[] {
  return countryProfessionsForCountry(countrySlugValue);
}
