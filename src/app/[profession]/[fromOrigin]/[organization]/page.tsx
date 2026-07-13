import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrgPage, buildOrgPageMetadata } from "@/components/oet-seo/org-page";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = true;

const FROM = "from-";
type Params = Promise<{ profession: string; fromOrigin: string; organization: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { profession, fromOrigin, organization } = await params;
  if (!fromOrigin.startsWith(FROM)) return { robots: { index: false, follow: true } };
  return buildOrgPageMetadata({
    professionSlug: profession,
    originSlug: fromOrigin.slice(FROM.length),
    orgSlug: organization,
  });
}

export default async function Page({ params }: { params: Params }) {
  const { profession, fromOrigin, organization } = await params;
  if (!fromOrigin.startsWith(FROM)) notFound();
  return (
    <OrgPage
      professionSlug={profession}
      originSlug={fromOrigin.slice(FROM.length)}
      orgSlug={organization}
    />
  );
}
