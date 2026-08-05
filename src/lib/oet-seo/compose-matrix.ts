// The matrix page types: country×profession, profession-by-country, and the
// ranking. Page types v2.
//
// WHY THESE EXIST. Per-organisation pages hit a ceiling that more data cannot
// lift. 41 US nursing boards publish nearly the same requirement in nearly the
// same words, so 40 of them are near-copies and the overlap gate correctly
// refuses them — enrichment v3 added 116 bodies and bought two pages. The answer
// is not a better paraphrase of a thin page. It is a page whose SUBJECT is the
// cluster: one "nursing in the United States" page that puts all 41 boards in a
// table is genuinely more useful than 41 pages that each know one board, and it
// is distinct because nothing else on the surface is about that set.
//
// WHAT IS REUSED. Nothing here is new data. Every figure comes from the same
// base record and the same enrichment v3 the per-organisation pages read. These
// are the same facts, aggregated along a different axis.
//
// WHAT IS NOT CLAIMED. OET's list marks each body with a type, and the types are
// not interchangeable: a Healthcare regulator holds a register, while a
// Government body on this list may be an immigration or qualifications authority
// that sets an English bar for something else entirely. The Australian
// Department of Home Affairs is on the nursing list because it sets an English
// requirement for a VISA, not for registration. So these pages never say "the
// bodies that register you" over a mixed list — they say which bodies recognise
// OET, show each one's type, and keep the repo's own doctrine visible:
// registration and immigration are separate processes.
//
// Depends only on compose-core, so `emitted()` in compose.ts can import it
// without closing a cycle.

import {
  ORGANISATIONS,
  OET_SEO_META,
  gradeLine,
  hasRealGrade,
  professionLabelToSlug,
  professionSlugToLabel,
  type SeoOrg,
} from "./data";
import {
  countrySlug,
  codeForCountry,
  regulatorBySlug,
  resolveGrades,
  verifiedOn,
  nameVariants,
  type RegulatorEntity,
} from "./regulators";
import { wordingFor, localeConvention, type Wording } from "./lexicon";
import { PROFESSION_GRADING } from "@/lib/oet/profession-grading";
import { gradeFloor } from "@/lib/oet/scale";
import type { OetGrade } from "@/lib/oet/types";
import {
  measure,
  inCountry,
  sentence,
  type Composed,
  type Section,
  type Table,
} from "./compose-core";
import { pick } from "./phrasing";

// ── who belongs on a registration-route page ────────────────────────────────

/** Types from OET's own list that put a body on the path to practising: it holds
 *  a register, or it assesses the credentials a register depends on. Employers,
 *  universities and recruitment agencies also accept OET, but they are not a
 *  route to registration and a table mixing them in would misrepresent all of
 *  them — 182 of the 244 UK nursing entries are employers. They are counted and
 *  named as what they are instead, in their own section. */
const ROUTE_TYPES = new Set(["Healthcare regulator", "Government", "Credentialing agency"]);

/** The subset that actually holds a register. Used only where the prose needs to
 *  say "the body you register with" and be right. */
const REGISTER_TYPES = new Set(["Healthcare regulator"]);

const GRADE_KEYS = ["listening", "reading", "writing", "speaking"] as const;
const GRADE_HEAD = ["Listening", "Reading", "Writing", "Speaking"] as const;

/** A country value of "All" is a sentinel on one Malta record, not a country. */
function realCountry(c: string | null): c is string {
  return !!c && c !== "All";
}

/** The signature that decides whether two bodies ask the same thing. */
function gradeSignature(o: SeoOrg): string {
  return GRADE_KEYS.map((k) => o.grade?.[k] ?? "-").join("/");
}

/** The binding bar: the highest grade the body demands in any sub-test. OET
 *  reports each sub-test separately, so the hardest one is the one that decides
 *  the outcome — that, not an average, is what "the bar" means here. */
function bindingBar(o: SeoOrg): { grade: OetGrade; floor: number } | null {
  const gs = GRADE_KEYS.map((k) => o.grade?.[k]).filter((g): g is OetGrade => !!g);
  if (!gs.length) return null;
  let best = gs[0];
  for (const g of gs) if (gradeFloor(g) > gradeFloor(best)) best = g;
  return { grade: best, floor: gradeFloor(best) };
}

// ── the cells ───────────────────────────────────────────────────────────────

export type CellBody = {
  org: SeoOrg;
  reg: RegulatorEntity | undefined;
  signature: string;
  bar: { grade: OetGrade; floor: number } | null;
};

export type MatrixCell = {
  country: string;
  countrySlug: string;
  countryCode: string | null;
  professionSlug: string;
  professionLabel: string;
  /** Route bodies with a published grade, richest context first. */
  bodies: CellBody[];
  /** Bodies that hold a register, a subset of `bodies`. */
  registrars: CellBody[];
  /** Everything else in this country that accepts OET for this profession. */
  wider: { employer: number; education: number; recruiter: number; agent: number; total: number };
};

/** Enriched bodies first (they carry combining rules and context), then the ones
 *  that hold a register, then by name — deterministic on every build. */
function orderBodies(bs: CellBody[]): CellBody[] {
  return [...bs].sort((a, b) => {
    const byReg = Number(!!b.reg) - Number(!!a.reg);
    if (byReg) return byReg;
    const byRegistrar =
      Number(REGISTER_TYPES.has(b.org.type ?? "")) - Number(REGISTER_TYPES.has(a.org.type ?? ""));
    if (byRegistrar) return byRegistrar;
    return a.org.name.localeCompare(b.org.name);
  });
}

let _cells: MatrixCell[] | null = null;

/** Every (country, profession) that has at least one route body with a published
 *  grade. The meaningful-combination rule: a cell with no real body is not a
 *  page with missing content, it is not a page. */
export function matrixCells(): MatrixCell[] {
  if (_cells) return _cells;
  const acc = new Map<string, MatrixCell>();
  for (const o of ORGANISATIONS) {
    if (!realCountry(o.country)) continue;
    for (const label of o.professions) {
      const p = professionLabelToSlug(label);
      if (!p) continue;
      const key = `${o.country}|${p}`;
      let cell = acc.get(key);
      if (!cell) {
        cell = {
          country: o.country,
          countrySlug: countrySlug(o.country),
          countryCode: codeForCountry(o.country),
          professionSlug: p,
          professionLabel: label,
          bodies: [],
          registrars: [],
          wider: { employer: 0, education: 0, recruiter: 0, agent: 0, total: 0 },
        };
        acc.set(key, cell);
      }
      const type = o.type ?? "";
      if (ROUTE_TYPES.has(type) && hasRealGrade(o)) {
        const b: CellBody = {
          org: o,
          reg: regulatorBySlug(o.slug),
          signature: gradeSignature(o),
          bar: bindingBar(o),
        };
        cell.bodies.push(b);
        if (REGISTER_TYPES.has(type)) cell.registrars.push(b);
      } else if (!ROUTE_TYPES.has(type)) {
        cell.wider.total += 1;
        if (type === "Employer") cell.wider.employer += 1;
        else if (type === "Education") cell.wider.education += 1;
        else if (type.startsWith("Recruiter")) cell.wider.recruiter += 1;
        else cell.wider.agent += 1;
      }
    }
  }
  _cells = [...acc.values()]
    .filter((c) => c.bodies.length > 0)
    .map((c) => ({ ...c, bodies: orderBodies(c.bodies), registrars: orderBodies(c.registrars) }))
    .sort((a, b) =>
      a.countrySlug === b.countrySlug
        ? a.professionSlug.localeCompare(b.professionSlug)
        : a.countrySlug.localeCompare(b.countrySlug),
    );
  return _cells;
}

export function cellFor(countrySlugValue: string, professionSlug: string): MatrixCell | undefined {
  return matrixCells().find(
    (c) => c.countrySlug === countrySlugValue && c.professionSlug === professionSlug,
  );
}

/** Countries that have at least one matrix cell — the country hubs worth having. */
export function matrixCountries(): { country: string; slug: string }[] {
  const seen = new Map<string, string>();
  for (const c of matrixCells()) seen.set(c.countrySlug, c.country);
  return [...seen]
    .map(([slug, country]) => ({ country, slug }))
    .sort((a, b) => a.country.localeCompare(b.country));
}

export function cellsForCountry(countrySlugValue: string): MatrixCell[] {
  return matrixCells().filter((c) => c.countrySlug === countrySlugValue);
}

export function cellsForProfession(professionSlug: string): MatrixCell[] {
  return matrixCells()
    .filter((c) => c.professionSlug === professionSlug)
    .sort((a, b) => a.country.localeCompare(b.country));
}

// ── currency, for a page that rests on many bodies ──────────────────────────

/** The date OET's own recognising-organisations list was fetched. Every grade on
 *  a matrix page traces back to it, so it is the honest floor for "as at". */
const BASE_FETCHED = (OET_SEO_META.fetchedAt ?? "").slice(0, 10);

/** The date a matrix page can truthfully print. Enriched rows carry their own
 *  `lastVerified`; the base list's fetch date stands behind the rest. */
export function cellVerifiedOn(bodies: CellBody[]): string {
  const dates = bodies.map((b) => verifiedOn(b.reg)).filter((d): d is string => !!d);
  return dates.slice().sort().reverse()[0] ?? BASE_FETCHED;
}

/** Recipe §4 — rich AND current, or it does not ship indexable.
 *
 *  A per-organisation page answers this from its own enrichment entry. A matrix
 *  page cannot: most of its rows have no enrichment entry at all, and demanding
 *  one for every row would hold back precisely the pages that aggregate most
 *  usefully. Dropping the gate for this page type instead would be worse — a
 *  whole surface exempt from the rule that everything else obeys.
 *
 *  So the rule is held at what it actually protects: a page must be able to
 *  state a real date for what it shows, and must not present as settled either a
 *  set of rows that are ALL awaiting re-confirmation, or a body whose two sources
 *  disagree about the grade. Both of those are visible in the data, and both are
 *  reported by name rather than swallowed. */
export function matrixNotCurrentReason(bodies: CellBody[]): string | null {
  if (!bodies.length) return "no bodies with a published grade";
  if (!cellVerifiedOn(bodies)) return "no verifiable date for any row";
  const enriched = bodies.filter((b) => b.reg);
  if (enriched.length === bodies.length && enriched.every((b) => b.reg?.verifyStatus === "confirm-official")) {
    return "every sourced body awaits re-confirmation";
  }
  const conflicted = bodies.filter((b) => resolveGrades(b.org.slug).conflict);
  if (conflicted.length) return `base/enrichment grade conflict (${conflicted.map((b) => b.org.slug).join(", ")})`;
  return null;
}

export function isMatrixCurrent(bodies: CellBody[]): boolean {
  return matrixNotCurrentReason(bodies) === null;
}

// ── shared prose helpers ────────────────────────────────────────────────────

function list(names: string[], max = 6): string {
  if (names.length <= max) {
    return names.length <= 1
      ? (names[0] ?? "")
      : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
  }
  return `${names.slice(0, max).join(", ")} and ${names.length - max} more`;
}

function gradeCells(o: SeoOrg): string[] {
  return GRADE_KEYS.map((k) => o.grade?.[k] ?? "—");
}

/** What the enrichment says about combining, or an honest blank. A body with no
 *  enrichment entry is UNKNOWN, not "no rule" — the distinction matters in a
 *  column a reader will scan as fact. */
function combiningCell(b: CellBody): string {
  if (!b.reg) return "Not recorded";
  if (b.reg.combiningRule) {
    const w = b.reg.combiningRule.windowMonths;
    return w ? `Yes, within ${w} months` : "Yes";
  }
  return "None published";
}

function distinctSignatures(bodies: CellBody[]): string[] {
  return [...new Set(bodies.map((b) => b.signature))];
}

/** "C+/C+/C+/B" → "Listening C+, Reading C+, Writing C+, Speaking B". */
function signatureLabel(sig: string): string {
  return sig
    .split("/")
    .map((g, i) => (g === "-" ? null : `${GRADE_HEAD[i]} ${g}`))
    .filter(Boolean)
    .join(", ");
}

export type SignatureGroup = { sig: string; label: string; members: CellBody[] };

/** The bodies that ask for exactly the same thing, largest group first. This is
 *  the shape of a cluster: 41 US nursing boards are not 41 requirements, they are
 *  seven, and saying which board is in which group is the fact a per-board page
 *  could never carry. */
function groupsBySignature(bodies: CellBody[]): SignatureGroup[] {
  const m = new Map<string, CellBody[]>();
  for (const b of bodies) {
    const arr = m.get(b.signature);
    if (arr) arr.push(b);
    else m.set(b.signature, [b]);
  }
  return [...m]
    .map(([sig, members]) => ({ sig, label: signatureLabel(sig), members }))
    .sort((a, b) => b.members.length - a.members.length || a.sig.localeCompare(b.sig));
}

// The Writing/Speaking material for a profession is NOT restated on these pages.
// It is identical for every country that profession appears in — two nursing
// pages measured 100% identical on that section — so carrying it here would be
// duplicate content in the strict sense: the same fact, at length, on many URLs.
// The profession hub owns it, and these pages link to it. Removing scaffolding a
// page shares with its siblings is the honest way to clear an overlap gate; the
// dishonest way is paraphrasing facts that genuinely are the same, which is what
// the gate exists to catch.

function sectionWording(w: Wording, country: string, countryCode: string | null, professionSlug: string) {
  const conv = localeConvention(countryCode);
  const bits: string[] = [];
  const facts: string[] = [];
  if (w.isLocalTerm) {
    facts.push("localTerm");
    const def = wordingFor(professionSlug, null).term;
    bits.push(
      `${inCountry(country)} calls this role a ${w.term}; elsewhere the same role is a ${def}. They are the same OET profession and sit the same material — only the job title differs.`,
    );
  }
  if (w.credentialBody) {
    facts.push("credentialBody");
    bits.push(
      `The credential is usually named ${w.credentialBody}, which is the phrase to look for on official pages and the one most candidates search.`,
    );
  }
  const localWords = conv
    ? ([
        conv.credentialWord !== "registration"
          ? `calls the credential a "${conv.credentialWord}" rather than "registration"`
          : null,
        conv.processWord !== "registration" && conv.processWord !== conv.credentialWord
          ? `calls the process "${conv.processWord}"`
          : null,
        conv.spelling ? `writes ${conv.spelling}` : null,
      ].filter(Boolean) as string[])
    : [];
  if (localWords.length) {
    facts.push("localeConvention");
    const clause =
      localWords.length === 1
        ? localWords[0]
        : `${localWords.slice(0, -1).join(", ")} and ${localWords[localWords.length - 1]}`;
    bits.push(
      `Local usage is worth knowing before searching: ${inCountry(country)} ${clause}, which changes the wording on the official pages you are looking for.`,
    );
  }
  if (!bits.length) return null;
  return {
    section: { id: "wording", heading: `What this is called in ${inCountry(country)}`, paras: bits },
    facts,
  };
}

/** Sourcing: the bodies' own pages, and the date the facts were last read. */
function sectionSources(bodies: CellBody[], subject: string): { section: Section; facts: string[] } {
  const paras: string[] = [];
  const facts: string[] = [];
  const withUrl = bodies.filter((b) => b.reg?.officialUrl ?? b.org.website).slice(0, 8);
  if (withUrl.length) {
    facts.push("officialUrl");
    paras.push(
      `The authority on each figure is the body that publishes it: ${withUrl
        .map((b) => `${b.org.name} (${b.reg?.officialUrl ?? b.org.website})`)
        .join("; ")}.`,
    );
  }
  const dates = bodies.map((b) => verifiedOn(b.reg)).filter((d): d is string => !!d);
  if (dates.length) {
    facts.push("lastVerified");
    const latest = dates.slice().sort().reverse()[0];
    paras.push(
      dates.length === bodies.length
        ? `Every entry above was last verified ${latest}.`
        : `${dates.length} of these ${bodies.length} entries carry a verification date; the most recent is ${latest}. The rest are shown from OET's own recognising-organisations list and have not been separately re-read.`,
    );
  }
  const unconfirmed = bodies.filter((b) => b.reg?.verifyStatus === "confirm-official");
  if (unconfirmed.length) {
    paras.push(
      `${list(unconfirmed.map((b) => b.org.name))} ${unconfirmed.length === 1 ? "has" : "have"} not yet been re-confirmed against ${unconfirmed.length === 1 ? "its" : "their"} own current page, so treat ${unconfirmed.length === 1 ? "that row" : "those rows"} as a starting point.`,
    );
  }
  return { section: { id: "source", heading: "Sources and last verified", paras }, facts };
}

/** Accumulates a page. `push(null)` is the normal way a section that has no data
 *  disappears, so a missing field removes a section rather than producing filler. */
class PageBuilder {
  readonly sections: Section[] = [];
  readonly facts: string[] = [];
  readonly tables: Table[] = [];

  push(r: { section: Section; facts: string[] } | null): void {
    if (!r) return;
    this.sections.push(r.section);
    this.facts.push(...r.facts);
  }

  fact(name: string): void {
    this.facts.push(name);
  }

  table(t: Table, fact: string): void {
    this.tables.push(t);
    this.facts.push(fact);
  }
}

// ── TYPE 1 · /{country}/{profession} ────────────────────────────────────────

export type ComposedCell = Composed & { cell: MatrixCell; wording: Wording; layout: "single" | "comparison" };

export function composeCountryProfessionPage(
  countrySlugValue: string,
  professionSlug: string,
): ComposedCell | null {
  const cell = cellFor(countrySlugValue, professionSlug);
  if (!cell) return null; // meaningful-combination rule
  const w = wordingFor(professionSlug, cell.countryCode);
  const b = new PageBuilder();
  const key = `${countrySlugValue}/${professionSlug}`;
  const many = cell.bodies.length > 1;
  const country = cell.country;
  const role = w.termPlural;

  // ── who recognises OET here
  {
    const registrars = cell.registrars;
    const paras: string[] = [];
    if (many) {
      paras.push(
        pick(`m-open:${key}`, [
          `${cell.bodies.length} bodies in ${inCountry(country)} publish an OET requirement for ${role}. They do not all ask for the same grade, and they are not all doing the same job — which one applies to you depends on what you are applying for.`,
          `An OET requirement for ${role} in ${inCountry(country)} is published by ${cell.bodies.length} separate bodies. The grades differ between them, and so does what each one is deciding.`,
          `There is no single OET requirement for ${role} in ${inCountry(country)}: ${cell.bodies.length} bodies publish one, and the figure that binds you is the one set by the body you are actually applying to.`,
        ]),
      );
    } else {
      const only = cell.bodies[0];
      paras.push(
        pick(`s-open:${key}`, [
          `One body in ${inCountry(country)} publishes an OET requirement for ${role}: ${only.org.name}. That makes the position unusually simple — there is a single figure to meet rather than a range that depends on where you apply.`,
          `For ${role} in ${inCountry(country)} the OET requirement comes from a single body, ${only.org.name}, so there is one figure to work to.`,
          `${only.org.name} is the only body in ${inCountry(country)} that publishes an OET requirement for ${role}, which means one grade to meet rather than a per-jurisdiction range.`,
        ]),
      );
    }
    if (registrars.length) {
      b.fact("registrars");
      paras.push(
        registrars.length === 1
          ? `Of these, the one that holds a register is ${registrars[0].org.name} — the body that decides whether you may practise. Meeting its English condition settles the language question and nothing else; qualifications, identity and practice history are assessed separately.`
          : `${registrars.length} of them hold a register: ${list(registrars.map((r) => r.org.name))}. Those are the bodies that decide whether you may practise, and each one's English condition applies only to its own jurisdiction.`,
      );
    }
    const nonRegistrars = cell.bodies.filter((x) => !REGISTER_TYPES.has(x.org.type ?? ""));
    if (nonRegistrars.length) {
      b.fact("bodyTypes");
      paras.push(
        `The remaining ${nonRegistrars.length === 1 ? "entry is" : `${nonRegistrars.length} entries are`} ${list(
          nonRegistrars.map((x) => `${x.org.name} (${(x.org.type ?? "listed body").toLowerCase()})`),
        )}. Each sets an English bar for its own purpose rather than for registration, so its grade can differ from the registrar's.`,
      );
    }
    b.push({
      section: {
        id: "who",
        heading: `Who publishes an OET requirement for ${role} in ${inCountry(country)}`,
        paras,
      },
      facts: ["routeBodies"],
    });
  }

  // ── the requirement, group by group
  //
  // Every sentence here names bodies or counts that belong to THIS cell. An
  // earlier draft explained per-sub-test scoring in general terms instead and
  // measured 83% identical to the same section on another country's page — a
  // template with the country swapped, which is exactly what the gate is for.
  {
    const groups = groupsBySignature(cell.bodies);
    const paras: string[] = [];
    if (groups.length === 1) {
      const only = groups[0];
      paras.push(
        many
          ? `All ${cell.bodies.length} ask for the same thing: ${only.label}. That is unusual enough to be worth stating plainly — it means the figure holds wherever in ${inCountry(country)} you apply, so the choice of jurisdiction does not change what you have to score.`
          : `${cell.bodies[0].org.name} asks for ${only.label}. Each of those figures has to be reached on its own: OET reports the four sub-tests separately, so the demanding one decides the outcome.`,
      );
    } else {
      b.fact("gradeSpread");
      paras.push(
        `These ${cell.bodies.length} bodies publish ${groups.length} different combinations between them, so "the OET requirement for ${role} in ${inCountry(country)}" has ${groups.length} answers depending on which one you are applying to.`,
      );
      for (const g of groups) {
        const names = g.members.map((x) => nameVariants(x.org.name).full);
        paras.push(
          g.members.length === 1
            ? `${names[0]} alone asks for ${g.label}.`
            : `${g.members.length} of them ask for ${g.label}: ${list(names, 7)}.`,
        );
      }
      const bars = cell.bodies.map((x) => x.bar).filter((x): x is { grade: OetGrade; floor: number } => !!x);
      if (bars.length) {
        const lowest = bars.reduce((a, c) => (c.floor < a.floor ? c : a), bars[0]);
        const highest = bars.reduce((a, c) => (c.floor > a.floor ? c : a), bars[0]);
        if (lowest.floor !== highest.floor) {
          paras.push(
            `Across the group the binding sub-test ranges from ${lowest.grade} to ${highest.grade} — ${highest.floor - lowest.floor} points apart on the 0–500 scale, which is the difference between a result that clears the easiest of these bodies and one that clears all of them.`,
          );
        }
      }
    }
    const validity = cell.bodies.map((x) => x.reg?.validityYears).filter((v): v is number => !!v);
    if (validity.length) {
      b.fact("validityYears");
      const uniq = [...new Set(validity)].sort((x, y) => x - y);
      paras.push(
        uniq.length === 1
          ? `A result stays acceptable for ${uniq[0]} year${uniq[0] === 1 ? "" : "s"} from the test date here, so sitting early in a long application can mean sitting again.`
          : `Validity differs between them — ${uniq.join(" and ")} years from the test date — so work backwards from the date your own body publishes.`,
      );
    }
    if (paras.length) b.push({ section: { id: "requirement", heading: `What ${role} have to score`, paras }, facts: ["grades"] });
  }

  // ── the comparison table: the reason this page exists
  if (many) {
    b.table(
      {
        id: "bodies",
        caption: `OET requirements for ${role} in ${inCountry(country)}, by body`,
        columns: ["Body", "Type", ...GRADE_HEAD, "Combining"],
        rows: cell.bodies.map((x) => [
          nameVariants(x.org.name).full,
          x.org.type ?? "Not stated",
          ...gradeCells(x.org),
          combiningCell(x),
        ]),
      },
      "comparisonTable",
    );

    // "what varies and why" — anchored to the bodies in THIS table, not a general
    // statement about federal systems that would read identically everywhere.
    const groups = groupsBySignature(cell.bodies);
    const paras: string[] = [];
    if (groups.length > 1) {
      const majority = groups[0];
      const share = Math.round((majority.members.length / cell.bodies.length) * 100);
      paras.push(
        `The largest bloc is ${majority.members.length} of the ${cell.bodies.length} (${share}%), on ${majority.label}. It is the closest thing to a default here and it binds nobody outside itself: each body sets its own English condition under its own rules.`,
      );
      const outliers = groups.filter((g) => g.members.length === 1);
      if (outliers.length) {
        paras.push(
          `${outliers.length === 1 ? "One body sits" : `${outliers.length} bodies sit`} on their own: ${list(
            outliers.map((g) => `${nameVariants(g.members[0].org.name).full} at ${g.label}`),
            5,
          )}. Those are the rows worth checking against the source before planning around them, because a single body publishing something different from all its neighbours is either a real local rule or a stale entry, and the two look identical in a table.`,
        );
      }
    } else {
      paras.push(
        `The ${cell.bodies.length} bodies above happen to publish the same combination, which is worth relying on carefully rather than absolutely: they set their requirements independently of one another, so agreement today is a fact about now and not a guarantee about the date you apply.`,
      );
    }
    const combiners = cell.bodies.filter((x) => x.reg?.combiningRule);
    const noCombine = cell.bodies.filter((x) => x.reg && !x.reg.combiningRule);
    if (combiners.length || noCombine.length) {
      b.fact("combiningRule");
      const bits: string[] = [];
      if (combiners.length) {
        bits.push(
          `${list(combiners.map((x) => x.org.name))} allow${combiners.length === 1 ? "s" : ""} results to be combined across more than one sitting, so a candidate who misses one sub-test can re-sit that paper alone`,
        );
      }
      if (noCombine.length) {
        bits.push(
          `${list(noCombine.map((x) => x.org.name))} publish${noCombine.length === 1 ? "es" : ""} no combining provision, which makes a single sitting the working assumption and the weakest sub-test the expensive one`,
        );
      }
      paras.push(
        `${bits.join("; while ")}. Where the Combining column reads "Not recorded" we have no sourced rule for that body either way, and the absence of a record is not evidence that no rule exists — check with the body directly.`,
      );
    }
    b.push({ section: { id: "variation", heading: "What varies, and why", paras }, facts: ["jurisdictionVariation"] });
  } else {
    // Single body: its own rule, in full.
    const only = cell.bodies[0];
    const c = only.reg?.combiningRule;
    const paras: string[] = [];
    if (c) {
      b.fact("combiningRule");
      if (c.windowMonths) {
        paras.push(
          `${only.org.name} allows results to be combined across more than one sitting, provided the sittings fall within ${c.windowMonths} months of each other. In practice a candidate who misses one sub-test can re-sit that sub-test alone rather than repeating the whole test.`,
        );
      }
      if (typeof c.halfGradeRule === "string") paras.push(sentence(c.halfGradeRule));
      if (c.reducedWriting) paras.push(sentence(String(c.reducedWriting)));
    } else if (only.reg) {
      paras.push(
        `${only.org.name} publishes no provision for combining results across sittings, so plan to reach every grade in one attempt. Without a combining rule one short sub-test means re-sitting the whole test, which is the most common and costliest surprise in this process.`,
      );
    }
    if (only.reg?.registrationContext) {
      b.fact("registrationContext");
      paras.push(sentence(String(only.reg.registrationContext)));
    }
    if (only.reg?.alternativeTests?.length) {
      b.fact("alternativeTests");
      paras.push(
        `OET is not the only route here: ${only.org.name} also recognises ${only.reg.alternativeTests.join("; ")}. The choice of test belongs to the candidate. What OET offers against the alternatives is context — its material is the work being applied for, so preparing for it and preparing for the role overlap.`,
      );
    }
    if (paras.length) {
      b.push({ section: { id: "sitting", heading: `Sitting it once, or combining results`, paras }, facts: [] });
    }
  }

  // ── what each body's requirement is actually for
  //
  // enrichment v3 carries a sourced `registrationContext` per body — 178 of them
  // across the 90 cells — and until now only the single-body branch rendered one.
  // On an aggregate page it is the most valuable material there is: it is the
  // part that differs body by body, so it is both the most useful thing a reader
  // can be told and the reason two of these pages are not the same page.
  {
    const withContext = cell.bodies.filter((x) => x.reg?.registrationContext);
    if (withContext.length) {
      b.fact("registrationContext");
      b.push({
        section: {
          id: "each-body",
          heading:
            withContext.length === 1
              ? `What that requirement is for`
              : `What each of these ${withContext.length} bodies decides`,
          paras: withContext.map(
            (x) => `${nameVariants(x.org.name).full}: ${sentence(String(x.reg!.registrationContext))}`,
          ),
        },
        facts: [],
      });
    }
  }

  // ── local wording, the wider surface
  b.push(sectionWording(w, country, cell.countryCode, professionSlug));

  if (cell.wider.total) {
    b.fact("widerRecognition");
    const parts = [
      cell.wider.employer ? `${cell.wider.employer} employer${cell.wider.employer === 1 ? "" : "s"}` : null,
      cell.wider.education ? `${cell.wider.education} education provider${cell.wider.education === 1 ? "" : "s"}` : null,
      cell.wider.recruiter ? `${cell.wider.recruiter} recruitment agenc${cell.wider.recruiter === 1 ? "y" : "ies"}` : null,
      cell.wider.agent ? `${cell.wider.agent} other organisation${cell.wider.agent === 1 ? "" : "s"}` : null,
    ].filter(Boolean) as string[];
    b.push({
      section: {
        id: "wider",
        heading: `Beyond registration: who else accepts OET for ${role} here`,
        paras: [
          `A further ${cell.wider.total} organisation${cell.wider.total === 1 ? "" : "s"} in ${inCountry(country)} accept${cell.wider.total === 1 ? "s" : ""} OET for ${role} without being part of the registration route — ${list(parts)}. Those bars are set independently of the regulator's and are sometimes higher.`,
        ],
      },
      facts: [],
    });
  }

  b.push(sectionSources(cell.bodies, `${role} in ${inCountry(country)}`));

  return {
    cell,
    wording: w,
    layout: many ? "comparison" : "single",
    ...measure(b.sections, b.facts, b.tables),
  };
}

// ── TYPE 4 · /{country} — the hub, upgraded ─────────────────────────────────

export type ComposedCountry = Composed & { country: string; countrySlug: string; cells: MatrixCell[] };

/** The hub was a thin spine: a list of organisation links. It is now the page
 *  that answers "does this country accept OET, and for what" — every profession
 *  with a body behind it, the grade each asks, and a way into the per-profession
 *  page. It goes through the same gate as everything else; a country with one
 *  thin cell does not get a hub just because it is a country. */
export function composeCountryHubPage(countrySlugValue: string): ComposedCountry | null {
  const cells = cellsForCountry(countrySlugValue);
  if (!cells.length) return null;
  const country = cells[0].country;
  const b = new PageBuilder();
  const key = `country:${countrySlugValue}`;
  const allBodies = [...new Map(cells.flatMap((c) => c.bodies).map((x) => [x.org.slug, x])).values()];
  const registrars = allBodies.filter((x) => REGISTER_TYPES.has(x.org.type ?? ""));

  b.push({
    section: {
      id: "overview",
      heading: `OET recognition in ${inCountry(country)}`,
      paras: [
        pick(`ch-open:${key}`, [
          `${allBodies.length} bodies in ${inCountry(country)} publish an OET requirement, between them covering ${cells.length} of the twelve professions OET tests. This page is the index: which profession is covered, which body sets the bar, and what that bar is.`,
          `OET is recognised in ${inCountry(country)} by ${allBodies.length} bodies across ${cells.length} of the twelve professions. Each profession below has its own page with the full list and the per-body detail.`,
          `Across ${cells.length} of OET's twelve professions, ${allBodies.length} bodies in ${inCountry(country)} publish a requirement. The table shows what each profession's leading body asks for.`,
        ]),
        registrars.length
          ? `${registrars.length} of those hold a register: ${list(registrars.map((r) => nameVariants(r.org.name).full), 6)}. The rest set an English bar for a different decision, so their grade need not match the registrar's.`
          : `None of these holds a register directly; each sets an English requirement for its own process rather than for the right to practise.`,
      ],
    },
    facts: ["countryCoverage", "routeBodies"],
  });

  b.table(
    {
      id: "professions",
      caption: `Professions with an OET requirement in ${inCountry(country)}`,
      columns: ["Profession", "Leading body", ...GRADE_HEAD, "Bodies"],
      rows: cells.map((c) => [
        c.professionLabel,
        nameVariants(c.bodies[0].org.name).full,
        ...gradeCells(c.bodies[0].org),
        c.bodies.length === 1
          ? "1"
          : `${c.bodies.length}${distinctSignatures(c.bodies).length === 1 ? " (all the same)" : " (vary)"}`,
      ]),
    },
    "professionTable",
  );

  {
    const varied = cells.filter((c) => distinctSignatures(c.bodies).length > 1);
    const paras: string[] = [];
    if (varied.length) {
      b.fact("intraCountryVariation");
      paras.push(
        `${varied.length} of these professions have no single national figure: ${list(
          varied.map((c) => `${c.professionLabel.toLowerCase()} (${c.bodies.length} bodies)`),
        )}. Requirements there are set per jurisdiction, so the figure above is one body's and the profession's own page carries the full comparison.`,
      );
    } else {
      paras.push(
        `Each profession above has one figure that holds across the country, which makes planning simpler here than in countries where every state or province sets its own.`,
      );
    }
    const uniformAcross = new Set(cells.map((c) => c.bodies[0].signature));
    paras.push(
      uniformAcross.size === 1
        ? `The same combination applies across every profession listed, which usually means one body sets the English condition for all of them rather than each profession being considered separately.`
        : `The requirement is not the same for every profession: ${uniformAcross.size} different combinations appear across the ${cells.length} listed, so a figure quoted for one profession should not be assumed to hold for another.`,
    );
    b.push({ section: { id: "variation", heading: "How much this varies inside the country", paras }, facts: ["gradeSpread"] });
  }

  {
    const wider = cells.reduce((n, c) => n + c.wider.total, 0);
    if (wider) {
      b.fact("widerRecognition");
      b.push({
        section: {
          id: "wider",
          heading: `Employers, universities and agencies in ${inCountry(country)}`,
          paras: [
            `Beyond the registration route, this list records ${wider} further acceptances by employers, education providers and recruitment agencies in ${inCountry(country)}. Those are counted per profession, so an organisation recruiting for several roles appears once for each.`,
          ],
        },
        facts: [],
      });
    }
  }

  b.push(sectionSources(allBodies, `practising in ${inCountry(country)}`));

  return { country, countrySlug: countrySlugValue, cells, ...measure(b.sections, b.facts, b.tables) };
}

// ── TYPE 2 · /{profession}/by-country ───────────────────────────────────────

export type CountryRow = {
  cell: MatrixCell;
  /** The body that best represents the country: enriched and register-holding
   *  first. Named as representative, never as "the" requirement, wherever the
   *  country's bodies disagree. */
  lead: CellBody;
  uniform: boolean;
  bar: { grade: OetGrade; floor: number } | null;
};

export function countryRows(professionSlug: string): CountryRow[] {
  return cellsForProfession(professionSlug).map((cell) => {
    const lead = cell.bodies[0];
    const uniform = distinctSignatures(cell.bodies).length === 1;
    // The bar a candidate can actually clear the country on: the lowest binding
    // bar among its bodies. Ranking on the highest would say "the US is strict"
    // on the strength of one outlier board.
    const bars = cell.bodies.map((x) => x.bar).filter((x): x is { grade: OetGrade; floor: number } => !!x);
    const bar = bars.length ? bars.reduce((a, c) => (c.floor < a.floor ? c : a), bars[0]) : null;
    return { cell, lead, uniform, bar };
  });
}

export type ComposedProfession = Composed & { professionSlug: string; rows: CountryRow[] };

export function composeProfessionByCountryPage(professionSlug: string): ComposedProfession | null {
  const rows = countryRows(professionSlug);
  if (!rows.length) return null;
  const label = professionSlugToLabel(professionSlug) ?? professionSlug;
  const w = wordingFor(professionSlug, null);
  const b = new PageBuilder();
  const key = `by-country:${professionSlug}`;

  b.push({
    section: {
      id: "overview",
      heading: `Where OET is recognised for ${w.termPlural}`,
      paras: [
        pick(`bc-open:${key}`, [
          `${rows.length} countries have at least one body that publishes an OET requirement for ${w.termPlural} on the registration or credentialing route. This page puts them side by side: what each country's leading body asks for, whether the country speaks with one voice, and where the bar sits relative to everywhere else.`,
          `A ${w.term} weighing up where to register can compare ${rows.length} countries here — each one's published OET requirement, whether its bodies agree among themselves, and how the bar compares internationally.`,
          `Across ${rows.length} countries, at least one body publishes an OET requirement for ${w.termPlural}. The table below is the comparison: the requirement, the body that sets it, and whether it holds across the whole country.`,
        ]),
      ],
    },
    facts: ["countryCoverage"],
  });

  b.table(
    {
      id: "by-country",
      caption: `OET requirements for ${w.termPlural}, by country`,
      columns: ["Country", "Body", ...GRADE_HEAD, "Combining", "Bodies in country"],
      rows: rows.map((r) => [
        r.cell.country,
        nameVariants(r.lead.org.name).full,
        ...gradeCells(r.lead.org),
        combiningCell(r.lead),
        r.cell.bodies.length === 1
          ? "1"
          : `${r.cell.bodies.length}${r.uniform ? " (all the same)" : " (grades vary)"}`,
      ]),
    },
    "byCountryTable",
  );

  // Country by country. This is the section that makes one profession's page
  // unlike another's: every sentence carries that country's own body and figures,
  // so "nursing by country" and "pharmacy by country" diverge because their data
  // diverges rather than because the adjectives were rotated.
  {
    const paras: string[] = [];
    for (const r of rows) {
      const line = gradeLine(r.lead.org);
      const body = nameVariants(r.lead.org.name).full;
      if (r.cell.bodies.length === 1) {
        paras.push(
          `${inCountry(r.cell.country)}: ${body} is the only body publishing a requirement, and it asks for ${line}.`,
        );
      } else if (r.uniform) {
        paras.push(
          `${inCountry(r.cell.country)}: ${r.cell.bodies.length} bodies, all asking for ${line}. ${body} is the one with the fullest published record, and the figure holds across the others.`,
        );
      } else {
        const groups = groupsBySignature(r.cell.bodies);
        paras.push(
          `${inCountry(r.cell.country)}: ${r.cell.bodies.length} bodies and ${groups.length} different requirements, from ${signatureLabel(groups[groups.length - 1].sig)} to ${signatureLabel(groups[0].sig)}. There is no national figure — ${body} is shown above as the fullest record, not as the rule.`,
        );
      }
    }
    b.push({
      section: { id: "country-by-country", heading: `Country by country`, paras },
      facts: ["perCountryDetail"],
    });
  }

  {
    const varied = rows.filter((r) => !r.uniform);
    const withBar = rows.filter((r) => r.bar);
    const paras: string[] = [];
    if (withBar.length > 1) {
      const sorted = [...withBar].sort((x, y) => x.bar!.floor - y.bar!.floor);
      const low = sorted[0];
      const high = sorted[sorted.length - 1];
      if (low.bar!.floor !== high.bar!.floor) {
        b.fact("barSpread");
        const atLow = sorted.filter((r) => r.bar!.floor === low.bar!.floor);
        const atHigh = sorted.filter((r) => r.bar!.floor === high.bar!.floor);
        paras.push(
          `The easiest English condition for ${w.termPlural} is ${low.bar!.grade}, in ${list(atLow.map((r) => r.cell.country))}; the hardest is ${high.bar!.grade}, in ${list(atHigh.map((r) => r.cell.country))} — ${high.bar!.floor - low.bar!.floor} points apart in the sub-test that binds.`,
        );
      }
      const atB = withBar.filter((r) => r.bar!.grade === "B");
      if (atB.length) {
        paras.push(
          `${atB.length} of the ${withBar.length} put their binding bar at grade B: ${list(atB.map((r) => r.cell.country))}. Where a country asks less it is usually C+ in the two receptive papers with a higher figure kept for Speaking, rather than a uniformly lower requirement.`,
        );
      }
    }
    if (varied.length) {
      b.fact("intraCountryVariation");
      paras.push(
        `${varied.length} of these ${rows.length} countries have no single national figure at all: ${list(
          varied.map((r) => `${r.cell.country} (${r.cell.bodies.length} bodies)`),
        )}. Each country's own page carries the full per-body comparison.`,
      );
    }
    if (paras.length) {
      b.push({ section: { id: "spread", heading: `Where the bar sits highest and lowest`, paras }, facts: [] });
    }
  }

  b.push(
    sectionSources(
      rows.map((r) => r.lead),
      `${w.termPlural} in the country you are applying to`,
    ),
  );

  return { professionSlug, rows, ...measure(b.sections, b.facts, b.tables) };
}

// ── TYPE 3 · /{profession}/where-oet-is-easiest ─────────────────────────────

export function composeProfessionRankingPage(professionSlug: string): ComposedProfession | null {
  const all = countryRows(professionSlug).filter((r) => r.bar);
  if (all.length < 3) return null; // a ranking of two is a comparison, not a ranking
  const rows = [...all].sort((x, y) => x.bar!.floor - y.bar!.floor || x.cell.country.localeCompare(y.cell.country));
  const w = wordingFor(professionSlug, null);
  const b = new PageBuilder();
  const key = `ranking:${professionSlug}`;

  b.push({
    section: {
      id: "what-this-ranks",
      heading: `What this ranking measures, and what it does not`,
      paras: [
        `${rows.length} countries are ordered here by one number: the lowest OET grade a ${w.term} must reach in the sub-test that binds. It is the English condition and nothing else — registration also turns on qualifications, practice history, identity and criminal-record checks, and in most of these countries a competence assessment, none of which this order reflects. Immigration is separate again, with its own English rules that are sometimes stricter than the regulator's.`,
      ],
    },
    facts: ["rankingBasis"],
  });

  b.table(
    {
      id: "ranking",
      caption: `Countries ordered by the OET grade ${w.termPlural} must reach, lowest bar first`,
      columns: ["Rank", "Country", "Binding grade", "Body setting it", ...GRADE_HEAD],
      rows: rows.map((r, i) => [
        String(i + 1),
        r.cell.country,
        r.bar!.grade,
        nameVariants(r.lead.org.name).full,
        ...gradeCells(r.lead.org),
      ]),
    },
    "rankingTable",
  );

  // The tiers, named. Countries that share a binding grade are not ranked against
  // each other by anything real, so grouping them says more than a strict 1..N
  // order — and the groups differ per profession because the data does.
  {
    const tiers = new Map<string, CountryRow[]>();
    for (const r of rows) {
      const k = r.bar!.grade;
      const arr = tiers.get(k);
      if (arr) arr.push(r);
      else tiers.set(k, [r]);
    }
    const paras: string[] = [];
    for (const [grade, members] of tiers) {
      paras.push(
        members.length === 1
          ? `Grade ${grade}: ${members[0].cell.country} alone, set by ${nameVariants(members[0].lead.org.name).full}.`
          : `Grade ${grade}: ${members.length} countries — ${list(members.map((r) => r.cell.country), 8)}. Nothing in the English requirement separates them, so a choice between them has to be made on something this page does not measure.`,
      );
    }
    const varied = rows.filter((r) => !r.uniform);
    if (varied.length) {
      b.fact("rankingCaveat");
      paras.push(
        `Read ${list(varied.map((r) => r.cell.country))} as a best case rather than a requirement: ${varied.length === 1 ? "it sets" : "they set"} requirements per jurisdiction, and the grade ranked above is the lowest any of ${varied.length === 1 ? "its" : "their"} bodies publishes. A different state or province in the same country can mean a higher bar.`,
      );
    }
    b.push({ section: { id: "tiers", heading: "The order, in groups", paras }, facts: ["barSpread"] });
  }

  b.push(sectionSources(rows.map((r) => r.lead), `${w.termPlural} in the country you choose`));

  return { professionSlug, rows, ...measure(b.sections, b.facts, b.tables) };
}
