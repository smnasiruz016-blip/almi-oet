// /nurse/{nationality}/uk — the nationality-first page type.
//
// A LITERAL "nurse" segment, deliberately. Two other shapes could have carried
// this and both are worse:
//
//   /{profession}/from-{origin}/...  is the RETIRED surface. The middleware 301s
//     on the literal "from-" prefix, so a page wearing it is redirected away
//     before this route can serve it.
//   /{slug}/{sub}/{third}            is the corridor route, which resolves its
//     three segments against the corridor set and 404s anything else.
//
// A static first segment sidesteps both: Next resolves literal segments ahead of
// dynamic ones, "nurse" is not a profession slug (the profession is "nursing"),
// and the middleware never matches because the second segment does not start
// with "from-". The live surface and the retired one stay apart.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NurseUkPage, buildNurseUkMetadata } from "@/components/oet-seo/nurse-uk-page";
import { NURSE_UK_PAGES, nurseUkByNationality } from "@/lib/oet-seo/nurse-uk-compose";

export const revalidate = false; // render-once, cache until redeploy — static SEO data
export const dynamicParams = false;

type Params = Promise<{ nationality: string }>;

export function generateStaticParams() {
  return NURSE_UK_PAGES.map((p) => ({ nationality: p.nationality_adj }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { nationality } = await params;
  return buildNurseUkMetadata(nationality);
}

export default async function Page({ params }: { params: Params }) {
  const { nationality } = await params;
  if (!nurseUkByNationality(nationality)) notFound();
  return <NurseUkPage nationality={nationality} />;
}
