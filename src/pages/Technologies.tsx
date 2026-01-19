import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  Zap,
  Shield,
  Clock,
  FileCheck,
  Server,
  Lock,
  Smartphone,
  CheckCircle2,
  Quote
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';
import SEO from '../components/seo/SEO';

export default function Technologies() {
  const { t } = useTranslation();

  const benefits = t('technologies.benefits.items', { returnObjects: true }) as string[];

  const tools = [
    {
      name: t('technologies.tools.dominio.name'),
      category: t('technologies.tools.dominio.category'),
      description: t('technologies.tools.dominio.description')
    },
    {
      name: t('technologies.tools.jetax.name'),
      category: t('technologies.tools.jetax.category'),
      description: t('technologies.tools.jetax.description')
    },
    {
      name: t('technologies.tools.econet.name'),
      category: t('technologies.tools.econet.category'),
      description: t('technologies.tools.econet.description')
    },
    {
      name: t('technologies.tools.onvio.name'),
      category: t('technologies.tools.onvio.category'),
      description: t('technologies.tools.onvio.description')
    }
  ];

  const techFeatures = [
    {
      icon: Zap,
      title: t('technologies.features.agility.title'),
      description: t('technologies.features.agility.description')
    },
    {
      icon: Shield,
      title: t('technologies.features.security.title'),
      description: t('technologies.features.security.description')
    },
    {
      icon: Clock,
      title: t('technologies.features.efficiency.title'),
      description: t('technologies.features.efficiency.description')
    },
    {
      icon: FileCheck,
      title: t('technologies.features.compliance.title'),
      description: t('technologies.features.compliance.description')
    },
    {
      icon: Server,
      title: t('technologies.features.integration.title'),
      description: t('technologies.features.integration.description')
    },
    {
      icon: Lock,
      title: t('technologies.features.privacy.title'),
      description: t('technologies.features.privacy.description')
    }
  ];

  return (
    <>
      <SEO page="technologies" path="/technologies" />
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#010101] to-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#9f7423]/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm text-[#9f7423] border border-[#9f7423]/30 rounded-full bg-[#9f7423]/10">
              {t('technologies.title')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('technologies.title')}
            </h1>
            <p className="text-lg text-white/70">
              {t('technologies.subtitle')}
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
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {t('technologies.description')}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <h4 className="text-white font-semibold mb-1">{tool.name}</h4>
                    <p className="text-[#9f7423] text-xs mb-2">{tool.category}</p>
                    <p className="text-white/50 text-xs">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#9f7423] text-white p-6 rounded-xl max-w-xs">
                <Smartphone className="w-8 h-8 mb-2" />
                <p className="text-sm">{t('technologies.digitalExperience')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('technologies.benefits.title')}
            subtitle={t('technologies.benefitsSubtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techFeatures.map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9f7423]/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#9f7423]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                {t('technologies.clientBenefits')}
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#9f7423]/10 rounded-2xl p-8 border border-[#9f7423]/30">
                <Quote className="w-12 h-12 text-[#9f7423]/50 mb-4" />
                <p className="text-white/80 text-lg italic leading-relaxed">
                  {t('technologies.quote')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#9f7423] to-[#b8862a] rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('technologies.lgpd.title')}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              {t('technologies.lgpd.description')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Shield className="w-12 h-12 text-white" />
              <Lock className="w-12 h-12 text-white" />
              <Server className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
