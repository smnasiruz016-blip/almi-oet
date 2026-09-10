import type { Metadata } from "next";
import { ProfessionLanding, buildProfessionMetadata } from "@/components/oet-seo/profession-landing";
import { PROFESSION_LIST } from "@/lib/oet/professions";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = true;

/**
 * 🔴 GAP-055. Without this function the route is `f` (Dynamic), absent from
 * .next/prerender-manifest.json, and `revalidate = false` above means nothing —
 * measured on the build output, not assumed. With it the route becomes a
 * prerender route and the result is cached.
 *
 * Unlike the deeper SEO routes, this one has only TWELVE paths, so they are
 * listed for real and built at build time rather than filled on first request.
 * Twelve pages is not a build cost worth avoiding, and these are the top of the
 * funnel.
 */
export async function generateStaticParams() {
  return PROFESSION_LIST.map((p) => ({ profession: p.slug }));
}

type Params = Promise<{ profession: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { profession } = await params;
  return buildProfessionMetadata(profession);
}

export default async function Page({ params }: { params: Params }) {
  const { profession } = await params;
  return <ProfessionLanding professionSlug={profession} />;
}
