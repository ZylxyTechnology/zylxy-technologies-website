"use client";

import { servicesStyles as s } from "@/styles/sections/services";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PortfolioShowcase({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className={s.portfolioSection}>
      <h3 className={s.portfolioHeader}>Featured Projects</h3>
      <div className={s.portfolioGrid}>
        {projects.map((proj, idx) => (
          <ProjectCard key={proj.id} project={proj} index={idx} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Native API for powerful, non-heavy scroll transitions
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${s.portfolioCard} ${isVisible ? s.portfolioCardVisible : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* macOS Browser Interface Wrapper */}
      <div className={s.browserHeader}>
        <div className={`${s.browserDot} bg-[#FF5F56]`} />
        <div className={`${s.browserDot} bg-[#FFBD2E]`} />
        <div className={`${s.browserDot} bg-[#27C93F]`} />
      </div>

      <div className={s.iframeContainer}>
        <iframe
          src={project.embed}
          className={s.iframe}
          allowFullScreen
          loading="lazy"
          frameBorder="0"
          allow="clipboard-write"
          title={project.name}
        />
      </div>

      <div className={s.portfolioMeta}>
        <h4 className={s.portfolioTitle}>{project.name}</h4>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className={s.portfolioLink}
        >
          View Case Study <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
