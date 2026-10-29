/**
 * RR-345 (D1) · A MOCK RECORDING IS HEARD ONCE — ON THE SERVER, NOT ONLY IN THE TAB.
 *
 * "Plays once" lived in a React useState: F5 brought "Play audio" back, and the
 * audio URL opened on its own gave a normal player with a seek bar and Download.
 * Now the first time the server hands out a one-pass recording it stamps the
 * attempt (OetAttempt.audioPlayedAt). From then on the file is served only inside
 * a short window — long enough for the browser's own range requests and a retry
 * of a play that failed, too short to hear the recording a second time — and the
 * page shows the recording as played after a reload.
 *
 * ⚠️ WHAT IT DOES NOT CLOSE: inside the window a second tab can still fetch the
 * file. The window is the price of letting a browser buffer the audio in pieces.
 */
export const ONE_PASS_WINDOW_SECONDS = 420; // the longest recording (~345 s) plus room for buffering and one retry

export type OnePassDecision = { serve: boolean; markPlayed: boolean; why: string };

export function onePassDecision(input: { onePass: boolean; playedAt: Date | null; now: number }): OnePassDecision {
  if (!input.onePass) return { serve: true, markPlayed: false, why: "practice — replay is how a section is learned" };
  if (!input.playedAt) return { serve: true, markPlayed: true, why: "the first play of a one-pass recording" };
  const since = (input.now - input.playedAt.getTime()) / 1000;
  if (since <= ONE_PASS_WINDOW_SECONDS) return { serve: true, markPlayed: false, why: "inside the play window (buffering, one retry)" };
  return { serve: false, markPlayed: false, why: "already played — heard once, like the real test" };
}

export const PLAYED_ONCE_MESSAGE = "This recording has been played. Like the real test, it is heard once.";
