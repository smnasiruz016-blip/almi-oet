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
];
const out = [];
for (const c of CASES) {
  const raw = readFileSync(c.file, "utf8");
  if (!raw.includes(c.from)) throw new Error(`anchor missing: ${c.name}`);
  try {
    writeFileSync(c.file, raw.split(c.from).join(c.to));
    const r = test();
    out.push({ name: c.name, red: r.status !== 0 && (r.stdout + r.stderr).includes(c.fail) });
  } finally { writeFileSync(c.file, raw); }
  if (readFileSync(c.file, "utf8") !== raw) throw new Error(`${c.file} NOT restored`);
}
const g = test();
for (const o of out) console.log(`  [${o.red ? "RED as required" : "STAYED GREEN — BLIND"}] ${o.name}`);
console.log(`  restored: test ${g.status === 0 ? "GREEN" : "NOT GREEN"}`);
const pass = out.every((o) => o.red) && g.status === 0;
console.log(pass ? `\nSABOTAGE PASS — ${out.length}/${out.length} RED` : "\nSABOTAGE FAIL");
process.exitCode = pass ? 0 : 1;
