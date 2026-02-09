import { memo, useMemo } from "react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { prefersReducedMotion } from "../../utils/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Hoisted static viewport config (rendering-hoist-jsx)
const VIEWPORT = { once: true, margin: "-50px" } as const;

// Wrapped with React.memo (rerender-memo)
const AnimatedSection = memo(function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);

  if (reducedMotion) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
});

export default AnimatedSection;
