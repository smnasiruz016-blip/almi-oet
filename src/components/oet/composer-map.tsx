"use client";

// Render dispatch for the in-progress composer. The attempt page passes a
// SANITIZED payload (answer keys stripped server-side) and never branches on task
// type itself — the OetComposer handles every OET task family.

export { OetComposer } from "@/components/oet/OetComposer";
