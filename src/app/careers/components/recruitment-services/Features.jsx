"use client";

import { motion } from "framer-motion";
import { Award, Cpu, Layers, Target, Workflow, Zap } from "lucide-react";
import { featuresStyles as s } from "../../styles/recruitment-services/component-styles/FeaturesStyle";

const iconMap = {
  Zap: Zap,
  Award: Award,
  Layers: Layers,
  Target: Target,
  Cpu: Cpu,
  Workflow: Workflow,
};

export default function Features({ data }) {
  return (
    <section className={s.section}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={s.headerRow}
      >
        <div className={s.pillLine}>
          <div className={s.pillLineBar} />
          <span className={s.pillText}>{data.title}</span>
        </div>
        <h2 className={s.mainHeading}>{data.heading}</h2>
      </motion.div>

      <div className={s.grid}>
        {data.items.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || Zap;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className={s.card}
            >
              <div className={s.cardGlow} />
              <div
                className={`${s.iconBox} group-hover:border-[#2563EB]/40 transition-colors duration-500`}
              >
                <IconComponent className="w-6 h-6 text-[#60A5FA]" />
              </div>
              <h3 className={s.cardTitle}>{item.title}</h3>
              <p className={s.cardDesc}>{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
