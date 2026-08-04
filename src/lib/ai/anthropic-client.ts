// Anthropic SDK wrapper for AlmiOET. Lighter than AlmiCV's wrapper —
// AlmiPrep has no batch jobs, so we don't need the elaborate per-model
// token-bucket pacing. SDK's built-in retry + a small cost-ledger write
// is all we need.
//
// Every AI call goes through getAnthropicClient(). Cost is appended to
// AICostLedger via recordCost() in the caller (not auto-magicked here,
// so callers can attach userId + feature label).

import Anthropic from "@anthropic-ai/sdk";
import { prisma } from "@/lib/prisma";
import {
  computeCostCents,
  computeTranscriptionCostCents,
  type Usage,
} from "@/lib/ai/cost";
import type { ModelId, TranscriptionModelId } from "@/lib/ai/models";

let cached: Anthropic | null = null;

export function getAnthropicClient(): Anthropic {
  if (cached) return cached;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || apiKey.length < 20 || apiKey === "TODO_FOUNDER_PROVIDES") {
    throw new Error(
      "ANTHROPIC_API_KEY missing or invalid — set a real key in Vercel env",
    );
  }
  cached = new Anthropic({ apiKey, maxRetries: 2 });
  return cached;
}

export async function recordCost(input: {
  userId: string | null;
  feature: string;
  model: ModelId;
  usage: Usage;
  success: boolean;
  errorMessage?: string;
}): Promise<number> {
  // computeCostCents THROWS on a model with no pricing entry, and this call used
  // to sit outside the try below. That put the throw after the paid Anthropic
  // call had already completed: the exception propagated through the evaluator
  // to the submit route, which returned 500. The learner paid for the call, lost
  // their grade, and no ledger row was written — the worst of all three.
  //
  // A pricing gap is an accounting problem, not a reason to fail a user. Price
  // it at 0, say so loudly in the log AND in the row, and let the grade through.
  let costCents = 0;
  let pricingError: string | null = null;
  if (input.success) {
    try {
      costCents = computeCostCents(input.model, input.usage);
    } catch (e) {
      pricingError = e instanceof Error ? e.message : String(e);
      console.error(
        `[ai-cost-ledger] NO PRICING for model "${input.model}" (feature ${input.feature}) — ` +
          `recording costCents=0. This call WAS billed by the provider but is NOT costed here. ` +
          `Add it to PRICING_USD_PER_MTOK in lib/ai/models.ts.`,
        e,
      );
    }
  }

  // The row still names the model, so an unpriced model is visible in the ledger
  // rather than only in a log line nobody reads.
  const errorMessage = pricingError
    ? [input.errorMessage, `unpriced model: ${pricingError}`].filter(Boolean).join(" | ")
    : input.errorMessage;

  try {
    await prisma.aICostLedger.create({
      data: {
        userId: input.userId,
        feature: input.feature,
        model: input.model,
        inputTokens: input.usage.inputTokens,
        outputTokens: input.usage.outputTokens,
        cacheReadTokens: input.usage.cacheReadTokens ?? 0,
        cacheWriteTokens: input.usage.cacheWriteTokens ?? 0,
        costCents,
        success: input.success,
        errorMessage,
      },
    });
  } catch (e) {
    // Cost ledger write failure should not fail the user-facing call. Log + move on.
    console.error("[ai-cost-ledger] insert failed:", e);
  }
  return costCents;
}

/**
 * Record an already-computed external (e.g. OpenAI TTS) cost into the ledger.
 * Token fields are logged as 0; costCents is in the same 1/100-cents unit.
 */
export async function recordExternalCost(input: {
  userId: string | null;
  feature: string;
  model: string;
  costCents: number;
  success: boolean;
  errorMessage?: string;
}): Promise<void> {
  try {
    await prisma.aICostLedger.create({
      data: {
        userId: input.userId,
        feature: input.feature,
        model: input.model,
        inputTokens: 0,
        outputTokens: 0,
        cacheReadTokens: 0,
        cacheWriteTokens: 0,
        costCents: input.success ? input.costCents : 0,
        success: input.success,
        errorMessage: input.errorMessage,
      },
    });
  } catch (e) {
    console.error("[ai-cost-ledger] external insert failed:", e);
  }
}

/**
 * Record a Whisper transcription call into the same AICostLedger. Cost is
 * per-minute (see computeTranscriptionCostCents) rather than token-based, so
 * tokens are logged as 0. Returns the cost in 1/100 cents.
 */
export async function recordTranscriptionCost(input: {
  userId: string | null;
  feature: string;
  model: TranscriptionModelId;
  durationSeconds: number;
  success: boolean;
  errorMessage?: string;
}): Promise<number> {
  const costCents = input.success
    ? computeTranscriptionCostCents(input.model, input.durationSeconds)
    : 0;
  try {
    await prisma.aICostLedger.create({
      data: {
        userId: input.userId,
        feature: input.feature,
        model: input.model,
        inputTokens: 0,
        outputTokens: 0,
        cacheReadTokens: 0,
        cacheWriteTokens: 0,
        costCents,
        success: input.success,
        errorMessage: input.errorMessage,
      },
    });
  } catch (e) {
    console.error("[ai-cost-ledger] transcription insert failed:", e);
  }
  return costCents;
}
