// RR-398 · the AlmiWorld family footer (the same columns and links as almiworld.com), from the one generated kit
// (src/lib/almiworld-family.ts + src/components/almiworld/, made by almiworld-site/tools/make-family-kit.mjs). No eBooks, no old
// WordPress links. AlmiOET's own links sit in one row under the columns, including Guides — the published OET guides' own page
// on this site (RR-273, owner GREEN 16 Oct 2026): the one link that lets a reader, and a search engine, reach them through the
// site's own links.
import { AlmiWorldFooter } from "@/components/almiworld/AlmiWorldFooter";

export function GlobalFooter() {
  return (
    <AlmiWorldFooter
      own={[
        { label: "AlmiOET", href: "/" },
        { label: "Practice", href: "/practice" },
        { label: "Pricing", href: "/pricing" },
        { label: "Guides", href: "/guides" },
      ]}
    />
  );
}
