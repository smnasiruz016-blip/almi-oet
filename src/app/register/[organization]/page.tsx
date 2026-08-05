import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RegisterOrgPage, buildRegisterMetadata } from "@/components/oet-seo/register-org-page";
import { isOrgRenderable, renderableOrgs } from "@/lib/oet-seo/links";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes
export const dynamicParams = false; // only gate-passers exist; pruned orgs 404 and are redirected

type Params = Promise<{ organization: string }>;

export function generateStaticParams() {
  return renderableOrgs().map((organization) => ({ organization }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { organization } = await params;
  return buildRegisterMetadata(organization);
}

export default async function Page({ params }: { params: Params }) {
  const { organization } = await params;
  if (!isOrgRenderable(organization)) notFound();
  return <RegisterOrgPage orgSlug={organization} />;
}
