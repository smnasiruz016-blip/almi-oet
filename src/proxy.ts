import { NextResponse, type NextRequest } from "next/server";
import { GONE_HTML } from "@/lib/gone-page";

// RR-276 (owner GREEN, 17 Oct 2026: "just forget and delet old pages"). The OLD programmatic SEO pages are gone for
// good: /<profession>…, /register/… and their sitemaps answer 410 Gone — never a redirect, never a 404. Their code
// and data are removed; this file is all that is left of them. Every product route, /guides and its pages, robots.txt,
// the sitemap index and sitemap-guides.xml are untouched: the matcher below names ONLY the old shapes.

/** The twelve profession landings of the old page system (they matched src/lib/oet/professions.ts slugs). */
export const OLD_PROFESSION_SLUGS = Object.freeze([
  "nursing", "medicine", "dentistry", "dietetics", "occupational-therapy", "optometry",
  "pharmacy", "physiotherapy", "podiatry", "radiography", "speech-pathology", "veterinary-science",
]);
/** The old sitemaps: the /sitemap/<n>.xml chunks and two retired ones search engines still hold. */
export const OLD_SITEMAP_FILES = Object.freeze(["/sitemap-nationality-nurse.xml", "/sitemap-nurse-uk.xml"]);

/** Whether a path belonged to the old page system — decided here, exactly; anything else passes through. */
export function isGone(pathname: string): boolean {
  const p = pathname.replace(/\/+$/, "") || "/";
  const first = p.split("/")[1] ?? "";
  if ((OLD_PROFESSION_SLUGS as readonly string[]).includes(first)) return true;
  if (p === "/register" || p.startsWith("/register/")) return true;
  if (p.startsWith("/sitemap/")) return true;
  return (OLD_SITEMAP_FILES as readonly string[]).includes(p);
}

export function proxy(request: NextRequest) {
  if (!isGone(request.nextUrl.pathname)) return NextResponse.next();
  return new NextResponse(GONE_HTML, {
    status: 410,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=3600, s-maxage=86400", "x-robots-tag": "noindex" },
  });
}

export const config = {
  matcher: [
    "/nursing/:path*", "/medicine/:path*", "/dentistry/:path*", "/dietetics/:path*", "/occupational-therapy/:path*", "/optometry/:path*",
    "/pharmacy/:path*", "/physiotherapy/:path*", "/podiatry/:path*", "/radiography/:path*", "/speech-pathology/:path*", "/veterinary-science/:path*",
    "/register/:path*", "/sitemap/:path*", "/sitemap-nationality-nurse.xml", "/sitemap-nurse-uk.xml",
  ],
};
