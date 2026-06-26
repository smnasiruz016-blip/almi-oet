// Dev-only: validate every seed item's payload against its runtime Zod schema,
// so a malformed payload is caught here, not at scoring time. Run: tsx scripts/validate-seed.ts
import { ITEMS as L } from "./seed/listening";
import { ITEMS as R } from "./seed/reading";
import { ITEMS as W } from "./seed/writing-letter";
import { ITEMS as S } from "./seed/speaking-roleplay";
import { GEN_ITEMS } from "./seed/gen";
import { listeningPartAPayloadSchema, listeningMcqPayloadSchema } from "../src/lib/oet/tasks/listening";
import { readingPartAPayloadSchema, readingMcqPayloadSchema } from "../src/lib/oet/tasks/reading";
import { writingLetterPayloadSchema } from "../src/lib/oet/tasks/writing-letter";
import { speakingRoleplayPayloadSchema } from "../src/lib/oet/tasks/speaking-roleplay";

const schemas: Record<string, { safeParse: (v: unknown) => { success: boolean; error?: unknown } }> = {
  LISTENING_PART_A: listeningPartAPayloadSchema,
  LISTENING_PART_B: listeningMcqPayloadSchema,
  LISTENING_PART_C: listeningMcqPayloadSchema,
  READING_PART_A: readingPartAPayloadSchema,
  READING_PART_B: readingMcqPayloadSchema,
  READING_PART_C: readingMcqPayloadSchema,
  WRITING_LETTER: writingLetterPayloadSchema,
  SPEAKING_ROLEPLAY: speakingRoleplayPayloadSchema,
};

const all = [...L, ...R, ...W, ...S, ...GEN_ITEMS];
let bad = 0;
for (const it of all) {
  const sc = schemas[it.taskType as string];
  const res = sc.safeParse(it.payload);
  if (!res.success) {
    bad++;
    console.error(`FAIL [${it.taskType}] ${it.title}:`, JSON.stringify(res.error).slice(0, 300));
  }
}
console.log(bad ? `\n${bad} invalid payload(s)` : `All ${all.length} payloads valid ✓`);
process.exit(bad ? 1 : 0);
