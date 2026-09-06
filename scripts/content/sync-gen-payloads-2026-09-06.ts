/**
 * PUT THE VERIFIED PAYLOADS INTO THE SEED SOURCE, SO SOURCE AND DATABASE AGREE.
 *
 *   npx tsx scripts/content/sync-gen-payloads-2026-09-06.ts C:\Projects\_handoffs
 *   npx tsx scripts/content/sync-gen-payloads-2026-09-06.ts C:\Projects\_handoffs --write
 *
 * ── WHY ─────────────────────────────────────────────────────────────────────
 *
 * scripts/content/apply-verified-content-2026-09-06.ts updates 682 rows in the
 * database. The 37 modules under scripts/seed/gen/ still describe the OLD
 * payloads. Left alone, the seed source and production disagree about 682 items,
 * and every gate that reads GEN_ITEMS — length, distractor, accept-lists,
 * partc-kind, claims — measures content that is no longer served. Worse, a future
 * seed or a rebuild from source would silently regress all 682.
 *
 * ── HOW IT WRITES ───────────────────────────────────────────────────────────
 *
 * BY REPLACING THE PAYLOAD BLOCK IN PLACE, never by re-emitting the file. The
 * same discipline as scripts/seed/gen/_apply_partc_kind.mts and
 * _apply_slug_and_form.mts, and for the same measured reasons: a
 * JSON.stringify rebuild silently deleted four comments living inside
 * reading_c.ts's array, and a split(/\r?\n/) rewrote 935 lines in a file with
 * MIXED endings.
 *
 * So: lines are split on "\n" alone, each line keeps its own ending, an inserted
 * line copies the ending of the line it replaces, and nothing outside a payload
 * block is touched. Item order, numbering, comments and the
 * `ITEMS: Prisma.OetItemCreateManyInput[]` export shape are all left exactly as
 * they were.
 *
 * ── AND IT PROVES ITSELF AFTERWARDS ─────────────────────────────────────────
 *
 * A rewrite that looks right is not a rewrite that is right. With --write it
 * re-imports every gen module from disk and compares each of the 682 payloads to
 * the JSON file it came from, under a key-order-independent normalisation. Any
 * mismatch is reported and the script exits 1.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WRITE = process.argv.includes("--write");

const die = (msg: string): never => {
  console.error(`\n[sync-gen] 🔴 ${msg}\n`);
  process.exit(1);
};

const dir = process.argv[2];
if (!dir || dir.startsWith("--")) die("give the directory holding the nine JSON files as the first argument");

const FILES: [string, number][] = [
  ["AlmiOET_Forms_ALL_57_payloads_2026-09-06.json", 57],
  ["AlmiOET_ReadingPartA_15_short_items_2026-09-06.json", 15],
  ["AlmiOET_ReadingPartC_15_short_items_2026-09-06.json", 15],
  ["AlmiOET_ListeningPartA_15_short_items_2026-09-06.json", 15],
  ["AlmiOET_ListeningPartC_15_short_items_2026-09-06.json", 15],
  ["AlmiOET_Writing_dates_and_labels_2026-09-06.json", 169],
  ["AlmiOET_Writing_180_case_notes_2026-09-06.json", 180],
  ["AlmiOET_Speaking_180_cards_2026-09-06.json", 180],
  ["AlmiOET_final_corrections_2026-09-06.json", 36],
];

const MODULES = [
  "listening_a", "listening_a_sets", "listening_b", "listening_b_sets",
  "listening_c", "listening_c_sets", "reading_a", "reading_a_sets",
  "reading_b", "reading_b_sets", "reading_c",
  "speaking_dentistry", "speaking_dietetics", "speaking_medicine", "speaking_nursing",
  "speaking_occupational_therapy", "speaking_optometry", "speaking_pharmacy",
  "speaking_physiotherapy", "speaking_podiatry", "speaking_radiography", "speaking_sets",
  "speaking_speech_pathology", "speaking_veterinary_science",
  "writing_dentistry", "writing_dietetics", "writing_medicine", "writing_nursing",
  "writing_occupational_therapy", "writing_optometry", "writing_pharmacy",
  "writing_physiotherapy", "writing_podiatry", "writing_radiography", "writing_sets",
  "writing_speech_pathology", "writing_veterinary_science",
] as const;

type Row = { slug?: string; payload?: unknown };
const rowsOf = (j: unknown, f: string): Row[] =>
  Array.isArray(j) ? (j as Row[])
  : Array.isArray((j as { items?: unknown })?.items) ? ((j as { items: Row[] }).items)
  : die(`${f}: neither an array nor an object with an "items" array`);

// ── the incoming payloads ───────────────────────────────────────────────────
const wanted = new Map<string, unknown>();
for (const [f, want] of FILES) {
  const rows = rowsOf(JSON.parse(readFileSync(join(dir!, f), "utf8")), f);
  if (rows.length !== want) die(`${f}: ${rows.length} row(s), expected ${want}`);
  for (const r of rows) {
    const slug = r.slug ?? die(`${f}: a row has no slug`);
    if (r.payload === undefined) die(`${f}: ${slug} has no payload`);
    if (wanted.has(slug)) die(`slug ${slug} appears in two files`);
    wanted.set(slug, r.payload);
  }
}
if (wanted.size !== 682) die(`${wanted.size} distinct slug(s) across the nine files, expected 682`);
console.log(`[sync-gen] ${wanted.size} payload(s) to place`);

/** Key order must not decide equality: these files are re-exported by different
 *  tools and a reordered object is the same payload. */
const norm = (v: unknown): unknown =>
  Array.isArray(v) ? v.map(norm)
  : v && typeof v === "object"
    ? Object.fromEntries(Object.keys(v as object).sort().map((k) => [k, norm((v as Record<string, unknown>)[k])]))
    : v;
const S = (v: unknown) => JSON.stringify(norm(v));

// ── replace, in place, one payload block at a time ──────────────────────────
const SLUG_LINE = /^    "slug": ("(?:[^"\\]|\\.)*"),\s*\r?$/;
const PAYLOAD_OPEN = /^    "payload": \{\s*\r?$/;
const BLOCK_CLOSE = /^    \},?\s*\r?$/;

let placed = 0;
const perModule: [string, number][] = [];

for (const name of MODULES) {
  const path = `scripts/seed/gen/${name}.ts`;
  const lines = readFileSync(path, "utf8").split("\n");
  const out: string[] = [];
  let n = 0;

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(SLUG_LINE);
    if (!m) {
      out.push(lines[i]);
      continue;
    }
    const slug = JSON.parse(m[1]) as string;
    const payload = wanted.get(slug);
    if (payload === undefined) {
      out.push(lines[i]);
      continue;
    }

    // Find this item's payload block: it opens at 4-space indent and closes at
    // the first later line that is exactly four spaces then "}" or "},". Nested
    // braces sit at 6 or deeper, and JSON.stringify escapes newlines inside
    // strings, so no string can forge that closing line.
    let open = -1;
    for (let j = i + 1; j < lines.length && open === -1; j++) {
      if (PAYLOAD_OPEN.test(lines[j])) open = j;
      else if (SLUG_LINE.test(lines[j])) break; // ran into the next item
    }
    if (open === -1) die(`${path}: ${slug} has no multi-line "payload": { block`);
    let close = -1;
    for (let j = open + 1; j < lines.length && close === -1; j++) if (BLOCK_CLOSE.test(lines[j])) close = j;
    if (close === -1) die(`${path}: ${slug}'s payload block is never closed at 4-space indent`);

    const cr = lines[open].endsWith("\r") ? "\r" : "";
    const trailingComma = lines[close].includes("},");
    const body = JSON.stringify(payload, null, 2).split("\n");
    const block = [
      `    "payload": ${body[0]}${cr}`,
      ...body.slice(1, -1).map((l) => `    ${l}${cr}`),
      `    ${body[body.length - 1]}${trailingComma ? "," : ""}${cr}`,
    ];

    out.push(lines[i]);                       // the slug line itself
    out.push(...lines.slice(i + 1, open));    // whatever sat between slug and payload
    out.push(...block);
    i = close;                                // skip the old block entirely
    n += 1;
    placed += 1;
  }

  perModule.push([name, n]);
  if (WRITE && n > 0) writeFileSync(path, out.join("\n"), "utf8");
}

for (const [name, n] of perModule) if (n > 0) console.log(`[sync-gen]   ${name.padEnd(32)} ${n}`);
console.log(`[sync-gen] ${placed} payload(s) ${WRITE ? "written" : "would be written"} across ${perModule.filter(([, n]) => n > 0).length} module(s)`);
if (placed !== wanted.size) die(`placed ${placed} of ${wanted.size} — every slug in the files must be found in gen/`);

if (!WRITE) {
  console.log("[sync-gen] dry run — nothing written. Re-run with --write.");
  process.exit(0);
}

// ── prove it, by re-reading what is now on disk ─────────────────────────────
//
// An async IIFE and not top-level await: this file is a `.ts`, which tsx builds
// as CommonJS, where top-level await is a transform error.
void (async () => {
  const { GEN_ITEMS } = (await import("../seed/gen/index")) as {
    GEN_ITEMS: { slug?: string; payload?: unknown }[];
  };
  const bySlug = new Map(GEN_ITEMS.filter((i) => i.slug).map((i) => [i.slug!, i.payload]));
  const mismatched: string[] = [];
  for (const [slug, payload] of wanted) {
    if (!bySlug.has(slug)) mismatched.push(`${slug}: not in GEN_ITEMS after the rewrite`);
    else if (S(bySlug.get(slug)) !== S(payload)) {
      mismatched.push(`${slug}: the payload on disk still differs from its file`);
    }
  }
  console.log(
    `[sync-gen] re-read ${GEN_ITEMS.length} item(s) from disk; compared ${wanted.size}; ${mismatched.length} mismatch(es)`,
  );
  if (mismatched.length > 0) {
    for (const m of mismatched.slice(0, 20)) console.error(`    ${m}`);
    die(`${mismatched.length} payload(s) did not land`);
  }
  console.log("[sync-gen] ✅ every one of the 682 payloads in gen/ now equals the file it came from");
})();
