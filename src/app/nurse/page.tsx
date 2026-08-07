// /nurse — the hub for the nationality-first batch.
//
// A literal segment, like /nurse/{nationality}/uk beneath it, so nothing here
// touches the retired /{profession}/from-{origin} grammar or the corridor route.

import type { Metadata } from "next";
import { NurseHubPage, buildNurseHubMetadata } from "@/components/oet-seo/nurse-hub-page";

export const revalidate = false; // render-once, cache until redeploy — static SEO data
export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return buildNurseHubMetadata();
}

export default function Page() {
  return <NurseHubPage />;
}
