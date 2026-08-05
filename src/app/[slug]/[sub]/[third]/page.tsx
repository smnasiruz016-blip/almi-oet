// /{profession}/{originCountry}/{destinationCountry} — the corridor journey.
// e.g. /nursing/pakistan/united-kingdom
//
// Three segments, and it deliberately does NOT reuse the pruned origin shape
// /{profession}/from-{origin}/{org}. That one the middleware 301s on the literal
// "from-" prefix, so a corridor wearing it would be redirected away before this
// route could serve it. Bare country slugs keep the live surface and the pruned
// one apart, and the middleware never sees these paths.
//
// Only corridors the gate emitted (or held at noindex) are built; everything else
// 404s, which for a page type the gate refused is the correct outcome rather than
// something to route around.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyPage, buildJourneyMetadata } from "@/components/oet-seo/journey-page";
import { allJourneyParams, journeyFor } from "@/lib/oet-seo/links";

export const revalidate = false; // render-once, cache until redeploy — static SEO data
export const dynamicParams = false;

type Params = Promise<{ slug: string; sub: string; third: string }>;

export function generateStaticParams() {
  return allJourneyParams();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, sub, third } = await params;
  return buildJourneyMetadata({ occupationSlug: slug, originSlug: sub, destinationSlug: third });
}

export default async function Page({ params }: { params: Params }) {
  const { slug, sub, third } = await params;
  if (!journeyFor(slug, sub, third)) notFound();
  return <JourneyPage occupationSlug={slug} originSlug={sub} destinationSlug={third} />;
}
