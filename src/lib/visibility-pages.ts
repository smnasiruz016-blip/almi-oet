// AlmiVisibility pages (RR-355, owner: "pages look EXACTLY like the client's site — GitHub + Vercel: the page renders inside the site's
// own layout"). AlmiVisibility publishes each approved page as visibility-pages/<slug>/index.html in this repository (its GitHub
// connection, "folder: visibility-pages"). A Next.js site does not serve such a file at /<slug>, and would show it without its
// layout if it did — so this module reads the file AT BUILD TIME and the route src/app/(visibility)/[slug]/page.tsx renders only its
// content (its <main>) inside AlmiOET's own header, footer, fonts and colours. Nothing is read at request time.
//
// The file is the page AlmiVisibility checked and the owner approved. Its own <style> block (layout only, no colours) and its
// JSON-LD stay; any other script, event handler or javascript: link is taken out — the page shows content, it never runs code.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

export const VISIBILITY_DIR = "visibility-pages";
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type VisibilityPage = { slug: string; title: string; description: string | null; canonical: string | null; noindex: boolean; jsonLd: string[]; main: string };

const decode = (s: string) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const attr = (tag: string, name: string) => new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, "i").exec(tag)?.[1] ?? null;

/** The page's parts from its HTML: title, description, canonical, JSON-LD and the content of <main>, made safe to show. */
export function readVisibilityPage(slug: string, html: string): VisibilityPage | null {
  if (!SLUG.test(slug)) return null;
  const head = /<head\b[^>]*>([\s\S]*?)<\/head>/i.exec(html)?.[1] ?? "";
  const main = /<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(html)?.[1];
  const title = decode(/<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(head)?.[1]?.trim() ?? "");
  if (!main || !title) return null;
  const descTag = /<meta\b[^>]*name\s*=\s*"description"[^>]*>/i.exec(head)?.[0] ?? null;
  const canonTag = /<link\b[^>]*rel\s*=\s*"canonical"[^>]*>/i.exec(head)?.[0] ?? null;
  // RR-378 (owner, 6 Nov 2026): a page AlmiVisibility marks noindex (it needs more answers) stays on the site for visitors, is kept out
  // of search (its metadata says noindex, follow) and is left out of sitemap-pages.xml until a later version of the file drops the mark
  const robotsTag = /<meta\b[^>]*name\s*=\s*"robots"[^>]*>/i.exec(head)?.[0] ?? null;
  const noindex = /\bnoindex\b/i.test(robotsTag ? attr(robotsTag, "content") ?? "" : "");
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => m[1]).filter((j) => { try { JSON.parse(j); return true; } catch { return false; } });
  const safe = main
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<(iframe|object|embed|form)\b[\s\S]*?<\/\1>/gi, "")
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s(href|src)\s*=\s*"\s*javascript:[^"]*"/gi, ' $1="#"')
    .replace(/<p class="stamp">[\s\S]*?<\/p>/gi, "");
  return { slug, title, description: descTag ? decode(attr(descTag, "content") ?? "") || null : null, canonical: canonTag ? attr(canonTag, "href") : null, noindex, jsonLd, main: safe };
}

/** Every published page's slug (a folder with its index.html), in the repository's visibility-pages/ folder. */
export function visibilitySlugs(root = process.cwd()): string[] {
  const dir = join(root, VISIBILITY_DIR);
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((n) => SLUG.test(n) && statSync(join(dir, n)).isDirectory() && existsSync(join(dir, n, "index.html"))).sort();
}

/** The slugs that belong in the sitemap: every published page but one marked noindex. */
export function indexableVisibilitySlugs(root = process.cwd()): string[] {
  return visibilitySlugs(root).filter((slug) => visibilityPage(slug, root)?.noindex === false);
}

export function visibilityPage(slug: string, root = process.cwd()): VisibilityPage | null {
  if (!visibilitySlugs(root).includes(slug)) return null;
  return readVisibilityPage(slug, readFileSync(join(root, VISIBILITY_DIR, slug, "index.html"), "utf8"));
}
