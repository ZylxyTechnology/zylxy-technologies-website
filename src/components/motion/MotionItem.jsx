// MotionItem — Enterprise Motion Primitive
// Level 2: Section Reveals
// Rules: max 16px Y travel, opacity-led, no bounce, viewport-aware, once:true
// Reduced motion: respects prefers-reduced-motion via CSS media query fallback

"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

// Static, hydration-safe variant map.
// Max y: 16px (enterprise storytelling — subtle, not cinematic).
// Ease: [0.16, 1, 0.3, 1] = a custom "ease-out-expo" that feels premium.
const itemVariants = {
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
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  },
  // Pure fade — for CTAs and elements that should appear without movement
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
};

export const MotionItem = forwardRef(
  ({ children, direction = "up", delay, className, style, as }, ref) => {
    const baseVariant = itemVariants[direction] ?? itemVariants.up;

    const customVariant = delay
      ? {
          hidden: baseVariant.hidden,
          visible: {
            ...baseVariant.visible,
            transition: { ...baseVariant.visible.transition, delay },
          },
        }
      : baseVariant;

    const Tag = as ? motion[as] : motion.div;

    return (
      <Tag
        ref={ref}
        variants={customVariant}
        className={className}
        style={style}
      >
        {children}
      </Tag>
    );
  }
);
MotionItem.displayName = "MotionItem";
