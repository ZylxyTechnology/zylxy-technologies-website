"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { ctaStyles as s } from "../../styles/recruitment-services/component-styles/CTAStyle";

export default function CTA({ data }) {
  const handleScroll = () => {
    document
      .getElementById("recruitment-form-anchor")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={s.section}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={s.box}
      >
        <div className={s.glowTopRight} />
        <div className={s.glowBottomLeft} />

        <div className={s.iconWrapper}>
          <Star className="w-6 h-6 fill-[#60A5FA]/20 text-[#60A5FA]" />
        </div>

        <h2 className={s.heading}>{data.heading}</h2>
        <p className={s.subheading}>{data.subheading}</p>

        <button onClick={handleScroll} className={s.btn}>
          <span className="relative z-10 flex items-center gap-2">
            {data.buttonText}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-slate-100 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
      </motion.div>
    </section>
  );
}
