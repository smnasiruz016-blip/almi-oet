import { SITE_URL } from "@/lib/oet-seo/sitemap-urls";
import { GUIDE_SLUGS, GUIDES_PATH } from "@/lib/oet-guides/guides";

// The published OET guides, as their own child sitemap, listed in /sitemap-index.xml. Kept apart
// from the chunked sitemaps so no existing URL moves between chunks.
export const dynamic = "force-static";

export function GET(): Response {
  // The guides' own page (/guides, RR-273) first, then each guide.
  const urls = [GUIDES_PATH, ...GUIDE_SLUGS.map((slug) => `${GUIDES_PATH}/${slug}`)].map(
    (path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
