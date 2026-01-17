import { useTranslation } from "react-i18next"
import { motion } from "motion/react"
import { FileText, Wallet, Scale, Users } from "lucide-react"
import ServiceCard from "../components/ui/ServiceCard"
import SEO from "../components/seo/SEO"
import { fadeInUp, staggerContainer } from "../utils/motion"

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("services.accounting.title"),
      description: t("services.accounting.cardDescription"),
      to: "/services/accounting",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: t("services.financial.title"),
      description: t("services.financial.cardDescription"),
      to: "/services/financial",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: t("services.tax.title"),
      description: t("services.tax.cardDescription"),
      to: "/services/tax",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("services.payroll.title"),
      description: t("services.payroll.cardDescription"),
      to: "/services/payroll",
    },
  ]

  return (
    <>
      <SEO page="services" path="/services" />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 bg-gradient-to-b from-[#010101] to-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#9f7423]/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm text-[#9f7423] border border-[#9f7423]/30 rounded-full bg-[#9f7423]/10">
                {t("services.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t("services.title")}
              </h1>
              <p className="text-lg text-white/70">
                {t("services.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.p
                variants={fadeInUp}
                className="text-white/60 text-center mb-12 max-w-2xl mx-auto"
              >
                {t("services.intro")}
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    to={service.to}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#010101]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {t("services.cta.title")}
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                {t("services.cta.description")}
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-[#9f7423] text-white font-medium rounded-full hover:bg-[#b8862a] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("services.cta.button")}
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
