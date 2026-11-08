// RR-397 · the free-AI budget test must turn RED when the budget is broken, and GREEN when restored (each file restored byte-for-byte).
// Run: node scripts/sabotage-free-ai-budget.mjs   (needs the repo's deps for tsx)
import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const BUDGET = "src/lib/billing/free-ai-budget.ts";
const ROUTE = "src/app/api/oet/submit/route.ts";
const test = () => spawnSync(process.platform === "win32" ? "npx.cmd tsx scripts/verify-free-ai-budget.ts" : "npx tsx scripts/verify-free-ai-budget.ts", { encoding: "utf8", shell: true });
const CASES = [
  { name: "the daily cap is switched off", file: BUDGET, from: "return spentUnitsToday < FREE_AI_DAILY_BUDGET_UNITS;", to: "return spentUnitsToday >= 0;", fail: "FAIL freeAiBudgetLeft" },
  { name: "the budget is raised past AlmiOET's share", file: BUDGET, from: "export const FREE_AI_DAILY_BUDGET_UNITS = 350;", to: "export const FREE_AI_DAILY_BUDGET_UNITS = 5000;", fail: "FAIL the budget is AlmiOET's share" },
  { name: "paying users' spend is counted against the free budget", file: BUDGET, from: "r.userId && free.has(r.userId) ? r.costCents : 0", to: "r.userId ? r.costCents : 0", fail: "FAIL sumFreeSpend counts only free" },
  { name: "the submit route stops asking the budget", file: ROUTE, from: "!(await freeAiAllowedToday())", to: "!(await Promise.resolve(true))", fail: "FAIL the submit route asks the budget" },
  /* RR-399 A3: the taste's AI use is reserved atomically */
  { name: "RR-399: a second claim at the same moment is also RESERVED", file: "src/lib/billing/free-ai-claim.ts", from: 'if (isUniqueViolation(e)) return "USED";', to: 'if (isUniqueViolation(e)) return "RESERVED";', run: () => claimTest(), fail: "FAIL two requests at the same moment" },
  { name: "RR-399: the submit route stops claiming (count only, the race is back)", file: ROUTE, from: "await claimFreeAi(user.id, tasteAiKind)", to: '("UNAVAILABLE" as string)', fail: "FAIL RR-399: the submit route reserves the taste's AI use" },
  { name: "RR-399: the same, seen by the route test (two submits at once both scored)", file: ROUTE, from: "await claimFreeAi(user.id, tasteAiKind)", to: '("UNAVAILABLE" as string)', run: () => routeTest(), fail: "two submits at the same moment" },
];
const routeTest = () => spawnSync(process.platform === "win32" ? "npx.cmd vitest run tests/taste-claim-atomic.test.ts" : "npx vitest run tests/taste-claim-atomic.test.ts", { encoding: "utf8", shell: true });
const claimTest = () => spawnSync(process.platform === "win32" ? "npx.cmd tsx scripts/verify-free-ai-claim.ts" : "npx tsx scripts/verify-free-ai-claim.ts", { encoding: "utf8", shell: true });
const out = [];
for (const c of CASES) {
  const raw = readFileSync(c.file, "utf8");
  if (!raw.includes(c.from)) throw new Error(`anchor missing: ${c.name}`);
  try {
    writeFileSync(c.file, raw.split(c.from).join(c.to));
    const r = (c.run ?? test)();
    out.push({ name: c.name, red: r.status !== 0 && (r.stdout + r.stderr).includes(c.fail) });
  } finally { writeFileSync(c.file, raw); }
  if (readFileSync(c.file, "utf8") !== raw) throw new Error(`${c.file} NOT restored`);
}
const g = test(), ct = claimTest(), rt = routeTest();
for (const o of out) console.log(`  [${o.red ? "RED as required" : "STAYED GREEN — BLIND"}] ${o.name}`);
console.log(`  restored: test ${g.status === 0 ? "GREEN" : "NOT GREEN"}, claim test ${ct.status === 0 ? "GREEN" : "NOT GREEN"}, route test ${rt.status === 0 ? "GREEN" : "NOT GREEN"}`);
const pass = out.every((o) => o.red) && g.status === 0 && ct.status === 0 && rt.status === 0;
console.log(pass ? `\nSABOTAGE PASS — ${out.length}/${out.length} RED` : "\nSABOTAGE FAIL");
process.exitCode = pass ? 0 : 1;
