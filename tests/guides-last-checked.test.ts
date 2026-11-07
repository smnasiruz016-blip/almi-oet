// RR-386 (Q&A LAW 5A.6): every published guide's "Last checked" date equals the oldest fact check date it shows.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { GUIDE_SLUGS } from "@/lib/oet-guides/guides";
import { factCheckDates, lastCheckedDate, oldestFactCheckDate, withLastCheckedOldest } from "@/lib/oet-guides/last-checked";

describe("guide Last checked = oldest fact check date", () => {
  for (const slug of GUIDE_SLUGS) {
    it(slug, () => {
      const html = readFileSync(join("public/guides", `${slug}.html`), "utf8");
      expect(factCheckDates(html).length).toBeGreaterThan(0);
      expect(lastCheckedDate(html)).toBe(oldestFactCheckDate(html));
    });
  }

  it("the rewrite moves a newer date back to the oldest and changes nothing else", () => {
    const page = '<p class="checked">Last checked: 2026-10-16</p><span class="src"> · checked 2026-10-15</span>' +
      '<span class="src"> · checked 2026-10-14</span><span class="src"> · 1 AUD = 0.70 USD, 2026-10-12</span>';
    const out = withLastCheckedOldest(page);
    expect(lastCheckedDate(out)).toBe("2026-10-14");
    expect(out.replace("Last checked: 2026-10-14", "Last checked: 2026-10-16")).toBe(page);
  });
});
