// "My Progress" — recent attempts by sub-test, ported from AlmiPrep's account page.
//
// SAME VIEW, DIFFERENT DATA MODEL. AlmiPrep keeps four attempt tables
// (WritingAttempt, SpeakingAttempt, ListeningAttempt, ReadingAttempt) and reads
// each separately. AlmiOET keeps ONE — `OetAttempt`, discriminated by `subTest`
// — so the queries could not be copied across, but the sections, the ordering,
// the empty states and the row layout are Prep's and are meant to be, because a
// user moving between two AlmiWorld products should not have to relearn where
// their scores live.
//
// TWO DELIBERATE DEVIATIONS FROM THE TEMPLATE, both because OET is not IELTS:
//
//   1. NO "Band X.X". OET reports 0–500 with an A–E grade per sub-test. A band
//      number here would be an IELTS artefact on an OET product.
//   2. NO "Combined avg". Prep shows writing/speaking/combined; OET publishes no
//      composite and `overallScoreSupported()` returns false, so averaging across
//      sub-tests would invent the one number OET refuses to give. Per-sub-test
//      averages only, and the page says why.

import Link from "next/link";
import type { OetAttempt, OetItem, OetSubTest } from "@prisma/client";
import { SUBTEST_LABEL } from "@/lib/oet/types";

export type ProgressAttempt = Pick<
  OetAttempt,
  "id" | "subTest" | "taskType" | "gradeEstimate" | "submittedAt" | "sessionId" | "pointsEarned" | "pointsMax"
> & { item: Pick<OetItem, "title"> | null };

type Estimate = { lo: number; hi: number; grade: string };

function estimateOf(a: ProgressAttempt): Estimate | null {
  const g = a.gradeEstimate as unknown;
  if (!g || typeof g !== "object") return null;
  const e = g as Partial<Estimate>;
  if (typeof e.lo !== "number" || typeof e.hi !== "number" || typeof e.grade !== "string") return null;
  return { lo: e.lo, hi: e.hi, grade: e.grade };
}

/** Midpoint of the estimate range — used only for the per-sub-test average,
 *  never shown as a score on its own. */
function midpoint(e: Estimate): number {
  return Math.round((e.lo + e.hi) / 2);
}

function ScoreBadge({ attempt }: { attempt: ProgressAttempt }) {
  const e = estimateOf(attempt);
  if (!e) {
    // Scored but with too little evidence for an estimate — say so rather than
    // showing a zero, which would read as a result.
    return (
      <span className="shrink-0 rounded-md bg-almi-bg-peach px-3 py-1 text-xs font-semibold text-almi-text-muted">
        Not enough to estimate
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-md bg-almi-coral/15 px-3 py-1 text-sm font-bold text-almi-ink">
      {e.lo}–{e.hi} · {e.grade}
    </span>
  );
}

function AttemptRow({ attempt }: { attempt: ProgressAttempt }) {
  const title = attempt.item?.title ?? attempt.taskType.replace(/_/g, " ").toLowerCase();
  const when = attempt.submittedAt ? new Date(attempt.submittedAt).toLocaleDateString() : "";
  const href = attempt.sessionId ? `/practice/session/${attempt.sessionId}` : null;
  return (
    <li className="flex items-center justify-between gap-3 rounded-xl border border-almi-bg-peach bg-almi-bg px-4 py-3">
      <div className="min-w-0">
        {href ? (
          <Link href={href} className="font-medium text-almi-ink hover:text-almi-coral">
            {title}
          </Link>
        ) : (
          <span className="font-medium text-almi-ink">{title}</span>
        )}
        <p className="text-xs text-almi-text-muted">{when}</p>
      </div>
      <ScoreBadge attempt={attempt} />
    </li>
  );
}

function Section({
  heading,
  practiceHref,
  practiceLabel,
  attempts,
  emptyNote,
}: {
  heading: string;
  practiceHref: string;
  practiceLabel: string;
  attempts: ProgressAttempt[];
  emptyNote: string;
}) {
  return (
    <section className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-6 shadow-sm">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-semibold text-almi-ink">{heading}</h2>
        <Link href={practiceHref} className="shrink-0 text-xs font-medium text-almi-coral hover:underline">
          {practiceLabel} →
        </Link>
      </div>
      {attempts.length === 0 ? (
        <p className="mt-3 text-sm text-almi-text-muted">{emptyNote}</p>
      ) : (
        <ul className="mt-4 space-y-2 text-sm">
          {attempts.map((a) => (
            <AttemptRow key={a.id} attempt={a} />
          ))}
        </ul>
      )}
    </section>
  );
}

const SUBTEST_SECTIONS: { subTest: OetSubTest; heading: string; href: string; label: string; empty: string }[] = [
  {
    subTest: "WRITING",
    heading: "Recent writing",
    href: "/practice/writing-letter",
    label: "Practise writing",
    empty: "No evaluated writing attempts yet. Pick a letter task to begin.",
  },
  {
    subTest: "SPEAKING",
    heading: "My speaking attempts",
    href: "/practice/speaking-roleplay",
    label: "Practise speaking",
    empty: "No evaluated speaking attempts yet. Pick a role-play to begin.",
  },
  {
    subTest: "LISTENING",
    heading: "My listening tests",
    href: "/practice/listening-part-a",
    label: "Practise listening",
    empty: "No completed listening tests yet.",
  },
  {
    subTest: "READING",
    heading: "My reading tests",
    href: "/practice/reading-part-a",
    label: "Practise reading",
    empty: "No completed reading tests yet.",
  },
];

export function MyProgress({ attempts }: { attempts: ProgressAttempt[] }) {
  const bySubTest = new Map<OetSubTest, ProgressAttempt[]>();
  for (const a of attempts) {
    const list = bySubTest.get(a.subTest) ?? [];
    list.push(a);
    bySubTest.set(a.subTest, list);
  }

  const averages = SUBTEST_SECTIONS.map((s) => {
    const mids = (bySubTest.get(s.subTest) ?? [])
      .map(estimateOf)
      .filter((e): e is Estimate => e !== null)
      .map(midpoint);
    return {
      subTest: s.subTest,
      n: mids.length,
      avg: mids.length ? Math.round(mids.reduce((x, y) => x + y, 0) / mids.length) : null,
    };
  });
  const anyScored = averages.some((a) => a.avg !== null);

  return (
    <div className="space-y-6">
      {anyScored && (
        <section className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-almi-ink">Your practice estimates</h2>
          <p className="mt-1 text-sm text-almi-text">
            The average of your scored attempts in each sub-test, on the OET 0–500 scale. OET reports each
            sub-test separately and publishes no overall score, so there is no combined figure here — the
            weakest sub-test is the one that decides an application.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {averages.map((a) => (
              <div key={a.subTest} className="rounded-xl border border-almi-bg-peach bg-almi-bg px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-almi-text-muted">
                  {SUBTEST_LABEL[a.subTest]}
                </p>
                <p className="mt-1 text-2xl font-bold text-almi-ink">{a.avg ?? "—"}</p>
                <p className="text-xs text-almi-text-muted">
                  {a.n === 0 ? "no scored attempts" : `${a.n} scored attempt${a.n === 1 ? "" : "s"}`}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-almi-text-muted">
            Practice estimates only — never an official Occupational English Test result.
          </p>
        </section>
      )}

      {SUBTEST_SECTIONS.map((s) => (
        <Section
          key={s.subTest}
          heading={s.heading}
          practiceHref={s.href}
          practiceLabel={s.label}
          attempts={bySubTest.get(s.subTest) ?? []}
          emptyNote={s.empty}
        />
      ))}
    </div>
  );
}
