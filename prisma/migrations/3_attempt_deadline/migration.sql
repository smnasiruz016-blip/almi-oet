-- A server-side clock for a timed attempt.
--
-- Generated offline with:
--   npx prisma migrate diff --from-schema-datamodel <schema before> \
--       --to-schema-datamodel prisma/schema.prisma --script
-- so the SQL is the engine's own, not hand-written. No database was contacted.
--
-- Nullable and with no backfill, deliberately: every attempt that exists today
-- keeps deadlineAt = NULL, which the app treats as "no server deadline" — the
-- behaviour those attempts already had. Nobody mid-exercise is given a deadline
-- retroactively.

-- AlterTable
ALTER TABLE "OetAttempt" ADD COLUMN     "deadlineAt" TIMESTAMP(3);
