import { SITE_URL } from "@/lib/oet-seo/sitemap-urls";
import { emittedNurseUkPaths } from "@/lib/oet-seo/nurse-uk-emitted";

// A FRESH path for the same 15 URLs.
//
// /sitemap-nurse-uk.xml and /sitemap-index.xml are both already submitted in
// Search Console. Re-submitting a path GSC already holds re-queues it on
// Google's own schedule rather than immediately, so this is a new file at a new
// URL: a path GSC has never seen is fetched and parsed on submission, which is
// the point of submitting it at all.
//
// Same 15 URLs, same gate behind them. Nothing else on the property changes, and
// the existing sitemaps are untouched — this is additive, exactly like the pages
// themselves. A URL may appear in several sitemaps; they are discovery hints,
// not ownership claims, and the canonical still points where it always did.
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
