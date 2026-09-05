/**
 * 🔴 `npm run db:deploy` — THE ONE COMMAND THAT CHANGES PRODUCTION'S SHAPE.
 *
 * Every hand-run script in scripts/ has demanded `--confirm` AND
 * `ALLOW_PROD_WRITE=1` since 4 September 2026. `db:deploy` did not. It was the
 * gap: the guard covered every script that writes ROWS, and left unguarded the
 * single command that writes the SCHEMA — the one whose blast radius is the
 * whole database rather than a set of rows, and the only one that can drop a
 * column. A stray `npm run db:deploy` needed no more deliberation than a typo.
 *
 * So it goes through the same two conditions as everything else.
 *
 * ── 🔴 WHAT WAS MEASURED BEFORE THIS FILE WAS WRITTEN ───────────────────────
 *
 * The owner asked for a specific measurement first, because the answer decides
 * the design: does anything AUTOMATED run a migration? If CI or Vercel ran one,
 * a flat refusal would break every deploy, and the guard would have to read a
 * CI signal instead. Measured 5 September 2026:
 *
 *   .github/workflows/ci.yml            no migration command
 *   .github/workflows/post-deploy.yml   line 10 MENTIONS it, in a comment
 *   vercel.json                         does not exist
 *   package.json "build"                prisma generate && gate:all && next build
 *   package.json "postinstall"          prisma generate
 *
 * Nothing automated runs a migration. Every `prisma migrate deploy` against
 * production in this repo is a human at a keyboard, so the guard wraps the
 * command directly and refuses without both conditions.
 *
 * 🔴 THE THIRD CASE IS ABSENT ON PURPOSE, NOT BY OVERSIGHT. The owner's
 * instruction covered a third shape — a CI signal present, a human `--confirm`
 * absent — and asked that whatever was decided be WRITTEN rather than left to
 * chance. It is decided by not arising: no automated caller exists to hold that
 * signal. If one is ever added, this comment is the notice that the decision was
 * never made, only postponed, and it has to be made then.
 *
 * ── 🔴 WHAT THIS WRAPPER DELIBERATELY DOES NOT DO ───────────────────────────
 *
 * It does not load `.env.local`, and that omission is load-bearing. There is no
 * `.env` in this repo, and the Prisma CLI does not read `.env.local` — measured:
 * `npx prisma validate` in a bare shell fails to resolve DATABASE_URL. So today
 * `db:deploy` reaches production ONLY when a human supplies the URL in the
 * environment of that command. Importing scripts/load-env.mts here would hand
 * this command the production URL by default: a guard that also widened what it
 * guards, which is worse than no guard. Same reach as before, narrower entry.
 *
 * ── THE E2E WALK IS UNAFFECTED, AND WOULD BE SAFE IF IT WEREN'T ─────────────
 *
 * Two callers run migrations outside this script — scripts/e2e/run.mts:137 and
 * scripts/measure/blank-submit.mts:47 — and both spawn `npx prisma migrate
 * deploy` directly with a THROWAWAY DATABASE_URL in the child's environment.
 * Neither goes through `db:deploy`, so neither changes. And if one were ever
 * routed through here it would still pass: requireProdWrite() returns early for
 * a disposable URL, which is why the walk can run the real retire script against
 * a loopback database without learning to type ALLOW_PROD_WRITE=1.
 *
 *   ALLOW_PROD_WRITE=1 npm run db:deploy -- --confirm
 */
import { spawnSync } from "node:child_process";
import { requireProdWrite } from "./prod-write-guard";

// The remedy is spelled for THIS command. The default line names a `npx tsx`
// invocation, which for db:deploy would be a wrong instruction printed at the
// exact moment someone is looking for the right one.
requireProdWrite("scripts/db-deploy.mts", "ALLOW_PROD_WRITE=1 npm run db:deploy -- --confirm");

// Extra flags are forwarded (--schema, say) so this stays a wrapper rather than
// a narrowing. `--confirm` is ours and is not passed on: prisma would reject it.
const passthrough = process.argv.slice(2).filter((a) => a !== "--confirm");
const cmd = ["npx prisma migrate deploy", ...passthrough].join(" ");

// 🔴 A line that only appears once BOTH conditions are satisfied. The test
// asserts on this rather than on prisma's own output, so the proof is about the
// guard opening and not about whether a database happened to answer.
console.log(`[db:deploy] guard satisfied — running: ${cmd}`);

const r = spawnSync(cmd, { shell: true, stdio: "inherit" });
if (r.error) {
  console.error(`[db:deploy] could not start prisma: ${r.error.message}`);
  process.exit(1);
}
process.exit(r.status ?? 1);
