import { Link } from "react-router-dom";
import { Sparkles, Github, Mail, Heart, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { path: "/team", label: "团队名片" },
  { path: "/works", label: "作品集" },
  { path: "/projects", label: "项目集" },
  { path: "/media", label: "媒体库" },
  { path: "/about", label: "关于我们" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.04] bg-surface/30">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <Sparkles className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
              <span className="font-display font-bold text-xl text-textPrimary tracking-tight">
                Dream of Youth
              </span>
            </Link>
            <p className="text-textSecondary text-sm leading-relaxed max-w-sm">
              用创意点亮青春，用梦想驱动未来。我们是一支充满激情的年轻团队，致力于创造令人惊叹的数字体验。
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/20 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:15196771992@139.com"
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/20 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold text-textPrimary text-sm uppercase tracking-widest mb-5 opacity-80">
              快速链接
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-textSecondary hover:text-primary transition-colors duration-200 text-sm flex items-center gap-1 group w-fit"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-semibold text-textPrimary text-sm uppercase tracking-widest mb-5 opacity-80">
              联系我们
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:15196771992@139.com"
                className="flex items-center gap-2.5 text-textSecondary hover:text-primary transition-colors duration-200 text-sm group"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.15] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </span>
                15196771992@139.com
              </a>
              <div className="flex items-center gap-2.5 text-textSecondary text-sm">
                <span className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center">
                  <span className="text-primary text-xs">📍</span>
                </span>
                中国 · 上海
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-textMuted text-xs">
            &copy; {new Date().getFullYear()} Dream of Youth. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-textMuted text-xs flex items-center gap-1.5">
              Made with <Heart className="w-3 h-3 text-secondary animate-pulse" /> by Dream of Youth Team
            </p>
            <button
              onClick={scrollToTop}
              className="text-textMuted hover:text-primary transition-colors text-xs"
            >
              ↑ 回到顶部
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
