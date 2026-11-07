// RR-386: the page is a client component and cannot export metadata, so its title, canonical and noindex live here.
// It used to inherit the root default title. Kept out of search; links still followed.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset your password",
  description: "Request a link to reset your AlmiOET password.",
  alternates: { canonical: "/forgot-password" },
  robots: { index: false, follow: true },
};

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return children;
}
