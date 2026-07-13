import type { Metadata } from "next";
import { RegisterOrgPage, buildRegisterMetadata } from "@/components/oet-seo/register-org-page";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = true;

type Params = Promise<{ organization: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { organization } = await params;
  return buildRegisterMetadata(organization);
}

export default async function Page({ params }: { params: Params }) {
  const { organization } = await params;
  return <RegisterOrgPage orgSlug={organization} />;
}
