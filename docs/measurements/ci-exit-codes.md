# Does every CI step's failure actually reach CI? — measured 6 September 2026

One gate in `.github/workflows/ci.yml` was printing red assertions and exiting
**0**. This page records the sweep that followed: every step of the workflow was
made to fail on purpose, and its exit code was read.

## The defect that started it

`scripts/measure/blank-submit.mts` ended its failing path with
`process.exitCode = 1`. A deliberately failing test was planted in `tests/db/`:

```
npm run gate:no-tokens-for-nothing   ->  exit 0      DEAD
```

It is its own step in the workflow, so CI had been able to show a green tick
over a red suite — on the gate that exists because empty submissions reached a
paid model.

**Cause.** `embedded-postgres`'s teardown calls `process.exit()` explicitly, and
an explicit exit overrides `process.exitCode`. This is already written down at
the foot of `scripts/e2e/run.mts`, which hit it on 3 September 2026 and fixed it
**for the path that throws**. `blank-submit.mts`'s failing path returns normally,
so it never reached that fix.

**The fix.** Carry the failure out of `main()` as a value and call a real
`process.exit(1)` after the database is down, where nothing can overrule it.

Measured side by side on this branch, one canary, both runners:

| runner | what vitest reported | exit |
| --- | --- | --- |
| the one on `main` | `1 failed \| 18 passed` | **0** |
| the one in this PR | `1 failed \| 18 passed` | **1** |
| this PR's, canary removed | `18 passed` | **0** |

Both directions, because "it went red" on its own proves only half of it. Same
suite result in the first two rows — the only difference is the exit code, which
is the whole defect.

> ⚠️ A first attempt at the clean row read **1** and it was not the fix. The
> Prisma client was still generated from another branch's schema, so the throwaway
> database was missing columns the client asked for. `npx prisma generate` after
> switching branches, and read the reason before believing a red.

## The sweep

Each step was made to fail in the cheapest place that exercises its own runner.
Where a step is a chain, the **last** member was broken, so reaching it proves
every earlier link propagated too.

| step | how it was made to fail | exit | verdict |
| --- | --- | --- | --- |
| `npm ci` | — | — | npm's own exit; no custom runner |
| `npx tsc --noEmit` | a temp file with a type error | 2 | reaches CI |
| `npm run gate:all` | last gate in the chain (`validate-seed`) | 1 | reaches CI |
| `npm run gate:chain` | last member (`gate:e2e-log`) | 1 | reaches CI |
| `npm test` | a failing test file | 1 | reaches CI (clean: 0, 259/259) |
| `npm run report:shape` | — | always 0 | not a gate, by design; the workflow says so |
| `npm run gate:no-tokens-for-nothing` | a failing `tests/db/` test | 0 → **1** | **was dead; fixed here** |
| `npm run test:e2e` | a failing Playwright spec | 1 | reaches CI (40 others passed) |

## Why only three scripts were ever at risk

The override needs something below the script to call `process.exit()`. Only
five scripts in the repo spawn a child process at all —
`e2e/run.mts`, `measure/blank-submit.mts`, `measure/slug-immutable.mts`,
`db-deploy.mts`, `render-audio.mts` — and only the first three boot
`embedded-postgres`. Those three are exactly the population.

All 17 gates behind `gate:all` end with `process.exit(1)` and none uses
`process.exitCode`, so no override path exists there. `gates/words.ts` and
`gates/reading_sets_single_form.ts` carry no `process.exit` at all, but they are
libraries imported by `length.ts` and `accept-lists.ts` — not gates, and nothing
runs them as one.

The remaining `process.exitCode` users are hand-run seed, update and retire
scripts. None is in CI and none spawns a process, so none can lose its code the
same way — but a production-write script that throws and still leaves with 0
tells its caller the write succeeded, so they remain worth converting.

## The rule this leaves behind

> A runner that boots something is a runner that can lose its exit code. End the
> failing path with `process.exit(1)`, and prove it by making the step fail.

The proof is the second half. A gate nobody has watched go red is a gate whose
exit code nobody has measured.
