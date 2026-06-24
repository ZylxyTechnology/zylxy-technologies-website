"use client";

import { useEffect, useState } from "react";

export default function NoiseReveal({ children }) {
  const [stage, setStage] = useState("entering");

  useEffect(() => {
    // Stage 1: Hold the solid screen for a split second to let the browser paint the page behind it
    const holdTimer = setTimeout(() => setStage("revealing"), 50);

    // Stage 2: Completely remove the node from the DOM after the animation finishes
    const removeTimer = setTimeout(() => setStage("done"), 1000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {children}

      {stage !== "done" && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
          {/* Layer 1: HubSpot Orange Accent (Bottom Layer) */}
          {/* Uses cubic-bezier for a cinematic, "snap-and-glide" easing curve */}
          <div
            className={`absolute inset-0 bg-[#FF7A59] transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)]
              ${stage === "revealing" ? "-translate-y-full" : "translate-y-0"}`}
          />

          {/* Layer 2: Deep Brand Blue (Top Layer) */}
          {/* Delayed by 75ms to create the staggered "ribbon" wipe effect */}
          <div
            className={`absolute inset-0 bg-[#050E21] transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] delay-[75ms]
              ${stage === "revealing" ? "-translate-y-full" : "translate-y-0"}`}
          />
        </div>
      )}
    </>
  );
}
