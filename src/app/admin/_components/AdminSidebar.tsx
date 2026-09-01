"use client";

// Admin navigation shell — a left rail on desktop, a hamburger-opened drawer on
// mobile. Ported from AlmiItalian's Tier-A shell (src/components/Sidebar.tsx,
// SidebarItem.tsx, HamburgerButton.tsx) and scoped to /admin.
//
// ── WHAT THIS REPLACED, STATED PLAINLY ──────────────────────────────────────
//
// AlmiOET was NOT navigation-less before this. `AdminSubnav` rendered a
// horizontal tab strip with all four admin destinations, and every one of them
// was reachable. What was missing was a SIDEBAR, which is what this adds; the
// tab strip is removed rather than kept, because two navigations over four links
// is chrome competing with itself.
//
// Worth knowing if you go looking: AlmiItalian's ADMIN nav
// (src/components/admin/AdminNav.tsx) is itself a horizontal tab strip with the
// same four tabs and the same active-matching rule as the AdminSubnav removed
// here — porting that file would have changed nothing. AlmiItalian's actual left
// rail is its APP-WIDE shell, and that is what this is modelled on.
//
// ── EVERY ADMIN ROUTE IN THIS REPO ──────────────────────────────────────────
//
// Enumerated from src/app/admin/ on 2026-08-31. Five route files, four
// destinations — nothing here is invented, and nothing is omitted:
//
//   src/app/admin/page.tsx               /admin                → REDIRECTS to
//                                        /admin/reviews. It renders nothing, so
//                                        it gets no nav entry: an "Overview"
//                                        link landing on Reviews would be a
//                                        second door to the same room.
//   src/app/admin/reviews/page.tsx       /admin/reviews
//   src/app/admin/costs/page.tsx         /admin/costs
//   src/app/admin/comp-accounts/page.tsx /admin/comp-accounts
//   src/app/admin/accounts/page.tsx      /admin/accounts
//
// Not listed, because they are not pages and cannot be navigated to:
//   src/app/api/admin/reviews/route.ts   POST/GET JSON
//   src/app/api/admin/stats/route.ts     GET JSON
//
// When a new admin page lands, add it here. A page with no way in is a page
// nobody uses.

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { key: string; href: string; icon: string; label: string; match: string };

const ITEMS: Item[] = [
  { key: "reviews", href: "/admin/reviews", icon: "⭐", label: "Reviews", match: "/admin/reviews" },
  { key: "costs", href: "/admin/costs", icon: "💷", label: "AI Usage", match: "/admin/costs" },
  {
    key: "comp",
    href: "/admin/comp-accounts",
    icon: "🎟️",
    label: "Comp Accounts",
    match: "/admin/comp-accounts",
  },
  { key: "accounts", href: "/admin/accounts", icon: "👥", label: "Accounts", match: "/admin/accounts" },
];

// Longest matching prefix wins, so a future /admin/accounts/[id] lights Accounts
// rather than whichever entry happens to come first.
function activeKey(pathname: string, items: Item[]): string | null {
  let best: string | null = null;
  let bestLen = -1;
  for (const it of items) {
    const hit = pathname === it.match || pathname.startsWith(it.match + "/");
    if (hit && it.match.length > bestLen) {
      best = it.key;
      bestLen = it.match.length;
    }
  }
  return best;
}

function NavItem({
  item,
  active,
  onNavigate,
}: {
  item: Item;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors " +
        (active ? "bg-almi-coral text-almi-ink" : "text-almi-text hover:bg-almi-bg-peach/60")
      }
    >
      <span aria-hidden className="w-5 text-center text-base leading-none">
        {item.icon}
      </span>
      <span>{item.label}</span>
    </Link>
  );
}

function NavList({ active, onNavigate }: { active: string | null; onNavigate?: () => void }) {
  return (
    <nav aria-label="Admin sections" className="space-y-1">
      {ITEMS.map((it) => (
        <NavItem key={it.key} item={it} active={active === it.key} onNavigate={onNavigate} />
      ))}
    </nav>
  );
}

export function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = activeKey(pathname, ITEMS);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Escape closes the drawer. Without it the drawer is dismissable by mouse
    // only — the backdrop takes a click, and a keyboard user who opened it has
    // no way out but tabbing to the close button.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Mobile: a hamburger that opens the same list in a drawer. */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open admin navigation"
          className="flex h-9 items-center gap-2 rounded-md border border-almi-bg-peach px-3 text-sm font-semibold text-almi-ink hover:bg-almi-bg-peach/60"
        >
          <span aria-hidden>☰</span>
          <span>Admin menu</span>
        </button>
      </div>

      {/* Desktop: the rail. Sticky rather than fixed, so it never has to guess
          the height of the sticky family header above it. */}
      <aside className="hidden w-56 shrink-0 md:block">
        <div className="sticky top-24 rounded-xl border border-almi-bg-peach bg-almi-paper p-2">
          <p className="px-3 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-almi-text-muted">
            Admin
          </p>
          <NavList active={active} />
        </div>
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Admin navigation">
          <div className="absolute inset-0 bg-almi-ink/40" aria-hidden onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-64 max-w-[82%] flex-col border-r border-almi-bg-peach bg-almi-paper px-3 pb-4 pt-6 shadow-xl">
            <div className="flex items-center justify-between px-3 pb-4">
              <span className="text-base font-semibold leading-tight text-almi-ink">Admin</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center rounded-full text-almi-text-muted hover:bg-almi-bg-peach hover:text-almi-ink"
              >
                <span aria-hidden className="text-xl leading-none">
                  &times;
                </span>
              </button>
            </div>
            <NavList active={active} onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}
    </>
  );
}
