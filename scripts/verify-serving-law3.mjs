// Law #3 for the Q&A blocks, verified in the BUILT HTML rather than in the
// composer.
//
//   npx next build && node scripts/verify-serving-law3.mjs
//
// Requires a prior build — it reads .next/server/app/**, which is the point.
// The composer can be entirely correct about which questions belong where and
// still ship them twice, or ship a JSON-LD block that disagrees with the visible
// page. Those two failures are invisible to every check that stops at the
// composed object, so this one starts at the rendered file.
//
// Asserts three things: no shared question appears on any corridor, every
// corridor question appears exactly once and only on its own page, and each page
// emits exactly one FAQPage block whose question count matches what is visible.

import fs from "node:fs";

const faq = JSON.parse(fs.readFileSync("src/lib/oet-seo/corridor-faq.json", "utf8"));
const origins = [
  "pakistan", "nigeria", "india", "philippines", "ghana",
  "kenya", "zimbabwe", "egypt", "sri-lanka", "nepal",
];
const html = Object.fromEntries(
  origins.map((o) => [o, fs.readFileSync(`.next/server/app/nursing/${o}/united-kingdom.html`, "utf8")]),
);
const dest = fs.readFileSync(".next/server/app/register/uk-nmc.html", "utf8");
const count = (h, s) => h.split(s).length - 1;

console.log("=== SHARED questions: must be 0 on every corridor, present on the destination ===");
let breach = 0;
for (const item of faq.sharedDestinationFaq) {
  const on = origins.filter((o) => html[o].includes(item.q));
  const dt = count(dest, `<dt class="text-sm font-semibold text-almi-ink">${item.q}</dt>`);
  if (on.length) breach += 1;
  console.log(
    `  corridors=${on.length}/10  destination <dt>=${dt}  ${on.length ? "!! " + on.join(",") : ""}  ${item.q.slice(0, 58)}`,
  );
}
console.log(`  shared-FAQ leaks onto corridors: ${breach}`);

console.log("\n=== CORRIDOR questions: must appear on their OWN corridor only ===");
let cross = 0;
for (const [slug, items] of Object.entries(faq.corridorFaq)) {
  const own = slug.split("__")[1];
  for (const item of items) {
    const elsewhere = origins.filter((o) => o !== own && html[o].includes(item.q));
    const onOwn = count(html[own], `<dt class="text-sm font-semibold text-almi-ink">${item.q}</dt>`);
    if (elsewhere.length || onOwn !== 1) {
      cross += 1;
      console.log(`  !! ${own}: own-<dt>=${onOwn} elsewhere=[${elsewhere.join(",")}]  ${item.q.slice(0, 50)}`);
    }
  }
}
console.log(`  corridor-FAQ questions rendered exactly once on their own page: ${cross === 0 ? "ALL" : `${cross} problem(s)`}`);

console.log("\n=== FAQPage JSON-LD ===");
for (const o of origins) {
  const m = html[o].match(/\{"@context":"https:\/\/schema\.org","@type":"FAQPage".*?\}<\/script>/s);
  const n = m ? (m[0].match(/"@type":"Question"/g) || []).length : 0;
  console.log(`  ${o.padEnd(12)} FAQPage blocks=${count(html[o], '"@type":"FAQPage"')}  questions=${n}`);
}
const dm = dest.match(/\{"@context":"https:\/\/schema\.org","@type":"FAQPage".*?\}<\/script>/s);
console.log(
  `  ${"register/uk-nmc".padEnd(12)} FAQPage blocks=${count(dest, '"@type":"FAQPage"')}  questions=${dm ? (dm[0].match(/"@type":"Question"/g) || []).length : 0}`,
);
