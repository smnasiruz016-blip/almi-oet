/**
 * LISTENING AUDIO — the transport and the state machine.
 *
 * Two things are under test, and neither is "the file is fine". The files were
 * proven fine (75/75, 0 silent frames, 36.3 min) and the bug persisted, so this
 * covers what happens BETWEEN the file and the learner.
 *
 * 1. `serveAudio` — Range semantics. Measured 2026-09-01: the old route ignored
 *    `Range` entirely and answered `bytes=0-1023` with `200` and all 396,382
 *    bytes. Survivable while the client pre-fetched into a Blob; not survivable
 *    now that the <audio> element streams the URL and range-requests as a matter
 *    of course.
 *
 * 2. The state machine. The old code wrote:
 *
 *        audio.onended = () => setState("done");
 *        await audio.play();
 *        setState("playing");
 *
 *    If the audio ended before `play()` resolved, "done" was overwritten by
 *    "playing" and the badge stuck on "Playing…" forever. If it ended after, the
 *    badge read "Played". ONE defect, TWO symptoms, chosen by a race — which is
 *    why the reported symptom changed between two observations of the same item
 *    with nothing deployed in between. This asserts the badge is driven by
 *    element events, so the ordering cannot decide it.
 *
 * Expected byte counts and offsets are hand-typed.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, createElement, type ReactElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { OetTaskType } from "@prisma/client";
import { serveAudio } from "@/lib/oet/serve-audio";
import { OetComposer } from "@/components/oet/OetComposer";

// ── 1. serveAudio ───────────────────────────────────────────────────────────
const TOTAL = 1000;
const body = Buffer.from(Array.from({ length: TOTAL }, (_, i) => i % 251));
const req = (range?: string) =>
  new Request("http://x/a", range ? { headers: { Range: range } } : undefined);

describe("serveAudio", () => {
  it("returns the whole body and advertises range support when no Range is sent", async () => {
    const res = serveAudio(body, req());
    expect(res.status).toBe(200);
    expect(res.headers.get("Accept-Ranges")).toBe("bytes");
    expect(res.headers.get("Content-Type")).toBe("audio/mpeg");
    expect(new Uint8Array(await res.arrayBuffer())).toHaveLength(TOTAL);
  });

  it("does NOT hand-set Content-Length — the platform sizes its own body", () => {
    // A hand-set length is a promise about a body the platform may re-encode.
    // Measured byte-exact under `next start`, but there is no reason to make a
    // promise the platform makes correctly for free.
    const res = serveAudio(body, req());
    expect(res.headers.has("Content-Length")).toBe(false);
  });

  it("answers a prefix range with 206 and the right slice", async () => {
    const res = serveAudio(body, req("bytes=0-99"));
    expect(res.status).toBe(206);
    expect(res.headers.get("Content-Range")).toBe("bytes 0-99/1000");
    const got = new Uint8Array(await res.arrayBuffer());
    expect(got).toHaveLength(100);
    expect(got[0]).toBe(body[0]);
    expect(got[99]).toBe(body[99]);
  });

  it("answers an open-ended range to the last byte", async () => {
    const res = serveAudio(body, req("bytes=900-"));
    expect(res.status).toBe(206);
    expect(res.headers.get("Content-Range")).toBe("bytes 900-999/1000");
    expect(new Uint8Array(await res.arrayBuffer())).toHaveLength(100);
  });

  it("answers a suffix range with the LAST n bytes", async () => {
    const res = serveAudio(body, req("bytes=-50"));
    expect(res.status).toBe(206);
    expect(res.headers.get("Content-Range")).toBe("bytes 950-999/1000");
    expect(new Uint8Array(await res.arrayBuffer())).toHaveLength(50);
  });

  it("clamps an end past the last byte instead of over-reading", async () => {
    const res = serveAudio(body, req("bytes=990-99999"));
    expect(res.headers.get("Content-Range")).toBe("bytes 990-999/1000");
    expect(new Uint8Array(await res.arrayBuffer())).toHaveLength(10);
  });

  it("returns 416 for an unsatisfiable range", async () => {
    const res = serveAudio(body, req("bytes=5000-6000"));
    expect(res.status).toBe(416);
    expect(res.headers.get("Content-Range")).toBe("bytes */1000");
  });

  it("ignores a malformed Range and returns the whole body", async () => {
    const res = serveAudio(body, req("kilobytes=0-10"));
    expect(res.status).toBe(200);
    expect(new Uint8Array(await res.arrayBuffer())).toHaveLength(TOTAL);
  });

  it("reassembles byte-identically from two ranges", async () => {
    const a = new Uint8Array(await serveAudio(body, req("bytes=0-399")).arrayBuffer());
    const b = new Uint8Array(await serveAudio(body, req("bytes=400-")).arrayBuffer());
    const joined = new Uint8Array([...a, ...b]);
    expect(joined).toHaveLength(TOTAL);
    expect([...joined]).toEqual([...new Uint8Array(body)]);
  });
});

// ── 2. the player's state machine ───────────────────────────────────────────
const router = { refresh() {}, push() {}, replace() {}, back() {}, forward() {}, prefetch() {} };
let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  // jsdom implements no media pipeline, so play() is stubbed. Everything the
  // component decides is driven by the events below, which is the property
  // under test.
  vi.spyOn(HTMLMediaElement.prototype, "play").mockImplementation(async () => undefined);
  vi.stubGlobal("fetch", vi.fn(async () => new Response("{}", { status: 200 })));
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function mount(el: ReactElement) {
  act(() => {
    root.render(createElement(AppRouterContext.Provider, { value: router as never }, el));
  });
}

const listening = () =>
  mount(
    <OetComposer
      attemptId="a1"
      taskType={"LISTENING_PART_A" as OetTaskType}
      prompt="Listen."
      payload={{ gaps: [{ id: "g1", label: "Gap 1" }] }}
    />,
  );

const btn = () =>
  [...container.querySelectorAll("button")].find((b) =>
    /Play audio|Loading|Playing|Played|Retry/.test(b.textContent ?? ""),
  )!;
const media = () => container.querySelector("audio") as HTMLAudioElement;
const emit = (name: string, currentTime?: number) =>
  act(() => {
    const el = media();
    if (currentTime !== undefined) {
      Object.defineProperty(el, "currentTime", { value: currentTime, configurable: true });
    }
    el.dispatchEvent(new Event(name, { bubbles: true }));
  });

describe("the Listening player", () => {
  it("streams the route directly instead of a blob: URL", () => {
    listening();
    act(() => btn().click());
    expect(media().src).toContain("/api/oet/audio/a1");
    expect(media().src.startsWith("blob:")).toBe(false);
  });

  it("does not fetch anything before the learner presses play", () => {
    listening();
    expect(media().getAttribute("preload")).toBe("none");
    expect(media().src).toBe("");
  });

  it("says Playing when the element reports playing, and Played once it has run", () => {
    listening();
    act(() => btn().click());
    emit("playing");
    expect(btn().textContent).toContain("Playing");
    emit("timeupdate", 4);
    emit("ended");
    expect(btn().textContent).toContain("Played");
    expect(btn().disabled).toBe(true);
  });

  it("🔴 does not stick on Playing when the audio ends before play() resolves", () => {
    // THE RACE, reproduced in the order that used to break it: the element ends
    // FIRST, and only then does the click handler finish. The old code assigned
    // "playing" after the await and buried the terminal state; the badge sat on
    // "Playing…" forever, which is exactly what production reported.
    listening();
    act(() => btn().click());
    emit("timeupdate", 4);
    emit("ended");
    emit("playing"); // a late "playing" must not resurrect a finished play
    expect(btn().textContent).not.toContain("Playing");
    expect(btn().textContent).toContain("Played");
  });

  it("🔴 does not spend the one play when it ends without any audio running", () => {
    // The reported bug: it "plays", makes no sound, and the item is consumed.
    // Ending with no progress is a FAILED play — the button stays live.
    listening();
    act(() => btn().click());
    emit("playing");
    emit("ended"); // no timeupdate ever advanced
    expect(btn().textContent).toContain("Retry");
    expect(btn().disabled).toBe(false);
    expect(container.textContent).toContain("played back silently");
  });

  it("surfaces the route's own reason when it refuses", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () =>
          new Response(JSON.stringify({ ok: false, error: "Start your 7-day free trial to play this audio." }), {
            status: 402,
          }),
      ),
    );
    listening();
    act(() => btn().click());
    emit("error");
    await act(async () => {
      await Promise.resolve();
    });
    expect(container.textContent).toContain("7-day free trial");
  });
});
