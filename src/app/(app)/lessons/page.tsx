// /lessons — every lesson, grouped: Writing (one per criterion), Speaking (linguistic + clinical communication), and one
// technique lesson per Reading/Listening part. Phone first: one column of large tap targets, no client script.
import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { LESSONS, LESSON_AREAS, lessonHref } from "@/lib/oet/lessons";

export default async function LessonsIndex() {
  await requireUser();
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">Lessons</p>
        <h1 className="mt-1 text-2xl font-semibold text-almi-ink">How each part is marked</h1>
        <p className="mt-2 text-sm text-almi-text-muted">
          Short lessons: what the assessor looks for, a few clear rules, a weak and a good example, and three questions to check yourself.
        </p>
      </header>
      {LESSON_AREAS.map((a) => (
        <section key={a.area} data-lesson-area={a.area}>
          <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">{a.label}</h2>
          <p className="mt-1 text-sm text-almi-text">{a.blurb}</p>
          <ul className="mt-3 space-y-2">
            {LESSONS.filter((l) => l.area === a.area).map((l) => (
              <li key={l.id}>
                <Link
                  href={lessonHref(l)}
                  data-lesson-link={l.id}
                  className="flex min-h-[52px] items-center justify-between gap-3 rounded-2xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-[15px] font-semibold text-almi-ink"
                >
                  <span>{l.title}</span>
                  <span aria-hidden className="text-almi-accent-deep">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
