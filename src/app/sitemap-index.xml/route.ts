import { SITE_URL, numSitemapChunks } from "@/lib/oet-seo/sitemap-urls";

// Manual sitemap INDEX. Next 16's generateSitemaps emits the chunk routes
// (/sitemap/0.xml …) but does NOT auto-emit an index in this version. This
// handler lists every chunk so a single GSC submission of /sitemap-index.xml
// discovers them all.
export const dynamic = "force-dynamic";

export function GET(): Response {
  const now = new Date().toISOString();
  const n = numSitemapChunks();
  const chunks = Array.from(
    { length: n },
    (_, i) => `  <sitemap>\n    <loc>${SITE_URL}/sitemap/${i}.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`,
  );
  // The nationality-first batch also gets its own small file. Those 15 URLs are
  // inside chunk 0 as well, which the protocol allows and which is the point:
  // chunk 0 carries 45,000 URLs and Google re-reads it on its own schedule, so
  // anything newly added to the back of it reads as "no referring sitemaps
  // detected" until that happens. A 15-URL file is read in one pass and can be
  // submitted on its own.
  chunks.push(
    `  <sitemap>\n    <loc>${SITE_URL}/sitemap-nurse-uk.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`,
  );
  const entries = chunks.join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
