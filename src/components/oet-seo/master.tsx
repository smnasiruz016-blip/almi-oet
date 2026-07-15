// Shared bottom-of-page chrome for every OET SEO landing page. One source of
// truth for the honesty doctrine: not-affiliated, never-copied, admission≠visa,
// Shamool pledge, and the family cross-links. Tone matches the master landing
// copy (doctrine-clean, no banned verbs).

import Link from "next/link";

export function OetSeoCrossLinks() {
  const links = [
    { href: "https://almicv.almiworld.com", label: "AlmiCV", blurb: "Build a role-ready healthcare CV for the country you're registering in." },
    { href: "https://almijob.almiworld.com", label: "AlmiJob", blurb: "Find healthcare roles and employers hiring internationally." },
    { href: "https://almistudy.almiworld.com", label: "AlmiStudy", blurb: "Compare study and conversion routes by country and subject." },
    { href: "https://almipathway.almiworld.com", label: "AlmiPathway", blurb: "Map the migration route — registration is separate from the visa." },
  ];
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">
        Moving abroad for healthcare work?
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4 transition hover:border-almi-coral"
          >
            <p className="text-sm font-semibold text-almi-ink">{l.label}</p>
            <p className="mt-1 text-sm text-almi-text">{l.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function OetSeoCta() {
  return (
    <section className="border-t border-almi-bg-peach bg-almi-paper px-6 py-12 text-center">
      <h2 className="text-2xl font-semibold text-almi-ink">Practise the real OET sub-tests</h2>
      <p className="mt-2 text-sm text-almi-text">
        Honest grades per sub-test on the 0–500 scale — graded on clinical communication, never on
        your accent.
      </p>
      <Link
        href="/practice"
        className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
      >
        Practise free
      </Link>
    </section>
  );
}

export function OetSeoShamool() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-6">
      <p className="rounded-2xl border border-almi-teal/30 bg-almi-teal/5 px-5 py-4 text-sm text-almi-text">
        AlmiOET is part of the AlmiWorld family. 25% of what the family earns goes to the{" "}
        <span className="font-semibold text-almi-ink">Shamool Foundation</span>, which provides free
        education and daily meals to underprivileged children in Lahore, Pakistan — so the practice
        you do here helps fund a place for someone else.
      </p>
    </section>
  );
}

export function OetSeoDisclaimer() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-12">
      <p className="text-xs text-almi-text-muted">
        AlmiOET is independent and not affiliated with, endorsed by, or connected to OET or Cambridge
        Boxhill Language Assessment. All practice material is original and never copied from the
        Occupational English Test. Scores shown here are honest practice estimates, not official OET
        results. Registration is not the same as a visa, and recognition and required grades change —
        always confirm the current requirement with your regulator or the organisation before you rely
        on it.
      </p>
    </section>
  );
}

/**
 * A sourced acceptance condition for one organisation (see lib/oet-seo/org-notes.ts).
 * Rendered above the fold, because these are the conditions that invalidate an otherwise
 * valid test — a candidate who reads "this organisation accepts OET" and nothing else can
 * sit the wrong kind of sitting and have it rejected. Always shows its source and the date
 * we last read it, so a reader can check us and see how fresh the claim is.
 */
export function OetSeoOrgNote({
  note,
  sourceUrl,
  sourceLabel,
  verifiedOn,
}: {
  note: string;
  sourceUrl: string;
  sourceLabel: string;
  verifiedOn: string;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-almi-coral bg-almi-paper p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-almi-coral-deep">
        Important — how the test must be taken
      </p>
      <p className="mt-2 text-sm text-almi-text">{note}</p>
      <p className="mt-3 text-xs text-almi-text-muted">
        Source:{" "}
        <a href={sourceUrl} rel="nofollow noopener" className="font-semibold text-almi-coral underline">
          {sourceLabel}
        </a>{" "}
        · verified {verifiedOn}. Rules change — confirm before you book.
      </p>
    </div>
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

/** The honest "what grade do I need" line, reused across pages. */
export const GRADE_DOCTRINE =
  "Most regulators ask for Grade B (350) in each sub-test; some accept C+ (300) or set their own per-sub-test rules. Always confirm the exact requirement with the organisation you're applying to.";
