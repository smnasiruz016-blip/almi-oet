/**
 * DELETE RENDERED AUDIO NO ITEM CLAIMS ANY MORE.
 *
 * An orphan is a file whose content key no item computes. They appear whenever a
 * script or the rendering rule changes: on 3 September 2026 the label-stripping
 * fix moved the key of 22 live items, and their old files stayed behind.
 *
 * They are not a broken lesson — gate:audio reports them as information, not a
 * failure — but they are not harmless either. `next.config.ts` traces
 * `./audio/oet/**` into the /api/oet/audio/[attemptId] function, so every orphan
 * is carried into the deployed bundle against Vercel's 250 MB limit for the rest
 * of its life.
 *
 *   npx tsx scripts/prune-orphan-audio.mts --dry   list them, delete nothing
 *   npx tsx scripts/prune-orphan-audio.mts         delete them
 *
 * It refuses to run if NOTHING is claimed — a key function that returned
 * rubbish would otherwise make this script delete the whole corpus.
 */
import { existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { GEN_ITEMS } from "./seed/gen/index";
import { AUDIO_DIR, audioFileName, audioKey } from "../src/lib/oet/audio";

const DRY = process.argv.includes("--dry");
const dir = join(process.cwd(), AUDIO_DIR);
if (!existsSync(dir)) {
  console.error(`[prune] ${AUDIO_DIR} does not exist`);
  process.exit(1);
}

const claimed = new Set<string>();
for (const it of GEN_ITEMS as { taskType: string; payload: { audioScript?: string } }[]) {
  if (!it.taskType.startsWith("LISTENING") || !it.payload?.audioScript) continue;
  claimed.add(audioFileName(audioKey(it.payload as never)));
}
if (claimed.size === 0) {
  console.error("[prune] no item claims any audio file — refusing to delete anything");
  process.exit(1);
}

const files = readdirSync(dir).filter((f) => f.endsWith(".mp3"));
const orphans = files.filter((f) => !claimed.has(f));
const bytes = orphans.reduce((n, f) => n + statSync(join(dir, f)).size, 0);

console.log(`[prune] ${files.length} file(s) on disk, ${claimed.size} claimed, ${orphans.length} orphan(s)`);
console.log(`[prune] orphans hold ${(bytes / 1024 / 1024).toFixed(2)} MB`);
if (orphans.length === 0) process.exit(0);
if (DRY) {
  for (const f of orphans) console.log(`  would delete ${f}`);
  process.exit(0);
}
for (const f of orphans) rmSync(join(dir, f));
console.log(`[prune] deleted ${orphans.length} file(s), freed ${(bytes / 1024 / 1024).toFixed(2)} MB`);
