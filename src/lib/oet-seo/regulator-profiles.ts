// profession × destination-regulator profiles — the robust axis.
//
// The corridor-grid verdict (2026-08-06) retired origin × destination because a
// destination's process is SHARED across origins, so multiplying by origin
// produced near-duplicates. This axis is the opposite: every cell is a different
// regulator, with its own exam, its own OET version and grade, its own
// verification route and its own fees. Distinct by construction rather than by
// hoping the wording differs — which is exactly the property the gate measures.
//
// Each profile renders on the org page the base record already owns. No new page
// entities are minted: uk-gmc, uk-gphc, uk-hcpc, au-medical-board-of-australia,
// ie-medical-council-of-ireland and nz-medical-council-of-new-zealand all exist,
// so the profile attaches to them the way Australia's nursing block attaches to
// au-ahpra. The base owns the entity; this supplies its facts.
//
// DENTISTRY IS DELIBERATELY ABSENT. The GDC's own guidance on English language
// controls names IELTS only — OET is not listed. Blogs saying otherwise are not
// the regulator. An "OET for dentists in the UK" page cannot honestly be written
// until the GDC confirms acceptance, so it is not written. The exclusion is
// recorded in the source file rather than left as a gap someone fills later by
// assuming symmetry with the GMC.

import UK_RAW from "./professions-uk.json";
import DOC_RAW from "./doctors-destinations.json";
import { toFact } from "./neutral-origins";
import type { FaqItem, SourcedFact } from "@/lib/journey/types";

type RawFact = Parameters<typeof toFact>[0];
type RawEntry = {
  slug: string;
  profession: string;
  regulator: RawFact;
  englishOET: RawFact;
  registrationPathway: RawFact;
  verification: RawFact;
  fees?: RawFact;
  oetRole?: string;
  searchWording?: string[];
};

export type RegulatorProfile = {
  /** The base-record org slug this profile renders on. */
  orgSlug: string;
  /** "doctor / medicine", used in headings and questions. */
  profession: string;
  professionNoun: string;
  blockHeading: string;
  facts: { key: string; fact: SourcedFact }[];
  faq: FaqItem[];
  searchWording: string[];
};

/** Which base-record entity each cell belongs to.
 *
 *  Australia's doctors go to au-medical-board-of-australia, NOT au-ahpra. AHPRA
 *  administers registration for twelve professions and already carries the NMBA
 *  nursing block; hanging the AMC pathway on it too would put two professions'
 *  exams on one page and undo the very distinctness this axis depends on. */
const ORG_FOR: Record<string, string> = {
  medicine: "uk-gmc",
  pharmacy: "uk-gphc",
  physiotherapy: "uk-hcpc",
  australia: "au-medical-board-of-australia",
  ireland: "ie-medical-council-of-ireland",
  "new-zealand": "nz-medical-council-of-new-zealand",
};

/** The noun a question can use: "doctor / medicine" -> "doctor". */
function nounOf(profession: string): string {
  return (profession.split("/")[0] ?? profession).trim();
}

function buildProfile(e: RawEntry, regulatorLabel: string): RegulatorProfile | null {
  const orgSlug = ORG_FOR[e.slug];
  if (!orgSlug) return null;
  const noun = nounOf(e.profession);

  const facts: { key: string; fact: SourcedFact }[] = [];
  const add = (key: string, raw: RawFact | undefined) => {
    const f = toFact(raw);
    if (f) facts.push({ key, fact: f });
  };
  add("regulator", e.regulator);
  add("englishRequirement", e.englishOET);
  add("registrationPathway", e.registrationPathway);
  add("verification", e.verification);
  add("fees", e.fees);

  // The FAQ is generated from the sourced values, never around them: each
  // question is a search-shaped restatement and each answer IS the cited fact.
  // Nothing here asserts anything the block above does not already say.
  const byKey = (k: string) => facts.find((f) => f.key === k)?.fact.value;
  const faq: FaqItem[] = [];
  const q = (question: string, key: string) => {
    const a = byKey(key);
    if (a) faq.push({ q: question, a, groundedIn: key });
  };
  q(`What OET grade does ${regulatorLabel} require?`, "englishRequirement");
  q(`How do overseas ${noun}s register with ${regulatorLabel}?`, "registrationPathway");
  q(`How does ${regulatorLabel} verify an overseas qualification?`, "verification");
  q(`What does ${regulatorLabel} registration cost?`, "fees");

  return {
    orgSlug,
    profession: e.profession,
    professionNoun: noun,
    blockHeading: `What ${regulatorLabel} asks of an internationally-trained ${noun}`,
    facts,
    faq,
    searchWording: e.searchWording ?? [],
  };
}

/** The regulator's short label, out of its own sourced sentence. */
function labelOf(raw: RawFact | undefined, fallback: string): string {
  const v = toFact(raw)?.value ?? "";
  const m = v.match(/\(([A-Z][A-Za-z0-9&./\s]{1,28})\)/);
  if (m) return m[1].trim();
  const lead = v.split(/(?:\s+—\s+|\.\s+|,\s+|;\s+)/)[0]?.replace(/^The\s+/i, "").trim();
  return lead && lead.split(/\s+/).length <= 8 ? lead : fallback;
}

const UK = UK_RAW as unknown as { professions: RawEntry[] };
const DOC = DOC_RAW as unknown as { destinations: RawEntry[] };

export const REGULATOR_PROFILES: RegulatorProfile[] = [
  ...UK.professions.map((e) => buildProfile(e, labelOf(e.regulator, "the regulator"))),
  ...DOC.destinations.map((e) => buildProfile(e, labelOf(e.regulator, "the regulator"))),
].filter((p): p is RegulatorProfile => p !== null);

export function regulatorProfileForOrg(orgSlug: string): RegulatorProfile | undefined {
  return REGULATOR_PROFILES.find((p) => p.orgSlug === orgSlug);
}

/** Cells named in the source data that could NOT be attached to a base entity.
 *  Reported rather than silently dropped — a missing page is invisible. */
export function profilesWithoutOrg(): string[] {
  return [...UK.professions, ...DOC.destinations].filter((e) => !ORG_FOR[e.slug]).map((e) => e.slug);
}
