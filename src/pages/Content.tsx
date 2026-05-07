import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Play, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import AnimatedSection from "../components/ui/AnimatedSection";

const YOUTUBE_ID = "wS8v2YYUkiM";

export default function Content() {
  const { t } = useTranslation();

  const articles = [
    {
      title: t("content.articles.taxReform.title"),
      description: t("content.articles.taxReform.description"),
      tag: t("content.articles.taxReform.tag"),
      to: "/content/reforma-tributaria-e-imoveis",
    },
    {
      title: t("content.articles.sinief.title"),
      description: t("content.articles.sinief.description"),
      tag: t("content.articles.sinief.tag"),
      to: "/content/ajuste-sinief-49",
    },
    {
      title: t("content.articles.reformaGestores.title"),
      description: t("content.articles.reformaGestores.description"),
      tag: t("content.articles.reformaGestores.tag"),
      to: "/content/reforma-tributaria-gestores",
    },
    {
      title: t("content.articles.reformaTecnicos.title"),
      description: t("content.articles.reformaTecnicos.description"),
      tag: t("content.articles.reformaTecnicos.tag"),
      to: "/content/reforma-tributaria-tecnicos",
    },
    {
      title: t("content.articles.cbenef.title"),
      description: t("content.articles.cbenef.description"),
      tag: t("content.articles.cbenef.tag"),
      to: "/content/cbenef-nfe-sp",
    },
    {
      title: t("content.articles.proLabore.title"),
      description: t("content.articles.proLabore.description"),
      tag: t("content.articles.proLabore.tag"),
      to: "/content/pro-labore-distribuicao-lucros",
    },
  ];

  return (
    <>
      <SEO page="content" path="/content" />

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#034633] to-[#022b1f] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#9f7423]/20 flex items-center justify-center text-[#9f7423] mb-6">
                <Play className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                {t("content.title")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t("content.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Video */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#9f7423]/10 text-[#9f7423] text-sm font-medium rounded-full mb-4">
                {t("content.featured.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#034633] mb-4">
                {t("content.featured.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("content.featured.description")}
              </p>
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0`}
                  title={t("content.featured.title")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 bg-[#F6F6F6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#034633] mb-4">
                {t("content.articles.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("content.articles.subtitle")}
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link to={article.to} className="group block h-full">
                    <article className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:border-[#9f7423]/30 group-hover:shadow-md transition-all h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#034633]/10 text-[#034633] text-xs font-medium rounded-full">
                          <FileText className="w-3.5 h-3.5" />
                          {article.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-[#034633] mb-3 group-hover:text-[#9f7423] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                        {article.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[#9f7423] text-sm font-medium">
                        {t("content.articles.readMore")}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#034633]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-3xl font-semibold text-white mb-4">
                {t("content.cta.title")}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {t("content.cta.description")}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#9f7423] text-white font-medium rounded-full hover:bg-[#b8862a] transition-colors"
              >
                {t("content.cta.button")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
