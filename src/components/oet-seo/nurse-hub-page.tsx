// /nurse — the hub the fifteen nationality pages hang off.
//
// Its job is linking, and it is honest about that: it does not restate what the
// fifteen say, it says what differs between them and points at each. Composed
// through the same measuring tape so the page has to be worth existing rather
// than being a list of links with a heading on top.

import type { Metadata } from "next";
import { measure, type Section, type Table } from "@/lib/oet-seo/compose-core";
import { linkableNurseUkPages, NURSE_HUB_PATH } from "@/lib/oet-seo/nurse-uk-links";
import { RichPage, buildRichMetadata } from "./rich-page";

const TITLE = "Nurses to the UK by Country: NMC Registration, OET and NHS Salary";
const DESCRIPTION =
  "What it costs a nurse to register with the UK NMC from fifteen countries — in local currency and sterling — with the test centres in each country, the NMC route in order, and what the NHS pays on arrival.";

function compose() {
  const pages = linkableNurseUkPages();
  const sections: Section[] = [
    {
      id: "what-this-is",
      heading: "One route, fifteen starting points",
      paras: [
        `The steps into the UK register are the same wherever you trained: OET or IELTS, the NMC's computer-based test before you travel, a certificate of current professional status sent regulator to regulator, the Health and Care Worker visa, and the OSCE after you arrive.`,
        `What is not the same is everything that decides whether you can afford it and how long it takes — which council issues your good standing and what it charges, which cities you can sit the tests in, whether your country is on the red list so NHS trusts cannot recruit you directly, and what the total comes to in the currency you are actually paid in.`,
        `So there is a page per country rather than one page with a dropdown. Each carries its own figures.`,
      ],
    },
    {
      id: "shared",
      heading: "What is true for everyone",
      paras: [
        `The NMC asks for OET (Nursing) at grade B in Listening, Reading and Speaking and at least C+ in Writing, or IELTS Academic 7.0. Either is accepted; OET is the one written around clinical material.`,
        `NHS pay on arrival is £31,049 a year, the Band 5 entry point on the Agenda for Change scale for England in 2025/26, before any high-cost-area supplement or unsocial-hours enhancement.`,
        `End to end the process runs about 6 to 12 months. The visa itself is roughly three weeks of that; the rest is the NMC's steps and your own council's response time.`,
      ],
    },
    {
      id: "countries",
      heading: "Choose the country you trained in",
      paras: pages.map(
        (p) => `${p.origin}: ${p.nationality_angle}`,
      ),
    },
  ];

  const tables: Table[] = [
    {
      id: "by-country",
      caption: "Cost of the whole route, by country of training",
      columns: ["Trained in", "Cost in sterling", "Page"],
      rows: pages.map((p) => [p.origin, p.cost_gbp.replace(/^Approximately\s*/i, ""), p.slug]),
    },
  ];

  const facts = ["sharedRoute", "nhsSalary", "timeline", "countryList", "costTable", "nationalityAngles"];
  return measure(sections, facts, tables);
}

export function buildNurseHubMetadata(): Metadata {
  return buildRichMetadata({ title: TITLE, description: DESCRIPTION, path: NURSE_HUB_PATH });
}

export function NurseHubPage() {
  const c = compose();
  const pages = linkableNurseUkPages();
  return (
    <RichPage
      eyebrow="AlmiOET · Nurses to the UK"
      title="Nurses to the UK, by the country you trained in"
      subtitle="Fifteen countries, each with its own costs, its own council and its own test centres."
      trail={[
        { label: "AlmiOET", href: "/" },
        { label: "Nurses to the UK", href: NURSE_HUB_PATH },
      ]}
      sections={c.sections}
      tables={c.tables}
      related={[
        {
          heading: "Every country, in full",
          links: pages.map((p) => ({
            label: `${p.origin} — ${p.cost_gbp.replace(/^Approximately\s*/i, "").split(" (")[0]}`,
            href: p.slug,
            blurb: `Cost in local currency, ${p.origin} test centres, and how many ${p.origin}-trained nurses are already on the register.`,
          })),
        },
      ]}
    />
  );
}
