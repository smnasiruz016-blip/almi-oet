// The header for the AlmiVisibility pages (RR-355): the signed-out family header, rendered directly — the pages are static
// (render once at build), so no cookie is read here (see the warning at the top of src/components/SiteChrome.tsx).
import { GlobalHeader } from "@/components/GlobalHeader";

export default function VisibilityLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalHeader user={null} />
      {children}
    </>
  );
}
