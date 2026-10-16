import type { MetadataRoute } from "next";

const SITE_URL = "https://almioet.almiworld.com";

// The AI-search crawlers are named and allowed (AlmiVisibility AI-Search Page Law); every other
// crawler keeps the rule it had.
const AI_SEARCH_BOTS = ["OAI-SearchBot", "Googlebot", "Bingbot", "PerplexityBot", "Claude-SearchBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, { userAgent: AI_SEARCH_BOTS, allow: "/" }],
    sitemap: `${SITE_URL}/sitemap-index.xml`,
  };
}
