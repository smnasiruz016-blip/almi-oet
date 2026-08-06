// corridor(origin, destination) — the product, composed from halves.
//
// The origin says how its council issues good standing; the destination says who
// receives it. The origin runs its documents to its own foreign ministry; the
// destination says what happens next. The origin states whether its nursing was
// taught in English; the destination states what that is worth under its rules.
//
// Neither half is edited. They are joined, and both sets of citations travel with
// the joined fact — which is why `mergeFacts` unions sources rather than picking
// one, and takes the WEAKER currency status of the two. A sentence assembled from
// an official fact and an unconfirmed one is an unconfirmed sentence; rounding
// that up would let a caveat disappear at the join.

import type { Corridor, SourcedFact } from "@/lib/journey/types";
import type { NeutralOrigin } from "./neutral-origins";
import { NEUTRAL_ORIGINS } from "./neutral-origins";

export type DestinationDeltas = {
  slug: string;
  country: string;
  regulatorName: string;
  orgSlug: string;
  /** Who receives the good-standing certificate at this end. */
  verificationRecipient: SourcedFact;
  /** Appended where the origin IS an Apostille state. */
  attestationApostille: SourcedFact;
  /** Appended where it is not — names this destination's mission. */
  attestationLegalisation: SourcedFact;
  /** What the origin's English-medium status is worth under this regulator. */
  englishRule: SourcedFact;
  /** Destination-side query strings, appended to the origin's generic ones. */
  searchWording: string[];
  sharedStepsSummary: string;
};

/** Currency ranking, weakest first — a merge takes the weakest of its parts. */
const STATUS_RANK: Record<string, number> = {
  disputed: 0,
  unverified: 0,
  stale: 0,
  "confirm-official": 1,
  "reconfirm-official": 1,
  verified: 2,
};
function weakerStatus(a?: string, b?: string): string | undefined {
  if (!a) return b;
  if (!b) return a;
  const ra = STATUS_RANK[a] ?? 1;
  const rb = STATUS_RANK[b] ?? 1;
  return ra <= rb ? a : b;
}

export function mergeFacts(...parts: (SourcedFact | undefined)[]): SourcedFact | undefined {
  const kept = parts.filter((p): p is SourcedFact => !!p?.value);
  if (!kept.length) return undefined;
  if (kept.length === 1) return kept[0];
  const sources = kept.flatMap((p) => p.sources ?? (p.sourceUrl ? [{ url: p.sourceUrl, name: p.sourceName, confidence: p.confidence }] : []));
  const seen = new Set<string>();
  const deduped = sources.filter((s) => {
    const k = s.url ?? s.name ?? "";
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  const primary = deduped.find((x) => x.confidence === "official") ?? deduped[0];
  return {
    value: kept.map((p) => p.value.trim()).join(" "),
    sources: deduped,
    sourceUrl: primary?.url,
    sourceName: primary?.name,
    // Weakest confidence wins: a joined sentence is only as good as its weakest half.
    confidence: kept.some((p) => p.confidence === "secondary") ? "secondary" : primary?.confidence,
    corroborated: kept.some((p) => p.corroborated === false) ? false : undefined,
    asOf: kept.map((p) => p.asOf).filter(Boolean).sort()[0],
    verifyStatus: kept.map((p) => p.verifyStatus).reduce<string | undefined>((acc, v) => weakerStatus(acc, v), undefined),
  };
}

/** The corridor. Every field is origin × destination, nothing is name-swapped. */
export function corridorFrom(origin: NeutralOrigin, dest: DestinationDeltas): Corridor {
  const attestationFinal = origin.hague ? dest.attestationApostille : dest.attestationLegalisation;
  return {
    slug: `nursing__${origin.slug}__${dest.slug}`,
    occupationSlug: "nursing",
    originSlug: origin.slug,
    destinationSlug: dest.slug,
    originCountry: origin.country,
    destinationCountry: dest.country,
    originRegulator: origin.regulator,
    originRegulatorName: origin.regulatorName,
    verificationRoute: mergeFacts(origin.goodStandingIssuance, dest.verificationRecipient),
    attestationChain: mergeFacts(origin.attestationBase, attestationFinal),
    feesTimeline: undefined,
    // The English paragraph is genuinely a product: what the origin taught, and
    // what this regulator does with that. Neither half states the other's part.
    englishRoute: mergeFacts(origin.englishMediumStatus, dest.englishRule),
    originDistinctSummary: undefined,
    localSearchWording: [...origin.originSearchWording, ...dest.searchWording],
    lastVerified: "2026-08-06",
    verifyStatus: undefined,
  };
}

export function corridorsFor(dest: DestinationDeltas): Corridor[] {
  return NEUTRAL_ORIGINS.map((o) => corridorFrom(o, dest));
}
