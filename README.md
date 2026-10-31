# AlmiOET

AI-powered **Occupational English Test (DET)** practice — a **separate** product in
the AlmiWorld family, on its own subdomain **almioet.almiworld.com**.

Forked from AlmiTOEFL's app chassis; the practice layer is an item-bank ported
from AlmiPTE (`DetItem ↔ DetAttempt`, data-driven task registry — no if-chains).
Four tasks: **Read and Select** + **Listen and Type** (deterministic) and
**Write About the Photo** + **Speak About the Photo** (AI — Claude Sonnet, plus
Whisper transcription for speaking). Difficulty-pool **adaptive sets** + a
**full-length mock**.

Honesty doctrine: scores are practice estimates on the **10–160** scale, shown
as per-subscore **ranges** (Literacy / Comprehension / Conversation / Production)
plus a readiness band — **never a fabricated overall** (DET's overall is a
proprietary adaptive estimate). All content is original — **never copied from
OET**. Try free for 48 hours with no card (1 Reading set, 1 Listening set,
1 AI-scored Writing letter, 1 Speaking role-play, lessons), then $12/month with
no trial — owner decision 31 Oct 2026; see `src/lib/billing/taste.ts`.

Adaptivity here is honest difficulty-pool adaptivity and does **not** reproduce
DET's scoring engine.
