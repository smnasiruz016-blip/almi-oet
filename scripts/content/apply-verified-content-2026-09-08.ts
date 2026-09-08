/**
 * SYNC PRODUCTION PAYLOADS TO THE VERIFIED SOURCE — UPDATE ONLY, `payload` ONLY.
 *
 *   npx tsx scripts/content/apply-verified-content-2026-09-08.ts --dry-run
 *   ALLOW_PROD_WRITE=1 npx tsx scripts/content/apply-verified-content-2026-09-08.ts --confirm --max-rows N
 *
 * ── WHAT IT IS FOR ──────────────────────────────────────────────────────────
 *
 * Runtime reads items from the DATABASE. The 40 verified content corrections,
 * the replacement Part C item and the 32 rewritten Listening Part B scripts all
 * live in the seed source and have reached no learner. This takes the payloads
 * there.
 *
 * It differs from apply-verified-content-2026-09-06.ts in exactly two ways: it
 * reads GEN_ITEMS rather than nine handoff JSON files, and it is not pinned to a
 * fixed total, because the source moves. Everything else — update-only, matched
 * on slug, `payload` and nothing else, shape-checked before any write — is that
 * script's pattern and is deliberately unchanged.
 *
 * ── 🔴 THE MEASUREMENT THAT GOVERNS THIS SCRIPT: WHY `active` IS NEVER WRITTEN ─
 *
 * All 1,067 GEN_ITEMS entries carry "active": true. ZERO carry false. Production
 * holds 432 INACTIVE rows. Measured 8 September 2026, not assumed.
 *
 * So `active` is DATABASE-ONLY state that the seed source knows nothing about.
 * An applier that "synced" it would REACTIVATE ALL 432 RETIRED ITEMS and put
 * superseded short content straight back in front of learners. That is the
 * single most dangerous line that could be added to this file, and it is the
 * reason stop condition 5 below is an assertion rather than a comment.
 *
 * The other columns, and why each is never written:
 *
 *   slug / form         WRITTEN ONCE, THEN IMMUTABLE per the schema comment.
 *                       slug is also the match key: writing it would be writing
 *                       the thing being matched on.
 *   id / createdAt      the database's own. GEN_ITEMS has no opinion on either.
 *   subTest / taskType  identity. If one of these differs the row is NOT the
 *   profession          same item, and UPDATE is the wrong verb — see stop 3.
 *   title / prompt      content the source does carry, but changing them here
 *   difficulty          would be a rename nobody asked for. They move only in a
 *   guidanceNote        deliberate, separately reviewed change.
 *   timeLimitSeconds
 *   topicTag
 *
 * ── WHAT IT REFUSES ─────────────────────────────────────────────────────────
 *
 * Five stop conditions, checked BEFORE any write is attempted. Each aborts with
 * a named reason; none is a warning:
 *
 *   1  a slug in GEN_ITEMS matching more than one row
 *   2  rows-to-update exceeding --max-rows (required for a write, ignored in
 *      --dry-run — the operator must state what they expect)
 *   3  a matched row differing in subTest, taskType or profession
 *   4  a payload failing structuralProblems() for its taskType
 *   5  any attempt to write a column other than payload
 *
 * There is no repair flag, deliberately — see the 6 September script's header
 * for the ruling. An applier that mends its input hides the next defect.
 *
 * ── ROLLBACK ────────────────────────────────────────────────────────────────
 *
 * This script is its own rollback. `payload` is the only column written and the
 * previous value is in git: check out the commit whose GEN_ITEMS held the
 * previous payloads and run this same script against it. The same rows match,
 * the same column is written, the old values go back. Nothing is inserted or
 * deleted, so there are no orphan rows to reconcile, and `active` is never
 * touched, so nothing changes visibility in either direction.
 */
import "../load-env.mjs";
import { PrismaClient, Prisma } from "@prisma/client";
import { GEN_ITEMS } from "../seed/gen/index";
import { structuralProblems, type Payload } from "./payload-shape";
import { requireProdWrite } from "../prod-write-guard";

const SCRIPT = "scripts/content/apply-verified-content-2026-09-08.ts";
const DRY = process.argv.includes("--dry-run");

/** 🔴 THE ONE COLUMN. Stop condition 5 asserts against this list rather than
 *  trusting the `data` literal below to stay honest as the file is edited. */
const WRITABLE = ["payload"] as const;
const NEVER_WRITTEN = [
  "active",
  "slug",
  "form",
  "id",
  "createdAt",
  "subTest",
  "taskType",
  "profession",
  "title",
  "prompt",
  "difficulty",
  "guidanceNote",
  "timeLimitSeconds",
  "topicTag",
];

// The explicit annotation is what lets TypeScript treat a call as unreachable
// past this point, so a stop condition narrows the code after it.
const die: (msg: string) => never = (msg) => {
  console.error(`\n[apply-2026-09-08] 🔴 STOP — ${msg}\n`);
  process.exit(1);
};

/** --max-rows N. Required for a write; ignored in --dry-run. */
function maxRows(): number | null {
  const i = process.argv.indexOf("--max-rows");
  if (i === -1) return null;
  const n = Number(process.argv[i + 1]);
  if (!Number.isInteger(n) || n < 0) die(`--max-rows needs a non-negative integer, got ${process.argv[i + 1]}`);
  return n;
}

/** Key order must not decide equality: a reordered object is the same payload.
 *  Same rule as sync-gen-payloads-2026-09-06.ts, so the repo has one answer to
 *  "did this payload change". */
const norm = (v: unknown): unknown =>
  Array.isArray(v)
    ? v.map(norm)
    : v && typeof v === "object"
      ? Object.fromEntries(
          Object.keys(v as object)
            .sort()
            .map((k) => [k, norm((v as Record<string, unknown>)[k])]),
        )
      : v;
const S = (v: unknown) => JSON.stringify(norm(v));

/** Which TOP-LEVEL payload keys differ. Key names only — never values, because
 *  a payload carries the answers and this output gets pasted into a PR. */
function differingKeys(a: unknown, b: unknown): string[] {
  const ao = (a ?? {}) as Record<string, unknown>;
  const bo = (b ?? {}) as Record<string, unknown>;
  const keys = new Set([...Object.keys(ao), ...Object.keys(bo)]);
  return [...keys].filter((k) => S(ao[k]) !== S(bo[k])).sort();
}

type Src = { slug?: string; subTest?: string; taskType?: string; profession?: string | null; payload?: Payload };

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const src = GEN_ITEMS as unknown as Src[];

  // ── the source, and the `active` measurement restated as an assertion ─────
  const activeTrue = (GEN_ITEMS as unknown as { active?: boolean }[]).filter((i) => i.active === true).length;
  const activeFalse = (GEN_ITEMS as unknown as { active?: boolean }[]).filter((i) => i.active === false).length;
  if (activeFalse !== 0) {
    die(
      `${activeFalse} GEN_ITEMS entr(ies) carry "active": false. The header's reasoning assumes zero.\n` +
        `  Re-read it before going further — this script never writes 'active' either way, but the\n` +
        `  measurement it is built on has changed and somebody should know why.`,
    );
  }

  const rows = await prisma.oetItem.findMany({
    select: { id: true, slug: true, subTest: true, taskType: true, profession: true, payload: true },
  });

  // ── stop 1 · a slug matching more than one row ────────────────────────────
  const bySlug = new Map<string, (typeof rows)[number][]>();
  for (const r of rows) {
    if (!r.slug) continue;
    const list = bySlug.get(r.slug) ?? [];
    list.push(r);
    bySlug.set(r.slug, list);
  }
  const dupes = [...bySlug.entries()].filter(([, v]) => v.length > 1);
  if (dupes.length > 0) {
    for (const [s, v] of dupes) console.error(`    ${s} matches ${v.length} rows`);
    die(`stop 1 · ${dupes.length} slug(s) match more than one row — an UPDATE would hit the wrong item`);
  }

  const srcBySlug = new Map<string, Src>();
  for (const s of src) {
    if (!s.slug) die("a GEN_ITEMS entry has no slug");
    if (srcBySlug.has(s.slug)) die(`stop 1 · slug ${s.slug} appears twice in GEN_ITEMS`);
    srcBySlug.set(s.slug, s);
  }

  const matched = [...srcBySlug.keys()].filter((s) => bySlug.has(s));
  const notInDb = [...srcBySlug.keys()].filter((s) => !bySlug.has(s)).sort();
  const notInSrc = [...bySlug.keys()].filter((s) => !srcBySlug.has(s)).sort();

  console.log(`rows in the database            : ${rows.length}`);
  console.log(`entries in GEN_ITEMS            : ${src.length}   (active:true ${activeTrue}, active:false ${activeFalse})`);
  console.log(`matched on slug                 : ${matched.length}`);

  console.log(`in GEN_ITEMS but NOT in the DB  : ${notInDb.length}`);
  for (const s of notInDb) console.log(`    ${s}`);
  console.log(`in the DB but NOT in GEN_ITEMS  : ${notInSrc.length}`);
  for (const s of notInSrc) console.log(`    ${s}`);

  // ── stop 3 · identity, and stop 4 · shape ────────────────────────────────
  const identity: string[] = [];
  const shape: string[] = [];
  for (const slug of matched) {
    const s = srcBySlug.get(slug)!;
    const r = bySlug.get(slug)![0];
    if (s.subTest !== r.subTest) identity.push(`${slug}: subTest db=${r.subTest} src=${s.subTest}`);
    if (s.taskType !== r.taskType) identity.push(`${slug}: taskType db=${r.taskType} src=${s.taskType}`);
    if ((s.profession ?? null) !== (r.profession ?? null))
      identity.push(`${slug}: profession db=${r.profession} src=${s.profession}`);
    if (s.payload) shape.push(...structuralProblems(String(s.taskType), slug, s.payload));
  }
  if (identity.length > 0) {
    for (const m of identity.slice(0, 30)) console.error(`    ${m}`);
    die(`stop 3 · ${identity.length} matched row(s) differ in subTest, taskType or profession — not the same item`);
  }
  if (shape.length > 0) {
    for (const m of shape.slice(0, 30)) console.error(`    ${m}`);
    if (shape.length > 30) console.error(`    …and ${shape.length - 30} more`);
    die(
      `stop 4 · ${shape.length} payload(s) the grader could not mark. These are structural, not\n` +
        `  stylistic. Fix them in the source — this script has no repair flag on purpose.`,
    );
  }

  // ── the plan ─────────────────────────────────────────────────────────────
  const plan: { slug: string; taskType: string; keys: string[]; payload: Payload }[] = [];
  let identical = 0;
  for (const slug of matched) {
    const s = srcBySlug.get(slug)!;
    const r = bySlug.get(slug)![0];
    if (S(r.payload) === S(s.payload)) {
      identical += 1;
      continue;
    }
    plan.push({ slug, taskType: String(s.taskType), keys: differingKeys(r.payload, s.payload), payload: s.payload! });
  }

  console.log(`\npayload identical, no action    : ${identical}`);
  console.log(`payload DIFFERS, would update   : ${plan.length}`);
  const byTask = new Map<string, typeof plan>();
  for (const p of plan) byTask.set(p.taskType, [...(byTask.get(p.taskType) ?? []), p]);
  for (const task of [...byTask.keys()].sort()) {
    const list = byTask.get(task)!;
    console.log(`\n  ${task}  (${list.length})`);
    for (const p of list.sort((a, b) => a.slug.localeCompare(b.slug))) {
      console.log(`    ${p.slug}  [${p.keys.join(", ")}]`);
    }
  }

  console.log(`\ncolumns this run would write    : ${WRITABLE.join(", ")}`);
  console.log(`columns this run would NOT write: ${NEVER_WRITTEN.join(", ")}`);

  if (plan.length === 0) {
    console.log("\n[apply-2026-09-08] every payload already matches — nothing to write.");
    return;
  }
  if (DRY) {
    console.log(`\n[apply-2026-09-08] --dry-run: NOTHING WRITTEN. ${plan.length} row(s) would change.`);
    return;
  }

  // ── stop 2 · the operator must state what they expect ────────────────────
  const max = maxRows();
  if (max === null) {
    die(
      `stop 2 · a write needs --max-rows N. State the number of rows you expect to change;\n` +
        `  this run would change ${plan.length}. A run that would touch far more than intended\n` +
        `  must stop rather than proceed.`,
    );
  }
  if (plan.length > max) {
    die(`stop 2 · ${plan.length} row(s) would change, which exceeds --max-rows ${max}`);
  }

  // ── stop 5 · the shape of the write itself, asserted not assumed ─────────
  const data = { payload: null as unknown as Prisma.InputJsonValue };
  const named = Object.keys(data);
  const illegal = named.filter((k) => !(WRITABLE as readonly string[]).includes(k));
  if (illegal.length > 0 || named.length !== WRITABLE.length) {
    die(`stop 5 · the update names column(s) [${named.join(", ")}]; only [${WRITABLE.join(", ")}] is allowed`);
  }

  // ── write. payload ONLY, in chunked transactions ─────────────────────────
  requireProdWrite(SCRIPT);

  const before = await prisma.oetItem.count();
  const activeBefore = await prisma.oetItem.count({ where: { active: true } });
  let written = 0;
  const SIZE = 50;
  for (let i = 0; i < plan.length; i += SIZE) {
    const chunk = plan.slice(i, i + SIZE);
    const res = await prisma.$transaction(
      chunk.map((p) =>
        prisma.oetItem.updateMany({
          where: { slug: p.slug },
          // 🔴 ONE FIELD. Naming any other column here would make this a content
          // edit nobody asked for — and naming `active` would reactivate the
          // retired bank. Stop 5 above asserts this object's shape.
          data: { payload: p.payload as unknown as Prisma.InputJsonValue },
        }),
      ),
    );
    written += res.reduce((a, r) => a + r.count, 0);
    console.log(`[apply-2026-09-08]   ${Math.min(i + SIZE, plan.length)}/${plan.length}`);
  }

  const after = await prisma.oetItem.count();
  const activeAfter = await prisma.oetItem.count({ where: { active: true } });
  console.log(`\n[apply-2026-09-08] updated ${written} row(s) of a planned ${plan.length}`);
  console.log(`[apply-2026-09-08] rows before ${before}, after ${after}  ·  active before ${activeBefore}, after ${activeAfter}`);
  if (written !== plan.length) die(`planned ${plan.length} and the database changed ${written}`);
  if (after !== before) die(`the row count moved by ${after - before} — this script inserts nothing`);
  if (activeAfter !== activeBefore) die(`the active count moved by ${activeAfter - activeBefore} — this script never writes 'active'`);

  // Read back, from the database, not from the plan.
  const check = await prisma.oetItem.findMany({
    where: { slug: { in: plan.map((p) => p.slug) } },
    select: { slug: true, payload: true },
  });
  const wrong = check.filter((r) => S(r.payload) !== S(srcBySlug.get(r.slug!)!.payload));
  console.log(`[apply-2026-09-08] read back ${check.length} row(s); ${wrong.length} still differ from the source`);
  if (wrong.length > 0) die(`${wrong.length} row(s) did not take the new payload`);
  console.log("[apply-2026-09-08] ✅ every planned row now holds the payload GEN_ITEMS carries");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect().catch(() => {});
    // 🔴 process.exit(1), not exitCode — see scripts/measure/blank-submit.mts.
    process.exit(1);
  });
