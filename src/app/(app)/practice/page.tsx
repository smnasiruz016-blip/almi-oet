// Practice hub — PROFESSION FIRST.
//
// ── WHY THIS PAGE CHANGED ───────────────────────────────────────────────────
//
// It used to open on eight task-type cards and never mention profession. A
// learner opened it, saw eight cards, and could not tell that fifteen or more
// exercises exist behind each one — and the per-profession Writing and Speaking
// material read as a generic list rather than as theirs.
//
// A real OET sitting is taken as a profession: Listening and Reading are common,
// Writing and Speaking are set in your own clinical world. So the product now
// asks that first and shows the four sub-tests underneath it, which is also how
// the exam itself is organised.
//
// ⚠️ THE IDEA IS BORROWED, NOTHING ELSE. Choosing a profession before seeing the
// material is how the exam works and how its publisher arranges a sample sitting.
// No wording, no icon, no layout and no class from any OET page is reproduced
// here — the copy below is ours, the components are ours, and the blurbs come
// from our own registry. This is a product we sell; a borrowed page would be a
// copyright problem as well as a lazy one.

import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { PROFESSION_LIST } from "@/lib/oet/professions";
import { parseProfession, setTargetProfession } from "@/lib/oet/set-profession";

// The same field /account writes, through the same function, so the two can
// never store different shapes of the same answer.
async function chooseProfession(formData: FormData) {
  "use server";
  const user = await requireUser();
  const profession = parseProfession(formData.get("profession"));
  if (!profession) redirect("/practice");
  await setTargetProfession(user.id, profession);
  const def = PROFESSION_LIST.find((p) => p.profession === profession)!;
  redirect(`/practice/${def.slug}`);
}

export default async function PracticePage() {
  const user = await requireUser();
  // Card-first: the hub itself is behind the subscription, because everything it
  // leads to is.
  if (!hasPaidAccess(user)) redirect("/pricing");

  const current = user.targetProfession ?? null;
  const currentDef = current ? PROFESSION_LIST.find((p) => p.profession === current) : undefined;

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          AlmiOET · Occupational English Test practice
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-almi-ink">Choose your profession</h1>
        <p className="mt-2 max-w-2xl text-sm text-almi-text">
          OET is taken as a profession. Pick yours and you&apos;ll get the Writing and Speaking
          material set in your own clinical world, alongside the Listening and Reading everyone
          sits. You can change it any time, here or on your account.
        </p>
      </header>

      {/* Already chosen: mark it, and let them through in one click rather than
          re-asking on every visit. Deliberately NOT an automatic redirect —
          that would make this page unreachable for anyone wanting to change. */}
      {currentDef && (
        <div className="rounded-2xl border border-almi-coral/30 bg-almi-coral/5 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-coral-deep">
            Your profession
          </p>
          <p className="mt-1 text-lg font-semibold text-almi-ink">{currentDef.label}</p>
          <p className="mt-1 text-sm text-almi-text">{currentDef.blurb}</p>
          <Link
            href={`/practice/${currentDef.slug}`}
            className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            Continue to {currentDef.label} →
          </Link>
        </div>
      )}

      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
          {currentDef ? "Or choose a different profession" : "All 12 OET professions"}
        </h2>
        {/* The grid is PROFESSION_LIST — the registry, never a retyped list. Add a
            profession there and a tile appears here with no edit to this file. */}
        <ul
          data-testid="profession-grid"
          className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROFESSION_LIST.map((p) => {
            const mine = p.profession === current;
            return (
              <li key={p.profession}>
                <form action={chooseProfession} className="h-full">
                  <input type="hidden" name="profession" value={p.profession} />
                  <button
                    type="submit"
                    data-profession={p.profession}
                    aria-current={mine ? "true" : undefined}
                    className={
                      "flex h-full w-full flex-col rounded-2xl border p-5 text-left shadow-sm transition " +
                      (mine
                        ? "border-almi-coral bg-almi-coral/5"
                        : "border-almi-bg-peach bg-almi-paper hover:border-almi-accent")
                    }
                  >
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="text-base font-semibold text-almi-ink">{p.label}</span>
                      {mine && (
                        <span className="shrink-0 rounded-full bg-almi-coral px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-almi-ink">
                          Yours
                        </span>
                      )}
                    </span>
                    <span className="mt-2 text-sm text-almi-text">{p.blurb}</span>
                    <span className="mt-3 text-sm font-semibold text-almi-coral">
                      {mine ? "Open →" : "Choose →"}
                    </span>
                  </button>
                </form>
              </li>
            );
          })}
        </ul>
      </section>

      <p className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-sm text-almi-text">
        <span className="font-semibold text-almi-ink">Listening and Reading are the same for
        every profession.</span>{" "}
        Only Writing and Speaking change with the one you pick — that is how the real OET is built,
        and we are not going to imply we hold twelve separate Listening banks.
      </p>
    </div>
  );
}
