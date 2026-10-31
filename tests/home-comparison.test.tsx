/**
 * The home-page comparison (owner GREEN, 31 Oct 2026): rendered with the live bank faked, it must
 *   · carry the heading, AlmiOET highlighted and first, and every named provider;
 *   · print AlmiOET's numbers FROM THE BANK (change the bank, the cells change), never a typed figure;
 *   · show the CTA "Try free for 48 hours — then $12/month" and the dated, not-affiliated line;
 *   · say no "guarantee" anywhere; keep the page from scrolling sideways (only the table box may).
 */
import { describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

let ROWS: { subTest: string; profession: string | null; _count: number }[] = [];
const PROFS = ["NURSING", "MEDICINE", "DENTISTRY", "DIETETICS", "OCCUPATIONAL_THERAPY", "OPTOMETRY", "PHARMACY", "PHYSIOTHERAPY", "PODIATRY", "RADIOGRAPHY", "SPEECH_PATHOLOGY", "VETERINARY_SCIENCE"];
const bank = (w: number, s: number) => [
  { subTest: "LISTENING", profession: null, _count: 203 },
  { subTest: "READING", profession: null, _count: 193 },
  ...PROFS.flatMap((p) => [
    { subTest: "WRITING", profession: p, _count: w },
    { subTest: "SPEAKING", profession: p, _count: s },
  ]),
];
vi.mock("@/lib/prisma", () => ({ prisma: { oetItem: { groupBy: async () => ROWS } } }));
vi.mock("@/lib/oet/form-completeness", () => ({ formCompleteness: async () => ({ startable: true, complete: Array.from({ length: 10 }, (_, i) => i) }) }));

const { CompareSection } = await import("@/components/home/CompareSection");
const { PROVIDERS, CHECKED_ON } = await import("@/content/comparison");
const html = async () => renderToStaticMarkup(await CompareSection());

describe("home-page comparison", () => {
  it("heading, AlmiOET first and highlighted, every named provider present", async () => {
    ROWS = bank(30, 40);
    const h = await html();
    expect(h).toContain("Why AlmiOET? Compare for yourself");
    expect(h).toContain('data-compare-ours');
    expect(h.indexOf('data-compare-col="almioet"')).toBeLessThan(h.indexOf(`data-compare-col="${PROVIDERS[0].id}"`));
    for (const p of PROVIDERS) expect(h, p.name).toContain(p.name);
    expect(PROVIDERS.map((p) => p.name)).toEqual(["Benchmark Education", "E2 Language", "Cambridge OET Trainer (book)", "Oplo"]);
  });

  it("🔴 AlmiOET's numbers come from the bank, not from the copy", async () => {
    ROWS = bank(30, 40);
    const a = await html();
    expect(a).toContain("10 full timed mocks · 203 Listening and 193 Reading practice items");
    expect(a).toContain("360 model letters with commentary — one for every Writing task (30 for each profession)");
    expect(a).toContain("480 model role-plays — one for every role-play card (40 for each profession)");
    expect(a).toContain("On every Listening and Reading question");
    ROWS = bank(31, 41);
    const b = await html();
    expect(b).toContain("372 model letters with commentary — one for every Writing task (31 for each profession)");
    expect(b).toContain("492 model role-plays — one for every role-play card (41 for each profession)");
  });

  it("with no database it says less, never a number", async () => {
    ROWS = [];
    const h = await html();
    expect(h).toContain("A model letter with commentary for every Writing task");
    expect(h).not.toMatch(/\b360\b|\b480\b/);
  });

  it("the CTA, the price, the 48-hour taste, and the dated not-affiliated line", async () => {
    ROWS = bank(30, 40);
    const h = await html();
    expect(h).toContain("Try free for 48 hours — then $12/month");
    expect(h).toContain("$12/month · try free for 48 hours, no card");
    expect(h).toContain("Information from each provider&#x27;s public website, checked 31 October 2026.");
    expect(h).toContain("Names are trademarks of their owners; AlmiOET is not affiliated with them.");
    expect(CHECKED_ON).toBe("2026-10-31");
  });

  it("no guarantee anywhere; only the table box may scroll sideways", async () => {
    ROWS = bank(30, 40);
    const h = await html();
    expect(h.toLowerCase()).not.toContain("guarantee");
    expect(h).toMatch(/data-compare-table[^>]*|overflow-x-auto[^>]*data-compare-table/);
    expect(h).toContain("overflow-x-auto");
    expect(h).toContain("md:hidden"); // phone: cards, not the wide table
  });
});
