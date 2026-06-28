"use client";

import { testimonialsData } from "@/data/sections/testimonialsData";
import { testimonialsStyles } from "@/styles/sections/testimonials";
import { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const totalSlides = testimonialsData.testimonials.length;

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
    <section id="testimonials-section" className={testimonialsStyles.section}>
      <div className={testimonialsStyles.wrapper}>
        <div className={testimonialsStyles.headerRow}>
          <div className={testimonialsStyles.titleArea}>
            <div className={testimonialsStyles.pillLine}>
              <div className={testimonialsStyles.pillLineBar} />
              <span className={testimonialsStyles.pillText}>
                {testimonialsData.header.pillText}
              </span>
            </div>
            <h2 className={testimonialsStyles.mainHeading}>
              {testimonialsData.header.mainHeading}
            </h2>
          </div>
          <p className={testimonialsStyles.subHeading}>
            {testimonialsData.header.subHeading}
          </p>
        </div>

        <div
          className={testimonialsStyles.carouselWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={testimonialsStyles.carouselTrack}
            style={{
              transform: `translateX(${getTranslateX()})`,
            }}
          >
            {testimonialsData.testimonials.map((t, idx) => (
              <div key={idx} className={testimonialsStyles.carouselSlide}>
                <div className={testimonialsStyles.card}>
                  <div className={testimonialsStyles.quoteIcon}>"</div>
                  <p className={testimonialsStyles.quoteText}>{t.text}</p>
                  <div className={testimonialsStyles.metaRow}>
                    <div>
                      <h4 className={testimonialsStyles.clientName}>
                        {t.name}
                      </h4>
                      <div className={testimonialsStyles.clientRole}>
                        {t.role}
                      </div>
                    </div>
                    <span className={testimonialsStyles.serviceBadge}>
                      {t.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={testimonialsStyles.navigationControls}>
          <div className={testimonialsStyles.dotsContainer}>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`${testimonialsStyles.dot} ${
                  currentIndex === idx
                    ? testimonialsStyles.dotActive
                    : testimonialsStyles.dotInactive
                }`}
                aria-label={`Go to slide group ${idx + 1}`}
              />
            ))}
          </div>

          <div className={testimonialsStyles.btnGroup}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={testimonialsStyles.navBtn}
              aria-label="Previous slide group"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={testimonialsStyles.navBtn}
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
