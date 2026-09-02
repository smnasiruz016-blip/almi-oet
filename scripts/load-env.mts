/**
 * LOAD THE APP'S OWN ENVIRONMENT, FOR SCRIPTS RUN BY HAND.
 *
 * Import this FIRST in any script that opens a database:
 *
 *     import "./load-env.mjs";
 *     import { PrismaClient } from "@prisma/client";
 *
 * ── WHY IT EXISTS ───────────────────────────────────────────────────────────
 *
 * `next dev`, `next build` and `next start` load `.env.local` themselves. `tsx`
 * does not, and neither does Prisma Client at runtime — only the Prisma CLI
 * reads `.env`. So a script documented as
 *
 *     npx tsx scripts/update-part-a-texts.mts --confirm
 *
 * died with `Environment variable not found: DATABASE_URL`, and the production
 * write of 3 September 2026 had to be run through a throwaway wrapper that read
 * the file and passed the value in. That wrapper is not in the repo, so the
 * documented command did not work for anyone reading it. One import fixes that
 * for every hand-run script, and no future run needs a wrapper.
 *
 * ── 🔴 AN EXPLICITLY-SET VARIABLE STILL WINS. THIS IS LOAD-BEARING. ─────────
 *
 * `scripts/e2e/run.mts` hands its child processes a throwaway `DATABASE_URL` and
 * MEASURES, in a child, that Next's loader does not overwrite it — because
 * `.env.local` in this repo holds the production Neon URL, and a loader that
 * overrode it would point the end-to-end walk, `prisma migrate deploy` and the
 * retire walk at production. `loadEnvConfig` only fills variables that are
 * unset, and tests/scripts-load-env.test.ts proves that in a child process for
 * this exact module rather than trusting the documentation.
 *
 * ── WHY @next/env AND NOT dotenv ───────────────────────────────────────────
 *
 * It is the same loader the app uses, so a script and the running server resolve
 * the same file, in the same order, with the same quoting and expansion rules. A
 * second implementation would be a second answer to "what is DATABASE_URL", and
 * two answers to one question is the family of defect this repo has spent the
 * most time on.
 *
 * The package is CommonJS. Under ESM its API lands on `.default`, so it is
 * resolved off the namespace rather than destructured — an interop change then
 * fails loudly here instead of silently loading nothing.
 */
import * as nextEnv from "@next/env";

type Loader = { loadEnvConfig: (dir: string) => unknown };

const api = ((nextEnv as unknown as { default?: Loader }).default ??
  (nextEnv as unknown as Loader)) as Loader;

if (typeof api.loadEnvConfig !== "function") {
  throw new Error(
    "[env] @next/env exposed no loadEnvConfig — refusing to run a script that " +
      "believes it has loaded the app's environment and has not.",
  );
}

api.loadEnvConfig(process.cwd());
