/**
 * MINT `slug` AND `form` INTO THE SEED SOURCE — ONCE, AND NEVER AGAIN.
 *
 * Run:  npx tsx scripts/seed/gen/_apply_slug_and_form.mts          (dry: reports only)
 *       npx tsx scripts/seed/gen/_apply_slug_and_form.mts --write  (edits gen/*.ts)
 *
 * ── WHY THESE COLUMNS EXIST ─────────────────────────────────────────────────
 *
 * Until now, CODE read the human-facing `title`:
 *   src/lib/oet/accept-lists.ts     keyed its answer overlay by the full title
 *   src/lib/oet/session.ts          parsed "OET Form N · " out of it with a regex
 *   scripts/gates/distractor.ts     196 exemptions keyed by title
 *   scripts/gates/length.ts          31 DEBT rows keyed by title
 *   scripts/gates/accept-lists.ts    16 references keyed by title
 *
 * So renaming an item would have marked a learner's correct answer WRONG with no
 * gate going red, and stopped forms being recognised at all. A title is for a
 * human. Anything the machine needs gets its own column.
 *
 * ── 🔴 THIS SCRIPT IS THE MINT, NOT A DERIVATION ────────────────────────────
 *
 * It runs ONCE. What it writes are LITERALS in gen/*.ts, and from that moment the
 * literal is the value — this file is only the record of how it was first struck.
 * Nothing at runtime recomputes a slug, because a value that is derived on every
 * run is a value a later rename can change, which is the exact coupling these
 * columns remove.
 *
 * It therefore REFUSES to touch any item that already carries a slug. Re-running
 * it after a rename must not re-mint anything: it would hand the same row a new
 * identity, and every accept-list key pointing at the old one would go dead.
 *
 * ── HOW THE SLUG IS STRUCK ──────────────────────────────────────────────────
 *
 *   <task>[-<profession>][-f<N>]-<the title's own words>
 *
 *   lis-a-f1-physiotherapy-consultation-lower-back-pain
 *   wri-podiatry-urgent-referral-suspected-charcot-foot
 *   rea-c-the-tray-that-goes-back-full
 *
 * The task code and the profession are already in the slug, so where the title
 * repeats them ("Podiatry — …", "Listening Part A — …") the repetition is
 * dropped. Measured over the whole bank before anything was written: 1066 items,
 * 1066 distinct slugs, 0 collisions, 0 malformed, 0 empty bodies.
 *
 * ── HOW IT WRITES ───────────────────────────────────────────────────────────
 *
 * BY INSERTION, never by re-emitting the file — the same discipline, and for the
 * same reason, as _apply_partc_kind.mts: a JSON.stringify rebuild silently
 * deleted four comments living inside reading_c.ts's array, and a naive
 * split(/\r?\n/) rewrote 935 lines in a file with MIXED endings. Splitting on
 * "\n" alone keeps each line's own ending inside the line, and an inserted line
 * copies the ending of the line it precedes. The proof is the diff:
 * `git diff --numstat` must show ZERO deletions.
 */
import { readFileSync, writeFileSync } from "node:fs";

const WRITE = process.argv.includes("--write");

const die = (msg: string): never => {
  throw new Error(`[mint-slug] ${msg}`);
};

/** One line per gen module, in the order gen/index.ts imports them. */
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

type Item = {
  taskType: string;
  profession?: string | null;
  title: string;
  slug?: string | null;
  form?: string | null;
};

const TASK_SHORT: Record<string, string> = {
  LISTENING_PART_A: "lis-a", LISTENING_PART_B: "lis-b", LISTENING_PART_C: "lis-c",
  READING_PART_A: "rea-a", READING_PART_B: "rea-b", READING_PART_C: "rea-c",
  WRITING_LETTER: "wri", SPEAKING_ROLEPLAY: "spk",
};

/** The ONLY place "OET Form N · " is read. After the rename PR it reads nothing:
 *  by then every row carries `form`, and no code looks at a title. */
const TITLE_FORM = /^OET Form (\d+) · /;
/** The task's own name, which the task code already carries. */
const TASK_PHRASE = /^(?:listening-|reading-)?part-[abc]-/;

const kebab = (s: string): string =>
  s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function mint(it: Item): { slug: string; form: string | null } {
  const short = TASK_SHORT[it.taskType] ?? die(`unknown taskType ${it.taskType}`);
  const m = TITLE_FORM.exec(it.title);
  let body = kebab(m ? it.title.slice(m[0].length) : it.title);
  const prof = it.profession ? kebab(it.profession) : null;
  if (prof && body.startsWith(`${prof}-`)) body = body.slice(prof.length + 1);
  body = body.replace(TASK_PHRASE, "");
  if (!body) die(`"${it.title}" leaves an empty slug body`);
  return {
    slug: [short, prof, m ? `f${m[1]}` : null, body].filter(Boolean).join("-"),
    form: m ? `form-${m[1]}` : null,
  };
}

// ── 1 · mint every slug and prove the whole set before touching one file ────
type Mod = { name: string; path: string; items: Item[]; minted: { slug: string; form: string | null }[] };
const perModule: Mod[] = [];
let total = 0;

for (const name of MODULES) {
  const mod = (await import(`./${name}`)) as { ITEMS: Item[] };
  const items = mod.ITEMS;
  if (!Array.isArray(items) || items.length === 0) die(`${name} exports no ITEMS`);
  const already = items.filter((i) => i.slug != null);
  if (already.length > 0) {
    die(
      `${name}: ${already.length} item(s) ALREADY carry a slug. A slug is struck once and is then ` +
        `immutable — re-minting would hand a row a new identity and kill every key pointing at the old one.`,
    );
  }
  perModule.push({ name, path: `scripts/seed/gen/${name}.ts`, items, minted: items.map(mint) });
  total += items.length;
}

const seen = new Map<string, string>();
for (const m of perModule) {
  m.minted.forEach((x, i) => {
    const prev = seen.get(x.slug);
    if (prev) die(`slug collision "${x.slug}" — ${prev} and ${m.name}::"${m.items[i].title}"`);
    if (!/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(x.slug)) die(`malformed slug "${x.slug}"`);
    seen.set(x.slug, `${m.name}::"${m.items[i].title}"`);
  });
}
if (seen.size !== total) die(`${total} item(s) but ${seen.size} distinct slug(s)`);

const forms = perModule.flatMap((m) => m.minted.map((x) => x.form)).filter(Boolean) as string[];
const formCounts = forms.reduce<Record<string, number>>((a, f) => ((a[f] = (a[f] ?? 0) + 1), a), {});
console.log(`[mint-slug] ${total} item(s) across ${MODULES.length} module(s) · ${seen.size} distinct slug(s)`);
console.log(
  `[mint-slug] form set on ${forms.length}: ${Object.entries(formCounts).sort().map(([f, n]) => `${f}=${n}`).join(" ")}`,
);

// ── 2 · insert, matching each title line to its item IN ORDER ───────────────
const TITLE_LINE = /^(\s*)"title": ("(?:[^"\\]|\\.)*"),(\s*\r?)$/;
let inserted = 0;

for (const m of perModule) {
  const lines = readFileSync(m.path, "utf8").split("\n");
  const hits: number[] = [];
  for (let i = 0; i < lines.length; i++) if (TITLE_LINE.test(lines[i])) hits.push(i);
  if (hits.length !== m.items.length) {
    die(`${m.path}: ${hits.length} title line(s) for ${m.items.length} item(s)`);
  }
  // The Nth title line must be the Nth item's title, or an insertion would put
  // one item's slug on another's row.
  hits.forEach((li, n) => {
    const got = JSON.parse(lines[li].match(TITLE_LINE)![2]) as string;
    if (got !== m.items[n].title) {
      die(`${m.path} line ${li + 1}: file says "${got}", ITEMS[${n}] says "${m.items[n].title}"`);
    }
  });

  const out: string[] = [];
  let n = 0;
  for (const line of lines) {
    const mt = line.match(TITLE_LINE);
    if (mt) {
      const indent = mt[1];
      // Copy this line's OWN ending, so a CRLF region stays CRLF and an LF region LF.
      const cr = mt[3].endsWith("\r") ? "\r" : "";
      const { slug, form } = m.minted[n];
      out.push(`${indent}"slug": ${JSON.stringify(slug)},${cr}`);
      if (form) out.push(`${indent}"form": ${JSON.stringify(form)},${cr}`);
      inserted += form ? 2 : 1;
      n++;
    }
    out.push(line);
  }
  if (n !== m.items.length) die(`${m.path}: inserted for ${n} of ${m.items.length} item(s)`);
  if (WRITE) writeFileSync(m.path, out.join("\n"), "utf8");
}

console.log(
  `[mint-slug] ${inserted} line(s) ${WRITE ? "INSERTED" : "would be inserted"} (${total} slug + ${forms.length} form)`,
);
console.log(
  WRITE
    ? "[mint-slug] now prove it: `git diff --numstat` must show ZERO deletions."
    : "[mint-slug] dry run — nothing written. Re-run with --write.",
);
