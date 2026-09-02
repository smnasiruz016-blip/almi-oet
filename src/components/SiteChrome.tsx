// The header for public routes that are ALREADY dynamic.
//
// /pricing, /[profession]/… and /register/[organization] all render on demand
// (measured in the build route table, all `ƒ`, before this change), so reading
// the session for them costs nothing that was not already being spent — and it
// means a signed-in learner who lands on the pricing page is not told to log in.
//
// It is exported as a LAYOUT so each of those segments can adopt it with a
// one-line re-export instead of a copied header call per page. A page added to
// one of those segments tomorrow gets the right header without anyone
// remembering to add it.
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
