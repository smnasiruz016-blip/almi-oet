// The entity spine: a corridor is ORIGIN × DESTINATION, not a thing in itself.
//
// WHY THIS EXISTS. Ten UK corridors were modelled as ten self-contained records.
// Adding Australia that way means writing ten more, and re-sourcing the same ten
// regulators a second time — the cost of a destination scales with the number of
// origins, forever. Modelled as a product, a new destination costs one
// destination block and reuses origins already sourced.
//
// WHAT THE REFACTOR DOES NOT CLAIM. Splitting a corridor into origin and
// destination does not, by itself, make the origin facts destination-neutral. v3
// authored its origin facts FOR the UK: nine of ten verification routes name the
// NMC as the recipient, eight of nine attestation chains end at the British high
// commission, and every English-route value is a statement about NMC rules. Those
// sentences are true and sourced, and they are UK facts living in an origin slot.
//
// So this model keeps that distinction visible rather than papering over it. An
// origin carries what is genuinely its own — who regulates it, what people there
// search — and a SEPARATE per-destination record holds the facts authored for a
// given destination. `perDestination` is not a cache; it is an admission that
// those facts were written with a destination in mind and cannot be reused for
// another one without being re-sourced.
//
// The payoff is that the gap becomes measurable instead of arguable: ask an
// origin what it can offer a new destination and it answers with what it actually
// has, which is how the second destination's thinness gets reported as a data
// finding rather than discovered as a wrong page.

import type { FaqItem, SourcedFact } from "./types";

/** The facts an origin owns regardless of where its nurses are going. */
export type OriginEntity = {
  slug: string;
  country: string;
  /** Who holds the register. The one fact that is reliably destination-neutral. */
  regulator: SourcedFact;
  regulatorName: string;
  /** How people there phrase the search. Authored per destination in practice —
   *  most of these name the UK end — so a second destination needs its own. */
  localSearchWording: string[];
  lastVerified: string;
  verifyStatus?: string;
  /** Facts AUTHORED FOR a specific destination, keyed by destination slug.
   *  Not a cache. A route that says "sends it directly to the UK NMC" is a UK
   *  fact; it cannot answer for Australia and must not be shown as if it could. */
  perDestination: Record<string, DestinationScopedFacts>;
};

export type DestinationScopedFacts = {
  verificationRoute?: SourcedFact;
  attestationChain?: SourcedFact;
  feesTimeline?: SourcedFact;
  englishRoute?: SourcedFact;
  /** Search phrasing specific to this destination, where it has been sourced. */
  localSearchWording?: string[];
};

/** A destination: the regulator at the far end and its uniform requirements.
 *  Rendered ONCE on its own page and linked from every corridor into it. */
export type DestinationEntity = {
  slug: string;
  country: string;
  /** Display name, e.g. "Nursing and Midwifery Board of Australia (NMBA)". */
  regulatorName: string;
  /** The org-record slug this destination's page lives at, e.g. "uk-nmc". */
  orgSlug: string;
  /** The shared blocks, in render order, for the destination page. */
  sharedFacts: { key: string; fact: SourcedFact }[];
  sharedFaq: FaqItem[];
  /** One sentence NAMING the uniform steps, for corridors to link against. */
  sharedStepsSummary: string;
  /** How a corridor into this destination differs from an origin's own record. */
  params?: DestinationParams;
};

/** The deltas a corridor applies when reusing an origin for this destination. */
export type DestinationParams = {
  /** Who receives the good-standing certificate at this end. */
  verificationRecipient?: SourcedFact;
  /** Whether an apostille suffices, and where non-Hague documents are legalised. */
  attestationNote?: SourcedFact;
  /** Parameterised by origin — `{origin}` is substituted. */
  englishNuanceTemplate?: string;
  englishNuanceSource?: SourcedFact;
  /** Origins whose documents are covered by the Hague Apostille Convention. */
  hagueOrigins?: string[];
};

/** What an origin can actually offer a destination, and what it cannot.
 *
 *  Called before composing so a corridor is built from what exists rather than
 *  from what the model implies should exist. `missing` is the list a report can
 *  print: it is the difference between "this page is thin" and "this page is
 *  thin BECAUSE nobody has sourced X for Y yet". */
export function originCoverage(
  origin: OriginEntity,
  destinationSlug: string,
): { present: string[]; missing: string[] } {
  const scoped = origin.perDestination[destinationSlug] ?? {};
  const present: string[] = ["originRegulator"];
  const missing: string[] = [];
  for (const key of ["verificationRoute", "attestationChain", "feesTimeline", "englishRoute"] as const) {
    if (scoped[key]) present.push(key);
    else missing.push(key);
  }
  if (scoped.localSearchWording?.length) present.push("localSearchWording");
  else missing.push("localSearchWording");
  return { present, missing };
}
