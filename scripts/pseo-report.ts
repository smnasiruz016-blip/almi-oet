// The pSEO build report — design v2 §7.3, "no silent caps".
//
// Runs the real composer and the real gate over the real data and prints what
// the build would emit: per-type counts, every skip with its reason, how many of
// the 610 organisations cleared both the quality gate and the currency gate, and
// two sample pages rendered as text so a human can read what actually ships.
//
//   npx tsx scripts/pseo-report.ts            # counts + reasons
//   npx tsx scripts/pseo-report.ts --samples  # + full sample page bodies

import { ORGANISATIONS, ROLE_ORG_PAIRS, PROFESSION_LIST } from "../src/lib/oet-seo/data";
import { OET_ORIGIN_SLUGS } from "../src/lib/oet-seo/origins";
import { allUrls, numSitemapChunks } from "../src/lib/oet-seo/sitemap-urls";
import {
  emitted,
  composeOrgPage,
  composeProfessionOrgPage,
  GATE,
  type Composed,
} from "../src/lib/oet-seo/compose";
import { REGULATORS, notCurrentReason } from "../src/lib/oet-seo/regulators";

const showSamples = process.argv.includes("--samples");

function tally(reasons: string[]): string {
  return reasons.map((r) => r.replace(/\d+/g, "N")).join(" + ");
}

const e = emitted();

console.log("=".repeat(72));
console.log("AlmiOET pSEO — build report");
console.log("=".repeat(72));
console.log(`gate thresholds: uniqueWords >= ${GATE.uniqueWords}, facts >= ${GATE.facts}, siblingOverlap <= ${GATE.siblingOverlap * 100}%`);
console.log(`base organisations: ${ORGANISATIONS.length}   enriched regulators: ${REGULATORS.length}`);
console.log("");

console.log("EMITTED (indexable + in sitemap)");
console.log(`  /{profession}                     ${e.professions.length}`);
console.log(`  /register/{org}                   ${e.orgs.length}`);
console.log(`  /{profession}/{org}               ${e.professionOrgs.length}`);
console.log(`  /{country}                        ${e.countries.length}`);
console.log(`  /{country}/{profession}           ${e.countryProfessions.length}   (v2 type 1)`);
console.log(`  /{profession}/by-country          ${e.professionByCountry.length}   (v2 type 2)`);
console.log(`  /{profession}/where-oet-is-easiest ${e.professionRankings.length}   (v2 type 3)`);
console.log(`  /register                         1`);
console.log(`  /                                 1`);
const indexable =
  e.professions.length +
  e.orgs.length +
  e.professionOrgs.length +
  e.countries.length +
  e.countryProfessions.length +
  e.professionByCountry.length +
  e.professionRankings.length +
  2;
console.log(`  TOTAL indexable                   ${indexable}`);
console.log("");

console.log("RENDERED BUT NOINDEX (rich, not current — out of the sitemap)");
console.log(`  /register/{org}          ${e.noindexOrgs.length}`);
console.log(`  /{profession}/{org}      ${e.noindexProfessionOrgs.length}`);
console.log(`  /{country}/{profession}  ${e.noindexCountryProfessions.length}`);
console.log(
  `  TOTAL noindex            ${e.noindexOrgs.length + e.noindexProfessionOrgs.length + e.noindexCountryProfessions.length}`,
);
for (const s of e.noindexOrgs) console.log(`    - /register/${s}  (${notCurrentReason(s)})`);
console.log("");

// Page types v2, in detail: which pages survived and what the gate cut them for.
console.log("PAGE TYPES v2 — what the gate emitted");
for (const x of e.countryProfessions) console.log(`    /${x.countrySlug}/${x.professionSlug}`);
for (const p of e.professionByCountry) console.log(`    /${p}/by-country`);
for (const p of e.professionRankings) console.log(`    /${p}/where-oet-is-easiest`);
for (const c of e.countries) console.log(`    /${c}`);
console.log("");

console.log("SKIPPED, by reason");
const byReason = new Map<string, number>();
for (const s of e.skipped) {
  const k = `${s.type}: ${tally(s.reasons)}`;
  byReason.set(k, (byReason.get(k) ?? 0) + 1);
}
for (const [k, n] of [...byReason].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(5)}  ${k}`);
}
console.log(`  TOTAL skipped          ${e.skipped.length}`);
console.log("");

// How many of the 610 cleared the quality gate at all, independent of currency.
// Read off emitted() rather than re-running the gate here: a second copy of the
// gate is a second gate, and it would drift from the one that actually ships.
const gatePassers = e.orgs.length + e.noindexOrgs.length;
console.log(`of ${ORGANISATIONS.length} organisations: ${gatePassers} clear the quality gate; ${e.orgs.length} clear gate AND currency`);
console.log("");

// ── the pruned surface, and where it goes ───────────────────────────────────
const L = OET_ORIGIN_SLUGS.length;
const prunedLeaves = ROLE_ORG_PAIRS.length * L;
const prunedHubs = PROFESSION_LIST.length * L;
console.log("PRUNED (301 via middleware, never 404)");
console.log(`  /{profession}/from-{origin}/{org}   ${prunedLeaves.toLocaleString('en-US')}`);
console.log(`  /{profession}/from-{origin}         ${prunedHubs.toLocaleString('en-US')}`);
console.log(`  TOTAL 301 targets covered           ${(prunedLeaves + prunedHubs).toLocaleString('en-US')}`);
console.log(`  origins dropped as a URL axis       ${L}`);
console.log("");

console.log("SITEMAP");
console.log(`  URLs submitted        ${allUrls().length}`);
console.log(`  child sitemaps        ${numSitemapChunks()} (cap ${(45_000).toLocaleString('en-US')}/child)`);
console.log(`  lastmod source        per-entity lastVerified, not build time`);
console.log("");

function describe(label: string, c: Composed | null) {
  if (!c) {
    console.log(`${label}: NOT COMPOSABLE`);
    return;
  }
  console.log("-".repeat(72));
  console.log(`${label}`);
  console.log(`  words ${c.words} · uniqueWords ${c.uniqueWords} · facts ${c.facts} [${c.factList.join(", ")}]`);
  if (showSamples) {
    for (const s of c.sections) {
      console.log(`\n  ## ${s.heading}`);
      for (const p of s.paras) console.log(`  ${p}`);
    }
  }
}

console.log("SAMPLES");
const sampleOrg = e.orgs[0] ?? e.noindexOrgs[0];
if (sampleOrg) describe(`/register/${sampleOrg}`, composeOrgPage(sampleOrg));
const sp = e.professionOrgs[0] ?? e.noindexProfessionOrgs[0];
if (sp) {
  describe(`/${sp.professionSlug}/${sp.orgSlug}`, composeProfessionOrgPage(sp.professionSlug, sp.orgSlug));
}
console.log("");
