import { useState, useEffect, startTransition } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import OnvioButton from "../ui/OnvioButton";

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/services", label: t("nav.services") },
    { path: "/training", label: t("nav.training") },
    { path: "/about", label: t("nav.about") },
    { path: "/clients", label: t("nav.clients") },
    { path: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      startTransition(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem("language", lang);
    } catch {
      // localStorage may be unavailable in incognito mode or when disabled
    }
  };

  const currentLang = i18n.language;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#010101]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="Open-Book"
                className="h-9 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.path ||
                    (item.path !== "/" &&
                      location.pathname.startsWith(item.path))
                      ? "text-[#d4a84b]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {(location.pathname === item.path ||
                    (item.path !== "/" &&
                      location.pathname.startsWith(item.path))) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4a84b] to-[#9f7423]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center bg-white/5 rounded-full border border-white/10 overflow-hidden">
              <button
                onClick={() => switchLanguage("pt")}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  currentLang === "pt"
                    ? "bg-[#d4a84b] text-[#010101]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => switchLanguage("en")}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  currentLang === "en"
                    ? "bg-[#d4a84b] text-[#010101]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
            <OnvioButton variant="header" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-white"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-[#010101]/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-lg font-medium transition-colors ${
                    location.pathname === item.path ||
                    (item.path !== "/" &&
                      location.pathname.startsWith(item.path))
                      ? "text-[#d4a84b]"
                      : "text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center bg-white/5 rounded-full border border-white/10 overflow-hidden">
                  <button
                    onClick={() => switchLanguage("pt")}
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      currentLang === "pt"
                        ? "bg-[#d4a84b] text-[#010101]"
                        : "text-white/60"
                    }`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => switchLanguage("en")}
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      currentLang === "en"
                        ? "bg-[#d4a84b] text-[#010101]"
                        : "text-white/60"
                    }`}
                  >
                    EN
                  </button>
                </div>
                <OnvioButton variant="header" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
