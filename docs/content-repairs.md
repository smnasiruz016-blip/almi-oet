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
ALLOW_PROD_WRITE=1 npx tsx scripts/fix-hard-wraps.mts --only <TASKTYPE> --one --confirm
ALLOW_PROD_WRITE=1 npx tsx scripts/fix-hard-wraps.mts --confirm
ALLOW_PROD_WRITE=1 npx tsx scripts/fix-hard-wraps.mts --restore <file> --confirm
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

---

## The prep-time correction — 4 September 2026

All 180 live Speaking items carried `prepSeconds: 120`, and the screen told the
candidate, in OET's name, that OET gives two minutes. **OET gives three.**

🔴 **The number was not unsourced, which is the worse version.** The repo already
cited an OET page saying *"2-3 minutes to prepare for each"* — and 120 is the
**bottom of that range**. Somebody read a range and shipped its minimum as a
fact. A newer OET page states one figure and states it four times
(`oet.com/post/did-you-know-the-oet-speaking-test-gives-you-three-preparation-minutes`,
14 Nov 2024), and the arithmetic agrees: 2 × (3 + 5) = 16 minutes plus the
introduction is OET's own "approximately 20 minutes"; at two minutes it is 14.

```
npx tsx scripts/fix-prep-seconds.mts                                    DRY RUN
ALLOW_PROD_WRITE=1 npx tsx scripts/fix-prep-seconds.mts --one --confirm
ALLOW_PROD_WRITE=1 npx tsx scripts/fix-prep-seconds.mts --confirm
ALLOW_PROD_WRITE=1 npx tsx scripts/fix-prep-seconds.mts --restore <file> --confirm
```

**It had to be fixed in FOUR places, not the three the command named** — and the
fourth was found by a gate, not by looking:

| place | how |
|---|---|
| 360 live rows | `fix-prep-seconds.mts` |
| the two sentences on screen | **nothing to edit.** Both read `prepSeconds` from the payload, so they were correct copy printing a wrong number |
| `scripts/seed/gen` + the builder | the builder now enforces the cited constant and says so out loud |
| `scripts/seed/speaking-roleplay.ts` | **G7 divergence caught it** — 24 hand-written items still at 120 |

`gate:exam-numbers` now holds both figures against the cited constants in
`src/lib/oet/exam-shape.ts`, so neither can drift item by item again.

---

## 🔴 Two conditions before any production write

Ruled 4 September 2026 after a near-miss: a PR body passed inline to a shell had
its backticks read as command substitution, and bash executed a usage line out of
**this very file**, ending in `--confirm`, against production. It changed nothing
only because that repair was idempotent.

Every script that writes to production now requires **both**:

1. `--confirm` on the command line, **and**
2. `ALLOW_PROD_WRITE=1` in the environment.

A stray command line satisfies one. It cannot satisfy both. The guard is in
`scripts/prod-write-guard.ts` — one definition, six callers, including
`seed:prod`.

**And no runnable production-write command may appear bare in `docs/` or in a PR
body.** Every one above carries `ALLOW_PROD_WRITE=1` in front, so anyone copying
it has to type something deliberate — and so the intent is visible in a shell
history.
