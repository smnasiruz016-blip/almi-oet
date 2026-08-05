// Deterministic prose variation.
//
// The gate rejects sibling pages that overlap by more than 40% of their 5-grams.
// That is the right rule — it is precisely what stops a template with the name
// swapped from counting as a page. But it means the composer must genuinely say
// the same FACT in different WORDS across siblings.
//
// The variation is keyed by a stable hash of (slug + section), never by a random
// number: the same page phrases itself the same way on every build, so builds are
// reproducible and a resumed build cannot disagree with itself. Only the wording
// rotates — every variant states exactly the same fact, because the fact is the
// only thing we are allowed to assert.

/** FNV-1a — small, stable, dependency-free. */
export function hash(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/** Pick one variant deterministically for this page + slot. */
export function pick<T>(key: string, variants: readonly T[]): T {
  return variants[hash(key) % variants.length];
}
