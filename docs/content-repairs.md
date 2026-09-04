# Repairing content that is already live

A content repair is a production UPDATE, not a seed. `scripts/seed/append.ts` is
INSERT-only and dedupes on `taskType + profession + title`, so it will never
correct a row that already exists — by design. Repairs go through their own
script, with their own rollback.

---

## The hard-wrap repair — 4 September 2026

The 360 Writing and Speaking items were authored in markdown wrapped by hand at
~100 characters. Those breaks travelled into the payload; the composer renders
`whitespace-pre-wrap`; every wrap became a visible split mid-sentence. The owner
found it on a phone. **No gate could have:** `words()` counts a newline and a
space identically, so only the shape changed and no count measures shape.

```
npx tsx scripts/measure/hard-wraps.mts                    read only
npx tsx scripts/fix-hard-wraps.mts                        DRY RUN
npx tsx scripts/fix-hard-wraps.mts --only <TASKTYPE> --one --confirm
npx tsx scripts/fix-hard-wraps.mts --confirm
npx tsx scripts/fix-hard-wraps.mts --restore <file> --confirm
```

The rule is in `scripts/wrap-rule.ts` — one definition, imported by the repair,
by the measurement and by `gate:wraps`, so none of the three can drift from the
other two. The builder applies it too, so the seed source and the database say
the same thing and a future seed cannot put the wraps back.

### 🔴 IT ONLY TOUCHES ACTIVE ROWS, AND THAT IS WHY IT MUST STAY RE-RUNNABLE

The repair skips retired items, because a production write should be the smallest
one that fixes what a customer can see. **So a retired row still carries whatever
was wrong with it.** Under the retirement ratchet an item can come back — but
only by being brought inside its law — and on the day that happens **this repair
has to be run again over it**. That is why the script is idempotent and takes
`--only`: rerunning it costs nothing, and `unwrap` returns unchanged text it has
already cleaned.

The same holds for any future content repair written here: **assume it will be
run more than once, on a set that grows.**

### What was done

| | rows | breaks removed | words before → after |
|---|---|---|---|
| SPEAKING_ROLEPLAY | 179 | 1,383 | 42,395 → 42,395 |
| WRITING_LETTER | 179 | 3,038 | 126,639 → 126,639 |

The word count is the guard: `words()` cannot see the difference between a
newline and a space, so if it moves at all, the transform did something it was
not asked to. It did not move by one, either time.

Rollbacks are in `docs/rollback/hard-wraps-*.json` and hold every original
string verbatim.
