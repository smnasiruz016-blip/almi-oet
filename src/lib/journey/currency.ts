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

import type { Corridor, FactSource, SourcedFact } from "./types";

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
/** Read at source, nothing left to re-check: no caveat, no block. */
const CLEAR_STATUS = new Set(["verified"]);
/** Every status this gate understands. Anything else BLOCKS.
 *
 *  Failing closed on an unrecognised status is deliberate. The alternative is
 *  what this file did until v3 arrived carrying a status it had never seen:
 *  fall through both branches and silently treat it as clean. A typo —
 *  "stale-ish", "unverifed" — would then read as fine, and the one piece of
 *  metadata whose entire job is to say "do not trust this yet" would be the one
 *  thing nobody was checking. */
const KNOWN_STATUS = new Set([
  ...BLOCKING_STATUS,
  ...CLEAR_STATUS,
  "confirm-official",
  "reconfirm-official",
]);

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

/** Every citation behind a fact, whichever shape it arrived in. The flat
 *  single-source form and the `sources` array are normalised here so the rules
 *  below are written once. */
export function sourcesOf(f: SourcedFact): FactSource[] {
  if (f.sources?.length) return f.sources;
  if (f.sourceUrl || f.sourceName) {
    return [{ url: f.sourceUrl, name: f.sourceName, confidence: f.confidence, note: f.note }];
  }
  return [];
}

/** Two citations to the same site are one citation. Independence is counted by
 *  host, so a fact cannot corroborate itself by listing one publisher twice. */
function independentCount(srcs: FactSource[]): number {
  const hosts = new Set<string>();
  let unhosted = 0;
  for (const s of srcs) {
    if (!s.url) {
      unhosted += 1;
      continue;
    }
    try {
      hosts.add(new URL(s.url).host.replace(/^www\./, "").toLowerCase());
    } catch {
      unhosted += 1;
    }
  }
  return hosts.size + unhosted;
}

/** Is this fact's evidence something we can stand behind for a claim a reader
 *  acts on?
 *
 *  CORROBORATED when it carries at least one OFFICIAL source, or at least two
 *  INDEPENDENT sources. One secondary summary on its own is not evidence, it is
 *  a lead — that is the case this gate exists to catch and it still blocks.
 *
 *  Note what is deliberately NOT consulted: the batch's own `corroborated: true`
 *  flag. Corroboration is computed from the citations; a record that grants
 *  itself the status is asserting the conclusion. The flag is still read — by
 *  `corroborationDiscrepancy` below — but only to catch a batch claiming
 *  something its own sources do not support. */
function wellSourced(f: SourcedFact): boolean {
  const srcs = sourcesOf(f);
  if (srcs.some((s) => s.confidence === "official")) return true;
  if (independentCount(srcs) >= 2) return true;
  if (f.corroboratedBy?.length) return true;
  return false;
}

/** The batch says corroborated, the citations say otherwise. Reported as a
 *  blocker rather than shrugged off: a record whose metadata disagrees with its
 *  own evidence is exactly the thing a currency gate is for, and silently
 *  preferring the evidence would let the wrong claim survive unnoticed in the
 *  data everyone else reads. */
function corroborationDiscrepancy(f: SourcedFact): boolean {
  return f.corroborated === true && !wellSourced(f);
}

/** `corroborated: false` — an explicit statement by whoever sourced the fact
 *  that its load-bearing specifics are NOT corroborated, whatever the URL list
 *  looks like.
 *
 *  THE ASYMMETRY IS THE POINT, and Zimbabwe is why. Its verification route cites
 *  an official page and a secondary one, so counting sources says "official
 *  present, corroborated". But the official page is the NMC's, and it establishes
 *  only that SOME verification is required; every NCZ-specific detail — posted
 *  board-to-board, the certified-copy list, the EcoCash fee — rests on the one
 *  secondary. Which source supports which part of a claim is not something a URL
 *  count can see, and the person who read them knew it.
 *
 *  So the two directions are treated differently, and both fail safe:
 *    corroborated: true  → does NOT clear. Evidence has to show it; a claim
 *                          cannot grant itself the status.
 *    corroborated: false → DOES block. A stated doubt is never overridden by a
 *                          mechanical rule that can see less than the author. */
function explicitlyUncorroborated(f: SourcedFact): boolean {
  return f.corroborated === false;
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

    if (fact.verifyStatus && !KNOWN_STATUS.has(fact.verifyStatus)) {
      blockers.push(`${label} carries an unrecognised verifyStatus "${fact.verifyStatus}"`);
    } else if (fact.verifyStatus && BLOCKING_STATUS.has(fact.verifyStatus)) {
      blockers.push(`${label} marked ${fact.verifyStatus}`);
    } else if (fact.verifyStatus && RECONFIRM.test(fact.verifyStatus)) {
      // The whole point of the refinement: a caveat, not a blocker.
      reconfirm.push(ref);
    }

    // "Reported" means: nothing behind this came from the authority's own page.
    // A fact with one official source among several is NOT reported, even though
    // it also cites secondaries — that is corroboration, not hearsay.
    const s = sourcesOf(fact);
    if (s.length > 0 && !s.some((x) => x.confidence === "official")) reported.push(ref);

    // (a) a load-bearing claim resting only on a weak or unverifiable source.
    const srcs = sourcesOf(fact);
    if (loadBearing && !wellSourced(fact)) {
      const how =
        srcs.length === 0
          ? "no source at all"
          : srcs.length === 1
            ? `a single ${srcs[0].confidence ?? "unrated"} source`
            : `${srcs.length} sources that are neither official nor independent`;
      blockers.push(`${label} is load-bearing but rests on ${how}, with no corroboration`);
    }
    if (loadBearing && !srcs.some((x) => x.url)) {
      blockers.push(`${label} is load-bearing but cites no source URL`);
    }
    if (corroborationDiscrepancy(fact)) {
      blockers.push(`${label} is marked corroborated but its own sources do not support that`);
    }
    if (loadBearing && explicitlyUncorroborated(fact)) {
      blockers.push(
        `${label} is load-bearing and is marked NOT corroborated at source${fact.note ? ` (${fact.note})` : ""}`,
      );
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
