// The journey page type: occupation × origin × destination.
//
// PATTERN 5 of the universal engine, and the one page type where the ORIGIN of
// the person is load-bearing rather than decorative. That distinction is the
// whole reason this module exists, so it is worth stating precisely.
//
// AlmiOET already deleted 237,413 pages of the shape /{profession}/from-{origin}/
// {org}, and AlmiStudy deleted 3,804,070 of the same shape, because in both the
// origin was a LABEL: the NMC asks the same grade of a nurse from Lagos as of one
// from Manila, so 191 copies of one page differed only by a place name. Nothing
// about "origin" as an axis was wrong. What was wrong was multiplying by it while
// holding no fact that varied along it.
//
// A corridor here is the opposite. It carries the origin's own regulator, that
// regulator's verification route, the attestation chain that route runs through,
// the fees and timeline it costs, and the origin's own reading of the
// destination's English rule. Those differ in substance, not in name: PNMC takes
// a PKR 10,000 fee by email through a Good Standing Cell, NMCN takes REMITA
// payments through a portal and posts the verification itself, India's is issued
// by the STATE council rather than the national one, and the Philippines runs
// through PRC LERIS and a DFA apostille. That is not a label.
//
// What is NOT here is as important. The destination's uniform steps — the Test
// of Competence, the accepted English tests and their scores, the NMC's fees —
// are the same for all four, so they live on the destination page and are LINKED
// (law #3). Copying them into each corridor is precisely how four pages become
// one page four times.
//
// So this module is built to be MEASURED, not assumed. It composes from corridor
// facts only, links the destination's uniform steps rather than copying them, and
// then the same gate that cut the label-pages judges these. If they collapse, the
// answer is that the corridor axis is not real for this dataset, and that answer
// is worth more than the pages would have been.
//
// Nothing here is OET-specific: a corridor is an occupation, two countries, and
// the origin-side facts. The destination's requirement and the location of its
// shared steps are injected by the product.

/** One sourced claim, as the proof batch carries it.
 *
 *  Every renderable fact arrives with its provenance attached rather than as a
 *  bare string, because the two questions a reader has about a fact on this page
 *  — who says so, and how sure are we — are the two the page has to be able to
 *  answer. `confidence` distinguishes a regulator's own page from a summary of
 *  it; `verifyStatus: "confirm-official"` marks a fact compiled from published
 *  sources but not yet re-read against the authority's own page, which holds the
 *  page out of the index while still rendering it. */
/** One citation behind a fact. */
export type FactSource = {
  url?: string;
  name?: string;
  confidence?: "official" | "secondary" | "notFound";
  /** An author's caveat about the SOURCE — e.g. "returned 403 to automated
   *  fetch". Kept, because a source we could not read is a different thing from
   *  a source we read and trusted, and the page should be able to say which. */
  note?: string;
};

export type SourcedFact = {
  value: string;
  /** THE FLAT SHAPE: one source, inline. Most facts still arrive this way.
   *  Prefer `sources` when present — see the adapter, which normalises both into
   *  a single list so nothing downstream has to know which shape it got. */
  sourceUrl?: string;
  sourceName?: string;
  confidence?: "official" | "secondary" | "notFound";
  /** THE ARRAY SHAPE: several independent citations behind one claim. Added when
   *  India's verification route and attestation chain stopped resting on a single
   *  secondary summary. A fact carrying this usually carries no flat fields. */
  sources?: FactSource[];
  /** The batch's own claim that this fact is corroborated. Treated as a CLAIM to
   *  be checked against `sources`, never as the answer: a label that grants
   *  itself corroboration is not evidence of corroboration. */
  corroborated?: boolean;
  asOf?: string;
  /** `confirm-official` / `reconfirm-official` → sourced from the official body,
   *  but the reader must verify their own case: a permanent caveat, NOT a reason
   *  to noindex. `stale` / `unverified` / `disputed` DO hold the page out of the
   *  index. See lib/journey/currency.ts — keeping those two apart is the whole
   *  of law #5 as refined on 08-06. */
  verifyStatus?: string;
  /** Second and further sources that independently support this claim. A
   *  secondary source is a lead until something corroborates it; once it is
   *  corroborated it can carry a load-bearing fact. */
  corroboratedBy?: string[];
  /** An author's caveat about the fact itself, not part of the claim. */
  note?: string;
};

/** One question-and-answer, in the searcher's own words.
 *
 *  `groundedIn` names the fact the answer is derived from. It is not rendered —
 *  it exists so an answer can be traced back to a sourced value rather than
 *  being a fluent sentence nobody can check. An answer whose groundedIn points
 *  at nothing is a new claim wearing a familiar shape. */
export type FaqItem = { q: string; a: string; groundedIn?: string };

export type Corridor = {
  /** "{occupation}__{origin}__{destination}" in the dataset; parsed on load. */
  slug: string;
  occupationSlug: string;
  originSlug: string;
  originCountry: string;
  destinationSlug: string;
  destinationCountry: string;
  /** The body that holds the register the candidate is ALREADY on. */
  originRegulator: SourcedFact;
  /** The regulator's short name, derived once on load so no consumer has to
   *  parse a sourced sentence to put a body's name in a heading. */
  originRegulatorName: string;
  /** How that body's confirmation reaches the destination regulator.
   *
   *  OPTIONAL since the spine landed, and the reason is a finding rather than a
   *  convenience: v3's verification routes were authored for the UK and nine of
   *  ten name the NMC as the recipient. On an Australia corridor that sentence is
   *  false, so it is not carried across — the corridor states the destination's
   *  own requirement and links, and this slot stays empty until someone sources a
   *  destination-neutral issuance fact for that origin. Empty is honest; reused
   *  would be wrong. */
  verificationRoute?: SourcedFact;
  /** Notary / ministry / apostille chain the documents run through. Absent for
   *  origins where the batch found none — an absent slot renders nothing rather
   *  than a sentence about the absence. */
  attestationChain?: SourcedFact;
  /** Eligibility rules, money and elapsed time for the verification itself. */
  feesTimeline?: SourcedFact;
  /** How the destination's English rule lands for THIS origin. Never a binary:
   *  see the composer for why an exemption is not stated as an entitlement. */
  englishRoute?: SourcedFact;
  /** The batch's own one-line summary of what makes this corridor distinct. */
  originDistinctSummary?: string;
  /** How people in this origin actually phrase the search. Real query strings. */
  localSearchWording?: string[];
  lastVerified: string;
  verifyStatus?: string;
};

/** What the product knows about the destination end. Supplied by the caller so
 *  the module carries no product's regulator, grades or routes. */
export type JourneyDestination = {
  /** The destination regulator's name, e.g. "Nursing and Midwifery Council (NMC)". */
  regulatorName: string;
  /** The published requirement line, or null where none is published. */
  requirementLine: string | null;
  /** Where the UNIFORM steps live. The steps that are identical for every origin
   *  — application, competence tests, fees, accepted English tests — are linked
   *  here and deliberately not restated per corridor: repeating them is precisely
   *  what would make four corridors read as one page four times. */
  sharedStepsHref: string | null;
  /** A single sentence NAMING those steps, so the link means something. It names
   *  them; it does not state them. The difference is the whole of law #3. */
  sharedStepsSummary: string;
  /** Set when the destination's own record is awaiting re-confirmation. */
  destinationVerifiedOn?: string | null;
};

export type JourneyDataset = {
  meta: Record<string, unknown>;
  corridors: Corridor[];
};
