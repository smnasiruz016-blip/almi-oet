// The 404. It exists so the root layout does not have to render a header: the
// header now belongs to each segment (see src/app/layout.tsx), and without this
// file a not-found page would have no header at all.
//
// Signed-out nav, and static — the same trade recorded on the homepage.

import Link from "next/link";
import { GlobalHeader } from "@/components/GlobalHeader";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col bg-almi-bg">
      <GlobalHeader user={null} />
      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="max-w-md text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">AlmiOET</p>
          <h1 className="mt-2 text-3xl font-semibold text-almi-ink">Page not found</h1>
          <p className="mt-3 text-sm text-almi-text">
            That address does not exist here. The practice library is where the exercises live.
          </p>
          <Link
            href="/practice"
            className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            Go to practice →
          </Link>
        </div>
      </main>
    </div>
  );
}
