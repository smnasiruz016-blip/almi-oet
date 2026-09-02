// Auth pages render the SIGNED-OUT header. They are the pages you are on
// because you are not signed in, so "Log in" and the trial CTA are the right
// nav — and keeping the read out of here leaves /forgot-password static.
// The root layout no longer renders a header; see src/app/layout.tsx.

import { GlobalHeader } from "@/components/GlobalHeader";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalHeader user={null} />
      <main className="flex flex-1 items-center justify-center bg-almi-bg px-6 py-12">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </>
  );
}
