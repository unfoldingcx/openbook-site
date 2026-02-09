import { memo } from "react";
import { motion } from "motion/react";
import { Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

const ONVIO_URL = "https://onvio.com.br/login/#/";

interface OnvioButtonProps {
  className?: string;
  variant?: "header" | "standalone";
}

const BASE_STYLES =
  "inline-flex items-center gap-2 font-medium rounded-full transition-all";

const VARIANT_STYLES = {
  header:
    "px-4 py-2 bg-[#034633] text-white text-sm hover:bg-[#044a3d] shadow-md",
  standalone: "px-6 py-3 bg-[#034633] text-white hover:bg-[#044a3d] shadow-lg",
} as const;

// Hoisted static animation configs (rendering-hoist-jsx)
const HOVER = { scale: 1.02 };
const TAP = { scale: 0.98 };
const TRANSITION = { duration: 0.1 };

// Wrapped with React.memo — variant rarely changes (rerender-memo)
const OnvioButton = memo(function OnvioButton({
  className = "",
  variant = "header",
}: OnvioButtonProps) {
  const { t } = useTranslation();

  return (
    <motion.a
      href={ONVIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE_STYLES} ${VARIANT_STYLES[variant]} ${className}`.trim()}
      aria-label={t("onvio.buttonLabel")}
      whileHover={HOVER}
      whileTap={TAP}
      transition={TRANSITION}
    >
      <Lock className="w-4 h-4" />
      <span>{t("onvio.buttonText")}</span>
    </motion.a>
  );
});

export default OnvioButton;
