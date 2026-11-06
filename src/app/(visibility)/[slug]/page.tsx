// An AlmiVisibility page at /<slug>, inside AlmiOET's own layout (RR-355; src/lib/visibility-pages.ts says why and how).
// Only the slugs that have a file in visibility-pages/ exist: every other address is the site's normal 404 (dynamicParams = false).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { visibilityPage, visibilitySlugs } from "@/lib/visibility-pages";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return visibilitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = visibilityPage(slug);
  if (!p) return {};
  // RR-378: a page marked noindex is read by visitors and its links followed, but it is not listed in search
  return { title: { absolute: p.title }, description: p.description ?? undefined, alternates: p.canonical ? { canonical: p.canonical } : undefined, ...(p.noindex ? { robots: { index: false, follow: true } } : {}) };
}

export default async function VisibilityPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = visibilityPage(slug);
  if (!p) notFound();
  return (
    <main className="av-page mx-auto w-full max-w-4xl px-4 py-8 sm:px-6" data-visibility-page={p.slug}>
      {p.jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: j }} />
      ))}
      <div dangerouslySetInnerHTML={{ __html: p.main }} />
    </main>
  );
}
