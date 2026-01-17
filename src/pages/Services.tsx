import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  TrendingUp,
  Scale,
  Building,
  GraduationCap,
  FileText,
  Users,
  Landmark,
  Banknote,
  RefreshCcw,
  Building2,
  UserCheck,
  Receipt,
  Presentation,
  BookOpen,
  ChevronDown
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

interface SubService {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  subServices?: SubService[];
  items?: string[];
}

export default function Services() {
  const { t } = useTranslation();
  const [expandedService, setExpandedService] = useState<string | null>('bpoContabil');

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'bpoContabil',
      icon: Calculator,
      title: t('services.bpoContabil.title'),
      description: t('services.bpoContabil.description'),
      subServices: [
        {
          icon: Receipt,
          title: t('services.bpoContabil.fiscal.title'),
          description: t('services.bpoContabil.fiscal.description')
        },
        {
          icon: Users,
          title: t('services.bpoContabil.payroll.title'),
          description: t('services.bpoContabil.payroll.description')
        },
        {
          icon: FileText,
          title: t('services.bpoContabil.accounting.title'),
          description: t('services.bpoContabil.accounting.description')
        }
      ]
    },
    {
      id: 'bpoFinanceiro',
      icon: TrendingUp,
      title: t('services.bpoFinanceiro.title'),
      description: t('services.bpoFinanceiro.description'),
      subServices: [
        {
          icon: Banknote,
          title: t('services.bpoFinanceiro.accounts.title'),
          description: t('services.bpoFinanceiro.accounts.description')
        },
        {
          icon: RefreshCcw,
          title: t('services.bpoFinanceiro.exchange.title'),
          description: t('services.bpoFinanceiro.exchange.description')
        }
      ]
    },
    {
      id: 'legal',
      icon: Scale,
      title: t('services.legal.title'),
      description: t('services.legal.description'),
      items: [
        t('services.legal.corporate'),
        t('services.legal.consulting'),
        t('services.legal.litigation')
      ]
    },
    {
      id: 'administrative',
      icon: Building,
      title: t('services.administrative.title'),
      description: t('services.administrative.description'),
      subServices: [
        {
          icon: Building2,
          title: t('services.administrative.coworking.title'),
          description: t('services.administrative.coworking.description')
        },
        {
          icon: UserCheck,
          title: t('services.administrative.representation.title'),
          description: t('services.administrative.representation.description')
        },
        {
          icon: Landmark,
          title: t('services.administrative.taxRecovery.title'),
          description: t('services.administrative.taxRecovery.description')
        }
      ]
    },
    {
      id: 'training',
      icon: GraduationCap,
      title: t('services.training.title'),
      description: t('services.training.description'),
      subServices: [
        {
          icon: Presentation,
          title: t('services.training.corporate.title'),
          description: t('services.training.corporate.description')
        },
        {
          icon: BookOpen,
          title: t('services.training.onDemand.title'),
          description: t('services.training.onDemand.description')
        }
      ]
    }
  ];

  return (
    <>
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
              {t('services.title')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-lg text-white/70">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedService(
                      expandedService === category.id ? null : category.id
                    )
                  }
                  className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#9f7423]/20 flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-7 h-7 text-[#9f7423]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-1 hidden md:block">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedService === category.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#9f7423]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedService === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 border-t border-white/10 pt-6">
                        <p className="text-white/60 text-sm mb-6 md:hidden">
                          {category.description}
                        </p>

                        {category.subServices && (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.subServices.map((subService, subIndex) => (
                              <motion.div
                                key={subIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: subIndex * 0.1 }}
                                className="bg-white/5 rounded-xl p-5 border border-white/5"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 rounded-lg bg-[#9f7423]/10 flex items-center justify-center">
                                    <subService.icon className="w-5 h-5 text-[#9f7423]" />
                                  </div>
                                  <h4 className="text-white font-medium">
                                    {subService.title}
                                  </h4>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed">
                                  {subService.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {category.items && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {category.items.map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: itemIndex * 0.1 }}
                                className="bg-white/5 rounded-xl p-5 border border-white/5 flex items-center gap-3"
                              >
                                <div className="w-3 h-3 rounded-full bg-[#9f7423]" />
                                <span className="text-white/80">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Estrutura de Servicos"
            subtitle="Uma assessoria contabil e financeira fortalecida por uma equipe completa"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex flex-col items-center">
              <div className="bg-[#9f7423] text-white px-8 py-4 rounded-xl font-semibold text-lg mb-8">
                Diretoria Executiva
              </div>

              <div className="w-px h-8 bg-white/20" />

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-white/20 -translate-y-full hidden md:block" />
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                      <div className="w-12 h-12 rounded-lg bg-[#9f7423]/20 flex items-center justify-center mx-auto mb-3">
                        <category.icon className="w-6 h-6 text-[#9f7423]" />
                      </div>
                      <p className="text-white text-sm font-medium">
                        {category.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
