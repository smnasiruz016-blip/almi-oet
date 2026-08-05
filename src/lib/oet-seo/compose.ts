// The composition + quality-gate engine.
//
// A page is a MIXTURE of four real sources, merged per entity:
//   base        organisations.json   — OET's own recognising-organisations list
//   enrichment  regulators.json      — sourced per-body grades, rules, context
//   wording     lexicon.json         — the local term/credential people search
//   subtest     PROFESSION_GRADING   — the verified per-profession OET spec
//
// Sections render only when their data exists, so two pages differ because their
// FACTS differ — not because a template swapped a name in. Nothing is invented:
// every sentence is built from a field that is present, and a missing field
// removes a section rather than producing filler.
//
// Then the gate. Before anything is emitted or sitemapped it must clear all
// three thresholds. This is the pSEO analogue of the G-gates: thin is not
// something we review for, it is something the build refuses to produce.

import { ORGANISATIONS, orgBySlug, orgsForProfession, type SeoOrg } from "./data";
import {
  REGULATORS,
  codeForCountry,
  countryFromSlug,
  countrySlug,
  regulatorBySlug,
  regulatorCountry,
  regulatorsForCountry,
  resolveGrades,
  verifiedOn,
  isCurrentEnoughToIndex,
  notCurrentReason,
  nameVariants,
  type RegulatorEntity,
  type RegulatorGrades,
} from "./regulators";
import { searchIntents, wordingFor, localeConvention, type Wording } from "./lexicon";
import { PROFESSION_GRADING } from "@/lib/oet/profession-grading";
import { PROFESSION_LIST, professionLabelToSlug } from "./data";
import { orgNote } from "./org-notes";
import { pick } from "./phrasing";

// ── gate thresholds ─────────────────────────────────────────────────────────
export const GATE = { uniqueWords: 350, facts: 5, siblingOverlap: 0.4 } as const;

/** A body like AHPRA covers all twelve professions. Rendering twelve sub-test
 *  sections would bury the page's own facts under material that belongs on the
 *  twelve `/{profession}/{org}` pages, which link from here. The cap is named
 *  and reported rather than inlined, because an unstated cap reads as coverage. */
export const ORG_PAGE_PROFESSION_CAP = 4;

export type Section = { id: string; heading: string; paras: string[] };
export type Composed = {
  sections: Section[];
  facts: number;
  factList: string[];
  words: number;
  uniqueWords: number;
  overlap: number;
};
export type GateResult = Composed & { pass: boolean; reasons: string[] };

// Boilerplate that appears on every page — excluded from uniqueWords so the gate
// measures what is actually distinctive about this page.
const BOILERPLATE = [
  "registration is not the same as a visa and recognition and required grades change always confirm the current requirement with your regulator or the organisation before you rely on it",
  "practise the real oet sub tests honest grades per sub test on the 0 500 scale graded on clinical communication never on your accent",
  "all content is original to almioet we never copy or reproduce oet test material scores are practice estimates not official occupational english test results",
  "25 of what the family earns goes to the shamool foundation which provides free education and daily meals to underprivileged children in lahore pakistan",
];
const BOILER_WORDS = new Set(BOILERPLATE.join(" ").split(/\s+/));

function words(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
}
function ngrams(ws: string[], n = 5): Set<string> {
  const out = new Set<string>();
  for (let i = 0; i + n <= ws.length; i += 1) out.add(ws.slice(i, i + n).join(" "));
  return out;
}

const GRADE_LABEL: Record<string, string> = { L: "Listening", R: "Reading", W: "Writing", S: "Speaking" };

function gradesSentence(g: RegulatorGrades | null): string | null {
  if (!g) return null;
  const parts = (["L", "R", "W", "S"] as const)
    .map((k) => (g[k] ? `${GRADE_LABEL[k]} ${g[k]}` : null))
    .filter(Boolean);
  return parts.length ? parts.join(", ") : null;
}

// ── the merged entity ───────────────────────────────────────────────────────
export type Merged = {
  org: SeoOrg;
  reg: RegulatorEntity | undefined;
  grades: ReturnType<typeof resolveGrades>;
  country: string | null;
  countryCode: string | null;
  professionSlugs: string[];
};

export function merge(orgSlug: string): Merged | null {
  const org = orgBySlug(orgSlug);
  if (!org) return null;
  const reg = regulatorBySlug(orgSlug);
  // Base first for country too: enrichment v2 carries no country field at all.
  const country = org.country ?? reg?.country ?? null;
  return {
    org,
    reg,
    grades: resolveGrades(orgSlug),
    country,
    countryCode: codeForCountry(country),
    professionSlugs: org.professions.map(professionLabelToSlug).filter((s): s is string => !!s),
  };
}

// ── section builders ────────────────────────────────────────────────────────

/** Requirements — always, from whichever grade source is real. */
function sectionRequirements(m: Merged, w: Wording | null): { section: Section; facts: string[] } | null {
  const facts: string[] = [];
  // The BASE org record owns the grade. Enrichment only fills a gap, never
  // overrides — v1 overrode and published three regulators' grades wrongly.
  const line = gradesSentence(m.grades.grades);
  if (!line) return null;
  facts.push("grades");
  const cred = w?.credentialWord ?? "registration";
  const k = `req:${m.org.slug}`;
  const paras = [
    pick(k, [
      `${m.org.name} requires ${line}. OET reports each sub-test separately on the 0–500 scale and publishes no overall score, so each of these bars has to be cleared on its own — a strong Listening result cannot carry a short Writing one.`,
      `The published requirement at ${m.org.name} is ${line}. Because OET scores each sub-test independently and issues no composite, the weakest sub-test is the one that decides the outcome.`,
      `To satisfy ${m.org.name} on English you need ${line}. There is no aggregate OET score to fall back on: the four sub-tests are reported separately and judged separately.`,
    ]),
    pick(`${k}:2`, [
      `That is the English-language condition attached to ${cred}${m.country ? ` in ${m.country}` : ""} — one requirement among several, not the application itself.`,
      `Meeting it clears the language condition on ${cred}${m.country ? ` in ${m.country}` : ""} and nothing further; qualifications, identity and practice history are assessed separately.`,
      `Clearing these grades settles the English question for ${cred}${m.country ? ` in ${m.country}` : ""}. Every other part of the assessment is unaffected by how far above the bar you land.`,
    ]),
  ];
  if (m.reg?.validityYears) {
    facts.push("validityYears");
    const y = m.reg.validityYears;
    const s = y === 1 ? "" : "s";
    paras.push(
      pick(`${k}:v`, [
        `Results stay acceptable for ${y} year${s} from the test date, which makes timing part of the plan: sitting early in a long application can mean sitting again.`,
        `A result is valid here for ${y} year${s}. Candidates who test before their documents are ready sometimes find the certificate expires mid-application.`,
        `The acceptance window is ${y} year${s} from the test date — worth working backwards from, rather than testing as early as possible.`,
      ]),
    );
  }
  return { section: { id: "requirements", heading: "The grades this body requires", paras }, facts };
}

/** Score-combining — only when the body actually publishes one. Its absence is
 *  itself informative, so we say so rather than staying silent. */
function sectionCombining(m: Merged): { section: Section; facts: string[] } | null {
  if (!m.reg) return null;
  const c = m.reg.combiningRule;
  if (c) {
    const paras: string[] = [];
    if (c.windowMonths) {
      paras.push(
        `${m.org.name} allows results to be combined across more than one sitting, provided the sittings fall within ${c.windowMonths} months of each other. In practice that means a candidate who misses one sub-test can re-sit that sub-test alone rather than repeating the whole test.`,
      );
    }
    // `halfGradeRule` arrives either as prose or as a bare boolean flag. Only the
    // prose form says anything a reader can act on, so the flag renders nothing
    // rather than a sentence we would have to invent around it.
    if (typeof c.halfGradeRule === "string") paras.push(c.halfGradeRule);
    if (c.reducedWriting) paras.push(String(c.reducedWriting));
    return { section: { id: "combining", heading: "Combining results from more than one sitting", paras }, facts: ["combiningRule"] };
  }
  return {
    section: {
      id: "single-sitting",
      heading: "One sitting, all four sub-tests",
      paras: [
        pick(`ss:${m.org.slug}`, [
          `${m.org.name} publishes no provision for combining results across sittings, so plan to reach every grade in one attempt. Without a combining rule, one short sub-test means re-sitting the whole test.`,
          `No score-combining rule is published by ${m.org.name}. That makes a single sitting the working assumption, and it makes the weakest sub-test the expensive one.`,
          `Because ${m.org.name} does not publish a combining provision, all four grades must come from the same sitting — the most common and costliest surprise in this process.`,
        ]),
      ],
    },
    facts: [],
  };
}

/** What each sub-test asks of THIS profession — verified OET spec. */
function sectionSubtest(professionSlug: string, w: Wording, orgName: string): { section: Section; facts: string[] } | null {
  const g = PROFESSION_GRADING[professionSlug.toUpperCase().replace(/-/g, "_") as keyof typeof PROFESSION_GRADING];
  if (!g) return null;
  return {
    section: {
      id: "subtests",
      heading: `What Writing and Speaking ask of a ${w.term}`,
      paras: [
        pick(`sub:${orgName}:${professionSlug}`, [
          `OET is profession-specific, and the difference is concentrated in the two productive sub-tests. ${g.writingContext}`,
          `What separates OET from a general English test is the material itself. ${g.writingContext}`,
          `The Writing task is built from the documents this role actually produces. ${g.writingContext}`,
        ]),
        pick(`spk:${orgName}:${professionSlug}`, [
          g.speakingContext,
          `In the Speaking role-play the same principle applies. ${g.speakingContext}`,
          `Speaking is assessed as a consultation rather than a conversation. ${g.speakingContext}`,
        ]),
        pick(`sub2:${orgName}:${professionSlug}`, [
          `Listening and Reading are shared across all twelve professions, so a ${w.term} sits the same two papers as everyone else that day; only Writing and Speaking change.`,
          `The receptive papers do not vary by profession — a ${w.term} answers the same Listening and Reading material as any other candidate. The profession-specific work is all in Writing and Speaking.`,
          `Only half the test is profession-specific: Listening and Reading are common papers, while the Writing letter and Speaking role-play are set for a ${w.term} specifically.`,
        ]),
      ],
    },
    facts: ["professionSubtest"],
  };
}

/** OET vs the alternatives this body also accepts. */
function sectionAlternatives(m: Merged): { section: Section; facts: string[] } | null {
  const alts = m.reg?.alternativeTests;
  if (!alts?.length) return null;
  return {
    section: {
      id: "alternatives",
      heading: "OET and the tests this body accepts instead",
      paras: [
        pick(`alt:${m.org.slug}`, [
          `OET is not the only route here. ${m.org.name} also recognises ${alts.join("; ")}, so the choice of test belongs to the candidate rather than the body.`,
          `${m.org.name} accepts alternatives to OET — ${alts.join("; ")} — which means the useful question is which test fits the candidate, not which one is preferred.`,
          `Alongside OET, ${m.org.name} recognises ${alts.join("; ")}. Candidates pick between them; none is imposed.`,
        ]),
        pick(`alt2:${m.org.slug}`, [
          `What OET offers against those is context: its material is the work being applied for — case notes, a referral letter, a patient consultation — so studying for it and preparing for the job overlap.`,
          `The practical difference is the content. OET measures the same language through clinical material, so preparation doubles as familiarisation with the documents and conversations of the role.`,
          `OET's material is drawn from the workplace rather than the lecture hall, which is why its preparation tends to transfer directly into the first weeks of practice.`,
        ]),
      ],
    },
    facts: ["alternativeTests"],
  };
}

/** Where OET sits inside this body's own process. */
function sectionContext(m: Merged): { section: Section; facts: string[] } | null {
  const ctx = m.reg?.registrationContext;
  if (!ctx) return null;
  return {
    section: { id: "context", heading: `Where OET sits in the ${m.org.name} process`, paras: [String(ctx)] },
    facts: ["registrationContext"],
  };
}

/** The local vocabulary — genuinely useful, and it is the searcher's own words. */
function sectionWording(w: Wording, m: Merged, professionSlug: string): { section: Section; facts: string[] } | null {
  const conv = localeConvention(m.countryCode);
  const bits: string[] = [];
  const facts: string[] = [];
  if (w.isLocalTerm) {
    facts.push("localTerm");
    const def = wordingFor(professionSlug, null).term;
    bits.push(
      `${m.country} calls this role a ${w.term}; elsewhere the same role is a ${def}. Both describe the same OET profession, and the sub-test material is the same — only the job title differs.`,
    );
  }
  if (w.credentialBody) {
    facts.push("credentialBody");
    bits.push(
      `The credential itself is usually referred to as ${w.credentialBody}, which is the name to look for on official pages and the phrase most candidates search for.`,
    );
  }
  // Only worth saying where the local word actually DIFFERS from the neutral
  // one. Otherwise it renders "the UK says registration where other countries
  // say registration" — a sentence that varies the label over identical facts,
  // which is the exact pattern the recipe bans.
  const localWords = conv
    ? ([
        conv.credentialWord !== "registration"
          ? `calls the credential a "${conv.credentialWord}" rather than "registration"`
          : null,
        conv.processWord !== "registration" && conv.processWord !== conv.credentialWord
          ? `calls the process "${conv.processWord}"`
          : null,
        conv.spelling ? `and writes ${conv.spelling}` : null,
      ].filter(Boolean) as string[])
    : [];
  if (localWords.length) {
    facts.push("localeConvention");
    bits.push(
      `Local usage matters when searching: ${m.country} ${localWords.join(", ")} — worth knowing because it changes the words on the official pages you are looking for.`,
    );
  }
  if (!bits.length) return null;
  return { section: { id: "wording", heading: `What this is called in ${m.country}`, paras: bits }, facts };
}

/** Sourcing + freshness — E-E-A-T, and honest about what we can and cannot promise. */
function sectionSource(m: Merged): { section: Section; facts: string[] } {
  const paras: string[] = [];
  const facts: string[] = [];
  const url = m.reg?.officialUrl ?? m.org.website;
  const v = m.org.name;
  const nv = nameVariants(v);
  if (nv.abbrev) {
    // Recipe §2, organisation axis: both strings people actually type, derived
    // from the official name rather than invented.
    facts.push("nameVariants");
    paras.push(
      `${nv.full} is usually written ${nv.abbrev} in application guidance and is searched both ways; the two names refer to the same body.`,
    );
  }
  if (url) {
    facts.push("officialUrl");
    paras.push(`The authority on this is ${m.org.name} itself: ${url}`);
  }
  const verified = verifiedOn(m.reg);
  if (verified) {
    facts.push("lastVerified");
    paras.push(`Last verified ${verified}.`);
  }
  if (m.grades.origin === "fallback" && m.reg?.source) {
    // Be explicit when the figure did not come from OET's own list.
    paras.push(
      `OET's recognising-organisations list publishes no grade for ${m.org.name}; the requirement above is taken from ${m.reg.source} and should be checked against the body's own page.`,
    );
  }
  if (m.grades.conflict) {
    paras.push(
      `Our sources disagree on this requirement. The figure shown is the one OET publishes; a secondary source gives a different one. Until that is resolved against ${m.org.name}'s own page, treat this entry as indicative and confirm before acting.`,
    );
  }
  if (m.reg?.note) paras.push(m.reg.note);
  if (m.reg?.verifyStatus === "confirm-official") {
    paras.push(
      `This entry is compiled from published sources and has not yet been re-confirmed against the body's own current page, so treat the grades above as a starting point and check them directly before you rely on them.`,
    );
  }
  const note = orgNote(m.org.slug);
  if (note) {
    facts.push("orgNote");
    paras.push(note.note);
  }
  paras.push(
    pick(`src:${m.org.slug}`, [
      `Recognition and required grades change. Confirm the current requirement with ${m.org.name} before relying on it, and note that registration is not the same as a visa.`,
      `Requirements move. Check the figures above against ${m.org.name}'s own page before acting on them, and treat registration and immigration as separate processes.`,
      `Bodies revise their English requirements periodically, so verify with ${m.org.name} directly. Registration is also distinct from any visa step.`,
    ]),
  );
  return { section: { id: "source", heading: "Source and last verified", paras }, facts };
}

// ── page composers ──────────────────────────────────────────────────────────

export function composeOrgPage(orgSlug: string): (Composed & { merged: Merged }) | null {
  const m = merge(orgSlug);
  if (!m) return null;
  const primary = m.professionSlugs[0] ?? null;
  const w = primary ? wordingFor(primary, m.countryCode) : null;
  const sections: Section[] = [];
  const facts: string[] = [];
  const push = (r: { section: Section; facts: string[] } | null) => {
    if (!r) return;
    sections.push(r.section);
    facts.push(...r.facts);
  };

  push(sectionRequirements(m, w));
  push(sectionCombining(m));
  // Every profession this body covers gets its own sub-test paragraph — this is
  // the section that makes a multi-profession body genuinely long, and it is
  // real: the material differs per profession.
  for (const p of m.professionSlugs.slice(0, ORG_PAGE_PROFESSION_CAP)) {
    const pw = wordingFor(p, m.countryCode);
    push(sectionSubtest(p, pw, m.org.name));
  }
  if (m.professionSlugs.length) facts.push("professions");
  push(sectionAlternatives(m));
  push(sectionContext(m));
  if (primary && w) push(sectionWording(w, m, primary));
  push(sectionSource(m));

  return { merged: m, ...measure(sections, facts) };
}

export function composeProfessionOrgPage(
  professionSlug: string,
  orgSlug: string,
): (Composed & { merged: Merged; wording: Wording }) | null {
  const m = merge(orgSlug);
  if (!m) return null;
  if (!m.professionSlugs.includes(professionSlug)) return null; // meaningful-combination rule
  const w = wordingFor(professionSlug, m.countryCode);
  const sections: Section[] = [];
  const facts: string[] = [];
  const push = (r: { section: Section; facts: string[] } | null) => {
    if (!r) return;
    sections.push(r.section);
    facts.push(...r.facts);
  };

  push(sectionRequirements(m, w));
  push(sectionSubtest(professionSlug, w, m.org.name));
  push(sectionCombining(m));
  push(sectionAlternatives(m));
  push(sectionContext(m));
  push(sectionWording(w, m, professionSlug));
  push(sectionSource(m));
  facts.push("professionMatch");

  return { merged: m, wording: w, ...measure(sections, facts) };
}

function measure(sections: Section[], factList: string[]): Composed {
  const body = sections.flatMap((s) => [s.heading, ...s.paras]).join(" ");
  const ws = words(body);
  const uniq = ws.filter((x) => !BOILER_WORDS.has(x));
  return {
    sections,
    facts: new Set(factList).size,
    factList: [...new Set(factList)],
    words: ws.length,
    uniqueWords: uniq.length,
    overlap: 0,
  };
}

// ── the gate ────────────────────────────────────────────────────────────────

/** Max 5-gram overlap against already-accepted siblings of the same type. */
function overlapAgainst(sections: Section[], seen: Set<string>[]): number {
  const g = ngrams(words(sections.flatMap((s) => [s.heading, ...s.paras]).join(" ")));
  if (g.size === 0) return 1;
  let worst = 0;
  for (const prev of seen) {
    let hit = 0;
    for (const x of g) if (prev.has(x)) hit += 1;
    worst = Math.max(worst, hit / g.size);
  }
  return worst;
}

export function gate(c: Composed, seen: Set<string>[]): GateResult {
  const overlap = overlapAgainst(c.sections, seen);
  const reasons: string[] = [];
  if (c.uniqueWords < GATE.uniqueWords) reasons.push(`uniqueWords ${c.uniqueWords} < ${GATE.uniqueWords}`);
  if (c.facts < GATE.facts) reasons.push(`facts ${c.facts} < ${GATE.facts}`);
  if (overlap > GATE.siblingOverlap) reasons.push(`siblingOverlap ${(overlap * 100).toFixed(0)}% > ${GATE.siblingOverlap * 100}%`);
  return { ...c, overlap, pass: reasons.length === 0, reasons };
}

export function fingerprint(sections: Section[]): Set<string> {
  return ngrams(words(sections.flatMap((s) => [s.heading, ...s.paras]).join(" ")));
}

// ── candidate enumeration + the emitted set (computed once, cached) ──────────

export type Skip = { type: string; slug: string; reasons: string[] };
export type Emitted = {
  /** Gate-passers that are ALSO current — indexable and sitemapped. */
  orgs: string[];
  professionOrgs: { professionSlug: string; orgSlug: string }[];
  countries: string[];
  professions: string[];
  /** Gate-passers whose facts are not re-confirmed: rendered, but noindex and
   *  kept OUT of the sitemap. Recipe §4 — a rich page that is out of date sends
   *  a real person down a dead road, so richness alone does not earn indexing. */
  noindexOrgs: string[];
  noindexProfessionOrgs: { professionSlug: string; orgSlug: string }[];
  skipped: Skip[];
};

let _emitted: Emitted | null = null;

/** Sibling overlap is decided against whoever was accepted FIRST, so the order
 *  candidates are considered in decides which of two similar pages survives.
 *  Source order is the order of OET's scrape, which means an arbitrary body can
 *  claim the ground and knock out the NMC or AHPRA — the two most-searched
 *  regulators on the surface. Richest first instead: the page carrying the most
 *  distinct material wins its cluster, and the derivative one is the one cut.
 *  Ties break on slug so the emitted set is identical on every build. */
function richestFirst<T>(
  items: T[],
  key: (t: T) => string,
  measured: Map<string, Composed | null>,
): T[] {
  const rank = (t: T) => measured.get(key(t)) ?? null;
  return [...items].sort((a, b) => {
    const ma = rank(a);
    const mb = rank(b);
    const byFacts = (mb?.facts ?? -1) - (ma?.facts ?? -1);
    if (byFacts !== 0) return byFacts;
    const byWords = (mb?.uniqueWords ?? -1) - (ma?.uniqueWords ?? -1);
    if (byWords !== 0) return byWords;
    return key(a).localeCompare(key(b));
  });
}

export function emitted(): Emitted {
  if (_emitted) return _emitted;
  const skipped: Skip[] = [];
  const noindexOrgs: string[] = [];
  const noindexProfessionOrgs: { professionSlug: string; orgSlug: string }[] = [];

  // /register/{org}
  const orgs: string[] = [];
  const orgSeen: Set<string>[] = [];
  const orgComposed = new Map<string, Composed | null>(
    ORGANISATIONS.map((o) => [o.slug, o.professions.length ? composeOrgPage(o.slug) : null]),
  );
  for (const o of richestFirst([...ORGANISATIONS], (x) => x.slug, orgComposed)) {
    if (!o.professions.length) {
      skipped.push({ type: "register", slug: o.slug, reasons: ["covers 0 professions"] });
      continue;
    }
    const c = orgComposed.get(o.slug) ?? null;
    if (!c) {
      skipped.push({ type: "register", slug: o.slug, reasons: ["no composable data"] });
      continue;
    }
    const g = gate(c, orgSeen);
    if (g.pass) {
      orgSeen.push(fingerprint(c.sections));
      // Recipe §4: rich AND current, or it does not ship indexable.
      if (isCurrentEnoughToIndex(o.slug)) orgs.push(o.slug);
      else {
        noindexOrgs.push(o.slug);
        skipped.push({
          type: "register",
          slug: o.slug,
          reasons: [`noindex, out of sitemap — ${notCurrentReason(o.slug)}`],
        });
      }
    } else {
      skipped.push({ type: "register", slug: o.slug, reasons: g.reasons });
    }
  }

  // /{profession}/{org} — meaningful combinations only
  const professionOrgs: { professionSlug: string; orgSlug: string }[] = [];
  const poSeen: Set<string>[] = [];
  const poPairs: { professionSlug: string; orgSlug: string }[] = [];
  for (const p of PROFESSION_LIST) {
    for (const o of orgsForProfession(p.slug)) poPairs.push({ professionSlug: p.slug, orgSlug: o.slug });
  }
  const poKey = (x: { professionSlug: string; orgSlug: string }) => `${x.professionSlug}/${x.orgSlug}`;
  const poComposed = new Map<string, Composed | null>(
    poPairs.map((x) => [poKey(x), composeProfessionOrgPage(x.professionSlug, x.orgSlug)]),
  );
  for (const pair of richestFirst(poPairs, poKey, poComposed)) {
    const slug = poKey(pair);
    const c = poComposed.get(slug) ?? null;
    if (!c) {
      skipped.push({ type: "profession-org", slug, reasons: ["no composable data"] });
      continue;
    }
    const g = gate(c, poSeen);
    if (g.pass) {
      poSeen.push(fingerprint(c.sections));
      if (isCurrentEnoughToIndex(pair.orgSlug)) {
        professionOrgs.push(pair);
      } else {
        noindexProfessionOrgs.push(pair);
        skipped.push({
          type: "profession-org",
          slug,
          reasons: [`noindex, out of sitemap — ${notCurrentReason(pair.orgSlug)}`],
        });
      }
    } else {
      skipped.push({ type: "profession-org", slug, reasons: g.reasons });
    }
  }

  // Country hubs — only where an emitted regulator page exists for that country.
  const countries = [
    ...new Set(orgs.map((s) => orgBySlug(s)?.country ?? null).filter((c): c is string => !!c)),
  ].sort();

  _emitted = {
    orgs,
    professionOrgs,
    countries: countries.map(countrySlug),
    professions: PROFESSION_LIST.map((p) => p.slug),
    noindexOrgs,
    noindexProfessionOrgs,
    skipped,
  };
  return _emitted;
}

export function isOrgEmitted(slug: string): boolean {
  return emitted().orgs.includes(slug);
}
export function isProfessionOrgEmitted(professionSlug: string, orgSlug: string): boolean {
  return emitted().professionOrgs.some((x) => x.professionSlug === professionSlug && x.orgSlug === orgSlug);
}

export { countrySlug, countryFromSlug, regulatorsForCountry, REGULATORS, searchIntents, wordingFor };
