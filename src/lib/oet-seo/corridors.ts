// AlmiOET's corridor dataset, wired into the generic journey module.
//
// The module in src/lib/journey knows nothing about OET: it takes corridors and
// a destination description. This file is the adapter — it normalises the proof
// batch into the module's shape and answers "what does the destination ask?"
// from the SAME source the rest of the surface uses, enrichment v3 plus the base
// org record. The corridor JSON deliberately does not carry the NMC's grades:
// the base record owns grades everywhere else, and a second copy inside a
// corridor file is exactly how enrichment v1 published three regulators' figures
// wrongly.

import RAW from "./corridors.json";
import { orgBySlug, gradeLine } from "./data";
import { regulatorBySlug, verifiedOn, nameVariants } from "./regulators";
import type { Corridor, JourneyDataset, JourneyDestination } from "@/lib/journey/types";

type RawCorridor = {
  slug: string;
  originCountry: string;
  originRegulator: string;
  originRegulatorUrl?: string;
  originVerification: string;
  englishExemption?: { eligible: boolean; basis: string; verifyStatus?: string };
  searchWording?: string[];
  lastVerified: string;
  verifyStatus?: string;
};

type RawPayload = {
  _meta: Record<string, unknown>;
  destination: { occupation: string; country: string; regulator: string; uniformSteps_sharedNotRepeated: string; visa?: string };
  corridors: RawCorridor[];
};

const DATA = RAW as unknown as RawPayload;

/** The destination regulator this proof batch routes into. */
export const CORRIDOR_DESTINATION_ORG = DATA.destination.regulator;

function countrySlugOf(country: string): string {
  return country.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Slugs arrive as "{occupation}__{origin}__{destination}". Parsed once here so
 *  no other file has to know the encoding. */
export const CORRIDORS: readonly Corridor[] = DATA.corridors.map((c) => {
  const [occupationSlug, originSlug, destinationSlug] = c.slug.split("__");
  return {
    ...c,
    occupationSlug,
    originSlug,
    destinationSlug,
    destinationCountry: DATA.destination.country,
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
 *  never from the corridor file. The uniform steps are described in one sentence
 *  and LINKED to the destination regulator's own page. */
export function destinationFor(corridor: Corridor): JourneyDestination {
  const org = orgBySlug(CORRIDOR_DESTINATION_ORG);
  const reg = regulatorBySlug(CORRIDOR_DESTINATION_ORG);
  const nv = org ? nameVariants(org.name) : null;
  const name = org ? (nv?.abbrev ? `${nv.full} (${nv.abbrev})` : org.name) : "the destination regulator";
  return {
    regulatorName: name,
    requirementLine: org ? gradeLine(org) : null,
    sharedStepsHref: org ? `/register/${org.slug}` : null,
    sharedStepsSummary: DATA.destination.uniformSteps_sharedNotRepeated.replace(
      /\s*These are identical.*$/,
      "",
    ),
    destinationVerifiedOn: verifiedOn(reg),
  };
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
  return c.searchWording?.[0] ?? `${c.occupationSlug} from ${c.originCountry}`;
}
export function searchHeadings(c: Corridor): string[] {
  return c.searchWording ?? [];
}

export { countrySlugOf };
