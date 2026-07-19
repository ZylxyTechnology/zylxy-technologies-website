// MotionGrid — Enterprise Motion Primitive
// Level 2: Grid/Card Stagger Orchestration
// For service cards, leadership cards, any grid layout with staggered items.
// The grid itself is invisible; only its children animate.

"use client";

import { motion } from "framer-motion";

const gridOrchestratorVariants = {
  hidden: {},
  visible: {
    transition: {
      // Slightly faster than MotionContainer for card grids (quicker payoff)
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export function MotionGrid({ children, className, style }) {
  return (
    <motion.div
      variants={gridOrchestratorVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
