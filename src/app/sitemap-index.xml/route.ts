import { SITE_URL } from "@/lib/site-url";

// The sitemap INDEX that robots.txt names. RR-276 (17 Oct 2026): the old SEO pages and their /sitemap/<n>.xml chunks
// are gone (410, src/proxy.ts); the index lists the published OET guides' own child sitemap (src/app/sitemap-guides.xml)
// and the site's own public pages (src/app/sitemap-pages.xml: the home page), and nothing else.
export const dynamic = "force-dynamic";

const CHILD_SITEMAPS = ["/sitemap-pages.xml", "/sitemap-guides.xml"] as const;

export function GET(): Response {
  const now = new Date().toISOString();
  const entries = CHILD_SITEMAPS.map(
    (path) => `  <sitemap>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
