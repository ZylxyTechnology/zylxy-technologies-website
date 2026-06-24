"use client";

import { caseStudiesData } from "@/data/caseStudiesData";
import { caseStudiesStyles as s } from "@/styles/sections/caseStudies";
import { useEffect, useRef, useState } from "react";

export default function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const totalSlides = caseStudiesData.projects.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    const isSignificantSwipe = Math.abs(distance) > 50;

    if (isSignificantSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartRef.current = 0;
    touchEndRef.current = 0;
  };

  const getTranslateX = () => {
    if (slidesToShow === 3) {
      return `calc(-${currentIndex * 33.333}% - ${currentIndex * 5}px)`;
    }
    if (slidesToShow === 2) {
      return `calc(-${currentIndex * 50}% - ${currentIndex * 8}px)`;
    }
    return `calc(-${currentIndex * 100}% - ${currentIndex * 16}px)`;
  };

  return (
    <section id="case-studies-section" className={s.section}>
      <div className={s.wrapper}>
        <div className={s.headerRow}>
          <div className={s.titleArea}>
            <div className={s.pillLine}>
              <div className={s.pillLineBar} />
              <span className={s.pillText}>
                {caseStudiesData.header.pillText}
              </span>
            </div>
            <h2 className={s.mainHeading}>
              {caseStudiesData.header.mainHeading}
            </h2>
          </div>
          <p className={s.subHeading}>{caseStudiesData.header.subHeading}</p>
        </div>

        <div
          className={s.carouselWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={s.carouselTrack}
            style={{
              transform: `translateX(${getTranslateX()})`,
            }}
          >
            {caseStudiesData.projects.map((project, idx) => (
              <div key={project.id} className={s.carouselSlide}>
                <AnimatedCaseCard project={project} index={idx} />
              </div>
            ))}
          </div>
        </div>

        <div className={s.navigationControls}>
          <div className={s.dotsContainer}>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`${s.dot} ${
                  currentIndex === idx ? s.dotActive : s.dotInactive
                }`}
                aria-label={`Go to slide group ${idx + 1}`}
              />
            ))}
          </div>

          <div className={s.btnGroup}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={s.navBtn}
              aria-label="Previous slide group"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={s.navBtn}
              aria-label="Next slide group"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCaseCard({ project, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${s.card} ${isVisible ? s.cardVisible : ""}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        borderTopColor: isHovered
          ? project.accent
          : "rgba(255, 255, 255, 0.08)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={s.glowBackground}
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.accent} 0%, transparent 70%)`,
        }}
      />

      <div
        className={s.serviceText}
        style={{ color: isHovered ? project.accent : "#94A3B8" }}
      >
        {project.service}
      </div>
      <div className={s.metricText}>{project.metric}</div>
      <div
        className={s.metricLabelText}
        style={{ color: isHovered ? project.accent : "#3B82F6" }}
      >
        {project.metricLabel}
      </div>
      <div className={s.divider} />
      <div className={s.clientText}>{project.client}</div>
      <p className={s.projectDesc}>{project.desc}</p>
    </div>
  );
}
