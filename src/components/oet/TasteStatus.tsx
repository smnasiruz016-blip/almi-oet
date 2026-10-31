// What the 48-hour taste has left — hours and the four items — read from the
// same functions the doors decide with (lib/billing/taste.ts), so the banner
// cannot promise what a door would refuse. Ended: the paywall, never a dead end.
import type { OetSubTest } from "@prisma/client";
import { tasteHoursLeft, tasteState, TASTE_LIMITS, type TasteUser } from "@/lib/billing/taste";
import { OFFER } from "@/lib/billing/offer";
import { Paywall } from "@/components/oet/Paywall";

const ITEMS: { subTest: OetSubTest; label: string }[] = [
  { subTest: "READING", label: "Reading set" },
  { subTest: "LISTENING", label: "Listening set" },
  { subTest: "WRITING", label: "AI-scored Writing letter" },
  { subTest: "SPEAKING", label: "Speaking role-play" },
];

export async function TasteStatus({ user }: { user: TasteUser & { id: string } }) {
  const hours = tasteHoursLeft(user);
  if (hours === null) return <Paywall reason="EXPIRED" />;
  const state = await tasteState(user.id);
  return (
    <section data-taste-status className="rounded-2xl border border-almi-teal/30 bg-almi-teal/5 p-5">
      <p className="text-sm font-semibold text-almi-ink">
        Free for {OFFER.tasteHours} hours — {hours} {hours === 1 ? "hour" : "hours"} left. No card.
      </p>
      <ul className="mt-3 grid gap-1.5 text-sm text-almi-text sm:grid-cols-2">
        {ITEMS.map((i) => {
          const used = state.used[i.subTest] >= TASTE_LIMITS[i.subTest];
          return (
            <li key={i.subTest} data-taste-item={i.subTest} data-used={used ? "1" : "0"} className="flex items-start gap-2">
              <span aria-hidden className={`mt-0.5 select-none font-bold ${used ? "text-almi-text-muted" : "text-almi-teal"}`}>
                {used ? "✓" : "○"}
              </span>
              <span>
                1 {i.label} {used ? "— used" : "— free"}
              </span>
            </li>
          );
        })}
        <li className="flex items-start gap-2">
          <span aria-hidden className="mt-0.5 select-none font-bold text-almi-teal">○</span>
          <span>Lessons — free</span>
        </li>
      </ul>
      <p className="mt-3 text-xs text-almi-text-muted">
        Mocks, model answers, more sets and the full vocabulary come with the full plan.
      </p>
    </section>
  );
}
