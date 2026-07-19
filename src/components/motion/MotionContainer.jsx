// MotionContainer — Enterprise Motion Primitive
// Level 2: Section-Level Orchestration (stagger parent)
// Rules: Does NOT animate itself. Only orchestrates children via stagger.
// Always viewport-aware, once:true so re-scrolling doesn't re-trigger.

"use client";

import { motion } from "framer-motion";

export function MotionContainer({
  children,
  className,
  style,
  once = true,
  // Tightened defaults for a sharper, more premium stagger rhythm
  delayChildren = 0.05,
  staggerChildren = 0.1,
  // Use amount (percentage of element) instead of hard pixel margins for reliable responsive triggers
  amount = 0.15,
}) {
  const orchestrationVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={orchestrationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
