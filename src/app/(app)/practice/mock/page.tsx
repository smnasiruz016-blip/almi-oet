// Full mock start page. All four sub-tests in OET order (Listening → Reading →
// Writing → Speaking), each scored independently into its own 0–500 grade. The
// mock includes AI tasks and is built for the user's profession, so it needs a
// subscription and a chosen profession.

import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { startSession } from "@/lib/oet/session";

async function startMockAction() {
  "use server";
  const user = await requireUser();
  if (!hasPaidAccess(user)) redirect("/pricing");
  if (!user.targetProfession) redirect("/account?needprofession=1");
  const id = await startSession({
    userId: user.id,
    mode: "MOCK",
    profession: user.targetProfession,
  });
  if (!id) redirect("/practice?mockempty=1");
  redirect(`/practice/session/${id}`);
}

export default async function MockStartPage() {
  const user = await requireUser();
  const needsPaid = !hasPaidAccess(user);
  const needsProfession = !user.targetProfession;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">AlmiOET</p>
      <h1 className="text-3xl font-semibold text-almi-ink">Full mock</h1>
      <p className="text-base text-almi-text">
        A full-length practice run across all four sub-tests in OET order — Listening, Reading, the
        clinical-letter Writing task and two Speaking role-plays — in one sitting. Listening and
        Reading are common; Writing and Speaking come from your profession&apos;s bank.
      </p>

      <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 text-sm text-almi-text">
        <p>
          At the end you get an honest 0–500 estimate and an A–E grade for each sub-test — shown as a
          range, not a single number. There is no overall score: OET grades each sub-test on its own,
          so we don&apos;t invent a composite.
        </p>
      </div>

      {needsProfession ? (
        <div className="rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-3 text-sm text-almi-ink">
          Choose your healthcare profession first so the Writing and Speaking tasks match your field.{" "}
          <a href="/account" className="font-semibold underline">
            Set your profession
          </a>
          .
        </div>
      ) : needsPaid ? (
        <div className="rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-3 text-sm text-almi-ink">
          The full mock includes AI feedback and is part of a subscription.{" "}
          <a href="/pricing" className="font-semibold underline">
            See plans
          </a>
          .
        </div>
      ) : (
        <form action={startMockAction}>
          <button
            type="submit"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            Begin full mock →
          </button>
        </form>
      )}

      <p className="text-xs text-almi-text-muted">
        Original to AlmiOET — never copied from OET. Results are a practice estimate, not an official
        Occupational English Test result.
      </p>
    </div>
  );
}
