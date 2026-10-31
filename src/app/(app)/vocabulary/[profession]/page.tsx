// The vocabulary bank of one profession — two tabs (Understand / Use) and a search, phone first, no client script: the tab and the search
// are plain links and a GET form, so the page works on any phone. Behind VOCABULARY_ON (src/lib/oet/vocabulary.ts).
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { OFFER } from "@/lib/billing/offer";
import { Paywall } from "@/components/oet/Paywall";
import { professionBySlug, PROFESSION_LIST } from "@/lib/oet/professions";
import { vocabularyFor, vocabularyOn, VOCABULARY } from "@/lib/oet/vocabulary";

export default async function VocabularyPage({ params, searchParams }: { params: Promise<{ profession: string }>; searchParams: Promise<{ tab?: string; q?: string }> }) {
  if (!vocabularyOn()) notFound();
  const user = await requireUser();
  // 48-hour taste / unpaid: a short sample per tab, then the paywall (owner, 31 Oct 2026).
  const paid = hasPaidAccess(user);
  const { profession: slug } = await params;
  const { tab: rawTab, q: rawQ } = await searchParams;
  const prof = professionBySlug(slug);
  if (!prof || !VOCABULARY[prof.profession]) notFound();
  const tab = rawTab === "use" ? "use" : "understand";
  const q = String(rawQ ?? "").slice(0, 60);
  const all = vocabularyFor(prof.profession, tab, q);
  const rows = paid ? all : all.slice(0, OFFER.tasteVocabularySample);
  const heldBack = all.length - rows.length;
  const href = (t: string) => `/vocabulary/${prof.slug}?tab=${t}${q ? `&q=${encodeURIComponent(q)}` : ""}`;
  const tabCls = (on: boolean) => `inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-semibold ${on ? "bg-almi-coral text-almi-ink" : "border border-almi-bg-peach bg-almi-paper text-almi-text"}`;

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">Vocabulary · {prof.label}</p>
        <h1 className="mt-1 text-2xl font-semibold text-almi-ink">Words for {prof.label}</h1>
        <p className="mt-2 text-sm text-almi-text-muted">
          <b>Understand</b>: words you meet in Reading and Listening. <b>Use</b>: phrases for your letters and your patients, each with the plain
          English a patient understands.
        </p>
      </header>

      <nav aria-label="Vocabulary" className="flex flex-wrap gap-2" data-vocab-tabs>
        <Link href={href("understand")} className={tabCls(tab === "understand")} aria-current={tab === "understand" ? "page" : undefined}>Understand</Link>
        <Link href={href("use")} className={tabCls(tab === "use")} aria-current={tab === "use" ? "page" : undefined}>Use</Link>
      </nav>

      <form method="get" className="flex gap-2" role="search">
        <input type="hidden" name="tab" value={tab} />
        <label className="sr-only" htmlFor="vocab-q">Search</label>
        <input id="vocab-q" name="q" defaultValue={q} placeholder="Search a word or a topic" className="min-h-[48px] flex-1 rounded-xl border border-almi-bg-peach bg-white px-4 text-base text-almi-ink" />
        <button type="submit" className="min-h-[48px] rounded-full bg-almi-ink px-5 text-sm font-semibold text-white">Search</button>
      </form>

      <p className="text-xs text-almi-text-muted" data-vocab-count>
        {paid
          ? `${rows.length} ${rows.length === 1 ? "entry" : "entries"}${q ? ` for “${q}”` : ""}`
          : `Showing ${rows.length} of ${all.length} ${all.length === 1 ? "entry" : "entries"}${q ? ` for “${q}”` : ""}`}
      </p>
      <ul className="space-y-3">
        {rows.map((e) => (
          <li key={e.term} data-vocab-entry className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-almi-ink">{e.term}</h2>
              <span className="text-xs font-semibold text-almi-text-muted">{e.cefr} · {e.pos}</span>
            </div>
            <p className="mt-1 text-[15px] text-almi-text">{e.definition}</p>
            <p className="mt-2 text-[15px] italic text-almi-ink">“{e.example}”</p>
            {e.layer === "use" && e.plain && <p className="mt-2 text-sm text-almi-text"><b>Plain English:</b> {e.plain}</p>}
          </li>
        ))}
      </ul>
      {rows.length === 0 && <p className="text-sm text-almi-text">No entry matches. Try a shorter word.</p>}
      {heldBack > 0 && <Paywall reason="VOCABULARY" />}

      <p className="text-xs text-almi-text-muted">
        Other professions:{" "}
        {PROFESSION_LIST.filter((p) => p.slug !== prof.slug).map((p, i) => (
          <span key={p.slug}>{i > 0 && " · "}<Link href={`/vocabulary/${p.slug}`} className="underline">{p.label}</Link></span>
        ))}
      </p>
    </div>
  );
}
