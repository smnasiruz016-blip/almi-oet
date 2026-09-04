/**
 * gate:no-secret-shape — THE SHAPE OF A SECRET IS PART OF THE SECRET.
 *
 * ── WHY THIS GATE EXISTS ────────────────────────────────────────────────────
 *
 * On 4 September 2026 `src/app/api/billing/health/route.ts` answered an
 * unauthenticated GET with, among other things:
 *
 *     keyLen:   key.length        // the length of the key
 *     keyLast4: key.slice(-4)     // its last four characters
 *
 * where `key` is `process.env.STRIPE_SECRET_KEY` — a LIVE Stripe secret. There
 * is no `src/middleware.ts` in this repo, so nothing stood in front of that
 * route. Anyone who opened the URL was handed the length and the suffix of a
 * live payment credential.
 *
 * 🔴 THE ROUTE'S OWN COMMENT SAID "Exposes NO secret values". That is the part
 * worth keeping in mind. The comment was not lying on purpose — whoever wrote it
 * believed a length and four characters are not "a value". They are. A length
 * fixes the key's format and its entropy; a suffix turns an offline guess into a
 * checkable one, and confirms to anyone holding a leaked key that THIS is the
 * deployment it belongs to. A prose comment cannot be trusted to hold that line,
 * because here the comment and the code drifted apart and nobody noticed. So the
 * line is held by a gate instead.
 *
 * ── WHAT IT CHECKS ──────────────────────────────────────────────────────────
 *
 * Every file under src/app/api/**. Any environment variable whose NAME ends in
 * `_SECRET` or `_KEY` is a subject — read directly as `process.env.X`, or bound
 * to a local (`const key = process.env.X ?? ""`). Running any of these on a
 * subject is RED:
 *
 *     .length  .slice(  .substring(  .substr(  .charAt(  .at(
 *     .charCodeAt(  .codePointAt(          — shape and characters
 *     createHash/createHmac …update(x), md5(x), sha1(x), sha256(x), hash(x)
 *
 * A hash is included because a hash of a secret is a verifier for that secret:
 * publish it and anyone with a candidate key can test it offline, for free.
 *
 * ── WHAT IS DELIBERATELY ALLOWED, AND WHY IT IS NOT A HOLE ──────────────────
 *
 *   `.startsWith("sk_live_")`, `.endsWith(…)`  — a MODE check. It reveals which
 *      of a handful of publicly-documented prefixes a key carries, which the
 *      deployment's own behaviour already reveals. It says nothing about the
 *      secret part.
 *   `k === k.trim()`, `/\s/.test(k)`           — a BOOLEAN about hygiene. No
 *      length, no characters. This is how `keyClean` survives.
 *   `NEXT_PUBLIC_*`                            — public by definition; a
 *      publishable key's length is not a secret. Note that this exempts a CLASS
 *      that is public by construction, not a variable somebody wants to spare.
 *
 * There is no per-variable exemption list and none should be added. An exemption
 * on a name forgives every future use of that name.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src/app/api";

// A subject is an env var whose NAME says it is a credential.
const SECRET_NAME = /^(?!NEXT_PUBLIC_)[A-Z0-9_]*_(SECRET|KEY)$/;

// Operations that read a secret's shape or its characters.
const SHAPE_OPS = [
  "length",
  "slice(",
  "substring(",
  "substr(",
  "charAt(",
  "at(",
  "charCodeAt(",
  "codePointAt(",
] as const;

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx|mts)$/.test(entry)) out.push(p);
  }
  return out;
}

const esc = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

type Finding = { file: string; line: number; env: string; via: string; code: string };

const files = walk(ROOT);
const findings: Finding[] = [];
let subjectsFound = 0;

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const lines = src.split(/\r?\n/);

  // ── every env name in this file that is a credential ────────────────────
  const envNames = new Set<string>();
  for (const m of src.matchAll(/process\.env\.([A-Za-z0-9_]+)/g)) {
    if (SECRET_NAME.test(m[1])) envNames.add(m[1]);
  }
  for (const m of src.matchAll(/process\.env\[\s*["']([A-Za-z0-9_]+)["']\s*\]/g)) {
    if (SECRET_NAME.test(m[1])) envNames.add(m[1]);
  }
  if (envNames.size === 0) continue;

  // ── locals bound to one of them ─────────────────────────────────────────
  // const key = process.env.STRIPE_SECRET_KEY ?? ""   → key
  // const { STRIPE_WEBHOOK_SECRET } = process.env     → STRIPE_WEBHOOK_SECRET
  const subjects = new Map<string, string>(); // identifier → env name it came from
  for (const name of envNames) subjects.set(`process.env.${name}`, name);

  for (const m of src.matchAll(
    /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=\n]+)?=\s*([^;\n]*process\.env\.([A-Za-z0-9_]+)[^;\n]*)/g,
  )) {
    if (SECRET_NAME.test(m[3])) subjects.set(m[1], m[3]);
  }
  for (const m of src.matchAll(/(?:const|let|var)\s*\{([^}]+)\}\s*=\s*process\.env/g)) {
    for (const raw of m[1].split(",")) {
      const name = raw.split(":")[0].trim();
      if (SECRET_NAME.test(name)) subjects.set(name, name);
    }
  }
  subjectsFound += subjects.size;

  // ── the banned operations, per subject, per line ────────────────────────
  for (const [ident, env] of subjects) {
    const id = esc(ident);
    const probes: { re: RegExp; via: string }[] = SHAPE_OPS.map((op) => ({
      re: new RegExp(`${id}\\s*\\.\\s*${esc(op)}`),
      via: `.${op}`,
    }));
    probes.push({
      re: new RegExp(
        `\\b(?:createHash|createHmac|md5|sha1|sha256|sha512|hash)\\s*\\([^)]*\\)[\\s\\S]{0,8}?\\bupdate\\s*\\(\\s*${id}\\b`,
      ),
      via: "hash(update)",
    });
    probes.push({
      re: new RegExp(`\\b(?:md5|sha1|sha256|sha512|hash)\\s*\\(\\s*${id}\\b`),
      via: "hash()",
    });

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const t = line.trim();
      if (t.startsWith("*") || t.startsWith("//") || t.startsWith("/*")) continue; // prose, not code
      for (const p of probes) {
        if (p.re.test(line)) {
          findings.push({ file, line: i + 1, env, via: p.via, code: t });
          break;
        }
      }
    }
  }
}

// A gate over an empty population passes vacuously. Say so instead.
if (files.length === 0) {
  console.error(
    `[gate:no-secret-shape] no file was read under ${ROOT}/ — this gate would pass over nothing`,
  );
  process.exit(1);
}
if (subjectsFound === 0) {
  console.error(
    `[gate:no-secret-shape] ${files.length} file(s) read under ${ROOT}/ but NOT ONE reads a *_SECRET / *_KEY env.\n` +
      "  Either the credentials moved, or the detector stopped matching. Both mean this\n" +
      "  gate is now green over nothing. Fix the detector before trusting a pass.",
  );
  process.exit(1);
}

console.log(
  `[gate:no-secret-shape] ${files.length} file(s) under ${ROOT}/ · ${subjectsFound} secret binding(s) watched`,
);

if (findings.length > 0) {
  console.error(`\n[gate:no-secret-shape] ${findings.length} place(s) read the SHAPE of a secret:`);
  for (const f of findings) {
    console.error(`  ${f.file}:${f.line}  ${f.env} ${f.via}`);
    console.error(`      ${f.code}`);
  }
  console.error(
    "\n  A length fixes a key's format and its entropy. A suffix confirms, to anyone\n" +
      "  holding a leaked key, that it belongs to THIS deployment. A hash is an offline\n" +
      "  verifier for it. None of these are 'not a value'.\n\n" +
      "  Delete the field. If you need to know a key is configured, Boolean(k) says so;\n" +
      '  if you need to know WHICH key, k.startsWith("sk_live_") says that and nothing\n' +
      "  more. Do not add an exemption here — an exemption on a name forgives every\n" +
      "  future use of that name.",
  );
  process.exit(1);
}
console.log(
  "[gate:no-secret-shape] all clear — no route reads the length, the characters, or a hash of a credential",
);
