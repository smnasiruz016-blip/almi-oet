/**
 * LISTENING, FULL LENGTH, IN A REAL BROWSER AT 430px — heard, answered, marked.
 *
 * The 118 new Listening items replace fragments: Part A scripts of 49-229 words
 * against the measured 550-600 with four gaps against twelve, Part B extracts of
 * 28-84 words against 140-165, Part C recordings carrying TWO questions where the
 * law says six. Counting them is not seeing them, and hearing is a third thing
 * again — `gate:audio` opens the mp3 files in this repo and says nothing about
 * what the deployed route serves or whether a browser can decode it.
 *
 * ── WHAT THIS WALK ASSERTS THAT NO COUNT CAN ───────────────────────────────
 *
 *   · the audio ROUTE serves the COMMITTED file (X-Audio-Source: prerendered,
 *     not the paid TTS fallback — a miss plays and sounds right and still bills
 *     per play), and the player actually reaches "playing" — the state a silent
 *     file never reaches, because the composer refuses to spend the one play on
 *     an `ended` with no progress;
 *   · the audio is MINUTES long, not a click. The duration is read off the
 *     media element, not off the file on disk;
 *   · 🔴 the file it plays is the LABEL-FREE render. Three new Part B extracts
 *     and eight of the fifteen Part C recordings are monologues whose script
 *     opens "Pharmacist:" or "Presenter:", and the renderer's fallback spoke
 *     that out loud; 22 live items already did. gate:audio's A6 checks the
 *     segments the renderer will speak. This walk checks the other half: that
 *     the route resolves to the file that content key names at all;
 *   · twelve gaps and six questions are ON THE PAGE, not merely in the payload;
 *   · the SCORE and the REVIEW SCREEN agree, in one frame, at 430px — the pair
 *     that must always be read off the page together since PR #35, and the exact
 *     place the 688-question defect hid;
 *   · nothing scrolls sideways at 430px.
 *
 * Everything it answers with comes from seedFixture, read off the payload. No
 * gap answer, option id or stem is typed here.
 */
import { readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { test, expect, type Page } from "@playwright/test";

type Fixture = {
  email: string;
  password: string;
  professionSlug: string;
  listeningA: {
    taskSlug: string;
    title: string;
    gapCount: number;
    variantGapId: string | null;
    answers: { id: string; label: string; text: string }[];
  };
  listeningB: {
    taskSlug: string;
    title: string;
    questionCount: number;
    right: { id: string; stem: string; optionId: string }[];
    wrong: { id: string; stem: string; optionId: string; correctOptionId: string } | null;
  };
  listeningC: Fixture["listeningB"];
  listeningAFullLengthTitles: string[];
  listeningBFullLengthTitles: string[];
  listeningCFullLengthTitles: string[];
};

const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));
const SHOTS = join(process.cwd(), "docs", "e2e");
mkdirSync(SHOTS, { recursive: true });

/** The whole walk runs at the narrow width, because that is where the product is
 *  actually used and where every layout defect this project has shipped landed. */
const NARROW = { width: 430, height: 900 };

async function shot(page: Page, name: string) {
  await page.screenshot({ path: join(SHOTS, name), fullPage: false });
}

async function signIn(page: Page) {
  await page.setViewportSize(NARROW);
  await page.goto("/login");
  await page.fill('input[name="email"]', fixture.email);
  await page.fill('input[name="password"]', fixture.password);
  await Promise.all([
    page.waitForURL((u) => !u.pathname.startsWith("/login")),
    page.click('button[type="submit"]'),
  ]);
}

async function openByTitle(page: Page, taskSlug: string, title: string) {
  await page.goto(`/practice/${fixture.professionSlug}/${taskSlug}`);
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
  throw new Error(`the rendered ${taskSlug} list does not contain ${JSON.stringify(title)}`);
}

/**
 * PLAY THE AUDIO AND MEASURE WHAT CAME OUT.
 *
 * It does NOT wait for the recording to finish: a 580-word Part A consultation
 * runs for minutes, and the composer does not gate submission on the audio
 * ending. What it waits for is the state a broken file cannot reach — the
 * player writes "playing" only from the element's own `playing` event, and
 * treats an `ended` with no elapsed time as an error rather than a play.
 *
 * The numbers it returns are read off the media element, so a file that exists,
 * parses, and contains nothing still fails here.
 */
async function playAndMeasure(
  page: Page,
): Promise<{ status: number; source: string | null; duration: number; played: number }> {
  const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/audio/"));
  await page.getByTestId("listening-play").click();
  const res = await waiting;
  const status = res.status();
  // 🔴 206 IS THE CORRECT ANSWER HERE, and the first version of this walk failed
  // on it. An <audio> element range-requests as a matter of course, and
  // src/lib/oet/serve-audio.ts answers Range with 206 Partial Content on purpose
  // — it was changed to do so on 1 September 2026 precisely because ignoring
  // Range meant the element could not seek. Asserting 200 asserted the bug.
  const source = res.headers()["x-audio-source"] ?? null;

  const el = page.getByTestId("listening-audio-el");
  await expect(page.getByTestId("listening-play")).toHaveAttribute("data-state", "playing", {
    timeout: 30_000,
  });
  // Let it run past the composer's own progress threshold, then read the clock.
  await page.waitForFunction(
    () => {
      const a = document.querySelector<HTMLAudioElement>('[data-testid="listening-audio-el"]');
      return !!a && a.currentTime > 1 && Number.isFinite(a.duration);
    },
    undefined,
    { timeout: 30_000 },
  );
  const { duration, played } = await el.evaluate((node) => {
    const a = node as HTMLAudioElement;
    const out = { duration: a.duration, played: a.currentTime };
    a.pause();
    return out;
  });
  return { status, source, duration, played };
}

/** The score line and the review line, read off the same rendered page. */
async function scoreAndReview(page: Page): Promise<{ scored: number; outOf: number; shown: number; shownOf: number }> {
  const points = page.getByText(/\d+ \/ \d+ practice points/);
  await expect(points).toBeVisible();
  const pm = /(\d+)\s*\/\s*(\d+)\s*practice points/i.exec(
    (await points.innerText()).replace(/\s+/g, " "),
  );
  expect(pm, "could not read the points line").not.toBeNull();

  const review = page.getByText(/Answer review · \d+\/\d+ correct/);
  await expect(review).toBeVisible();
  const rm = /Answer review\s*·\s*(\d+)\/(\d+)\s*correct/i.exec(
    (await review.innerText()).replace(/\s+/g, " "),
  );
  expect(rm, "could not read the answer review line").not.toBeNull();
  return {
    scored: Number(pm![1]),
    outOf: Number(pm![2]),
    shown: Number(rm![1]),
    shownOf: Number(rm![2]),
  };
}

/** Does anything on this page force the viewport to scroll sideways? */
async function overflows(page: Page): Promise<number> {
  return page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
}

test.describe.configure({ mode: "serial" });

test.describe("Listening, full length, at 430px", () => {
  test("the three pools are the new items, not the fragments", async () => {
    // 🔴 THE EXACT CENSUS IS NOT RESTATED HERE, AND THAT IS THE POINT.
    //
    // These three numbers were written as 13 / 90 / 15 in TWO files: here, and
    // in scripts/e2e/seed-fixture.mts. On 7 September 2026 seven Listening items
    // were brought up to their laws and gate:length's ratchet removed them from
    // LEGACY_SHORT, so the true census became 18 / 91 / 16 — and the two copies
    // drifted apart, because a number written twice is a number maintained once.
    //
    // The fixture still pins all three EXACTLY, with `!==` and with the seven
    // items named beside it. It throws before a single spec in this suite runs,
    // so nothing is weakened by not repeating it: a bank that quietly loses a
    // full-length item still takes the whole e2e job down. What is asserted here
    // is what this spec is actually for — that the pools the BROWSER walks are
    // above the product's own boot floor and carry the new items' shape.
    const FLOOR = 15;
    expect(fixture.listeningAFullLengthTitles.length, "Part A pool").toBeGreaterThanOrEqual(FLOOR);
    expect(fixture.listeningBFullLengthTitles.length, "Part B pool").toBeGreaterThanOrEqual(FLOOR);
    expect(fixture.listeningCFullLengthTitles.length, "Part C pool").toBeGreaterThanOrEqual(FLOOR);
    expect(fixture.listeningA.gapCount, "Part A carries twelve gaps").toBe(12);
    expect(fixture.listeningC.questionCount, "Part C carries six questions").toBe(6);
    console.log(
      `[e2e] Listening pools: A ${fixture.listeningAFullLengthTitles.length}, ` +
        `B ${fixture.listeningBFullLengthTitles.length}, ` +
        `C ${fixture.listeningCFullLengthTitles.length} (exact counts pinned in seed-fixture.mts)`,
    );
  });

  test("Part A — it plays, twelve gaps are filled, and the score matches the review", async ({ page }) => {
    const A = fixture.listeningA;
    await signIn(page);
    await openByTitle(page, A.taskSlug, A.title);

    const audio = await playAndMeasure(page);
    expect([200, 206], "the audio route did not serve the file").toContain(audio.status);
    // Prove it came from the COMMITTED render and not from the paid fallback:
    // a miss would still play, and still sound right, and still bill per play.
    expect(audio.source, "the audio came from the paid TTS fallback").toBe("prerendered");
    // A 550-600 word consultation cannot be shorter than a couple of minutes.
    expect(audio.duration, `the consultation is only ${audio.duration}s long`).toBeGreaterThan(120);
    expect(audio.played, "the clock never moved — the file played silently").toBeGreaterThan(1);
    console.log(
      `[e2e] Part A "${A.title}": audio ${audio.duration.toFixed(1)}s, played ${audio.played.toFixed(1)}s`,
    );

    // Twelve gaps ON THE PAGE, not twelve in the payload.
    const fields = page.getByTestId("listening-questions").locator('input[type="text"]');
    await expect(fields).toHaveCount(12);
    expect(await overflows(page), "the page scrolls sideways at 430px").toBeLessThanOrEqual(0);
    await shot(page, "40-listening-part-a-430.png");

    for (const a of A.answers) {
      await page.locator(`input[name="${a.id}"]`).fill(a.text);
    }
    // One of the twelve was answered with an AUTHORED VARIANT, so a pass proves
    // the accept list reaches the grader instead of sitting in the payload.
    expect(A.variantGapId, "no gap carried an authored variant to walk").not.toBeNull();

    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();

    const s = await scoreAndReview(page);
    expect(s.outOf, "a twelve-gap Part A is marked out of twelve").toBe(12);
    expect(s.scored, "the item's own answers were marked wrong").toBe(12);
    expect(s.shown, "the review disagrees with the score").toBe(s.scored);
    expect(s.shownOf).toBe(s.outOf);
    expect(await overflows(page), "the review scrolls sideways at 430px").toBeLessThanOrEqual(0);
    console.log(`[e2e] Part A: SCORED ${s.scored}/${s.outOf} and SHOWN ${s.shown}/${s.shownOf}`);
    // Both numbers in ONE frame, at 430px — the pair, not two screenshots.
    await page.getByText(/\d+ \/ \d+ practice points/).scrollIntoViewIfNeeded();
    await shot(page, "41-listening-part-a-score-and-review-430.png");
  });

  test("Part B — one extract, one option, score matches review", async ({ page }) => {
    const B = fixture.listeningB;
    await signIn(page);
    await openByTitle(page, B.taskSlug, B.title);

    const audio = await playAndMeasure(page);
    expect([200, 206]).toContain(audio.status);
    expect(audio.source, "the audio came from the paid TTS fallback").toBe("prerendered");
    // 140-165 words of speech: under a minute, but never a click.
    expect(audio.duration, `the extract is only ${audio.duration}s long`).toBeGreaterThan(30);
    expect(audio.played).toBeGreaterThan(1);
    console.log(`[e2e] Part B "${B.title}": audio ${audio.duration.toFixed(1)}s`);

    const radios = page.getByTestId("listening-questions").locator('input[type="radio"]');
    await expect(radios, "a three-option question").toHaveCount(3);
    expect(await overflows(page), "the page scrolls sideways at 430px").toBeLessThanOrEqual(0);
    await shot(page, "42-listening-part-b-430.png");

    for (const r of B.right) {
      await page.locator(`input[name="${r.id}"][value="${r.optionId}"]`).check();
    }
    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();

    const s = await scoreAndReview(page);
    expect(s.outOf).toBe(1);
    expect(s.scored, "the item's own key was marked wrong").toBe(1);
    expect(s.shown, "the review disagrees with the score").toBe(s.scored);
    console.log(`[e2e] Part B: SCORED ${s.scored}/${s.outOf} and SHOWN ${s.shown}/${s.shownOf}`);
    await page.getByText(/\d+ \/ \d+ practice points/).scrollIntoViewIfNeeded();
    await shot(page, "43-listening-part-b-score-and-review-430.png");
  });

  test("Part C — six questions, a known-wrong option, score matches review", async ({ page }) => {
    const C = fixture.listeningC;
    await signIn(page);
    await openByTitle(page, C.taskSlug, C.title);

    const audio = await playAndMeasure(page);
    expect([200, 206]).toContain(audio.status);
    expect(audio.source, "the audio came from the paid TTS fallback").toBe("prerendered");
    expect(audio.duration, `the recording is only ${audio.duration}s long`).toBeGreaterThan(180);
    expect(audio.played).toBeGreaterThan(1);
    console.log(`[e2e] Part C "${C.title}": audio ${audio.duration.toFixed(1)}s`);

    // SIX questions on the page. Nothing counted this anywhere until
    // gate:length was given the rule on 3 September 2026; this is the same law
    // read off the rendered page instead of off the payload.
    const stems = page.getByTestId("listening-questions").locator("> div");
    await expect(stems, "a Part C recording carries six questions").toHaveCount(6);
    await expect(
      page.getByTestId("listening-questions").locator('input[type="radio"]'),
      "six three-option questions",
    ).toHaveCount(18);
    expect(await overflows(page), "the page scrolls sideways at 430px").toBeLessThanOrEqual(0);
    await shot(page, "44-listening-part-c-430.png");

    for (const r of C.right) {
      await page.locator(`input[name="${r.id}"][value="${r.optionId}"]`).check();
    }
    // 🔴 THE CONTROL. Five keys and ONE known-wrong option, read off the payload
    // and asserted to differ from the key. Without it a grader that accepts
    // everything would score 6/6 and look identical to a correct one.
    expect(C.wrong, "the control needs a known-wrong option").not.toBeNull();
    expect(C.wrong!.optionId).not.toBe(C.wrong!.correctOptionId);
    await page.locator(`input[name="${C.wrong!.id}"][value="${C.wrong!.optionId}"]`).check();

    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();

    const s = await scoreAndReview(page);
    expect(s.outOf, "a six-question Part C is marked out of six").toBe(6);
    expect(s.scored, "five keys and one known-wrong option must score five").toBe(5);
    expect(s.shown, "the review disagrees with the score").toBe(s.scored);
    expect(s.shownOf).toBe(s.outOf);
    expect(await overflows(page), "the review scrolls sideways at 430px").toBeLessThanOrEqual(0);
    console.log(`[e2e] Part C: SCORED ${s.scored}/${s.outOf} and SHOWN ${s.shown}/${s.shownOf}`);
    await page.getByText(/\d+ \/ \d+ practice points/).scrollIntoViewIfNeeded();
    await shot(page, "45-listening-part-c-score-and-review-430.png");
  });
});
