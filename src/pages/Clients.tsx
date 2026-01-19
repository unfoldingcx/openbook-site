import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  Factory,
  Tractor,
  Landmark,
  Theater,
  Palette,
  Globe2,
  Quote,
  Users
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';
import SEO from '../components/seo/SEO';

export default function Clients() {
  const { t } = useTranslation();

  const clientCategories = [
    {
      icon: Factory,
      industry: t('clients.industryNames.industrial'),
      description: t('clients.industries.industrial'),
      color: 'from-red-500/20 to-red-600/20'
    },
    {
      icon: Tractor,
      industry: t('clients.industryNames.agribusiness'),
      description: t('clients.industries.agribusiness'),
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: Landmark,
      industry: t('clients.industryNames.financial'),
      description: t('clients.industries.financial'),
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Theater,
      industry: t('clients.industryNames.entertainment'),
      description: t('clients.industries.entertainment'),
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: Palette,
      industry: t('clients.industryNames.creative'),
      description: t('clients.industries.creative'),
      color: 'from-pink-500/20 to-pink-600/20'
    },
    {
      icon: Globe2,
      industry: t('clients.industryNames.technology'),
      description: t('clients.industries.technology'),
      color: 'from-cyan-500/20 to-cyan-600/20'
    }
  ];

  const stats = [
    { value: '13+', label: t('clients.stats.yearsExperience') },
    { value: '50+', label: t('clients.stats.clientsServed') },
    { value: '100%', label: t('clients.stats.compliance') },
    { value: '24/7', label: t('clients.stats.dedicatedSupport') }
  ];

  return (
    <>
      <SEO page="clients" path="/clients" />
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#010101] to-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#9f7423]/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm text-[#9f7423] border border-[#9f7423]/30 rounded-full bg-[#9f7423]/10">
              {t('clients.title')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('clients.title')}
            </h1>
            <p className="text-lg text-white/70">
              {t('clients.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <Quote className="w-12 h-12 text-[#9f7423] flex-shrink-0" />
              <p className="text-white/70 text-lg leading-relaxed">
                {t('clients.description')}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#9f7423] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('clients.sectors.title')}
            subtitle={t('clients.sectors.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientCategories.map((client, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center mb-4`}>
                  <client.icon className="w-8 h-8 text-[#9f7423]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {client.industry}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {client.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('clients.partnership.title')}
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                {t('clients.partnership.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9f7423]/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#9f7423]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {t('clients.partnership.personalized.title')}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {t('clients.partnership.personalized.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9f7423]/20 flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-6 h-6 text-[#9f7423]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {t('clients.partnership.international.title')}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {t('clients.partnership.international.description')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Client partnership"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('clients.testimonials.title')}
            subtitle={t('clients.testimonials.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('clients.testimonials.items', { returnObjects: true }) as Array<{quote: string, author: string, company: string}>).map((testimonial, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Quote className="w-10 h-10 text-[#9f7423]/30 mb-4" />
                <p className="text-white/70 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-[#9f7423] text-sm">{testimonial.company}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
