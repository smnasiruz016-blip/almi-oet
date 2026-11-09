// RR-397 · AlmiOET's share of the network's $1/day free-AI budget. Pure functions + a source read only: no database, no Stripe,
// no AI, no env. (free-ai-budget.ts imports the prisma client; constructing it never connects, and only the pure parts are called.)
// Run: npx tsx scripts/verify-free-ai-budget.ts
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
let failed = 0;
const t = async (name: string, fn: () => unknown | Promise<unknown>) => {
  try { await fn(); console.log(`  PASS ${name}`); } catch (e) { failed++; console.log(`  FAIL ${name}\n       ${(e as Error).message.split("\n")[0]}`); }
};
const HOUR = 3_600_000, DAY = 24 * HOUR;

(async () => {
  const budget = await import(pathToFileURL(join(ROOT, "src/lib/billing/free-ai-budget.ts")).href);
  const now = Date.UTC(2026, 10, 8, 15, 30);

  await t("the budget is AlmiOET's share: 350 ledger units ($0.035) per UTC day", () => {
    assert.equal(budget.FREE_AI_DAILY_BUDGET_UNITS, 350);
  });
  await t("freeAiBudgetLeft: under the budget → allowed; at or over it → stopped", () => {
    assert.equal(budget.freeAiBudgetLeft(0), true);
    assert.equal(budget.freeAiBudgetLeft(349), true);
    assert.equal(budget.freeAiBudgetLeft(350), false);
    assert.equal(budget.freeAiBudgetLeft(5000), false);
  });
  await t("sumFreeSpend counts only free (taste) accounts: never a subscriber, a card trial or a comp", () => {
    const users = [
      { id: "taste", createdAt: new Date(now - HOUR), subscriptionStatus: null, stripeSubscriptionId: null, compProUntil: null },
      { id: "paid", createdAt: new Date(now - 90 * DAY), subscriptionStatus: "active", stripeSubscriptionId: "sub_a", compProUntil: null },
      { id: "trial", createdAt: new Date(now - 3 * DAY), subscriptionStatus: "trialing", stripeSubscriptionId: "sub_t", compProUntil: null },
      { id: "comp", createdAt: new Date(now - 10 * DAY), subscriptionStatus: null, stripeSubscriptionId: null, compProUntil: new Date(now + DAY) },
    ];
    const rows = [
      { userId: "taste", costCents: 120 }, { userId: "taste", costCents: 80 },
      { userId: "paid", costCents: 900 }, { userId: "trial", costCents: 700 }, { userId: "comp", costCents: 500 },
      { userId: null, costCents: 1000 },
    ];
    assert.equal(budget.sumFreeSpend(rows, users), 200);
  });
  await t("today's free spend over the budget stops the next free scoring", () => {
    const users = [{ id: "a", createdAt: new Date(now - HOUR), subscriptionStatus: null, stripeSubscriptionId: null, compProUntil: null }];
    assert.equal(budget.freeAiBudgetLeft(budget.sumFreeSpend([{ userId: "a", costCents: 200 }], users)), true);
    assert.equal(budget.freeAiBudgetLeft(budget.sumFreeSpend([{ userId: "a", costCents: 200 }, { userId: "a", costCents: 150 }], users)), false);
  });
  await t("the day is the UTC day", () => {
    assert.equal(budget.startOfUtcDay(now).toISOString(), "2026-11-08T00:00:00.000Z");
  });
  await t("the busy message is honest and offers the unlock", () => {
    assert.match(budget.FREE_AI_BUSY_MESSAGE, /busy today/i);
    assert.match(budget.FREE_AI_BUSY_MESSAGE, /tomorrow/i);
  });
  await t("the submit route asks the budget for an unpaid taste learner's AI task, before any transcription or grading", () => {
    const s = readFileSync(join(ROOT, "src/app/api/oet/submit/route.ts"), "utf8").replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "");
    const at = s.search(/if \(!paid && tasteOk && handler\.mode === "AI" && !\(await freeAiAllowedToday\(\)\)\) \{\s*return NextResponse\.json\(\s*\{[^}]*FREE_AI_BUSY_MESSAGE/);
    assert.ok(at > 0, "budget check not found in /api/oet/submit");
    const ai = s.search(/transcribeAudio\(|\.grade\(|checkBeforeGrading\(/);
    assert.ok(ai > at, "the budget check must come before the first AI call");
  });
  // RR-399 A3: the taste's one AI-scored Writing / Speaking is reserved atomically (FreeAiUse), not only counted
  await t("RR-399: the submit route reserves the taste's AI use (claimFreeAi) before the first AI call, and releases it on failure", () => {
    const s = readFileSync(join(ROOT, "src/app/api/oet/submit/route.ts"), "utf8").replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "");
    const claim = s.search(/if \(!paid && tasteOk && handler\.mode === "AI" && tasteAiKind\) \{\s*const claim = await claimFreeAi\(user\.id, tasteAiKind\);/);
    assert.ok(claim > 0, "claimFreeAi( not found for an unpaid taste learner's AI task in /api/oet/submit");
    const ai = s.search(/transcribeAudio\(|handler\.run\(/);
    assert.ok(ai > claim, "the claim must come before the first AI call");
    assert.match(s, /claim === "USED"\) \{[\s\S]{0,400}status: 402/, "a USED claim must refuse with 402");
    assert.ok((s.match(/await releaseTaste\(\);/g) ?? []).length >= 3, "transcription, substance and scoring failures must release the taste");
  });
  await t("RR-399: schema.prisma has model FreeAiUse with @@unique([userId, kind])", () => {
    const schema = readFileSync(join(ROOT, "prisma/schema.prisma"), "utf8");
    const model = (/model FreeAiUse \{[\s\S]*?\n\}/.exec(schema) ?? [""])[0];
    assert.match(model, /@@unique\(\[userId, kind\]\)/);
  });

  console.log(failed ? `\nFREE-AI BUDGET TEST FAIL (${failed})` : "\nFREE-AI BUDGET TEST PASS");
  process.exitCode = failed ? 1 : 0;
})();
