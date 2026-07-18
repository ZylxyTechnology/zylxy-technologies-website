"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { heroStyles as s } from "../../styles/recruitment-services/component-styles/HeroStyle";

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero({ data, stats }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleScroll = () => {
    document
      .getElementById("recruitment-form-anchor")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={s.section}>
      <div className={s.backgroundMesh} />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full max-w-[1200px] px-6"
      >
        <motion.div variants={itemVars} className={s.badgeContainer}>
          <Sparkles className="w-4 h-4 text-[#60A5FA]" />
          <span>{data.badge}</span>
        </motion.div>

        <motion.h1 variants={itemVars} className={s.heading}>
          {data.heading.textBefore}
          <span className={s.gradientText}>{data.heading.gradientText}</span>
          {data.heading.textAfter}
        </motion.h1>

        <motion.p variants={itemVars} className={s.description}>
          {data.descriptionPrimary}
        </motion.p>

        {data.descriptionSecondary && (
          <motion.div variants={itemVars} className={s.subDescription}>
            {data.descriptionSecondary}
          </motion.div>
        )}

        <motion.button
          variants={itemVars}
          onClick={handleScroll}
          className={s.ctaButton}
        >
          <span className="relative z-10 flex items-center gap-2">
            {data.ctaText}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </motion.button>

        <motion.div variants={itemVars} ref={ref} className={s.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={s.statCard}>
              <span className={s.statValue}>
                {stat.prefix}
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                  />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </span>
              <span className={s.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
