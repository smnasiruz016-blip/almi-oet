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
import FAQ_RAW from "./corridor-faq.json";
import { orgBySlug, gradeLine } from "./data";
import { regulatorBySlug, verifiedOn, nameVariants } from "./regulators";
import type {
  Corridor,
  FaqItem,
  JourneyDataset,
  JourneyDestination,
  SourcedFact,
} from "@/lib/journey/types";
import type { DestinationScopedFacts, OriginEntity } from "@/lib/journey/entities";

type RawSource = { url?: string; name?: string; confidence?: string; note?: string };

/** Facts arrive in TWO shapes and the adapter is where that stops mattering.
 *  Most carry one inline source. India's verification route and attestation
 *  chain carry a `sources` array plus a `corroborated` flag, added when they
 *  stopped resting on a single secondary summary. Everything downstream reads
 *  the normalised form. */
type RawFact = {
  value: string;
  sourceUrl?: string;
  sourceName?: string;
  confidence?: string;
  sources?: RawSource[];
  corroborated?: boolean;
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
  /** The same slot under two names. v2 spelled it out for Nigeria; v3's six new
   *  corridors use the short name. Both are read — a renamed field that silently
   *  reads as absent removes a whole section from a page and looks like thin
   *  data rather than a missed key. */
  feesTimeline?: RawFact;
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
  /** v3 renamed and widened this: it now sets out the NMC's THREE independent
   *  English routes rather than just the accepted tests. See CORRECTION_3 — v2
   *  wrongly said the taught-in-English route also required employer SIFE. */
  englishRoutesMechanics: RawFact;
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
  const sources = f.sources?.map((s) => ({
    url: s.url,
    name: s.name,
    confidence: s.confidence as SourcedFact["confidence"],
    note: s.note,
  }));
  // The flat fields are kept in sync with the array so a consumer that reads
  // only `sourceUrl` still gets the STRONGEST citation rather than nothing. The
  // official one wins; otherwise the first. Nothing is invented — if the array
  // is absent these stay exactly as the batch wrote them.
  const primary = sources?.find((x) => x.confidence === "official") ?? sources?.[0];
  return {
    value: f.value,
    sourceUrl: f.sourceUrl ?? primary?.url,
    sourceName: f.sourceName ?? primary?.name,
    confidence: (f.confidence as SourcedFact["confidence"]) ?? primary?.confidence,
    sources,
    corroborated: f.corroborated,
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
 *  v3 broke the first version of this, which is why it is now defensive. It keyed
 *  on "Name (ABBREV)" with no spaces allowed inside the brackets, so Ghana's
 *  "(NMC Ghana)" missed and the fallback returned the whole 25-word sentence as a
 *  regulator name. Egypt is worse and cannot be fixed by a better pattern: its
 *  value opens "Nursing in Egypt is regulated jointly by..." — a sentence about
 *  the regulators, not a name, because Egypt genuinely has two.
 *
 *  So this returns null when it cannot derive a name it trusts, and the caller
 *  says "Egypt's nursing regulator" instead. That phrase is accurate and vague;
 *  a confidently wrong name in a heading, a meta description and the permanent
 *  caveat is neither. The corridors relying on the fallback are reported, because
 *  the real fix is an explicit short name in the batch, not a cleverer regex. */
function shortRegulatorName(value: string): string | null {
  // "Name (ABBREV)" — brackets may hold spaces or digits ("NMC Ghana"), but an
  // abbreviation is short. A long parenthetical is a description, not a name.
  const abbrev = value.match(/^(.{3,80}?\(([A-Z][A-Za-z0-9&.\s]{0,28})\))/);
  if (abbrev && abbrev[2].trim().split(/\s+/).length <= 3) return abbrev[1].trim();

  // Otherwise the leading phrase, if it reads like a name rather than a clause.
  const lead = value.split(/(?:\s+—\s+|\.\s+|,\s+)/)[0].trim();
  const looksLikeSentence = /\b(is|are|was|były|regulated|comprises|consists|means)\b/i.test(lead);
  if (!lead || looksLikeSentence || lead.split(/\s+/).length > 9) return null;
  return lead;
}

/** Corridors whose regulator name had to fall back to a generic phrase. Exported
 *  so the report can name them rather than leaving a vague heading to be noticed
 *  in production. */
export function corridorsWithoutRegulatorName(): string[] {
  return DATA.corridors
    .filter((c) => shortRegulatorName(c.originRegulator.value) === null)
    .map((c) => c.slug);
}

function countrySlugOf(country: string): string {
  return country.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** THE ORIGINS LIBRARY.
 *
 *  Extracted from the v3 batch, which is the only place these bodies have been
 *  sourced. An origin owns its regulator and its search wording; everything else
 *  it carries was authored FOR a destination and is filed under that destination
 *  rather than promoted to the origin. See entities.ts for why that distinction
 *  is kept rather than flattened — nine of ten verification routes name the NMC
 *  as the recipient, so "the origin's verification route" is not a thing that
 *  exists yet, however much the model would like it to. */
export const ORIGINS: readonly OriginEntity[] = DATA.corridors.map((c) => {
  const [, originSlug, destinationSlug] = c.slug.split("__");
  const regulator = fact(c.originRegulator)!;
  const scoped: DestinationScopedFacts = {
    verificationRoute: fact(c.verificationRoute),
    attestationChain: fact(c.attestationChain),
    feesTimeline: fact(c.feesTimeline ?? c.verificationEligibilityFeesTimeline),
    englishRoute: fact(c.englishRoute),
    localSearchWording: c.localSearchWording,
  };
  return {
    slug: originSlug,
    country: c.originCountry,
    regulator,
    regulatorName: shortRegulatorName(regulator.value) ?? `${c.originCountry}'s nursing regulator`,
    localSearchWording: c.localSearchWording ?? [],
    lastVerified: c.lastVerified,
    verifyStatus: c.verifyStatus,
    perDestination: { [destinationSlug]: scoped },
  };
});

export function originBySlug(slug: string): OriginEntity | undefined {
  return ORIGINS.find((o) => o.slug === slug);
}

/** Compose one corridor from an origin and a destination.
 *
 *  For the United Kingdom this returns exactly what the previous direct parse
 *  returned — same fields, same values, same order — because `perDestination`
 *  holds v3's records verbatim. That equality is asserted, not assumed: see
 *  scripts/verify-spine-invariant.ts, which deep-compares against a direct parse
 *  of the same JSON and fails if a single field moved. A refactor that adds a
 *  capability must not alter existing output, and "I checked the diff" is not the
 *  same claim as "the build refuses to let it differ". */
export function composeCorridorEntity(
  origin: OriginEntity,
  destinationSlug: string,
  destinationCountry: string,
  occupationSlug = "nursing",
): Corridor {
  const scoped = origin.perDestination[destinationSlug] ?? {};
  return {
    slug: `${occupationSlug}__${origin.slug}__${destinationSlug}`,
    occupationSlug,
    originSlug: origin.slug,
    destinationSlug,
    originCountry: origin.country,
    destinationCountry,
    originRegulator: origin.regulator,
    originRegulatorName: origin.regulatorName,
    verificationRoute: scoped.verificationRoute!,
    attestationChain: scoped.attestationChain,
    feesTimeline: scoped.feesTimeline,
    englishRoute: scoped.englishRoute,
    originDistinctSummary: undefined,
    localSearchWording: scoped.localSearchWording,
    lastVerified: origin.lastVerified,
    verifyStatus: origin.verifyStatus,
  };
}

/** The UK corridor set — now composed through the spine rather than parsed
 *  directly, and byte-identical to what the direct parse produced. */
export const CORRIDORS: readonly Corridor[] = ORIGINS.map((o) =>
  composeCorridorEntity(o, "united-kingdom", DATA.sharedDestination.country),
);

/** AUSTRALIA corridors, composed from the same origins.
 *
 *  What each one can honestly carry, and what it cannot:
 *    originRegulator     reused — the one reliably destination-neutral fact
 *    attestationChain    reused ONLY where the origin's chain names no
 *                        destination (Pakistan alone, of the nine that have one)
 *    verificationRoute   NOT reused — nine of ten name the NMC as recipient
 *    englishRoute        composed from the destination's own template, since
 *                        every v3 englishRoute is a statement about NMC rules
 *    localSearchWording  NOT reused — these name the UK end; Australian query
 *                        strings have not been sourced, and inventing "how
 *                        people search" is the one thing the composer refuses
 *
 *  The result is deliberately thin, and it is meant to be measured rather than
 *  argued about. */
const AU_DEST_SLUG = "australia";

function auEnglishRoute(origin: OriginEntity, template: string | undefined): SourcedFact | undefined {
  if (!template) return undefined;
  // The template carries a placeholder for the origin's English-medium status,
  // which in v3 lives inside a sentence about NMC rules. Lifting a clause out of
  // a cited sentence is authoring, not quoting, so the placeholder is dropped
  // rather than filled. What remains is the destination's own sourced position.
  const value = template
    .replace(/\{origin_english_medium_status_from_v3\}\.?\s*/g, "")
    .replace(/\{origin\}/g, origin.country);
  return {
    value,
    sourceUrl:
      "https://www.nursingmidwiferyboard.gov.au/Codes-Guidelines-Statements/FAQ/fact-sheet-english-language-skills-registration-standard.aspx",
    sourceName: "NMBA — English language skills fact sheet (recognised countries, education pathways)",
    confidence: "official",
    asOf: "2026-08",
    verifyStatus: "confirm-official",
  };
}

/** True where the origin's attestation chain names no destination, so it holds
 *  for any Hague destination including Australia. */
function attestationIsPortable(f: SourcedFact | undefined): boolean {
  if (!f) return false;
  return !/(UK NMC|NMC UK|the NMC|NMC's|NMC|United Kingdom|UK|British|Britain)/.test(f.value);
}

export function australiaCorridors(englishTemplate?: string, hagueOrigins: string[] = []): Corridor[] {
  return ORIGINS.map((o) => {
    const ukScoped = o.perDestination["united-kingdom"] ?? {};
    const portableAttestation =
      hagueOrigins.includes(o.slug) && attestationIsPortable(ukScoped.attestationChain)
        ? ukScoped.attestationChain
        : undefined;
    return {
      slug: `nursing__${o.slug}__${AU_DEST_SLUG}`,
      occupationSlug: "nursing",
      originSlug: o.slug,
      destinationSlug: AU_DEST_SLUG,
      originCountry: o.country,
      destinationCountry: "Australia",
      originRegulator: o.regulator,
      originRegulatorName: o.regulatorName,
      verificationRoute: undefined,
      attestationChain: portableAttestation,
      feesTimeline: undefined,
      englishRoute: auEnglishRoute(o, englishTemplate),
      originDistinctSummary: undefined,
      localSearchWording: undefined,
      lastVerified: "2026-08-06",
      verifyStatus: undefined,
    } satisfies Corridor;
  });
}

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
      "the Test of Competence, the three ways it accepts English evidence, and the registration fees",
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

  const claimed = SHARED_DESTINATION.englishRoutesMechanics?.value ?? "";
  const oet = claimed.match(/OET\s*\(([^)]*)\)/i);
  if (!oet) {
    return [
      "could not read the OET grades out of sharedDestination.englishRoutesMechanics to check them against the base record",
    ];
  }
  // Sub-tests are named either by initial ("L/R/S grade B", v2) or in full
  // ("Listening/Reading/Speaking grade B, Writing C+", v3), and the word "grade"
  // is optional. Both forms are read, because the check that silently stops
  // matching is worse than no check: it returns "no conflict" for the wrong
  // reason, which is the one answer this function must never give by accident.
  const SUB = "(?:L|R|W|S|Listening|Reading|Writing|Speaking)";
  const batch = new Map<string, string>();
  for (const m of oet[1].matchAll(new RegExp(`(${SUB}(?:\\/${SUB})*)\\s*(?:grade\\s*)?([A-C]\\+?)(?![\\w+])`, "gi"))) {
    for (const name of m[1].split("/")) batch.set(name.trim().toUpperCase()[0], m[2].toUpperCase());
  }
  if (batch.size === 0) {
    return ["sharedDestination.englishRoutesMechanics names OET but states no readable grades"];
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

/** The FAQ companion to the proof batch: the questions people actually type.
 *
 *  Split the same way the facts are, and for the same reason. The shared
 *  questions — what OET score, what the Test of Competence is, what it costs —
 *  have one answer for all ten origins, so they render ONCE on /register/uk-nmc
 *  and the corridors link there. Only the origin-distinct questions render on a
 *  corridor. An FAQ block is the easiest place in a page to accidentally write
 *  the same four answers ten times, which is why it goes through the overlap
 *  gate with everything else rather than around it. */
type FaqPayload = {
  _meta: Record<string, unknown>;
  sharedDestinationFaq: FaqItem[];
  corridorFaq: Record<string, FaqItem[]>;
};
const FAQ = FAQ_RAW as unknown as FaqPayload;

/** Shared questions — rendered once, on the destination page. */
export const SHARED_DESTINATION_FAQ: FaqItem[] = FAQ.sharedDestinationFaq ?? [];

/** This corridor's own questions. Empty when the companion has none, which
 *  renders no section rather than an empty heading. */
export function corridorFaqFor(slug: string): FaqItem[] {
  return FAQ.corridorFaq?.[slug] ?? [];
}

/** Corridors the companion has no questions for. Reported rather than left to
 *  be noticed as a missing section on one page in ten. */
export function corridorsWithoutFaq(): string[] {
  return DATA.corridors.filter((c) => !(FAQ.corridorFaq?.[c.slug]?.length)).map((c) => c.slug);
}

/** Every answer names the fact it came from. This checks those names resolve to
 *  a field the corridor actually carries — an answer grounded in nothing is a
 *  new claim wearing a familiar shape, and the whole point of the companion is
 *  that it adds questions, not facts. */
export function faqGroundingGaps(): string[] {
  const out: string[] = [];
  const shared = new Set([
    "sharedDestination.englishRoutesMechanics",
    "sharedDestination.testOfCompetence",
    "sharedDestination.nmcFees",
    "sharedDestination.englishMajorityCountryList",
    "sharedDestination.visa",
  ]);
  for (const item of SHARED_DESTINATION_FAQ) {
    if (item.groundedIn && !shared.has(item.groundedIn)) {
      out.push(`sharedDestinationFaq "${item.q.slice(0, 48)}…" groundedIn ${item.groundedIn} (unknown shared field)`);
    }
  }
  // `groundedIn` is written by hand, so it arrives in three shapes: a bare field
  // name, two names joined by "+" where an answer draws on both, and a name with
  // a parenthetical note ("verificationRoute (confirm-official)"). It also uses
  // the batch's OWN field names, including the long `verificationEligibilityFees`
  // spelling this adapter normalises away.
  //
  // The first version of this check understood only the bare normalised name and
  // reported five gaps, every one of them its own misreading. A grounding check
  // that cries wolf is worse than none: it is the reason people stop reading
  // gate output.
  const ALIAS: Record<string, string> = {
    verificationeligibilityfeestimeline: "feesTimeline",
    originregulator: "originRegulator",
    verificationroute: "verificationRoute",
    attestationchain: "attestationChain",
    feestimeline: "feesTimeline",
    englishroute: "englishRoute",
    localsearchwording: "localSearchWording",
  };
  const partsOf = (k: string) =>
    k
      .split("+")
      .map((x) => x.replace(/\([^)]*\)/g, "").trim())
      .filter(Boolean);

  for (const c of CORRIDORS) {
    const has: Record<string, unknown> = {
      originRegulator: c.originRegulator,
      verificationRoute: c.verificationRoute,
      attestationChain: c.attestationChain,
      feesTimeline: c.feesTimeline,
      englishRoute: c.englishRoute,
      localSearchWording: c.localSearchWording?.length ? c.localSearchWording : undefined,
    };
    for (const item of corridorFaqFor(c.slug)) {
      if (!item.groundedIn) continue;
      for (const raw of partsOf(item.groundedIn)) {
        if (shared.has(raw)) continue;
        const key = ALIAS[raw.toLowerCase()];
        if (!key) {
          out.push(`${c.originSlug}: "${item.q.slice(0, 48)}…" groundedIn "${raw}" — not a field name`);
        } else if (!has[key]) {
          out.push(`${c.originSlug}: "${item.q.slice(0, 48)}…" groundedIn ${key} — not present on this corridor`);
        }
      }
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
