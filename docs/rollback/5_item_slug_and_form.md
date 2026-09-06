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

The slug and form values on the rows. Nothing else.

### 🔴 An earlier version of this page was wrong about that, and the correction matters

It said a re-backfill after a rollback "would mint NEW slugs for the same items".
That was true of the design as first sketched, and it stopped being true when the
values were minted: `scripts/seed/gen/_apply_slug_and_form.mts` ran ONCE and
wrote 1123 lines of LITERALS into `gen/*.ts`, and
`scripts/backfill-slug-and-form.mts` only COPIES those literals across.

So a re-backfill onto rebuilt columns restores the **identical** slugs. The mint
cannot be re-run to produce different ones — it refuses any module whose items
already carry a slug, and exits 1. Verified: a second `--write` run stops at
`listening_a: 21 item(s) ALREADY carry a slug` and leaves the tree
byte-identical.

Left uncorrected, that sentence would have made a safe, reversible step look
like a one-way door, which is the kind of wrong that gets a rollback refused at
the moment it is needed.

### The hazard that IS real

Rows are matched on `(taskType, profession, title)` — the same key
`scripts/seed/append.ts` dedupes on. **After the rename PR changes 30 titles,
that key no longer finds those rows.** A re-backfill then does not mint anything
and does not guess: it stops with `rows with no source item: N`, by design,
because a row given the wrong item's slug is invisible where a row with no slug
is not.

If these columns are ever dropped *after* the rename has shipped, re-populating
them needs the source and the database to agree about titles again — that is
`check:titles-match-prod`, not a bare re-run.

`title` is untouched by this migration and by the backfill. Measured across the
whole table, before and after the production back-fill of 6 September 2026:

    SHA256 over every (id, title), 1066 rows, in id order
    before  05711842cc14c5f5406c43c296e8c81f80927bf1ecc56bc2f2475ce4edc4f53a
    after   05711842cc14c5f5406c43c296e8c81f80927bf1ecc56bc2f2475ce4edc4f53a

No learner-facing text changed.

## The back-fill as it actually ran — 6 September 2026

```
[backfill-slug] source 1066 item(s) · database 1066 row(s) (634 active, 432 retired)
[backfill-slug] already carry a slug: 0
[backfill-slug] rows with no source item: 0
[backfill-slug] source items with no row: 0
[backfill-slug] to write: 1066 row(s) — 57 of them also get a form
[backfill-slug] wrote 1066 row(s); 0 skipped as already set
[backfill-slug] rows still without a slug: 0
[backfill-slug]   form form-1   19
[backfill-slug]   form form-2   19
[backfill-slug]   form form-3   19
[backfill-slug]   form (none)   1009
```

Run immediately again, against the same production database:

```
[backfill-slug] already carry a slug: 1066
[backfill-slug] to write: 0 row(s)
[backfill-slug] nothing to do. 1066 of 1066 row(s) already carry a slug — the back-fill is complete.
```

Read back afterwards: 1066 rows (unchanged), 1066 distinct slugs and 0
duplicates, 0 rows with a NULL slug, `form` on exactly the 57 rows whose title
carries a form number — 30 active and 27 retired — with the form number
agreeing with the title's own number on all 57, and 0 rows whose stored slug or
form differs from the literal in the seed source.
