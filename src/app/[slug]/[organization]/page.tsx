// /{profession}/{organization} — replaces /{profession}/from-{origin}/{org}.
// Only the pairs the gate emitted exist; the rest are 301'd to a surviving
// parent by the redirect map, and anything else 404s.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProfessionOrgPage,
  buildProfessionOrgMetadata,
} from "@/components/oet-seo/profession-org-page";
import { isProfessionOrgRenderable, renderableProfessionOrgs } from "@/lib/oet-seo/links";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = false;

type Params = Promise<{ slug: string; organization: string }>;

export function generateStaticParams() {
  return renderableProfessionOrgs().map((x) => ({ slug: x.professionSlug, organization: x.orgSlug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, organization } = await params;
  return buildProfessionOrgMetadata(slug, organization);
}

export default async function Page({ params }: { params: Params }) {
  const { slug, organization } = await params;
  if (!isProfessionOrgRenderable(slug, organization)) notFound();
  return <ProfessionOrgPage professionSlug={slug} orgSlug={organization} />;
}
