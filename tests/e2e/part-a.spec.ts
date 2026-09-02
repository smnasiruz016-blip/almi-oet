/**
 * READING PART A, WALKED BY A BROWSER — the corrected full-length texts.
 *
 * ── WHY THIS FILE EXISTS ────────────────────────────────────────────────────
 *
 * On 3 September 2026 the fifteen Reading Part A items were rewritten to the
 * measured law (885–1009 words, the four texts and the twenty question stems
 * counted together) and the corrected bodies were written to production. Every
 * check up to that point was a count: gate:length counted words, a snapshot diff
 * counted changed rows. None of them had ever put the new text on a screen.
 *
 * A word count cannot tell you that a 250-word text renders in full rather than
 * truncated, that a markdown pipe table is not showing as raw pipes, or that a
 * learner's right answer is marked right. This walk does those, in Chromium,
 * against the real app.
 *
 * ── 🔴 WHAT THIS PROVES, AND WHAT IT DOES NOT ───────────────────────────────
 *
 * It runs against the THROWAWAY database, seeded from scripts/seed/gen — never
 * against production, which needs a login that is not ours to use. The bridge
 * between the two is measured separately and stated in the report: every one of
 * the 33 live Reading Part A rows was compared field by field against gen/ after
 * the write, and 0 text bodies differ. So the payload rendered here is the
 * payload production holds. What is proved on production data is the CONTENT;
 * what is proved here is the RENDERING and the MARKING of that same content.
 *
 * ── WHERE THE EXPECTATIONS COME FROM ────────────────────────────────────────
 *
 * The four answers are read out of the seeded payload by seedFixture, not typed
 * here — see partAWalk(). One of them is answered with an AUTHORED VARIANT
 * rather than the question's own answer, which is the only way to prove the
 * accept list reaches the grader instead of merely sitting in the payload.
 *
 * The pool order is read off the rendered list, never from the picker, for the
 * same reason chain.spec.ts does it: importing the picker's answer as the
 * expectation would make the test agree with the bug.
 */
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { test, expect, type Page } from "@playwright/test";

type PartAWalk = {
  taskSlug: string;
  title: string;
  textTails: string[];
  matching: { id: string; optionId: string; stem: string };
  shortAnswer: { id: string; answer: string; stem: string };
  completion: { id: string; answer: string; stem: string };
  variant: { id: string; primary: string; variantAnswer: string; stem: string };
};
type Fixture = {
  email: string;
  password: string;
  professionSlug: string;
  partA: PartAWalk;
  partAFullLengthTitles: string[];
  partALegacyTitles: string[];
};

const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));
const A = fixture.partA;
const LIBRARY = `/practice/${fixture.professionSlug}/${A.taskSlug}`;
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

/** Open the named exercise from the learner's own list. */
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

test.describe.configure({ mode: "serial" });

test.describe("Reading Part A, full length, in a real browser", () => {
  test("all four texts render in full, and no markdown leaks through", async ({ page }) => {
    await signIn(page);
    await openByTitle(page, A.title);

    const texts = page.getByTestId("reading-texts");
    await expect(texts).toBeVisible();
    const rendered = (await texts.innerText()).replace(/\s+/g, " ").trim();

    // FOUR TEXTS, EACH TO ITS LAST WORDS. A truncated or collapsed text fails
    // on its own tail; checking the first words would pass on a text cut in half.
    expect(A.textTails).toHaveLength(4);
    for (const [i, tail] of A.textTails.entries()) {
      expect(rendered, `text ${"ABCD"[i]} does not render to its last words`).toContain(
        tail.replace(/\s+/g, " ").trim(),
      );
    }

    // The teacher's pass of 2 September removed the pipe tables and the bold
    // markers, because the composer renders a plain string and parses no
    // markdown — a leftover would appear on screen exactly as typed.
    expect(rendered, "a markdown pipe table is showing as raw text").not.toContain("|");
    expect(rendered, "markdown bold markers are showing as raw text").not.toContain("**");

    // The whole point of the rewrite: a text a learner has to actually read.
    const words = rendered.split(/\s+/).length;
    expect(words, `the four texts rendered only ${words} words`).toBeGreaterThan(600);
    console.log(`[e2e] Part A "${A.title}": four texts rendered, ${words} words on screen`);

    await shot(page, "10-part-a-texts.png", "reading-texts");

    // 🔴 AND IT MUST STILL READ IN A NARROW COLUMN. The bodies were authored
    // with hard newlines every ~110 characters and the composer preserves what it
    // is given, so on any container narrower than that each authored line wrapped
    // a SECOND time and the paragraphs came out ragged, breaking mid-sentence at
    // the authoring width. 423 of those newlines were removed on 3 September 2026.
    // A wide viewport hides that defect; this is the width that shows it.
    await page.setViewportSize({ width: 430, height: 900 });
    await page.reload();
    const narrow = page.getByTestId("reading-texts");
    await expect(narrow).toBeVisible();
    const narrowText = (await narrow.innerText()).replace(/\s+/g, " ").trim();
    for (const [i, tail] of A.textTails.entries()) {
      expect(narrowText, `text ${"ABCD"[i]} does not survive a narrow column`).toContain(
        tail.replace(/\s+/g, " ").trim(),
      );
    }
    expect(narrowText).not.toContain("|");
    expect(narrowText).not.toContain("**");

    // Every LINE the browser actually laid out. A hard newline the author left in
    // shows up here as a short line in the middle of a paragraph; wrapping done by
    // the browser fills the column.
    const laidOut: string[] = await narrow.evaluate((el) => {
      const out: string[] = [];
      // ONLY the body paragraphs. The composer marks each one with
      // data-reading-body; the heading beside it is its own <p> and is
      // legitimately a short line.
      for (const para of Array.from(el.querySelectorAll("p[data-reading-body]"))) {
        for (const raw of (para.textContent ?? "").split("\n")) {
          const t = raw.trim();
          if (t) out.push(t);
        }
      }
      return out;
    });
    // A bullet is a legitimately short line; a bullet holding a second "- " is the
    // flattened list this walk exists to catch.
    const bullets = laidOut.filter((l) => l.startsWith("- "));
    expect(bullets.length, "the two bullet lists must still be bullet lists").toBeGreaterThan(2);
    for (const b of bullets) {
      expect(b.slice(2), `a bullet list ran together onto one line: ${b.slice(0, 80)}`).not.toMatch(
        / - /,
      );
    }
    // No source line may be a mid-paragraph fragment any more.
    const fragments = laidOut.filter((l) => !l.startsWith("- ") && l.length < 60 && !/[.:;?]$/.test(l));
    expect(
      fragments,
      `${fragments.length} paragraph line(s) still break at the authoring width, not the column`,
    ).toEqual([]);

    console.log(
      `[e2e] narrow column (430px): ${laidOut.length} laid-out line(s), ` +
        `${bullets.length} bullet(s), 0 mid-paragraph fragments`,
    );
    await shot(page, "10b-part-a-texts-narrow.png", "reading-texts");
    await page.setViewportSize({ width: 1360, height: 900 });
  });

  test("a matching, a short answer, a sentence completion and a VARIANT are all marked right, and the score and the screen agree", async ({
    page,
  }) => {
    await signIn(page);
    await openByTitle(page, A.title);

    // Every question kind the item has, answered once.
    await page.locator(`input[name="${A.matching.id}"][value="${A.matching.optionId}"]`).check();
    await page.locator(`input[name="${A.shortAnswer.id}"]`).fill(A.shortAnswer.answer);
    await page.locator(`input[name="${A.completion.id}"]`).fill(A.completion.answer);
    // 🔴 NOT the primary answer. If the accept list is not reaching the grader
    // this is the assertion that fails, and it fails alone.
    expect(A.variant.variantAnswer).not.toBe(A.variant.primary);
    await page.locator(`input[name="${A.variant.id}"]`).fill(A.variant.variantAnswer);

    await shot(page, "11-part-a-answered.png");

    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    const res = await waiting;
    expect(res.status(), `submit was refused: ${await res.text()}`).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();

    // ── THE SCORE AND THE SCREEN, READ SEPARATELY, MUST AGREE ───────────
    //
    // These are two different lines, written by two different callers:
    //
    //     4 / 20 practice points          ← markObjective, the score that is stored
    //     Answer review · 4/20 correct     ← buildObjectiveReview, what the learner reads
    //
    // On 3 September 2026 they read 4 and 3. review.ts owned its own comparison
    // — trim, lowercase, collapse spaces — against `q.answer` alone, so it never
    // saw `variants` or the accept-list overlay: 688 of the bank's 882 accepted
    // answers were SCORED RIGHT AND SHOWN WRONG. That is worse than a wrong
    // score, because it teaches the mistake.
    //
    // review.ts now asks isAnswerCorrect() on the graders' own key. This test
    // reads BOTH numbers off the page and requires them to match — asserting
    // only one of them is how the two were allowed to drift apart.
    const points = page.getByText(/\d+ \/ \d+ practice points/);
    await expect(points).toBeVisible();
    const pText = (await points.innerText()).replace(/\s+/g, " ").trim();
    const pm = /(\d+)\s*\/\s*(\d+)\s*practice points/i.exec(pText);
    expect(pm, `could not read the points line: ${JSON.stringify(pText)}`).not.toBeNull();
    expect(Number(pm![2]), "the item must be marked out of twenty").toBe(20);
    expect(
      Number(pm![1]),
      "four answers were given and every one of them is right, so four must be SCORED right",
    ).toBe(4);

    const review = page.getByText(/Answer review · \d+\/\d+ correct/);
    await expect(review).toBeVisible();
    // innerText keeps the element's own line breaks and the heading is
    // CSS-uppercased; getByText normalises both, which is how a strict regex
    // read null on a line the locator could plainly see.
    const reviewText = (await review.innerText()).replace(/\s+/g, " ").trim();
    const m = /Answer review\s*·\s*(\d+)\/(\d+)\s*correct/i.exec(reviewText);
    expect(m, `could not read the answer review line: ${JSON.stringify(reviewText)}`).not.toBeNull();
    expect(Number(m![2])).toBe(20);
    expect(
      Number(m![1]),
      `the review screen says ${m![1]}/20 while the score says ${pm![1]}/20 — the two ` +
        "graders have drifted apart again; see src/lib/oet/review.ts",
    ).toBe(Number(pm![1]));
    expect(Number(m![1]), "and both of them must be four").toBe(4);

    // ── EVERY ONE OF THE FOUR, INCLUDING THE VARIANT ──────────────
    for (const q of [A.matching, A.shortAnswer, A.completion, A.variant]) {
      const row = page.locator("li", { hasText: q.stem.slice(0, 40) }).first();
      await expect(row, `no result row for ${JSON.stringify(q.stem.slice(0, 40))}`).toBeVisible();
      await expect(row, `${q.id} was not shown correct`).toContainText("✓");
      // A wrong row prints "Correct: <the key>". A right one never does.
      await expect(row).not.toContainText("Correct:");
    }
    // 🔴 The variant row is the one this whole fix is about: the learner typed a
    // wording that is not the key, and must be shown their own words with a tick.
    const variantRow = page.locator("li", { hasText: A.variant.stem.slice(0, 40) }).first();
    await expect(variantRow).toContainText(A.variant.variantAnswer);
    await expect(variantRow, "the variant is shown wrong again").not.toContainText("✗");

    console.log(
      `[e2e] MEASURED — SCORED 4/20 and SHOWN 4/20. Answered ` +
        `${JSON.stringify(A.variant.variantAnswer)} where the key is ` +
        `${JSON.stringify(A.variant.primary)}: accepted by the grader AND shown ` +
        `correct on the review screen.`,
    );
    // Frame the evidence: the points line and the review rows, not the footer
    // a plain viewport shot would find at the bottom of a long result page.
    await points.scrollIntoViewIfNeeded();
    await shot(page, "12-part-a-review.png");
    await variantRow.scrollIntoViewIfNeeded();
    await shot(page, "12b-part-a-variant-accepted.png");
  });

  test("the chain offers a different full-length item and lands on it", async ({ page }) => {
    await signIn(page);

    await page.goto(LIBRARY);
    const titles = (await page.getByTestId("exercise-title").allInnerTexts()).map((t) => t.trim());
    const declaredTotal = Number((await page.getByTestId("exercise-list-total").innerText()).trim());
    expect(declaredTotal, "the page's own count must equal the rows it rendered").toBe(
      titles.length,
    );
    expect(titles, "the walked item must be in the learner's own list").toContain(A.title);

    // 🔴 A FULL-LENGTH ITEM, CHOSEN ON PURPOSE. The library now holds the
    // legacy Reading Part A items too, the way production does until the retire
    // runs. "the first row that is not A.title" would often be one of them, and
    // the word count below would then fail for the right reason on the wrong item.
    const full = fixture.partAFullLengthTitles.filter((t) => t !== A.title);
    expect(full.length, "there must be another full-length item to move on to").toBeGreaterThan(0);
    const next = titles.find((t) => full.includes(t))!;
    expect(next, "the rendered list must contain another full-length item").toBeTruthy();
    await openByTitle(page, next);
    const started = (await page.getByTestId("session-item-title").innerText()).trim();

    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();

    const offered = (await page.getByTestId("chain-next-title").innerText()).trim();
    const posText = (await page.getByTestId("chain-position").innerText()).trim();
    const pm = /exercise\s+(\d+)\s+of\s+(\d+)/i.exec(posText);
    expect(pm, `could not read a position out of ${JSON.stringify(posText)}`).not.toBeNull();
    expect(Number(pm![2]), "the denominator must be the size of the rendered list").toBe(
      titles.length,
    );
    // The row the LIST numbers `position` is the row the chain must be offering.
    expect(offered).toBe(titles[Number(pm![1]) - 1]);
    expect(offered, "the chain must not offer an item just scored").not.toBe(started);
    expect(offered).not.toBe(A.title);
    // The chain picks by its own rule and the pool still holds the legacy items,
    // so what it offers may be a short one. That is not a defect today — it is
    // exactly what the retire is for — so the length assertion applies only when a
    // full-length item was offered, and the log says which it saw either way.
    const offeredIsFull = fixture.partAFullLengthTitles.includes(offered);

    // The chain block lives on the RESULT screen; capture it before pressing on,
    // because the page it lands on does not have it.
    await shot(page, "13-part-a-chain.png", "exercise-chain");
    await page.getByTestId("chain-next-button").click();
    await expect(page.getByTestId("session-item-title")).toHaveText(offered);
    const words = (await page.getByTestId("reading-texts").innerText()).split(/\s+/).length;
    if (offeredIsFull) {
      expect(words, `a full-length item rendered only ${words} words`).toBeGreaterThan(600);
    }

    console.log(
      `[e2e] chain: ${started} -> ${offered} ` +
        `(${offeredIsFull ? "full length" : "LEGACY, still in the pool"}, ${words} words on screen)`,
    );
    await shot(page, "14-part-a-next-item.png");
  });
});
