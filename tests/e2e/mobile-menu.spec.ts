/**
 * THE PHONE MENUS OPEN, BY TAP, AND SHOW THEIR LINKS — owner bug of 31 Oct 2026: "the burger menu does not open on the
 * phone".
 *
 * Measured on the live site at 390px before the fix: tapping the header burger flipped aria-expanded to true and
 * mounted #global-mobile-menu, but the menu was a box 0px tall. The header is `sticky … backdrop-blur`, and a
 * backdrop-filter makes the header the containing block of its position:fixed children, so `fixed inset-0 top-[64px]`
 * resolved inside a 64px header. The fix portals the menu to <body>. This spec asserts what a person sees: the menu
 * has height, its links are visible, a link navigates and closes it, the page behind does not scroll, and a second tap
 * closes it. It never hovers.
 *
 * Widths 360, 390 and 430, phone-emulated (isMobile, touch, a phone user agent) in Chromium, the browser CI installs.
 * WebKit is NOT installed in CI, so iPhone Safari's own engine is not exercised here; the iPhone width and touch are.
 *
 * Run against another server with E2E_BASE_URL (the public half needs no fixture). The signed-in half needs the e2e
 * fixture, and is skipped without one.
 */
import { existsSync, readFileSync } from "node:fs";
import { test, expect, type Page } from "@playwright/test";

const FIXTURE = process.env.E2E_FIXTURE_FILE;
const fixture: { email: string; password: string } | null =
  FIXTURE && existsSync(FIXTURE) ? JSON.parse(readFileSync(FIXTURE, "utf8")) : null;

const PHONES = [
  { name: "Android 360", width: 360, height: 780, ua: "Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Mobile Safari/537.36" },
  { name: "iPhone 390", width: 390, height: 844, ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1" },
  { name: "iPhone 430", width: 430, height: 932, ua: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1" },
];

async function headerMenuWorks(page: Page) {
  const burger = page.getByRole("button", { name: "Open menu" });
  await expect(burger).toBeVisible();
  await burger.tap();
  const menu = page.locator("#global-mobile-menu");
  await expect(menu).toBeVisible();
  const box = await menu.boundingBox();
  // The defect was a menu that existed and was 0px tall. Visible links, inside a menu with real height.
  expect(box!.height, "the open menu must fill the screen below the header").toBeGreaterThan(300);
  const links = menu.getByRole("link");
  expect(await links.count()).toBeGreaterThan(2);
  await expect(links.first()).toBeVisible();
  // The page behind does not scroll while it is open.
  expect(await page.evaluate(() => [document.body.style.overflow, document.documentElement.style.overflow])).toEqual(["hidden", "hidden"]);
  // A second tap on the same button closes it.
  await page.getByRole("button", { name: "Close menu" }).tap();
  await expect(menu).toHaveCount(0);
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
}

for (const ph of PHONES) {
  test.describe(`phone menu · ${ph.name}`, () => {
    test.use({ viewport: { width: ph.width, height: ph.height }, isMobile: true, hasTouch: true, userAgent: ph.ua });

    test("public pages: the header burger opens, shows its links, and closes", async ({ page }) => {
      for (const path of ["/", "/pricing"]) {
        await page.goto(path);
        await headerMenuWorks(page);
      }
    });

    test("public: tapping a link in the menu navigates and closes the menu", async ({ page }) => {
      await page.goto("/");
      await page.getByRole("button", { name: "Open menu" }).tap();
      // The signed-out product links are "Practice" and "Log in" (GlobalHeader productNavFor). A bounded tap, so a
      // missing link fails in seconds instead of holding the job for the 5-minute test timeout.
      const link = page.locator("#global-mobile-menu").getByRole("link", { name: "Log in" });
      await expect(link).toBeVisible();
      await link.tap({ timeout: 15_000 });
      await page.waitForURL(/\/login/);
      await expect(page.locator("#global-mobile-menu")).toHaveCount(0);
    });

    test("signed in, on the Lessons page: both burgers open by tap and their links work", async ({ page }) => {
      test.skip(!fixture, "needs the e2e fixture (scripts/e2e/run.mts)");
      await page.goto("/login");
      await page.fill('input[name="email"]', fixture!.email);
      await page.fill('input[name="password"]', fixture!.password);
      await Promise.all([page.waitForURL((u) => !u.pathname.startsWith("/login")), page.click('button[type="submit"]')]);
      await page.goto("/lessons");
      await expect(page.getByRole("heading", { name: "How each part is marked" })).toBeVisible();
      await headerMenuWorks(page);
      // The app's own drawer (Sidebar): opens by tap, shows its links, and a tapped link navigates and closes it.
      await page.getByRole("button", { name: "Open navigation menu" }).tap();
      const drawer = page.getByRole("dialog", { name: "Navigation" });
      await expect(drawer).toBeVisible();
      await expect(drawer.getByRole("link", { name: /Lessons/ })).toBeVisible();
      await drawer.getByRole("link", { name: /My Progress/ }).tap();
      await page.waitForURL(/\/progress/);
      await expect(page.getByRole("dialog", { name: "Navigation" })).toHaveCount(0);
    });
  });
}
