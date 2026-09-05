-- FunnelEvent — a NEW, EMPTY, append-only table. `expand` in docs/migrations.md:
-- the safest grade, because it adds and touches nothing that already exists.
--
-- Scope, checked against the generated SQL below and not merely intended:
--   · one CREATE TABLE, for a table that does not exist
--   · one CREATE INDEX, on that new table
--   · one ALTER TABLE, on that new table, adding its own foreign key
--   NOT ONE statement alters an existing table, and none touches an existing row.
--
-- ON DELETE SET NULL is the decision this migration turns on. Cascade would let a
-- user deletion rewrite last month's conversion counts; Restrict would make a
-- UK/EU erasure request impossible to honour. SET NULL keeps the count true and
-- lets the person leave.
--
-- Rollback: docs/rollback/4_funnel_events.md

-- CreateTable
CREATE TABLE "FunnelEvent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "props" JSONB,

    CONSTRAINT "FunnelEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FunnelEvent_name_createdAt_idx" ON "FunnelEvent"("name", "createdAt");

-- AddForeignKey
ALTER TABLE "FunnelEvent" ADD CONSTRAINT "FunnelEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
