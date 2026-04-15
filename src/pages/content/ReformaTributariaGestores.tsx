import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import AnimatedSection from "../../components/ui/AnimatedSection";

export default function ReformaTributariaGestores() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="articleReformaGestores" path="/content/reforma-tributaria-gestores" />

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
                to="/content"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("articles.backToContent")}
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-3 py-1 bg-[#9f7423]/20 text-[#d4a84b] text-xs font-medium rounded-full">
                  {t("articles.reformaGestores.tag")}
                </span>
                <span className="text-white/40 text-sm">
                  {t("articles.reformaGestores.author")}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                {t("articles.reformaGestores.title")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t("articles.reformaGestores.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="prose-container">
              {/* Intro */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t("articles.reformaGestores.intro")}
              </p>

              {/* Sections */}
              {(t("articles.reformaGestores.sections", { returnObjects: true }) as Array<{ title: string; items: string[] }>).map(
                (section, i) => (
                  <div key={i}>
                    <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                      {section.title}
                    </h2>
                    <ul className="space-y-3 mb-8">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}

              {/* CTA Box */}
              <div className="bg-[#034633] rounded-2xl p-8 my-12">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t("articles.reformaGestores.ctaTitle")}
                </h2>
                <p className="text-white/80 leading-relaxed">
                  {t("articles.reformaGestores.ctaText")}
                </p>
              </div>

              {/* Contact Link */}
              <div className="flex justify-center mt-12 pt-8 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#9f7423] text-white font-medium rounded-full hover:bg-[#b8862a] transition-colors"
                >
                  {t("articles.contactUs")}
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
