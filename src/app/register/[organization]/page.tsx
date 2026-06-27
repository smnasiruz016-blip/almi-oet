import type { Metadata } from "next";
import { RegisterOrgPage, buildRegisterMetadata } from "@/components/oet-seo/register-org-page";

export const revalidate = 86400;
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
