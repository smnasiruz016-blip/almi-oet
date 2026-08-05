// One root-level dynamic segment serves two page types, because Next allows
// only one at this level: /{profession} (twelve) and /{country} (the hubs).
// The slug decides which, and anything that is neither 404s rather than
// rendering an empty shell.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfessionLanding, buildProfessionMetadata } from "@/components/oet-seo/profession-landing";
import { CountryHub, buildCountryMetadata } from "@/components/oet-seo/country-hub";
import { hubCountries, hubProfessions, isHubCountry, isHubProfession } from "@/lib/oet-seo/links";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = false; // only what the gate emitted exists; everything else 404s

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return [
    ...hubProfessions().map((p) => ({ slug: p.slug })),
    ...hubCountries().map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  if (isHubProfession(slug)) return buildProfessionMetadata(slug);
  if (isHubCountry(slug)) return buildCountryMetadata(slug);
  return { robots: { index: false, follow: true } };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  if (isHubProfession(slug)) return <ProfessionLanding professionSlug={slug} />;
  if (isHubCountry(slug)) return <CountryHub slug={slug} />;
  notFound();
}
