/**
 * THE ONE PLACE THIS PRODUCT TURNS AN INSTANT INTO WORDS A LEARNER READS.
 *
 * ── WHY IT EXISTS ───────────────────────────────────────────────────────────
 *
 * `src/app/(app)/account/page.tsx` used to render the billing date with a bare
 * `toLocaleDateString()`, in a SERVER component, producing `Renews 9/12/2026`:
 *
 *     12 September   to a reader in the US
 *      9 December    to a reader in the UK, Ireland, Australia, New Zealand,
 *                    India or the Philippines
 *
 * Three months apart, on the day the card is charged, for most of this
 * product's market.
 *
 * ── 🔴 AND WHY `timeZone` IS NOT OPTIONAL ──────────────────────────────────
 *
 * A month name alone does not settle it. ONE INSTANT IS TWO DIFFERENT DAYS on
 * either side of midnight, so an unpinned zone lets the confirmation email say
 * "12 September" while the account page says "11 September" — two dates for one
 * charge, in front of one learner. `src/lib/email.ts` already pinned UTC; these
 * helpers are that same formatting, made SHARED rather than copied, so the two
 * cannot drift apart. A copy would only hope they agree.
 *
 * UTC is the pin because it is what the email has always used and what Stripe's
 * period ends are expressed in. It is a deliberate choice, not a default: the
 * learner is being told the date of a billing event, not what day it is where
 * they are standing.
 *
 * ── WHAT DOES NOT BELONG HERE ───────────────────────────────────────────────
 *
 * A WALL CLOCK. `src/components/oet/ExamChrome.tsx` shows the candidate the time
 * in the room, so it must use THEIR locale and THEIR zone, and it is safe
 * because `hour12: false` with two-digit parts cannot be misread: `14:05` is
 * never `05:14`. Pinning that to UTC would break it. `gate:dates` encodes the
 * distinction as a rule about SHAPE — a value is forbidden when two readers can
 * read it two ways — rather than exempting anything by name.
 */

/** Locale and zone shared by every helper here, and by src/lib/email.ts. */
const LOCALE = "en-GB";
const ZONE = "UTC";

/**
 * "12 September 2026" — a month NAME, so no reader has to guess whether the
 * first number is the day or the month.
 */
export function formatDateUTC(d: Date | string | null | undefined): string | null {
  if (!d) return null;
  const date = d instanceof Date ? d : new Date(d);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(LOCALE, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: ZONE,
  });
}

/**
 * "12 September 2026, 14:05 UTC" — the same date, plus a 24-hour two-digit time
 * that cannot be read as anything else. The zone is PRINTED as well as pinned,
 * because a timestamp on an admin screen is read against other systems' logs.
 */
export function formatDateTimeUTC(d: Date | string | null | undefined): string | null {
  if (!d) return null;
  const date = d instanceof Date ? d : new Date(d);
  if (Number.isNaN(date.getTime())) return null;
  const day = date.toLocaleDateString(LOCALE, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: ZONE,
  });
  const time = date.toLocaleTimeString(LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: ZONE,
  });
  return `${day}, ${time} ${ZONE}`;
}
