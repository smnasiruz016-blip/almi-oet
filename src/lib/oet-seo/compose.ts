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

import { ORGANISATIONS, orgBySlug, orgsForProfession } from "./data";
import {
  countrySlug,
  countryFromSlug,
  regulatorsForCountry,
  resolveGrades,
  verifiedOn,
  isCurrentEnoughToIndex,
  notCurrentReason,
  nameVariants,
  REGULATORS,
  type RegulatorGrades,
} from "./regulators";
import { searchIntents, wordingFor, localeConvention, type Wording } from "./lexicon";
import { PROFESSION_GRADING } from "@/lib/oet/profession-grading";
import { PROFESSION_LIST } from "./data";
import { orgNote } from "./org-notes";
import { pick } from "./phrasing";
import {
  GATE,
  gate,
  fingerprint,
  measure,
  merge,
  richestFirst,
  largestFirst,
  inCountry,
  sentence,
  gradesSentence,
  GRADE_LABEL,
  type Section,
  type Table,
  type Composed,
  type GateResult,
  type Merged,
} from "./compose-core";
import {
  CORRIDORS,
  destinationFor,
  corridorPath,
  CORRIDOR_DESTINATION_ORG,
  SHARED_DESTINATION,
} from "./corridors";
import { composeJourney, isJourneyCurrent, journeyNotCurrentReason } from "@/lib/journey/compose";
import {
  matrixCells,
  matrixCountries,
  composeCountryHubPage,
  composeCountryProfessionPage,
  composeProfessionByCountryPage,
  composeProfessionRankingPage,
  isMatrixCurrent,
  matrixNotCurrentReason,
  type MatrixCell,
} from "./compose-matrix";

// Gate thresholds, the measuring tape, the gate itself, `merge()` and the small
// grade/country helpers now live in compose-core.ts, so the matrix page types can
// share them without importing this module (which would close a cycle: `emitted()`
// below has to know about them). Re-exported here because the components and the
// report have always imported them from "./compose".
export {
  GATE,
  gate,
  fingerprint,
  measure,
  merge,
  inCountry,
  sentence,
  gradesSentence,
  GRADE_LABEL,
  type Section,
  type Table,
  type Composed,
  type GateResult,
  type Merged,
};

/** A body like AHPRA covers all twelve professions. Rendering twelve sub-test
 *  sections would bury the page's own facts under material that belongs on the
 *  twelve `/{profession}/{org}` pages, which link from here. The cap is named
 *  and reported rather than inlined, because an unstated cap reads as coverage. */
export const ORG_PAGE_PROFESSION_CAP = 4;

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
      `That is the English-language condition attached to ${cred}${m.country ? ` in ${inCountry(m.country)}` : ""} — one requirement among several, not the application itself.`,
      `Meeting it clears the language condition on ${cred}${m.country ? ` in ${inCountry(m.country)}` : ""} and nothing further; qualifications, identity and practice history are assessed separately.`,
      `Clearing these grades settles the English question for ${cred}${m.country ? ` in ${inCountry(m.country)}` : ""}. Every other part of the assessment is unaffected by how far above the bar you land.`,
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
    if (typeof c.halfGradeRule === "string") paras.push(sentence(c.halfGradeRule));
    if (c.reducedWriting) paras.push(sentence(String(c.reducedWriting)));
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
    section: { id: "context", heading: `Where OET sits in the ${m.org.name} process`, paras: [sentence(String(ctx))] },
    facts: ["registrationContext"],
  };
}

/** The uniform steps every corridor into this destination shares.
 *
 *  THE OTHER HALF OF LAW #3. The corridor pages deliberately do not state the
 *  Test of Competence, the fee schedule or the majority-English-country list —
 *  they name them and link here. That only works if "here" actually holds them,
 *  otherwise de-emphasising the shared material just deletes it.
 *
 *  So this renders on the ONE page the corridors point at, and only there.
 *
 *  WHAT IT DELIBERATELY DOES NOT RENDER: `sharedDestination.englishAcceptedTests`.
 *  The base record already owns the English requirement and `sectionRequirements`
 *  already states it on this same page — grades, the IELTS alternative and the
 *  combining rule. Rendering the batch's differently-worded copy alongside it
 *  would put two owners on one fact on one page, which is exactly how enrichment
 *  v1 published three regulators' figures wrongly. The one thing that copy holds
 *  and the base does not is IELTS's own numeric scores; those belong in the base
 *  record, not smuggled in through a corridor file. Flagged, not fabricated. */
function sectionSharedCorridorSteps(m: Merged): { section: Section; facts: string[] } | null {
  if (m.org.slug !== CORRIDOR_DESTINATION_ORG) return null;
  const s = SHARED_DESTINATION;
  const paras: string[] = [];
  const facts: string[] = [];
  if (s.testOfCompetence?.value) {
    facts.push("testOfCompetence");
    paras.push(sentence(s.testOfCompetence.value));
  }
  if (s.nmcFees?.value) {
    facts.push("destinationFees");
    paras.push(sentence(s.nmcFees.value));
  }
  if (s.englishMajorityCountryList?.value) {
    facts.push("majorityEnglishList");
    paras.push(sentence(s.englishMajorityCountryList.value));
  }
  if (!paras.length) return null;
  paras.push(
    `These steps are the same whichever country you trained in, which is why the country-by-country pages link here rather than repeating them.`,
  );
  return {
    section: {
      id: "shared-steps",
      heading: `The steps every internationally-trained applicant takes`,
      paras,
    },
    facts,
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
      `${inCountry(m.country)} calls this role a ${w.term}; elsewhere the same role is a ${def}. Both describe the same OET profession, and the sub-test material is the same — only the job title differs.`,
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
        conv.spelling ? `writes ${conv.spelling}` : null,
      ].filter(Boolean) as string[])
    : [];
  if (localWords.length) {
    facts.push("localeConvention");
    // Join with a real "and" before the last clause. Hanging the conjunction off
    // one fixed clause produced "United Kingdom and writes -ise" whenever the
    // clauses before it were the ones that dropped out.
    const clause =
      localWords.length === 1
        ? localWords[0]
        : `${localWords.slice(0, -1).join(", ")} and ${localWords[localWords.length - 1]}`;
    bits.push(
      `Local usage matters when searching: ${inCountry(m.country)} ${clause} — worth knowing because it changes the words on the official pages you are looking for.`,
    );
  }
  if (!bits.length) return null;
  return { section: { id: "wording", heading: `What this is called in ${inCountry(m.country)}`, paras: bits }, facts };
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
  if (m.reg?.note) paras.push(sentence(m.reg.note));
  if (m.reg?.verifyStatus === "confirm-official") {
    paras.push(
      `This entry is compiled from published sources and has not yet been re-confirmed against the body's own current page, so treat the grades above as a starting point and check them directly before you rely on them.`,
    );
  }
  const note = orgNote(m.org.slug);
  if (note) {
    facts.push("orgNote");
    paras.push(sentence(note.note));
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
  push(sectionSharedCorridorSteps(m));
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

// ── candidate enumeration + the emitted set (computed once, cached) ──────────

export type Skip = { type: string; slug: string; reasons: string[] };
export type CountryProfession = { countrySlug: string; professionSlug: string };
export type Emitted = {
  /** Gate-passers that are ALSO current — indexable and sitemapped. */
  orgs: string[];
  professionOrgs: { professionSlug: string; orgSlug: string }[];
  countries: string[];
  professions: string[];
  /** Page types v2. Same gate, same currency rule, same richest-first ordering. */
  countryProfessions: CountryProfession[];
  professionByCountry: string[];
  professionRankings: string[];
  /** Pattern 5 — occupation × origin × destination corridors. */
  journeys: string[];
  /** Corridors rich enough to ship but holding a fact awaiting re-confirmation:
   *  rendered with `noindex, follow`, kept out of the sitemap. */
  noindexJourneys: string[];
  /** Gate-passers whose facts are not re-confirmed: rendered, but noindex and
   *  kept OUT of the sitemap. Recipe §4 — a rich page that is out of date sends
   *  a real person down a dead road, so richness alone does not earn indexing. */
  noindexOrgs: string[];
  noindexProfessionOrgs: { professionSlug: string; orgSlug: string }[];
  noindexCountryProfessions: CountryProfession[];
  skipped: Skip[];
};

let _emitted: Emitted | null = null;

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

  // ── page types v2 ─────────────────────────────────────────────────────────
  // Same gate, same currency rule, same richest-first ordering. Each type is
  // judged against its OWN siblings: a country×profession page is not a near-copy
  // of an organisation page just because both mention the NMC, and comparing
  // across types would measure the boilerplate they share rather than the
  // material that distinguishes them.

  // /{country}/{profession}
  const countryProfessions: CountryProfession[] = [];
  const noindexCountryProfessions: CountryProfession[] = [];
  const cpSeen: Set<string>[] = [];
  const cpKey = (x: CountryProfession) => `${x.countrySlug}/${x.professionSlug}`;
  const cpCells = matrixCells().map((c) => ({ countrySlug: c.countrySlug, professionSlug: c.professionSlug }));
  const cpComposed = new Map<string, Composed | null>(
    cpCells.map((x) => [cpKey(x), composeCountryProfessionPage(x.countrySlug, x.professionSlug)]),
  );
  const cellByKey = new Map<string, MatrixCell>(
    matrixCells().map((c) => [`${c.countrySlug}/${c.professionSlug}`, c]),
  );
  for (const x of largestFirst(cpCells, cpKey, cpComposed)) {
    const slug = cpKey(x);
    const c = cpComposed.get(slug) ?? null;
    if (!c) {
      skipped.push({ type: "country-profession", slug, reasons: ["no composable data"] });
      continue;
    }
    const g = gate(c, cpSeen);
    if (!g.pass) {
      skipped.push({ type: "country-profession", slug, reasons: g.reasons });
      continue;
    }
    cpSeen.push(fingerprint(c.sections, c.tables));
    const bodies = cellByKey.get(slug)?.bodies ?? [];
    if (isMatrixCurrent(bodies)) countryProfessions.push(x);
    else {
      noindexCountryProfessions.push(x);
      skipped.push({
        type: "country-profession",
        slug,
        reasons: [`noindex, out of sitemap — ${matrixNotCurrentReason(bodies)}`],
      });
    }
  }

  // Country hubs. A hub is no longer "any country with an emitted org page": it
  // is a composed page in its own right and has to earn its place like the rest.
  const countries: string[] = [];
  const hubSeen: Set<string>[] = [];
  const hubSlugs = matrixCountries().map((c) => c.slug);
  const hubComposed = new Map<string, Composed | null>(
    hubSlugs.map((s) => [s, composeCountryHubPage(s)]),
  );
  for (const s of largestFirst(hubSlugs, (x) => x, hubComposed)) {
    const c = hubComposed.get(s) ?? null;
    if (!c) {
      skipped.push({ type: "country", slug: s, reasons: ["no composable data"] });
      continue;
    }
    const g = gate(c, hubSeen);
    if (!g.pass) {
      skipped.push({ type: "country", slug: s, reasons: g.reasons });
      continue;
    }
    hubSeen.push(fingerprint(c.sections, c.tables));
    countries.push(s);
  }

  // /{profession}/by-country
  const professionByCountry: string[] = [];
  const bcSeen: Set<string>[] = [];
  const bcSlugs = PROFESSION_LIST.map((p) => p.slug);
  const bcComposed = new Map<string, Composed | null>(
    bcSlugs.map((p) => [p, composeProfessionByCountryPage(p)]),
  );
  const bcFingerprint = new Map<string, Set<string>>();
  for (const p of largestFirst(bcSlugs, (x) => x, bcComposed)) {
    const c = bcComposed.get(p) ?? null;
    if (!c) {
      skipped.push({ type: "by-country", slug: p, reasons: ["no country with a real body"] });
      continue;
    }
    const g = gate(c, bcSeen);
    if (!g.pass) {
      skipped.push({ type: "by-country", slug: p, reasons: g.reasons });
      continue;
    }
    const fp = fingerprint(c.sections, c.tables);
    bcSeen.push(fp);
    bcFingerprint.set(p, fp);
    professionByCountry.push(p);
  }

  // /{profession}/where-oet-is-easiest — the ranking.
  //
  // Gated against its own siblings AND against the by-country page for the SAME
  // profession, which is the one page on the surface it could plausibly duplicate:
  // both are built from the same rows. Asserting "distinct by construction" and
  // not checking is how two near-identical URLs end up competing with each other,
  // so the check is real rather than assumed.
  const professionRankings: string[] = [];
  const rkSeen: Set<string>[] = [];
  const rkComposed = new Map<string, Composed | null>(
    bcSlugs.map((p) => [p, composeProfessionRankingPage(p)]),
  );
  for (const p of largestFirst(bcSlugs, (x) => x, rkComposed)) {
    const c = rkComposed.get(p) ?? null;
    if (!c) {
      skipped.push({ type: "ranking", slug: p, reasons: ["fewer than 3 countries to rank"] });
      continue;
    }
    const own = bcFingerprint.get(p);
    const g = gate(c, own ? [...rkSeen, own] : rkSeen);
    if (!g.pass) {
      skipped.push({ type: "ranking", slug: p, reasons: g.reasons });
      continue;
    }
    rkSeen.push(fingerprint(c.sections, c.tables));
    professionRankings.push(p);
  }

  // /{occupation}/from-{origin}/to-{destination} — the corridor journeys.
  //
  // Same gate, no exception. This page type was built to be measured: if the
  // origin dimension carries enough real material, these pass; if it does not,
  // they are cut and that is the finding. Nothing here is padded to help them.
  const journeys: string[] = [];
  const noindexJourneys: string[] = [];
  const jSeen: Set<string>[] = [];
  const jComposed = new Map<string, Composed | null>(
    CORRIDORS.map((c) => [c.slug, composeJourney(c, destinationFor(c), "nurses")]),
  );
  for (const c of largestFirst([...CORRIDORS], (x) => x.slug, jComposed)) {
    const comp = jComposed.get(c.slug) ?? null;
    if (!comp) {
      skipped.push({ type: "journey", slug: c.slug, reasons: ["no composable data"] });
      continue;
    }
    const g = gate(comp, jSeen);
    if (!g.pass) {
      skipped.push({ type: "journey", slug: c.slug, reasons: g.reasons });
      continue;
    }
    jSeen.push(fingerprint(comp.sections, comp.tables));
    if (isJourneyCurrent(c)) journeys.push(corridorPath(c));
    else {
      noindexJourneys.push(corridorPath(c));
      skipped.push({
        type: "journey",
        slug: c.slug,
        reasons: [`noindex, out of sitemap — ${journeyNotCurrentReason(c)}`],
      });
    }
  }

  _emitted = {
    orgs,
    professionOrgs,
    countries,
    professions: PROFESSION_LIST.map((p) => p.slug),
    countryProfessions,
    professionByCountry,
    professionRankings,
    journeys,
    noindexJourneys,
    noindexOrgs,
    noindexProfessionOrgs,
    noindexCountryProfessions,
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
export function isCountryProfessionEmitted(countrySlugValue: string, professionSlug: string): boolean {
  return emitted().countryProfessions.some(
    (x) => x.countrySlug === countrySlugValue && x.professionSlug === professionSlug,
  );
}

export { countrySlug, countryFromSlug, regulatorsForCountry, REGULATORS, searchIntents, wordingFor };
