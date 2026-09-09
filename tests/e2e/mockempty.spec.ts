/**
 * 🔴 ?mockempty=1 MUST RENDER SOMETHING, AND A BROWSER MUST SEE IT.
 *
 * GAP-042. `beginMockSession()` redirects to /practice?mockempty=1 when no
 * complete form exists, and until 9 September 2026 `mockempty` appeared in
 * exactly ONE place in the whole source: the line that sets it. Nothing read it.
 * A learner pressed Start full mock, landed back on /practice, and saw nothing —
 * indistinguishable from a dead button, which is what GAP-041 made it for five
 * days.
 *
 * The defect existed because nothing read the parameter, so this walks the real
 * URL in a real browser and reads the page a learner would see. It is asserted
 * BOTH WAYS: the notice appears with the parameter and is absent without it, so
 * a page that always rendered the banner — which would tell every visitor a mock
 * is unavailable when it is not — fails here too.
 *
 * ── WHAT IS ASSERTED ABOUT THE WORDS, AND WHY ───────────────────────────────
 *
 * Not the wording, which may change. Two properties the owner named, which may
 * not:
 *
 *   · IT SAYS THE FAULT IS OURS. A paying nurse at eleven at night must not read
 *     this and think her account or her payment has failed.
 *   · IT DOES NOT SEND HER TO SUPPORT. Support cannot conjure a complete form;
 *     an invitation to contact them costs her time and gets her nothing.
 *
 * A rewrite that keeps the voice and drops either property fails this test, on
 * purpose.
 */
import { readFileSync } from "node:fs";
import { test, expect, type Page } from "@playwright/test";

const fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8")) as {
  email: string;
  password: string;
};

async function signIn(page: Page) {
  await page.goto("/login");
  await page.fill('input[name="email"]', fixture.email);
  await page.fill('input[name="password"]', fixture.password);
  await Promise.all([
    page.waitForURL((u) => !u.pathname.startsWith("/login")),
    page.click('button[type="submit"]'),
  ]);
}

test.describe("GAP-042 — the mockempty flag reaches the learner", () => {
  test("renders a notice with the parameter, and none without it", async ({ page }) => {
    await signIn(page);

    // 1 · the control FIRST, so a page that always shows it cannot pass
    await page.goto("/practice");
    await expect(page.getByTestId("profession-grid")).toBeVisible();
    await expect(page.getByTestId("mockempty-notice")).toHaveCount(0);

    // 2 · the flag the redirect actually sets
    await page.goto("/practice?mockempty=1");
    const notice = page.getByTestId("mockempty-notice");
    await expect(notice).toBeVisible();
    const text = (await notice.innerText()).toLowerCase();

    // the fault is ours, said in as many words
    expect(text).toContain("problem on our side");
    expect(text).toContain("not with your account or your payment");

    // and she is not sent anywhere that cannot help her
    for (const dead of ["support", "contact us", "help centre", "help center", "ticket"]) {
      expect(text, `the notice sends the learner to ${dead}`).not.toContain(dead);
    }

    // the rest of the page still works — this is a notice, not an error page
    await expect(page.getByTestId("profession-grid")).toBeVisible();
  });
});
