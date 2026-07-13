import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProfessionOriginPage,
  buildProfessionOriginMetadata,
} from "@/components/oet-seo/profession-origin-page";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = true;

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
