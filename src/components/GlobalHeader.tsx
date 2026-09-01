// AlmiOET-branded header — own wordmark + the family sibling nav + product entry
// points. Desktop uses the grouped 2-row layout (Nav Task 1): row 1 = family strip
// (canonical names, overflow behind "More ▾"), row 2 = product links + CTA. Family
// labels come from the canonical single source (src/lib/nav/family.ts).
//
// ── 🔴 THE HEADER NOW KNOWS WHETHER SOMEONE IS SIGNED IN ────────────────────
//
// It used to be a plain, sync, argument-less function with a hard-coded nav:
//
//     PRODUCT_NAV = [{ "Practice", "/practice" }, { "Log in", "/login" }]
//     + a "Start 7-day free trial" button
//
// It never read the session, on any page. So /practice — which sits behind
// requireUser() AND hasPaidAccess() — rendered correctly for the learner inside
// a header inviting them to log in and start a trial they are already paying
// past. Nasir screenshotted it twice, once beside his own progress.
//
// ── WHY THE SESSION IS READ ONE LEVEL DOWN, NOT IN THE ROOT LAYOUT ──────────
//
// The obvious fix is to make this component async and call getCurrentUser().
// That would put a cookie read in the ROOT layout, and a cookie read makes every
// route under it dynamic. Measured before touching anything: `/` builds as
// `○ (Static)` with `Revalidate 1h`, and src/app/page.tsx carries an explicit
// `export const revalidate = 3600`. Reading cookies above it would silently make
// that line do nothing and turn the marketing homepage into a function
// invocation — with a prisma.review.findMany — on every visit.
//
// So this component stays SYNC and takes the user as a prop, and the read is
// done by whichever layout already has it:
//
//   (app)/layout.tsx        requireUser()      already dynamic
//   admin/layout.tsx        getCurrentUser()   already dynamic
//   pricing|[profession]|register/layout.tsx   SiteChrome, already dynamic
//   (auth)/layout.tsx       user={null}        auth pages are for signed-out people
//   page.tsx, not-found.tsx user={null}        the two static pages, ISR preserved
//
// ⚠️ THE RESIDUAL, STATED: `/`, `/forgot-password` and the 404 render the
// signed-out nav even to a signed-in learner. That is the price of keeping them
// static, and it is a deliberate trade, not an oversight. tests/header-session
// asserts the split so nobody has to guess which pages are which.

import Link from "next/link";
import { familyStrip } from "@/lib/nav/family";
import { logoutAction } from "@/lib/auth/logout-action";
import { FamilyNav } from "./nav/FamilyNav";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

// The family strip for this repo = every product except AlmiOET (its own brand
// wordmark is OET's home) + the network links. Sourced from the canonical list.
export const FAMILY_NAV = familyStrip("oet");

export type NavItem = { label: string; href: string };

// Product entry points into AlmiOET's own practice product.
export const PRODUCT_NAV_SIGNED_OUT: readonly NavItem[] = [
  { label: "Practice", href: "/practice" },
  { label: "Log in", href: "/login" },
];

// Signed in: no "Log in", and no trial CTA — see trialCtaFor() below.
export const PRODUCT_NAV_SIGNED_IN: readonly NavItem[] = [
  { label: "Practice", href: "/practice" },
  { label: "My account", href: "/account" },
];

/** 🔴 ONE derivation, shared by the desktop row and the mobile drawer. Two
 *  copies of this decision would be two things that can disagree, and the
 *  mobile menu disagreeing is exactly as wrong as the desktop one. */
export function productNavFor(signedIn: boolean): readonly NavItem[] {
  return signedIn ? PRODUCT_NAV_SIGNED_IN : PRODUCT_NAV_SIGNED_OUT;
}

/** The trial CTA is for people who could still start a trial. Someone signed in
 *  cannot, and telling them to is the bug this file exists to fix. */
export function showTrialCta(signedIn: boolean): boolean {
  return !signedIn;
}

// Primary CTA → create an account and start practising.
export const GET_STARTED_HREF = "/signup";

// Back-compat for anything still importing the old flat constant. The signed-out
// nav IS what that name always meant.
export const PRODUCT_NAV = PRODUCT_NAV_SIGNED_OUT;

export function GlobalHeader({
  user,
}: {
  /** The signed-in learner, or null. Passed in — never read here; see the note
   *  at the top of this file for why the read belongs to the layout. */
  user?: { email: string } | null;
}) {
  const signedIn = Boolean(user);
  const productNav = productNavFor(signedIn);
  const trialCta = showTrialCta(signedIn);

  return (
    <header
      data-testid="global-header"
      data-signed-in={signedIn ? "true" : "false"}
      className="sticky top-0 z-40 border-b border-almi-bg-peach bg-almi-bg/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="AlmiOET home"
          className="inline-flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-almi-coral focus-visible:ring-offset-2 focus-visible:ring-offset-almi-bg"
        >
          <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-lg bg-almi-coral text-lg font-bold text-white">A</span>
          <span className="text-xl font-semibold tracking-tight text-almi-ink">AlmiOET</span>
        </Link>

        {/* Desktop: grouped 2-row — family strip on top, product actions below. */}
        <div className="hidden flex-1 flex-col items-end gap-2 lg:flex">
          <FamilyNav items={FAMILY_NAV} />
          <div className="flex items-center gap-x-4">
            {productNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm text-base font-semibold text-almi-ink hover:text-almi-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-almi-coral focus-visible:ring-offset-2 focus-visible:ring-offset-almi-bg"
              >
                {item.label}
              </Link>
            ))}
            {trialCta ? (
              <Link
                href={GET_STARTED_HREF}
                className="inline-flex min-h-[40px] items-center justify-center bg-almi-coral px-5 py-2 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-almi-coral/30"
                style={{ borderRadius: 9999 }}
              >
                Start 7-day free trial
              </Link>
            ) : (
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-almi-ink/20 px-5 py-2 text-sm font-semibold text-almi-ink hover:border-almi-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-almi-coral"
                >
                  Log out
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="lg:hidden">
          {/* The drawer is handed the SAME derived nav and the same flag, not a
              second copy of the rule. */}
          <HeaderMobileMenu productNav={[...productNav]} trialCta={trialCta} logout={logoutAction} />
        </div>
      </div>
    </header>
  );
}
