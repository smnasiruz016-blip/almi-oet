// Profession-specific expectations injected into the Writing + Speaking graders.
//
// Both graders were profession-blind by construction: `profession` never reached
// them, so a nursing letter and a veterinary letter were judged against a
// byte-identical prompt. Passing the string in is necessary but not sufficient —
// the generic prompt would not use it. These are the norms the grader judges
// content, genre/style and clinical relevance against.
//
// SLUG NOTE — the repo has TWO profession vocabularies and they are not the same:
//   · `OetProfession` (Prisma enum): NURSING, OCCUPATIONAL_THERAPY, ...
//   · `PROFESSIONS[x].slug` (URL segment): "nursing", "occupational-therapy", ...
// What actually flows into a grader is `OetItem.profession` — the ENUM. This map
// is therefore keyed by the enum, and `professionGrading()` normalises the other
// spellings so a kebab slug or lowercase string still resolves rather than
// silently falling back to the generic prompt.
//
// Source: beta-g authored from general OET conventions. No real OET material.

import type { OetProfession } from "@prisma/client";

export type OetProfessionGrading = { writingContext: string; speakingContext: string };

export const PROFESSION_GRADING: Record<OetProfession, OetProfessionGrading> = {
  NURSING: {
    writingContext:
      "This is a NURSING letter — usually a referral, transfer-of-care or discharge letter to a community/district nurse, GP, aged-care or care-coordination service. The reader needs the patient's ongoing NURSING care needs: wound/dressing care, medication administration and self-management, mobility and ADLs, and active risks (falls, pressure areas, social supports at home) — not incidental medical detail the receiving nurse won't act on. Expect a formal nursing-handover register and a clear purpose of continuity of care.",
    speakingContext:
      "This is a NURSING role-play — the candidate is a nurse with a patient or carer (health education, reassurance, explaining a procedure or care plan, discharge advice). Weight relationship-building and understanding the patient's perspective heavily; information-giving must be clear, jargon-free and check the patient's understanding.",
  },
  MEDICINE: {
    writingContext:
      "This is a MEDICINE (doctor) letter — typically a referral to a specialist/consultant or a letter to a GP for ongoing management. The reader is a fellow clinician who needs the clinical reasoning: presenting complaint, relevant history, examination and investigation findings, working/differential diagnosis, and a clear management question or plan. Reward accurate selection of what the specialist needs; penalise data-dumping the whole chart.",
    speakingContext:
      "This is a MEDICINE role-play — a doctor with a patient (explaining a diagnosis, discussing management, obtaining consent, or breaking difficult news). Weight structuring the consultation, checking understanding, and empathy alongside clear information-giving.",
  },
  DENTISTRY: {
    writingContext:
      "This is a DENTISTRY letter — usually a referral to an oral/maxillofacial surgeon, periodontist, orthodontist or physician. The reader needs the dental picture: presenting complaint, relevant dental and medical history, intra-oral/radiographic findings, treatment already provided, and the specific reason for referral. Expect dental terminology used correctly.",
    speakingContext:
      "This is a DENTISTRY role-play — a dentist with a patient (explaining a treatment or its options, oral-hygiene advice, or allaying dental anxiety). Weight reassurance and clear stepwise explanation.",
  },
  DIETETICS: {
    writingContext:
      "This is a DIETETICS letter — typically to a GP, referring clinician or another dietitian summarising a nutritional assessment and plan. The reader needs the nutrition-focused picture: relevant history, anthropometrics/intake, nutritional diagnosis, the intervention/plan and monitoring — not unrelated clinical detail. Expect correct nutritional terminology.",
    speakingContext:
      "This is a DIETETICS role-play — a dietitian counselling a client (explaining a dietary plan, behaviour change, managing a condition through diet). Weight motivational, non-judgemental communication and checking the client can follow the plan.",
  },
  OCCUPATIONAL_THERAPY: {
    writingContext:
      "This is an OCCUPATIONAL THERAPY letter — usually a referral or discharge to a community OT, GP or care service. The reader needs the FUNCTIONAL picture: the client's ADLs, functional limitations and goals, equipment/aids provided, home-environment factors and recommended supports — not medical detail that doesn't bear on function. Expect functional, goal-oriented language.",
    speakingContext:
      "This is an OCCUPATIONAL THERAPY role-play — an OT with a client or carer (explaining equipment, a home program, or functional goals). Weight collaborative goal-setting and practical, checkable instructions.",
  },
  OPTOMETRY: {
    writingContext:
      "This is an OPTOMETRY letter — usually a referral to an ophthalmologist or GP. The reader needs the ocular picture: presenting complaint, visual acuity, relevant measurements (e.g. IOP, refraction), anterior/posterior findings, and the specific reason for referral and its urgency. Expect correct ophthalmic terminology.",
    speakingContext:
      "This is an OPTOMETRY role-play — an optometrist with a patient (explaining findings, spectacle/contact-lens advice, or the reason for referral). Weight clear explanation of findings and their significance.",
  },
  PHARMACY: {
    writingContext:
      "This is a PHARMACY letter — typically to a GP/prescriber or another pharmacist regarding a medication review, interaction, adherence issue or supply. The reader needs the medication-focused picture: current medicines, the identified issue (interaction, contraindication, adherence), and a clear, actionable recommendation. Reward precise drug information; penalise vague or unsupported recommendations.",
    speakingContext:
      "This is a PHARMACY role-play — a pharmacist counselling a patient (medication use, adherence, side-effects, or OTC advice). Weight clear, safe medication instructions and checking understanding.",
  },
  PHYSIOTHERAPY: {
    writingContext:
      "This is a PHYSIOTHERAPY letter — usually a referral or discharge to a community physiotherapist, GP or specialist. The reader needs the movement/rehab picture: assessment findings, range of motion/strength/mobility, the rehabilitation plan and progress, and functional goals. Expect musculoskeletal/rehab terminology.",
    speakingContext:
      "This is a PHYSIOTHERAPY role-play — a physiotherapist with a patient (explaining exercises, a home program, pain management or prognosis). Weight clear demonstration-style instruction and realistic goal-setting.",
  },
  PODIATRY: {
    writingContext:
      "This is a PODIATRY letter — usually a referral to a vascular/orthopaedic service, GP or diabetes service. The reader needs the lower-limb picture: foot assessment, vascular and neurological status, any wound/ulcer, footwear factors and diabetic-foot risk where relevant. Expect podiatric terminology and clear risk framing.",
    speakingContext:
      "This is a PODIATRY role-play — a podiatrist with a patient (foot-care advice, diabetic-foot education, or explaining treatment). Weight preventive education and checking the patient can self-manage.",
  },
  RADIOGRAPHY: {
    writingContext:
      "This is a RADIOGRAPHY letter — typically to a referring clinician, radiologist or another department regarding imaging, patient preparation, or an incident. The focus is COMMUNICATION ABOUT THE PROCEDURE AND PATIENT, not diagnosis: relevant history, the imaging performed or requested, technical/preparation factors, and any safety/dose considerations. Do not expect the radiographer to interpret images diagnostically.",
    speakingContext:
      "This is a RADIOGRAPHY role-play — a radiographer with a patient (explaining a procedure, positioning/preparation, or allaying anxiety about imaging). Weight clear procedural explanation and reassurance.",
  },
  SPEECH_PATHOLOGY: {
    writingContext:
      "This is a SPEECH PATHOLOGY letter — usually a referral or discharge to a GP, community speech pathologist, ENT or education service. The reader needs the communication/swallowing picture: assessment of speech, language, and/or swallowing, the diagnosis, and the therapy plan or recommendations. Expect correct speech-pathology terminology.",
    speakingContext:
      "This is a SPEECH PATHOLOGY role-play — a speech pathologist with a client or carer (explaining therapy, swallowing strategies, or communication techniques). Weight clear, patient explanation and checking the carer can carry the strategy over.",
  },
  VETERINARY_SCIENCE: {
    writingContext:
      "This is a VETERINARY SCIENCE letter — a referral to a veterinary specialist or another vet. Note the patient is an ANIMAL and the client is its OWNER. The reader needs: signalment (species/breed/age/sex), presenting history, clinical findings, investigations and treatment to date, and the reason for referral — plus any relevant owner concerns or constraints. Expect veterinary terminology.",
    speakingContext:
      "This is a VETERINARY SCIENCE role-play — a vet with a client (the animal's owner): explaining the animal's diagnosis or treatment, prognosis, cost, or a difficult decision. Weight empathy toward the owner and clear explanation of the animal's condition.",
  },
};

/** Normalise any of the profession spellings in use to the Prisma enum key:
 *  "NURSING" | "nursing" | "occupational-therapy" | "Occupational Therapy". */
function toEnumKey(slug: string): string {
  return slug.trim().toUpperCase().replace(/[\s-]+/g, "_");
}

/** Grading context for a profession, or null if unknown. A null NEVER crashes a
 *  grade — the caller falls back to the generic prompt. */
export function professionGrading(
  slug: string | null | undefined,
): OetProfessionGrading | null {
  if (!slug) return null;
  const key = toEnumKey(slug);
  return (PROFESSION_GRADING as Record<string, OetProfessionGrading>)[key] ?? null;
}

/** Human-readable name for the "PROFESSION CONTEXT (X)" heading. */
export function professionHeading(slug: string): string {
  return toEnumKey(slug).replace(/_/g, " ");
}
