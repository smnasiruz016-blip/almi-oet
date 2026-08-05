// /[profession]/[organization] — one profession at one body.
//
// This replaces /{profession}/from-{origin}/{org}. The origin segment is gone
// because it never changed a fact: the NMC asks the same grade of a nurse from
// Lagos as of one from Manila, and 191 copies of that page saying otherwise is
// what Google refused to index. What DOES vary here is real — the grade, and
// what the Writing letter and Speaking role-play ask of this profession.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { composeProfessionOrgPage } from "@/lib/oet-seo/compose";
import { isCurrentEnoughToIndex, nameVariants, verifiedOn } from "@/lib/oet-seo/regulators";
import { gradeLine, professionSlugToLabel } from "@/lib/oet-seo/data";
import {
  countryHubHrefForOrg,
  isOrgRenderable,
  isProfessionOrgRenderable,
} from "@/lib/oet-seo/links";
import { GRADE_DOCTRINE } from "./master";
import { RichPage, buildRichMetadata, type Crumb, type RelatedLink } from "./rich-page";

const AWAITING =
  "The requirement below is compiled from published sources and has not yet been re-read against this body's own current page. Treat it as a starting point and confirm it directly before you act on it.";

export function buildProfessionOrgMetadata(professionSlug: string, orgSlug: string): Metadata {
  const c = composeProfessionOrgPage(professionSlug, orgSlug);
  if (!c || !isProfessionOrgRenderable(professionSlug, orgSlug)) {
    return { robots: { index: false, follow: true } };
  }
  const { org } = c.merged;
  const nv = nameVariants(org.name);
  const term = c.wording.term;
  const grade = gradeLine(org);
  const body = nv.abbrev ?? org.name;
  // The searcher's own words first: the local job title, then the body, then
  // the number they came for.
  const title = `OET for ${term}s — ${body}${grade ? ` (${grade})` : ""} | AlmiOET`;
  const description = `${grade ? `${body} requires ${grade}. ` : `${body} recognises OET. `}What the OET Writing letter and Speaking role-play ask of a ${term}${org.country ? ` in ${org.country}` : ""}, and what this body accepts instead.`;
  return buildRichMetadata({
    title,
    description,
    path: `/${professionSlug}/${orgSlug}`,
    noindex: !isCurrentEnoughToIndex(orgSlug),
  });
}

export function ProfessionOrgPage({
  professionSlug,
  orgSlug,
}: {
  professionSlug: string;
  orgSlug: string;
}) {
  const c = composeProfessionOrgPage(professionSlug, orgSlug);
  if (!c || !isProfessionOrgRenderable(professionSlug, orgSlug)) notFound();
  const { org, reg } = c.merged;
  const label = professionSlugToLabel(professionSlug) ?? professionSlug;
  const nv = nameVariants(org.name);
  const body = nv.abbrev ?? org.name;
  const term = c.wording.term;
  const grade = gradeLine(org);
  const countryHub = countryHubHrefForOrg(orgSlug);

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label, href: `/${professionSlug}` },
    ...(countryHub ? [{ label: countryHub.label, href: countryHub.href }] : []),
    { label: body, href: `/${professionSlug}/${orgSlug}` },
  ];

  const faqs = [
    {
      q: `What OET grade does ${body} require for ${term}s?`,
      a: grade ? `${grade}. ${GRADE_DOCTRINE}` : GRADE_DOCTRINE,
    },
    {
      q: `Is the OET different for ${term}s?`,
      a: `Writing and Speaking are profession-specific — a ${term} writes the letter and sits the role-play their own role produces. Listening and Reading are the same papers for all twelve professions.`,
    },
    ...(reg?.validityYears
      ? [
          {
            q: `How long is an OET result valid for ${body}?`,
            a: `${reg.validityYears} year${reg.validityYears === 1 ? "" : "s"} from the test date.`,
          },
        ]
      : []),
  ];

  const related: { heading: string; links: RelatedLink[] }[] = [
    {
      heading: "Related pages",
      links: [
        ...(isOrgRenderable(orgSlug)
          ? [
              {
                label: `${body} — the full requirement`,
                href: `/register/${orgSlug}`,
                blurb: "Every profession this body covers, and how it treats results from more than one sitting.",
              },
            ]
          : []),
        { label: `OET for ${label.toLowerCase()}`, href: `/${professionSlug}`, blurb: "Practice, and every body that recognises OET for this profession." },
        ...(countryHub
          ? [{ label: `OET in ${countryHub.label}`, href: countryHub.href, blurb: "Every body in this country that recognises OET." }]
          : []),
      ],
    },
  ];

  return (
    <RichPage
      eyebrow={`AlmiOET · ${label}`}
      title={`OET for ${term}s at ${org.name}`}
      subtitle={[org.country, verifiedOn(reg) ? `last verified ${verifiedOn(reg)}` : null].filter(Boolean).join(" · ")}
      trail={trail}
      sections={c.sections}
      faqs={faqs}
      related={related}
      noindexNote={isCurrentEnoughToIndex(orgSlug) ? null : AWAITING}
    />
  );
}
