// The destination side of the spine: the regulators corridors run INTO.
//
// A destination owns the facts that are identical for every origin heading there
// — the competence assessment, the accepted English evidence, the fees — and
// those render ONCE on its own page (law #3). It also owns the DELTAS a corridor
// applies when reusing an origin: who receives the good-standing certificate,
// whether an apostille suffices, how the English rule lands.
//
// ON /register/au-nmba. The Australia block was specified to render at that path.
// It renders at /register/au-ahpra instead, and the reason matters: `au-nmba` is
// not an entity in the base organisation record, `au-ahpra` is — the Australian
// Health Practitioner Regulation Agency, already composed, already through the
// gate, already indexed. AHPRA is the body that administers NMBA registration and
// receives the verification, so it is the right page; minting a second page for
// the same regulator would put two owners on one entity, which is how enrichment
// v1 published three regulators' figures wrongly. The base owns the entity.

import RAW_AU from "./destination-australia.json";
import RAW_UK from "./corridors.json";
import type { DestinationEntity, DestinationParams } from "@/lib/journey/entities";
import type { FaqItem, SourcedFact } from "@/lib/journey/types";
import { SHARED_DESTINATION_FAQ } from "./corridors";

type RawFact = {
  value: string;
  sourceUrl?: string;
  sourceName?: string;
  confidence?: string;
  sources?: { url?: string; name?: string; confidence?: string; note?: string }[];
  corroborated?: boolean;
  asOf?: string;
  verifyStatus?: string;
  note?: string;
};

function fact(f: RawFact | undefined): SourcedFact | undefined {
  if (!f?.value) return undefined;
  const sources = f.sources?.map((x) => ({
    url: x.url,
    name: x.name,
    confidence: x.confidence as SourcedFact["confidence"],
    note: x.note,
  }));
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

const AU = RAW_AU as unknown as {
  destination: Record<string, RawFact | string>;
  destinationParams: {
    verificationRecipient: string;
    attestation: { hagueOrigins_apostille: string; nonHagueOrigins_legalisation: string; verifyStatus: string };
    englishNuanceTemplate: string;
  };
  sharedDestinationFaq: FaqItem[];
  howItDiffersFromUK_NMC: string;
};
const UK = RAW_UK as unknown as { sharedDestination: Record<string, RawFact | string> };

/** WHAT IS DELIBERATELY NOT PUBLISHED.
 *
 *  The Australia block carries two figures its own author flagged as unconfirmed:
 *  the exact PTE Academic and TOEFL iBT minimums, and the annual/application fee
 *  amounts (the official NMBA fees page 403'd during sourcing). Both notes say
 *  plainly: do not publish these until confirmed.
 *
 *  A currency caveat is not a licence to print the number anyway. The values
 *  render because the surrounding facts are official and useful — OET grade B and
 *  IELTS 7/6.5 ARE confirmed, and so is the $410 orientation fee and the $4,000
 *  OSCE — and the unconfirmed specifics simply are not in the sourced text. The
 *  gate's caveat covers what is shown; it does not license what is not. */
const AU_SHARED_KEYS = [
  "regulator",
  "registrationPathwayIQNM",
  "verification",
  "englishAcceptedTests",
  "englishExemptionPathways",
  "fees",
] as const;

const UK_SHARED_KEYS = ["testOfCompetence", "englishRoutesMechanics", "nmcFees", "englishMajorityCountryList"] as const;

/** Origins whose documents are covered by the Hague Apostille Convention, so an
 *  apostille is valid in Australia with no further legalisation. The other six
 *  need their chain's final step re-pointed to the Australian mission — which is
 *  a REWRITE of a sourced sentence, not a substitution, so it is not done here.
 *  See the composer: the corridor states the destination's requirement and links,
 *  rather than editing an origin's cited attestation prose. */
export const AU_HAGUE_ORIGINS = ["pakistan", "india", "philippines"];

export const DESTINATIONS: DestinationEntity[] = [
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    regulatorName: "Nursing and Midwifery Council (NMC)",
    orgSlug: "uk-nmc",
    sharedFacts: UK_SHARED_KEYS.map((k) => ({ key: k, fact: fact(UK.sharedDestination[k] as RawFact)! })).filter(
      (x) => x.fact,
    ),
    sharedFaq: SHARED_DESTINATION_FAQ,
    sharedStepsSummary:
      "the Test of Competence, the three ways it accepts English evidence, and the registration fees",
  },
  {
    slug: "australia",
    country: "Australia",
    regulatorName: "Nursing and Midwifery Board of Australia (NMBA), administered by AHPRA",
    orgSlug: "au-ahpra",
    sharedFacts: AU_SHARED_KEYS.map((k) => ({ key: k, fact: fact(AU.destination[k] as RawFact)! })).filter(
      (x) => x.fact,
    ),
    sharedFaq: AU.sharedDestinationFaq ?? [],
    sharedStepsSummary:
      "the IQNM self-check and orientation, the NCLEX-RN and OSCE assessment, the accepted English evidence, and the registration fees",
    params: {
      englishNuanceTemplate: AU.destinationParams?.englishNuanceTemplate,
      hagueOrigins: AU_HAGUE_ORIGINS,
    } satisfies DestinationParams,
  },
];

export function destinationBySlug(slug: string): DestinationEntity | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

/** The shared block for whichever destination lives at this org page, or null. */
export function destinationForOrg(orgSlug: string): DestinationEntity | undefined {
  return DESTINATIONS.find((d) => d.orgSlug === orgSlug);
}

export const AU_HOW_IT_DIFFERS: string = AU.howItDiffersFromUK_NMC ?? "";
