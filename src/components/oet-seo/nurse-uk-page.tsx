// Renderer for /nurse/{nationality}/uk.
//
// Reuses RichPage wholesale — breadcrumbs, FAQ schema, cross-links, CTA and the
// disclaimer are the same on this page type as on every other, and the whole
// point of the new shape is the CONTENT, not a new chrome.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { composeNurseUk } from "@/lib/oet-seo/nurse-uk-compose";
import { RichPage, buildRichMetadata } from "./rich-page";

export function buildNurseUkMetadata(nationality: string): Metadata {
  const c = composeNurseUk(nationality);
  if (!c) return { robots: { index: false, follow: true } };
  return buildRichMetadata({ title: c.title, description: c.description, path: c.path });
}

export function NurseUkPage({ nationality }: { nationality: string }) {
  const c = composeNurseUk(nationality);
  if (!c) notFound();

  // The FAQ block is already inside `sections` under id "faq" so the gate
  // measured it; this reads it back out for the <dl> and the schema, exactly as
  // the corridor and register renderers do.
  const prose = c.sections.filter((s) => s.id !== "faq");

  return (
    <RichPage
      eyebrow="AlmiOET · Nurse to the UK"
      title={c.h1}
      subtitle={`${c.data.origin} to the NHS — cost in local currency, NMC steps, and what the job pays.`}
      trail={[
        { label: "AlmiOET", href: "/" },
        { label: "Nursing", href: "/nursing" },
        { label: `${c.data.origin} to the UK`, href: c.path },
      ]}
      sections={prose}
      tables={c.tables}
      faqs={c.faqs}
      related={[
        {
          heading: "The bodies behind each step",
          links: [
            {
              href: "/register/uk-nmc",
              label: "Nursing and Midwifery Council (NMC)",
              blurb: "The English requirement, the Test of Competence and the registration fees, in full.",
            },
            {
              href: "/nursing",
              label: "OET for nurses",
              blurb: "What the Writing letter and Speaking role-play ask of a nurse specifically.",
            },
          ],
        },
      ]}
    />
  );
}
