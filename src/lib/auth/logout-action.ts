"use server";

// The one logout. The (app) layout used to declare its own inline copy and the
// header would have needed a second — two server actions doing the same write is
// two things that can drift. Both import this.

import { redirect } from "next/navigation";
import { destroySession } from "@/lib/auth";

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/");
}
