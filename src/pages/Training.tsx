import { useTranslation } from "react-i18next"
import { motion } from "motion/react"
import {
  BookOpen,
  TrendingUp,
  Shield,
  Users,
  Globe,
  GraduationCap,
  Clock,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom"
import SEO from "../components/seo/SEO"
import { fadeInUp, staggerContainer } from "../utils/motion"

export default function Training() {
  const { t } = useTranslation()

  const trainingTopics = [
    {
      icon: BookOpen,
      title: t("training.topics.accounting.title"),
      description: t("training.topics.accounting.description"),
    },
    {
      icon: Shield,
      title: t("training.topics.compliance.title"),
      description: t("training.topics.compliance.description"),
    },
    {
      icon: TrendingUp,
      title: t("training.topics.financial.title"),
      description: t("training.topics.financial.description"),
    },
    {
      icon: Users,
      title: t("training.topics.payroll.title"),
      description: t("training.topics.payroll.description"),
    },
    {
      icon: Globe,
      title: t("training.topics.international.title"),
      description: t("training.topics.international.description"),
    },
    {
      icon: GraduationCap,
      title: t("training.topics.taxReform.title"),
      description: t("training.topics.taxReform.description"),
    },
  ]

  const coursesList = [
    {
      title: t("training.coursesList.precificacao.title"),
      description: t("training.coursesList.precificacao.description"),
      tag: t("training.coursesList.precificacao.tag"),
      duration: t("training.coursesList.precificacao.duration"),
      to: "/training/precificacao-advogados",
    },
    {
      title: t("training.coursesList.nr1Responsabilidade.title"),
      description: t("training.coursesList.nr1Responsabilidade.description"),
      tag: t("training.coursesList.nr1Responsabilidade.tag"),
      duration: t("training.coursesList.nr1Responsabilidade.duration"),
      to: "/training/nr1-responsabilidade",
    },
    {
      title: t("training.coursesList.nr1Psicossocial.title"),
      description: t("training.coursesList.nr1Psicossocial.description"),
      tag: t("training.coursesList.nr1Psicossocial.tag"),
      duration: t("training.coursesList.nr1Psicossocial.duration"),
      to: "/training/nr1-risco-psicossocial",
    },
    {
      title: t("training.coursesList.tributosImobiliarios.title"),
      description: t("training.coursesList.tributosImobiliarios.description"),
      tag: t("training.coursesList.tributosImobiliarios.tag"),
      duration: t("training.coursesList.tributosImobiliarios.duration"),
      to: "/training/tributos-imobiliarios",
    },
  ]

  return (
    <>
      <SEO page="training" path="/training" />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#034633] to-[#022b1f] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#9f7423]/20 flex items-center justify-center text-[#9f7423] mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                {t("training.title")}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t("training.tagline")}
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
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("training.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Training Topics Section */}
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
                className="text-3xl font-semibold text-[#034633] mb-4 text-center"
              >
                {t("training.topicsTitle")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
              >
                {t("training.topicsSubtitle")}
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainingTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#034633]/10 flex items-center justify-center text-[#034633] mb-4">
                      <topic.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#034633] mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {topic.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
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
                className="text-3xl font-semibold text-[#034633] mb-12 text-center"
              >
                {t("training.approachTitle")}
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#9f7423]/10 flex items-center justify-center text-[#9f7423] mx-auto mb-4">
                    <span className="text-2xl font-semibold">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#034633] mb-2">
                    {t("training.approach.diagnosis.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("training.approach.diagnosis.description")}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#9f7423]/10 flex items-center justify-center text-[#9f7423] mx-auto mb-4">
                    <span className="text-2xl font-semibold">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#034633] mb-2">
                    {t("training.approach.customization.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("training.approach.customization.description")}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#9f7423]/10 flex items-center justify-center text-[#9f7423] mx-auto mb-4">
                    <span className="text-2xl font-semibold">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#034633] mb-2">
                    {t("training.approach.delivery.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("training.approach.delivery.description")}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Section */}
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
                className="text-3xl font-semibold text-[#034633] mb-4 text-center"
              >
                {t("training.coursesTitle")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
              >
                {t("training.coursesSubtitle")}
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8">
                {coursesList.map((course, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Link to={course.to} className="group block h-full">
                      <div className="bg-[#F6F6F6] p-6 rounded-xl border border-gray-100 group-hover:border-[#9f7423]/30 group-hover:shadow-md transition-all h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-[#034633]/10 text-[#034633] text-xs font-medium rounded-full">
                            {course.tag}
                          </span>
                          <span className="flex items-center gap-1 text-[#9f7423] text-xs font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            {course.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#034633] mb-2 group-hover:text-[#9f7423] transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                          {course.description}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-[#9f7423] text-sm font-medium">
                          {t("training.viewCourse")}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#034633]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-3xl font-semibold text-white mb-4">
                {t("training.cta.title")}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {t("training.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-[#9f7423] text-white font-medium rounded-full hover:bg-[#b8862a] transition-colors"
                >
                  {t("training.cta.button")}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
