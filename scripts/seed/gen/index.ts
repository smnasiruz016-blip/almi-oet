// Aggregates all bulk-generated content batches (one file per module). Imported
// by append.ts (prod seeding) and validate-seed.ts. Add a line here whenever a
// new gen/<module>.ts is produced.
import { Prisma } from "@prisma/client";
import { ITEMS as LISTENING_A } from "./listening_a";
import { ITEMS as LISTENING_B } from "./listening_b";
// The 118 full-length Listening items of 3 September 2026. Separate modules from
// listening_a/listening_b/listening_c, which are generated FROM PRODUCTION and
// must keep describing the rows already there — see their headers.
import { ITEMS as LISTENING_A_SETS } from "./listening_a_sets";
import { ITEMS as LISTENING_B_SETS } from "./listening_b_sets";
import { ITEMS as LISTENING_C_SETS } from "./listening_c_sets";
// The 360 Writing and Speaking items of 4 September 2026. Separate modules from
// the per-profession writing_*/speaking_* files, which were generated FROM
// PRODUCTION and must keep describing the rows already there.
import { ITEMS as WRITING_SETS } from "./writing_sets";
import { ITEMS as SPEAKING_SETS } from "./speaking_sets";
import { ITEMS as LISTENING_C } from "./listening_c";
// The 15 full-length Reading Part A sets and 15 Part B items of 4 September
// 2026. Separate modules from reading_a/reading_b, which were generated FROM
// PRODUCTION and must keep describing the rows already there. Both parts stood
// at exactly 15 active — the boot floor — before these.
import { ITEMS as READING_A_SETS } from "./reading_a_sets";
import { ITEMS as READING_B_SETS } from "./reading_b_sets";
import { ITEMS as READING_A } from "./reading_a";
import { ITEMS as READING_B } from "./reading_b";
import { ITEMS as READING_C } from "./reading_c";
// The 72 Part B + 13 Part C Reading items of 1 November 2026 (Reading to 20 full tests).
import { ITEMS as READING_BC_NOV } from "./reading_bc_nov";
import { ITEMS as W_NURSING } from "./writing_nursing";
import { ITEMS as W_MEDICINE } from "./writing_medicine";
import { ITEMS as W_PHARMACY } from "./writing_pharmacy";
import { ITEMS as W_DENTISTRY } from "./writing_dentistry";
import { ITEMS as W_PHYSIOTHERAPY } from "./writing_physiotherapy";
import { ITEMS as W_DIETETICS } from "./writing_dietetics";
import { ITEMS as W_OT } from "./writing_occupational_therapy";
import { ITEMS as W_OPTOMETRY } from "./writing_optometry";
import { ITEMS as W_PODIATRY } from "./writing_podiatry";
import { ITEMS as W_RADIOGRAPHY } from "./writing_radiography";
import { ITEMS as W_SPEECH } from "./writing_speech_pathology";
import { ITEMS as W_VET } from "./writing_veterinary_science";
import { ITEMS as S_NURSING } from "./speaking_nursing";
import { ITEMS as S_MEDICINE } from "./speaking_medicine";
import { ITEMS as S_PHARMACY } from "./speaking_pharmacy";
import { ITEMS as S_DENTISTRY } from "./speaking_dentistry";
import { ITEMS as S_PHYSIOTHERAPY } from "./speaking_physiotherapy";
import { ITEMS as S_DIETETICS } from "./speaking_dietetics";
import { ITEMS as S_OT } from "./speaking_occupational_therapy";
import { ITEMS as S_OPTOMETRY } from "./speaking_optometry";
import { ITEMS as S_PODIATRY } from "./speaking_podiatry";
import { ITEMS as S_RADIOGRAPHY } from "./speaking_radiography";
import { ITEMS as S_SPEECH } from "./speaking_speech_pathology";
import { ITEMS as S_VET } from "./speaking_veterinary_science";

// B2 (29 Oct 2026) · an item with a model letter carries it in its payload; the others are unchanged (writing_model_letters.ts)
import { MODEL_LETTERS } from "./writing_model_letters";
const withModelLetter = (i: Prisma.OetItemCreateManyInput): Prisma.OetItemCreateManyInput =>
  i.slug && MODEL_LETTERS[i.slug] ? { ...i, payload: { ...(i.payload as object), modelLetter: MODEL_LETTERS[i.slug] } as Prisma.InputJsonValue } : i;

// B3 (30 Oct 2026) · a card with a model role-play carries it in its payload; the others are unchanged (speaking_model_scripts.ts)
import { MODEL_SCRIPTS } from "./speaking_model_scripts";
const withModelScript = (i: Prisma.OetItemCreateManyInput): Prisma.OetItemCreateManyInput =>
  i.slug && MODEL_SCRIPTS[i.slug] ? { ...i, payload: { ...(i.payload as object), modelScript: MODEL_SCRIPTS[i.slug] } as Prisma.InputJsonValue } : i;
export const GEN_ITEMS: Prisma.OetItemCreateManyInput[] = [
  ...LISTENING_A,
  ...LISTENING_B,
  ...LISTENING_A_SETS,
  ...LISTENING_B_SETS,
  ...LISTENING_C_SETS,
  ...WRITING_SETS.map(withModelLetter), // B2: the model letters join their items (payload.modelLetter)
  ...SPEAKING_SETS.map(withModelScript), // B3: the model role-plays join their cards (payload.modelScript)
  ...LISTENING_C,
  ...READING_A,
  ...READING_B,
  ...READING_A_SETS,
  ...READING_B_SETS,
  ...READING_C,
  ...READING_BC_NOV,
  ...W_NURSING.map(withModelLetter), // B4: the model letters of the other Nursing tasks
  ...W_MEDICINE.map(withModelLetter), // B4: … and of the other Medicine tasks
  ...W_PHARMACY.map(withModelLetter), // B5
  ...W_DENTISTRY.map(withModelLetter), // B5
  ...W_PHYSIOTHERAPY.map(withModelLetter), // B5
  ...W_DIETETICS.map(withModelLetter), // B6
  ...W_OT.map(withModelLetter), // B6
  ...W_OPTOMETRY.map(withModelLetter), // B6
  ...W_PODIATRY.map(withModelLetter), // B6
  ...W_RADIOGRAPHY.map(withModelLetter), // B6
  ...W_SPEECH.map(withModelLetter), // B6
  ...W_VET.map(withModelLetter), // B6
  ...S_NURSING.map(withModelScript), // S1–S6
  ...S_MEDICINE.map(withModelScript), // S1–S6
  ...S_PHARMACY.map(withModelScript), // S1–S6
  ...S_DENTISTRY.map(withModelScript), // S1–S6
  ...S_PHYSIOTHERAPY.map(withModelScript), // S1–S6
  ...S_DIETETICS.map(withModelScript), // S1–S6
  ...S_OT.map(withModelScript), // S1–S6
  ...S_OPTOMETRY.map(withModelScript), // S1–S6
  ...S_PODIATRY.map(withModelScript), // S1–S6
  ...S_RADIOGRAPHY.map(withModelScript), // S1–S6
  ...S_SPEECH.map(withModelScript), // S1–S6
  ...S_VET.map(withModelScript), // S1–S6
];
