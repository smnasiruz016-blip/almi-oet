import { ITEMS as A } from "./scripts/seed/gen/listening_a_sets";
import { ITEMS as B } from "./scripts/seed/gen/listening_b_sets";
import { ITEMS as C } from "./scripts/seed/gen/listening_c_sets";
import { listeningPartAPayloadSchema, listeningMcqPayloadSchema } from "./src/lib/oet/tasks/listening";
let bad = 0;
for (const it of A as any[]) {
  const r = listeningPartAPayloadSchema.safeParse(it.payload);
  if (!r.success) { bad++; console.log("A FAIL", it.title, JSON.stringify(r.error.issues.slice(0,3))); }
}
for (const it of [...(B as any[]), ...(C as any[])]) {
  const r = listeningMcqPayloadSchema.safeParse(it.payload);
  if (!r.success) { bad++; console.log("MCQ FAIL", it.title, JSON.stringify(r.error.issues.slice(0,3))); }
}
console.log("checked", A.length + B.length + C.length, "schema failures:", bad);
