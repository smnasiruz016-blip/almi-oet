"use client";

/**
 * The LAST resort — an error thrown by the root layout itself.
 *
 * When this renders, the root layout has already failed, so it replaces the
 * whole document: this file must ship its own <html> and <body>. That also
 * means it gets no global stylesheet and no header, so the styling here is
 * inline on purpose rather than by omission — a Tailwind class would render as
 * nothing.
 *
 * Same rule as src/app/error.tsx: the learner never sees `error.message` or a
 * stack, and no promise is made about saved progress, because answers are held
 * in React state until submit and there is nothing to promise. See the header of
 * error.tsx for the measurement behind that.
 */
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[oet.global-error] root layout error", { digest: error.digest });
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1.5rem",
          background: "#FFFBF5",
          color: "#2B2118",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#C2410C",
            }}
          >
            AlmiOET
          </p>
          <h1 style={{ margin: "0.5rem 0 0", fontSize: "1.875rem", fontWeight: 600 }}>
            Something went wrong at our end
          </h1>
          <p style={{ margin: "0.75rem 0 0", fontSize: "0.875rem", lineHeight: 1.6 }}>
            This one is ours, not yours. Nothing has been marked and nothing has been used up.
            Anything you had typed in this attempt is gone, so start it again when you are ready.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                minHeight: 48,
                padding: "0.75rem 1.75rem",
                borderRadius: 9999,
                border: "none",
                background: "#FF7A66",
                color: "#2B2118",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <a
              href="/practice"
              style={{
                minHeight: 48,
                display: "inline-flex",
                alignItems: "center",
                padding: "0.75rem 1.5rem",
                borderRadius: 9999,
                border: "1px solid rgba(43,33,24,0.2)",
                color: "#2B2118",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Back to practice
            </a>
          </div>
          {error.digest && (
            <p style={{ marginTop: "1.5rem", fontSize: "0.75rem", color: "#7A6A5B" }}>
              If you tell us about this, quote reference{" "}
              <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
                {error.digest}
              </span>
              .
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
