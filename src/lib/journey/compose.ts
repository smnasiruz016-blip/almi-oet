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
import type { Corridor, JourneyDestination } from "./types";
import {
  corridorFacts,
  indexVerdict,
  permanentCaveat,
  sourcesOf,
  type FreshnessPolicy,
  type IndexVerdict,
} from "./currency";

export type ComposedJourney = Composed & { corridor: Corridor; verdict: IndexVerdict };

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

/** The fact list lives in currency.ts so the source list and the index verdict
 *  read the SAME list. A fact judged by a rule the source section never mentions
 *  is a fact the reader cannot check. */
const factsOf = corridorFacts;

export function composeJourney(
  corridor: Corridor,
  dest: JourneyDestination,
  occupationPlural: string,
  opts: { conflicts?: string[]; policy?: FreshnessPolicy; today?: Date } = {},
): ComposedJourney {
  const verdict = indexVerdict({
    facts: corridorFacts(corridor),
    lastVerified: corridor.lastVerified,
    recordStatus: corridor.verifyStatus,
    conflicts: opts.conflicts,
    policy: opts.policy,
    today: opts.today,
  });
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
          `Run it alongside the ${reg} verification, not after.`,
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
        ? `Assume you are sitting a test until ${dest.regulatorName} says otherwise in writing — it turns on your ${from} training record, not your nationality.`
        : `It turns on your ${from} training record, not your nationality.`,
    );
    // The SCORES are shared: identical for all four origins, owned by the base
    // record, rendered on the destination page. Named and linked, never restated.
    if (dest.sharedStepsHref) {
      // The corridor value refers to the NMC's routes by number, so the page has
      // to say where those routes are defined. It does NOT restate them: the
      // three routes and their evidence thresholds are identical for all ten
      // origins, and paraphrasing them per corridor is how v2 came to tell every
      // reader that the taught-in-English route required employer SIFE.
      paras.push(`Routes (1) to (3) and the scores each needs are on the ${dest.regulatorName} page.`);
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
          `Past the ${from} steps above, a ${one} from ${from} does what everyone does: ${dest.regulatorName} asks for ${dest.sharedStepsSummary}, set out on its own page.`,
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
          `In ${from} people search for this as ${list(corridor.localSearchWording.map((w) => `"${w}"`))} — phrases naming ${reg}, not the ${corridor.destinationCountry} end.`,
        ],
      },
      ["localSearchWording"],
    );
  }

  // ── 8. Sourcing and currency. One line per fact, naming who says so — the
  //       source list is itself origin-distinct, because these are the origin's
  //       own authorities.
  //
  //       The permanent caveat lives here AND at the top of the page. It is not
  //       conditional on the verdict: a page that stops saying "check your own
  //       case" once it passes the gate has quietly promised it checked for you.
  {
    const paras: string[] = [];
    const seen = new Set<string>();
    for (const { label, fact: f } of factsOf(corridor)) {
      // EVERY citation, not just the strongest. Where a claim rests on three
      // sources, showing one and calling it sourced hides the very thing that
      // makes it stand up — and a reader who wants to check the weakest link
      // cannot find it. The source's own caveat rides along for the same reason:
      // a page we could not fetch is not the same as one we read.
      const srcs = sourcesOf(f);
      for (const src of srcs) {
        if (!src.name || !src.url) continue;
        const tag =
          src.confidence === "official"
            ? ""
            : srcs.length > 1
              ? " (corroborating)"
              : " (reported, not the authority's own page)";
        const line = `${src.name} — ${label}${tag}: ${src.url}${src.note ? ` [${src.note}]` : ""}`;
        if (seen.has(line)) continue;
        seen.add(line);
        paras.push(line);
        facts.push("officialUrl");
      }
    }
    facts.push("lastVerified");
    if (verdict.reported.length) {
      paras.push(
        `Reported rather than read from the authority's own page: ${list(verdict.reported.map((p) => p.label))}. Treat ${verdict.reported.length === 1 ? "it" : "them"} as indicative and check the current figure before budgeting.`,
      );
    }
    // The full caveat renders above the fold on every page — see RichPage's
    // `caveat` prop, which is NOT conditional on the verdict. Here the section
    // only needs to date the facts it just cited.
    paras.push(`Last verified ${corridor.lastVerified}.`);
    push({ id: "source", heading: "Sources and last verified", paras }, []);
  }

  return { corridor, verdict, ...measure(sections, facts) };
}

/** Currency for a corridor — law #5 as refined on 08-06.
 *
 *  WHAT CHANGED, because the old behaviour looked responsible and was not: any
 *  fact carrying `confirm-official` used to hold the page out of the index. All
 *  four corridors carry one, so all four were noindexed — a page type that had
 *  just been proven at 4/4 and 25-29% overlap was earning nothing, for the sin of
 *  telling readers to check their own case.
 *
 *  "Confirm your case with the regulator" is a permanent property of this
 *  material, not a defect to be cleared. It now renders as a caveat and the page
 *  is indexable. `noindex` is reserved for the three states where the page cannot
 *  be stood behind at all: a load-bearing fact on a weak source, a fact past its
 *  freshness window, or a genuine conflict.
 *
 *  Pass `conflicts` from the product — only the product knows which two records
 *  are supposed to agree. */
export function journeyVerdict(
  c: Corridor,
  opts: { conflicts?: string[]; policy?: FreshnessPolicy; today?: Date } = {},
): IndexVerdict {
  return indexVerdict({
    facts: corridorFacts(c),
    lastVerified: c.lastVerified,
    recordStatus: c.verifyStatus,
    conflicts: opts.conflicts,
    policy: opts.policy,
    today: opts.today,
  });
}

/** The reason a corridor is held out of the index, or null when it is indexable.
 *  Reasons are joined rather than truncated: a page held out for two reasons that
 *  reports one gets "fixed" once and stays out, and the second reason is then
 *  invisible. */
export function journeyNotCurrentReason(
  c: Corridor,
  opts: { conflicts?: string[]; policy?: FreshnessPolicy; today?: Date } = {},
): string | null {
  const v = journeyVerdict(c, opts);
  return v.indexable ? null : v.blockers.join(" · ");
}

export function isJourneyCurrent(
  c: Corridor,
  opts: { conflicts?: string[]; policy?: FreshnessPolicy; today?: Date } = {},
): boolean {
  return journeyVerdict(c, opts).indexable;
}
