// AlmiOET's corridor dataset, wired into the generic journey module.
//
// The module in src/lib/journey knows nothing about OET: it takes corridors and
// a destination description. This file is the adapter — it normalises the proof
// batch into the module's shape and answers "what does the destination ask?"
// from the SAME source the rest of the surface uses, enrichment v3 plus the base
// org record.
//
// ON v2. The batch this reads is v2, which supersedes v1 in three ways that
// matter here:
//
//   1. Facts arrive as {value, sourceUrl, sourceName, confidence, asOf} objects
//      rather than bare strings, so provenance survives all the way to render.
//   2. The origin side gained the slots v1 named but never filled — the
//      attestation chain, the fees and the timeline. v1's `originDistinctContent`
//      read "Pakistani document/attestation specifics", a description of material
//      rather than material; the composer refused to render it and said so. v2
//      fills them.
//   3. The destination's uniform facts moved into their own `sharedDestination`
//      block, which is rendered ONCE on /register/{org} and linked from every
//      corridor. They are deliberately not exposed per-corridor: law #3.
//
// The corridor JSON still does not carry the NMC's grades. The base record owns
// grades everywhere else, and a second copy inside a corridor file is exactly how
// enrichment v1 published three regulators' figures wrongly.

import RAW from "./corridors.json";
import { orgBySlug, gradeLine } from "./data";
import { regulatorBySlug, verifiedOn, nameVariants } from "./regulators";
import type { Corridor, JourneyDataset, JourneyDestination, SourcedFact } from "@/lib/journey/types";

type RawFact = {
  value: string;
  sourceUrl?: string;
  sourceName?: string;
  confidence?: string;
  asOf?: string;
  verifyStatus?: string;
  note?: string;
};

type RawCorridor = {
  slug: string;
  route?: string;
  originCountry: string;
  originRegulator: RawFact;
  verificationRoute: RawFact;
  attestationChain?: RawFact;
  /** Nigeria's slot. Named for what it holds rather than for one origin. */
  verificationEligibilityFeesTimeline?: RawFact;
  englishRoute?: RawFact;
  originDistinctSummary?: string;
  localSearchWording?: string[];
  lastVerified: string;
  verifyStatus?: string;
};

export type SharedDestination = {
  note: string;
  occupation: string;
  country: string;
  regulator: string;
  testOfCompetence: RawFact;
  englishAcceptedTests: RawFact;
  nmcFees: RawFact;
  englishMajorityCountryList: RawFact;
  visa?: string;
};

type RawPayload = {
  _meta: Record<string, unknown>;
  sharedDestination: SharedDestination;
  corridors: RawCorridor[];
};

const DATA = RAW as unknown as RawPayload;

/** The destination regulator this proof batch routes into.
 *
 *  Held here as a SLUG, not read from the batch. v2 names the destination
 *  "Nursing and Midwifery Council (NMC)" — a display name, not an identifier —
 *  and resolving a slug by matching that string against 610 org names is the
 *  kind of lookup that silently picks the wrong body the first time two
 *  regulators share a word. The slug is the join key; the batch supplies facts. */
export const CORRIDOR_DESTINATION_ORG = "uk-nmc";

/** The uniform destination facts. Rendered ONCE, on /register/{org}. Exported
 *  for that page and for nothing else — no corridor may read this. */
export const SHARED_DESTINATION: SharedDestination = DATA.sharedDestination;

function fact(f: RawFact | undefined): SourcedFact | undefined {
  if (!f?.value) return undefined;
  return {
    value: f.value,
    sourceUrl: f.sourceUrl,
    sourceName: f.sourceName,
    confidence: f.confidence as SourcedFact["confidence"],
    asOf: f.asOf,
    verifyStatus: f.verifyStatus,
    note: f.note,
  };
}

/** A regulator's short name, out of the sourced sentence that introduces it.
 *
 *  The batch's `originRegulator.value` is a full sentence — it has to be, because
 *  it carries the portal, the payment rail or the rename history alongside the
 *  name. But a heading needs "the Indian Nursing Council (INC)", not the sentence
 *  that explains what the INC does.
 *
 *  Every regulator on this surface introduces itself as "Name (ABBREV)", which is
 *  what the lookup keys on. If a future corridor arrives without one, this falls
 *  back to the first clause rather than guessing: a slightly long heading is a
 *  cosmetic problem, a wrong regulator name on a registration page is not. */
function shortRegulatorName(value: string): string {
  const abbrev = value.match(/^(.*?\([A-Z][A-Za-z&.]*\))/);
  if (abbrev) return abbrev[1].trim();
  return value.split(/(?:\s+—\s+|\.\s+)/)[0].trim();
}

function countrySlugOf(country: string): string {
  return country.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Slugs arrive as "{occupation}__{origin}__{destination}". Parsed once here so
 *  no other file has to know the encoding. */
export const CORRIDORS: readonly Corridor[] = DATA.corridors.map((c) => {
  const [occupationSlug, originSlug, destinationSlug] = c.slug.split("__");
  const originRegulator = fact(c.originRegulator)!;
  return {
    slug: c.slug,
    occupationSlug,
    originSlug,
    destinationSlug,
    originCountry: c.originCountry,
    destinationCountry: DATA.sharedDestination.country,
    originRegulator,
    originRegulatorName: shortRegulatorName(originRegulator.value),
    verificationRoute: fact(c.verificationRoute)!,
    attestationChain: fact(c.attestationChain),
    feesTimeline: fact(c.verificationEligibilityFeesTimeline),
    englishRoute: fact(c.englishRoute),
    originDistinctSummary: c.originDistinctSummary,
    localSearchWording: c.localSearchWording,
    lastVerified: c.lastVerified,
    verifyStatus: c.verifyStatus,
  };
});

export function corridorFor(
  occupationSlug: string,
  originSlug: string,
  destinationSlug: string,
): Corridor | undefined {
  return CORRIDORS.find(
    (c) =>
      c.occupationSlug === occupationSlug &&
      c.originSlug === originSlug &&
      c.destinationSlug === destinationSlug,
  );
}

/** What the destination asks — read from the base org record and enrichment v3,
 *  never from the corridor file.
 *
 *  `sharedStepsSummary` NAMES the uniform steps in one sentence and stops there.
 *  It does not state the CBT's parts, the OSCE's venue, the fee amounts or the
 *  accepted tests' scores: those are in `SHARED_DESTINATION`, they render on
 *  /register/{org}, and a corridor links to them. Naming a step costs a corridor
 *  eight words of shared text; stating it costs sixty, four times over. */
export function destinationFor(corridor: Corridor): JourneyDestination {
  const org = orgBySlug(CORRIDOR_DESTINATION_ORG);
  const reg = regulatorBySlug(CORRIDOR_DESTINATION_ORG);
  const nv = org ? nameVariants(org.name) : null;
  const name = org ? (nv?.abbrev ? `${nv.full} (${nv.abbrev})` : org.name) : "the destination regulator";
  return {
    regulatorName: name,
    requirementLine: org ? gradeLine(org) : null,
    sharedStepsHref: org ? `/register/${org.slug}` : null,
    sharedStepsSummary:
      "the Test of Competence, the accepted English tests and their scores, and the registration fees",
    destinationVerifiedOn: verifiedOn(reg),
  };
}

/** Case (c) of the currency gate: a GENUINE conflict between two records that are
 *  supposed to agree.
 *
 *  The batch and the base record both state the NMC's OET grades — the batch
 *  inside `sharedDestination.englishAcceptedTests`, the base as the figure every
 *  other page on the surface renders. Two copies of one fact is how enrichment v1
 *  published three regulators' figures wrongly, and the corridor pages point at
 *  the base's copy. So they are compared rather than trusted.
 *
 *  A parse failure is reported as a conflict, not waved through. "I could not
 *  check" and "I checked and they agree" are different states, and a gate that
 *  returns the second when it means the first is exactly the kind that ships
 *  green and blind. */
export function destinationGradeConflicts(): string[] {
  const org = orgBySlug(CORRIDOR_DESTINATION_ORG);
  const baseLine = org ? gradeLine(org) : null;
  if (!baseLine) return ["the base record states no OET grades for the destination"];

  const base = new Map<string, string>();
  for (const m of baseLine.matchAll(/(Listening|Reading|Writing|Speaking)\s+([A-C]\+?)/g)) {
    base.set(m[1][0], m[2]);
  }

  const claimed = SHARED_DESTINATION.englishAcceptedTests?.value ?? "";
  const oet = claimed.match(/OET\s*\(([^)]*)\)/i);
  if (!oet) {
    return [
      "could not read the OET grades out of sharedDestination.englishAcceptedTests to check them against the base record",
    ];
  }
  const batch = new Map<string, string>();
  for (const m of oet[1].matchAll(/([LRWS](?:\/[LRWS])*)\s*grade\s*([A-C]\+?)/gi)) {
    for (const letter of m[1].toUpperCase().split("/")) batch.set(letter, m[2].toUpperCase());
  }
  if (batch.size === 0) {
    return ["sharedDestination.englishAcceptedTests names OET but states no readable grades"];
  }

  const out: string[] = [];
  for (const [letter, grade] of batch) {
    const b = base.get(letter);
    if (b && b.toUpperCase() !== grade) {
      out.push(`the batch says OET ${letter} ${grade}, the base record says ${b}`);
    }
  }
  return out;
}

export const CORRIDOR_META = DATA._meta;

export function corridorDataset(): JourneyDataset {
  return { meta: DATA._meta, corridors: [...CORRIDORS] };
}

/** `/{profession}/{originCountry}/{destinationCountry}` — e.g.
 *  /nursing/pakistan/united-kingdom. Deliberately NOT the pruned
 *  `/{profession}/from-{origin}/{org}` shape: that one the middleware 301s, and
 *  reusing its prefix would send every corridor through a redirect before the
 *  route could serve it. Bare country slugs keep the two surfaces apart. */
export function corridorPath(c: Corridor): string {
  return `/${c.occupationSlug}/${c.originSlug}/${c.destinationSlug}`;
}

/** The searcher's own words for this corridor, from the dataset. Used for the
 *  title and H1 rather than a phrasing we invented: these are the strings people
 *  actually type, and they name the ORIGIN regulator, which is why guidance
 *  written from the destination end is hard to find from the origin. */
export function searchTitle(c: Corridor): string {
  return c.localSearchWording?.[0] ?? `${c.occupationSlug} from ${c.originCountry}`;
}
export function searchHeadings(c: Corridor): string[] {
  return c.localSearchWording ?? [];
}

export { countrySlugOf };
