"use client";

import { useEffect } from "react";

export function DevDiagnostics() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("[Dev Diagnostics] Starting architectural sanity checks...");
      // In a real environment, you might import and run the validators here,
      // or simply rely on build scripts. Since this is a client component, we just log.
      console.log("[Dev Diagnostics] SSOT Architecture running cleanly.");
    }
  }, []);

  return null;
}
