// /{profession}/{originCountry}/{destinationCountry} — the corridor journey. Pattern 5.
// e.g. /nursing/pakistan/united-kingdom
//
// The page a nurse in Lahore or Lagos is actually looking for: what THEIR council
// has to send, whether THEIR training exempts them from the English test, and
// what the destination asks on top. The destination's uniform steps — application,
// competence test, visa — are linked, never restated, because they are the same
// for every origin and repeating them is what would turn four corridors into one
// page four times.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { composeJourney, inCountry, isJourneyCurrent } from "@/lib/journey/compose";
import { destinationFor, searchTitle } from "@/lib/oet-seo/corridors";
import { journeyFor } from "@/lib/oet-seo/links";
import { professionSlugToLabel } from "@/lib/oet-seo/data";
import { GRADE_DOCTRINE } from "./master";
import { RichPage, buildRichMetadata, type Crumb, type RelatedLink } from "./rich-page";

const AWAITING =
  "The exemption position on this page is compiled from published sources and has not been re-read against the regulators' own current pages. Confirm it with both before you rely on it.";

type Args = { occupationSlug: string; originSlug: string; destinationSlug: string };

export function buildJourneyMetadata({ occupationSlug, originSlug, destinationSlug }: Args): Metadata {
  const c = journeyFor(occupationSlug, originSlug, destinationSlug);
  if (!c) return { robots: { index: false, follow: true } };
  const label = (professionSlugToLabel(occupationSlug) ?? occupationSlug).toLowerCase();
  const ex = c.englishExemption;
  // Search-first title: the corridor's own top query string, which is what people
  // actually type ("nurse UK from Pakistan"), not a phrasing we preferred.
  const title = `${searchTitle(c)} — verification, English and registration | AlmiOET`;
  // The description is what shows in a search result, so it is the LAST place to
  // float an unconfirmed exemption: a snippet reading "may not need an English
  // test" is read as the answer by people who never open the page. It states the
  // route's real content instead, and lets the page carry the nuance.
  const description = `What ${c.originRegulator} has to verify for the ${c.originCountry}-to-${c.destinationCountry} route, the English evidence ${c.destinationCountry} regulators require, and what to confirm before you book anything.`;
  return buildRichMetadata({
    title,
    description,
    path: `/${occupationSlug}/${originSlug}/${destinationSlug}`,
    noindex: !isJourneyCurrent(c),
  });
}

export function JourneyPage({ occupationSlug, originSlug, destinationSlug }: Args) {
  const c = journeyFor(occupationSlug, originSlug, destinationSlug);
  if (!c) notFound();
  const label = professionSlugToLabel(occupationSlug) ?? occupationSlug;
  const dest = destinationFor(c);
  const composed = composeJourney(c, dest, `${label.toLowerCase()}s`);
  const ex = c.englishExemption;

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label, href: `/${occupationSlug}` },
    {
      label: `${c.originCountry} to ${c.destinationCountry}`,
      href: `/${occupationSlug}/${originSlug}/${destinationSlug}`,
    },
  ];

  const faqs = [
    {
      q: `Do ${c.originCountry}-trained ${label.toLowerCase()}s need OET for ${inCountry(c.destinationCountry)}?`,
      a: ex
        ? `${ex.basis} Confirm with ${dest.regulatorName} and ${c.originRegulator}.`
        : GRADE_DOCTRINE,
    },
    {
      q: `Who verifies my existing registration?`,
      a: `${c.originRegulator} — ${c.originVerification}`,
    },
  ];

  const related: { heading: string; links: RelatedLink[] }[] = [
    {
      heading: "The steps that are the same for everyone",
      links: [
        ...(dest.sharedStepsHref
          ? [
              {
                label: `${dest.regulatorName} — the full requirement and process`,
                href: dest.sharedStepsHref,
                blurb: "Application, competence tests and the English grades, in one place.",
              },
            ]
          : []),
        { label: `OET for ${label.toLowerCase()}s`, href: `/${occupationSlug}` },
      ],
    },
  ];

  return (
    <RichPage
      eyebrow={`AlmiOET · ${c.originCountry} → ${c.destinationCountry}`}
      title={searchTitle(c)}
      subtitle={`${c.originRegulator} · verified ${c.lastVerified}`}
      trail={trail}
      sections={composed.sections}
      tables={composed.tables}
      faqs={faqs}
      related={related}
      noindexNote={ex?.verifyStatus === "confirm-official" ? AWAITING : null}
    />
  );
}
