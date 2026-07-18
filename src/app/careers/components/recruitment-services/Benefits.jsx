"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Laptop,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { benefitsStyles as s } from "../../styles/recruitment-services/component-styles/BenefitsStyle";

const iconMap = {
  Laptop: Laptop,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Briefcase: Briefcase,
  Rocket: Rocket,
};

export default function Benefits({ data }) {
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

      <div className={s.grid}>
        {data.list.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || ShieldCheck;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={s.card}
            >
              <div
                className={`${s.iconBox} group-hover:bg-[#2563EB]/20 transition-colors duration-500`}
              >
                <IconComponent className="w-5 h-5 text-[#60A5FA]" />
              </div>
              <h3
                className={`${s.cardTitle} group-hover:text-[#60A5FA] transition-colors duration-500`}
              >
                {item.title}
              </h3>
              <p className={s.cardDesc}>{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
