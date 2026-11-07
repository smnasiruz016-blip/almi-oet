// RR-386 (Q&A LAW 5A.6): a guide's "Last checked" date is the OLDEST check date among the facts the page shows,
// never newer than the facts behind it. The fact dates are the "checked YYYY-MM-DD" stamps next to each source.
// Exchange-rate dates (", 2026-10-14" after a rate) are the date of a rate, not a check, and are not counted.
// "Last checked: X" itself has a colon, so it never matches its own pattern.

const FACT_CHECKED = /\bchecked (\d{4}-\d{2}-\d{2})\b/g;
const LAST_CHECKED = /(<p class="checked">Last checked: )(\d{4}-\d{2}-\d{2})(<\/p>)/;

/** Every fact check date the page shows, in page order. */
export function factCheckDates(html: string): string[] {
  return [...html.matchAll(FACT_CHECKED)].map((m) => m[1]);
}

/** The oldest fact check date on the page, or null when the page shows none. ISO dates sort as strings. */
export function oldestFactCheckDate(html: string): string | null {
  const dates = factCheckDates(html);
  return dates.length ? dates.reduce((a, b) => (b < a ? b : a)) : null;
}

/** The page's "Last checked" date as published, or null when it has no such line. */
export function lastCheckedDate(html: string): string | null {
  return LAST_CHECKED.exec(html)?.[2] ?? null;
}

/** The page with its "Last checked" date set to the oldest fact check date. Nothing else in the page changes. */
export function withLastCheckedOldest(html: string): string {
  const oldest = oldestFactCheckDate(html);
  if (!oldest || lastCheckedDate(html) === null) return html;
  return html.replace(LAST_CHECKED, `$1${oldest}$3`);
}
