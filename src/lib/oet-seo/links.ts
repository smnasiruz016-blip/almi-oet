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
import { matrixCountries } from "./compose-matrix";

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

/** Countries that have a hub.
 *
 *  This is `emitted().countries` and nothing else. It used to be derived here,
 *  independently — "any country with a renderable organisation page" — which was
 *  fine while the hub was a thin list of those very pages. Once the hub became a
 *  composed page that goes through the gate, the two definitions disagreed: the
 *  sitemap listed the four hubs the gate emitted while the build rendered the
 *  four this function derived, and only two were in both. Two sitemapped 404s
 *  and two orphans. One source of truth, so they cannot drift again. */
export function hubCountries(): { country: string; slug: string }[] {
  return emitted()
    .countries.map((slug) => ({
      slug,
      country: matrixCountries().find((c) => c.slug === slug)?.country ?? countryFromSlug(slug) ?? slug,
    }))
    .sort((a, b) => a.country.localeCompare(b.country));
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

// ── page types v2 ───────────────────────────────────────────────────────────

/** Reserved second segments. `/{profession}/by-country` and the ranking share the
 *  two-segment shape with `/{profession}/{org}` and `/{country}/{profession}`, so
 *  the resolver has to know these are page names and not organisation slugs. */
export const BY_COUNTRY_SEGMENT = "by-country";
export const RANKING_SEGMENT = "where-oet-is-easiest";

export function renderableCountryProfessions(): { countrySlug: string; professionSlug: string }[] {
  const e = emitted();
  return [...e.countryProfessions, ...e.noindexCountryProfessions];
}

export function isCountryProfessionRenderable(countrySlugValue: string, professionSlug: string): boolean {
  return renderableCountryProfessions().some(
    (x) => x.countrySlug === countrySlugValue && x.professionSlug === professionSlug,
  );
}

export function isByCountryRenderable(professionSlug: string): boolean {
  return emitted().professionByCountry.includes(professionSlug);
}

export function isRankingRenderable(professionSlug: string): boolean {
  return emitted().professionRankings.includes(professionSlug);
}

/** What the two-segment route is looking at. Resolved in one place so the page,
 *  its metadata and `generateStaticParams` cannot disagree about it — the shapes
 *  do not overlap in practice (no profession is named after a country, and no
 *  organisation slug is "by-country"), but deciding it twice is how they start to. */
export type TwoSegmentKind =
  | { kind: "profession-org"; professionSlug: string; orgSlug: string }
  | { kind: "country-profession"; countrySlug: string; professionSlug: string }
  | { kind: "by-country"; professionSlug: string }
  | { kind: "ranking"; professionSlug: string }
  | { kind: "none" };

export function resolveTwoSegment(first: string, second: string): TwoSegmentKind {
  if (isHubProfession(first)) {
    if (second === BY_COUNTRY_SEGMENT && isByCountryRenderable(first)) {
      return { kind: "by-country", professionSlug: first };
    }
    if (second === RANKING_SEGMENT && isRankingRenderable(first)) {
      return { kind: "ranking", professionSlug: first };
    }
    if (isProfessionOrgRenderable(first, second)) {
      return { kind: "profession-org", professionSlug: first, orgSlug: second };
    }
  }
  if (isCountryProfessionRenderable(first, second)) {
    return { kind: "country-profession", countrySlug: first, professionSlug: second };
  }
  return { kind: "none" };
}

/** Every two-segment URL the build should produce. */
export function allTwoSegmentParams(): { slug: string; sub: string }[] {
  const e = emitted();
  return [
    ...renderableProfessionOrgs().map((x) => ({ slug: x.professionSlug, sub: x.orgSlug })),
    ...renderableCountryProfessions().map((x) => ({ slug: x.countrySlug, sub: x.professionSlug })),
    ...e.professionByCountry.map((p) => ({ slug: p, sub: BY_COUNTRY_SEGMENT })),
    ...e.professionRankings.map((p) => ({ slug: p, sub: RANKING_SEGMENT })),
  ];
}

/** The country×profession pages that belong to one country hub, and to one
 *  profession page — the cross-links the spec asks for, offered only where the
 *  target was actually emitted. */
export function countryProfessionsForCountry(countrySlugValue: string): string[] {
  return renderableCountryProfessions()
    .filter((x) => x.countrySlug === countrySlugValue)
    .map((x) => x.professionSlug);
}

export function countryProfessionsForProfession(professionSlug: string): string[] {
  return renderableCountryProfessions()
    .filter((x) => x.professionSlug === professionSlug)
    .map((x) => x.countrySlug);
}
