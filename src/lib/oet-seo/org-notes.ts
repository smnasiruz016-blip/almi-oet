// Hand-maintained, SOURCED caveats attached to individual recognising organisations.
//
// Deliberately kept OUT of organisations.json: that file is a dated scrape of OET's own
// "Who Recognises OET" index (see its `meta.source`), and re-running the scrape would
// silently wipe anything hand-added there. Notes live here so both sides keep clean
// provenance — the scrape stays exactly what OET published, this stays what we verified.
//
// Rules for anything added here:
//   1. Cite an OFFICIAL source — the authority's or organisation's own site. A law firm's
//      summary or a prep-industry blog is a lead to verify, never the citation itself.
//   2. Record the date the source was actually read, and state only what it says.
//   3. No note is better than a note we cannot source.
//
// These are acceptance conditions, not OET rules: OET's own test format is unchanged.

export type OrgNote = {
  /** Rendered verbatim. State the condition plainly; no hedging beyond what the source hedges. */
  note: string;
  sourceUrl: string;
  sourceLabel: string;
  /** ISO date this source was last read end-to-end. */
  verifiedOn: string;
};

const NOTES: Record<string, OrgNote> = {
  // Surfaced by the AlmiMonitor pulse 2026-07-15 and verified the same day against
  // Immigration New Zealand's own news centre (the pulse's lead was a law firm blog,
  // which is not a citation). INZ's wording: "From midnight 12 July 2026 New Zealand
  // Standard Time (NZST), you must take all parts of the Occupational English Test (OET)
  // in person at a supervised test centre." Note the two dates are not a typo — the
  // cutoff is midnight on 12 July, and results completed before 13 July remain usable.
  "nz-immigration-nz": {
    note:
      "For immigration applications, Immigration New Zealand accepts OET only when every part of the test was taken in person at a supervised test centre — this applies from midnight 12 July 2026 (NZST). If you completed a computer-based OET with a remotely administered speaking component before 13 July 2026, you can still use those results. The requirement applies to OET only, not to other English language tests, and it is Immigration New Zealand's own acceptance rule — OET's test format has not changed.",
    sourceUrl:
      "https://www.immigration.govt.nz/about-us/news-centre/update-on-english-language-testing-for-immigration-applications/",
    sourceLabel: "Immigration New Zealand — Update on English language testing for immigration applications",
    verifiedOn: "2026-07-15",
  },
};

export function orgNote(slug: string): OrgNote | null {
  return NOTES[slug] ?? null;
}
