# Rollback — `5_item_slug_and_form`

Adds `OetItem.slug` and `OetItem.form`, both nullable, plus a unique index on
`slug`. Expand-only: no existing column is altered and no row is written.

## The order is the reverse of the deploy

The deploy is: migration first, verify with `npm run check:prod-migrations`,
*then* the code that reads the columns. The rollback reverses it:

1. **Deploy the code that stops reading `slug` and `form` first.** While a
   deployment is still reading them, dropping the columns takes the product down
   — that is #49, when production could not start an exercise for 43 hours.
2. Only then drop them:

```sql
DROP INDEX IF EXISTS "OetItem_slug_key";
ALTER TABLE "OetItem" DROP COLUMN "slug", DROP COLUMN "form";
```

## What is lost

The slug and form values. They are written once and never regenerated, so a
re-backfill after a rollback would mint NEW slugs for the same items — which is
exactly the mutability this design exists to prevent. If these columns are ever
dropped after being populated, treat re-creating them as a content decision for
the owner, not a re-run of the backfill.

`title` is untouched by this migration and by the backfill, so no learner-facing
text changes either way.
