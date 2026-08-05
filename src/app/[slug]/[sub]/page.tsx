// The two-segment surface. Next allows exactly one dynamic segment at this
// level, so four page types share it and the pair of slugs decides which:
//
//   /{profession}/{organization}        one profession at one body
//   /{country}/{profession}             TYPE 1 — every body for that pairing
//   /{profession}/by-country            TYPE 2 — the global comparison
//   /{profession}/where-oet-is-easiest  TYPE 3 — the ranking
//
// The shapes do not collide in the real data (no profession is named after a
// country, no organisation slug is "by-country"), but they are resolved in ONE
// place rather than re-tested here and again in generateMetadata, because two
// copies of that reasoning is how a page starts rendering under a title meant
// for a different page. Anything the gate did not emit 404s.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProfessionOrgPage,
  buildProfessionOrgMetadata,
} from "@/components/oet-seo/profession-org-page";
import {
  ByCountryPage,
  CountryProfessionPage,
  RankingPage,
  buildByCountryMetadata,
  buildCountryProfessionMetadata,
  buildRankingMetadata,
} from "@/components/oet-seo/matrix-pages";
import { allTwoSegmentParams, resolveTwoSegment } from "@/lib/oet-seo/links";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = false;

type Params = Promise<{ slug: string; sub: string }>;

export function generateStaticParams() {
  return allTwoSegmentParams();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, sub } = await params;
  const r = resolveTwoSegment(slug, sub);
  switch (r.kind) {
    case "profession-org":
      return buildProfessionOrgMetadata(r.professionSlug, r.orgSlug);
    case "country-profession":
      return buildCountryProfessionMetadata(r.countrySlug, r.professionSlug);
    case "by-country":
      return buildByCountryMetadata(r.professionSlug);
    case "ranking":
      return buildRankingMetadata(r.professionSlug);
    default:
      return { robots: { index: false, follow: true } };
  }
}

export default async function Page({ params }: { params: Params }) {
  const { slug, sub } = await params;
  const r = resolveTwoSegment(slug, sub);
  switch (r.kind) {
    case "profession-org":
      return <ProfessionOrgPage professionSlug={r.professionSlug} orgSlug={r.orgSlug} />;
    case "country-profession":
      return <CountryProfessionPage countrySlug={r.countrySlug} professionSlug={r.professionSlug} />;
    case "by-country":
      return <ByCountryPage professionSlug={r.professionSlug} />;
    case "ranking":
      return <RankingPage professionSlug={r.professionSlug} />;
    default:
      notFound();
  }
}
