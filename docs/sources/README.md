# docs/sources — what our numbers were read from

🔴 **THE STANDING RULE: no OET publication, page, question, passage or script is
ever committed to this repository; sources are cited, never stored.**

That rule is enforced, not just written: `scripts/gates/sources.ts` (check S1)
fails the build if any file other than this README appears in this directory, and
fails if the citation table below is missing, empty, or has a cell without a URL
or an ISO retrieval date.

**What changed on 2 September 2026.** This directory used to contain
`oet-understanding-your-score-2025-10-15.pdf`, and the gate re-hashed it on every
build. That guarded the wrong thing. The file is OET's own copyrighted
publication; a byte-perfect copy of it in a repository is redistribution, and
hashing it every build made the copy load-bearing. It has been removed and the
gate now asserts the opposite.

⚠️ **What that costs, plainly.** Nobody can re-hash the artefact any more. The
grade bands are now held by the citation below plus **two independent hand-typed
transcriptions** inside the repo — `src/lib/oet/exam-shape.ts`
`GRADE_FLOORS_PUBLISHED` and `HAND_TYPED_FROM_THE_PDF` in
`scripts/gates/sources.ts` — which check S3 cross-checks against each other and
against the floors `scale.ts` actually applies. Two readers agreeing is weaker
than a hash. Re-verification is a human opening the cited page.

## Citations

The gate parses this table. One row per source. Columns are fixed.

| source | publisher | retrieved | reference |
| --- | --- | --- | --- |
| Understanding OET scores | Occupational English Test | 2026-08-31 | https://www.occupationalenglishtest.org/re-marking-policy → the "Learn more" button in the "Understanding OET scores" box |
| Results and scoring | Occupational English Test | 2026-08-31 | https://www.occupationalenglishtest.org/results-and-scoring |

### Understanding OET scores

- **Retrieved** — 2026-08-31, by the owner (Nasir), by hand, signed in to his own
  browser. Both agents working on this repo receive **HTTP 403** from
  `occupationalenglishtest.org` on any automated request, so neither could
  retrieve it and neither can re-check it unattended. Re-verification is a human
  action.
- **How to reach it** — start at the referring page in the table above and follow
  the **"Learn more"** button inside the **"Understanding OET scores"** box. The
  resolved download URL was never recorded, so it cannot be linked directly.
- **Document properties, as read** — A4, 1 page, InDesign metadata dated
  2025-10-15.

**The facts taken from it.** These are the published grade boundaries — data, not
prose, and the whole justification for the numbers in `scale.ts`:

| Grade | Score range |
| --- | --- |
| A | 450–500 |
| B | 400–440 |
| B | 350–390 |
| C+ | 300–340 |
| C | 250–290 |
| C | 200–240 |

There is **no D row and no E row** in that document.

### Results and scoring

OET's own Results-and-Scoring page states that grades run *"from A (highest) to E
(lowest)"* — so the letters D and E exist, while the scoring document above
publishes no range for either. Two official OET sources, and they do not agree
about what lies below 200. Both are cited here; neither is resolved in the
other's favour. `src/lib/oet/scale.ts` therefore returns `null` below 200 rather
than inventing a range.
