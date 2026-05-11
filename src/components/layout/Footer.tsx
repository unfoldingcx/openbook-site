import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Instagram,
  Newspaper,
} from "lucide-react";

// Hoisted static SVG elements outside component to avoid re-creation on each render (rendering-hoist-jsx)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Hoisted static logo — never changes (rendering-hoist-jsx)
const footerLogoMark = (
  <img
    src="/logo.png"
    alt="Open-Book"
    className="h-11 w-auto flex-shrink-0"
  />
);

// Hoisted — computed once at module level, not on every render (rerender-lazy-state-init)
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useTranslation();
  const newsItems = [
    {
      category: "Atualização Fiscal",
      title:
        "NFS-e nacional será obrigatória para serviços do Simples Nacional",
      body: "A partir de 1º de setembro de 2026, ME e EPP do Simples Nacional que prestam serviços sujeitos ao ISS deverão emitir nota exclusivamente pelo Emissor Nacional da NFS-e (web ou API). A NFS-e nacional terá validade em todo o território e não se aplica a operações sujeitas apenas ao ICMS.",
      highlights: [
        "Validade nacional e emissão padronizada",
        "Obrigatória para serviços sujeitos ao ISS",
        "Empresas que usam sistema municipal precisarão se adequar",
      ],
      guidance:
        "Recomenda-se revisar acessos, dados cadastrais e fluxo de emissão com antecedência para evitar riscos fiscais.",
    },
    {
      category: "Legislação Tributária",
      title: "LC nº 224/2025 reduz benefícios e incentivos tributários federais",
      body: "A Lei Complementar nº 224/2025 estabeleceu redução linear de 10% em diversos benefícios fiscais federais, com impacto sobre regimes e incentivos relacionados a PIS/Cofins, IRPJ, CSLL, IPI, Imposto de Importação e contribuição previdenciária patronal, entre outros.",
      highlights: [
        "Créditos e reduções passam a ficar limitados, em regra, a 90%",
        "No lucro presumido, há acréscimo de presunção sobre receita anual acima de R$ 5 milhões",
        "Há exceções relevantes (ex.: Zona Franca, cesta básica, Minha Casa Minha Vida, Prouni e outras hipóteses legais)",
      ],
      guidance:
        "Vigências principais: 01/01/2026 (IRPJ e II) e 01/04/2026 (PIS, Cofins, PIS/Cofins-Importação, IPI, CSLL e CPP). Fonte: Lei Complementar nº 224/2025.",
    },
    {
      category: "IOF e Operações de Crédito",
      title:
        "IOF pode incidir sobre mútuo em dinheiro entre empresas fora do sistema financeiro",
      body: "A incidência do IOF pode ocorrer em empréstimos em dinheiro concedidos por pessoa jurídica, mesmo não financeira, quando caracterizada operação de crédito. O fato gerador ocorre na concessão do crédito, com regras específicas de base de cálculo, alíquotas e recolhimento.",
      highlights: [
        "Alíquota diária geral: 0,0082% ao dia + alíquota adicional de 0,38% (conforme regras vigentes)",
        "Para Simples/MEI, há hipótese de alíquota reduzida em operações até R$ 30 mil, mediante requisitos formais",
        "Atrasos podem gerar Selic, multa de mora e penalidades mais gravosas em lançamento de ofício",
      ],
      guidance:
        "Empresas devem manter documentação detalhada das operações e observar obrigações declaratórias, inclusive na DCTFWeb, conforme regulamentação aplicável.",
    },
  ];

  const quickLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/services", label: t("nav.services") },
    { path: "/services/accounting", label: t("services.accounting.title") },
    { path: "/services/financial", label: t("services.financial.title") },
    { path: "/services/tax", label: t("services.tax.title") },
    { path: "/services/payroll", label: t("services.payroll.title") },
    { path: "/training", label: t("nav.training") },
    { path: "/about", label: t("nav.about") },
    { path: "/technologies", label: t("nav.technologies") },
    { path: "/clients", label: t("nav.clients") },
    { path: "/content", label: t("nav.content") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-[#010101] border-t border-white/10">
      {/* News Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#9f7423]/20 flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-[#d4a84b]" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {t("news.title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#9f7423]/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#d4a84b]" />
                    <span className="text-xs text-white/40 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-white font-semibold leading-snug mb-3">
                    {item.title}
                  </h4>

                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {item.body}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {item.highlights.map((point) => (
                      <li key={point} className="text-white/70 text-sm leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>

                  <p className="text-white/60 text-xs leading-relaxed">
                    {item.guidance}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link to="/" className="flex items-center gap-3 mb-4">
              {footerLogoMark}
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {t("footer.description")}
            </p>
            <p className="text-xs text-[#d4a84b]">{t("footer.tagline")}</p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <h4 className="text-white font-semibold mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-[#d4a84b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <h4 className="text-white font-semibold mb-6">
              {t("footer.contactUs")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#d4a84b] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+551148830103"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {t("contact.info.phone")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="w-5 h-5 text-[#d4a84b] flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/5511913239692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  WhatsApp: (11) 91323-9692
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d4a84b] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@opbo.com.br"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {t("contact.info.email")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#d4a84b] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.opbo.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {t("contact.info.website")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4a84b] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  {t("contact.info.address")}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <h4 className="text-white font-semibold mb-6">
              {t("footer.followUs")}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#9f7423] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#9f7423] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511913239692"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#9f7423] hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              {CURRENT_YEAR} Open-Book. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-1 text-white/40 text-sm">
              <span>{t("footer.slogan")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
