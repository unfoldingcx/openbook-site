import { motion } from "motion/react"
import { Lock } from "lucide-react"
import { useTranslation } from "react-i18next"

const ONVIO_URL = "https://onvio.com.br/login/#/"

interface OnvioButtonProps {
  className?: string
  variant?: "header" | "standalone"
}

export default function OnvioButton({
  className = "",
  variant = "header",
}: OnvioButtonProps) {
  const { t } = useTranslation()

  const baseStyles =
    "inline-flex items-center gap-2 font-medium rounded-full transition-all"

  const variantStyles = {
    header:
      "px-4 py-2 bg-[#034633] text-white text-sm hover:bg-[#044a3d] shadow-md",
    standalone:
      "px-6 py-3 bg-[#034633] text-white hover:bg-[#044a3d] shadow-lg",
  }

  return (
    <motion.a
      href={ONVIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()}
      aria-label={t("onvio.buttonLabel")}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      <Lock className="w-4 h-4" />
      <span>{t("onvio.buttonText")}</span>
    </motion.a>
  )
}
