// Composing a corridor page.
//
// THE DESIGN CONSTRAINT, stated once because everything below follows from it:
// the origin-distinct material must dominate, and the destination's uniform steps
// must be LINKED rather than copied. Four corridors into the same destination
// share an application process, a competence test, a fee schedule and a list of
// accepted English tests. Restating those on each is how four pages become one
// page four times — the exact failure that cut Australia's twelve profession
// pages at 75-84% overlap.
//
// So the composer is deliberately lopsided. The origin regulator, its
// verification route, the attestation chain, the money and the elapsed time, the
// origin's reading of the English rule and the local search wording get full
// paragraphs. The destination gets one short section that NAMES its shared steps
// and links out.
//
// A SECOND CONSTRAINT, learned the expensive way: the words this file writes
// itself appear on all four pages. Sourced values differ per origin; connective
// prose does not. Every generic sentence added here is four identical sentences
// in the corpus, and 5-gram sibling overlap counts them. So the scaffolding is
// kept thin and, where it must exist, it names the origin country or its
// regulator so the n-grams break. This is not a style preference — it is the
// difference between four pages and one page four times.
//
// Nothing here is padded to help a page pass. The point of this module is the
// measurement, and a page that only clears the gate because it was inflated
// tells us nothing.

import { measure, sentence, type Composed, type Section } from "@/lib/oet-seo/compose-core";
import type { Corridor, JourneyDestination, SourcedFact } from "./types";

export type ComposedJourney = Composed & { corridor: Corridor };

/** "the United Kingdom", but "Pakistan". */
const NEEDS_ARTICLE = /^(United |Netherlands|Philippines|Bahamas|Maldives|Gambia|Czech )/;
export function inCountry(c: string): string {
  return NEEDS_ARTICLE.test(c) ? `the ${c}` : c;
}

/** The first real query string matching a theme, so headings are the searcher's
 *  words rather than ours. Returns null when the dataset has none — we do not
 *  invent a phrase and present it as how people search. */
function searchPhrase(c: Corridor, re: RegExp): string | null {
  const hit = (c.localSearchWording ?? []).find((w) => re.test(w));
  return hit ? hit.replace(/^./, (m) => m.toUpperCase()) : null;
}

function list(xs: string[]): string {
  if (xs.length <= 1) return xs[0] ?? "";
  return `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;
}

/** Every fact on the corridor, in render order, for the source list and the
 *  currency check. Keeping one list means a fact cannot be rendered without
 *  being citable, or held to a currency rule the source list never mentions. */
function factsOf(c: Corridor): { key: string; label: string; fact: SourcedFact }[] {
  const out: { key: string; label: string; fact: SourcedFact }[] = [];
  const add = (key: string, label: string, f?: SourcedFact) => {
    if (f) out.push({ key, label, fact: f });
  };
  add("originRegulator", "the regulator", c.originRegulator);
  add("verificationRoute", "the verification route", c.verificationRoute);
  add("feesTimeline", "eligibility, fees and timeline", c.feesTimeline);
  add("attestationChain", "the attestation chain", c.attestationChain);
  add("englishRoute", "the English requirement", c.englishRoute);
  return out;
}

export function composeJourney(
  corridor: Corridor,
  dest: JourneyDestination,
  occupationPlural: string,
): ComposedJourney {
  const sections: Section[] = [];
  const facts: string[] = [];
  const push = (s: Section | null, f: string[] = []) => {
    if (!s) return;
    sections.push(s);
    facts.push(...f);
  };
  const from = corridor.originCountry;
  const to = inCountry(corridor.destinationCountry);
  const reg = corridor.originRegulatorName;
  const one = occupationPlural.replace(/s$/, "");

  // ── 1. What is different about THIS corridor, in one line.
  //
  //       The batch's own summary, rendered as the page's lead. For India it is
  //       also the only place the state-by-state fees and timelines appear
  //       (KNMC ~2-4 weeks, TNNMC ~7 working days, DNC 15-30 days), so dropping
  //       it would lose real sourced facts, not just a restatement.
  if (corridor.originDistinctSummary) {
    push(
      {
        id: "at-a-glance",
        heading: `What is different about applying from ${from}`,
        paras: [sentence(corridor.originDistinctSummary)],
      },
      ["originSummary"],
    );
  }

  // ── 2. The origin regulator and its verification route. The largest
  //       origin-distinct block, and the step candidates most often start late:
  //       it does not depend on them, it depends on their council.
  {
    const paras: string[] = [
      `${dest.regulatorName} needs confirmation from the register you are already on. In ${from} that is ${reg}. ${sentence(corridor.originRegulator.value)}`,
      sentence(corridor.verificationRoute.value),
      `Start this early: the timetable is ${reg}'s, not yours.`,
    ];
    push(
      {
        id: "origin-verification",
        heading:
          searchPhrase(corridor, /verification|good standing/i) ??
          `Getting your registration verified by ${reg}`,
        paras,
      },
      ["originRegulator", "verificationRoute"],
    );
  }

  // ── 3. Eligibility, money and elapsed time — where the batch found them.
  //       Absent for origins where it did not. An absent slot renders nothing:
  //       a sentence about the absence of a fee schedule is not a fee schedule.
  if (corridor.feesTimeline) {
    push(
      {
        id: "fees-timeline",
        heading: `What ${reg} asks for, what it costs and how long it takes`,
        paras: [sentence(corridor.feesTimeline.value)],
      },
      ["feesTimeline"],
    );
  }

  // ── 4. The attestation chain. Genuinely different in every corridor that has
  //       one — different ministries, different order, different apostille date.
  if (corridor.attestationChain) {
    push(
      {
        id: "attestation",
        heading:
          searchPhrase(corridor, /attestation|apostille/i) ??
          `Getting your ${from} documents attested`,
        paras: [
          sentence(corridor.attestationChain.value),
          `Run this alongside the ${reg} verification, not after it.`,
        ],
      },
      ["attestationChain"],
    );
  }

  // ── 5. The English requirement, as it lands for THIS origin.
  //
  //       NEVER stated as an entitlement. An earlier version of this section told
  //       a Nigerian- or Philippine-trained nurse they "may not have to sit an
  //       English test at all" and that its "months and fees come out of the plan
  //       entirely". That was wrong, and v2 now carries the correction in the
  //       sourced value itself: none of these four countries is on the NMC's
  //       majority-English list, so none gets an automatic exemption, and the
  //       taught-in-English route needs a UK employer's supporting information on
  //       top of a transcript. Someone who believed the old wording would have
  //       skipped booking a test they in fact need.
  //
  //       Because the data now carries the nuance, this section adds almost no
  //       prose of its own — which is also why it stopped being the section that
  //       made all four pages read alike.
  if (corridor.englishRoute) {
    const unconfirmed = corridor.englishRoute.verifyStatus === "confirm-official";
    const paras: string[] = [sentence(corridor.englishRoute.value)];
    paras.push(
      unconfirmed
        ? `Assume you are sitting a test until ${dest.regulatorName} confirms otherwise in writing. It turns on your individual ${from} training record, not on your nationality.`
        : `It turns on your individual ${from} training record, not on your nationality.`,
    );
    // The SCORES are shared: identical for all four origins, owned by the base
    // record, rendered on the destination page. Named and linked, never restated.
    if (dest.sharedStepsHref) {
      paras.push(`The scores do not vary by origin, so they are on the ${dest.regulatorName} page.`);
    }
    push(
      {
        id: "english",
        // A query string like "can Nigerian nurses skip IELTS for NMC" is how
        // people SEARCH, not a claim we endorse. Used as a heading over an
        // unconfirmed route it reads as the answer, so it is only borrowed where
        // the fact is confirmed; otherwise the heading poses the question.
        heading: unconfirmed
          ? `Do ${from}-trained ${occupationPlural} need an English test for ${to}?`
          : (searchPhrase(corridor, /english|ielts|oet/i) ??
            `The English test ${from}-trained ${occupationPlural} have to sit`),
        paras,
      },
      ["englishRoute"],
    );
  }

  // ── 6. The destination end — SHORT, named and linked, never restated.
  //       Law #3 lives or dies in this section. It is four sentences long on
  //       purpose, and three of them name the origin.
  {
    push(
      {
        id: "destination",
        heading: `What ${to} asks of everyone`,
        paras: [
          `Past the ${from} steps above, nothing changes for a ${one} from ${from}: ${dest.regulatorName} asks everyone for ${dest.sharedStepsSummary}, set out in full on its own page rather than repeated here.`,
        ],
      },
      ["sharedSteps"],
    );
  }

  // ── 7. Local wording. Real query strings, which differ per origin because the
  //       origin's own institutions are named in them.
  if (corridor.localSearchWording?.length) {
    push(
      {
        id: "wording",
        heading: `What this route is called in ${from}`,
        paras: [
          `In ${from} people search for this as ${list(corridor.localSearchWording.map((w) => `"${w}"`))}. Those name ${reg}, which is why guidance written from the ${corridor.destinationCountry} end is hard to find from ${from}.`,
        ],
      },
      ["localSearchWording"],
    );
  }

  // ── 8. Sourcing and currency. One line per fact, naming who says so — the
  //       source list is itself origin-distinct, because these are the origin's
  //       own authorities.
  {
    const paras: string[] = [];
    const seen = new Set<string>();
    for (const { label, fact: f } of factsOf(corridor)) {
      if (!f.sourceName || !f.sourceUrl) continue;
      const line = `${f.sourceName} — ${label}${f.confidence === "secondary" ? ", a secondary summary rather than the authority's own page" : ""}: ${f.sourceUrl}`;
      if (seen.has(line)) continue;
      seen.add(line);
      paras.push(line);
      facts.push("officialUrl");
    }
    const pending = factsOf(corridor).filter((x) => x.fact.verifyStatus === "confirm-official");
    facts.push("lastVerified");
    paras.push(`Corridor facts last verified ${corridor.lastVerified}.`);
    if (pending.length) {
      paras.push(
        `Not yet re-read at source: ${list(pending.map((p) => p.label))}. Confirm with ${dest.regulatorName} and ${reg} first.`,
      );
    }
    push({ id: "source", heading: "Sources and last verified", paras }, []);
  }

  return { corridor, ...measure(sections, facts) };
}

/** Currency for a corridor.
 *
 *  A corridor must be dated, and ANY fact on it carrying `confirm-official` holds
 *  the page out of the index while still rendering. v1 checked only the exemption
 *  because that was the only fact that carried the marker; v2 spreads it across
 *  the regulator's name in Pakistan, the fee schedule in Nigeria, the state-council
 *  route in India and the PRC handoff in the Philippines, so the check now scans
 *  every fact. Missing one would index a page on the strength of a claim nobody
 *  has re-read.
 *
 *  The page still exists and still says it, with both authorities named — a reader
 *  who finds it is better off than one who finds nothing. `noindex, follow`, out
 *  of the sitemap, until confirmed. */
export function journeyNotCurrentReason(c: Corridor): string | null {
  if (!c.lastVerified) return "no lastVerified date";
  if (c.verifyStatus === "confirm-official") return "corridor awaits re-confirmation";
  const pending = factsOf(c).filter((x) => x.fact.verifyStatus === "confirm-official");
  if (pending.length) {
    return `awaits re-confirmation: ${pending.map((p) => p.key).join(", ")}`;
  }
  return null;
}

export function isJourneyCurrent(c: Corridor): boolean {
  return journeyNotCurrentReason(c) === null;
}
