import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProfessionOriginPage,
  buildProfessionOriginMetadata,
} from "@/components/oet-seo/profession-origin-page";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = true;

/**
 * 🔴 GAP-055, THE HALF THAT IS NOT OBVIOUS. `revalidate = false` above did
 * NOTHING without this function, and the build proved it: with no
 * generateStaticParams the route is `f` (Dynamic) and does not appear in
 * .next/prerender-manifest.json at all — so there is no ISR entry, nothing is
 * ever cached, and every request runs the function. Adding it (returning an
 * EMPTY list) flips the route to `*` (SSG) with `fallback: null` in the
 * manifest, which is exactly "render once on first request, then serve from
 * cache until the next deploy".
 *
 * WHY THE LIST IS EMPTY. There are too many paths under this route to prerender
 * at build time, and building them would trade a request-time cost for a
 * build-time one. The empty list is not a placeholder: it is what REGISTERS the
 * route as prerenderable, and `dynamicParams = true` then fills it on demand and
 * KEEPS the result.
 *
 * ⚠️ Removing this function silently returns the route to per-request rendering.
 * The build table will say `f` and nothing else will complain.
 */
export async function generateStaticParams() {
  return [];
}

// The origin segment carries the literal `from-` prefix, e.g. /nursing/from-pakistan.
const FROM = "from-";
type Params = Promise<{ profession: string; fromOrigin: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { profession, fromOrigin } = await params;
  if (!fromOrigin.startsWith(FROM)) return { robots: { index: false, follow: true } };
  return buildProfessionOriginMetadata({ professionSlug: profession, originSlug: fromOrigin.slice(FROM.length) });
}

export default async function Page({ params }: { params: Params }) {
  const { profession, fromOrigin } = await params;
  if (!fromOrigin.startsWith(FROM)) notFound();
  return <ProfessionOriginPage professionSlug={profession} originSlug={fromOrigin.slice(FROM.length)} />;
}
