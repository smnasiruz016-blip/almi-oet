import type { MetadataRoute } from "next";

const SITE_URL = "https://almioet.almiworld.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap-index.xml`,
  };
}
