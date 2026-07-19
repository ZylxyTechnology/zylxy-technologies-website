"use client";

import { Container } from "@/components/layout/core/Container";
import { Section } from "@/components/layout/core/Section";
import { MotionContainer } from "@/components/motion/MotionContainer";
import { MotionItem } from "@/components/motion/MotionItem";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { testimonialsData } from "@/data/sections/testimonialsData";
import { testimonialsStyles } from "@/styles/sections/testimonials";
import { motion } from "framer-motion";
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
    <Section id="testimonials-section" className={testimonialsStyles.section}>
      <Container className={testimonialsStyles.wrapper}>
        <MotionContainer className={testimonialsStyles.headerRow}>
          <MotionItem direction="up" className={testimonialsStyles.titleArea}>
            <div className={testimonialsStyles.pillLine}>
              <div className={testimonialsStyles.pillLineBar} />
              <span className={testimonialsStyles.pillText}>
                {testimonialsData.header.pillText}
              </span>
            </div>
            <h2 className={testimonialsStyles.mainHeading}>
              {testimonialsData.header.mainHeading}
            </h2>
          </MotionItem>
          <MotionItem direction="left">
            <p className={testimonialsStyles.subHeading}>
              {testimonialsData.header.subHeading}
            </p>
          </MotionItem>
        </MotionContainer>

        <MotionReveal
          direction="fade"
          delay={0.2}
          className={testimonialsStyles.carouselWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className={testimonialsStyles.carouselTrack}
            drag="x"
            dragConstraints={{ right: 0, left: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -50) {
                handleNext();
              } else if (swipe > 50) {
                handlePrev();
              }
            }}
            animate={{ x: getTranslateX() }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: "100%", x: 0 }}
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
          </motion.div>
        </MotionReveal>

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
      </Container>
    </Section>
  );
}
