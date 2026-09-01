// Logged-in shell. The family GlobalHeader + GlobalFooter come from the root
// layout — this wrapper adds the left Sidebar nav (desktop fixed rail / mobile
// drawer) plus the email-verify banner.

import { requireUser } from "@/lib/auth";
import { logoutAction } from "@/lib/auth/logout-action";
import { EmailVerifyBanner } from "@/components/EmailVerifyBanner";
import { GlobalHeader } from "@/components/GlobalHeader";
import { Sidebar } from "@/components/Sidebar";
import { isAdmin } from "@/lib/founder";

export default async function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await requireUser();
  const admin = isAdmin(user.email);

  return (
    <div className="flex flex-1 flex-col bg-almi-bg">
      {/* 🔴 THE HEADER KNOWS WHO IS HERE. It used to come from the ROOT layout as
          a plain sync component with a hard-coded "Log in" link and a
          "Start 7-day free trial" button — so every page behind requireUser()
          and hasPaidAccess() rendered inside a header telling the paying learner
          to log in and start a trial. This layout already reads the user; the
          header now takes it. See src/components/GlobalHeader.tsx for why the
          read lives here and not one level up. */}
      <GlobalHeader user={user} />
      {!user.emailVerified && <EmailVerifyBanner email={user.email} />}
      <Sidebar email={user.email} isAdmin={admin} logout={logoutAction} />
      <main className="flex-1 px-4 py-8 sm:px-6 md:ml-60 md:px-8">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </main>
    </div>
  );
}
