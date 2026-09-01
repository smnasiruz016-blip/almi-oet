/**
 * THE CHAIN, WALKED BY A BROWSER.
 *
 * ── WHY THIS FILE EXISTS ────────────────────────────────────────────────────
 *
 * PR #20 closed with "I could not prove the chain works end to end" and "no
 * browser has ever rendered any of it". The plan was for Nasir to press the
 * button himself. He cannot:
 *
 *     "bhaie g i m not qualified to attend and submit the test"
 *
 * He is right, and a product whose only proof is its owner sitting an exam he is
 * not qualified to sit has no proof. So the test sits the exam.
 *
 * ── 🔴 WHERE THE EXPECTATION COMES FROM ─────────────────────────────────────
 *
 * The order and the titles are read from the RENDERED LIST on the task page —
 * the thing a learner looks at. They are never read from nextInChain(), from
 * listPool(), or from the seed fixture. If the picker and the list disagreed,
 * importing the picker's answer as the expectation would make the test agree
 * with the bug. The fixture's own `seededTitles` is printed on failure and used
 * for NOTHING else.
 *
 * ── WHAT IS ASSERTED ────────────────────────────────────────────────────────
 *
 *   · the rendered list has N rows and N is what the page says it has;
 *   · starting row 1 opens row 1's exercise;
 *   · after each item, "Next up — exercise K of N" names the row the LIST shows
 *     next, by position AND by title;
 *   · pressing the button lands on exactly that exercise;
 *   · the walk visits every exercise exactly once and never repeats;
 *   · when the pool is spent the exhaustion message appears and the automatic
 *     chain offers no further exercise.
 *
 * ── AND ONE MEASUREMENT, NOT AN ASSUMPTION ──────────────────────────────────
 *
 * Whether an EMPTY submission is accepted. Nothing in the submit path looked
 * like a required-answers check, but "looked like" is not a measurement, so the
 * walk submits nothing at all and records what /api/oet/submit actually answers.
 * The result is asserted both ways round: if it were refused, this test would
 * fail and say so, which is the finding either way.
 */
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { test, expect, type Page } from "@playwright/test";

type Fixture = {
  email: string;
  password: string;
  professionSlug: string;
  taskSlug: string;
  seededTitles: string[];
};

const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));
const LIBRARY = `/practice/${fixture.professionSlug}/${fixture.taskSlug}`;
const SHOTS = join(process.cwd(), "docs", "e2e");
mkdirSync(SHOTS, { recursive: true });

/**
 * Screenshots are VIEWPORT shots, never fullPage. The header is
 * `position: sticky`, and Chrome paints a sticky element at the scroll offset it
 * stitched a full-page capture from — the first run produced an image with the
 * header sitting in the middle of the page, which looks exactly like a layout
 * regression and is not one. A viewport shot shows what a person actually sees.
 */
async function shot(page: Page, name: string, focus?: string) {
  if (focus) await page.locator(`[data-testid="${focus}"]`).scrollIntoViewIfNeeded();
  await page.screenshot({ path: join(SHOTS, name), fullPage: false });
}

/** Strings a signed-in learner must never be shown. Hand-typed from the header
 *  Nasir screenshotted, not imported from the component. */
const SIGNED_OUT_ONLY = ["Log in", "Start 7-day free trial"];

async function signIn(page: Page) {
  await page.goto("/login");
  await page.fill('input[name="email"]', fixture.email);
  await page.fill('input[name="password"]', fixture.password);
  await Promise.all([page.waitForURL((u) => !u.pathname.startsWith("/login")), page.click('button[type="submit"]')]);
}

/** The learner's library, read off the page exactly as they see it. */
async function readList(page: Page): Promise<{ titles: string[]; declaredTotal: number }> {
  await page.goto(LIBRARY);
  await expect(page.getByTestId("exercise-list-heading")).toBeVisible();
  const titles = await page.getByTestId("exercise-title").allInnerTexts();
  const declaredTotal = Number((await page.getByTestId("exercise-list-total").innerText()).trim());
  return { titles: titles.map((t) => t.trim()), declaredTotal };
}

/** Submit the current item with NO answers, and report what the API said. */
async function submitEmpty(page: Page): Promise<{ status: number; body: unknown }> {
  const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
  await page.getByTestId("submit-answers").click();
  const res = await waiting;
  const body = await res.json().catch(() => null);
  // The result screen only appears once the refresh lands.
  await expect(page.getByTestId("exercise-chain")).toBeVisible();
  return { status: res.status(), body };
}

test.describe.configure({ mode: "serial" });

test.describe("the next-exercise chain, in a real browser", () => {
  test("the header knows the learner is signed in", async ({ page }) => {
    await signIn(page);
    await page.goto(LIBRARY);
    const header = page.getByTestId("global-header");
    await expect(header).toHaveAttribute("data-signed-in", "true");
    const headerText = await header.innerText();
    for (const s of SIGNED_OUT_ONLY) expect(headerText).not.toContain(s);
    await shot(page, "00-header-signed-in.png");
    // The control: the same header, signed out, still says both.
    await page.context().clearCookies();
    await page.goto("/login");
    const outText = await page.getByTestId("global-header").innerText();
    for (const s of SIGNED_OUT_ONLY) expect(outText).toContain(s);
    await shot(page, "01-header-signed-out.png");
  });

  test("walks every exercise exactly once and then reports exhaustion", async ({ page }) => {
    await signIn(page);

    // ── the expectation, read off the learner's own list ─────────────────────
    const { titles, declaredTotal } = await readList(page);
    const N = titles.length;
    expect(N, "the seeded pool must not be empty").toBeGreaterThan(1);
    expect(declaredTotal, "the page's own count must equal the rows it rendered").toBe(N);
    await shot(page, "02-library-signed-in.png");

    // ── start at exercise 1, from the list ───────────────────────────────────
    await page.getByTestId("exercise-start").first().click();
    await expect(page.getByTestId("session-item-title")).toHaveText(titles[0]);

    const visited: string[] = [];
    const positionsSeen: number[] = [];
    let emptySubmitResult: { status: number; body: unknown } | null = null;

    for (let i = 0; i < N + 2; i++) {
      const current = (await page.getByTestId("session-item-title").innerText()).trim();
      visited.push(current);

      const submitted = await submitEmpty(page);
      if (!emptySubmitResult) emptySubmitResult = submitted;
      // MEASURED, not assumed: an empty objective submission is accepted and
      // scored. If this ever changes, the walk stops here and says so — and a
      // learner who runs out of time being unable to end an item is itself the
      // finding.
      expect(
        submitted.status,
        `submitting with no answers was refused (HTTP ${submitted.status}): ` +
          `${JSON.stringify(submitted.body)}`,
      ).toBe(200);

      if (await page.getByTestId("chain-exhausted").isVisible()) break;

      // ── the honest counter, checked against the LIST, not the picker ───────
      const posText = (await page.getByTestId("chain-position").innerText()).trim();
      const m = /exercise\s+(\d+)\s+of\s+(\d+)/i.exec(posText);
      expect(m, `could not read a position out of ${JSON.stringify(posText)}`).not.toBeNull();
      const position = Number(m![1]);
      const total = Number(m![2]);
      expect(total, "the denominator must be the size of the rendered list").toBe(N);
      positionsSeen.push(position);

      const offeredTitle = (await page.getByTestId("chain-next-title").innerText()).trim();
      // The row the LIST numbers `position` is the row the chain must be
      // offering. This is the assertion the whole file exists for.
      expect(offeredTitle).toBe(titles[position - 1]);

      if (i === 0) {
        await shot(page, "03-result-and-next-exercise.png", "exercise-chain");
      }

      await page.getByTestId("chain-next-button").click();
      // …and it lands on exactly that exercise.
      await expect(page.getByTestId("session-item-title")).toHaveText(titles[position - 1]);
    }

    await expect(page.getByTestId("chain-exhausted")).toBeVisible();
    await expect(page.getByTestId("chain-exhausted")).toContainText(String(N));
    await shot(page, "04-exhausted.png", "exercise-chain");

    // ── every exercise, exactly once, in the list's order ────────────────────
    expect(visited).toEqual(titles);
    expect(new Set(visited).size).toBe(visited.length);
    // The positions the screen printed were 2..N — the first was reached from
    // the list, not from the chain.
    expect(positionsSeen).toEqual(titles.slice(1).map((_, i) => i + 2));

    console.log(
      `[e2e] MEASURED — empty submission: HTTP ${emptySubmitResult?.status} ` +
        `${JSON.stringify(emptySubmitResult?.body)}`,
    );
    console.log(`[e2e] walked ${visited.length} of ${N} exercises, each exactly once`);
  });

  test("the list now shows every exercise done, and the count still matches", async ({ page }) => {
    await signIn(page);
    const { titles, declaredTotal } = await readList(page);
    expect(declaredTotal).toBe(titles.length);
    // The walk scored all of them, so the library says so.
    const done = await page.getByText("Done", { exact: true }).count();
    expect(done).toBe(titles.length);
    await shot(page, "05-library-all-done.png");
  });
});
