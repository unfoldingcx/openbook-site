import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import AnimatedSection from "../../components/ui/AnimatedSection";

export default function TributosImobiliarios() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="courseTributosImobiliarios" path="/training/tributos-imobiliarios" />

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#034633] to-[#022b1f] py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                to="/training"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("courses.backToTraining")}
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-3 py-1 bg-[#9f7423]/20 text-[#d4a84b] text-xs font-medium rounded-full">
                  {t("courses.tributosImobiliarios.tag")}
                </span>
                <span className="inline-flex items-center gap-1.5 text-white/40 text-sm">
                  <Clock className="w-4 h-4" />
                  {t("courses.tributosImobiliarios.duration")}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                {t("courses.tributosImobiliarios.title")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t("courses.tributosImobiliarios.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="prose-container">
              {/* Intro */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t("courses.tributosImobiliarios.intro")}
              </p>

              {/* Target Audience */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("courses.tributosImobiliarios.targetTitle")}
              </h2>
              <ul className="space-y-3 mb-8">
                {(t("courses.tributosImobiliarios.targetList", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>

              {/* Program */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("courses.tributosImobiliarios.programTitle")}
              </h2>
              <div className="space-y-4 mb-8">
                {(t("courses.tributosImobiliarios.modules", { returnObjects: true }) as Array<{ title: string; items: string[] }>).map(
                  (mod, i) => (
                    <div key={i} className="bg-[#F6F6F6] rounded-xl p-6 border border-gray-100">
                      <h3 className="text-lg font-semibold text-[#034633] mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-[#9f7423]/10 flex items-center justify-center text-[#9f7423] text-sm font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {mod.title}
                      </h3>
                      <ul className="space-y-2">
                        {mod.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-[#034633]/40 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>

              {/* Methodology */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("courses.tributosImobiliarios.methodologyTitle")}
              </h2>
              <ul className="space-y-3 mb-8">
                {(t("courses.tributosImobiliarios.methodologyList", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>

              {/* Results */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("courses.tributosImobiliarios.resultsTitle")}
              </h2>
              <ul className="space-y-3 mb-8">
                {(t("courses.tributosImobiliarios.resultsList", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>

              {/* Format Box */}
              <div className="bg-[#034633] rounded-2xl p-8 my-12">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t("courses.tributosImobiliarios.formatTitle")}
                </h2>
                <ul className="space-y-3">
                  {(t("courses.tributosImobiliarios.formatList", { returnObjects: true }) as string[]).map(
                    (item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-semibold text-[#034633] mb-4">
                  {t("courses.tributosImobiliarios.ctaTitle")}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t("courses.tributosImobiliarios.ctaText")}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#9f7423] text-white font-medium rounded-full hover:bg-[#b8862a] transition-colors"
                >
                  {t("courses.requestInfo")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  );
}
