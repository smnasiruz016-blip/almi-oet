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
import { listeningAudioPolicy } from "@/lib/oet/audio-policy";

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

// ── 3. GAP-047 · the mock enforces the promise it prints ────────────────────
/**
 * 🔴 THE SCREEN USED TO CONTRADICT ITSELF, AND THE OWNER FOUND IT WITH HIS EYES.
 *
 * "Plays once, like the real test." sat directly above a full native <audio
 * controls>: pause, a SEEK BAR, and Chrome's ⋮ menu with Download. In a MOCK a
 * candidate could scrub back and re-hear any part as often as they liked. OET
 * Listening is one-pass and that constraint IS the skill, so the score of anyone
 * who rewound meant nothing and they had no way to know.
 *
 * ⚠️ A TEST THAT ONLY CHECKS THE MOCK PLAYER RENDERS PROVES NOTHING. What is
 * asserted here is BEHAVIOUR, in both directions: a seek in MOCK does not move
 * playback, and the identical seek in PRACTICE does. If the guard were removed,
 * the first assertion fails; if the guard leaked into practice, the second does.
 *
 * The seek is driven the way a keyboard or a media key drives it — the clock is
 * written and `seeking` is dispatched — rather than by clicking a control, because
 * hiding a control is exactly the fix that would NOT have worked.
 */

/** Give the element a REAL settable clock. jsdom has no media pipeline, and the
 *  helper above pins currentTime to a fixed value, which cannot observe a handler
 *  writing to it — which is the entire property under test here. */
function installClock(el: HTMLAudioElement, start = 0) {
  let t = start;
  let ended = false;
  Object.defineProperty(el, "currentTime", {
    configurable: true,
    get: () => t,
    set: (v: number) => {
      t = v;
    },
  });
  Object.defineProperty(el, "ended", {
    configurable: true,
    get: () => ended,
    set: (v: boolean) => {
      ended = v;
    },
  });
  return {
    set: (v: number) => {
      t = v;
    },
    get: () => t,
    finish: () => {
      ended = true;
    },
  };
}

const fire = (el: HTMLElement, name: string) =>
  act(() => {
    el.dispatchEvent(new Event(name, { bubbles: true }));
  });

function mountListening(onePass: boolean | undefined) {
  mount(
    <OetComposer
      attemptId="a1"
      taskType={"LISTENING_PART_A" as OetTaskType}
      prompt="Listen."
      payload={{ gaps: [{ id: "g1", label: "Gap 1" }] }}
      listeningOnePass={onePass}
    />,
  );
}

/** Play, run the clock to 30s, then try to rewind to 5s the way a keyboard would. */
function playThenSeekBackTo(seconds: number) {
  act(() => btn().click());
  const el = media();
  const clock = installClock(el);
  fire(el, "playing");
  clock.set(30);
  fire(el, "timeupdate");
  clock.set(seconds);
  fire(el, "seeking");
  return clock;
}

describe("GAP-047 — one pass in a mock, full controls in practice", () => {
  it("🔴 MOCK: a seek back does NOT move playback", () => {
    mountListening(true);
    const clock = playThenSeekBackTo(5);
    // the clock was put back to the furthest point actually reached
    expect(clock.get()).toBe(30);
  });

  it("PRACTICE: the identical seek DOES move playback", () => {
    mountListening(false);
    const clock = playThenSeekBackTo(5);
    expect(clock.get()).toBe(5);
  });

  it("🔴 MOCK: a seek FORWARD is refused too — the clock cannot be skipped ahead", () => {
    mountListening(true);
    act(() => btn().click());
    const el = media();
    const clock = installClock(el);
    fire(el, "playing");
    clock.set(10);
    fire(el, "timeupdate");
    clock.set(90);
    fire(el, "seeking");
    expect(clock.get()).toBe(10);
  });

  it("MOCK: ordinary playback jitter is not fought", () => {
    // a seek guard that snapped on every tick would stutter the audio it protects
    mountListening(true);
    act(() => btn().click());
    const el = media();
    const clock = installClock(el);
    fire(el, "playing");
    clock.set(12);
    fire(el, "timeupdate");
    clock.set(12.2);
    fire(el, "seeking");
    expect(clock.get()).toBe(12.2);
  });

  it("🔴 MOCK: a pause that is not the end resumes; the end is left alone", () => {
    mountListening(true);
    act(() => btn().click());
    const el = media();
    const clock = installClock(el);
    const play = vi.spyOn(el, "play");
    fire(el, "playing");
    clock.set(8);
    fire(el, "timeupdate");
    play.mockClear();
    fire(el, "pause");
    expect(play).toHaveBeenCalledTimes(1);
    // the pause the browser fires as part of ending must NOT be resumed
    play.mockClear();
    clock.finish();
    fire(el, "pause");
    expect(play).not.toHaveBeenCalled();
  });

  it("PRACTICE: a pause is left alone", () => {
    mountListening(false);
    act(() => btn().click());
    const el = media();
    installClock(el);
    const play = vi.spyOn(el, "play");
    fire(el, "playing");
    play.mockClear();
    fire(el, "pause");
    expect(play).not.toHaveBeenCalled();
  });

  it("🔴 MOCK: no native controls, and no download or playback-rate menu", () => {
    mountListening(true);
    act(() => btn().click());
    emit("playing");
    const el = media();
    expect(el.hasAttribute("controls")).toBe(false);
    expect(el.getAttribute("controlsList")).toContain("nodownload");
    expect(el.getAttribute("controlsList")).toContain("noplaybackrate");
  });

  it("PRACTICE is VISIBLY UNCHANGED — the full control strip is still there", () => {
    mountListening(false);
    act(() => btn().click());
    emit("playing");
    const el = media();
    expect(el.hasAttribute("controls")).toBe(true);
    expect(el.className).toContain("w-full");
    expect(el.className).not.toContain("hidden");
    // and nothing is taken away from it
    expect(el.hasAttribute("controlsList")).toBe(false);
  });

  it("MOCK: the learner can still SEE the state, including that it is spent", () => {
    mountListening(true);
    expect(btn().textContent).toContain("Play audio");
    act(() => btn().click());
    emit("playing");
    expect(btn().textContent).toContain("Playing");
    emit("timeupdate", 4);
    emit("ended");
    expect(btn().textContent).toContain("Played");
    // a disabled button with no explanation is GAP-042 again
    expect(container.querySelector('[data-testid="listening-spent"]')).not.toBeNull();
    expect(container.textContent).toContain("has been played");
  });

  it("PRACTICE does not tell the learner the recording is spent, because it is not", () => {
    mountListening(false);
    act(() => btn().click());
    emit("playing");
    emit("timeupdate", 4);
    emit("ended");
    expect(container.querySelector('[data-testid="listening-spent"]')).toBeNull();
  });

  it("an OMITTED prop is the strict one — a caller who forgets cannot leak a rewind", () => {
    mountListening(undefined);
    act(() => btn().click());
    emit("playing");
    expect(media().hasAttribute("controls")).toBe(false);
    expect(media().getAttribute("data-one-pass")).toBe("true");
  });
});

// ── 4. the policy that decides it ───────────────────────────────────────────
describe("listeningAudioPolicy", () => {
  it("discriminates the two modes, and that is the whole ruling", () => {
    expect(listeningAudioPolicy({ mode: "MOCK" }).onePass).toBe(true);
    expect(listeningAudioPolicy({ mode: "PRACTICE_SET" }).onePass).toBe(false);
  });

  it("🔴 defaults to ONE PASS for anything it cannot identify as practice", () => {
    // too strict = a learner who says so. too lenient = a mock score that is
    // quietly meaningless. Only the first is recoverable.
    for (const mode of [null, undefined, "", "MOCK_2", 7, {}]) {
      expect(listeningAudioPolicy({ mode }).onePass, JSON.stringify(mode)).toBe(true);
    }
  });

  it("an ABSENT session is a standalone practice item", () => {
    expect(listeningAudioPolicy(null).onePass).toBe(false);
    expect(listeningAudioPolicy(undefined).onePass).toBe(false);
  });

  it("says why, in words, so a decision can be read back", () => {
    expect(listeningAudioPolicy({ mode: "MOCK" }).reason).toContain("MOCK");
    expect(listeningAudioPolicy({ mode: "PRACTICE_SET" }).reason).toContain("PRACTICE_SET");
  });
});
