import { memo } from "react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hover?: boolean;
}

// Stable default for hover animation to preserve memo effectiveness (rerender-memo-with-default-value)
const HOVER_ANIMATION = { y: -5, transition: { duration: 0.2 } };

// Wrapped with React.memo to skip re-renders when props haven't changed (rerender-memo)
const AnimatedCard = memo(function AnimatedCard({
  children,
  delay = 0,
  className = "",
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? HOVER_ANIMATION : undefined}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
});

export default AnimatedCard;
