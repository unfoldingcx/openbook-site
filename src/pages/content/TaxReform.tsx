import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Download,
  ArrowRight,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import AnimatedSection from "../../components/ui/AnimatedSection";

export default function TaxReform() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="articleTaxReform" path="/content/reforma-tributaria-e-imoveis" />

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
                  {t("articles.taxReform.tag")}
                </span>
                <span className="text-white/40 text-sm">
                  {t("articles.taxReform.author")}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                {t("articles.taxReform.title")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t("articles.taxReform.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="prose-container">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t("articles.taxReform.intro")}
              </p>

              {/* Operations Section */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("articles.taxReform.operationsTitle")}
              </h2>
              <p className="text-gray-600 mb-4">
                {t("articles.taxReform.operationsText")}
              </p>
              <ul className="space-y-3 mb-8">
                {(t("articles.taxReform.operations", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>
              <p className="text-gray-600 mb-8">
                {t("articles.taxReform.operationsNote")}
              </p>

              {/* Rental Section */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("articles.taxReform.rentalTitle")}
              </h2>
              <p className="text-gray-600 mb-4">
                {t("articles.taxReform.rentalText")}
              </p>
              <ul className="space-y-3 mb-4">
                {(t("articles.taxReform.rentalItems", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>
              <p className="text-gray-600 mb-8">
                {t("articles.taxReform.rentalNote")}
              </p>

              {/* Reducers Section */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("articles.taxReform.reducersTitle")}
              </h2>
              <p className="text-gray-600 mb-4">
                {t("articles.taxReform.reducersText")}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {(t("articles.taxReform.reducers", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <div
                      key={i}
                      className="bg-[#034633]/5 border border-[#034633]/10 rounded-xl p-4"
                    >
                      <p className="text-[#034633] text-sm font-medium">{item}</p>
                    </div>
                  )
                )}
              </div>
              <p className="text-gray-600 mb-8">
                {t("articles.taxReform.reducersNote")}
              </p>

              {/* Recommendations */}
              <h2 className="text-2xl font-semibold text-[#034633] mb-4 mt-12">
                {t("articles.taxReform.recommendationsTitle")}
              </h2>
              <p className="text-gray-600 mb-4">
                {t("articles.taxReform.recommendationsText")}
              </p>
              <ul className="space-y-3 mb-8">
                {(t("articles.taxReform.recommendations", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>

              {/* Assessment */}
              <div className="bg-[#034633] rounded-2xl p-8 my-12">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t("articles.taxReform.assessmentTitle")}
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  {t("articles.taxReform.assessmentText1")}
                </p>
                <p className="text-white/80 leading-relaxed font-medium">
                  {t("articles.taxReform.assessmentText2")}
                </p>
              </div>

              {/* Download PDF */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 pt-8 border-t border-gray-200">
                <a
                  href="/articles/Reforma_Tributaria_e_Imoveis.pdf"
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
