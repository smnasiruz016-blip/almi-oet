/**
 * ASK PRODUCTION WHETHER A FULL MOCK CAN ACTUALLY START. Run it after every deploy.
 *
 *   npm run check:prod-mock
 *   npm run check:prod-mock -- https://some-preview.vercel.app
 *
 * No credentials, no database connection. It reads two things: /api/status,
 * which reports three counts from the same function the session engine calls —
 *
 *   formsDeclared  form tags the objective bank carries, active or retired
 *   formsComplete  how many of them satisfy the WHOLE MOCK_PLAN against ACTIVE rows
 *   startable      whether chooseCompleteForm() would return a form rather than null
 *
 * — and the seed files it is checked out beside, for the number of forms the
 * SOURCE declares.
 *
 * Exit 1 if a mock cannot start, if any declared form has stopped being complete,
 * if the source and the database disagree about how many forms exist, if the
 * deployment does not report the block at all, or if nothing was measured.
 *
 * ── WHY IT EXISTS ───────────────────────────────────────────────────────────
 *
 * GAP-041, and it is the sibling of check-prod-migrations.mts: the same door,
 * a second question. On 3 September 2026 three retire lists deactivated all 27
 * form-tagged Reading items. Every form stopped being complete that minute,
 * startSession returned null for MOCK, and the Start button sent the learner to
 * /practice?mockempty=1 — a flag nothing reads, so a dead button with no message.
 * It survived five days. gate:all was green throughout, because every gate reads
 * scripts/seed/gen, and in the source the items were present and correct: the
 * state that broke the product lived in the `active` column of the database.
 *
 * ── 🔴 A FORM THAT STOPS BEING COMPLETE IS A REGRESSION ON ITS OWN ──────────
 *
 * `formsComplete < formsDeclared` fails even when a mock still starts. The
 * learner who would have drawn that form gets nothing, and "one of the three
 * still works" is not a state anybody chose — it is the first two thirds of what
 * happened in September, stopped early.
 *
 * ── 🔴 AND THE SOURCE COUNT AGAINST THE DATABASE COUNT ─────────────────────
 *
 * `formsDeclared` is counted from ROWS, so a form whose rows were DELETED reads
 * as one fewer form declared and the rest complete — the most severe version of
 * this defect passing as normal. So the number is also counted from the REPO,
 * which this runs inside, and the two must agree.
 *
 * That is the same comparison check-prod-migrations.mts already makes: the folder
 * shipped in the deployment against what that deployment's own database reports.
 * Source against database, in both cases, and neither needs a credential.
 *
 * The repo side is a REGEX OVER THE SEED FILES — see form-tags-in-repo.ts. It
 * does not import GEN_ITEMS: 4.6 MB through tsx to learn one number is the cost
 * the route refused, and it should not be paid here either.
 *
 * ── 🔴 WHAT THIS CANNOT SEE, AND SAYING SO IS THE POINT ─────────────────────
 *
 * IT IS ONE READ OF ONE ENDPOINT, AFTER THE FACT. It catches the STATE, never
 * the cause: it says a mock cannot start, not which write stopped it, not which
 * part is short, and not who did it. The cause is found with
 * `npx tsx scripts/bank-state.mts` against the database, which needs credentials
 * this check deliberately does not have.
 *
 * IT SAYS NOTHING ABOUT WHETHER THE ITEMS ARE ANY GOOD. A form is complete when
 * enough ACTIVE rows of each task type carry its tag. Whether those rows are
 * well written, correctly keyed, the right length, or free of leaks is what
 * gate:all is for — and gate:all in turn cannot see the database. Neither check
 * covers the other, and a green here plus a green there is still not a promise
 * that a learner has a good exam, only that they have one at all.
 *
 * A DELETED FORM USED TO BE INVISIBLE HERE, AND IS NOT ANY MORE. `declared` is
 * counted from the rows themselves, so dropping a form's rows outright made it
 * undeclared instead of incomplete and moved both endpoint numbers together —
 * the most severe version of this defect reading as normal. The source count
 * above closes it. Content is retired here by flipping `active`, never by
 * DELETE — see scripts/retire-fragments.mts — so the disagreement means a form
 * has gone missing, not that one was retired.
 *
 * IT COMPARES COUNTS, NOT IDENTITIES. Three forms in the source and three
 * DIFFERENT forms in the database would satisfy it — form-4 authored and
 * form-1's rows dropped in the same window reads as 3 and 3. Naming that is
 * worth more than closing it: the identity check would mean shipping the form
 * tags themselves through the endpoint, and a heavier check that nobody can
 * read cheaply is how a check stops being run at all. What is guarded is the
 * case that actually happens — a form going missing.
 *
 * HTTP 503 IS NOT TREATED AS FAILURE HERE. The endpoint answers 503 while a
 * migration is pending, and the body still carries these counts. Migrations are
 * check-prod-migrations.mts's job; two checks that fail for each other's reason
 * are two checks nobody can read.
 */
import { formTagsInRepo } from "./form-tags-in-repo";

const BASE = process.argv[2] ?? "https://almioet.almiworld.com";
const url = `${BASE.replace(/\/$/, "")}/api/status`;

type Status = {
  itemsActive?: number;
  mock?: { formsDeclared?: number; formsComplete?: number; startable?: boolean };
};

let res: Response;
try {
  res = await fetch(url, { headers: { "Cache-Control": "no-store" } });
} catch (e) {
  console.error(`[mock] ${url} tak nahi pahuncha: ${(e as Error).message}`);
  process.exit(1);
}

const body = (await res.json().catch(() => ({}))) as Status;
const m = body.mock;
console.log(`[mock] ${url} -> HTTP ${res.status}`);
if (!m || typeof m.formsDeclared !== "number" || typeof m.formsComplete !== "number") {
  console.error("[mock] ye deployment mock report hi nahi karta — purana build hai");
  process.exit(1);
}
console.log(`[mock] ${m.formsDeclared} form declare hain, ${m.formsComplete} mukammal hain`);

// An empty bank means this check is measuring nothing, which is what a green
// that cannot go red looks like. The same rule check-prod-migrations.mts applies
// to a migration folder it could not read.
if (m.formsDeclared === 0) {
  console.error("[mock] 🔴 SIFAR form declare huay — ye jaanch kuch naap hi nahi rahi");
  process.exit(1);
}
// The repo side of the same question. A form whose rows were DELETED rather than
// deactivated is invisible to the endpoint — it reports one fewer form declared
// and the rest complete — so the count is taken from the source as well.
const inRepo = formTagsInRepo();
console.log(`[mock] source mein ${inRepo.length} form declare hain: ${inRepo.join(", ")}`);
if (inRepo.length === 0) {
  console.error("[mock] 🔴 source mein SIFAR form mile — checkout hi nahi hai, ye jaanch kuch naap nahi rahi");
  process.exit(1);
}
if (inRepo.length !== m.formsDeclared) {
  console.error(
    `[mock] 🔴 source ${inRepo.length} form declare karta hai, database sirf ${m.formsDeclared} — ek pura form GHAYAB hai`,
  );
  console.error("[mock] rows RETIRE hote hain, DELETE nahi — is liye ye farq ek gum-shuda form hai, retire nahi");
  console.error("[mock] ilaj: npx tsx scripts/bank-state.mts — dekhein kis form ke rows database mein hain hi nahi");
  process.exit(1);
}

if (m.startable !== true) {
  console.error("[mock] 🔴 koi form MUKAMMAL nahi — full mock START HI NAHI HO SAKTA");
  console.error("[mock] Start dabane par learner /practice?mockempty=1 par jaata hai, aur wo flag koi nahi parhta");
  console.error("[mock] ilaj: npx tsx scripts/bank-state.mts — dekhein kis part ke rows active nahi hain");
  process.exit(1);
}
if (m.formsComplete < m.formsDeclared) {
  const short = m.formsDeclared - m.formsComplete;
  console.error(`[mock] 🔴 ${short} form mukammal nahi raha (${m.formsComplete}/${m.formsDeclared})`);
  console.error("[mock] jis learner ko wo form milta, use kuch nahi milta — baqi form chalne se ye theek nahi hota");
  console.error("[mock] ilaj: npx tsx scripts/bank-state.mts — dekhein kis part ke rows active nahi hain");
  process.exit(1);
}
console.log(
  `[mock] ✅ source ${inRepo.length} = database ${m.formsDeclared}, ${m.formsComplete} mukammal — full mock start ho sakta hai (itemsActive ${body.itemsActive})`,
);
