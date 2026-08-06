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
  /** Set where several professions share ONE regulator: the profile then renders
   *  on /{professionSlug}/{orgSlug} instead of /register/{orgSlug}, and the
   *  regulator's shared process stays on the register page. */
  professionSlug?: string;
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
  // Register pages only ever get the regulator-wide profile, never a
  // profession-scoped one — otherwise one of the HCPC's six professions would
  // silently claim the HCPC's own page.
  return REGULATOR_PROFILES.find((p) => p.orgSlug === orgSlug && !p.professionSlug);
}

/** The profile for a /{profession}/{org} page, where one exists. */
export function regulatorProfileForProfessionOrg(
  professionSlug: string,
  orgSlug: string,
): RegulatorProfile | undefined {
  return REGULATOR_PROFILES.find((p) => p.orgSlug === orgSlug && p.professionSlug === professionSlug);
}

/** Cells named in the source data that could NOT be attached to a base entity.
 *  Reported rather than silently dropped — a missing page is invisible. */
export function profilesWithoutOrg(): string[] {
  return [...UK.professions, ...DOC.destinations].filter((e) => !ORG_FOR[e.slug]).map((e) => e.slug);
}

// ── matrix fill, batches 1 and 2 ────────────────────────────────────────────
//
// Twenty-seven profession × country cells. What gets built, and what does not,
// is decided by two independent questions and both are written down.
//
// 1. DOES THE REGULATOR ACCEPT OET? Four cells do not, and a page telling a
//    clinician "OET registers you here" when the regulator does not take OET is
//    worse than no page, because somebody books a test on it. Two of the four
//    are flagged "partial" in the source and STILL do not qualify, which is why
//    the note is read rather than the flag:
//      pharmacy / United States (NABP) — NABP's own FAQ: "the current policy
//        remains in place", TOEFL iBT only. Its task force RECOMMENDED adding
//        OET in Feb 2026 with no implementation date. Recommended is not
//        accepted.
//      physiotherapy / United States (FSBPT) — the Jurisdiction Licensure
//        Reference Guide names TOEFL iBT only. FCCPT, an evaluator used by eight
//        jurisdictions, does take OET; that is a real route but it is not "FSBPT
//        accepts OET" and cannot be written as one.
//      physiotherapy / Canada (CAPR) — Policy 2.2 lists CELPIP, IELTS General,
//        IELTS Academic, PTE Core, TEF, TCF. No OET.
//      optometry / United Kingdom (GOC) — OET not accepted.
//    Joined by UK dentistry (GDC), excluded earlier on the same principle.
//
// 2. WHICH PAGE DOES THE CELL BELONG TO? Six professions in the UK share ONE
//    regulator — the HCPC covers physiotherapy, occupational therapy,
//    radiography, dietetics, speech and language therapy and podiatry — so they
//    cannot each be /register/{regulator}. They are not one page either: the OET
//    version, the pathway and the profession's own English threshold differ per
//    profession (speech and language therapy needs a higher OET than the rest).
//
//    So the shared HCPC process stays on /register/uk-hcpc, and each profession
//    gets /{profession}/uk-hcpc — a page type this surface already has. That is
//    law #3 applied to a regulator instead of a destination: link the shared,
//    keep what differs.
//
// 3. WHAT HAS NO HOME YET. Five cells accept OET and still cannot be built,
//    because the base record owns entities and one is not invented here:
//      medicine / Canada (MCC) and pharmacy / Canada (PEBC, NAPRA) — no entity.
//      dietetics / Australia (Dietitians Australia) — no entity.
//      pharmacy / UAE and physiotherapy / UAE — the cell names three regulators
//        across three jurisdictions; the only UAE entity covering those
//        professions is Dubai Healthcare City Authority, a different
//        jurisdiction from the facts. Filing DHA's rules under DHCC's name would
//        be wrong in a way no caveat fixes.

type MatrixFact = {
  key: string;
  value: string;
  verifyStatus?: string;
  corroborated?: boolean;
  sources?: { url?: string; name?: string; confidence?: string }[];
};
type MatrixCell = {
  profession: string;
  country: string;
  regulator: MatrixFact | { value: string };
  oet_accepted: "yes" | "partial" | "no";
  oet_note?: string;
  localSearchWording?: string[];
  facts: MatrixFact[];
  _cell: string;
};

import B1 from "./matrix-batch1.json";
import B2 from "./matrix-batch2.json";

const MATRIX: MatrixCell[] = [
  ...(Object.values(B1 as unknown as Record<string, MatrixCell>)),
  ...(Object.values(B2 as unknown as Record<string, MatrixCell>)),
];

/** cell -> where it renders. `org` is a /register/{org} page; `professionOrg`
 *  is a /{profession}/{org} page, used where several professions share one
 *  regulator. A cell absent from this map is not built; see `matrixNotBuilt`. */
const TARGET: Record<string, { org: string; professionSlug?: string }> = {
  "medicine|United States": { org: "us-ecfmg" },
  "medicine|United Arab Emirates": { org: "ae-dubai-health-authority" },
  "pharmacy|Ireland": { org: "ie-the-pharmaceutical-society-of-ireland" },
  "pharmacy|Australia": { org: "au-pharmacy-board-of-australia" },
  "pharmacy|New Zealand": { org: "nz-pharmacy-council-of-new-zealand" },
  "physiotherapy|Ireland": { org: "ie-coru-regulating-health-and-social-care" },
  "physiotherapy|Australia": { org: "au-physiotherapy-board-of-australia" },
  "physiotherapy|New Zealand": { org: "nz-physiotherapy-board-of-new-zealand" },
  "occupational therapy|Australia": { org: "au-occupational-therapy-board-of-australia" },
  "radiography|Australia": { org: "au-medical-radiation-practice-board-of-australia" },
  "optometry|Australia": { org: "au-optometry-board-of-australia" },
  "speech pathology|Australia": { org: "au-speech-pathology-australia" },
  "podiatry|Australia": { org: "au-podiatry-board-of-australia" },
  // The HCPC cluster — one regulator, six professions, six pages.
  "occupational therapy|United Kingdom": { org: "uk-hcpc", professionSlug: "occupational-therapy" },
  "radiography|United Kingdom": { org: "uk-hcpc", professionSlug: "radiography" },
  "dietetics|United Kingdom": { org: "uk-hcpc", professionSlug: "dietetics" },
  "speech and language therapy|United Kingdom": { org: "uk-hcpc", professionSlug: "speech-pathology" },
  "podiatry|United Kingdom": { org: "uk-hcpc", professionSlug: "podiatry" },
};

const NOUN: Record<string, string> = {
  medicine: "doctor",
  pharmacy: "pharmacist",
  physiotherapy: "physiotherapist",
  "occupational therapy": "occupational therapist",
  radiography: "radiographer",
  optometry: "optometrist",
  dietetics: "dietitian",
  "speech and language therapy": "speech and language therapist",
  "speech pathology": "speech pathologist",
  podiatry: "podiatrist",
};

function matrixProfile(c: MatrixCell): RegulatorProfile | null {
  const t = TARGET[c._cell];
  if (!t) return null;
  const noun = NOUN[c.profession] ?? c.profession;
  const label = labelOf(c.regulator as RawFact, `the ${c.country} regulator`);
  const facts = c.facts
    .map((f) => ({ key: f.key, fact: toFact(f as RawFact)! }))
    .filter((x) => x.fact?.value);
  const byKey = (k: string) => facts.find((f) => f.key === k)?.fact.value;
  const faq: FaqItem[] = [];
  const q = (question: string, keys: string[]) => {
    for (const k of keys) {
      const a = byKey(k);
      if (a) return faq.push({ q: question, a, groundedIn: k });
    }
  };
  q(`What OET grade does ${label} require?`, ["englishAcceptedTests", "englishOET", "english"]);
  q(`How do overseas ${noun}s register with ${label}?`, ["registrationPathway", "pathway"]);
  q(`How does ${label} verify an overseas qualification?`, ["verification"]);
  q(`What does registering with ${label} cost?`, ["fees"]);
  if (!facts.length) return null;
  return {
    orgSlug: t.org,
    professionSlug: t.professionSlug,
    profession: c.profession,
    professionNoun: noun,
    blockHeading: `What ${label} asks of an internationally-trained ${noun}`,
    facts,
    faq,
    searchWording: c.localSearchWording ?? [],
  };
}

/** Cells deliberately not built, with the reason. Reported, never silent. */
export function matrixNotBuilt(): { cell: string; reason: string }[] {
  return MATRIX.filter((c) => !TARGET[c._cell]).map((c) => ({
    cell: c._cell,
    reason:
      c.oet_accepted === "no"
        ? "regulator does not accept OET"
        : c.oet_accepted === "partial"
          ? "OET is not an accepted route to this registration (see oet_note)"
          : "no base-record entity, or the only entity is a different jurisdiction",
  }));
}

for (const c of MATRIX) {
  const p = matrixProfile(c);
  if (!p) continue;
  const dup = REGULATOR_PROFILES.some(
    (x) => x.orgSlug === p.orgSlug && x.professionSlug === p.professionSlug,
  );
  if (!dup) REGULATOR_PROFILES.push(p);
}
