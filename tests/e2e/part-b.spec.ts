/**
 * READING PART B, FULL LENGTH, IN A REAL BROWSER — wide and narrow.
 *
 * The fifteen Reading Part B items were written to the measured 136-155 law and
 * seeded to production on 3 September 2026. Everything proving them until now was
 * a count: gate:length counted words, a snapshot counted inserted rows.
 *
 * ── WHY 430px IS NOT OPTIONAL HERE ──────────────────────────────────────────
 *
 * Part A taught this the hard way. Its bodies were hard-wrapped at about 110
 * characters and the composer renders `whitespace-pre-wrap`, so every authored
 * line wrapped a SECOND time on any narrower container and the paragraphs came
 * out ragged, breaking mid-sentence. At 1360px the defect was invisible.
 *
 * Part B goes through the SAME component — ReadingComposer reads
 * `p.texts ?? p.passages` — so the same defect is possible, and Part B passages
 * have their own paragraph shapes.
 *
 * 🔴 IT WAS NOT POSSIBLE, IT WAS PRESENT. This walk found it on the first item
 * it opened: 9 hard newlines inside a paragraph at 430px, 125 across the fifteen,
 * while the 33 legacy extracts had none. The passages were de-ragged and written
 * to production the same day, without a single word moving, and the assertion
 * that recorded the defect now holds it shut at zero.
 *
 * ── AND IT ANSWERS THE QUESTION ─────────────────────────────────────────────
 *
 * Part B is one extract and one three-option question, so the marking assertion
 * is exact: the key marks 1/1 and shows a tick, and a deliberately chosen wrong
 * option marks 0/1 and prints the model answer. Both the key and the wrong
 * option are read off the payload by seedFixture — nothing here is hand-typed.
 */
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { test, expect, type Page } from "@playwright/test";

type PartBWalk = {
  taskSlug: string;
  title: string;
  passageTail: string;
  question: { id: string; stem: string; correctOptionId: string; wrongOptionId: string };
};
type Fixture = {
  email: string;
  password: string;
  professionSlug: string;
  partB: PartBWalk;
  partBSecond: PartBWalk;
  partBFullLengthTitles: string[];
  partBLegacyTitles: string[];
};

const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));
/** The served-exercise floor from src/instrumentation.ts. Kept as a literal here
 *  rather than imported, because that module connects to a database on import;
 *  scripts/e2e/seed-fixture.mts holds the same number for the same reason. */
const BOOT_FLOOR = 15;

const B = fixture.partB;
const LIBRARY = `/practice/${fixture.professionSlug}/${B.taskSlug}`;
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

/** Open a named exercise from the learner's own list. */
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
 * This is the defect itself, not a proxy for it. The composer renders the body
 * `whitespace-pre-wrap`, so a newline the author left mid-paragraph becomes a
 * line break the browser cannot undo, and on a column narrower than the
 * authoring width the paragraph reads ragged.
 *
 * A blank line is a PARAGRAPH BREAK and is not counted. A line beginning "- " is
 * a bullet, and the newline that ends it is structure, not a wrap — those are
 * counted separately so a list is never mistaken for the defect.
 *
 * The first version of this check counted "short lines that do not end in
 * punctuation" instead. It read 0 on Reading Part B while the source carried 125
 * mid-paragraph newlines, because an authored line of ~110 characters is not
 * short. A check that cannot fail on the defect it names is worse than no check.
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

test.describe("Reading Part B, full length, in a real browser", () => {
  test("the extract renders in full, with no markdown, at 1360px", async ({ page }) => {
    // A non-vacuity guard, not a law: this walk must not run over an empty bank.
    // It used to read toHaveLength(15) and went red the day the bank went to 30 —
    // a test asserting the SIZE of the bank fails every time content is added,
    // which is the opposite of what it is here to check. FLOOR is the number that
    // actually matters (src/instrumentation.ts refuses to boot under it), and
    // scripts/e2e/seed-fixture.mts already hard-fails below it.
    expect(
      fixture.partBFullLengthTitles.length,
      "the full-length Part B items must be seeded, and at or above the boot floor",
    ).toBeGreaterThanOrEqual(BOOT_FLOOR);
    await signIn(page);
    await openByTitle(page, B.title);

    const texts = page.getByTestId("reading-texts");
    await expect(texts).toBeVisible();
    const rendered = (await texts.innerText()).replace(/\s+/g, " ").trim();

    expect(rendered, "the extract does not render to its last words").toContain(
      B.passageTail.replace(/\s+/g, " ").trim(),
    );
    expect(rendered, "a markdown pipe table is showing as raw text").not.toContain("|");
    expect(rendered, "markdown bold markers are showing as raw text").not.toContain("**");

    const words = rendered.split(/\s+/).length;
    expect(words, `the extract rendered only ${words} words`).toBeGreaterThan(120);
    console.log(`[e2e] Part B "${B.title}": ${words} words on screen at 1360px`);
    await shot(page, "30-part-b-extract.png", "reading-texts");
  });

  test("🔴 and it still reads in a 430px column", async ({ page }) => {
    await signIn(page);
    await openByTitle(page, B.title);
    await page.setViewportSize({ width: 430, height: 900 });
    await page.reload();

    const texts = page.getByTestId("reading-texts");
    await expect(texts).toBeVisible();
    const rendered = (await texts.innerText()).replace(/\s+/g, " ").trim();
    expect(rendered, "the extract does not survive a narrow column").toContain(
      B.passageTail.replace(/\s+/g, " ").trim(),
    );
    expect(rendered).not.toContain("|");
    expect(rendered).not.toContain("**");

    const hard = await hardNewlines(page);
    console.log(
      `[e2e] Part B narrow column (430px): ${hard.inParagraph} hard newline(s) inside a ` +
        `paragraph, ${hard.atBullets} at bullet line ends`,
    );
    await shot(page, "30b-part-b-extract-narrow.png", "reading-texts");

    // The passages were hard-wrapped at ~110 characters when they were seeded on
    // 3 September 2026 and this walk found it here: 9 mid-paragraph line breaks on
    // the first item alone, 125 across the fifteen, while the 33 legacy extracts
    // had none. They were de-ragged the same day and written to production, and
    // the assertion that recorded the defect is now the assertion that keeps it
    // shut. Nothing about the words changed: the correction refused to write
    // unless the word count under both tokenisers, the paragraph-break count AND
    // the word SEQUENCE were identical on all fifteen.
    expect(
      hard.inParagraph,
      `${hard.inParagraph} hard newline(s) inside a paragraph: the extract breaks at the ` +
        "authoring width, not at the column",
    ).toBe(0);
    await page.setViewportSize({ width: 1360, height: 900 });
  });

  test("the key marks right, and a wrong option marks wrong", async ({ page }) => {
    await signIn(page);

    // ── the key ─────────────────────────────────────────────────────────────
    await openByTitle(page, B.title);
    await page
      .locator(`input[name="${B.question.id}"][value="${B.question.correctOptionId}"]`)
      .check();
    let waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();

    const points = page.getByText(/\d+ \/ \d+ practice points/);
    await expect(points).toBeVisible();
    const pm = /(\d+)\s*\/\s*(\d+)\s*practice points/i.exec(
      (await points.innerText()).replace(/\s+/g, " "),
    );
    expect(pm, "could not read the points line").not.toBeNull();
    expect(Number(pm![2]), "a Part B item is marked out of one").toBe(1);
    expect(Number(pm![1]), "the item's own key was marked wrong").toBe(1);

    const review = page.getByText(/Answer review · \d+\/\d+ correct/);
    await expect(review).toBeVisible();
    const rm = /Answer review\s*·\s*(\d+)\/(\d+)\s*correct/i.exec(
      (await review.innerText()).replace(/\s+/g, " "),
    );
    expect(rm, "could not read the answer review line").not.toBeNull();
    // The score and the screen must agree — the defect PR #35 closed.
    expect(Number(rm![1]), "the review disagrees with the score").toBe(Number(pm![1]));
    const row = page.locator("li", { hasText: B.question.stem.slice(0, 40) }).first();
    await expect(row).toContainText("✓");
    await expect(row).not.toContainText("Correct:");
    console.log(`[e2e] Part B key: SCORED ${pm![1]}/1 and SHOWN ${rm![1]}/1`);
    await shot(page, "31-part-b-correct.png");

    // ── and a KNOWN-WRONG option on a second item ───────────────────────────
    //
    // 🔴 The first version of this control picked "whichever radio sits second".
    // On the item it landed on, that WAS the key, so it scored 1/1 and proved
    // nothing at all — the marking would have looked identical if every answer
    // were accepted. The wrong option is now read off the payload by seedFixture,
    // and asserted to differ from the key before it is used.
    const S = fixture.partBSecond;
    expect(S.title, "the control needs a second item").not.toBe(B.title);
    expect(S.question.wrongOptionId).not.toBe(S.question.correctOptionId);

    await openByTitle(page, S.title);
    await page.locator(`input[name="${S.question.id}"][value="${S.question.wrongOptionId}"]`).check();
    waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();

    const second = /(\d+)\s*\/\s*(\d+)\s*practice points/i.exec(
      (await page.getByText(/\d+ \/ \d+ practice points/).innerText()).replace(/\s+/g, " "),
    );
    expect(second, "could not read the points line").not.toBeNull();
    expect(Number(second![2])).toBe(1);
    expect(Number(second![1]), "a known-wrong option was marked right").toBe(0);
    const wrongRow = page.locator("li", { hasText: S.question.stem.slice(0, 40) }).first();
    await expect(wrongRow).toContainText("✗");
    // A wrong row shows the learner the model answer.
    await expect(wrongRow).toContainText("Correct:");
    console.log(
      `[e2e] Part B control: a known-wrong option on "${S.title}" SCORED 0/1 and shows the key`,
    );
    await shot(page, "32-part-b-wrong.png");
  });
});
