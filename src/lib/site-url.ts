// The site's own origin, for the sitemaps it still serves (moved here from the removed src/lib/oet-seo/sitemap-urls.ts, RR-276).
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ?? "https://almioet.almiworld.com";
