// MotionReveal — Enterprise Motion Primitive
// Level 2: Standalone Section Reveal (no parent orchestration needed)
// For sections that stand alone and trigger their own reveal on viewport entry.
// Max Y: 16px, pure opacity + translate, no bounce, no excessive spring.

"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

// Static variant map — hydration safe, no dynamic conditional objects.
const variants = {
  up: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  },
  left: {
    hidden: { opacity: 0, x: 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  },
  right: {
    hidden: { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  },
  // Pure opacity fade — for dividers, labels, ambient elements
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
};

export const MotionReveal = forwardRef(
  ({ children, direction = "up", delay = 0, className, style, once = true }, ref) => {
    const base = variants[direction] ?? variants.up;

    const resolvedVariant = delay
      ? {
          hidden: base.hidden,
          visible: {
            ...base.visible,
            transition: { ...base.visible.transition, delay },
          },
        }
      : base;

    return (
      <motion.div
        ref={ref}
        variants={resolvedVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.15 }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }
);
MotionReveal.displayName = "MotionReveal";
