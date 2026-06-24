import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { BRAND } from "@/data/brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";

const navPaths = [
  { path: "/", key: "home" as const },
  { path: "/team", key: "team" as const },
  { path: "/works", key: "works" as const },
  { path: "/projects", key: "projects" as const },
  { path: "/media", key: "media" as const },
  { path: "/about", key: "about" as const },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_1px_0_rgba(255,255,255,0.02)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)",
                    filter: "blur(8px)",
                    transform: "scale(2)",
                  }}
                />
              </div>
              <span className="font-display font-bold text-lg md:text-xl text-textPrimary tracking-tight">
                {BRAND.name}
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navPaths.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-textSecondary hover:text-textPrimary"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-primary/[0.08] rounded-lg border border-primary/[0.08]"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{t.nav[item.key]}</span>
                  </Link>
                );
              })}
              <LanguageSwitcher className="ml-2" />
            </div>

            <div className="flex md:hidden items-center gap-1">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -mr-2 text-textSecondary hover:text-textPrimary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl pt-20"
          >
            <div className="flex flex-col items-center gap-1 p-4">
              {navPaths.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: index * 0.06, duration: 0.3 }}
                  className="w-full max-w-xs"
                >
                  <Link
                    to={item.path}
                    className={`block px-6 py-3.5 text-lg font-medium rounded-xl text-center transition-all duration-200 ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/[0.08] border border-primary/[0.12]"
                        : "text-textSecondary hover:text-textPrimary hover:bg-white/[0.03]"
                    }`}
                  >
                    {t.nav[item.key]}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
