/**
 * RR-276 (owner GREEN, 17 Oct 2026): the OLD programmatic SEO pages answer 410 Gone, and nothing else does.
 * The decision is src/proxy.ts's isGone(); the matcher must name every old shape and only those.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { isGone, proxy, config, OLD_PROFESSION_SLUGS } from "@/proxy";
import { PROFESSION_LIST } from "@/lib/oet/professions";
import { GONE_HTML } from "@/lib/gone-page";

const GONE = [
  "/nursing", "/nursing/", "/medicine/from-india", "/pharmacy/from-pakistan/uk-gphc", "/veterinary-science/from-kenya/au-avbc",
  "/register", "/register/uk-nmc", "/sitemap/0.xml", "/sitemap/5.xml", "/sitemap-nationality-nurse.xml", "/sitemap-nurse-uk.xml",
];
const STAYS = [
  "/", "/login", "/signup", "/practice", "/practice/nursing", "/practice/nursing/writing", "/account", "/progress", "/pricing",
  "/admin", "/api/status", "/guides", "/guides/oet-for-doctors", "/guides/assets/almiworld-logo.png", "/robots.txt",
  "/sitemap-index.xml", "/sitemap-guides.xml", "/sitemap-pages.xml", "/forgot-password", "/registration", "/nursingx", "/sitemap.xml",
];

describe("RR-276 · the old SEO pages are gone (410) — and only they", () => {
  it.each(GONE)("%s is gone", (p) => expect(isGone(p)).toBe(true));
  it.each(STAYS)("%s stays", (p) => expect(isGone(p)).toBe(false));

  it("the old profession landings are exactly the twelve profession slugs", () => {
    expect([...OLD_PROFESSION_SLUGS].sort()).toEqual(PROFESSION_LIST.map((p) => p.slug).sort());
  });

  it("the matcher names every old shape, and no product route", () => {
    for (const s of OLD_PROFESSION_SLUGS) expect(config.matcher).toContain(`/${s}/:path*`);
    for (const m of ["/register/:path*", "/sitemap/:path*", "/sitemap-nationality-nurse.xml", "/sitemap-nurse-uk.xml"]) expect(config.matcher).toContain(m);
    expect(config.matcher.some((m) => /^\/(practice|login|signup|account|pricing|guides|api|admin)\b/.test(m))).toBe(false);
  });

  it("an old URL answers 410 with the gone page; any other passes through", async () => {
    const gone = proxy(new NextRequest("https://almioet.almiworld.com/nursing/from-india/uk-nmc"));
    expect(gone.status).toBe(410);
    expect(gone.headers.get("x-robots-tag")).toBe("noindex");
    const body = await gone.text();
    expect(body).toBe(GONE_HTML);
    expect(body).toContain('href="https://almioet.almiworld.com/guides"');
    expect(body).toContain('href="https://almioet.almiworld.com/"');
    expect(body).toMatch(/<header[\s\S]*<\/header>[\s\S]*<footer[\s\S]*<\/footer>/);
    const pass = proxy(new NextRequest("https://almioet.almiworld.com/practice/nursing"));
    expect(pass.status).toBe(200);
    expect(pass.headers.get("x-middleware-next")).toBe("1");
  });

  it("the old page system's code is gone from the build", () => {
    for (const f of ["src/app/[profession]", "src/app/register", "src/components/oet-seo", "src/lib/oet-seo", "src/app/sitemap.ts"]) {
      expect(existsSync(join(process.cwd(), f)), f).toBe(false);
    }
    const index = readFileSync(join(process.cwd(), "src/app/sitemap-index.xml/route.ts"), "utf8");
    expect(index).not.toMatch(/\/sitemap\/\$\{|numSitemapChunks/);
    expect(index).toMatch(/sitemap-guides\.xml/);
  });
});
