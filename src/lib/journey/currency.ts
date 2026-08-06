// The currency gate, REFINED (law #5, 08-06).
//
// THE DISTINCTION THIS FILE EXISTS TO KEEP. The old gate merged two things that
// are not the same, and noindexed a page for either:
//
//   "confirm your own case with the regulator"   — responsible, and permanent
//   "we cannot stand behind this as current"     — a defect, and temporary
//
// The first is not a defect. A registration requirement is decided on an
// individual training record; a page that says so is more honest than one that
// does not, and telling a reader to double-check is not a reason to hide the page
// from them. Under the old gate every corridor carried that caveat, so all four
// were held out of the index — a proven page type earning nothing, for being
// careful.
//
// So they are now separate. A `reconfirm-official` fact is INDEXABLE and keeps
// its caveat forever. `noindex` is reserved for the three cases where the page
// genuinely cannot be stood behind:
//
//   (a) a LOAD-BEARING fact rests only on a weak or unverifiable source
//   (b) a fact is older than its freshness window
//   (c) a real conflict between two sources of the same fact
//
// What did NOT change: the caveat renders on every page, always, whether the
// page is indexable or not. It is permanent. Removing it because a page passed
// is how "verify your own case" quietly becomes "we checked this for you".

import type { Corridor, SourcedFact } from "./types";

/** How long a fact stays current before it has to be re-read at source.
 *
 *  Fees and process rules churn faster than a regulator's identity, so they get
 *  a shorter window. This is deliberately configurable rather than a constant:
 *  the right window is a per-product, per-fact-kind judgement, and burying it in
 *  a comparison is how it stops being reviewable. */
export type FreshnessPolicy = {
  defaultMonths: number;
  fastChurnMonths: number;
  /** Fact keys whose values move fast enough to need the shorter window. */
  fastChurnKeys: readonly string[];
};

export const DEFAULT_FRESHNESS: FreshnessPolicy = {
  defaultMonths: 6,
  fastChurnMonths: 3,
  fastChurnKeys: ["feesTimeline"],
};

/** Facts a reader ACTS on: who to contact, what to file, which ministries the
 *  documents cross, and whether to book a test. Get one of these wrong and the
 *  reader loses months, so each must be official or corroborated for the page to
 *  be indexable.
 *
 *  `feesTimeline` is deliberately NOT here. A reported fee is useful and a wrong
 *  one is survivable — nobody misroutes an application over it — so a secondary
 *  fee renders as "reported" and does not hold back a page whose core facts are
 *  official. That is the one place this gate accepts a secondary source, and it
 *  is a judgement call worth re-reading rather than inheriting silently. */
export const LOAD_BEARING: readonly string[] = [
  "originRegulator",
  "verificationRoute",
  "attestationChain",
  "englishRoute",
];

/** The status that means "sourced from the official body; verify your own case".
 *  Accepted under both spellings: the law says `reconfirm-official`, the v2 batch
 *  on disk says `confirm-official`, and a gate that silently fails to recognise a
 *  status treats a caveat as a defect — or worse, a defect as a caveat. */
const RECONFIRM = /^(re)?confirm-official$/;
/** Statuses that DO hold a page out of the index. */
const BLOCKING_STATUS = new Set(["stale", "unverified", "disputed"]);

export type FactRef = { key: string; label: string; fact: SourcedFact };

export type IndexVerdict = {
  indexable: boolean;
  /** Why the page is held out. Empty iff indexable. */
  blockers: string[];
  /** Facts the reader must re-check for their own case. Rendered, never blocking. */
  reconfirm: FactRef[];
  /** Facts resting on a secondary source. Rendered as "reported". */
  reported: FactRef[];
};

/** "2026-08-06" or "2026-08" → a Date at the start of that day/month. Returns
 *  null on anything else rather than guessing: an unparseable date is not a
 *  fresh one, and the caller treats null as missing. */
function parseAsOf(s: string | undefined): Date | null {
  if (!s) return null;
  const m = s.trim().match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
  if (!m) return null;
  const d = new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, m[3] ? Number(m[3]) : 1));
  return Number.isNaN(d.getTime()) ? null : d;
}

function monthsBetween(from: Date, to: Date): number {
  return (
    (to.getUTCFullYear() - from.getUTCFullYear()) * 12 +
    (to.getUTCMonth() - from.getUTCMonth()) +
    (to.getUTCDate() >= from.getUTCDate() ? 0 : -1)
  );
}

function windowFor(key: string, p: FreshnessPolicy): number {
  return p.fastChurnKeys.includes(key) ? p.fastChurnMonths : p.defaultMonths;
}

/** Is this fact's source something we can stand behind for a claim a reader acts
 *  on? Official, or secondary-but-corroborated. A secondary source with no
 *  corroboration and no URL is not evidence, it is a lead. */
function wellSourced(f: SourcedFact): boolean {
  if (f.confidence === "official") return true;
  if (f.corroboratedBy?.length) return true;
  return false;
}

export type VerdictInput = {
  facts: FactRef[];
  lastVerified: string;
  /** Whole-record status, e.g. a corridor marked stale by hand. */
  recordStatus?: string;
  /** Real conflicts between two sources of the same fact, found by the product.
   *  Case (c) — supplied rather than detected here, because only the product
   *  knows which two records are supposed to agree. */
  conflicts?: string[];
  policy?: FreshnessPolicy;
  /** Injected so a build is reproducible and the gate is testable. */
  today?: Date;
};

export function indexVerdict(input: VerdictInput): IndexVerdict {
  const policy = input.policy ?? DEFAULT_FRESHNESS;
  const today = input.today ?? new Date();
  const blockers: string[] = [];
  const reconfirm: FactRef[] = [];
  const reported: FactRef[] = [];

  // (c) conflicts first — a page whose two sources disagree cannot be fixed by
  //     anything else on this list.
  for (const c of input.conflicts ?? []) blockers.push(`conflict: ${c}`);

  if (input.recordStatus && BLOCKING_STATUS.has(input.recordStatus)) {
    blockers.push(`record marked ${input.recordStatus}`);
  }

  // (b) the record's own freshness.
  const rec = parseAsOf(input.lastVerified);
  if (!rec) {
    blockers.push("no usable lastVerified date");
  } else {
    const age = monthsBetween(rec, today);
    if (age > policy.defaultMonths) {
      blockers.push(`lastVerified ${input.lastVerified} is ${age} months old (window ${policy.defaultMonths})`);
    }
  }

  for (const ref of input.facts) {
    const { key, label, fact } = ref;
    const loadBearing = LOAD_BEARING.includes(key);

    if (fact.verifyStatus && BLOCKING_STATUS.has(fact.verifyStatus)) {
      blockers.push(`${label} marked ${fact.verifyStatus}`);
    } else if (fact.verifyStatus && RECONFIRM.test(fact.verifyStatus)) {
      // The whole point of the refinement: a caveat, not a blocker.
      reconfirm.push(ref);
    }

    if (fact.confidence === "secondary") reported.push(ref);

    // (a) a load-bearing claim resting only on a weak or unverifiable source.
    if (loadBearing && !wellSourced(fact)) {
      blockers.push(
        `${label} is load-bearing but rests on a ${fact.confidence ?? "missing"} source with no corroboration`,
      );
    }
    if (loadBearing && !fact.sourceUrl) {
      blockers.push(`${label} is load-bearing but cites no source URL`);
    }

    // (b) per-fact freshness, on the fact's own asOf where it has one.
    const asOf = parseAsOf(fact.asOf);
    if (asOf) {
      const w = windowFor(key, policy);
      const age = monthsBetween(asOf, today);
      if (age > w) blockers.push(`${label} was read ${age} months ago (window ${w})`);
    }
  }

  return { indexable: blockers.length === 0, blockers, reconfirm, reported };
}

/** The facts of a corridor, in render order, each with the label the page uses.
 *  One list so a fact cannot be rendered without being citable, or judged by a
 *  rule the source list never mentions. */
export function corridorFacts(c: Corridor): FactRef[] {
  const out: FactRef[] = [];
  const add = (key: string, label: string, f?: SourcedFact) => {
    if (f) out.push({ key, label, fact: f });
  };
  add("originRegulator", "the regulator", c.originRegulator);
  add("verificationRoute", "the verification route", c.verificationRoute);
  add("feesTimeline", "eligibility, fees and timeline", c.feesTimeline);
  add("attestationChain", "the attestation chain", c.attestationChain);
  add("englishRoute", "the English requirement", c.englishRoute);
  return out;
}

/** The permanent caveat. Rendered on EVERY page, indexable or not, forever.
 *  Takes both authorities' names so it points somewhere real rather than saying
 *  "check with the relevant body". */
export function permanentCaveat(destinationRegulator: string, originRegulator: string, lastVerified: string): string {
  return `Confirm current details with ${destinationRegulator} and with ${originRegulator} before you act on them — requirements change, and registration is decided on your individual record. Last verified ${lastVerified}.`;
}
