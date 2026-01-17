import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { buttonPress } from "../../utils/motion"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  to: string
  delay?: number
}

export default function ServiceCard({
  icon,
  title,
  description,
  to,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        to={to}
        className="group block h-full"
      >
        <motion.div
          className="card-glass bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-[#9f7423]/30 transition-all h-full"
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#034633]/10 flex items-center justify-center text-[#034633]">
              {icon}
            </div>
            <motion.span
              className="text-[#9f7423] opacity-0 group-hover:opacity-100 transition-opacity"
              {...buttonPress}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </div>
          <h3 className="text-xl font-semibold text-[#034633] mb-2 group-hover:text-[#9f7423] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  )
}
