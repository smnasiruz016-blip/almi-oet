import { SITE_URL } from "@/lib/oet-seo/sitemap-urls";
import { emittedNurseUkPaths } from "@/lib/oet-seo/nurse-uk-emitted";

// A DEDICATED sitemap for the nationality-first batch — 15 URLs, on their own.
//
// They are already inside /sitemap/0.xml, which the index lists, and in principle
// that is enough. In practice it is not: chunk 0 carries 45,000 URLs, Google
// re-fetches a child sitemap of that size on its own schedule, and until it does
// URL Inspection reports "No referring sitemaps detected" for anything newly
// added to the back of it. On a property where 144,266 URLs already sit in
// discovered-but-not-indexed, waiting for that re-fetch is not a plan.
//
// So the same 15 URLs are also served here, as a file small enough for Google to
// read in one pass and specific enough to submit on its own. A URL appearing in
// two sitemaps is explicitly allowed by the protocol and is not duplication —
// sitemaps are discovery hints, and the canonical still points where it always
// did. Nothing is removed from chunk 0.
//
// Gated, like every other sitemap entry here: `emittedNurseUkPaths()` runs the
// real quality gate, so a page that stopped clearing leaves this file too.
export const dynamic = "force-dynamic";

export function GET(): Response {
  const now = new Date().toISOString();
  const entries = emittedNurseUkPaths()
    .map(
      (p) =>
        `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
