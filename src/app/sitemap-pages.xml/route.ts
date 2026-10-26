import { SITE_URL } from "@/lib/site-url";

// The site's own public pages, as their own child sitemap, listed in /sitemap-index.xml beside the guides.
// Only a page that answers 200 to a visitor with no session, and is indexable, belongs here. Today that is the
// home page alone: every practice tool (/practice, /practice/mock, /progress, /account) sits behind
// requireUser() in src/app/(app)/layout.tsx and redirects a visitor to /login; auth, admin and api are never listed.
const SITE_PAGE_PATHS = ["/"] as const;

export const dynamic = "force-static";

export function GET(): Response {
  const urls = SITE_PAGE_PATHS.map(
    (path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
