// The sitemap: gate-passers AND currency-passers only.
//
// It used to carry ~240,000 URLs, of which 237,413 were profession×origin×org
// leaves that differed only by a label. Submitting them told Google to crawl a
// quarter of a million pages that said the same thing, and Google declined —
// most of the surface sat in discovered-not-indexed. What is listed here now is
// only what the quality gate emitted and the currency gate cleared: a page that
// is rich but awaiting re-confirmation renders with `noindex` and is deliberately
// absent from this file, because asking for a crawl of a fact we have not
// re-read is asking to be trusted for something we cannot yet promise.
//
// `<lastmod>` is the date the FACTS were verified, not the date of the build. A
// build-time lastmod on unchanged facts is a lie told at scale.

import type { MetadataRoute } from "next";
import { emitted } from "./compose";
import { regulatorBySlug, verifiedOn } from "./regulators";
import { cellFor, cellVerifiedOn } from "./compose-matrix";

export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ?? "https://almioet.almiworld.com";

/** Sitemaps.org caps a child sitemap at 50,000 URLs. */
export const CHUNK_SIZE = 45_000;

function asDate(v: string | undefined): Date | undefined {
  if (!v) return undefined;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

function lastmodFor(orgSlug: string): Date | undefined {
  return asDate(verifiedOn(regulatorBySlug(orgSlug)) ?? undefined);
}

let _urls: MetadataRoute.Sitemap | null = null;

/** Every indexable URL, in a stable order. Small enough to materialise: the
 *  count is bounded by the amount of real enriched data, which is the point. */
export function allUrls(): MetadataRoute.Sitemap {
  if (_urls) return _urls;
  const e = emitted();
  const out: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/register`, changeFrequency: "monthly", priority: 0.7 },
  ];
  for (const p of e.professions) {
    out.push({ url: `${SITE_URL}/${p}`, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const c of e.countries) {
    out.push({ url: `${SITE_URL}/${c}`, changeFrequency: "monthly", priority: 0.7 });
  }
  for (const s of e.orgs) {
    out.push({
      url: `${SITE_URL}/register/${s}`,
      lastModified: lastmodFor(s),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const x of e.professionOrgs) {
    out.push({
      url: `${SITE_URL}/${x.professionSlug}/${x.orgSlug}`,
      lastModified: lastmodFor(x.orgSlug),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }
  // Page types v2. `lastmod` is the date the underlying facts were verified —
  // for an aggregate page that is the most recent of its rows, falling back to
  // the date OET's own list was fetched. Never the build time.
  for (const x of e.countryProfessions) {
    const cell = cellFor(x.countrySlug, x.professionSlug);
    out.push({
      url: `${SITE_URL}/${x.countrySlug}/${x.professionSlug}`,
      lastModified: cell ? asDate(cellVerifiedOn(cell.bodies)) : undefined,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const p of e.professionByCountry) {
    out.push({ url: `${SITE_URL}/${p}/by-country`, changeFrequency: "monthly", priority: 0.7 });
  }
  for (const p of e.professionRankings) {
    out.push({
      url: `${SITE_URL}/${p}/where-oet-is-easiest`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  _urls = out;
  return out;
}

export function totalUrlCount(): number {
  return allUrls().length;
}

export function numSitemapChunks(): number {
  return Math.max(1, Math.ceil(totalUrlCount() / CHUNK_SIZE));
}

/** The URLs for one child sitemap. The index is built from numSitemapChunks()
 *  over this same list, so the two can never disagree about how many exist. */
export function urlsForChunk(chunkIndex: number): MetadataRoute.Sitemap {
  const all = allUrls();
  const start = chunkIndex * CHUNK_SIZE;
  return all.slice(start, start + CHUNK_SIZE);
}
