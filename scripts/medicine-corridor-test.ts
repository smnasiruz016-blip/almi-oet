// MEASUREMENT ONLY — these corridors are NOT wired into the emitted set, and the
// result below is why. Re-run before proposing to build them.
//
//   npx tsx scripts/medicine-corridor-test.ts
//
// VERDICT (2026-08-06): medicine corridors are NOT built.
//
//   Doctor vs nurse, same country, same destination:  12-24%, 0/6 over gate.
//     The profession axis is REAL. A doctor's page and a nurse's page for the
//     same country are genuinely different documents — different council,
//     different good-standing route, different exam.
//
//   The six medicine corridors against EACH OTHER: min 35 / median 38 / max 48%,
//     6 of 15 over the gate. They are not distinct enough from one another.
//
// The cause is measurable rather than mysterious. Nursing corridors carry a
// per-origin FAQ and a fees/timeline fact — roughly 150 words of origin-specific
// material each — and the doctors' origins have neither sourced yet. What is left
// is a short good-standing paragraph plus deltas that repeat: the three non-Hague
// origins share one identical attestation sentence, the three Hague origins share
// another, and those three pairs are the worst three in the set.
//
// So this is the same finding as the grid verdict, one level down: the pattern is
// sound, the data is not deep enough yet. Revisit only if the doctor origins are
// enriched to nursing depth — fees, timelines and a profession FAQ per council.
// Until then the doctors' material belongs on /register/uk-gmc and on origin hub
// pages, cross-linked, not spread across six near-identical corridors.

// Does the origin→UK corridor pattern hold for MEDICINE?
//
//   npx tsx scripts/medicine-corridor-test.ts
//
// Nursing origins→UK cleared 10/10. That does not transfer by assumption: the
// nursing corridors were authored per-origin in their own words, while these are
// composed from a doctor's medical council plus country-level attestation plus a
// GMC delta. Two questions decide it, and the second matters more.
//
//   1. Are the six medicine corridors distinct from EACH OTHER?
//   2. Is medicine/{country}/uk distinct from nursing/{country}/uk?
//
// The second is the real test. Those two pages share the country's attestation
// chain and its English-medium status, and differ only on the professional
// regulator, its good-standing route and the destination's exam. If they collapse,
// the answer is one country page linking to two profession pages — not two
// near-identical corridors.
//
// Nothing is wired into the emitted set until this says it clears.

import DOCS_RAW from "../src/lib/oet-seo/origins-doctors.json";
import { NEUTRAL_ORIGINS, toFact } from "../src/lib/oet-seo/neutral-origins";
import { UK_DELTAS } from "../src/lib/oet-seo/destination-deltas";
import { mergeFacts } from "../src/lib/oet-seo/corridor-compose";
import { CORRIDORS, destinationFor, destinationGradeConflicts, corridorFaqFor } from "../src/lib/oet-seo/corridors";
import { composeJourney, journeyVerdict } from "../src/lib/journey/compose";
import { GATE, fingerprint, type Composed } from "../src/lib/oet-seo/compose-core";
import UK_PROF from "../src/lib/oet-seo/professions-uk.json";
import type { Corridor, JourneyDestination, SourcedFact } from "../src/lib/journey/types";

const conflicts = destinationGradeConflicts();
const docs = (DOCS_RAW as unknown as { origins: any[] }).origins;
const gmc = (UK_PROF as unknown as { professions: any[] }).professions.find((p) => p.slug === "medicine")!;

// The GMC's deltas. Short by design: the PLAB route, the EPIC verification and
// the fees are the same for every origin, so they live on /register/uk-gmc and
// the corridor links. What the corridor states is who receives the certificate
// and what the English requirement is — the two facts a reader needs before
// they can act on the origin half above.
const GMC_RECIPIENT: SourcedFact = {
  value:
    "The GMC needs it sent directly, issued within the previous three months, plus EPIC verification of your qualification.",
  sources: (toFact(gmc.verification)?.sources ?? []) as SourcedFact["sources"],
  confidence: "official",
  asOf: "2026-08",
};
const GMC_ENGLISH: SourcedFact = {
  value: "The GMC takes OET MEDICINE at Grade B in all four, one sitting — see the GMC page.",
  sources: (toFact(gmc.englishOET)?.sources ?? []) as SourcedFact["sources"],
  confidence: "official",
  asOf: "2026-08",
  verifyStatus: "confirm-official",
};

function medicineCorridor(d: any): Corridor {
  const country = NEUTRAL_ORIGINS.find((o) => o.slug === d.slug)!;
  const regulator = toFact(d.regulator)!;
  const abbrev = regulator.value.match(/^(.{3,70}?\(([A-Z][A-Za-z0-9&.\s]{0,20})\))/);
  return {
    slug: `medicine__${d.slug}__united-kingdom`,
    occupationSlug: "medicine",
    originSlug: d.slug,
    destinationSlug: "united-kingdom",
    originCountry: country.country,
    destinationCountry: "United Kingdom",
    originRegulator: regulator,
    originRegulatorName: abbrev ? abbrev[1].trim() : `${country.country}'s medical council`,
    verificationRoute: mergeFacts(toFact(d.goodStandingIssuance), GMC_RECIPIENT),
    // Country-level and profession-independent: a doctor's degree and a nurse's
    // run through the same ministries. Reused rather than re-sourced.
    attestationChain: mergeFacts(
      country.attestationBase,
      country.hague ? UK_DELTAS.attestationApostille : UK_DELTAS.attestationLegalisation,
    ),
    feesTimeline: undefined,
    englishRoute: mergeFacts(country.englishMediumStatus, GMC_ENGLISH),
    localSearchWording: [...(d.originSearchWording ?? []), "GMC registration for overseas doctors", "OET Medicine grade B GMC"],
    lastVerified: "2026-08-06",
  };
}

const MED = docs.map(medicineCorridor);
const gmcDest: JourneyDestination = {
  regulatorName: "General Medical Council (GMC)",
  requirementLine: null,
  sharedStepsHref: "/register/uk-gmc",
  sharedStepsSummary: "the PLAB route or an approved postgraduate qualification, EPIC verification, and the registration fees",
  destinationVerifiedOn: "2026-08-06",
};

const comp = new Map<string, Composed>();
for (const c of MED) comp.set(c.slug, composeJourney(c, gmcDest, "doctors", { conflicts }));
for (const c of CORRIDORS) comp.set(c.slug, composeJourney(c, destinationFor(c), "nurses", { conflicts, faqs: corridorFaqFor(c.slug) }));

const fp = (c: Corridor) => fingerprint(comp.get(c.slug)!.sections, comp.get(c.slug)!.tables);
const pct = (v: number) => `${(v * 100).toFixed(0)}%`;
const ov = (A: Set<string>, B: Set<string>) => {
  let h = 0;
  for (const g of B) if (A.has(g)) h++;
  let h2 = 0;
  for (const g of A) if (B.has(g)) h2++;
  return Math.max(h / B.size, h2 / A.size);
};

console.log("=== 1. MEDICINE corridors, origin → UK ===");
console.log(`gate: uniqueWords >= ${GATE.uniqueWords} · facts >= ${GATE.facts} · overlap <= ${GATE.siblingOverlap * 100}%`);
for (const c of MED) {
  const r = comp.get(c.slug)!;
  const v = journeyVerdict(c, { conflicts });
  const thin = r.uniqueWords < GATE.uniqueWords ? `  THIN ${r.uniqueWords}<${GATE.uniqueWords}` : "";
  console.log(
    `  ${c.originSlug.padEnd(12)} uniqueWords=${String(r.uniqueWords).padStart(4)} facts=${String(r.facts).padStart(2)} indexable=${v.indexable ? "YES" : "no "}${thin}${v.blockers.length ? " :: " + v.blockers.join(" · ") : ""}`,
  );
}

console.log("\n=== 2. PAIRWISE among the six medicine corridors ===");
const pairs: { a: string; b: string; v: number }[] = [];
for (let i = 0; i < MED.length; i++)
  for (let j = i + 1; j < MED.length; j++) pairs.push({ a: MED[i].originSlug, b: MED[j].originSlug, v: ov(fp(MED[i]), fp(MED[j])) });
pairs.sort((x, y) => y.v - x.v);
console.log(
  `  ${pairs.length} pairs: min ${pct(pairs[pairs.length - 1].v)} · median ${pct(pairs[Math.floor(pairs.length / 2)].v)} · max ${pct(pairs[0].v)} · over gate ${pairs.filter((p) => p.v > GATE.siblingOverlap).length}`,
);
for (const p of pairs.slice(0, 3)) console.log(`     worst: ${p.a} vs ${p.b} ${pct(p.v)}`);

console.log("\n=== 3. THE REAL TEST — doctor vs nurse, SAME country, same destination ===");
const cross: number[] = [];
for (const m of MED) {
  const n = CORRIDORS.find((x) => x.originSlug === m.originSlug);
  if (!n) continue;
  const v = ov(fp(m), fp(n));
  cross.push(v);
  console.log(`  ${m.originSlug.padEnd(12)} medicine vs nursing  ${pct(v).padStart(4)}  ${v > GATE.siblingOverlap ? "OVER GATE" : "under"}`);
}
cross.sort((a, b) => a - b);
console.log(
  `  min ${pct(cross[0])} · median ${pct(cross[Math.floor(cross.length / 2)])} · max ${pct(cross[cross.length - 1])} · over gate ${cross.filter((v) => v > GATE.siblingOverlap).length}/${cross.length}`,
);
