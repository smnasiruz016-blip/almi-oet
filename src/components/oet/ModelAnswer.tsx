// B2/B3 (owner, 30 Oct 2026) · THE MODEL ANSWER, shown only AFTER the attempt: a Writing item's model letter with why it is written so,
// and a Speaking card's model role-play as a dialogue with the patient's concern and the safety points. Never before the learner
// answers: the composer never receives them (src/lib/oet/sanitize-payload.ts), and this component is rendered only by the result
// screens — OetResult (a practice step) and OetSessionResult (the mock's final review). Collapsible, phone first, no client script.
import type { OetItem } from "@prisma/client";
import type { ModelLetter } from "@/lib/oet/tasks/writing-letter";
import type { ModelScript } from "@/lib/oet/tasks/speaking-roleplay";

const box = "rounded-2xl border border-almi-bg-peach bg-almi-paper";
const summary = "flex min-h-[48px] cursor-pointer items-center justify-between gap-3 px-4 py-3 text-base font-semibold text-almi-ink";
const label = "text-xs font-bold uppercase tracking-wider text-almi-text-muted";

function Letter({ l, range }: { l: ModelLetter; range: string | null }) {
  return (
    <div className="space-y-4 px-4 pb-5">
      <article data-model-letter className="rounded-xl border border-almi-bg-peach bg-white px-4 py-4 text-[15px] leading-relaxed text-almi-ink">
        <div className="space-y-0.5">{l.header.map((h, i) => <p key={i}>{h}</p>)}</div>
        <p className="mt-4">{l.salutation}</p>
        <p className="mt-2 font-semibold">{l.re}</p>
        <div className="mt-3 space-y-3">{l.body.map((b, i) => <p key={i}>{b}</p>)}</div>
        <p className="mt-4">{l.valediction}</p>
        <div className="mt-6 space-y-0.5">{l.signoff.map((s, i) => <p key={i}>{s}</p>)}</div>
      </article>
      <p className="text-xs text-almi-text-muted">{l.bodyWords} words in the body{range ? ` · the task asks for ${range} words` : ""}.</p>
      <section>
        <h3 className={label}>Why it is written this way</h3>
        <dl className="mt-2 space-y-2 text-sm text-almi-text">
          {([["Opening", l.commentary.opening], ["What was selected", l.commentary.selection], ["Organisation", l.commentary.organisation], ["Tone", l.commentary.tone]] as const).map(([k, v]) => (
            <div key={k}><dt className="font-semibold text-almi-ink">{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </section>
      {l.notesLeftOut.length > 0 && (
        <section>
          <h3 className={label}>Left out on purpose</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-almi-text">{l.notesLeftOut.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </section>
      )}
      {l.safety.length > 0 && (
        <section>
          <h3 className={label}>Safety points the letter must carry</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-almi-text">{l.safety.map((s, i) => <li key={i}>{s.point} <span className="text-almi-text-muted">({s.where})</span></li>)}</ul>
        </section>
      )}
    </div>
  );
}

function Script({ s, concern }: { s: ModelScript; concern: string | null }) {
  return (
    <div className="space-y-4 px-4 pb-5">
      <ol data-model-script className="space-y-2">
        {s.turns.map((t, i) => (
          <li key={i} className={`rounded-xl px-3 py-2 text-[15px] leading-relaxed ${t.who === "C" ? "border border-almi-bg-peach bg-white text-almi-ink" : "bg-almi-bg text-almi-text"}`}>
            <span className="font-semibold">{t.who === "C" ? s.candidateLabel : s.interlocutorLabel}: </span>{t.text}
          </li>
        ))}
      </ol>
      <p className="text-xs text-almi-text-muted">{s.words} words · about five minutes spoken. A model to learn from, not a script to memorise.</p>
      <section>
        <h3 className={label}>The patient&apos;s real concern</h3>
        {concern && <p className="mt-2 text-sm text-almi-ink">{concern}</p>}
        <p className="mt-1 text-sm text-almi-text">How it is drawn out and answered (turns {s.concern.turns.join(", ")}): {s.concern.how}</p>
      </section>
      {s.safety.length > 0 && (
        <section>
          <h3 className={label}>Safety points</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-almi-text">{s.safety.map((x, i) => <li key={i}>{x.point} <span className="text-almi-text-muted">(turn {x.turn})</span></li>)}</ul>
        </section>
      )}
    </div>
  );
}

/** The model answer for an item, or nothing when it has none. Render ONLY after the attempt. */
export function ModelAnswer({ item, open = false }: { item: Pick<OetItem, "taskType" | "payload">; open?: boolean }) {
  const p = (item.payload ?? {}) as { modelLetter?: ModelLetter; modelScript?: ModelScript; patientConcern?: string; wordMin?: number; wordMax?: number };
  if (item.taskType === "WRITING_LETTER" && p.modelLetter) {
    return (
      <details data-model-answer="letter" className={box} open={open}>
        <summary className={summary}>Model answer <span aria-hidden className="text-sm text-almi-text-muted">▾</span></summary>
        <Letter l={p.modelLetter} range={p.wordMin && p.wordMax ? `${p.wordMin}–${p.wordMax}` : null} />
      </details>
    );
  }
  if (item.taskType === "SPEAKING_ROLEPLAY" && p.modelScript) {
    return (
      <details data-model-answer="script" className={box} open={open}>
        <summary className={summary}>Model role-play <span aria-hidden className="text-sm text-almi-text-muted">▾</span></summary>
        <Script s={p.modelScript} concern={p.patientConcern ?? null} />
      </details>
    );
  }
  return null;
}
