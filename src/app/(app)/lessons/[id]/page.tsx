// /lessons/<id> — one lesson. Phone first and no client script: the self-check answers open with <details>, so the page
// works on any phone and the learner tries the question before seeing the answer.
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { LESSONS, LESSON_AREAS, lessonById, lessonHref } from "@/lib/oet/lessons";

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  await requireUser();
  const { id } = await params;
  const l = lessonById(id);
  if (!l) notFound();
  const area = LESSON_AREAS.find((a) => a.area === l.area)!;
  const same = LESSONS.filter((x) => x.area === l.area);
  const i = same.findIndex((x) => x.id === l.id);
  const next = same[i + 1];

  return (
    <article className="mx-auto max-w-3xl space-y-5" data-lesson={l.id}>
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          <Link href="/lessons" className="underline">Lessons</Link> · {area.label}
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-almi-ink">{l.title}</h1>
      </header>

      <section className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">What the assessor looks for</h2>
        <p className="mt-2 text-[15px] text-almi-text" data-lesson-looks-for>{l.looksFor}</p>
      </section>

      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">Rules</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-[15px] text-almi-text" data-lesson-rules>
          {l.rules.map((r) => <li key={r}>{r}</li>)}
        </ol>
      </section>

      <section className="space-y-3" data-lesson-example>
        <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">Example</h2>
        <p className="text-sm italic text-almi-text-muted">{l.example.situation}</p>
        <div className="rounded-2xl border border-almi-coral/40 bg-almi-coral/5 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-coral-deep">✗ Weak</p>
          <p className="mt-1 whitespace-pre-line text-[15px] text-almi-text">{l.example.weak}</p>
        </div>
        <div className="rounded-2xl border border-almi-teal/40 bg-almi-teal/5 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-teal">✓ Good</p>
          <p className="mt-1 whitespace-pre-line text-[15px] text-almi-text">{l.example.good}</p>
        </div>
        <p className="text-[15px] text-almi-text"><b>Why:</b> {l.example.why}</p>
      </section>

      <section data-lesson-self-check>
        <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">Check yourself</h2>
        <ol className="mt-2 space-y-3">
          {l.selfCheck.map((q, k) => (
            <li key={q.q} className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4">
              <p className="text-[15px] font-semibold text-almi-ink">{k + 1}. {q.q}</p>
              <ul className="mt-2 space-y-1 text-[15px] text-almi-text">
                {q.options.map((o, j) => <li key={o}><b>{"abc"[j]})</b> {o}</li>)}
              </ul>
              <details className="mt-3">
                <summary className="inline-flex min-h-[44px] cursor-pointer items-center text-sm font-semibold text-almi-accent-deep">Show the answer</summary>
                <p className="mt-1 text-[15px] text-almi-text" data-self-check-answer={q.answer}><b>{q.answer})</b> {q.explain}</p>
              </details>
            </li>
          ))}
        </ol>
      </section>

      <nav className="flex flex-wrap gap-3" aria-label="More lessons">
        {next && (
          <Link href={lessonHref(next)} className="inline-flex min-h-[48px] items-center rounded-full bg-almi-coral px-6 text-sm font-semibold text-almi-ink">
            Next: {next.title} →
          </Link>
        )}
        <Link href="/lessons" className="inline-flex min-h-[48px] items-center rounded-full border border-almi-bg-peach bg-almi-paper px-6 text-sm font-semibold text-almi-ink">
          All lessons
        </Link>
      </nav>
    </article>
  );
}
