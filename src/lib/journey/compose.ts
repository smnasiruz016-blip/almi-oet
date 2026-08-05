// Composing a corridor page.
//
// THE DESIGN CONSTRAINT, stated once because everything below follows from it:
// the origin-distinct material must dominate, and the destination's uniform steps
// must be LINKED rather than copied. Four corridors into the same destination
// share an application process, a competence test and a visa route. Restating
// those on each is how four pages become one page four times — the exact failure
// that cut Australia's twelve profession pages at 75-84% overlap.
//
// So the composer is deliberately lopsided. The origin regulator, its verification
// route, the exemption answer and the local search wording get full paragraphs.
// The destination requirement gets one short section and a link out. If that is
// not enough material to clear the gate, the honest conclusion is that the
// corridor is thin — not that the shared steps should be pasted in to bulk it up.
//
// Nothing here is padded to help a page pass. The point of this module is the
// measurement, and a page that only clears the gate because it was inflated
// tells us nothing.

import { measure, sentence, type Composed, type Section } from "@/lib/oet-seo/compose-core";
import type { Corridor, JourneyDestination } from "./types";

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
  const hit = (c.searchWording ?? []).find((w) => re.test(w));
  return hit ? hit.replace(/^./, (m) => m.toUpperCase()) : null;
}

function list(xs: string[]): string {
  if (xs.length <= 1) return xs[0] ?? "";
  return `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;
}

/** The caveat an exemption always carries. An exemption is a claim that saves a
 *  candidate a test and several hundred pounds; getting it wrong costs them a
 *  refused application, so it is never stated without naming both authorities. */
function exemptionCaveat(dest: JourneyDestination, originRegulator: string): string {
  return `Confirm this with ${dest.regulatorName} and with ${originRegulator} before you rely on it — an exemption is decided on your individual training record, not on your country alone.`;
}

// A NOTE ON WHAT IS NOT HERE.
//
// The corridor spec asks for "origin credential/attestation wording" in the body.
// The proof batch names that slot but does not fill it: `originDistinctContent`
// reads "Pakistani document/attestation specifics", "Nigerian attestation
// specifics" — a description of the material that should exist, not the material.
// The one concrete instance anywhere in the batch is the Philippine
// red-ribbon/apostille mention.
//
// So it is not rendered. Turning "Pakistani attestation specifics" into a
// sentence about Pakistani attestation would mean writing the facts myself, and
// on a page a nurse uses to plan an application that is the worst thing this
// composer could do. The gap is reported instead — it is one of the reasons the
// corridors measure as thin as they do.

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
  const ex = corridor.englishExemption;

  // ── 1. The exemption. Deliberately first: for half these corridors it is the
  //       difference between sitting a test and not sitting one, which outranks
  //       every other fact on the page.
  if (ex) {
    const paras: string[] = [];
    if (ex.eligible) {
      facts.push("englishExemption");
      // NEVER stated as an entitlement.
      //
      // An earlier version of this branch told a Nigerian- or Philippine-trained
      // nurse they "may not have to sit an English test at all" and that its
      // "months and fees come out of the plan entirely". That was wrong: no
      // country on this list gets an automatic exemption from the destination's
      // English requirement. Someone who believed it would have skipped booking a
      // test they in fact need, and found out at the application.
      //
      // An unconfirmed exemption is a question to take to the regulator, not an
      // answer to act on. Where the fact carries `confirm-official` the page says
      // so in the same breath as the possibility, and never nets out the cost of a
      // test the reader may well have to sit.
      const unconfirmed = ex.verifyStatus === "confirm-official";
      paras.push(
        `Whether a ${occupationPlural.replace(/s$/, "")} trained in ${from} can evidence English from their training rather than by sitting a test is a question to put to ${dest.regulatorName} directly. ${sentence(ex.basis)}`,
      );
      paras.push(
        unconfirmed
          ? `Do not plan around it. This route is not an automatic exemption and we have not re-read it against ${dest.regulatorName}'s current position — assume you will need a test result until ${dest.regulatorName} tells you otherwise in writing, and book accordingly.`
          : `It is decided on an individual training record rather than on nationality, so two nurses from the same country and the same year can get different answers.`,
      );
      if (dest.requirementLine) {
        facts.push("destinationRequirement");
        paras.push(
          `If a test is required, the published requirement is ${dest.requirementLine}. Each sub-test is reported separately, so the weakest one decides the outcome.`,
        );
      }
      paras.push(exemptionCaveat(dest, corridor.originRegulator));
    } else {
      facts.push("englishExemption");
      paras.push(
        `A ${occupationPlural.replace(/s$/, "")} trained in ${from} does have to evidence English with a test. ${sentence(ex.basis)}`,
      );
      if (dest.requirementLine) {
        facts.push("destinationRequirement");
        paras.push(
          `In practice that means reaching ${dest.requirementLine}. Each sub-test is reported separately, so the weakest one decides the outcome — there is no aggregate to fall back on.`,
        );
      }
      paras.push(exemptionCaveat(dest, corridor.originRegulator));
    }
    push(
      {
        id: "exemption",
        // Search-first: the dataset's own query strings. But a query string like
        // "Nigerian nurse UK without OET" is how people SEARCH, not a claim we
        // endorse — used as a heading over an unconfirmed exemption it reads as an
        // answer. So it is only used where the fact is confirmed; otherwise the
        // heading poses the question the section actually answers.
        heading:
          ex.eligible && ex.verifyStatus !== "confirm-official"
            ? (searchPhrase(corridor, /english|without/i) ??
              `Do ${from}-trained ${occupationPlural} need an English test for ${to}?`)
            : ex.eligible
              ? `Do ${from}-trained ${occupationPlural} need an English test for ${to}?`
              : `The English test ${from}-trained ${occupationPlural} have to sit`,
        paras,
      },
      [],
    );
  }

  // ── 2. The origin regulator and its verification route. The other genuinely
  //       origin-specific fact: it names a different body, with a different
  //       process, in every corridor.
  {
    const paras: string[] = [
      `Before ${dest.regulatorName} will register you, it has to hear from the body you are already registered with. In ${from} that is ${corridor.originRegulator}.`,
      sentence(corridor.originVerification),
      `This step is the one most often underestimated on this route, because it does not depend on you: it depends on ${corridor.originRegulator} sending the confirmation, on their timetable. It is worth starting it early and separately from everything else.`,
    ];
    push(
      {
        id: "origin-verification",
        heading: `${searchPhrase(corridor, /verification|good standing/i) ?? `Getting your registration verified by ${corridor.originRegulator}`}`,
        paras,
      },
      ["originRegulator", "originVerification"],
    );
  }

  // ── 3. The destination end — SHORT, and linked out rather than restated.
  {
    const paras: string[] = [
      dest.requirementLine
        ? `${dest.regulatorName} publishes one requirement for everyone: ${dest.requirementLine}. It does not vary by where you trained — what varies is whether you have to demonstrate it by test at all, which is the question above.`
        : `${dest.regulatorName} sets the same requirement for every applicant regardless of origin.`,
      `${sentence(dest.sharedStepsSummary)} Those steps are identical whichever country you are applying from, so they are not repeated here.`,
    ];
    push({ id: "destination", heading: `What ${to} asks of everyone`, paras }, ["sharedSteps"]);
  }

  // ── 4. Local wording. Real query strings, which differ per origin because the
  //       origin's own institutions are named in them.
  if (corridor.searchWording?.length) {
    push(
      {
        id: "wording",
        heading: `What this route is called in ${from}`,
        paras: [
          `Nurses making this move search for it in their own terms — ${list(
            corridor.searchWording.map((w) => `"${w}"`),
          )}. Those phrases name ${corridor.originRegulator} rather than the destination regulator, which is why guidance written from the ${corridor.destinationCountry} end is often hard to find from ${from}.`,
        ],
      },
      ["searchWording"],
    );
  }

  // ── 5. Sourcing and currency.
  {
    const paras: string[] = [];
    if (corridor.originRegulatorUrl) {
      facts.push("officialUrl");
      paras.push(`${corridor.originRegulator}: ${corridor.originRegulatorUrl}`);
    }
    facts.push("lastVerified");
    paras.push(`Corridor facts last verified ${corridor.lastVerified}.`);
    if (ex?.verifyStatus === "confirm-official") {
      paras.push(
        `The exemption position above is compiled from published sources and has not been re-read against ${dest.regulatorName}'s current page. Confirm it with ${dest.regulatorName} and with ${corridor.originRegulator} before acting on it.`,
      );
    }
    push({ id: "source", heading: "Sources and last verified", paras }, []);
  }

  return { corridor, ...measure(sections, facts) };
}

/** Currency for a corridor.
 *
 *  A corridor must be dated, and any fact on it carrying `confirm-official` holds
 *  the page OUT OF THE INDEX while still rendering. The exemption is exactly such
 *  a fact: it is the claim that saves a candidate a test, so it is the one most
 *  expensive to get wrong, and asking Google to rank a page asserting it before we
 *  have re-read the regulator's own page would be asking to be trusted for
 *  something we have not checked. The page still exists and still says it, with
 *  both authorities named — a reader who finds it is better off than one who
 *  finds nothing. `noindex, follow`, out of the sitemap, until confirmed. */
export function journeyNotCurrentReason(c: Corridor): string | null {
  if (!c.lastVerified) return "no lastVerified date";
  if (c.verifyStatus === "confirm-official") return "corridor awaits re-confirmation";
  if (c.englishExemption?.verifyStatus === "confirm-official") {
    return "exemption status awaits re-confirmation";
  }
  return null;
}

export function isJourneyCurrent(c: Corridor): boolean {
  return journeyNotCurrentReason(c) === null;
}
