import type { Metadata } from "next";
import { ProfessionLanding, buildProfessionMetadata } from "@/components/oet-seo/profession-landing";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = true;

type Params = Promise<{ profession: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { profession } = await params;
  return buildProfessionMetadata(profession);
}

export default async function Page({ params }: { params: Params }) {
  const { profession } = await params;
  return <ProfessionLanding professionSlug={profession} />;
}
