import { memo } from "react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
  light?: boolean;
}

// Wrapped with React.memo — receives string props that rarely change (rerender-memo)
const SectionTitle = memo(function SectionTitle({
  title,
  subtitle,
  children,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-[#010101]" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`text-lg max-w-3xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-600" : "text-white/60"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
      {children}
    </motion.div>
  );
});

export default SectionTitle;
