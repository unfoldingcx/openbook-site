import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Globe2,
  Cpu,
  Users,
  ArrowRight,
  CheckCircle2,
  Building2,
  TrendingUp,
  FileText
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';
import SEO from '../components/seo/SEO';

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t('features.transparency.title'),
      description: t('features.transparency.description')
    },
    {
      icon: Globe2,
      title: t('features.expertise.title'),
      description: t('features.expertise.description')
    },
    {
      icon: Cpu,
      title: t('features.technology.title'),
      description: t('features.technology.description')
    },
    {
      icon: Users,
      title: t('features.personalized.title'),
      description: t('features.personalized.description')
    }
  ];

  const services = [
    { icon: FileText, title: t('home.services.accounting.title'), path: '/services/accounting' },
    { icon: TrendingUp, title: t('home.services.financial.title'), path: '/services/financial' },
    { icon: Building2, title: t('home.services.tax.title'), path: '/services/tax' }
  ];

  return (
    <>
      <SEO page="home" />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#010101] via-[#0a0a0a] to-[#010101]" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9f7423]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9f7423]/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239f7423' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-sm text-[#9f7423] border border-[#9f7423]/30 rounded-full bg-[#9f7423]/10"
            >
              {t('hero.tagline')}
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {t('hero.title')}{' '}
            <span className="text-[#9f7423]">{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group px-8 py-4 bg-[#9f7423] text-white font-medium rounded-full hover:bg-[#b8862a] transition-all flex items-center gap-2"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 text-white/80 font-medium rounded-full border border-white/20 hover:bg-white/5 transition-all"
            >
              {t('hero.learnMore')}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#9f7423] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('features.title')}
            subtitle={t('features.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[#9f7423]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#010101] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('about.intro.subtitle')}
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                {t('about.intro.text')}
              </p>
              <div className="space-y-4 mb-8">
                {(t('about.vision.points', { returnObjects: true }) as string[]).slice(0, 3).map((point, index) => (
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
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#9f7423] font-medium hover:gap-3 transition-all"
              >
                {t('hero.learnMore')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#9f7423] text-white p-6 rounded-xl">
                <div className="text-4xl font-bold">13+</div>
                <div className="text-sm opacity-80">{t('home.yearsExperience')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#9f7423]/20 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-[#9f7423]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-[#9f7423] text-sm font-medium"
                >
                  {t('hero.learnMore')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              {t('home.viewAllServices')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-[#9f7423] to-[#b8862a] rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-white/80 text-lg mb-8">
                {t('cta.subtitle')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#010101] text-white font-medium rounded-full hover:bg-[#1a1a1a] transition-all"
              >
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
