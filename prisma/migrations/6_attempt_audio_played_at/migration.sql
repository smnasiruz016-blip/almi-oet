-- RR-345 (D1): a mock recording is heard once, on the server. One nullable column.
--
-- EXPAND ONLY. Nullable, no default, no existing column altered: the deployment running now keeps working (it reads
-- nothing new), and every existing attempt reads as "not yet played".
ALTER TABLE "OetAttempt" ADD COLUMN "audioPlayedAt" TIMESTAMP(3);
