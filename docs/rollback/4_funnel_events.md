# Rollback — `4_funnel_events`

**What it added:** the `FunnelEvent` table, its `(name, createdAt)` index, and its
own foreign key to `User`. Nothing else. No existing table was altered and no
existing row was touched, so **rolling this back cannot affect a single learner,
subscription, attempt or score.**

## Why rolling back is safe here, and would not be for most migrations

This is an `expand` migration: it only ADDS. Nothing in the product read
`FunnelEvent` before it existed, and the code that writes to it fails silently by
design — `track()` cannot throw and cannot block, proved by
`tests/analytics-never-blocks.test.ts`. So a database without this table behaves
exactly as it did before the migration ran: events are simply not recorded.

## Order matters, and it is the reverse of the deploy

The deploy order is **migration first, then the code that reads the table**
(§ "Production ki tarteeb", and the reason is #49 — production could not start a
single exercise for 43 hours because a migration had been merged and deployed but
never applied).

Rolling back is the mirror image:

1. **Deploy the code that does not read the table first.** Revert the release, or
   deploy a build from before `/admin/funnel` existed.
2. **Only then drop the table.**

Dropping first would leave `/admin/funnel` querying a table that is gone.

## The statements

```sql
-- 1 · the foreign key
ALTER TABLE "FunnelEvent" DROP CONSTRAINT IF EXISTS "FunnelEvent_userId_fkey";

-- 2 · the index
DROP INDEX IF EXISTS "FunnelEvent_name_createdAt_idx";

-- 3 · the table, and every event ever recorded in it
DROP TABLE IF EXISTS "FunnelEvent";
```

Then remove the `4_funnel_events` row from `_prisma_migrations` so the repo and
the database agree again:

```sql
DELETE FROM "_prisma_migrations" WHERE migration_name = '4_funnel_events';
```

## 🔴 What is lost, said plainly

Every funnel event ever recorded. There is no backup of this data anywhere else —
it is not derived from anything, so it cannot be rebuilt. Dropping the table
means the drop-off history is gone for good. That is an acceptable price for an
analytics table and would not be for anything else in this schema; do not reach
for this file as a template.

Anything written under `prod-write-guard`'s two conditions (`--confirm` **and**
`ALLOW_PROD_WRITE=1`) should be reversed under the same two.
