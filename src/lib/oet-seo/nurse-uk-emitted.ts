// Which nationality-first pages the gate admits — computed once, cached.
//
// Separate from `emitted()` on purpose: that function already composes 610
// organisation pages and 1,243 profession×organisation pages, and the sitemap,
// the routes and `gen-emitted` all pay for it on every call. This is fifteen
// pages with their own data file and no dependency on any of that.
//
// The gate is applied for real rather than assumed. These pages were designed to
// be distinct by construction, and they are — 1,339-1,668 unique words against a
// 350 floor, 20-25% sibling overlap against a 40% ceiling — but "designed to
// clear" is a claim and `gate()` is the check. A page that stopped clearing would
// drop out of the sitemap here rather than shipping thin.

import { gate, fingerprint } from "./compose-core";
import { composeAllNurseUk, type NurseUkComposed } from "./nurse-uk-compose";

let _cache: NurseUkComposed[] | null = null;

export function emittedNurseUk(): NurseUkComposed[] {
  if (_cache) return _cache;
  const ordered = [...composeAllNurseUk()].sort(
    (a, b) => b.facts - a.facts || b.uniqueWords - a.uniqueWords || a.path.localeCompare(b.path),
  );
  const seen: Set<string>[] = [];
  const cleared: NurseUkComposed[] = [];
  for (const p of ordered) {
    if (gate(p, seen).pass) {
      cleared.push(p);
      seen.push(fingerprint(p.sections, p.tables));
    }
  }
  _cache = cleared;
  return _cache;
}

export function emittedNurseUkPaths(): string[] {
  return emittedNurseUk().map((p) => p.path);
}

export function isNurseUkEmitted(path: string): boolean {
  return emittedNurseUkPaths().includes(path);
}
