# docs/sources — the artefacts our numbers came from

Every file in this directory is a **primary source** we have actually read. A
number anywhere in this repo that claims to be OET's may name a file here, and
if it does, that file must still be byte-for-byte the file that was read.

`scripts/gates/sources.ts` (`npm run gate:sources`) enforces exactly that: it
re-hashes every file in this directory and fails if a file is missing, if a hash
has changed, or if a file is present but not listed in the table below. It also
fails if `src/lib/oet/scale.ts` writes the word "verified" or "re-verified"
beside a number without naming a `docs/sources/` file in the same comment block —
the precise failure mode that shipped a wrong C band for 27 days.

## Manifest

The gate parses this table. One row per file. Columns are fixed:

| file | sha256 | bytes | fetched |
| --- | --- | --- | --- |
| oet-understanding-your-score-2025-10-15.pdf | 3d2511deaf24e98c04a95abd389387843fdb111372cbf05454c86d0e2c3b3634 | 26329 | 2026-08-31 |

## Provenance

### oet-understanding-your-score-2025-10-15.pdf

- **Filename** — `oet-understanding-your-score-2025-10-15.pdf`
- **sha256** — `3d2511deaf24e98c04a95abd389387843fdb111372cbf05454c86d0e2c3b3634`
- **Bytes** — 26329
- **Date fetched** — 2026-08-31
- **Fetched by** — the owner (Nasir), by hand, signed in to his own browser.
  Both agents working on this repo receive **HTTP 403** from
  `occupationalenglishtest.org` on any automated request, so neither could
  retrieve it and neither can re-check it unattended. Re-verification is a
  human action.
- **Referring page** — `https://www.occupationalenglishtest.org/re-marking-policy`
  → the **"Learn more"** button inside the **"Understanding OET scores"** box.
- **Direct download URL** — **NOT CAPTURED.** The file was saved from the
  browser after following the button above; the resolved URL was not recorded at
  the time and has not been reconstructed. Anyone re-fetching this must start
  from the referring page, not from a URL in this repo.
- **Document properties** — A4, 1 page, InDesign metadata dated 2025-10-15.

**What this document says, and the one thing it does not.** Its published table
of grade bands is:

| Grade | Score range |
| --- | --- |
| A | 450–500 |
| B | 400–440 |
| B | 350–390 |
| C+ | 300–340 |
| C | 250–290 |
| C | 200–240 |

There is **no D row and no E row** in this document. OET's own
Results-and-Scoring page nevertheless states that grades run *"from A (highest)
to E (lowest)"*. Two official OET sources, and they do not agree about what lies
below 200. Both are recorded here; neither is resolved in the other's favour.
`src/lib/oet/scale.ts` therefore returns `null` below 200 rather than inventing a
range for D or E.
