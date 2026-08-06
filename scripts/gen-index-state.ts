// Writes the indexability snapshot gate G7 checks.
//
//   npx tsx scripts/gen-index-state.ts
//
// WHY THIS EXISTS SEPARATELY FROM emitted.generated.json.
//
// That file answers "does this page exist?", for the redirect middleware, and to
// answer it correctly it UNIONS the indexed pages with the noindexed ones — a
// page held out of the index still renders, and a 301 pointing at it is fine.
// G6 guards that file.
//
// Which means G6 is blind to the thing this file records. When the currency gate
// moved three corridors into the sitemap and then a fourth, emitted.generated.json
// did not change by a single byte: the same ten routes existed before and after.
// A green G6 was never evidence that indexability had held still, and it was
// being read as if it were.
//
// That distinction is worth a gate of its own because it is the one that reaches
// Google. A page silently dropping out of the sitemap loses its traffic; a page
// silently entering it publishes a claim we may not have re-read. Neither shows
// up in a diff of the redirect map, and neither is visible in a build log.
//
// So: every route that HAS an indexed/noindexed distinction is recorded here with
// its state, and G7 fails the build when the computed state disagrees with the
// committed one. The fix is always the same — look at what moved, decide whether
// it should have, and commit the new snapshot deliberately.

import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { emitted } from "../src/lib/oet-seo/compose";

export const INDEX_STATE_OUT = join(process.cwd(), "src/lib/oet-seo/index-state.generated.json");

export type IndexState = "sitemapped" | "noindex";

export function buildIndexState(): string {
  const e = emitted();
  const routes: Record<string, IndexState> = {};
  const put = (path: string, state: IndexState) => {
    routes[path] = state;
  };

  for (const slug of e.orgs) put(`/register/${slug}`, "sitemapped");
  for (const slug of e.noindexOrgs) put(`/register/${slug}`, "noindex");

  for (const x of e.professionOrgs) put(`/${x.professionSlug}/${x.orgSlug}`, "sitemapped");
  for (const x of e.noindexProfessionOrgs) put(`/${x.professionSlug}/${x.orgSlug}`, "noindex");

  for (const x of e.countryProfessions) put(`/oet-in/${x.countrySlug}/${x.professionSlug}`, "sitemapped");
  for (const x of e.noindexCountryProfessions) put(`/oet-in/${x.countrySlug}/${x.professionSlug}`, "noindex");

  for (const p of e.journeys) put(p, "sitemapped");
  for (const p of e.noindexJourneys) put(p, "noindex");

  const sorted = Object.fromEntries(Object.entries(routes).sort(([a], [b]) => a.localeCompare(b)));
  const counts = Object.values(sorted).reduce<Record<string, number>>((acc, v) => {
    acc[v] = (acc[v] ?? 0) + 1;
    return acc;
  }, {});

  return `${JSON.stringify(
    {
      _generatedBy: "npx tsx scripts/gen-index-state.ts — do not hand-edit; gate G7 checks it",
      _note:
        "Indexability per route. Distinct from emitted.generated.json, which unions indexed and noindexed pages and therefore cannot see a page move between them.",
      counts,
      routes: sorted,
    },
    null,
    2,
  )}\n`;
}

/** True when the committed snapshot already matches the computed state. */
export function indexStateIsCurrent(): boolean {
  if (!existsSync(INDEX_STATE_OUT)) return false;
  return readFileSync(INDEX_STATE_OUT, "utf8").replace(/\r\n/g, "\n") === buildIndexState();
}

/** What moved, in words, so a failing build says which page changed state rather
 *  than only that something did. A gate that reports "a file is stale" makes the
 *  reader diff it by hand; that is the step where people stop looking. */
export function indexStateDrift(): string[] {
  if (!existsSync(INDEX_STATE_OUT)) return ["no committed snapshot — run: npx tsx scripts/gen-index-state.ts"];
  let before: Record<string, IndexState> = {};
  try {
    before = JSON.parse(readFileSync(INDEX_STATE_OUT, "utf8")).routes ?? {};
  } catch {
    return ["committed snapshot is not readable JSON — regenerate it"];
  }
  const after: Record<string, IndexState> = JSON.parse(buildIndexState()).routes ?? {};
  const out: string[] = [];
  for (const [path, state] of Object.entries(after)) {
    const was = before[path];
    if (!was) out.push(`NEW      ${path} → ${state}`);
    else if (was !== state) out.push(`CHANGED  ${path}: ${was} → ${state}`);
  }
  for (const path of Object.keys(before)) {
    if (!(path in after)) out.push(`GONE     ${path} (was ${before[path]})`);
  }
  return out;
}

if (process.argv[1]?.endsWith("gen-index-state.ts")) {
  const out = buildIndexState();
  writeFileSync(INDEX_STATE_OUT, out);
  const p = JSON.parse(out);
  console.log(
    `[gen-index-state] ${Object.keys(p.routes).length} routes · ${p.counts.sitemapped ?? 0} sitemapped · ${p.counts.noindex ?? 0} noindex`,
  );
}
