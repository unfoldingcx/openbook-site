import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Eye,
  Target,
  Heart,
  Briefcase,
  Users2,
  CheckCircle2,
  Quote,
  Laptop,
  Home as HomeIcon
} from 'lucide-react';
import AnimatedCard from '../components/ui/AnimatedCard';
import SEO from '../components/seo/SEO';

export default function About() {
  const { t } = useTranslation();

  const values = t('about.values.items', { returnObjects: true }) as Array<{
    title: string;
    value: string;
  }>;

  return (
    <>
      <SEO page="about" path="/about" />
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#010101] to-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#9f7423]/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm text-[#9f7423] border border-[#9f7423]/30 rounded-full bg-[#9f7423]/10">
              {t('about.title')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('about.intro.title')}
            </h1>
            <p className="text-lg text-white/70">
              {t('about.intro.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 text-lg leading-relaxed">
                {t('about.intro.text')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-[#9f7423]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t('about.vision.title')}
                </h2>
              </div>
              <p className="text-white/70 leading-relaxed mb-8">
                {t('about.vision.text')}
              </p>
              <div className="space-y-4">
                {(t('about.vision.points', { returnObjects: true }) as string[]).map(
                  (point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{point}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Strategic planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 lg:sticky lg:top-32"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#9f7423]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t('about.mission.title')}
                </h2>
              </div>
              <p className="text-white/70 leading-relaxed mb-8">
                {t('about.mission.text')}
              </p>
              <div className="space-y-4">
                {(t('about.mission.points', { returnObjects: true }) as string[]).map(
                  (point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{point}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
              <Heart className="w-7 h-7 text-[#9f7423]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('about.values.title')}
            </h2>
          </div>

          <p className="text-white/70 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            {t('about.values.text')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {values.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center">
                <div className="text-3xl font-bold text-[#9f7423] mb-2">
                  {item.value}
                </div>
                <div className="text-white/80 text-sm">{item.title}</div>
              </AnimatedCard>
            ))}
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Compromissos Fundamentais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(t('about.values.commitments', { returnObjects: true }) as string[]).map(
                (commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{commitment}</span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
              <Laptop className="w-7 h-7 text-[#9f7423]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('about.workStyle.title')}
            </h2>
          </div>

          <p className="text-[#9f7423] text-lg text-center mb-8">
            {t('about.workStyle.subtitle')}
          </p>

          <p className="text-white/70 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            {t('about.workStyle.text')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedCard delay={0.1}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#9f7423]/20 flex items-center justify-center">
                  <Users2 className="w-6 h-6 text-[#9f7423]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Colaboradores</h3>
              </div>
              <p className="text-white/60">{t('about.workStyle.benefits.employees')}</p>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#9f7423]/20 flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-[#9f7423]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Clientes</h3>
              </div>
              <p className="text-white/60">{t('about.workStyle.benefits.clients')}</p>
            </AnimatedCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#9f7423]/10 rounded-2xl p-8 border border-[#9f7423]/30 text-center"
          >
            <p className="text-white/80 text-lg italic">
              {t('about.workStyle.conclusion')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Partners"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010101]/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[#9f7423] font-semibold text-lg">
                    {t('about.partners.founders')}
                  </p>
                  <p className="text-white/60 text-sm">Fundadoras</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-[#9f7423]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t('about.partners.title')}
                </h2>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-10 h-10 text-[#9f7423]/30" />
                <p className="text-white/70 leading-relaxed mb-6 pl-8">
                  {t('about.partners.text')}
                </p>
                <p className="text-white/70 leading-relaxed pl-8">
                  {t('about.partners.text2')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
