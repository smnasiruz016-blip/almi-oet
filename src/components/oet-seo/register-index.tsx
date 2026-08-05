// /register — the index hub. NEW.
//
// /register/{org} pages existed for months with nothing at /register: the parent
// of the whole branch was a 404. This fixes that orphan and gives every
// organisation page a real parent to be reached from, grouped by country so the
// list is navigable rather than 600 names in a row.

import type { Metadata } from "next";
import Link from "next/link";
import { gradeLine, orgBySlug } from "@/lib/oet-seo/data";
import { nameVariants } from "@/lib/oet-seo/regulators";
import { hubCountries, orgsInCountry, renderableOrgs } from "@/lib/oet-seo/links";
import { GRADE_DOCTRINE } from "./master";
import { RichPage, buildRichMetadata, type Crumb } from "./rich-page";

export function buildRegisterIndexMetadata(): Metadata {
  const n = renderableOrgs().length;
  const c = hubCountries().length;
  return buildRichMetadata({
    title: "Who recognises OET — every body, by country | AlmiOET",
    description: `The ${n} regulators and boards we hold verified OET requirements for, across ${c} ${c === 1 ? "country" : "countries"}: the grade each asks for, whether results combine across sittings, and what it accepts instead.`,
    path: "/register",
  });
}

export function RegisterIndex() {
  const countries = hubCountries();
  const total = renderableOrgs().length;

  const trail: Crumb[] = [
    { label: "AlmiOET", href: "/" },
    { label: "Recognising organisations", href: "/register" },
  ];

  const faqs = [
    {
      q: "Which regulators accept OET?",
      a: `We publish verified requirements for ${total} ${total === 1 ? "body" : "bodies"} across ${countries.length} ${countries.length === 1 ? "country" : "countries"}: ${countries.map((c) => c.country).join(", ")}. OET's own recognition list is longer; a page appears here only once we hold enough sourced detail about a body to be useful.`,
    },
    { q: "What OET grade do regulators require?", a: GRADE_DOCTRINE },
  ];

  return (
    <RichPage
      eyebrow="AlmiOET · OET recognition"
      title="Who recognises OET"
      subtitle={`${total} ${total === 1 ? "body" : "bodies"} · ${countries.length} ${countries.length === 1 ? "country" : "countries"}`}
      trail={trail}
      sections={[]}
      faqs={faqs}
      related={[
        {
          heading: "By country",
          links: countries.map((c) => ({ label: `OET in ${c.country}`, href: `/${c.slug}` })),
        },
      ]}
    >
      <section className="mx-auto max-w-3xl px-6 py-6">
        <p className="text-sm text-almi-text">
          Each page below is built from that body&apos;s own published requirement: the grade per
          sub-test, whether results from more than one sitting can be combined, how long a result
          stays acceptable, and what the body takes instead of OET. We publish a page only where we
          hold enough sourced detail for it to answer a real question — so this list is shorter than
          OET&apos;s recognition list, and grows as more bodies are researched.
        </p>
        {countries.map((c) => (
          <div key={c.slug} className="mt-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
              <Link href={`/${c.slug}`} className="hover:text-almi-coral hover:underline">
                {c.country}
              </Link>
            </h2>
            <ul className="mt-3 space-y-1.5">
              {orgsInCountry(c.slug).map((s) => {
                const o = orgBySlug(s);
                if (!o) return null;
                const nv = nameVariants(o.name);
                return (
                  <li key={s} className="text-sm">
                    <Link href={`/register/${s}`} className="font-medium text-almi-coral hover:underline">
                      {nv.abbrev ? `${nv.abbrev} — ${nv.full}` : nv.full}
                    </Link>
                    <span className="text-almi-text-muted"> · {gradeLine(o) ?? "grade not published"}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </RichPage>
  );
}
