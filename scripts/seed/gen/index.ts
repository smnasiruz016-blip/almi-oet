// Aggregates all bulk-generated content batches (one file per module). Imported
// by append.ts (prod seeding) and validate-seed.ts. Add a line here whenever a
// new gen/<module>.ts is produced.
import { Prisma } from "@prisma/client";
import { ITEMS as LISTENING_A } from "./listening_a";
import { ITEMS as LISTENING_B } from "./listening_b";
import { ITEMS as LISTENING_C } from "./listening_c";
import { ITEMS as READING_A } from "./reading_a";
import { ITEMS as READING_B } from "./reading_b";
import { ITEMS as READING_C } from "./reading_c";
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

export const GEN_ITEMS: Prisma.OetItemCreateManyInput[] = [
  ...LISTENING_A,
  ...LISTENING_B,
  ...LISTENING_C,
  ...READING_A,
  ...READING_B,
  ...READING_C,
  ...W_NURSING,
  ...W_MEDICINE,
  ...W_PHARMACY,
  ...W_DENTISTRY,
  ...W_PHYSIOTHERAPY,
  ...W_DIETETICS,
  ...W_OT,
  ...W_OPTOMETRY,
  ...W_PODIATRY,
  ...W_RADIOGRAPHY,
  ...W_SPEECH,
  ...W_VET,
];
