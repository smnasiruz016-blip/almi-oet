/**
 * READING PART C, FULL LENGTH, IN A REAL BROWSER — wide, narrow, and marked.
 *
 * The twenty-one full-length Reading Part C items replace articles that broke
 * the measured law on three axes at once: 51–405 words against 653–836, two
 * questions in fifteen of them against eight, and THREE options on all 78
 * questions where OET gives four. The option count is the one nothing in the
 * repo measured until gate:distractor's D4 — `gate:length` measured length and
 * D1/D2 measured option LENGTHS, so a three-option question passed every gate.
 *
 * Counting is not seeing. This walk opens one on a screen.
 *
 * ── WHAT IT ASSERTS THAT A COUNT CANNOT ────────────────────────────────────
 *
 *   · an ~800-word article renders in full, to its own last words, at 1360px;
 *   · it still reads in a 430px column — no hard newline inside a paragraph,
 *     the defect that reached production twice today on Parts A and B;
 *   · FOUR radio options are actually on the page, not three. D4 counts them in
 *     the payload; this counts what the learner can click;
 *   · the item's own key marks right and a known-wrong option marks wrong, and
 *     the SCORE and the REVIEW SCREEN agree — the pair that must always be read
 *     off the page together since PR #35.
 *
 * Everything it answers with comes from seedFixture, read off the payload. No
 * key, option id or stem is typed here.
 */
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { test, expect, type Page } from "@playwright/test";

type PartCWalk = {
  taskSlug: string;
  title: string;
  passageTail: string;
  right: { id: string; stem: string; optionId: string };
  wrong: { id: string; stem: string; optionId: string; correctOptionId: string };
};
type Fixture = {
  email: string;
  password: string;
  professionSlug: string;
  partC: PartCWalk;
  partCFullLengthTitles: string[];
  partCLegacyTitles: string[];
};

const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));
const C = fixture.partC;
const LIBRARY = `/practice/${fixture.professionSlug}/${C.taskSlug}`;
const SHOTS = join(process.cwd(), "docs", "e2e");
mkdirSync(SHOTS, { recursive: true });

async function shot(page: Page, name: string, focus?: string) {
  if (focus) await page.locator(`[data-testid="${focus}"]`).scrollIntoViewIfNeeded();
  await page.screenshot({ path: join(SHOTS, name), fullPage: false });
}

async function signIn(page: Page) {
  await page.goto("/login");
  await page.fill('input[name="email"]', fixture.email);
  await page.fill('input[name="password"]', fixture.password);
  await Promise.all([
    page.waitForURL((u) => !u.pathname.startsWith("/login")),
    page.click('button[type="submit"]'),
  ]);
}

async function openByTitle(page: Page, title: string) {
  await page.goto(LIBRARY);
  await expect(page.getByTestId("exercise-list-heading")).toBeVisible();
  const rows = page.getByTestId("exercise-row");
  const n = await rows.count();
  for (let i = 0; i < n; i++) {
    const row = rows.nth(i);
    if ((await row.getByTestId("exercise-title").innerText()).trim() === title) {
      await row.getByTestId("exercise-start").click();
      await expect(page.getByTestId("session-item-title")).toHaveText(title);
      return;
    }
  }
  throw new Error(`the rendered list does not contain ${JSON.stringify(title)}`);
}

/**
 * 🔴 HARD NEWLINES INSIDE A PARAGRAPH, READ OFF THE RENDERED PAGE.
 *
 * The defect itself, not a proxy. The composer renders the body
 * `whitespace-pre-wrap`, so a newline the author left mid-paragraph becomes a
 * break the browser cannot undo, and on a narrow column the text reads ragged.
 * A blank line is a paragraph break and is not counted; a bullet's line end is
 * counted separately so a list is never mistaken for the defect.
 */
async function hardNewlines(page: Page): Promise<{ inParagraph: number; atBullets: number }> {
  return page.getByTestId("reading-texts").evaluate((el) => {
    let inParagraph = 0;
    let atBullets = 0;
    for (const para of Array.from(el.querySelectorAll("p[data-reading-body]"))) {
      const lines = (para.textContent ?? "").split("\n");
      for (let i = 0; i < lines.length - 1; i++) {
        const cur = lines[i].trim();
        const next = lines[i + 1].trim();
        if (cur === "" || next === "") continue;
        if (cur.startsWith("- ") || next.startsWith("- ")) {
          atBullets += 1;
          continue;
        }
        inParagraph += 1;
      }
    }
    return { inParagraph, atBullets };
  });
}

test.describe.configure({ mode: "serial" });

test.describe("Reading Part C, full length, in a real browser", () => {
  test("the article renders in full at 1360px, with four options on the page", async ({ page }) => {
    expect(fixture.partCFullLengthTitles, "the twenty-one must be seeded").toHaveLength(21);
    await signIn(page);
    await openByTitle(page, C.title);

    const texts = page.getByTestId("reading-texts");
    await expect(texts).toBeVisible();
    const rendered = (await texts.innerText()).replace(/\s+/g, " ").trim();
    expect(rendered, "the article does not render to its last words").toContain(
      C.passageTail.replace(/\s+/g, " ").trim(),
    );
    expect(rendered, "a markdown pipe table is showing as raw text").not.toContain("|");
    expect(rendered, "markdown bold markers are showing as raw text").not.toContain("**");

    const words = rendered.split(/\s+/).length;
    expect(words, `the article rendered only ${words} words`).toBeGreaterThan(600);

    // 🔴 FOUR OPTIONS THE LEARNER CAN CLICK. D4 counts them in the payload; this
    // counts them on the page, which is the number that decides whether a guess
    // is worth 25% or 33%.
    const options = await page.locator(`input[type="radio"][name="${C.right.id}"]`).count();
    expect(options, "a Part C question must offer four options").toBe(4);
    const allRadios = await page.locator('input[type="radio"]').count();
    expect(allRadios, "eight questions of four options each").toBe(32);

    console.log(
      `[e2e] Part C "${C.title}": ${words} words on screen, ` +
        `${options} options on ${C.right.id}, ${allRadios} radios in the item`,
    );
    await shot(page, "40-part-c-article.png", "reading-texts");
  });

  test("🔴 and it still reads in a 430px column", async ({ page }) => {
    await signIn(page);
    await openByTitle(page, C.title);
    await page.setViewportSize({ width: 430, height: 900 });
    await page.reload();

    const texts = page.getByTestId("reading-texts");
    await expect(texts).toBeVisible();
    const rendered = (await texts.innerText()).replace(/\s+/g, " ").trim();
    expect(rendered, "the article does not survive a narrow column").toContain(
      C.passageTail.replace(/\s+/g, " ").trim(),
    );
    expect(rendered).not.toContain("|");
    expect(rendered).not.toContain("**");

    const hard = await hardNewlines(page);
    console.log(
      `[e2e] Part C narrow column (430px): ${hard.inParagraph} hard newline(s) inside a ` +
        `paragraph, ${hard.atBullets} at bullet line ends`,
    );
    await shot(page, "40b-part-c-article-narrow.png", "reading-texts");
    expect(
      hard.inParagraph,
      `${hard.inParagraph} hard newline(s) inside a paragraph: the article breaks at the ` +
        "authoring width, not at the column",
    ).toBe(0);
    await page.setViewportSize({ width: 1360, height: 900 });
  });

  test("the key marks right, a known-wrong option marks wrong, and the screen agrees", async ({
    page,
  }) => {
    await signIn(page);
    await openByTitle(page, C.title);

    expect(C.wrong.optionId, "the control must not answer with the key").not.toBe(
      C.wrong.correctOptionId,
    );
    await page.locator(`input[name="${C.right.id}"][value="${C.right.optionId}"]`).check();
    await page.locator(`input[name="${C.wrong.id}"][value="${C.wrong.optionId}"]`).check();

    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();

    // One right, one deliberately wrong, six unanswered.
    const points = page.getByText(/\d+ \/ \d+ practice points/);
    await expect(points).toBeVisible();
    const pm = /(\d+)\s*\/\s*(\d+)\s*practice points/i.exec(
      (await points.innerText()).replace(/\s+/g, " "),
    );
    expect(pm, "could not read the points line").not.toBeNull();
    expect(Number(pm![2]), "a Part C item is marked out of eight").toBe(8);
    expect(Number(pm![1]), "one right answer was given and it must score one").toBe(1);

    const review = page.getByText(/Answer review · \d+\/\d+ correct/);
    await expect(review).toBeVisible();
    const rm = /Answer review\s*·\s*(\d+)\/(\d+)\s*correct/i.exec(
      (await review.innerText()).replace(/\s+/g, " "),
    );
    expect(rm, "could not read the answer review line").not.toBeNull();
    expect(Number(rm![2])).toBe(8);
    expect(
      Number(rm![1]),
      `the review says ${rm![1]}/8 while the score says ${pm![1]}/8 — the two graders have ` +
        "drifted apart again; see src/lib/oet/review.ts",
    ).toBe(Number(pm![1]));

    const rightRow = page.locator("li", { hasText: C.right.stem.slice(0, 40) }).first();
    await expect(rightRow).toContainText("✓");
    await expect(rightRow).not.toContainText("Correct:");
    const wrongRow = page.locator("li", { hasText: C.wrong.stem.slice(0, 40) }).first();
    await expect(wrongRow).toContainText("✗");
    await expect(wrongRow).toContainText("Correct:");

    console.log(
      `[e2e] Part C: SCORED ${pm![1]}/8 and SHOWN ${rm![1]}/8; the key marked right and a ` +
        "known-wrong option marked wrong with the model answer shown",
    );
    await shot(page, "41-part-c-review.png");
  });
});
