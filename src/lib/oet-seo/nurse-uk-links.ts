// Internal linking for the nationality-first batch.
//
// The 15 pages shipped as orphans — nothing on the site linked to them, and GSC
// reported "No referring page" for every one. That is the same defect that left
// 99.7% of the old 240k surface unindexed, arriving on a page type that
// otherwise measures better than anything else here.
//
// Two links fix it, and the shape of them matters:
//
//   the HUB  /nurse links to all 15, and every one of the 15 links back to it
//            through its breadcrumb. One page reachable from the site, fifteen
//            reachable from that.
//   SIBLINGS each page links to four others, chosen by a fixed rotation rather
//            than by editorial taste.
//
// WHY A ROTATION. Offsets {1, 2, 4, 7} over 15 pages each form a permutation, so
// every page emits exactly four sibling links AND receives exactly four. No page
// is a dead end and no page is orphaned by an editor's judgement about which
// countries are "related". Regional grouping would have been prettier and would
// have left the outliers — Egypt, the Philippines — with almost no inbound links,
// which is precisely the failure being fixed.
//
// These links live in the renderer's `related` block, OUTSIDE `sections`, so they
// are not measured by the quality gate. That is deliberate: navigation is not
// content, and a page that needed its own nav to clear 350 words would not
// deserve to clear.

import { NURSE_UK_PAGES, type NurseUkPageData } from "./nurse-uk-compose";
import { emittedNurseUkPaths } from "./nurse-uk-emitted";

export const NURSE_HUB_PATH = "/nurse";

/** Offsets chosen so each is coprime with 15 or otherwise permutes it: every
 *  page gets exactly this many inbound sibling links. */
const OFFSETS = [1, 2, 4, 7];

/** The pages that actually cleared the gate, in file order. A page held back
 *  would not be linked to — linking to a URL we chose not to publish is how a
 *  crawl budget gets spent on a 404. */
export function linkableNurseUkPages(): NurseUkPageData[] {
  const live = new Set(emittedNurseUkPaths());
  return NURSE_UK_PAGES.filter((p) => live.has(p.slug));
}

export type SiblingLink = { label: string; href: string; blurb: string };

export function siblingsFor(nationality: string): SiblingLink[] {
  const pages = linkableNurseUkPages();
  const i = pages.findIndex((p) => p.nationality_adj === nationality);
  if (i < 0) return [];
  const seen = new Set<string>([nationality]);
  const out: SiblingLink[] = [];
  for (const off of OFFSETS) {
    const p = pages[(i + off) % pages.length];
    if (!p || seen.has(p.nationality_adj)) continue;
    seen.add(p.nationality_adj);
    out.push({
      label: `${cap(p.nationality_adj)} nurses to the UK`,
      href: p.slug,
      // The blurb names what actually differs on that page rather than
      // repeating its title — the cost is in a different currency and the tests
      // are sat in different cities, which is the whole reason it is a separate
      // page.
      blurb: `Costs in ${p.origin}'s own currency, ${p.origin} test centres, and the ${p.origin} route to the NMC.`,
    });
  }
  return out;
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
