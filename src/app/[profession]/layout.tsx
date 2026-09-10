// PUBLIC SEO SHELL — 239,717 URLs. IT MUST NOT READ A COOKIE.
//
// GAP-055. This layout used to be `export { default } from "@/components/SiteChrome"`,
// and SiteChrome awaits getCurrentUser(), which reads the session cookie. One
// cookie read in a layout makes every route beneath it dynamic, and beneath this
// one are:
//
//     /[profession]                                   12 URLs
//     /[profession]/from-[origin]                   2,292 URLs
//     /[profession]/from-[origin]/[organization]  237,413 URLs
//
// MEASURED 10 September 2026, on the served response, three requests each:
// `x-vercel-cache: MISS`, `age=0`, every time, and
// `Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate`.
// The leaf page's own `export const revalidate = false // render-once, cache
// until redeploy` did nothing at all. Every crawler visit to any of those URLs
// ran a function.
//
// 🔴 AND THE CODE ALREADY KNEW. src/app/layout.tsx refuses to render a header for
// exactly this reason, in its own words: "reading the session in the ROOT layout
// makes every route under it dynamic". SiteChrome's header then said the read was
// free "for public routes that are ALREADY dynamic … measured in the build route
// table, all ƒ". That was true when it was written — and it stopped being true the
// moment those same routes asked to become render-once. A justification is a
// judgement about a number, and it expires when the number moves. Nothing
// re-measured it.
//
// So the public SEO shell renders the SIGNED-OUT header, permanently, and takes
// no session at all. What that gives up is a personalised header on pages built
// for strangers; what it buys back is 239,717 URLs that a crawler can be served
// from cache.
//
// ⚠️ A signed-in visitor is not stranded — every destination in the signed-out
// nav resolves correctly for them, and this was checked, not assumed:
//     "Log in"  → /login  → (auth)/login/page.tsx redirects to /account when a
//                           session exists
//     trial CTA → /signup → (auth)/signup/page.tsx does the same
//     "Practice"→ /practice → (app)/layout.tsx requireUser(), the real shell
//
// ⚠️ IF YOU ADD A SESSION READ HERE, YOU UNDO ALL OF IT — silently, with every
// gate still green. scripts/check-cache-headers.mts runs after every production
// deploy and reads the SERVED response, because that is the only thing that ever
// told the truth about this route.

import { GlobalHeader } from "@/components/GlobalHeader";

export default function PublicSeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalHeader user={null} />
      {children}
    </>
  );
}
