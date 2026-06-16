"use client";

import { introFeatureData } from "@/app/hubspot/data/introFeatures";
import { introFeatureStyles as s } from "@/app/hubspot/styles/introFeature";
import Link from "next/link";
import { useState } from "react";

export default function HubSpotIntroFeature() {
  const [activePhase, setActivePhase] = useState(1);
  const currentPhase = introFeatureData.workflowPhases.find(
    (p) => p.id === activePhase,
  );

  // Computes the structural angle position of the workflow nodes
  const getRotationAngle = () => {
    if (activePhase === 1) return "rotate-0";
    if (activePhase === 2) return "-rotate-120";
    return "-rotate-240";
  };

  // Computes the metric expansion scaling factor requested by your director
  const getScaleClass = () => {
    if (activePhase === 1) return "scale-100"; // Baseline target size
    if (activePhase === 2) return "scale-[1.08]"; // Moderate scale expansion
    return "scale-[1.16]"; // Maximum layout visibility
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        {/* Left Interactive Graphical Hub Card */}
        <div className={s.leftCol}>
          <div className={s.bgGridDecor} />
          <div className={s.radialGlowAccent} />

          {/* Linked rotation and scale modifiers into a single layout container */}
          <div className={`${s.workflowWheelWrapper} ${getScaleClass()}`}>
            <div className={s.wheelCoreContent}>
              <span className={s.stepNum}>{currentPhase.num}</span>
              <span className={s.stepLabel}>{currentPhase.label}</span>

              <div className={s.stepIndicatorDots}>
                {introFeatureData.workflowPhases.map((phase) => (
                  <div
                    key={phase.id}
                    className={`${s.dotBase} ${activePhase === phase.id ? s.dotActive : s.dotNormal}`}
                  />
                ))}
              </div>
            </div>

            <svg
              className={`${s.wheelSvg} ${getRotationAngle()}`}
              viewBox="0 0 200 200"
            >
              <circle cx="100" cy="100" r="85" className={s.wheelTrack} />
              <g>
                <circle
                  cx="100"
                  cy="15"
                  className={`${s.nodeBase} ${activePhase === 1 ? s.nodeActive : s.nodeNormal}`}
                  onClick={() => setActivePhase(1)}
                />
                <circle
                  cx="173"
                  cy="142"
                  className={`${s.nodeBase} ${activePhase === 2 ? s.nodeActive : s.nodeNormal}`}
                  onClick={() => setActivePhase(2)}
                />
                <circle
                  cx="27"
                  cy="142"
                  className={`${s.nodeBase} ${activePhase === 3 ? s.nodeActive : s.nodeNormal}`}
                  onClick={() => setActivePhase(3)}
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Right Info Framework Column */}
        <div className={s.rightCol}>
          <h2 className={s.heading}>{introFeatureData.header.heading}</h2>
          <p className={s.subtext}>{introFeatureData.header.subtext}</p>

          <div className={s.phasesWrapper}>
            {introFeatureData.workflowPhases.map((phase) => {
              const isActive = activePhase === phase.id;
              return (
                <div
                  key={phase.id}
                  className={`${s.phaseCard} ${isActive ? s.phaseCardActive : ""}`}
                  onClick={() => setActivePhase(phase.id)}
                >
                  <div className={s.phaseHeader}>
                    <span
                      className={`${s.phaseTagBase} ${isActive ? s.phaseTagActive : s.phaseTagNormal}`}
                    >
                      {phase.phaseLabel}
                    </span>
                    <h3
                      className={`${s.phaseTitleBase} ${isActive ? s.phaseTitleActive : s.phaseTitleNormal}`}
                    >
                      {phase.title}
                    </h3>
                  </div>

                  <div className={s.contentGrid}>
                    <div className={s.textBlock}>
                      <span className={`${s.label} ${s.challengeLabel}`}>
                        The Challenge
                      </span>
                      <p className={s.bodyText}>{phase.challengeText}</p>
                    </div>

                    {isActive && (
                      <div className={`${s.textBlock} animate-fade-in`}>
                        <span className={`${s.label} ${s.solutionLabel}`}>
                          The Solution
                        </span>
                        <p className={s.bodyText}>{phase.solutionText}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={s.btnRow}>
            <Link href="/hubspot#faq" className={s.primaryBtn}>
              Book a Free Consultation
            </Link>
            <Link href="/hubspot#packages" className={s.secondaryBtn}>
              View Service Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
