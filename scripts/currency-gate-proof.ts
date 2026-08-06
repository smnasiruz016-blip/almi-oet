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
  // gate that alone noindexed every one of them. It must no longer. Counted
  // against CORRIDORS.length rather than a literal: this assertion was written
  // when there were four and silently became wrong at ten.
  const withReconfirm = CORRIDORS.filter((c) =>
    journeyVerdict(c, { conflicts, today: TODAY }).reconfirm.length > 0,
  );
  expect(
    "every corridor still carries a reconfirm caveat",
    withReconfirm.length === CORRIDORS.length,
    true,
    `${withReconfirm.length}/${CORRIDORS.length}`,
  );
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
  c.verificationRoute!.confidence = "secondary";
  const after = journeyVerdict(c, { conflicts, today: TODAY });
  expect("secondary load-bearing fact blocks", after.indexable, false, after.blockers.join(" · "));

  const d = clone(byOrigin("pakistan"));
  d.verificationRoute!.confidence = "secondary";
  d.verificationRoute!.corroboratedBy = ["a second independent source"];
  expect(
    "…but corroboration clears it",
    journeyVerdict(d, { conflicts, today: TODAY }).indexable,
    true,
  );

  const e = clone(byOrigin("pakistan"));
  delete e.verificationRoute!.sourceUrl;
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

console.log("\n=== CORROBORATION via the sources ARRAY (India's new shape) ===");
{
  // India's verificationRoute and attestationChain moved from one secondary
  // summary to a `sources` array. The rule: corroborated when >=1 OFFICIAL source
  // OR >=2 INDEPENDENT sources. The loosening must not reach a lone weak source.
  const india = byOrigin("india");
  const v = journeyVerdict(india, { conflicts, today: TODAY });
  expect("india is now indexable on corroborated sources", v.indexable, true, v.blockers.join(" \u00b7 "));

  const oneSecondary = clone(india);
  oneSecondary.verificationRoute!.sources = [
    { url: "https://example-summary.com/a", name: "one secondary summary", confidence: "secondary" },
  ];
  expect(
    "a single secondary source in the array STILL blocks",
    journeyVerdict(oneSecondary, { conflicts, today: TODAY }).indexable,
    false,
  );

  const sameHost = clone(india);
  sameHost.verificationRoute!.sources = [
    { url: "https://example-summary.com/a", name: "summary A", confidence: "secondary" },
    { url: "https://www.example-summary.com/b", name: "summary B", confidence: "secondary" },
  ];
  expect(
    "two secondaries from the SAME host do not corroborate",
    journeyVerdict(sameHost, { conflicts, today: TODAY }).indexable,
    false,
  );

  const twoHosts = clone(india);
  twoHosts.verificationRoute!.sources = [
    { url: "https://one.example/a", name: "summary A", confidence: "secondary" },
    { url: "https://two.example/b", name: "summary B", confidence: "secondary" },
  ];
  expect(
    "two secondaries from DIFFERENT hosts do corroborate",
    journeyVerdict(twoHosts, { conflicts, today: TODAY }).indexable,
    true,
  );

  const lying = clone(india);
  lying.verificationRoute!.corroborated = true;
  lying.verificationRoute!.sources = [
    { url: "https://one.example/a", name: "lone summary", confidence: "secondary" },
  ];
  const lv = journeyVerdict(lying, { conflicts, today: TODAY });
  expect("a corroborated:true flag its sources do not support blocks", lv.indexable, false);
  expect(
    "…and says so explicitly",
    lv.blockers.some((b) => /marked corroborated but its own sources/.test(b)),
    true,
  );

  expect(
    "india is NOT listed as merely reported (it has an official source)",
    v.reported.some((r) => r.key === "verificationRoute"),
    false,
  );
}

console.log("\n=== THE CORROBORATION RULE, on synthetic fixtures ===");
{
  // WHY THESE ARE SYNTHETIC. This block used to assert "zimbabwe is held
  // noindex" against the live batch, because Zimbabwe was the corridor that
  // happened to carry corroborated:false. Then Zimbabwe was re-sourced against
  // the NCZ's own good-standing form, legitimately cleared, and the proof of the
  // RULE went red — for a reason that had nothing to do with the rule.
  //
  // That is backwards, and dangerous in a specific way: a rule-proof that breaks
  // when the data IMPROVES creates pressure to weaken the proof instead of
  // fixing the data. The second time it happens, someone deletes the assertion.
  //
  // So the rule is now proved against fixtures built here, and no real
  // corridor's data can break it. What the live batch is used for is one thing
  // only, below: confirming that a corridor which cleared did so on evidence.
  const base = clone(byOrigin("pakistan"));
  const withRoute = (sources: any[], corroborated?: boolean) => {
    const c = clone(base);
    delete (c.verificationRoute as any).sourceUrl;
    delete (c.verificationRoute as any).sourceName;
    delete (c.verificationRoute as any).confidence;
    (c.verificationRoute as any).sources = sources;
    (c.verificationRoute as any).corroborated = corroborated;
    return journeyVerdict(c, { conflicts, today: TODAY });
  };
  const OFFICIAL = { url: "https://regulator.example/verify", name: "the regulator", confidence: "official" };
  const SEC_A = { url: "https://summary-a.example/x", name: "summary A", confidence: "secondary" };
  const SEC_B = { url: "https://summary-b.example/y", name: "summary B", confidence: "secondary" };
  const SEC_A2 = { url: "https://www.summary-a.example/z", name: "summary A again", confidence: "secondary" };

  expect("one secondary source BLOCKS", withRoute([SEC_A]).indexable, false);
  expect("two secondaries on the SAME host block", withRoute([SEC_A, SEC_A2]).indexable, false);
  expect("two secondaries on DIFFERENT hosts clear", withRoute([SEC_A, SEC_B]).indexable, true);
  expect("one official source clears", withRoute([OFFICIAL]).indexable, true);
  expect("official + secondaries clears", withRoute([OFFICIAL, SEC_A, SEC_B]).indexable, true);

  // The flag, both directions. Neither can substitute for evidence.
  const lying = withRoute([SEC_A], true);
  expect("corroborated:true on a lone secondary still BLOCKS", lying.indexable, false);
  expect(
    "…and says the flag is unsupported",
    lying.blockers.some((b) => /marked corroborated but its own sources/.test(b)),
    true,
  );
  const overridden = withRoute([OFFICIAL, SEC_A], false);
  expect("corroborated:false OVERRIDES an official source and blocks", overridden.indexable, false);
  expect(
    "…naming the override, not a source count",
    overridden.blockers.some((b) => /marked NOT corroborated at source/.test(b)),
    true,
  );
  expect("the same fixture WITHOUT the false flag clears", withRoute([OFFICIAL, SEC_A]).indexable, true);

  // A supporting (non-load-bearing) fact is exempt from all of the above.
  const fees = clone(byOrigin("nigeria"));
  expect(
    "a lone secondary on feesTimeline does NOT block",
    journeyVerdict(fees, { conflicts, today: TODAY }).indexable,
    true,
  );
}

console.log("\n=== every corridor that CLEARED did so on evidence ===");
{
  // The one thing the live batch is used for. Not "is corridor X indexable" —
  // that changes as data improves — but the invariant that must hold whatever
  // the data says: nothing is indexable while a load-bearing fact rests on a
  // lone secondary source.
  for (const c of CORRIDORS) {
    const v = journeyVerdict(c, { conflicts, today: TODAY });
    if (!v.indexable) continue;
    for (const key of ["originRegulator", "verificationRoute", "attestationChain", "englishRoute"] as const) {
      const f = (c as any)[key];
      if (!f) continue;
      const srcs = f.sources ?? [{ url: f.sourceUrl, confidence: f.confidence }];
      const official = srcs.filter((x: any) => x.confidence === "official").length;
      const hosts = new Set(
        srcs.filter((x: any) => x.url).map((x: any) => {
          try {
            return new URL(x.url).host.replace(/^www[.]/, "");
          } catch {
            return x.url;
          }
        }),
      ).size;
      expect(
        `${c.originSlug}/${key}: official=${official} independentHosts=${hosts}`,
        official >= 1 || hosts >= 2,
        true,
      );
    }
  }
}

console.log("\n=== an unrecognised verifyStatus FAILS CLOSED ===");
{
  const c = clone(byOrigin("ghana"));
  expect("control: ghana indexable", journeyVerdict(c, { conflicts, today: TODAY }).indexable, true);
  c.englishRoute!.verifyStatus = "unverifed"; // a typo, not a status
  const v = journeyVerdict(c, { conflicts, today: TODAY });
  expect("a typo'd status blocks rather than reading as clean", v.indexable, false);
  expect(
    "…and names itself",
    v.blockers.some((b) => /unrecognised verifyStatus/.test(b)),
    true,
  );

  const ok = clone(byOrigin("ghana"));
  ok.englishRoute!.verifyStatus = "verified";
  expect('"verified" is recognised and does not block', journeyVerdict(ok, { conflicts, today: TODAY }).indexable, true);
}

console.log("\n=== the destination grade check reads v3's word-form grades ===");
{
  // v2 wrote "OET (L/R/S grade B, W grade C+)", v3 writes
  // "OET (Listening/Reading/Speaking grade B, Writing C+)". A checker that
  // silently stops matching returns "no conflict" for the wrong reason — the one
  // answer it must never give by accident.
  expect("no conflict between the batch and the base record", conflicts.length === 0, true, conflicts.join("; "));
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
