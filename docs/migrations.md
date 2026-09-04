# Migrations — the rule, and the outage that wrote it

**Ruled by the owner, 4 September 2026.** Every command that writes a migration
repeats this rule.

---

## What happened first

On 2 September 2026 PR #27 added `OetAttempt.deadlineAt` and a migration for it.
The migration was merged, deployed — and never applied. Production recorded only
`0_init` and `2_reviews`, both from 26 June.

`src/lib/oet/session.ts` passes `deadlineAt` on **every** attempt create, so from
that deploy onwards every "Start" died:

```
P2022  The column `deadlineAt` does not exist in the current database
```

Measured, not argued: the last successful attempt on production was
**1 September 22:37 UTC**, the commit that began writing the column landed
**2 September 03:42 UTC**, and **zero** attempts were created in between. About
**43 hours** in which nobody could start a single exercise. Every gate was green
the whole time, because not one of them opens the database production uses.

---

## 🔴 THE RULE: expand → migrate → contract

> **A migration that removes a column or a table, or changes what one means, is
> never deployed together with the code that depends on that change.**
>
> 1. **Expand.** Add only — a nullable column, a new table, a new value. Old code
>    keeps working against it untouched.
> 2. **Migrate.** Deploy the code that starts using it.
> 3. **Contract.** In a **separate, later** deploy, remove what is now unused.

While a migration is additive-only, a schema that is briefly ahead of the code is
harmless: the old code simply does not use the new column. That is the whole
reason the owner chose to allow migrations inside the production build later —
the one risk that route carries is a destructive migration landing a moment
before the code, and this rule removes it.

`prisma/migrations/3_attempt_deadline/migration.sql` is already written this way
and says so: nullable, no backfill, so every existing attempt keeps
`deadlineAt = NULL`, which the app already treats as "no server deadline".

---

## How it is enforced today

| | |
|---|---|
| **Applying** | `npm run db:deploy` (`prisma migrate deploy`). **`npm run build` does NOT do this** — it is `prisma generate && gate:all && next build`. Nothing yet forces the apply. |
| **Detecting** | `/api/status` compares the migration folder shipped in the deployment against what that deployment's own database reports, and answers **503** with the pending names. |
| **Automatically** | `.github/workflows/post-deploy.yml` runs `npm run check:prod-migrations` on every successful **Production** deployment. No secrets — the endpoint is public. |
| **By hand** | `npm run check:prod-migrations` — run it before any seed, and after any deploy. |

### The order that was chosen, and why

The owner's ruling of 4 September 2026, on four measured options:

* **4 — detect after deploy. NOW.** Free, no secrets, no automatic schema change.
  It turns 43 hours into minutes.
* **2 — `migrate deploy` inside the build, gated to `VERCEL_ENV=production`.**
  Later, in its own change, and **only** under the expand→contract rule above.
* **3 — migrate after the deploy succeeds.** Not needed; it inverts the risk (new
  code, old schema — which is exactly the P2022 above, only shorter).
* **1 — `migrate deploy` in the build, ungated. NEVER.**

🔴 **Why never route 1.** Measured on 3 September 2026:

```
vercel env ls
  DATABASE_URL            Production, Preview, Development
  DATABASE_URL_UNPOOLED   Production, Preview, Development
```

One database across all three scopes. An ungated `migrate deploy` in the build
means **every preview build of every pull request migrates production** — before
review, before merge. Until preview has a database of its own, no automatic
migration path may be ungated.

---

## Before you write a migration

1. Is it additive? If not, split it: expand now, contract in a later deploy.
2. Generate the SQL with `prisma migrate diff`, never by hand.
3. After the deploy: `npm run check:prod-migrations`, and read the number.
4. Before any `seed:prod`: the same check. A seed onto an incomplete schema is
   how a green repository serves a broken product.
