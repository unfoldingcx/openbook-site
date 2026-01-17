import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/technologies', label: t('nav.technologies') },
    { path: '/clients', label: t('nav.clients') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <footer className="bg-[#010101] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-light text-white">Open-</span>
              <span className="text-2xl font-semibold text-[#9f7423]">Book</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <p className="text-xs text-[#9f7423]">
              Assessoria Contabil e Financeira
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-[#9f7423] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+551148830103"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {t('contact.info.phone')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@opbo.com.br"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {t('contact.info.email')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.opbo.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {t('contact.info.website')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9f7423] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  {t('contact.info.address')}
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6">{t('footer.followUs')}</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#9f7423] hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#9f7423] hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              {currentYear} Open-Book. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-1 text-white/40 text-sm">
              <span>Transparency that drives results</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
