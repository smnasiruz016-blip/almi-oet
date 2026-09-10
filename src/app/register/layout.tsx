// PUBLIC SEO SHELL — /register/[organization], 610 URLs. NO COOKIE READ.
//
// GAP-055, the same cause and the same fix as src/app/[profession]/layout.tsx —
// see that file for the full reasoning. This segment carried the identical
// one-line `export { default } from "@/components/SiteChrome"`, and SiteChrome
// awaits getCurrentUser().
//
// MEASURED 10 September 2026 on /register/uk-nmc, three requests:
// `x-vercel-cache: MISS`, `Cache-Control: private, no-cache, no-store` — every
// time, exactly like the [profession] tree.
//
// ⚠️ CHECKED BEFORE INCLUDING THESE 610, BECAUSE A CACHED PAGE THAT CARRIES A
// PER-SESSION TOKEN IS A LEAK, NOT A SAVING. The rendered HTML of
// /register/uk-nmc, captured 10 September, contains:
//     · ZERO <form> elements
//     · ZERO hidden inputs
//     · no CSRF token, no authenticity token, no form key
//     · every `nonce` in the RSC payload is literally "$undefined"
// and RegisterOrgPage renders only <Link> and <a>. There is nothing per-session
// in this page for a cache to share. If a form is ever added here, this decision
// has to be re-taken — a server action embeds a POST target, and the question
// becomes live again.

import { GlobalHeader } from "@/components/GlobalHeader";

export default function RegisterSeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalHeader user={null} />
      {children}
    </>
  );
}
