import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Users,
  Calendar,
  DollarSign,
  FileText,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import OnvioButton from "../../components/ui/OnvioButton";
import SEO from "../../components/seo/SEO";
import { fadeInUp, staggerContainer } from "../../utils/motion";

export default function Payroll() {
  const { t } = useTranslation();

  const services = [
    { icon: DollarSign, text: t("services.payroll.services.payroll") },
    { icon: Users, text: t("services.payroll.services.hiring") },
    { icon: Calendar, text: t("services.payroll.services.vacation") },
    { icon: FileText, text: t("services.payroll.services.profit") },
    { icon: Shield, text: t("services.payroll.services.filings") },
    { icon: CheckCircle2, text: t("services.payroll.services.monitoring") },
  ];

  const benefits = [
    {
      icon: Shield,
      title: t("services.payroll.benefits.compliance.title"),
      description: t("services.payroll.benefits.compliance.description"),
    },
    {
      icon: Users,
      title: t("services.payroll.benefits.security.title"),
      description: t("services.payroll.benefits.security.description"),
    },
    {
      icon: CheckCircle2,
      title: t("services.payroll.benefits.updated.title"),
      description: t("services.payroll.benefits.updated.description"),
    },
  ];

  const relatedServices = [
    { path: "/services/accounting", label: t("services.accounting.title") },
    { path: "/services/financial", label: t("services.financial.title") },
    { path: "/services/tax", label: t("services.tax.title") },
  ];

  return (
    <>
      <SEO page="payroll" path="/services/payroll" />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#9f7423] to-[#6b4d14] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#9f7423]/20 flex items-center justify-center text-[#9f7423] mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                {t("services.payroll.title")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t("services.payroll.tagline")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-3xl"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("services.payroll.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-16 bg-[#F6F6F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-semibold text-[#9f7423] mb-12 text-center"
              >
                {t("services.payroll.servicesTitle")}
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#9f7423]/10 flex items-center justify-center text-[#9f7423] flex-shrink-0">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700">{service.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-semibold text-[#9f7423] mb-12 text-center"
              >
                {t("services.whyChoose")}
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#9f7423]/10 flex items-center justify-center text-[#9f7423] mx-auto mb-4">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#9f7423] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#9f7423]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-3xl font-semibold text-white mb-4">
                {t("services.cta.title")}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {t("services.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-[#9f7423] text-white font-medium rounded-full hover:bg-[#b8862a] transition-colors"
                >
                  {t("services.cta.contact")}
                </Link>
                <OnvioButton variant="standalone" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-2xl font-semibold text-[#9f7423] mb-8"
            >
              {t("services.related")}
            </motion.h2>
            <div className="flex flex-wrap gap-4">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="px-6 py-3 border border-[#9f7423]/30 rounded-full text-[#9f7423] hover:bg-[#9f7423] hover:text-white transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
