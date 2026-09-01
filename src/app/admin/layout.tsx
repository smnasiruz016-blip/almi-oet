// Admin panel shell. Gated on ADMIN_EMAILS (isAdmin); noindex. Each server
// action re-gates too (defense in depth). Standalone route — uses the family
// GlobalHeader/Footer from the root layout, with its own sidebar.
//
// The sidebar replaced a horizontal tab strip (AdminSubnav) on 2026-08-31. Every
// admin destination was already reachable from that strip; what was missing was
// a left rail. See AdminSidebar for the full route enumeration.

import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { isAdmin } from "@/lib/founder";
import { GlobalHeader } from "@/components/GlobalHeader";
import { AdminSidebar } from "./_components/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user || !isAdmin(user.email)) redirect("/");

  return (
    <>
      <GlobalHeader user={user} />
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">AlmiOET</p>
          <h1 className="text-2xl font-semibold text-almi-ink">Admin</h1>
        </div>
        <Link href="/account" className="text-sm font-medium text-almi-coral hover:underline">
          ← Account
        </Link>
      </div>
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <AdminSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
    </>
  );
}
