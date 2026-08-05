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
// A corridor here is the opposite: it carries the origin's own regulator, that
// regulator's verification route, and — the fact that actually decides the
// candidate's year — whether their training exempts them from the destination's
// English test at all. A Nigerian-trained nurse may skip OET entirely; a
// Pakistani-trained nurse must sit it. That is not a label. Two corridors that
// disagree about it are genuinely different pages.
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

export type ExemptionStatus = {
  /** True where the origin's training may satisfy the destination's language
   *  requirement without a test. The single highest-value fact on the page. */
  eligible: boolean;
  /** The sourced reason. Rendered as given — never paraphrased into a promise. */
  basis: string;
  /** "confirm-official" marks a fact compiled from published sources but not yet
   *  re-read against the authority's own page. It does NOT hold the page back:
   *  an exemption is exactly the claim a reader must verify themselves, so the
   *  page ships and says so, prominently, rather than silently not existing. */
  verifyStatus?: string;
};

export type Corridor = {
  /** "{occupation}__{origin}__{destination}" in the dataset; parsed on load. */
  slug: string;
  occupationSlug: string;
  originSlug: string;
  originCountry: string;
  destinationSlug: string;
  destinationCountry: string;
  /** The body that holds the register the candidate is ALREADY on. */
  originRegulator: string;
  originRegulatorUrl?: string;
  /** How that body's confirmation reaches the destination regulator. */
  originVerification: string;
  englishExemption?: ExemptionStatus;
  /** How people in this origin actually phrase the search. Real query strings. */
  searchWording?: string[];
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
   *  — application, competence tests, visa — are linked here and deliberately not
   *  restated per corridor: repeating them is precisely what would make four
   *  corridors read as one page four times. */
  sharedStepsHref: string | null;
  /** A single sentence naming those steps, so the link means something. */
  sharedStepsSummary: string;
  /** Set when the destination's own record is awaiting re-confirmation. */
  destinationVerifiedOn?: string | null;
};

export type JourneyDataset = {
  meta: Record<string, unknown>;
  corridors: Corridor[];
};
