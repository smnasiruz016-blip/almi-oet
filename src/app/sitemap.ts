import type { MetadataRoute } from "next";

// Minimal static sitemap for Phase 0 — the public marketing + auth surface. The
// programmatic OET SEO surface (professions × countries × regulators, chunked)
// is built in a later phase and will replace this with a sitemap index.
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://almioet.almiworld.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/pricing", "/login", "/signup"];
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
