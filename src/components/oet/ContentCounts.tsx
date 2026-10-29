import { prisma } from "@/lib/prisma";
import { formCompleteness } from "@/lib/oet/form-completeness";
import { PROFESSION_LIST } from "@/lib/oet/professions";

/**
 * RR-345 (owner, 29 Oct 2026) · THE TRUE CONTENT COUNTS on the home and pricing pages — read from the live bank (active items only, the
 * same `active: true` /api/status counts) and the mock forms a learner can really start (`formCompleteness`, the function the mock
 * picker uses). Never a typed number: a typed "676" goes stale the day an item is retired. If the database cannot be read (a build with
 * no DATABASE_URL), the line is left out — never a guess.
 *
 * 🔴 Writing and Speaking are per profession: "180 letters" would read as 180 for YOUR profession when it is 15. So those two are said
 * as the SMALLEST count any one profession has ("at least 15 for your profession"), from the same query.
 */
export type LiveCounts = { total: number; listening: number; reading: number; writingEach: number; speakingEach: number; mocks: number; professions: number };

export async function liveCounts(): Promise<LiveCounts | null> {
  try {
    const [rows, forms] = await Promise.all([
      prisma.oetItem.groupBy({ by: ["subTest", "profession"], where: { active: true }, _count: true }),
      formCompleteness(),
    ]);
    const sum = (s: string) => rows.filter((r) => r.subTest === s).reduce((a, r) => a + r._count, 0);
    const each = (s: string) => Math.min(...PROFESSION_LIST.map((p) => rows.filter((r) => r.subTest === s && r.profession === p.profession).reduce((a, r) => a + r._count, 0)));
    const total = rows.reduce((a, r) => a + r._count, 0);
    if (!total) return null;
    return { total, listening: sum("LISTENING"), reading: sum("READING"), writingEach: each("WRITING"), speakingEach: each("SPEAKING"), mocks: forms.startable ? forms.complete.length : 0, professions: PROFESSION_LIST.length };
  } catch {
    return null;
  }
}

export function countsLine(c: LiveCounts): string {
  // thousands with a comma, no locale call (gate:dates: a toLocale* call can be read two ways)
  const n = (x: number) => String(Math.trunc(x)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${n(c.total)} practice items in all 12 professions: ${n(c.listening)} Listening and ${n(c.reading)} Reading for everyone; at least ${n(c.writingEach)} Writing letters and ${n(c.speakingEach)} Speaking role-plays for your own profession${c.mocks ? ` · ${c.mocks} full timed mock exam${c.mocks === 1 ? "" : "s"}` : ""}`;
}

export async function ContentCounts({ className = "" }: { className?: string }) {
  const c = await liveCounts();
  if (!c) return null;
  return <p data-content-counts className={`font-semibold text-almi-ink ${className}`}>{countsLine(c)}</p>;
}
