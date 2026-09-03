/**
 * THE READING PART C RETIRE, WALKED BEFORE IT IS RUN.
 *
 * The same gate every retire in this product opens with:
 *
 *     "load one of the paying customer's existing attempts against an item you
 *      are about to retire, and see it still work — not with --confirm."
 *
 * ── WHAT IS DIFFERENT HERE, AND WHY THE WALK STILL MATTERS ─────────────────
 *
 * Production holds ZERO attempts against the twenty-one legacy Part C articles —
 * measured, not assumed. So unlike Parts A and B there is no customer work to
 * lose. That is a reason to be MORE careful about the claim, not less: "nobody
 * has one" is a fact about today, and the path either survives a retire or it
 * does not. This walk creates both kinds of attempt and proves the path itself,
 * so the answer does not depend on the bank being empty when it was checked.
 *
 * ── AND ONE THING PARTS A AND B COULD NOT SHOW ─────────────────────────────
 *
 * Part C does NOT land on the boot floor. After the retire it stands at 21
 * active against a floor of 15 — the first of the three Reading parts with any
 * margin at all. The walk asserts that number, because "above the floor" is the
 * only state that is not one deactivation away from an outage.
 *
 * Real: the app, the database, the browser, and scripts/retire-fragments.mts
 * itself with --confirm, run against the throwaway server from inside the test.
 * The retire list is the checked-in one.
 */
import { readFileSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";
import { test, expect, type Page } from "@playwright/test";

type Fixture = {
  email: string;
  password: string;
  professionSlug: string;
  partCFullLengthTitles: string[];
  partCLegacyTitles: string[];
};

const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));
const LIBRARY = `/practice/${fixture.professionSlug}/reading-part-c`;
const RETIRE_LIST = "scripts/retire/reading-part-c-legacy.json";
const FLOOR = 15;
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

async function openByTitle(page: Page, title: string): Promise<string> {
  await page.goto(LIBRARY);
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

async function listTitles(page: Page): Promise<string[]> {
  await page.goto(LIBRARY);
  await expect(page.getByTestId("exercise-list-heading")).toBeVisible();
  return (await page.getByTestId("exercise-title").allInnerTexts()).map((t) => t.trim());
}

const kept = { scoredUrl: "", inProgressUrl: "", scoredTitle: "", inProgressTitle: "" };

test.describe.configure({ mode: "serial" });

test.describe("retiring the twenty-one legacy Reading Part C articles", () => {
  test("a learner has work against two of the twenty-one", async ({ page }) => {
    expect(fixture.partCLegacyTitles.length).toBe(21);
    expect(fixture.partCFullLengthTitles.length).toBe(21);
    await signIn(page);

    const titles = await listTitles(page);
    expect(titles.length, "the library must hold the whole Part C bank before the retire").toBe(42);

    kept.scoredTitle = fixture.partCLegacyTitles[0];
    kept.scoredUrl = await openByTitle(page, kept.scoredTitle);
    await page.locator('input[type="radio"]').first().check();
    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    expect((await waiting).status()).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();
    await expect(page.getByText(/\d+ \/ \d+ practice points/)).toBeVisible();

    kept.inProgressTitle = fixture.partCLegacyTitles[1];
    kept.inProgressUrl = await openByTitle(page, kept.inProgressTitle);
    await page.locator('input[type="radio"]').first().check();
    // Deliberately NOT submitted: the learner walks away mid-article.
    await expect(page.getByTestId("submit-answers")).toBeVisible();

    console.log(
      `[e2e] Part C before the retire — scored: ${JSON.stringify(kept.scoredTitle)}; ` +
        `in progress: ${JSON.stringify(kept.inProgressTitle)}`,
    );
  });

  test("the real retire script hides exactly the twenty-one", async () => {
    const url = process.env.E2E_DATABASE_URL;
    expect(url, "the runner must hand this spec the throwaway database URL").toBeTruthy();
    const list = JSON.parse(readFileSync(RETIRE_LIST, "utf8")) as {
      taskType: string;
      title: string;
    }[];
    expect(list, "the retire list must be the checked-in one").toHaveLength(21);
    for (const r of list) expect(r.taskType).toBe("READING_PART_C");
    expect(list.map((r) => r.title).sort()).toEqual([...fixture.partCLegacyTitles].sort());

    const dry = spawnSync(`npx tsx scripts/retire-fragments.mts ${RETIRE_LIST}`, {
      shell: true,
      encoding: "utf8",
      env: { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url },
    });
    expect(dry.status, `dry run failed: ${dry.stderr}`).toBe(0);
    expect(dry.stdout).toContain("DRY RUN");
    expect(dry.stdout).toMatch(/READING_PART_C: 42 active now -> 21 after/);

    const confirmed = spawnSync(`npx tsx scripts/retire-fragments.mts ${RETIRE_LIST} --confirm`, {
      shell: true,
      encoding: "utf8",
      env: { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url },
    });
    expect(confirmed.status, `retire failed: ${confirmed.stderr}`).toBe(0);
    expect(confirmed.stdout).toMatch(/RETIRE complete — 21 row\(s\) updated, 0 deleted/);
    console.log(
      "[e2e] Part C retire: " +
        (confirmed.stdout.match(/\[retire\] READING_PART_C:.*/) ?? ["(no line)"])[0].trim(),
    );
  });

  test("the library offers only the twenty-one full-length articles, ABOVE the floor", async ({
    page,
  }) => {
    await signIn(page);
    const titles = await listTitles(page);
    expect(titles).toHaveLength(21);
    for (const t of fixture.partCLegacyTitles) {
      expect(titles, `${t} is still being offered`).not.toContain(t);
    }
    for (const t of fixture.partCFullLengthTitles) {
      expect(titles, `${t} was taken away with the legacy articles`).toContain(t);
    }
    // The first Reading part to keep a margin. Parts A and B both sit ON 15.
    expect(titles.length, "Part C must stay above the boot floor").toBeGreaterThan(FLOOR);
    console.log(
      `[e2e] Part C library after the retire: ${titles.length} exercise(s), ` +
        `${titles.length - FLOOR} above the floor`,
    );
    await shot(page, "42-part-c-library-after-retire.png", "exercise-list");
  });

  test("🔴 THE SCORED PART C ATTEMPT STILL OPENS", async ({ page }) => {
    await signIn(page);
    await page.goto(kept.scoredUrl);
    const points = page.getByText(/\d+ \/ \d+ practice points/);
    await expect(points).toBeVisible();
    expect((await points.innerText()).replace(/\s+/g, " ")).toContain(kept.scoredTitle);
    await expect(page.getByText(/Answer review · \d+\/\d+ correct/)).toBeVisible();
    console.log("[e2e] Part C scored attempt still opens after its item was retired");
    await shot(page, "43-part-c-scored-after-retire.png");
  });

  test("🔴 THE IN-PROGRESS PART C ATTEMPT STILL OPENS, AND CAN STILL BE FINISHED", async ({
    page,
  }) => {
    await signIn(page);
    await page.goto(kept.inProgressUrl);
    await expect(page.getByTestId("session-item-title")).toHaveText(kept.inProgressTitle);
    await expect(page.getByTestId("reading-texts")).toBeVisible();
    await page.locator('input[type="radio"]').first().check();

    const waiting = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
    await page.getByTestId("submit-answers").click();
    const res = await waiting;
    expect(
      res.status(),
      `a learner could not finish a Part C item retired under them: ${await res.text()}`,
    ).toBe(200);
    await expect(page.getByTestId("exercise-chain")).toBeVisible();
    await expect(page.getByText(/\d+ \/ \d+ practice points/)).toBeVisible();
    console.log("[e2e] Part C in-progress attempt was finished AFTER its item was retired: HTTP 200");
    await shot(page, "44-part-c-in-progress-finished-after-retire.png");
  });

  test("--restore puts all twenty-one back", async ({ page }) => {
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
    expect(back.stdout).toMatch(/RESTORE complete — 21 row\(s\) updated, 0 deleted/);

    await signIn(page);
    expect(await listTitles(page)).toHaveLength(42);
    console.log("[e2e] Part C --restore: the library is back to 42 exercise(s)");
  });
});
