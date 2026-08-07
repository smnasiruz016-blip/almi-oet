import { SITE_URL, numSitemapChunks } from "@/lib/oet-seo/sitemap-urls";

// Manual sitemap INDEX. Next 16's generateSitemaps emits the chunk routes
// (/sitemap/0.xml …) but does NOT auto-emit an index in this version. This
// handler lists every chunk so a single GSC submission of /sitemap-index.xml
// discovers them all.
export const dynamic = "force-dynamic";

export function GET(): Response {
  const now = new Date().toISOString();
  const n = numSitemapChunks();
  // DELIBERATELY lists only the chunks. /sitemap-nurse-uk.xml is a standalone
  // file, submitted to Search Console on its own so the nationality-first batch
  // can be tracked in isolation from the old surface. Listing it here would fold
  // it back into the index this file represents, which is the opposite of the
  // point — a sitemap submitted directly gets its own coverage row.
  const entries = Array.from(
    { length: n },
    (_, i) => `  <sitemap>\n    <loc>${SITE_URL}/sitemap/${i}.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
