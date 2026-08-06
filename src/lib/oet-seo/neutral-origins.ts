// The destination-NEUTRAL origins library (v4).
//
// NOTE the filename: origins.ts was already taken by the 191-country origin list
// the older /{profession}/from-{origin} surface uses. Different thing entirely —
// that one is a name list, this one is ten sourced regulators.
//
// v3's origin facts were origin→UK facts wearing an origin label: nine of ten
// verification routes named the NMC as the recipient, eight of nine attestation
// chains ended at the British high commission. Australia corridors composed from
// them could only name-swap, and the gate cut all ten — correctly.
//
// v4 disentangles the same cited material. An origin now states how its council
// ISSUES good standing without naming who receives it, runs its attestation
// chain only as far as its own foreign ministry and flags Hague membership, and
// carries its English-medium status as a fact in its own right rather than as a
// clause inside a sentence about somebody else's rules.
//
// The destination supplies the rest: who receives the certificate, what happens
// to the documents after the foreign ministry, and which English rules apply.
// A corridor is the two halves joined — see `corridorFrom` in corridors.ts.

import RAW from "./origins-neutral.json";
import type { SourcedFact } from "@/lib/journey/types";

type RawSource = { url?: string; name?: string; confidence?: string; note?: string };
type RawFact = {
  value: string;
  sources?: RawSource[];
  sourceUrl?: string;
  sourceName?: string;
  confidence?: string;
  corroborated?: boolean;
  asOf?: string;
  verifyStatus?: string;
  note?: string;
  /** attestationBase only: is the origin an Apostille state? */
  hague?: boolean;
};

export type NeutralOrigin = {
  slug: string;
  country: string;
  regulator: SourcedFact;
  regulatorName: string;
  /** How the council issues good standing. Names no recipient. */
  goodStandingIssuance: SourcedFact;
  /** The chain as far as the origin's own foreign ministry. */
  attestationBase: SourcedFact;
  /** True where the origin is an Apostille state. */
  hague: boolean;
  /** Whether pre-registration nursing there is taught and examined in English. */
  englishMediumStatus: SourcedFact;
  /** Origin-generic query strings — no destination named. */
  originSearchWording: string[];
};

export function toFact(f: RawFact | undefined): SourcedFact | undefined {
  if (!f?.value) return undefined;
  const sources = f.sources?.map((s) => ({
    url: s.url,
    name: s.name,
    confidence: s.confidence as SourcedFact["confidence"],
    note: s.note,
  }));
  const primary = sources?.find((x) => x.confidence === "official") ?? sources?.[0];
  return {
    value: f.value,
    sourceUrl: f.sourceUrl ?? primary?.url,
    sourceName: f.sourceName ?? primary?.name,
    confidence: (f.confidence as SourcedFact["confidence"]) ?? primary?.confidence,
    sources,
    corroborated: f.corroborated,
    asOf: f.asOf ?? "2026-08",
    verifyStatus: f.verifyStatus,
    note: f.note,
  };
}

/** "Name (ABBREV)" where the value offers one; otherwise the leading phrase, and
 *  null when neither reads like a name. Same rule the v3 adapter used — a
 *  confidently wrong regulator name in a heading is worse than a vague one. */
function shortName(value: string): string | null {
  const abbrev = value.match(/^(.{3,80}?\(([A-Z][A-Za-z0-9&.\s]{0,28})\))/);
  if (abbrev && abbrev[2].trim().split(/\s+/).length <= 3) return abbrev[1].trim();
  const lead = value.split(/(?:\s+—\s+|\.\s+|,\s+)/)[0].trim();
  if (!lead || /\b(is|are|was|regulated|comprises|consists|means)\b/i.test(lead)) return null;
  if (lead.split(/\s+/).length > 9) return null;
  return lead;
}

const DATA = RAW as unknown as {
  _meta: Record<string, unknown>;
  origins: (Record<string, RawFact | string | string[]> & {
    slug: string;
    originCountry: string;
    originRegulator: RawFact;
    goodStandingIssuance: RawFact;
    attestationBase: RawFact;
    englishMediumStatus: RawFact;
    originSearchWording?: string[];
  })[];
};

export const NEUTRAL_ORIGINS: readonly NeutralOrigin[] = DATA.origins.map((o) => {
  const regulator = toFact(o.originRegulator)!;
  return {
    slug: o.slug,
    country: o.originCountry,
    regulator,
    regulatorName: shortName(regulator.value) ?? `${o.originCountry}'s nursing regulator`,
    goodStandingIssuance: toFact(o.goodStandingIssuance)!,
    attestationBase: toFact(o.attestationBase)!,
    hague: o.attestationBase?.hague === true,
    englishMediumStatus: toFact(o.englishMediumStatus)!,
    originSearchWording: o.originSearchWording ?? [],
  };
});

export function neutralOriginBySlug(slug: string): NeutralOrigin | undefined {
  return NEUTRAL_ORIGINS.find((o) => o.slug === slug);
}

export const ORIGINS_META = DATA._meta;
