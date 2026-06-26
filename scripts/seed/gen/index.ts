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

export const GEN_ITEMS: Prisma.OetItemCreateManyInput[] = [
  ...LISTENING_A,
  ...LISTENING_B,
  ...LISTENING_C,
  ...READING_A,
  ...READING_B,
  ...READING_C,
];
