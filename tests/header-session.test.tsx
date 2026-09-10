/**
 * gate:header-session — THE HEADER KNOWS WHO IS LOOKING AT IT.
 *
 * The bug: GlobalHeader was a plain, sync, argument-less function in the ROOT
 * layout with a hard-coded nav — `Practice` / `Log in` plus a "Start 7-day free
 * trial" button. It never read the session, on any page. So `/practice`, which
 * sits behind `requireUser()` AND `hasPaidAccess()`, rendered correctly for the
 * learner inside a header telling them to log in and start a trial they are
 * already paying past. Nasir screenshotted it twice, once next to his own
 * progress ("you've done 2").
 *
 * ── THE THREE QUESTIONS ─────────────────────────────────────────────────────
 *
 * ① Population: every top-level segment of src/app that can serve HTML is
 *    enumerated from the FILESYSTEM, not from a list typed here, and the census
 *    fails if a segment exists with no header owner.
 * ② Every assertion can fail: each is paired with its opposite — the strings
 *    absent from the signed-in render are asserted PRESENT in the signed-out
 *    one, so "not found" can never pass because the markup was empty.
 * ③ Expected values: the two forbidden strings ("Log in", "Start 7-day free
 *    trial") are HAND-TYPED here from Nasir's screenshot. They are deliberately
 *    NOT imported from GlobalHeader — importing the expectation would make the
 *    test agree with any label the component happens to render, which is the
 *    defect it exists to catch.
 *
 * ── HOW IT WAS SEEN RED ─────────────────────────────────────────────────────
 *
 *   a) `showTrialCta` was changed back to `return true`. The signed-in render
 *      carried "Start 7-day free trial" again and the assertion failed.
 *   b) `<GlobalHeader user={user} />` was deleted from (app)/layout.tsx. The
 *      ownership census failed and named the segment.
 *
 * Both restored; the recorded output is in the PR body.
 *
 * ── WHAT THIS DOES NOT PROVE ────────────────────────────────────────────────
 *
 * It proves the markup differs correctly for a user and for null, and that every
 * segment has an owner that renders a header. It does NOT prove the owner passes
 * the RIGHT user — that a layout does not hand `null` while holding a session.
 * The `/practice` end of that is covered by the browser walk in tests/e2e, which
 * signs in for real and reads the header off the live page.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

// HAND-TYPED from the header a signed-in learner must never see again.
const LOGGED_OUT_ONLY = ["Log in", "Start 7-day free trial"];

vi.mock("@/lib/prisma", () => ({ prisma: {} }));
vi.mock("@/lib/auth", () => ({
  getCurrentUser: async () => null,
  destroySession: async () => {},
}));
vi.mock("@/lib/auth/logout-action", () => ({ logoutAction: async () => {} }));
vi.mock("next/navigation", () => ({
  redirect: (to: string) => {
    throw new Error(`REDIRECT:${to}`);
  },
  notFound: () => {
    throw new Error("NOT_FOUND");
  },
}));

const { GlobalHeader, productNavFor, showTrialCta } = await import("@/components/GlobalHeader");

afterEach(() => vi.clearAllMocks());

const signedOut = () => renderToStaticMarkup(<GlobalHeader user={null} />);
const signedIn = () =>
  renderToStaticMarkup(<GlobalHeader user={{ email: "learner@example.com" }} />);

describe("the rendered header", () => {
  it("renders at all, in both states — so the absence checks below are not vacuous", () => {
    expect(signedOut()).toContain('data-testid="global-header"');
    expect(signedIn()).toContain('data-testid="global-header"');
    expect(signedOut()).toContain('data-signed-in="false"');
    expect(signedIn()).toContain('data-signed-in="true"');
  });

  it("SIGNED OUT still offers Log in and the trial — the control for the next test", () => {
    const html = signedOut();
    for (const s of LOGGED_OUT_ONLY) expect(html).toContain(s);
  });

  it("🔴 SIGNED IN shows neither Log in nor the trial CTA", () => {
    const html = signedIn();
    for (const s of LOGGED_OUT_ONLY) expect(html).not.toContain(s);
  });

  it("SIGNED IN offers the account and a way out instead", () => {
    const html = signedIn();
    expect(html).toContain("/account");
    expect(html).toContain("Log out");
    // "Log out" must not be what satisfies the "Log in" check above.
    expect(html).not.toContain(">Log in<");
  });

  it("the mobile drawer is handed the same decision, not a second copy of it", () => {
    // HeaderMobileMenu takes `productNav` and `trialCta` as props derived once in
    // GlobalHeader. If it ever imported the rule again, these two would be free
    // to disagree — and a drawer telling a paying learner to log in is exactly as
    // wrong as the desktop row was.
    const src = readFileSync(join(process.cwd(), "src/components/HeaderMobileMenu.tsx"), "utf8");
    expect(src).toContain("productNav");
    expect(src).toContain("trialCta");
    expect(src).not.toMatch(/\bPRODUCT_NAV\b/);
    expect(src).not.toMatch(/getCurrentUser|requireUser/);
  });
});

describe("the derivation both surfaces share", () => {
  it("swaps Log in for the account, and drops the trial, exactly on sign-in", () => {
    expect(showTrialCta(false)).toBe(true);
    expect(showTrialCta(true)).toBe(false);
    const out = productNavFor(false).map((i) => i.href);
    const inn = productNavFor(true).map((i) => i.href);
    expect(out).toContain("/login");
    expect(inn).not.toContain("/login");
    expect(inn).toContain("/account");
    // Practice stays reachable either way.
    expect(out).toContain("/practice");
    expect(inn).toContain("/practice");
  });
});

/**
 * ── OWNERSHIP CENSUS ────────────────────────────────────────────────────────
 *
 * The header used to come from the root layout, so every route had one for free.
 * It no longer does — reading cookies there would have made `/` dynamic and
 * silently voided its `export const revalidate = 3600`. The cost of moving it
 * down is that a segment can now be added with NO header at all, and nobody
 * would notice until a page shipped bare. This census is the replacement for
 * "the root layout does it for you".
 */
describe("every segment that can serve HTML has a header owner", () => {
  const APP = join(process.cwd(), "src/app");

  /** Owner file(s) per top-level segment. The KEYS are checked against the
   *  filesystem below, so a new segment with no entry here fails. */
  const OWNERS: Record<string, string[]> = {
    "(app)": ["(app)/layout.tsx"],
    "(auth)": ["(auth)/layout.tsx"],
    admin: ["admin/layout.tsx"],
    pricing: ["pricing/layout.tsx"],
    "[profession]": ["[profession]/layout.tsx"],
    register: ["register/layout.tsx"],
    // The root segment itself: the homepage and the 404 carry their own.
    ".": ["page.tsx", "not-found.tsx"],
  };

  /** Top-level segments that can render HTML — decided by what is ON DISK, not
   *  by a name list: a directory qualifies when a `page.tsx` exists somewhere
   *  beneath it. That excludes /api and /sitemap-index.xml, which hold only
   *  `route.ts` handlers and render no layout, without naming either of them. */
  function hasPage(dir: string): boolean {
    for (const n of readdirSync(dir)) {
      const full = join(dir, n);
      if (statSync(full).isDirectory()) {
        if (hasPage(full)) return true;
      } else if (n === "page.tsx" || n === "page.ts") return true;
    }
    return false;
  }
  const segments = readdirSync(APP)
    .filter((n) => statSync(join(APP, n)).isDirectory())
    .filter((n) => !n.startsWith("_"))
    .filter((n) => hasPage(join(APP, n)));

  it("finds the segments at all", () => {
    expect(segments.length).toBeGreaterThan(0);
  });

  it("has an owner entry for every segment on disk, and no stale ones", () => {
    const expected = [...segments, "."].sort();
    expect(Object.keys(OWNERS).sort()).toEqual(expected);
  });

  it.each(Object.entries(OWNERS))("%s renders a header", (_segment, files) => {
    for (const f of files) {
      const src = readFileSync(join(APP, f), "utf8");
      // Either it renders the header itself, or it adopts SiteChrome, which does.
      expect(src).toMatch(/<GlobalHeader|SiteChrome/);
    }
  });

  it("the ROOT layout renders none — two headers, or a dynamic `/`", () => {
    const src = readFileSync(join(APP, "layout.tsx"), "utf8");
    expect(src).not.toMatch(/<GlobalHeader/);
  });

  it("SiteChrome, the shared owner, actually renders one", () => {
    const src = readFileSync(join(process.cwd(), "src/components/SiteChrome.tsx"), "utf8");
    expect(src).toMatch(/<GlobalHeader/);
    expect(src).toMatch(/getCurrentUser/);
  });
});

/**
 * 🔴 GAP-055 — THE COST OF A HEADER, WHICH THIS FILE NEVER ASKED ABOUT.
 *
 * The block above asks whether every segment HAS a header. It passed throughout
 * the defect, and it was right to: no header was missing. The question nobody
 * asked was what the header COSTS the route underneath it.
 *
 * One `await getCurrentUser()` in `SiteChrome`, adopted by two SEO layouts with a
 * one-line re-export, made 240,327 public URLs dynamic. Measured on the served
 * response, three requests each: `x-vercel-cache: MISS` every time and
 * `Cache-Control: private, no-cache, no-store` — while the pages themselves
 * declared `export const revalidate = false`.
 *
 * These checks are the SOURCE half of the guard. They stop the mistake being
 * reintroduced by a one-line re-export, and they fail in CI in seconds.
 * scripts/check-cache-headers.mts is the RESPONSE half, and it is the one that
 * proves anything — a source check believed `revalidate = false` for weeks.
 * Neither replaces the other.
 */
describe("the public SEO shell must cost a crawler nothing", () => {
  const APP = join(process.cwd(), "src/app");

  /** The layouts that govern the public, indexable, high-volume URL space. */
  const PUBLIC_SEO_LAYOUTS = ["[profession]/layout.tsx", "register/layout.tsx"];

  /** Their pages. Each must be prerenderable, which takes BOTH `revalidate` and
   *  a `generateStaticParams` — the build proved that `revalidate` alone leaves
   *  the route `ƒ` and absent from the prerender manifest. */
  const PUBLIC_SEO_PAGES = [
    "[profession]/page.tsx",
    "[profession]/[fromOrigin]/page.tsx",
    "[profession]/[fromOrigin]/[organization]/page.tsx",
    "register/[organization]/page.tsx",
  ];

  /** 🔴 CODE ONLY, COMMENTS STRIPPED. These files EXPLAIN the defect at length,
   *  so a naive substring match finds "SiteChrome" and "getCurrentUser" in the
   *  prose and fails a file that is correct. A check that cannot tell an
   *  explanation from a call is not checking the thing it names. */
  function codeOf(file: string): string {
    return readFileSync(join(APP, file), "utf8")
      .replace(/\/\*[\s\S]*?\*\//g, " ")
      .replace(/(^|[^:])\/\/.*$/gm, "$1");
  }

  it.each(PUBLIC_SEO_LAYOUTS)("%s reads NO session", (file) => {
    const code = codeOf(file);
    // SiteChrome awaits getCurrentUser(); adopting it is the exact one-line
    // mistake this test exists to catch.
    expect(code).not.toMatch(/SiteChrome/);
    expect(code).not.toMatch(/getCurrentUser|requireUser|@\/lib\/auth|cookies\(\)|headers\(\)/);
  });

  it.each(PUBLIC_SEO_LAYOUTS)("%s still renders the signed-out header", (file) => {
    const src = readFileSync(join(APP, file), "utf8");
    expect(src).toMatch(/<GlobalHeader\s+user=\{null\}/);
  });

  it.each(PUBLIC_SEO_PAGES)("%s is prerenderable: revalidate AND generateStaticParams", (file) => {
    const src = readFileSync(join(APP, file), "utf8");
    expect(src).toMatch(/export const revalidate/);
    // Without this the route is `ƒ`, has no prerender-manifest entry, and
    // `revalidate` is decoration. Measured on the build output, 10 Sep 2026.
    expect(src).toMatch(/export async function generateStaticParams/);
  });

  it("the signed-out header is real navigation for someone who IS signed in", () => {
    // Option 3 gives every visitor the signed-out header on these pages. That is
    // only acceptable because each destination resolves correctly for a signed-in
    // learner, and that is asserted here rather than assumed.
    const login = readFileSync(join(APP, "(auth)/login/page.tsx"), "utf8");
    const signup = readFileSync(join(APP, "(auth)/signup/page.tsx"), "utf8");
    expect(login).toMatch(/getCurrentUser\(\)\)\s*redirect\("\/account"\)/);
    expect(signup).toMatch(/getCurrentUser\(\)\)\s*redirect\("\/account"\)/);
    // …and "Practice" lands on the real shell, which does its own session read.
    const appLayout = readFileSync(join(APP, "(app)/layout.tsx"), "utf8");
    expect(appLayout).toMatch(/requireUser\(\)/);
  });
});
