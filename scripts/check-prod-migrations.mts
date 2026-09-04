/**
 * ASK PRODUCTION WHETHER IT HAS EVERY MIGRATION. Run it after every deploy.
 *
 *   npm run check:prod-migrations
 *   npm run check:prod-migrations -- https://some-preview.vercel.app
 *
 * No credentials, no database connection — it reads /api/status, which compares
 * the migration folder shipped in the deployment against what that deployment's
 * own database says it has applied. Exit 1 if anything is pending, if the folder
 * was not readable, or if the endpoint cannot be reached.
 *
 * It exists because on 2-3 September 2026 `3_attempt_deadline` sat unapplied on
 * production for about 43 hours while every gate stayed green, and nobody could
 * start an exercise. `npm run build` does not run `prisma migrate deploy` — that
 * is `npm run db:deploy`, and it is a separate, deliberate step.
 */
const BASE = process.argv[2] ?? "https://almioet.almiworld.com";
const url = `${BASE.replace(/\/$/, "")}/api/status`;

type Status = {
  ok?: boolean;
  itemsActive?: number;
  migrations?: { inRepo: number; applied: number; pending: string[]; error?: string };
};

let res: Response;
try {
  res = await fetch(url, { headers: { "Cache-Control": "no-store" } });
} catch (e) {
  console.error(`[migrations] ${url} tak nahi pahuncha: ${(e as Error).message}`);
  process.exit(1);
}

const body = (await res.json().catch(() => ({}))) as Status;
const m = body.migrations;
console.log(`[migrations] ${url} -> HTTP ${res.status}`);
if (!m) {
  console.error("[migrations] ye deployment migrations report hi nahi karta — purana build hai");
  process.exit(1);
}
console.log(`[migrations] repo mein ${m.inRepo}, database ne ${m.applied} lagaain`);
if (m.error) {
  console.error(`[migrations] 🔴 ${m.error}`);
  process.exit(1);
}
if (m.inRepo === 0) {
  console.error("[migrations] 🔴 SIFAR migrations parhe gaye — ye jaanch kuch naap hi nahi rahi");
  process.exit(1);
}
if (m.pending.length > 0) {
  console.error(`[migrations] 🔴 ${m.pending.length} migration BAQI hai: ${m.pending.join(", ")}`);
  console.error("[migrations] ilaj: npm run db:deploy  (npm run build ye NAHI chalata)");
  process.exit(1);
}
console.log(`[migrations] ✅ kuch baqi nahi — itemsActive ${body.itemsActive}`);
