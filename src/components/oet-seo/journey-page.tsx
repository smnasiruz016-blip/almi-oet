// /{profession}/{originCountry}/{destinationCountry} — the corridor journey. Pattern 5.
// e.g. /nursing/pakistan/united-kingdom
//
// The page a nurse in Lahore or Lagos is actually looking for: what THEIR council
// has to send, what it costs and how long it takes, which ministries their
// documents pass through, and how the destination's English rule lands for
// someone trained where they trained. The destination's uniform steps — the Test
// of Competence, the accepted tests and their scores, the fees — are linked,
// never restated, because they are the same for every origin and repeating them
// is what would turn four corridors into one page four times.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { composeJourney, inCountry, journeyVerdict } from "@/lib/journey/compose";
import { permanentCaveat } from "@/lib/journey/currency";
import { destinationFor, searchTitle, destinationGradeConflicts } from "@/lib/oet-seo/corridors";
import { journeyFor } from "@/lib/oet-seo/links";
import { professionSlugToLabel } from "@/lib/oet-seo/data";
import { RichPage, buildRichMetadata, type Crumb, type RelatedLink } from "./rich-page";

/** Shown ONLY when the refined currency gate actually holds the page back —
 *  a load-bearing fact on a weak source, a fact past its freshness window, or a
 *  conflict. Not shown for "confirm your own case": that is the permanent caveat
 *  below, and conflating the two is what noindexed all four proven corridors. */
function awaitingNote(blockers: string[]): string {
  return `This page is not currently listed for search while we re-check it: ${blockers.join("; ")}. Everything on it is still shown, with its sources.`;
}

type Args = { occupationSlug: string; originSlug: string; destinationSlug: string };

export function buildJourneyMetadata({ occupationSlug, originSlug, destinationSlug }: Args): Metadata {
  const c = journeyFor(occupationSlug, originSlug, destinationSlug);
  if (!c) return { robots: { index: false, follow: true } };
  const verdict = journeyVerdict(c, { conflicts: destinationGradeConflicts() });
  // Search-first title: the corridor's own top query string, which is what people
  // actually type ("PNMC good standing certificate for NMC UK"), not a phrasing
  // we preferred.
  const title = `${searchTitle(c)} — verification, English and registration | AlmiOET`;
  // The description is what shows in a search result, so it is the LAST place to
  // float an unconfirmed alternative route: a snippet reading "may not need an
  // English test" is read as the answer by people who never open the page. It
  // states the route's real content instead, and lets the page carry the nuance.
  const description = `What ${c.originRegulatorName} has to verify for the ${c.originCountry}-to-${c.destinationCountry} route, what it costs, and the English evidence ${c.destinationCountry} regulators require.`;
  return buildRichMetadata({
    title,
    description,
    path: `/${occupationSlug}/${originSlug}/${destinationSlug}`,
    noindex: !verdict.indexable,
  });
}

export function JourneyPage({ occupationSlug, originSlug, destinationSlug }: Args) {
  const c = journeyFor(occupationSlug, originSlug, destinationSlug);
  if (!c) notFound();
  const label = professionSlugToLabel(occupationSlug) ?? occupationSlug;
  const dest = destinationFor(c);
  const composed = composeJourney(c, dest, `${label.toLowerCase()}s`, {
    conflicts: destinationGradeConflicts(),
  });
  const verdict = composed.verdict;

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label, href: `/${occupationSlug}` },
    {
      label: `${c.originCountry} to ${c.destinationCountry}`,
      href: `/${occupationSlug}/${originSlug}/${destinationSlug}`,
    },
  ];

  // The FAQ answers from the corridor's own sourced values. It never paraphrases
  // them into something shorter and more confident than the source: an answer box
  // is the surface most likely to be read alone, out of the page's context.
  const faqs = [
    {
      q: `Do ${c.originCountry}-trained ${label.toLowerCase()}s need OET or IELTS for ${inCountry(c.destinationCountry)}?`,
      a: c.englishRoute
        ? `${c.englishRoute.value} Confirm with ${dest.regulatorName} and ${c.originRegulatorName}.`
        : `Confirm the current English requirement with ${dest.regulatorName} and ${c.originRegulatorName}.`,
    },
    {
      q: `Who verifies my existing registration?`,
      a: `${c.originRegulatorName}. ${c.verificationRoute.value}`,
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
                blurb:
                  "The Test of Competence, the accepted English tests and their scores, and the registration fees — in one place, because they do not change with where you trained.",
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
      subtitle={`${c.originRegulatorName} · verified ${c.lastVerified}`}
      trail={trail}
      sections={composed.sections}
      tables={composed.tables}
      faqs={faqs}
      related={related}
      caveat={permanentCaveat(dest.regulatorName, c.originRegulatorName, c.lastVerified)}
      noindexNote={verdict.indexable ? null : awaitingNote(verdict.blockers)}
    />
  );
}
