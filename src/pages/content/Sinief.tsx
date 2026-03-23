import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Download,
  ArrowRight,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import AnimatedSection from "../../components/ui/AnimatedSection";

export default function Sinief() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="articleSinief" path="/content/ajuste-sinief-49" />

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
                  {t("articles.sinief.tag")}
                </span>
                <span className="text-white/40 text-sm">
                  {t("articles.sinief.author")}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                {t("articles.sinief.title")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t("articles.sinief.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="prose-container">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t("articles.sinief.intro1")}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t("articles.sinief.intro2")}
              </p>

              {/* What Changes */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("articles.sinief.changesTitle")}
              </h2>
              <p className="text-gray-600 mb-4">
                {t("articles.sinief.changesText")}
              </p>
              <ul className="space-y-4 mb-8">
                {(t("articles.sinief.changes", { returnObjects: true }) as Array<{ title: string; text: string }>).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-800 font-medium">{item.title}</span>
                        <span className="text-gray-600">{item.text}</span>
                      </div>
                    </li>
                  )
                )}
              </ul>

              {/* Why Attention */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("articles.sinief.attentionTitle")}
              </h2>
              <p className="text-gray-600 mb-4">
                {t("articles.sinief.attentionText1")}
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-amber-900 text-sm leading-relaxed">
                    {t("articles.sinief.attentionWarning")}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                {t("articles.sinief.attentionText2")}
              </p>

              {/* Impact */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("articles.sinief.impactTitle")}
              </h2>
              <p className="text-gray-600 mb-4">
                {t("articles.sinief.impactText")}
              </p>

              {/* How to Prepare */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("articles.sinief.prepareTitle")}
              </h2>
              <p className="text-gray-600 mb-4">
                {t("articles.sinief.prepareText")}
              </p>
              <ul className="space-y-3 mb-8">
                {(t("articles.sinief.prepareItems", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>

              {/* CTA Box */}
              <div className="bg-[#034633] rounded-2xl p-8 my-12">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t("articles.sinief.ctaTitle")}
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  {t("articles.sinief.ctaText")}
                </p>
                <p className="text-white/60 text-sm italic">
                  {t("articles.sinief.ctaSignature")}
                </p>
              </div>

              {/* Download PDF */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 pt-8 border-t border-gray-200">
                <a
                  href="/articles/Ajuste_SINIEF_49.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#034633]/10 text-[#034633] font-medium rounded-full hover:bg-[#034633]/20 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t("articles.downloadPdf")}
                </a>
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
