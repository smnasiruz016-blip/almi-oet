/**
 * THE RETIRE, WALKED BEFORE IT IS RUN — and the customer's own work, after it.
 *
 * ── THE RULE THIS FILE EXISTS TO SATISFY ────────────────────────────────────
 *
 * Every command that has mentioned the retire of the eighteen legacy Reading
 * Part A items has opened it the same way:
 *
 *     "by loading one of the paying customer's existing attempts against an item
 *      you are about to retire, and seeing it still work — not with --confirm."
 *
 * Production holds six such attempts against those eighteen, from two accounts:
 * three SCORED and three still IN_PROGRESS. Retiring an item under a learner who
 * is halfway through it is the failure this walk is here to rule out, and it is
 * not something reading `getSessionView` can settle — that function takes the
 * session and its attempts with `include: { item: true }` and no `active`
 * filter, which LOOKS safe and is exactly the kind of thing that has been wrong
 * before.
 *
 * ── WHAT IS REAL HERE, AND WHAT IS NOT ──────────────────────────────────────
 *
 * Real: the app, the database, the browser, and scripts/retire-fragments.mts
 * itself with --confirm, run against the throwaway server from inside the test.
 * Not a hand-rolled `UPDATE active = false` — the point is to exercise the
 * script that will be pointed at production, including its floor guard.
 *
 * Not real: the accounts. The fixture learner stands in for the two customers.
 * The rows are the same rows: the fixture seeds READING_PART_A WHOLE, so the
 * bank here is the 33 production holds, and the retire list is the same file.
 *
 * ── ORDER ───────────────────────────────────────────────────────────────────
 *
 * Playwright runs spec files in path order, so this one runs after part-a.spec.
 * That matters: it hides eighteen items, and the walks before it read a library
 * that still has them.
 */
import { readFileSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";
import { test, expect, type Page } from "@playwright/test";

type Fixture = {
  email: string;
  password: string;
  professionSlug: string;
  partAFullLengthTitles: string[];
  partALegacyTitles: string[];
  partBFullLengthTitles: string[];
  partBLegacyTitles: string[];
};

const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));
const LIBRARY = `/practice/${fixture.professionSlug}/reading-part-a`;
const LIBRARY_B = `/practice/${fixture.professionSlug}/reading-part-b`;
const RETIRE_LIST = "scripts/retire/reading-part-a-legacy.json";
const RETIRE_LIST_B = "scripts/retire/reading-part-b-legacy.json";
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

async function openByTitle(page: Page, title: string, library = LIBRARY): Promise<string> {
  await page.goto(library);
  await expect(page.getByTestId("exercise-list-heading")).toBeVisible();
  const rows = page.getByTestId("exercise-row");
  const n = await rows.count();
  for (let i = 0; i < n; i++) {
    const row = rows.nth(i);
    if ((await row.getByTestId("exercise-title").innerText()).trim() === title) {
      await row.getByTestId("exercise-start").click();
      await expect(page.getByTestId("session-item-title")).toHaveText(title);
      return page.url();
    }
  }
  throw new Error(`the rendered list does not contain ${JSON.stringify(title)}`);
}

async function listTitles(page: Page, library = LIBRARY): Promise<string[]> {
  await page.goto(library);
  await expect(page.getByTestId("exercise-list-heading")).toBeVisible();
  return (await page.getByTestId("exercise-title").allInnerTexts()).map((t) => t.trim());
}

/** The learner's own words in the first free-text box on the page. */
async function answerSomething(page: Page): Promise<string> {
  const box = page.locator('input[type="text"]').first();
  await expect(box).toBeVisible();
  const typed = "a deliberate answer";
  await box.fill(typed);
  return typed;
}

const retired = { scoredUrl: "", inProgressUrl: "", scoredTitle: "", inProgressTitle: "" };

test.describe.configure({ mode: "serial" });

test.describe("retiring the eighteen legacy Reading Part A items", () => {
  test("a learner has real work against two of the eighteen — one scored, one in progress", async ({
    page,
  }) => {
    expect(
      fixture.partALegacyTitles.length,
      "there must be legacy items to retire",
    ).toBeGreaterThan(1);
    await signIn(page);

    const titles = await listTitles(page);
    expect(titles.length, "the library must hold the whole Part A bank before the retire").toBe(
      fixture.partAFullLengthTitles.length + fixture.partALegacyTitles.length,
    );

    // ── one SCORED attempt against an item about to be hidden ───────────────
    retired.scoredTitle = fixture.partALegacyTitles[0];
    retired.scoredUrl = await openByTitle(page, retired.scoredTitle);
    await answerSomething(page);
    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();
    await expect(page.getByText(/\d+ \/ \d+ practice points/)).toBeVisible();

    // ── and one left IN PROGRESS, which is the harder case ──────────────────
    retired.inProgressTitle = fixture.partALegacyTitles[1];
    retired.inProgressUrl = await openByTitle(page, retired.inProgressTitle);
    await answerSomething(page);
    // Deliberately NOT submitted. The learner walks away mid-item.
    await expect(page.getByTestId("submit-answers")).toBeVisible();

    console.log(
      `[e2e] before the retire — scored: ${JSON.stringify(retired.scoredTitle)}; ` +
        `in progress: ${JSON.stringify(retired.inProgressTitle)}`,
    );
    await shot(page, "20-before-retire-in-progress.png");
  });

  test("the real retire script hides exactly the eighteen, and refuses nothing else", async () => {
    const url = process.env.E2E_DATABASE_URL;
    expect(url, "the runner must hand this spec the throwaway database URL").toBeTruthy();

    const list = JSON.parse(readFileSync(RETIRE_LIST, "utf8")) as { title: string }[];
    expect(list, "the retire list must be the checked-in one").toHaveLength(18);

    // DRY RUN FIRST, and it must write nothing.
    const dry = spawnSync(`npx tsx scripts/retire-fragments.mts ${RETIRE_LIST}`, {
      shell: true,
      encoding: "utf8",
      env: { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url },
    });
    expect(dry.status, `dry run failed: ${dry.stderr}`).toBe(0);
    expect(dry.stdout).toContain("DRY RUN");
    expect(dry.stdout).toMatch(/READING_PART_A: 33 active now -> 15 after/);

    const confirmed = spawnSync(`npx tsx scripts/retire-fragments.mts ${RETIRE_LIST} --confirm`, {
      shell: true,
      encoding: "utf8",
      env: { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url },
    });
    expect(confirmed.status, `retire failed: ${confirmed.stderr}`).toBe(0);
    expect(confirmed.stdout).toMatch(/RETIRE complete — 18 row\(s\) updated, 0 deleted/);
    console.log(
      "[e2e] retire: " +
        (confirmed.stdout.match(/\[retire\] READING_PART_A:.*/) ?? ["(no line)"])[0].trim(),
    );
  });

  test("the library now offers only the fifteen, and none of the eighteen", async ({ page }) => {
    await signIn(page);
    const titles = await listTitles(page);
    expect(titles).toHaveLength(fixture.partAFullLengthTitles.length);
    for (const t of fixture.partALegacyTitles) {
      expect(titles, `${t} is still being offered`).not.toContain(t);
    }
    for (const t of fixture.partAFullLengthTitles) {
      expect(titles, `${t} was taken away with the legacy items`).toContain(t);
    }
    const declared = Number((await page.getByTestId("exercise-list-total").innerText()).trim());
    expect(declared, "the page's own count must equal the rows it rendered").toBe(titles.length);
    console.log(`[e2e] library after the retire: ${titles.length} exercise(s), all full length`);
    await shot(page, "21-library-after-retire.png", "exercise-list");
  });

  test("🔴 THE SCORED ATTEMPT STILL OPENS, with the learner's own answer on it", async ({
    page,
  }) => {
    await signIn(page);
    await page.goto(retired.scoredUrl);
    // The item is retired. The learner's result must not have gone with it.
    //
    // NOT session-item-title: that testid belongs to the COMPOSER, and a scored
    // step renders the result instead. The first version of this test looked for
    // it, failed, and looked exactly like the product had broken. The title a
    // learner actually sees on a scored step is on the points line.
    const points = page.getByText(/\d+ \/ \d+ practice points/);
    await expect(points).toBeVisible();
    expect((await points.innerText()).replace(/\s+/g, " ")).toContain(retired.scoredTitle);
    const review = page.getByText(/Answer review · \d+\/\d+ correct/);
    await expect(review).toBeVisible();
    await expect(page.getByText("a deliberate answer").first()).toBeVisible();
    console.log(
      `[e2e] scored attempt after the retire: ${(await review.innerText()).replace(/\s+/g, " ").trim()}`,
    );
    await shot(page, "22-scored-attempt-after-retire.png");
  });

  test("🔴 THE IN-PROGRESS ATTEMPT STILL OPENS, AND CAN STILL BE FINISHED", async ({ page }) => {
    await signIn(page);
    await page.goto(retired.inProgressUrl);
    // This one IS the composer, so the testid is the right handle here.
    await expect(page.getByTestId("session-item-title")).toHaveText(retired.inProgressTitle);
    // The texts are still there to read, and the answer boxes still take input.
    await expect(page.getByTestId("reading-texts")).toBeVisible();
    const box = page.locator('input[type="text"]').first();
    await expect(box).toBeVisible();
    await expect(box).toHaveValue("");
    await box.fill("finished after the retire");

    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    const res = await waiting;
    expect(
      res.status(),
      `a learner could not finish an item that was retired under them: ${await res.text()}`,
    ).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();
    await expect(page.getByText(/\d+ \/ \d+ practice points/)).toBeVisible();
    console.log("[e2e] in-progress attempt was finished AFTER its item was retired: HTTP 200");
    await shot(page, "23-in-progress-finished-after-retire.png");
  });

  test("and the chain still has somewhere to send them", async ({ page }) => {
    await signIn(page);
    const titles = await listTitles(page);
    const offered = page.getByTestId("chain-next-title");
    // Reached from the result screen of the item just finished.
    await page.goto(retired.inProgressUrl);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();
    await expect(offered).toBeVisible();
    const next = (await offered.innerText()).trim();
    expect(titles, "the chain is offering an item the library no longer lists").toContain(next);
    expect(fixture.partAFullLengthTitles, "the chain offered a retired item").toContain(next);
    console.log(`[e2e] after the retire the chain offers: ${next}`);
  });

  test("--restore puts all eighteen back, so the retire is reversible", async ({ page }) => {
    const url = process.env.E2E_DATABASE_URL!;
    const back = spawnSync(
      `npx tsx scripts/retire-fragments.mts ${RETIRE_LIST} --restore --confirm`,
      {
        shell: true,
        encoding: "utf8",
        env: { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url },
      },
    );
    expect(back.status, `restore failed: ${back.stderr}`).toBe(0);
    expect(back.stdout).toMatch(/RESTORE complete — 18 row\(s\) updated, 0 deleted/);

    await signIn(page);
    const titles = await listTitles(page);
    expect(titles).toHaveLength(
      fixture.partAFullLengthTitles.length + fixture.partALegacyTitles.length,
    );
    for (const t of fixture.partALegacyTitles) expect(titles).toContain(t);
    console.log(`[e2e] --restore: the library is back to ${titles.length} exercise(s)`);
  });
});


const retiredB = { scoredUrl: "", inProgressUrl: "", scoredTitle: "", inProgressTitle: "" };

test.describe("retiring the thirty-three legacy Reading Part B items", () => {
  test("a learner has real work against two of the thirty-three", async ({ page }) => {
    expect(fixture.partBLegacyTitles.length).toBe(33);
    expect(fixture.partBFullLengthTitles.length).toBe(15);
    await signIn(page);

    const titles = await listTitles(page, LIBRARY_B);
    expect(titles.length, "the library must hold the whole Part B bank before the retire").toBe(48);

    retiredB.scoredTitle = fixture.partBLegacyTitles[0];
    retiredB.scoredUrl = await openByTitle(page, retiredB.scoredTitle, LIBRARY_B);
    // Part B is one three-option question; answering it at all is the point.
    await page.locator('input[type="radio"]').first().check();
    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();
    await expect(page.getByText(/\d+ \/ \d+ practice points/)).toBeVisible();

    retiredB.inProgressTitle = fixture.partBLegacyTitles[1];
    retiredB.inProgressUrl = await openByTitle(page, retiredB.inProgressTitle, LIBRARY_B);
    await page.locator('input[type="radio"]').first().check();
    // Deliberately NOT submitted.
    await expect(page.getByTestId("submit-answers")).toBeVisible();

    console.log(
      `[e2e] Part B before the retire — scored: ${JSON.stringify(retiredB.scoredTitle)}; ` +
        `in progress: ${JSON.stringify(retiredB.inProgressTitle)}`,
    );
  });

  test("the real retire script hides exactly the thirty-three", async () => {
    const url = process.env.E2E_DATABASE_URL;
    expect(url, "the runner must hand this spec the throwaway database URL").toBeTruthy();
    const list = JSON.parse(readFileSync(RETIRE_LIST_B, "utf8")) as { title: string }[];
    expect(list, "the retire list must be the checked-in one").toHaveLength(33);

    const dry = spawnSync(`npx tsx scripts/retire-fragments.mts ${RETIRE_LIST_B}`, {
      shell: true,
      encoding: "utf8",
      env: { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url },
    });
    expect(dry.status, `dry run failed: ${dry.stderr}`).toBe(0);
    expect(dry.stdout).toContain("DRY RUN");
    expect(dry.stdout).toMatch(/READING_PART_B: 48 active now -> 15 after/);

    const confirmed = spawnSync(`npx tsx scripts/retire-fragments.mts ${RETIRE_LIST_B} --confirm`, {
      shell: true,
      encoding: "utf8",
      env: { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url },
    });
    expect(confirmed.status, `retire failed: ${confirmed.stderr}`).toBe(0);
    expect(confirmed.stdout).toMatch(/RETIRE complete — 33 row\(s\) updated, 0 deleted/);
    console.log(
      "[e2e] Part B retire: " +
        (confirmed.stdout.match(/\[retire\] READING_PART_B:.*/) ?? ["(no line)"])[0].trim(),
    );
  });

  test("the library now offers only the fifteen full-length extracts", async ({ page }) => {
    await signIn(page);
    const titles = await listTitles(page, LIBRARY_B);
    expect(titles).toHaveLength(15);
    for (const t of fixture.partBLegacyTitles) {
      expect(titles, `${t} is still being offered`).not.toContain(t);
    }
    for (const t of fixture.partBFullLengthTitles) {
      expect(titles, `${t} was taken away with the legacy items`).toContain(t);
    }
    // 🔴 EXACTLY THE FLOOR. instrumentation.ts refuses to boot below 15 active
    // in any objective part, so after this retire Part B has ZERO margin — the
    // same place Part A landed. The answer is more items, never a lower floor.
    expect(titles.length, "Part B is at the boot floor and must not go under it").toBe(15);
    console.log(`[e2e] Part B library after the retire: ${titles.length} exercise(s), at the floor`);
    await shot(page, "24-part-b-library-after-retire.png", "exercise-list");
  });

  test("🔴 THE SCORED PART B ATTEMPT STILL OPENS", async ({ page }) => {
    await signIn(page);
    await page.goto(retiredB.scoredUrl);
    const points = page.getByText(/\d+ \/ \d+ practice points/);
    await expect(points).toBeVisible();
    expect((await points.innerText()).replace(/\s+/g, " ")).toContain(retiredB.scoredTitle);
    await expect(page.getByText(/Answer review · \d+\/\d+ correct/)).toBeVisible();
    console.log("[e2e] Part B scored attempt still opens after its item was retired");
    await shot(page, "25-part-b-scored-after-retire.png");
  });

  test("🔴 THE IN-PROGRESS PART B ATTEMPT STILL OPENS, AND CAN STILL BE FINISHED", async ({
    page,
  }) => {
    await signIn(page);
    await page.goto(retiredB.inProgressUrl);
    await expect(page.getByTestId("session-item-title")).toHaveText(retiredB.inProgressTitle);
    await expect(page.getByTestId("reading-texts")).toBeVisible();
    await page.locator('input[type="radio"]').first().check();

    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    const res = await waiting;
    expect(
      res.status(),
      `a learner could not finish a Part B item retired under them: ${await res.text()}`,
    ).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();
    await expect(page.getByText(/\d+ \/ \d+ practice points/)).toBeVisible();
    console.log("[e2e] Part B in-progress attempt was finished AFTER its item was retired: HTTP 200");
    await shot(page, "26-part-b-in-progress-finished-after-retire.png");
  });

  test("--restore puts all thirty-three back", async ({ page }) => {
    const url = process.env.E2E_DATABASE_URL!;
    const back = spawnSync(
      `npx tsx scripts/retire-fragments.mts ${RETIRE_LIST_B} --restore --confirm`,
      {
        shell: true,
        encoding: "utf8",
        env: { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url },
      },
    );
    expect(back.status, `restore failed: ${back.stderr}`).toBe(0);
    expect(back.stdout).toMatch(/RESTORE complete — 33 row\(s\) updated, 0 deleted/);

    await signIn(page);
    const titles = await listTitles(page, LIBRARY_B);
    expect(titles).toHaveLength(48);
    console.log(`[e2e] Part B --restore: the library is back to ${titles.length} exercise(s)`);
  });
});

// Keep the runner honest: this file writes nothing outside the throwaway server,
// and the retire lists it uses are the checked-in ones, not ones it invented.
test("the retire list this walk used is the file production will be pointed at", () => {
  const list = JSON.parse(readFileSync(RETIRE_LIST, "utf8")) as {
    taskType: string;
    title: string;
  }[];
  expect(list).toHaveLength(18);
  for (const r of list) expect(r.taskType).toBe("READING_PART_A");
  const titles = list.map((r) => r.title).sort();
  expect(titles).toEqual([...fixture.partALegacyTitles].sort());

  const listB = JSON.parse(readFileSync(RETIRE_LIST_B, "utf8")) as {
    taskType: string;
    title: string;
  }[];
  expect(listB).toHaveLength(33);
  for (const r of listB) expect(r.taskType).toBe("READING_PART_B");
  expect(listB.map((r) => r.title).sort()).toEqual([...fixture.partBLegacyTitles].sort());
});
