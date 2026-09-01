/**
 * HANDWRITTEN-vs-GEN DIVERGENCE CHECK.
 *
 * The four handwritten task files (listening.ts, reading.ts, writing-letter.ts,
 * speaking-roleplay.ts) are NOT seeded. `append.ts` seeds `GEN_ITEMS` and imports
 * the handwritten sets only as a guard: if one of them ever gains an item gen/
 * does not have, that item would be silently dropped from every future seed.
 * That rationale is sound and the guard stays.
 *
 * WHAT IT USED TO MISS. The guard compared (taskType, profession, title) and
 * nothing else. So an item present in BOTH sets with a payload that DISAGREED
 * passed silently. It did:
 *
 *   scripts/seed/gen/speaking_*.ts      prepSeconds: 120   (correct)
 *   scripts/seed/speaking-roleplay.ts   prepSeconds:  60   (wrong, 24 items)
 *
 * for as long as both files existed. G6 in scripts/gates/run.ts reads GEN_ITEMS
 * only, so it could not see the 60s either. Two checks over the same content,
 * and the disagreement between the two copies was the one thing neither looked
 * at. This module closes that: matching keys must now agree on VALUES.
 *
 * ── THE ONE DIFFERENCE THAT IS LEGITIMATE, AND HOW IT IS HANDLED ─────────────
 *
 * gen/*.ts was regenerated FROM the de-gamed production bank, so it carries the
 * option ORDER learners are actually served. The handwritten files carry the
 * PRE-de-game order. That difference is intentional and documented in append.ts.
 *
 * Measured 2026-08-31 across all 60 handwritten items:
 *
 *     MCQ questions with options ... 17
 *     option ORDER differs ......... 13   (the de-game reorder — expected)
 *     option SET differs ...........  0
 *     keyed ANSWER text differs ....  0
 *     stem differs .................  0
 *
 * So the comparison is NOT relaxed with a blanket "skip options" exemption — an
 * exemption is a hole, and skipping options would have hidden a changed
 * distractor or a moved answer key. Instead options are compared on the two
 * things the reorder cannot change:
 *
 *     - the MULTISET of option texts must be identical, and
 *     - the answer key must RESOLVE to the same option TEXT on both sides.
 *
 * Option `id`s and array position are the only things allowed to differ. If the
 * de-game is ever re-run and a distractor is edited in one copy and not the
 * other, this fires.
 *
 * Everything outside `questions[].options` is compared strictly, by value.
 */

type Opt = { id?: string; text?: string };
type Q = { id?: string; answer?: string; options?: Opt[] } & Record<string, unknown>;
type Payload = { questions?: Q[] } & Record<string, unknown>;
export type SeedLike = {
  taskType: string;
  profession?: string | null;
  title: string;
  payload: unknown;
};

export const identityKey = (taskType: string, profession: string | null | undefined, title: string) =>
  `${taskType}::${profession ?? "_"}::${title}`;

const brief = (v: unknown) => {
  const s = JSON.stringify(v);
  return s === undefined ? "undefined" : s.length > 90 ? `${s.slice(0, 90)}…` : s;
};

function deepCompare(a: unknown, b: unknown, path: string, out: string[]): void {
  if (a === b) return;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      out.push(`${path}  length ${a.length} (handwritten) vs ${b.length} (gen/)`);
      return;
    }
    a.forEach((x, i) => deepCompare(x, b[i], `${path}[${i}]`, out));
    return;
  }
  const objA = a && typeof a === "object" && !Array.isArray(a);
  const objB = b && typeof b === "object" && !Array.isArray(b);
  if (objA && objB) {
    const keys = new Set([...Object.keys(a as object), ...Object.keys(b as object)]);
    for (const k of [...keys].sort()) {
      deepCompare(
        (a as Record<string, unknown>)[k],
        (b as Record<string, unknown>)[k],
        path ? `${path}.${k}` : k,
        out,
      );
    }
    return;
  }
  if (JSON.stringify(a) === JSON.stringify(b)) return;
  out.push(`${path}  handwritten=${brief(a)}  gen/=${brief(b)}`);
}

function compareQuestion(a: Q, b: Q, path: string, out: string[]): void {
  const keys = new Set([...Object.keys(a ?? {}), ...Object.keys(b ?? {})]);
  for (const k of [...keys].sort()) {
    if (k === "options" || k === "answer") continue; // handled below
    deepCompare(a?.[k], b?.[k], `${path}.${k}`, out);
  }

  const ao = a?.options;
  const bo = b?.options;
  if (ao || bo) {
    const at = (ao ?? []).map((o) => o.text);
    const bt = (bo ?? []).map((o) => o.text);
    if (at.length !== bt.length) {
      out.push(`${path}.options  ${at.length} option(s) (handwritten) vs ${bt.length} (gen/)`);
    } else {
      const sa = [...at].sort();
      const sb = [...bt].sort();
      if (JSON.stringify(sa) !== JSON.stringify(sb)) {
        out.push(
          `${path}.options  the SET of option texts differs (order is allowed to differ, content is not)\n` +
            `        handwritten: ${brief(sa)}\n` +
            `        gen/       : ${brief(sb)}`,
        );
      }
    }
  }

  // The answer key is compared by the TEXT it resolves to, because the de-game
  // reassigns option ids. Falls back to the raw value where there are no options.
  const ar = ao?.find((o) => o.id === a?.answer)?.text ?? a?.answer;
  const br = bo?.find((o) => o.id === b?.answer)?.text ?? b?.answer;
  if (JSON.stringify(ar) !== JSON.stringify(br)) {
    out.push(`${path}.answer  resolves to ${brief(ar)} (handwritten) vs ${brief(br)} (gen/)`);
  }
}

/** Every way one handwritten payload disagrees with its gen/ twin. */
export function payloadDivergences(handwritten: unknown, gen: unknown): string[] {
  const out: string[] = [];
  const a = (handwritten ?? {}) as Payload;
  const b = (gen ?? {}) as Payload;
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of [...keys].sort()) {
    if (k !== "questions") {
      deepCompare(a[k], b[k], k, out);
      continue;
    }
    const aq = a.questions;
    const bq = b.questions;
    if (!Array.isArray(aq) || !Array.isArray(bq)) {
      deepCompare(aq, bq, "questions", out);
      continue;
    }
    if (aq.length !== bq.length) {
      out.push(`questions  ${aq.length} question(s) (handwritten) vs ${bq.length} (gen/)`);
      continue;
    }
    aq.forEach((q, i) => compareQuestion(q, bq[i], `questions[${i}]`, out));
  }
  return out;
}

export type DivergenceReport = {
  /** Handwritten items with no gen/ twin — these would be silently dropped. */
  orphans: string[];
  /** Items present in both whose payloads disagree. */
  mismatches: { key: string; diffs: string[] }[];
  /** How many handwritten items were actually compared. */
  compared: number;
};

/**
 * gen/ must remain a superset of the handwritten sets BY IDENTITY, and must
 * agree with them BY VALUE wherever both hold the same item.
 */
export function checkHandwrittenAgainstGen(
  handwritten: SeedLike[],
  gen: SeedLike[],
): DivergenceReport {
  const genBy = new Map<string, SeedLike>();
  for (const it of gen) genBy.set(identityKey(it.taskType, it.profession, it.title), it);

  const orphans: string[] = [];
  const mismatches: { key: string; diffs: string[] }[] = [];
  let compared = 0;

  for (const it of handwritten) {
    const k = identityKey(it.taskType, it.profession, it.title);
    const twin = genBy.get(k);
    if (!twin) {
      orphans.push(k);
      continue;
    }
    compared++;
    const diffs = payloadDivergences(it.payload, twin.payload);
    if (diffs.length) mismatches.push({ key: k, diffs });
  }
  return { orphans, mismatches, compared };
}

/** Render a report as the lines a gate or the seeder should print. Empty = clean. */
export function formatDivergenceReport(r: DivergenceReport): string[] {
  const lines: string[] = [];
  for (const k of r.orphans) {
    lines.push(`ORPHAN  ${k}\n        in a handwritten file but NOT in gen/ — it would never be seeded`);
  }
  for (const m of r.mismatches) {
    lines.push(`PAYLOAD ${m.key}`);
    for (const d of m.diffs) lines.push(`        ${d}`);
  }
  return lines;
}
