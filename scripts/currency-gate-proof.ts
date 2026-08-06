// Proof that the refined currency gate FIRES — control first, then sabotage.
//
//   npx tsx scripts/currency-gate-proof.ts
//
// The refinement's whole purpose is to stop noindexing pages for being careful.
// A gate loosened that way is one bad edit from noindexing nothing at all, and a
// gate that can never fire looks identical to a gate that is working. So each
// trigger is exercised against a deliberately broken copy of a real corridor, and
// the control is run FIRST so a red result cannot be mistaken for a gate that was
// red before the sabotage.
//
// Exits non-zero if any expectation fails, so it can be wired into the build.

import { CORRIDORS, destinationGradeConflicts } from "../src/lib/oet-seo/corridors";
import { journeyVerdict } from "../src/lib/journey/compose";
import { DEFAULT_FRESHNESS } from "../src/lib/journey/currency";
import type { Corridor } from "../src/lib/journey/types";

const TODAY = new Date(Date.UTC(2026, 7, 6)); // fixed, so the proof is reproducible
const conflicts = destinationGradeConflicts();
let failures = 0;

function expect(name: string, got: boolean, want: boolean, detail = "") {
  const ok = got === want;
  if (!ok) failures += 1;
  console.log(`  ${ok ? "ok  " : "FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
}

const byOrigin = (o: string) => CORRIDORS.find((c) => c.originSlug === o)!;
const clone = (c: Corridor): Corridor => JSON.parse(JSON.stringify(c));

console.log("=== CONTROL: the real data, before any sabotage ===");
console.log(`(destination grade conflicts found: ${conflicts.length ? conflicts.join("; ") : "none"})`);
for (const c of CORRIDORS) {
  const v = journeyVerdict(c, { conflicts, today: TODAY });
  console.log(
    `  ${c.originSlug.padEnd(12)} indexable=${String(v.indexable).padEnd(5)} reconfirm=${v.reconfirm.length} reported=${v.reported.length}${v.blockers.length ? ` :: ${v.blockers.join(" · ")}` : ""}`,
  );
}

console.log("\n=== THE REFINEMENT ITSELF: reconfirm-official must NOT noindex ===");
{
  // Every corridor carries at least one confirm-official fact. Under the old
  // gate that alone noindexed all four. It must no longer.
  const withReconfirm = CORRIDORS.filter((c) =>
    journeyVerdict(c, { conflicts, today: TODAY }).reconfirm.length > 0,
  );
  expect("all four corridors still carry a reconfirm caveat", withReconfirm.length === 4, true, `${withReconfirm.length}/4`);
  const blockedByReconfirmAlone = withReconfirm.filter((c) => {
    const v = journeyVerdict(c, { conflicts, today: TODAY });
    return v.blockers.some((b) => /confirm-official/.test(b));
  });
  expect("no corridor is blocked BY a reconfirm status", blockedByReconfirmAlone.length === 0, true);
}

console.log("\n=== SABOTAGE (a): a load-bearing fact on a weak source ===");
{
  const c = clone(byOrigin("pakistan"));
  const before = journeyVerdict(c, { conflicts, today: TODAY });
  expect("control: pakistan indexable before sabotage", before.indexable, true, before.blockers.join(" · "));
  c.verificationRoute.confidence = "secondary";
  const after = journeyVerdict(c, { conflicts, today: TODAY });
  expect("secondary load-bearing fact blocks", after.indexable, false, after.blockers.join(" · "));

  const d = clone(byOrigin("pakistan"));
  d.verificationRoute.confidence = "secondary";
  d.verificationRoute.corroboratedBy = ["a second independent source"];
  expect(
    "…but corroboration clears it",
    journeyVerdict(d, { conflicts, today: TODAY }).indexable,
    true,
  );

  const e = clone(byOrigin("pakistan"));
  delete e.verificationRoute.sourceUrl;
  expect(
    "a load-bearing fact with no source URL blocks",
    journeyVerdict(e, { conflicts, today: TODAY }).indexable,
    false,
  );
}

console.log("\n=== SABOTAGE (a'): a SUPPORTING fact on a weak source must NOT block ===");
{
  // Nasir's explicit carve-out: secondary fees/timelines render as "reported"
  // and do not hold back a page whose core facts are official. Nigeria's
  // feesTimeline is already secondary in the real data — so this is the control,
  // not a hypothetical.
  const ng = byOrigin("nigeria");
  const v = journeyVerdict(ng, { conflicts, today: TODAY });
  expect("nigeria's secondary feesTimeline does not block", v.indexable, true, v.blockers.join(" · "));
  expect("…and is surfaced as reported", v.reported.some((r) => r.key === "feesTimeline"), true);
}

console.log("\n=== SABOTAGE (b): staleness ===");
{
  const c = clone(byOrigin("philippines"));
  c.lastVerified = "2025-01-01"; // ~19 months before TODAY
  expect(
    "lastVerified past the 6-month window blocks",
    journeyVerdict(c, { conflicts, today: TODAY }).indexable,
    false,
  );

  const d = clone(byOrigin("philippines"));
  d.lastVerified = "2026-04-01"; // ~4 months — inside the default window
  expect("…but 4 months old is still current", journeyVerdict(d, { conflicts, today: TODAY }).indexable, true);

  // Fast-churn: a fee read 4 months ago is stale even though the record is not.
  const e = clone(byOrigin("nigeria"));
  e.feesTimeline!.asOf = "2026-03";
  const ev = journeyVerdict(e, { conflicts, today: TODAY });
  expect(
    `a fee ${DEFAULT_FRESHNESS.fastChurnMonths}+ months old blocks on the fast-churn window`,
    ev.indexable,
    false,
    ev.blockers.join(" · "),
  );

  const f = clone(byOrigin("pakistan"));
  f.lastVerified = "";
  expect("a corridor with no lastVerified blocks", journeyVerdict(f, { conflicts, today: TODAY }).indexable, false);
}

console.log("\n=== SABOTAGE (c): a genuine conflict ===");
{
  const c = byOrigin("philippines");
  expect("control: philippines indexable with real conflicts", journeyVerdict(c, { conflicts, today: TODAY }).indexable, true);
  const v = journeyVerdict(c, {
    conflicts: ["the batch says OET W C+, the base record says B"],
    today: TODAY,
  });
  expect("an injected grade conflict blocks", v.indexable, false, v.blockers.join(" · "));
}

console.log("\n=== SABOTAGE (d): an explicit stale/unverified status ===");
{
  for (const status of ["stale", "unverified", "disputed"]) {
    const c = clone(byOrigin("pakistan"));
    c.englishRoute!.verifyStatus = status;
    expect(`verifyStatus "${status}" blocks`, journeyVerdict(c, { conflicts, today: TODAY }).indexable, false);
  }
}

console.log(`\n${failures === 0 ? "ALL EXPECTATIONS MET" : `${failures} EXPECTATION(S) FAILED`}`);
process.exit(failures === 0 ? 0 : 1);
