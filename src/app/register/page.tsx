// /register — the index hub. Its absence made every /register/{org} page an
// orphan under a 404 parent.

import type { Metadata } from "next";
import { RegisterIndex, buildRegisterIndexMetadata } from "@/components/oet-seo/register-index";

export const revalidate = false; // render-once, cache until redeploy — static SEO data, no periodic ISR re-writes

export function generateMetadata(): Metadata {
  return buildRegisterIndexMetadata();
}

export default function Page() {
  return <RegisterIndex />;
}
