# ROLLBACK — `3_attempt_deadline` applied to production, 3 September 2026

Written and read BEFORE the migration was applied, per rule 7 of the master
handoff: on production, one thing at a time, reversible, rollback first.

## What was applied

```sql
ALTER TABLE "OetAttempt" ADD COLUMN "deadlineAt" TIMESTAMP(3);
```

That is the whole of `prisma/migrations/3_attempt_deadline/migration.sql`, and
it is also the entire output of

```
prisma migrate diff --from-url <production> --to-schema-datamodel prisma/schema.prisma --script
```

run against the live production database beforehand — so the migration brings
production exactly to the schema and does nothing else. `migrate status` alone
was not trusted for this: it has said "up to date" on this network before while a
hand-applied migration was missing.

## Why it was applied

Production was recording only two migrations, `0_init` and `2_reviews`, both from
26 June. `3_attempt_deadline` had never run. `src/lib/oet/session.ts:199` passes
`deadlineAt` on EVERY `prisma.oetAttempt.create()`, so every attempt to start any
exercise failed with

```
P2022  The column `deadlineAt` does not exist in the current database
digest 1956175996
```

Measured blast radius: the last successful attempt on production was
**2026-09-01 22:37 UTC**; the commit that started writing the column was
**a3698d5, 2026-09-02 03:42 UTC** (PR #27). **Zero attempts were created in
between** — the product could not start a single exercise for about 43 hours.

## Rollback

```sql
ALTER TABLE "OetAttempt" DROP COLUMN "deadlineAt";
DELETE FROM "_prisma_migrations" WHERE migration_name = '3_attempt_deadline';
```

Safe to run: the column is nullable and the migration carries no backfill, so
every row that exists today holds NULL in it. Dropping it removes no data a
learner produced. The second statement is only needed if the migration is to be
re-applied later; leaving the row would make Prisma consider it already done.

⚠️ Rolling back returns production to the broken state above — no exercise can be
started. It is here for completeness, not as a likely action.
