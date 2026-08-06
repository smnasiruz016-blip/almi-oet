// What each destination adds to a neutral origin.
//
// EVERY SENTENCE HERE IS FACTORED OUT OF ALREADY-CITED MATERIAL, not written
// fresh. v3 stated the UK deltas ten times over, once inside each origin's
// verification route and attestation chain — "sends the verification directly to
// the UK NMC", "the UK is a Hague country so the MEA issues an apostille",
// "legalised by the British High Commission". Those are destination facts that
// were being repeated per origin; they are stated once here instead, which is
// the whole point of the split. Australia's come from its own destination file,
// where they were already destination-level.
//
// Sources travel with them, so a corridor's merged fact carries both halves'
// citations and a reader can check either end.

import type { SourcedFact } from "@/lib/journey/types";
import type { DestinationDeltas } from "./corridor-compose";

const NMC_INTL: SourcedFact["sources"] = [
  {
    url: "https://www.nmc.org.uk/registration/information-for-internationally-trained-applicants/",
    name: "NMC — Information for internationally trained applicants",
    confidence: "official",
  },
];
const AHPRA_INTL: SourcedFact["sources"] = [
  {
    url: "https://www.ahpra.gov.au/Registration/International-practitioners.aspx",
    name: "AHPRA — Information for international practitioners",
    confidence: "official",
  },
];
const HCCH: SourcedFact["sources"] = [
  { url: "https://www.hcch.net/en/instruments/conventions/status-table/?cid=41", name: "HCCH — Apostille Convention status table", confidence: "official" },
];

export const UK_DELTAS: DestinationDeltas = {
  slug: "united-kingdom",
  country: "United Kingdom",
  regulatorName: "Nursing and Midwifery Council (NMC)",
  orgSlug: "uk-nmc",
  verificationRecipient: {
    value:
      "For UK registration that confirmation has to reach the Nursing and Midwifery Council (NMC) directly from your council rather than through you, and the NMC will not begin assessing your registration until it has arrived.",
    sources: NMC_INTL,
    confidence: "official",
    asOf: "2026-08",
  },
  attestationApostille: {
    value:
      "The United Kingdom is a party to the Hague Apostille Convention, so an apostille issued at home is accepted for UK use with no further legalisation.",
    sources: HCCH,
    confidence: "official",
    asOf: "2026-08",
    verifyStatus: "confirm-official",
  },
  attestationLegalisation: {
    value:
      "Because your documents do not carry an apostille, they need a further legalisation step for UK use after the foreign ministry — handled by the British diplomatic mission. Confirm the current office and order of steps before you send anything.",
    sources: NMC_INTL,
    confidence: "official",
    asOf: "2026-08",
    verifyStatus: "confirm-official",
  },
  englishRule: {
    value:
      "The NMC accepts English evidence by one of three independent routes — an accepted test, a year's recent practice in a country on its majority-English list, or a pre-registration qualification taught and examined in English with institutional evidence. None of these origins is on that majority-English list, so the practice route is not open on the strength of practice at home, and in practice most applicants from here evidence English by OET or IELTS. The routes and the score each test needs are set out on the NMC page.",
    sources: [
      {
        url: "https://www.nmc.org.uk/registration/joining-the-register/english-language-requirements/",
        name: "NMC — English language requirements (three routes)",
        confidence: "official",
      },
    ],
    confidence: "official",
    asOf: "2026-08",
    verifyStatus: "confirm-official",
  },
  searchWording: ["NMC registration for overseas nurses", "OET or IELTS for NMC", "NMC CBT and OSCE"],
  sharedStepsSummary:
    "the Test of Competence, the three ways it accepts English evidence, and the registration fees",
};

export const AU_DELTAS: DestinationDeltas = {
  slug: "australia",
  country: "Australia",
  regulatorName: "Nursing and Midwifery Board of Australia (NMBA), administered by AHPRA",
  orgSlug: "au-ahpra",
  verificationRecipient: {
    value:
      "For Australian registration that confirmation goes directly to AHPRA — a Certificate of Registration Status or Certificate of Good Standing, sent by every regulator you have been registered with in the past five years, from the regulator rather than from you. Those certificates are valid for three months from issue, so the timing matters.",
    sources: AHPRA_INTL,
    confidence: "official",
    asOf: "2026-08",
  },
  attestationApostille: {
    value:
      "Australia is a party to the Hague Apostille Convention, so an apostille issued at home is valid for Australian use with no further legalisation.",
    sources: HCCH,
    confidence: "official",
    asOf: "2026-08",
    verifyStatus: "confirm-official",
  },
  attestationLegalisation: {
    value:
      "Because your documents do not carry an apostille, they need a further legalisation step for Australian use after the foreign ministry — handled by the Australian diplomatic mission. Confirm the exact office before you send anything.",
    sources: AHPRA_INTL,
    confidence: "official",
    asOf: "2026-08",
    verifyStatus: "confirm-official",
  },
  englishRule: {
    value:
      "Under the NMBA's English language skills standard the accepted tests are OET, IELTS Academic, PTE Academic, TOEFL iBT and Cambridge English, and there are also non-test pathways for applicants whose schooling and nursing qualification were taught and assessed in English IN a recognised country. None of these origins is on the NMBA's recognised-country list, and study at home does not satisfy the education pathways, so in practice most applicants from here evidence English by test — OET at grade B, or IELTS Academic 7 with 6.5 in Writing. Results from two sittings within twelve months can be combined, but not across different test providers.",
    sources: [
      {
        url: "https://www.nursingmidwiferyboard.gov.au/Codes-Guidelines-Statements/FAQ/fact-sheet-english-language-skills-registration-standard.aspx",
        name: "NMBA — English language skills fact sheet",
        confidence: "official",
      },
      {
        url: "https://www.nursingmidwiferyboard.gov.au/registration-standards/english-language-skills.aspx",
        name: "NMBA — English language skills registration standard",
        confidence: "official",
      },
    ],
    confidence: "official",
    asOf: "2026-08",
    verifyStatus: "confirm-official",
  },
  searchWording: [
    "AHPRA registration for overseas nurses",
    "NMBA IQNM self-check",
    "NCLEX-RN and OSCE for Australia",
    "OET or IELTS for AHPRA",
  ],
  sharedStepsSummary:
    "the IQNM self-check and orientation, the NCLEX-RN and OSCE assessment, the accepted English evidence, and the registration fees",
};

export const ALL_DELTAS: DestinationDeltas[] = [UK_DELTAS, AU_DELTAS];
