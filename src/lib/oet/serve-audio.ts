/**
 * Serve a pre-rendered file to an <audio> element.
 *
 * 🔴 CONTENT-LENGTH IS NOT SET BY HAND ANY MORE, AND RANGE IS ANSWERED.
 *
 * The previous version built `new Response(new Uint8Array(file))` with a
 * hand-set `Content-Length`, and the client fetched it, turned it into a Blob,
 * and played a `blob:` URL. Two problems with that, one measured and one not:
 *
 *   · A hand-set Content-Length is a promise about a body the platform may
 *     re-encode. MEASURED 2026-09-01 against `next start` in production mode:
 *     it was byte-exact (396,382 sent, 396,382 received, identical sha256), so
 *     this was NOT the observed bug locally. It is removed anyway, because there
 *     is no reason to make a promise the platform makes correctly for free, and
 *     nothing here can measure what Vercel's edge does to the same response.
 *
 *   · RANGE WAS IGNORED. Measured on the same run: `Range: bytes=0-1023`
 *     returned `200` with all 396,382 bytes and no `Accept-Ranges`. An <audio>
 *     element range-requests as a matter of course; a route that answers every
 *     one with the whole file cannot be seeked and re-downloads on every probe.
 *     That was survivable while the client pre-fetched into a Blob. It is not,
 *     now that the element streams the URL itself.
 *
 * The blob round-trip bought nothing: the route is cookie-authenticated, and a
 * same-origin <audio src> carries the same cookie the fetch did, so the paywall
 * and the ownership check are untouched. What it cost was a whole failure mode
 * between the bytes and the speaker.
 */
export function serveAudio(file: Buffer, req: Request): Response {
  const total = file.length;
  const range = req.headers.get("range");
  const common = {
    "Content-Type": "audio/mpeg",
    "Accept-Ranges": "bytes",
    // Identical for every learner, but still paid content behind an ownership
    // check — private, never a shared cache.
    "Cache-Control": "private, max-age=3600",
    "X-Audio-Source": "prerendered",
  };

  // "bytes=START-END", either end optional. Anything else is ignored and the
  // whole body is returned, which is what the spec asks for on an unsatisfiable
  // or unparseable range.
  const m = range ? /^bytes=(\d*)-(\d*)$/.exec(range.trim()) : null;
  if (m && (m[1] !== "" || m[2] !== "")) {
    let start: number;
    let end: number;
    if (m[1] === "") {
      // Suffix form: the LAST n bytes.
      const n = Number(m[2]);
      start = Math.max(0, total - n);
      end = total - 1;
    } else {
      start = Number(m[1]);
      end = m[2] === "" ? total - 1 : Math.min(Number(m[2]), total - 1);
    }
    if (Number.isFinite(start) && Number.isFinite(end) && start <= end && start < total) {
      const slice = file.subarray(start, end + 1);
      return new Response(new Uint8Array(slice), {
        status: 206,
        headers: { ...common, "Content-Range": `bytes ${start}-${end}/${total}` },
      });
    }
    return new Response(null, {
      status: 416,
      headers: { ...common, "Content-Range": `bytes */${total}` },
    });
  }

  return new Response(new Uint8Array(file), { headers: common });
}

