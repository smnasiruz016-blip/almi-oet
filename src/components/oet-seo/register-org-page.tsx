// /register/[organization] — one recognising organisation, composed from real
// fields and gated before it is ever built. The page no longer restates OET's
// scrape in a box; it says what this body requires, how it treats results from
// more than one sitting, what it accepts instead, and where OET sits in its own
// process — because those are the things a candidate is actually trying to find.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { composeOrgPage } from "@/lib/oet-seo/compose";
import { isCurrentEnoughToIndex, nameVariants, verifiedOn } from "@/lib/oet-seo/regulators";
import { gradeLine } from "@/lib/oet-seo/data";
import {
  countryHubHrefForOrg,
  isOrgRenderable,
  professionsForOrgRenderable,
} from "@/lib/oet-seo/links";
import { orgNote } from "@/lib/oet-seo/org-notes";
import { permanentCaveat } from "@/lib/journey/currency";
import { GRADE_DOCTRINE, OetSeoOrgNote } from "./master";
import { RichPage, buildRichMetadata, type Crumb, type RelatedLink } from "./rich-page";

const AWAITING =
  "The requirement below is compiled from published sources and has not yet been re-read against this body's own current page. Treat it as a starting point and confirm it directly before you act on it.";

export function buildRegisterMetadata(orgSlug: string): Metadata {
  const c = composeOrgPage(orgSlug);
  if (!c || !isOrgRenderable(orgSlug)) return { robots: { index: false, follow: true } };
  const { org } = c.merged;
  const grade = gradeLine(org);
  const nv = nameVariants(org.name);
  // Front-load the abbreviation people actually type, then the requirement.
  const lead = nv.abbrev ? `${nv.abbrev} OET requirement` : `${org.name} OET requirement`;
  const title = `${lead}${grade ? ` — ${grade}` : ""} | AlmiOET`;
  const description = grade
    ? `${org.name}${org.country ? ` (${org.country})` : ""} requires ${grade} for registration. What it accepts instead, whether results combine across sittings, and where OET sits in its process.`
    : `${org.name}${org.country ? ` (${org.country})` : ""} recognises OET. What it accepts, whether results combine across sittings, and where OET sits in its registration process.`;
  return buildRichMetadata({
    title,
    description,
    path: `/register/${orgSlug}`,
    noindex: !isCurrentEnoughToIndex(orgSlug),
  });
}

export function RegisterOrgPage({ orgSlug }: { orgSlug: string }) {
  const c = composeOrgPage(orgSlug);
  if (!c || !isOrgRenderable(orgSlug)) notFound();
  const { org, reg } = c.merged;
  const grade = gradeLine(org);
  const note = orgNote(org.slug);
  const nv = nameVariants(org.name);
  const countryHub = countryHubHrefForOrg(orgSlug);
  const professions = professionsForOrgRenderable(orgSlug);

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label: "Recognising organisations", href: "/register" },
    ...(countryHub ? [{ label: countryHub.label, href: countryHub.href }] : []),
    { label: nv.abbrev ?? org.name, href: `/register/${orgSlug}` },
  ];

  const faqs = [
    {
      q: `What OET grade does ${nv.abbrev ?? org.name} require?`,
      a: grade ? `${grade}. ${GRADE_DOCTRINE}` : GRADE_DOCTRINE,
    },
    ...(reg?.combiningRule === null
      ? [
          {
            q: `Can I combine OET results from two sittings for ${nv.abbrev ?? org.name}?`,
            a: `${org.name} publishes no provision for combining results across sittings, so plan to reach every grade in one attempt.`,
          },
        ]
      : []),
    ...(reg?.alternativeTests?.length
      ? [
          {
            q: `Does ${nv.abbrev ?? org.name} accept anything other than OET?`,
            a: `Yes — it also recognises ${reg.alternativeTests.join("; ")}.`,
          },
        ]
      : []),
    ...(professions.length
      ? [
          {
            q: `Which professions does ${nv.abbrev ?? org.name} recognise OET for?`,
            a: `${org.professions.join(", ")}.`,
          },
        ]
      : []),
  ];

  const related: { heading: string; links: RelatedLink[] }[] = [];
  if (professions.length) {
    related.push({
      heading: `${nv.abbrev ?? org.name} by profession`,
      links: professions.map((p) => ({
        label: `${p.label} — ${nv.abbrev ?? org.name}`,
        href: `/${p.slug}/${orgSlug}`,
        blurb: `What the Writing letter and Speaking role-play ask of a ${p.label.toLowerCase()}.`,
      })),
    });
  }
  if (countryHub) {
    related.push({
      heading: "Where this sits",
      links: [
        { label: `OET in ${countryHub.label}`, href: countryHub.href, blurb: "Every body in this country that recognises OET." },
        { label: "All recognising organisations", href: "/register" },
      ],
    });
  }

  return (
    <RichPage
      eyebrow="AlmiOET · OET recognition"
      title={`${org.name} — the OET requirement`}
      subtitle={[org.type ?? "Recognising organisation", org.country, verifiedOn(reg) ? `last verified ${verifiedOn(reg)}` : null]
        .filter(Boolean)
        .join(" · ")}
      trail={trail}
      sections={c.sections}
      faqs={faqs}
      related={related}
      /* Law #5: the permanent caveat renders on every page, indexable or not,
         and is never cleared. On this page it matters most — it is the one the
         corridors link to for the shared steps, so it is where a reader lands
         expecting the definitive figure. */
      caveat={permanentCaveat(
        org.name,
        "your own national council",
        verifiedOn(reg) ?? "the date shown above",
      )}
      noindexNote={isCurrentEnoughToIndex(orgSlug) ? null : AWAITING}
    >
      {note && (
        <div className="mx-auto max-w-3xl px-6">
          <OetSeoOrgNote {...note} />
        </div>
      )}
    </RichPage>
  );
}
