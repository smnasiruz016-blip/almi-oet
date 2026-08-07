// /nurse/{nationality}/uk — the nationality-first page type.
//
// A NEW SHAPE, and why it is new is worth stating: every other page type here is
// organised around an institution — a regulator, a country, a corridor. This one
// is organised around the QUERY. "Nigerian nurse UK", "Pakistani nurse NHS" is
// how people search and how the pages that currently rank for it are built. The
// nationality adjective is the subject, not a filter applied to a subject.
//
// WHY IT IS DISTINCT BY CONSTRUCTION rather than by composition tricks. Each page
// carries four things that exist nowhere else on the surface and cannot be shared
// with a sibling: cost in the reader's OWN currency, the test centres in their
// own cities, a migration statistic about their own country, and a nationality
// angle (Nigeria is red-listed so NHS trusts cannot recruit there; other origins
// are not). On top of that sit 9 origin questions and 7-8 UK questions written
// per nationality — roughly 16 Q&A pairs a page.
//
// The one genuinely shared block is the NHS pay table, and it is shared on
// purpose: it is the same figure for everyone, it is what the reader came for,
// and it is small enough for the gate to absorb. That is the law-#3 trade made
// deliberately rather than by accident. Everything else is keyed to nationality.

import RAW from "./nurse-uk-batch.json";
import { measure, type Section, type Table, type Composed } from "./compose-core";

export type NurseUkSource = { name: string; url: string; confidence?: string };
export type Qa = { question: string; answer: string };

export type NurseUkPageData = {
  origin: string;
  slug: string;
  nationality_adj: string;
  test_centres: string;
  cost_local: string;
  cost_gbp: string;
  migration_stat: string;
  nationality_angle: string;
  localized_search_terms: string[];
  origin_faqs: Qa[];
  uk_faqs: Qa[];
  sources: NurseUkSource[];
};

type Payload = { _template: Record<string, unknown>; pages: NurseUkPageData[] };
const DATA = RAW as unknown as Payload;

export const NURSE_UK_PAGES: readonly NurseUkPageData[] = DATA.pages ?? [];

export function nurseUkByNationality(nationality: string): NurseUkPageData | undefined {
  return NURSE_UK_PAGES.find((p) => p.nationality_adj === nationality);
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** NHS Agenda for Change, England 2025/26 — the one pay figure the corridor
 *  dataset sources directly ("£31,049/yr entry, Band 5"). Bands above 5 are NOT
 *  given numbers here. The entry rate is what is sourced, so the entry rate is
 *  what is stated, and progression is described in the words the source supports
 *  rather than as a table of figures nobody verified. */
const NHS_BAND5_ENTRY = "£31,049";

export type NurseUkComposed = Composed & {
  data: NurseUkPageData;
  path: string;
  title: string;
  h1: string;
  description: string;
  faqs: { q: string; a: string }[];
};

export function composeNurseUk(nationality: string): NurseUkComposed | null {
  const d = nurseUkByNationality(nationality);
  if (!d) return null;

  const Adj = cap(d.nationality_adj);
  const sections: Section[] = [];
  const facts: string[] = [];
  const push = (s: Section, f: string[]) => {
    sections.push(s);
    facts.push(...f);
  };

  // The three numbers people came for, before anything else.
  push(
    {
      id: "quick-numbers",
      heading: "What it costs, what it pays, how long it takes",
      paras: [
        `Cost, in your own currency: ${d.cost_local}`,
        `The same figure in sterling: ${d.cost_gbp}`,
        `NHS pay on arrival: ${NHS_BAND5_ENTRY} a year, the Band 5 entry point on the Agenda for Change scale for England in 2025/26. That is what a newly-registered nurse starts on, before any high-cost-area supplement or unsocial-hours enhancement.`,
        `Timeline: about 6 to 12 months end to end. The NMC steps happen before you travel, the visa itself takes roughly three weeks, and the OSCE is sat after arrival.`,
      ],
    },
    ["costLocal", "costGbp", "nhsSalary", "timeline"],
  );

  push(
    {
      id: "angle",
      heading: `What is different about applying as a ${Adj} nurse`,
      paras: [d.nationality_angle],
    },
    ["nationalityAngle"],
  );

  push(
    {
      id: "migration",
      heading: `How many ${Adj} nurses are already on the NMC register`,
      paras: [d.migration_stat],
    },
    ["migrationStat"],
  );

  push(
    {
      id: "steps",
      heading: `The route from ${d.origin} to the NMC register, in order`,
      paras: [
        "Sit OET (Nursing) at grade B in Listening, Reading and Speaking and at least C+ in Writing, or IELTS Academic 7.0. The NMC accepts either; OET is the one written around clinical material rather than academic essays.",
        "Open an NMC account and submit the eligibility application, then sit the CBT — the computer-based test of competence, taken in your own country before you travel.",
        "Ask your home council to send your certificate of current professional status directly to the NMC. It has to travel regulator to regulator; a copy in your own hand is not accepted.",
        "Apply for the Health and Care Worker visa once you hold a job offer and a certificate of sponsorship. It is exempt from the immigration health surcharge, which is the single largest saving on this route.",
        "Sit the OSCE after arrival, at an NMC-approved centre in the UK, and register.",
      ],
    },
    ["routeSteps"],
  );

  push(
    {
      id: "test-centres",
      heading: `Where you sit the tests in ${d.origin}`,
      paras: [d.test_centres],
    },
    ["testCentres"],
  );

  const faqs = [
    ...d.origin_faqs.map((q) => ({ q: q.question, a: q.answer })),
    ...d.uk_faqs.map((q) => ({ q: q.question, a: q.answer })),
  ];
  // Measured, like every other FAQ here: the text lives in `sections` under id
  // "faq" and the renderer draws that id as a <dl>. Words that ship but are
  // never measured are how a thin page slips through a green gate.
  push(
    {
      id: "faq",
      heading: `Questions ${Adj} nurses ask`,
      paras: faqs.flatMap((f) => [f.q, f.a]),
    },
    ["originFaqs", "ukFaqs"],
  );

  push(
    {
      id: "search-terms",
      heading: `What ${Adj} nurses actually search for`,
      paras: [
        `The phrases that reach the official pages are ${d.localized_search_terms.map((t) => `"${t}"`).join(", ")}.`,
      ],
    },
    ["localizedSearch"],
  );

  push(
    {
      id: "sources",
      heading: "Sources",
      paras: [
        ...d.sources.map((s) => `${s.name} — ${s.url}`),
        "Registration and immigration are decided by different bodies against different rules, and both change. Confirm each with the authority that owns it before you rely on it, and note that any figure in local currency moves with the exchange rate.",
      ],
    },
    ["sources"],
  );

  const tables: Table[] = [
    {
      id: "nhs-pay",
      caption: `What the NHS pays a ${Adj} nurse in 2025/26`,
      columns: ["Stage", "NHS band", "Annual pay (England)"],
      rows: [
        ["Newly registered, on arrival", "Band 5 entry", NHS_BAND5_ENTRY],
        ["Before registration, OSCE pending", "Pre-registration role", "Set by the employing trust"],
        ["Senior or specialist, with experience", "Band 6 and above", "Above the Band 5 scale, set by Agenda for Change"],
      ],
    },
  ];

  const title = `${Adj} Nurse to UK 2026: NMC Registration, OET and ${NHS_BAND5_ENTRY} NHS Salary`;
  const h1 = `${Adj} Nurse to the UK: NMC Registration, OET and NHS Salary (2026 Guide)`;
  const description = `What it costs a ${Adj} nurse to register with the UK NMC — in local currency and in sterling — what the NHS pays on arrival (${NHS_BAND5_ENTRY}, Band 5), how long it takes, and where to sit OET and the CBT in ${d.origin}.`;

  return {
    data: d,
    path: d.slug,
    title,
    h1,
    description,
    faqs,
    ...measure(sections, facts, tables),
  };
}

export function composeAllNurseUk(): NurseUkComposed[] {
  return NURSE_UK_PAGES.map((p) => composeNurseUk(p.nationality_adj)).filter(
    (x): x is NurseUkComposed => !!x,
  );
}
