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
 * 🔴 IT IS NOT POSSIBLE, IT IS PRESENT. This walk found it on the first item it
 * opened: 9 hard newlines inside a paragraph at 430px. Measured across the seed,
 * all fifteen are affected — 125 in total — and the 33 legacy extracts have
 * none. It is recorded below rather than fixed; see the block in the narrow test.
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
    expect(fixture.partBFullLengthTitles, "the fifteen must be seeded").toHaveLength(15);
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

    // 🔴 HANDED BACK, NOT DECIDED HERE — and the assertion is written TO THE DEFECT.
    //
    // The fifteen Part B passages were hard-wrapped at about 110 characters, the
    // same way the Part A bodies were before 3 September. Measured in the seed:
    // ALL FIFTEEN are affected, 7 to 10 mid-paragraph newlines each, 125 in total,
    // longest authored line 108-110 characters. The 33 legacy extracts have ZERO,
    // so this belongs to the new fifteen alone.
    //
    // It is not fixed here because re-wrapping an author's prose is the author's
    // call, and because the Part A correction came back from them as a corrected
    // JSON with every word count proved unmoved — including the one that flattened
    // two bullet lists and had to be repaired. The same care is owed here.
    //
    // ⚠️ WHEN THE PASSAGES ARE RE-WRAPPED THIS TEST FAILS, and whoever does it
    // changes this number to 0 and deletes this block. A test that tolerated any
    // count would let the ragged text outlive its own fix.
    const PENDING_HARD_NEWLINES = 9;
    expect(
      hard.inParagraph,
      hard.inParagraph === 0
        ? "the Part B passages have been re-wrapped — set this to 0 and delete the block above"
        : `${hard.inParagraph} hard newline(s) inside a paragraph, expected the recorded ` +
          `${PENDING_HARD_NEWLINES}`,
    ).toBe(PENDING_HARD_NEWLINES);
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
