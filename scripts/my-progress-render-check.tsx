// Proof that "My Progress" renders rows, not just headings.
//
//   npx tsx scripts/my-progress-render-check.tsx
//
// WHY THIS EXISTS. Production currently holds 4 users, 3 attempts and ZERO
// scored ones, so a logged-in user today sees four sections of empty state. That
// is correct behaviour and proves nothing about the part that matters — whether
// a scored attempt actually renders with its estimate, its date and a link to
// its result. Waiting for a real user to produce one is not a test, and writing
// a fake attempt into the production database to look at it would be worse.
//
// MyProgress is a pure presentational component: no async, no Prisma, no
// request context. So it can be rendered to static markup against synthetic
// attempts and asserted on directly.

import { renderToStaticMarkup } from "react-dom/server";
import { MyProgress, type ProgressAttempt } from "../src/components/oet/MyProgress";

const day = (n: number) => new Date(Date.UTC(2026, 7, n));

const ATTEMPTS: ProgressAttempt[] = [
  {
    id: "a1", subTest: "WRITING", taskType: "WRITING_LETTER",
    gradeEstimate: { lo: 350, hi: 370, grade: "B" },
    submittedAt: day(6), sessionId: "sess-w1", pointsEarned: 0, pointsMax: 0,
    item: { title: "Referral letter — community nurse" },
  },
  {
    id: "a2", subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY",
    gradeEstimate: { lo: 300, hi: 320, grade: "C+" },
    submittedAt: day(5), sessionId: "sess-s1", pointsEarned: 0, pointsMax: 0,
    item: { title: "Role-play — explaining a discharge plan" },
  },
  {
    id: "a3", subTest: "LISTENING", taskType: "LISTENING_PART_A",
    gradeEstimate: { lo: 390, hi: 410, grade: "B" },
    submittedAt: day(4), sessionId: "sess-l1", pointsEarned: 22, pointsMax: 24,
    item: { title: "Listening Part A — consultation notes" },
  },
  {
    id: "a4", subTest: "READING", taskType: "READING_PART_B",
    gradeEstimate: { lo: 330, hi: 350, grade: "C+" },
    submittedAt: day(3), sessionId: "sess-r1", pointsEarned: 5, pointsMax: 6,
    item: { title: "Reading Part B — workplace extracts" },
  },
  // The no-estimate case: scored, but too little evidence. Must NOT render a 0.
  {
    id: "a5", subTest: "WRITING", taskType: "WRITING_LETTER",
    gradeEstimate: null,
    submittedAt: day(2), sessionId: "sess-w2", pointsEarned: 0, pointsMax: 0,
    item: { title: "Discharge letter — short response" },
  },
];

const html = renderToStaticMarkup(<MyProgress attempts={ATTEMPTS} />);

const checks: [string, boolean][] = [
  ["four sub-test sections render", ["Recent writing", "My speaking attempts", "My listening tests", "My reading tests"].every((h) => html.includes(h))],
  ["writing row + estimate", html.includes("Referral letter — community nurse") && html.includes("350–370 · B")],
  ["speaking row + estimate", html.includes("Role-play — explaining a discharge plan") && html.includes("300–320 · C+")],
  ["listening row + estimate", html.includes("Listening Part A — consultation notes") && html.includes("390–410 · B")],
  ["reading row + estimate", html.includes("Reading Part B — workplace extracts") && html.includes("330–350 · C+")],
  ["result links point at the session", html.includes("/practice/session/sess-w1") && html.includes("/practice/session/sess-r1")],
  ["dates render", /\d{1,2}[/.]\d{1,2}[/.]\d{4}|\d{4}-\d{2}-\d{2}/.test(html)],
  ["per-sub-test averages render", html.includes("Your practice estimates")],
  ["no-estimate attempt is NOT shown as a score", html.includes("Not enough to estimate") && !html.includes(">0<")],
  // Detects an overall presented as a VALUE, not the words. The first version
  // matched /overall (score|band)/ anywhere and failed on our own disclaimer —
  // "OET ... publishes no overall score" — which is the sentence that exists
  // precisely BECAUSE we refuse to compute one. A check that fires on the
  // disclosure teaches you to ignore it.
  [
    "NO invented composite/overall figure",
    !/combined avg/i.test(html) && !/(overall|combined)[^<]{0,40}<\/p>\s*<p[^>]*>\s*\d/i.test(html),
  ],
  ["NO IELTS-style band label", !/\bBand \d/.test(html)],
  ["practice-estimate disclaimer present", /never an official Occupational English Test result/i.test(html)],
];

let bad = 0;
for (const [label, ok] of checks) {
  if (!ok) bad += 1;
  console.log(`  ${ok ? "PASS" : "FAIL"}  ${label}`);
}
console.log(`\n${checks.length - bad}/${checks.length} checks passed`);
process.exit(bad ? 1 : 0);
