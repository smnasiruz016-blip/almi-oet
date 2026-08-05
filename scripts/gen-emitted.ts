// Writes the emitted-page lookup the redirect middleware reads.
//
// Middleware cannot afford to run the composer: computing the emitted set means
// composing 610 organisation pages and 1,243 profession×organisation pages, and
// on a cold start that is ~450ms added to a request that only needs to answer
// "does the page I am about to 301 to exist?". So the answer is precomputed
// here and committed. Gate G6 fails the build if this file drifts from what the
// gate actually emits, because a stale map means 301s into 404s — which is
// worse for the pruned URLs than leaving them alone.
//
//   npx tsx scripts/gen-emitted.ts

import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { emitted } from "../src/lib/oet-seo/compose";

export const OUT = join(process.cwd(), "src/lib/oet-seo/emitted.generated.json");

export function build(): string {
  const e = emitted();
  const payload = {
    _generatedBy: "npx tsx scripts/gen-emitted.ts — do not hand-edit; gate G6 checks it",
    orgs: [...e.orgs, ...e.noindexOrgs].sort(),
    professionOrgs: [...e.professionOrgs, ...e.noindexProfessionOrgs]
      .map((x) => `${x.professionSlug}/${x.orgSlug}`)
      .sort(),
    professions: [...e.professions].sort(),
    countries: [...e.countries].sort(),
    // Page types v2 — recorded here for the same reason as the rest: G6 fails the
    // build when this file drifts from what the gate emits, so a page type that
    // is not listed is a page type the redirect map cannot see.
    countryProfessions: [...e.countryProfessions, ...e.noindexCountryProfessions]
      .map((x) => `${x.countrySlug}/${x.professionSlug}`)
      .sort(),
    professionByCountry: [...e.professionByCountry].sort(),
    professionRankings: [...e.professionRankings].sort(),
  };
  return `${JSON.stringify(payload, null, 2)}\n`;
}

/** True when the committed file already matches what the gate emits. */
export function isCurrent(): boolean {
  if (!existsSync(OUT)) return false;
  return readFileSync(OUT, "utf8").replace(/\r\n/g, "\n") === build();
}

if (process.argv[1]?.endsWith("gen-emitted.ts")) {
  const out = build();
  writeFileSync(OUT, out);
  const p = JSON.parse(out);
  console.log(
    `[gen-emitted] ${p.orgs.length} org pages · ${p.professionOrgs.length} profession×org pages · ${p.countries.length} country hubs · ${p.professions.length} profession hubs · ${p.countryProfessions.length} country×profession · ${p.professionByCountry.length} by-country · ${p.professionRankings.length} rankings`,
  );
}
