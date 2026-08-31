-- AlmiOET — set Speaking prepSeconds 60 -> 120 in PRODUCTION.
--
-- NOT RUN BY ANY TOOL. Nasir triggers this by hand. It is deliberately not wired
-- into any npm script, and must never be: `npm run build` is banned in this repo
-- precisely because it reaches production, and this file is exactly the kind of
-- thing that must not ride along with a deploy.
--
-- ── WHY A SQL FILE AND NOT A SEED CHANGE ────────────────────────────────────
-- scripts/seed/append.ts is INSERT-ONLY. It dedupes on (taskType, profession,
-- title) and skips anything already present — it NEVER UPDATES. So changing the
-- seed source alone does nothing to the 180 rows already in production. The repo
-- would say 120 while every learner still got 60, which is worse than the
-- original defect because it looks fixed.
--
-- The seed source change and this file are two halves of one fix. Land both or
-- neither.
--
-- ── THE DEFECT ──────────────────────────────────────────────────────────────
-- Every Speaking item shipped with prepSeconds = 60. OET's own Speaking page
-- states candidates get "2-3 minutes to prepare for each" role-play:
--   https://occupationalenglishtest.org/test-information/speaking/
-- Verified by Nasir's dated re-read on 2026-08-31; the site answers 403 to
-- automated fetches, so this was not machine-retrieved.
--
-- 120 is chosen over 180 because OET publishes a RANGE: 120 sits inside it and is
-- a condition a learner may actually face on the day, where 180 would train only
-- for the easiest case. 60 was wrong because it sat outside the range entirely.
--
-- ── MEASURED AGAINST PRODUCTION, 2026-08-31 (read-only) ─────────────────────
--   SPEAKING_ROLEPLAY rows            180   (180 active, 0 inactive)
--   ...with prepSeconds = 60          180   <- every one
--   ...not matching (left untouched)    0
--   non-SPEAKING rows with prepSeconds  0
--   payload column type              jsonb   (so jsonb_set is valid; on `json` it is not)
--
-- Expect UPDATE 180. Any other number means production moved since it was
-- measured — stop and re-measure rather than proceeding.

BEGIN;

-- Before. Expect exactly one row: 60 | 180
SELECT payload->>'prepSeconds' AS prep_seconds, COUNT(*) AS rows
FROM "OetItem"
WHERE "taskType" = 'SPEAKING_ROLEPLAY'
GROUP BY 1
ORDER BY 2 DESC;

-- The write. create_missing = false, so a row that somehow lacks the key is left
-- alone rather than having one invented for it.
UPDATE "OetItem"
SET payload = jsonb_set(payload, '{prepSeconds}', '120'::jsonb, false)
WHERE "taskType" = 'SPEAKING_ROLEPLAY'
  AND payload->>'prepSeconds' = '60';

-- After. Expect exactly one row: 120 | 180
SELECT payload->>'prepSeconds' AS prep_seconds, COUNT(*) AS rows
FROM "OetItem"
WHERE "taskType" = 'SPEAKING_ROLEPLAY'
GROUP BY 1
ORDER BY 2 DESC;

-- Read both result sets before committing. If the "after" is not 120 | 180,
-- ROLLBACK instead.
COMMIT;

-- NOTE ON jsonb KEY ORDER: jsonb does not preserve authored key order, so rows
-- rewritten here may serialise their payload keys in a different order than rows
-- that were never touched. That is a property of the column type, not of this
-- change, and it affects no reader — every consumer indexes by key. It is
-- recorded because a future diff of source-vs-prod payloads will show it and it
-- would otherwise look like drift.
