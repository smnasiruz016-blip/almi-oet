// 301s for the pruned origin surface.
//
// ~239,705 URLs stop existing: /{profession}/from-{origin}/{org} and
// /{profession}/from-{origin}. Dumping that into 404s would throw away whatever
// equity the indexed ones hold, so each is redirected to the nearest page that
// still says something true about it. The origin segment is simply dropped —
// it never carried a fact, which is why these pages were pruned.
//
// The target must EXIST, or a 301 just moves the 404. Preference order:
//   /{profession}/{org}  →  /register/{org}  →  /{profession}
// The profession hub is the last resort and always exists, so nothing falls
// through to a 404.
//
// The lookup is precomputed (scripts/gen-emitted.ts) rather than composed here:
// running the gate in middleware would add ~450ms to a cold request.

import { NextResponse, type NextRequest } from "next/server";
import EMITTED from "@/lib/oet-seo/emitted.generated.json";

const ORGS = new Set(EMITTED.orgs);
const PROFESSION_ORGS = new Set(EMITTED.professionOrgs);
const PROFESSIONS = new Set(EMITTED.professions);

function target(profession: string, org: string | null): string | null {
  if (!PROFESSIONS.has(profession)) return null;
  if (org) {
    if (PROFESSION_ORGS.has(`${profession}/${org}`)) return `/${profession}/${org}`;
    if (ORGS.has(org)) return `/register/${org}`;
  }
  return `/${profession}`;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const parts = pathname.split("/").filter(Boolean);

  // /{profession}/from-{origin}[/{org}] — nothing else reaches here.
  if (parts.length < 2 || !parts[1].startsWith("from-")) return NextResponse.next();

  const to = target(parts[0], parts[2] ?? null);
  if (!to) return NextResponse.next(); // unknown profession: let the route 404 honestly

  const url = req.nextUrl.clone();
  url.pathname = to;
  url.search = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  // Only the pruned shapes. Everything else never loads this module.
  matcher: ["/:profession/from-:origin", "/:profession/from-:origin/:organization"],
};
