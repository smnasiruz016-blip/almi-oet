// The header for /pricing. AND FOR NOTHING ELSE — read the next paragraph before
// adopting it anywhere.
//
// 🔴 GAP-055, 10 September 2026. This file used to be adopted by three segments:
// /pricing, /[profession]/… and /register/[organization]. Its old header said the
// session read was free because "those routes are ALREADY dynamic … measured in
// the build route table, all ƒ". That sentence was TRUE WHEN IT WAS WRITTEN and
// then quietly stopped being true: the pages under [profession] and register
// later declared `export const revalidate = false // render-once, cache until
// redeploy`, and this cookie read silently vetoed it. Measured on the served
// response: `x-vercel-cache: MISS` on three consecutive requests, and
// `Cache-Control: private, no-cache, no-store`, across 240,327 URLs.
//
// A JUSTIFICATION IS A JUDGEMENT ABOUT A NUMBER, AND IT EXPIRES WHEN THE NUMBER
// MOVES. Nobody re-measured, and no gate could: every check in this repository
// read the source, and the source said `revalidate = false`.
//
// So the two SEO segments now render the signed-out header directly and read no
// cookie. /pricing keeps this one DELIBERATELY: it is a single URL, caching it
// saves nothing measurable, and telling an existing subscriber to start a trial
// is the bug this component was created to fix. `src/app/pricing/page.tsx` also
// calls getCurrentUser() in the page itself, so that route is dynamic either way.
//
// ⚠️ DO NOT ADOPT THIS IN A SEGMENT THAT SHOULD BE CACHED. One re-export line is
// all it takes to make a quarter of a million URLs dynamic again, and nothing in
// the build, the tests or the gates will say a word.
// scripts/check-cache-headers.mts, run after every production deploy, is what
// would notice — because it reads the response, not the file.
//
// 🔴 IT IS NOT USED BY `/`. src/app/page.tsx is `○ (Static)` with an explicit
// `export const revalidate = 3600`; a cookie read there would silently make that
// line do nothing. See the header of src/components/GlobalHeader.tsx.

import { getCurrentUser } from "@/lib/auth";
import { GlobalHeader } from "@/components/GlobalHeader";

export default async function SiteChrome({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  return (
    <>
      <GlobalHeader user={user} />
      {children}
    </>
  );
}
