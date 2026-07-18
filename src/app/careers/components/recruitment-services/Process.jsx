"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processStyles as s } from "../../styles/recruitment-services/component-styles/ProcessStyle";

export default function Process({ data }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={s.section}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={s.headerRow}
      >
        <div className={s.pillLine}>
          <div className={s.pillLineBar} />
          <span className={s.pillText}>{data.title}</span>
        </div>
        <h2 className={s.mainHeading}>{data.heading}</h2>
      </motion.div>

      <div ref={containerRef} className={s.timelineContainer}>
        <div className={s.timelineTrack} />
        <motion.div
          style={{ height: lineHeight }}
          className={s.timelineProgress}
        />

        {data.steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={s.stepWrapper}
          >
            <div
              className={`${s.stepNode} group-hover:border-[#60A5FA] group-hover:bg-[#050E21] transition-all duration-500`}
            >
              <span
                className={`${s.stepNumber} group-hover:text-[#60A5FA] transition-colors duration-500`}
              >
                {step.step}
              </span>
            </div>

            <div
              className={`${s.card} group-hover:bg-[#0D1B3E]/60 group-hover:border-[#2563EB]/30`}
            >
              <h4 className={s.stepTitle}>{step.title}</h4>
              <p className={s.stepDesc}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
