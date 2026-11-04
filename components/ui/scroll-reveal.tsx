"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Fraction of the element visible before triggering. Default: 0.15 */
  amount?: number;
}

/**
 * Wraps any section with a smooth fade-in + slide-up scroll animation
 * powered by Framer Motion `whileInView`. Fires once per page load.
 */
export default function ScrollReveal({
  children,
  amount = 0.15,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#f7f7fa]"
    >
      {children}
    </motion.div>
  );
}

