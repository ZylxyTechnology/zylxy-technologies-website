"use client";

import { introFeatureStyles as s } from "@/app/hubspot/styles/introFeature";
import { useState } from "react";

export default function HubSpotIntroFeature() {
  const [activePhase, setActivePhase] = useState(1);

  const workflowData = [
    {
      id: 1,
      num: "01",
      label: "Audit",
      phaseLabel: "PHASE 01 // AUDIT & DIAGNOSE",
      title: "HubSpot Health Check",
      challengeText:
        "Struggling with disorganized CRM data, duplicate contact records, or completely broken, outdated automation workflows?",
      solutionText:
        "We begin with a thorough, deep-dive audit of your entire portal architecture to map data leaks, isolate duplicate patterns, and deliver an actionable remediation roadmap.",
    },
    {
      id: 2,
      num: "02",
      label: "Build",
      phaseLabel: "PHASE 02 // BUILD & STREAMLINE",
      title: "Project-Based Implementation",
      challengeText:
        "Buried under manual processes, repetitive everyday tasks, or highly inefficient lead and application tracking loops?",
      solutionText:
        "We build structured custom objects, design frictionless pipeline stages, and implement robust automation workflows so your operations run cleanly without manual oversight.",
    },
    {
      id: 3,
      num: "03",
      label: "Scale",
      phaseLabel: "PHASE 03 // OPTIMIZE & SCALE",
      title: "Ongoing HubSpot Support",
      challengeText:
        "Facing low software adoption across internal teams or suffer from blind spots due to limited executive reporting visibility?",
      solutionText:
        "We deliver dedicated monthly optimization iterations, build custom operational analytics dashboards, and conduct tailored team training workshops to maximize ROI.",
    },
  ];

  const currentPhase = workflowData.find((p) => p.id === activePhase);

  const getRotationAngle = () => {
    if (activePhase === 1) return "rotate-0";
    if (activePhase === 2) return "-rotate-120";
    return "-rotate-240";
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.leftCol}>
          <div className={s.workflowWheelWrapper}>
            <div className={s.wheelCoreContent}>
              <span className={s.stepNum}>{currentPhase.num}</span>
              <span className={s.stepLabel}>{currentPhase.label}</span>
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

        <div className={s.rightCol}>
          <h2 className={s.heading}>How I Make HubSpot Work Smarter For You</h2>
          <p className={s.subtext}>
            I build solutions that align with how your team actually works—not
            just how the software is designed. By focusing on your specific
            operational needs, my goal is to create simple, scalable systems
            that save time, improve data quality, and help teams work more
            efficiently.
          </p>

          <div className={s.phasesWrapper}>
            {workflowData.map((phase) => {
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
                      <div className={s.textBlock + " animate-fade-in"}>
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
            <button className={s.primaryBtn}>Book a Free Consultation</button>
            <button className={s.secondaryBtn}>View Service Packages</button>
          </div>
        </div>
      </div>
    </section>
  );
}
