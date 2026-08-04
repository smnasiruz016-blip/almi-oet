import type { NextConfig } from "next";

// ── SECURITY HEADERS ────────────────────────────────────────────────────────
// Parity with the family set already shipped on AlmiPrep / AlmiPTE / AlmiTOEFL /
// AlmiKorean / AlmiItalian. Origins were checked against THIS repo, not copied:
//   · the only remote image is the AlmiWorld logo (see `images` below);
//   · listening audio is served from a SAME-ORIGIN route
//     (/api/oet/audio/[attemptId]), not Vercel Blob — @vercel/blob is not even a
//     dependency here — so media-src needs no external host, unlike AlmiPrep;
//   · the learner's Speaking recording is a blob: URL from MediaRecorder;
//   · Whisper and Sonnet are called SERVER-side only, so no AI host belongs in
//     connect-src; putting api.openai.com there would widen the policy for a
//     request the browser never makes;
//   · Stripe checkout is a redirect — no js.stripe.com, no iframe.
//
// `script-src` carries 'unsafe-inline' and that is NOT XSS protection: Next's App
// Router streams the RSC payload as inline scripts and a nonce needs middleware
// this app does not have. Saying `script-src 'self'` while depending on
// 'unsafe-inline' would read as protection while providing none.
const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob: https://almiworld.com",
  "media-src 'self' blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  // Report-Only first, as on AlmiPrep: the policy is untested against this app's
  // own surfaces (mock runner, audio player, recorder), and a mistuned directive
  // must not break a learner mid-test. Rename the key to enforce once clean.
  { key: "Content-Security-Policy-Report-Only", value: CSP },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  // Microphone is NOT denied: the Speaking role-play records the candidate.
  { key: "Permissions-Policy", value: "camera=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
];

const nextConfig: NextConfig = {
  // The GlobalHeader logo is hot-linked from the WordPress source of truth at
  // almiworld.com so it can be swapped without redeploying every family product.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "almiworld.com" }],
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
