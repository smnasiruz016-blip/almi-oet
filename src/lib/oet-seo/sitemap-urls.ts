import type { MetadataRoute } from "next";
import { PROFESSION_LIST } from "@/lib/oet/professions";
import { OET_ORIGIN_SLUGS } from "./origins";
import { ORGANISATIONS, ROLE_ORG_PAIRS } from "./data";
import { emittedNurseUkPaths } from "./nurse-uk-emitted";
import { NURSE_HUB_PATH } from "./nurse-uk-links";

export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ?? "https://almioet.almiworld.com";
export const CHUNK_SIZE = 45_000;

// Leaf origins = all researched origins (191). L drives the index-math.
const L = OET_ORIGIN_SLUGS.length;

// MEMORY-SAFE: the ~237k profession×origin×org leaves are NEVER materialised as
// one array. Only the small BASE is built + cached; each leaf is computed
// index-mathematically (pairIdx = j / L, originIdx = j % L) against ROLE_ORG_PAIRS.

let _base: MetadataRoute.Sitemap | null = null;
function baseUrls(): MetadataRoute.Sitemap {
  if (_base) return _base;
  const out: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
  ];
  // profession landings
  for (const p of PROFESSION_LIST) {
    out.push({ url: `${SITE_URL}/${p.slug}`, changeFrequency: "monthly", priority: 0.8 });
  }
  // register/[org] — one per recognising organisation
  for (const o of ORGANISATIONS) {
    out.push({ url: `${SITE_URL}/register/${o.slug}`, changeFrequency: "monthly", priority: 0.6 });
  }
  // profession × origin
  for (const p of PROFESSION_LIST) {
    for (const o of OET_ORIGIN_SLUGS) {
      out.push({ url: `${SITE_URL}/${p.slug}/from-${o}`, changeFrequency: "monthly", priority: 0.5 });
    }
  }
  // The nationality-first test batch — ADDED to the existing surface, not
  // replacing any of it. 15 URLs on top of 240,328, so the live sitemap goes to
  // 240,343 and every old URL keeps its entry. The prune that retires the
  // profession×origin×org leaves is a separate decision and is NOT taken here.
  //
  // Gated at build time rather than hard-coded: `emittedNurseUkPaths()` runs the
  // real quality gate over the batch, so a page that stopped clearing would drop
  // out of the sitemap instead of shipping thin.
  out.push({ url: `${SITE_URL}${NURSE_HUB_PATH}`, changeFrequency: "monthly", priority: 0.9 });
  for (const p of emittedNurseUkPaths()) {
    out.push({ url: `${SITE_URL}${p}`, changeFrequency: "monthly", priority: 0.9 });
  }
  _base = out;
  return out;
}

const baseLen = () => baseUrls().length;
const matrixCount = () => ROLE_ORG_PAIRS.length * L; // role-org pair × origin

export function totalUrlCount(): number {
  return baseLen() + matrixCount();
}

export function numSitemapChunks(): number {
  return Math.max(1, Math.ceil(totalUrlCount() / CHUNK_SIZE));
}

/** Build only the URLs for one chunk — index-math, never the full matrix array. */
export function urlsForChunk(chunkIndex: number): MetadataRoute.Sitemap {
  const base = baseUrls();
  const bLen = base.length;
  const total = totalUrlCount();
  const start = chunkIndex * CHUNK_SIZE;
  const end = Math.min(start + CHUNK_SIZE, total);
  const out: MetadataRoute.Sitemap = [];
  for (let i = start; i < end; i++) {
    if (i < bLen) {
      out.push(base[i]);
    } else {
      const j = i - bLen;
      const pair = ROLE_ORG_PAIRS[Math.floor(j / L)];
      const origin = OET_ORIGIN_SLUGS[j % L];
      out.push({
        url: `${SITE_URL}/${pair.professionSlug}/from-${origin}/${pair.orgSlug}`,
        changeFrequency: "monthly",
        priority: 0.35,
      });
    }
  }
  return out;
}
