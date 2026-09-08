/**
 * THE READING RETIRE WALKS KNOW WHICH ITEMS THEY ARE WALKING.
 *
 * tests/e2e/retire-legacy.spec.ts and tests/e2e/retire-part-c.spec.ts open a
 * paying learner's attempt against an item that is about to be switched off and
 * prove it still works. They can only do that if the fixture hands them the
 * RIGHT titles, and on 7 September 2026 the fixture stopped being able to name
 * them: the verified bank of 6 September rewrote the outgoing Part C articles to
 * full length, and the fixture identified them by being SHORT. Reading Part A
 * had drifted the same way — three of its eighteen outgoing items now meet the
 * 885-1009 law — and nothing had noticed, because the Part C error came first
 * and the fixture threw before it got there.
 *
 * The e2e suite was the only thing that could see any of it, and it saw it by
 * dying twenty minutes into a run. This file makes the same defects fail in
 * `npm test`, in a second, without a database or a browser — and adds the checks
 * the shape rule could not make at all.
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { GEN_ITEMS } from "../scripts/seed/gen/index";
import {
  splitByRetireList,
  isFullLengthPartA,
  isFullLengthPartB,
  isFullLengthPartC,
  type RetireRow,
  type BankItem,
} from "../scripts/e2e/bank-split";

type SeedItem = { taskType: string; title: string; payload: unknown };
const ALL = GEN_ITEMS as unknown as SeedItem[];
const RETIRE_DIR = join(process.cwd(), "scripts", "retire");

const PARTS = [
  {
    taskType: "READING_PART_A",
    list: "reading-part-a-legacy.json",
    meetsLaw: isFullLengthPartA,
    law: "885-1009 words over four texts and twenty questions",
    seeded: 48,
    going: 18,
  },
  {
    taskType: "READING_PART_B",
    list: "reading-part-b-legacy.json",
    meetsLaw: isFullLengthPartB,
    law: "136-155 words",
    seeded: 63,
    going: 33,
  },
  {
    taskType: "READING_PART_C",
    list: "reading-part-c-legacy.json",
    meetsLaw: isFullLengthPartC,
    law: "653-836 words with eight questions of four options",
    seeded: 42,
    going: 21,
  },
] as const;

/** A hand-built Part C article that meets its law, so a test can build a bank of
 *  its own without borrowing a real item — and so no real item is ever given a
 *  shape it does not have in order to satisfy a test. */
function lawfulArticle(title: string, bodyWords = 700): BankItem {
  return {
    title,
    payload: {
      passages: [{ id: "p1", body: Array.from({ length: bodyWords }, (_, i) => `w${i}`).join(" ") }],
      questions: Array.from({ length: 8 }, (_, q) => ({
        id: `q${q}`,
        options: [{ id: "A" }, { id: "B" }, { id: "C" }, { id: "D" }],
      })),
    },
  };
}

describe("the retire lists, against the bank they name", () => {
  for (const part of PARTS) {
    const bank = ALL.filter((i) => i.taskType === part.taskType);
    const rows = JSON.parse(readFileSync(join(RETIRE_DIR, part.list), "utf8")) as RetireRow[];

    it(`${part.taskType}: the split names exactly the ${part.going} the retire list holds`, () => {
      expect(bank).toHaveLength(part.seeded);
      expect(rows).toHaveLength(part.going);
      const { full, legacy } = splitByRetireList(part.taskType, bank, rows, part.meetsLaw, part.law);
      expect(legacy.map((i) => i.title).sort()).toEqual(rows.map((r) => r.title).sort());
      expect(full).toHaveLength(part.seeded - part.going);
      expect(full.length + legacy.length).toBe(bank.length);
      const kept = new Set(full.map((i) => i.title));
      for (const l of legacy) expect(kept.has(l.title), `${l.title} is in both halves`).toBe(false);
    });

    it(`${part.taskType}: every item the retire LEAVES BEHIND meets ${part.law}`, () => {
      const { full } = splitByRetireList(part.taskType, bank, rows, part.meetsLaw, part.law);
      expect(full.filter((i) => !part.meetsLaw(i)).map((i) => i.title)).toEqual([]);
    });
  }
});

describe("what the shape rule could no longer see", () => {
  it("READING_PART_C: all 42 articles now satisfy the full-length law", () => {
    // 🔴 THE MEASUREMENT THE OLD RULE DEPENDED ON, PINNED.
    // While this reads 42/0 the shape rule cannot name the outgoing twenty-one,
    // and anything that tries is guessing. If it ever stops reading 42/0 that is
    // a change to the bank worth a person looking at, not a test to relax.
    const bank = ALL.filter((i) => i.taskType === "READING_PART_C");
    expect(bank.filter((i) => isFullLengthPartC(i))).toHaveLength(42);
    expect(bank.filter((i) => !isFullLengthPartC(i))).toHaveLength(0);
  });

  it("READING_PART_A: three of the eighteen going now meet their law", () => {
    // The fixture's shape rule called these full length and left them OUT of the
    // legacy half, so it produced 15 where the retire list names 18. Measured,
    // and pinned so that a fourth is a red rather than a surprise.
    const bank = ALL.filter((i) => i.taskType === "READING_PART_A");
    const rows = JSON.parse(
      readFileSync(join(RETIRE_DIR, "reading-part-a-legacy.json"), "utf8"),
    ) as RetireRow[];
    const going = new Set(rows.map((r) => r.title));
    const lawfulButGoing = bank.filter((i) => going.has(i.title) && isFullLengthPartA(i));
    expect(lawfulButGoing).toHaveLength(3);
  });

  it("READING_PART_B: its outgoing extracts really are all short", () => {
    // Part B's two answers still agree. That is worth stating, because it is why
    // nobody noticed the other two — and it is a fact about today, not a rule.
    const bank = ALL.filter((i) => i.taskType === "READING_PART_B");
    const rows = JSON.parse(
      readFileSync(join(RETIRE_DIR, "reading-part-b-legacy.json"), "utf8"),
    ) as RetireRow[];
    const going = new Set(rows.map((r) => r.title));
    expect(bank.filter((i) => going.has(i.title) && isFullLengthPartB(i))).toHaveLength(0);
  });
});

describe("splitByRetireList — the four states the shape rule could not see", () => {
  const bank = ALL.filter((i) => i.taskType === "READING_PART_C");
  const rows = JSON.parse(
    readFileSync(join(RETIRE_DIR, "reading-part-c-legacy.json"), "utf8"),
  ) as RetireRow[];
  const split = (b: readonly BankItem[], r: readonly RetireRow[]) =>
    splitByRetireList("READING_PART_C", b, r, isFullLengthPartC, "653-836 words");

  it("dies when the retire list names an item the bank does not hold", () => {
    expect(() =>
      split(bank, [...rows, { taskType: "READING_PART_C", title: "Part C — an article nobody wrote" }]),
    ).toThrow(/an article nobody wrote/);
  });

  it("dies when the retire list is empty", () => {
    expect(() => split(bank, [])).toThrow(/empty/i);
  });

  it("dies when the retire list names another task type", () => {
    expect(() => split(bank, [{ taskType: "READING_PART_B", title: bank[0].title }])).toThrow(
      /READING_PART_B/,
    );
  });

  it("dies when the retire list holds the same title twice", () => {
    expect(() => split(bank, [rows[0], rows[0]])).toThrow(/distinct/);
  });

  it("dies when an item the retire leaves behind is not full length", () => {
    const own = [lawfulArticle("outgoing"), lawfulArticle("kept", 40)];
    expect(() => split(own, [{ taskType: "READING_PART_C", title: "outgoing" }])).toThrow(/kept/);
  });
});
