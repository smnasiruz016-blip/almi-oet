// The internal-linking spine.
//
// Every helper here answers the same question from a different direction: given
// this page, which OTHER pages that actually exist should it link to? "Actually
// exist" is the whole point — the old surface linked freely to pages the gate
// now refuses to emit, and a hub full of 404s is worse than no hub. Nothing in
// here invents a URL: a link is offered only if the target is in the emitted or
// noindex set.

import { emitted } from "./compose";
import { orgBySlug, professionSlugToLabel, PROFESSION_LIST } from "./data";
import { countrySlug, countryFromSlug } from "./regulators";

/** Renderable = the page is built. Includes the noindex ones: they are real
 *  pages with real content, they simply are not in the sitemap yet, and linking
 *  to them is how a reader (and a crawler following `noindex, follow`) reaches
 *  the material at all. */
export function renderableOrgs(): string[] {
  const e = emitted();
  return [...e.orgs, ...e.noindexOrgs];
}

export function renderableProfessionOrgs(): { professionSlug: string; orgSlug: string }[] {
  const e = emitted();
  return [...e.professionOrgs, ...e.noindexProfessionOrgs];
}

export function isOrgRenderable(slug: string): boolean {
  return renderableOrgs().includes(slug);
}

export function isProfessionOrgRenderable(professionSlug: string, orgSlug: string): boolean {
  return renderableProfessionOrgs().some(
    (x) => x.professionSlug === professionSlug && x.orgSlug === orgSlug,
  );
}

/** Countries that have a hub — i.e. at least one renderable organisation page. */
export function hubCountries(): { country: string; slug: string }[] {
  const seen = new Map<string, string>();
  for (const s of renderableOrgs()) {
    const c = orgBySlug(s)?.country;
    if (c) seen.set(countrySlug(c), c);
  }
  return [...seen].map(([slug, country]) => ({ country, slug })).sort((a, b) => a.country.localeCompare(b.country));
}

export function isHubCountry(slug: string): boolean {
  return hubCountries().some((c) => c.slug === slug);
}

export function countryNameForSlug(slug: string): string | null {
  return countryFromSlug(slug) ?? hubCountries().find((c) => c.slug === slug)?.country ?? null;
}

/** The organisation pages that belong to one country hub. */
export function orgsInCountry(countrySlugValue: string): string[] {
  return renderableOrgs().filter((s) => {
    const c = orgBySlug(s)?.country;
    return !!c && countrySlug(c) === countrySlugValue;
  });
}

/** The organisation pages a profession hub should link to. */
export function orgsForProfessionRenderable(professionSlug: string): string[] {
  return renderableProfessionOrgs()
    .filter((x) => x.professionSlug === professionSlug)
    .map((x) => x.orgSlug);
}

/** The profession pages an organisation page should link to — only where the
 *  profession×org page itself was built. */
export function professionsForOrgRenderable(orgSlug: string): { slug: string; label: string }[] {
  return renderableProfessionOrgs()
    .filter((x) => x.orgSlug === orgSlug)
    .map((x) => ({ slug: x.professionSlug, label: professionSlugToLabel(x.professionSlug) ?? x.professionSlug }));
}

/** Professions that have a hub. All twelve always do — they are the one page
 *  type whose substance does not depend on the enrichment dataset. */
export function hubProfessions(): { slug: string; label: string }[] {
  return PROFESSION_LIST.map((p) => ({ slug: p.slug, label: p.label }));
}

export function isHubProfession(slug: string): boolean {
  return PROFESSION_LIST.some((p) => p.slug === slug);
}

export function countryHubHrefForOrg(orgSlug: string): { href: string; label: string } | null {
  const c = orgBySlug(orgSlug)?.country;
  if (!c) return null;
  const s = countrySlug(c);
  return isHubCountry(s) ? { href: `/${s}`, label: c } : null;
}
