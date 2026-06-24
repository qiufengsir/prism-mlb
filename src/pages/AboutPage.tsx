import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Github,
  Twitter,
  Instagram,
  CheckCircle,
  Sparkles,
  Target,
  Heart,
  Zap,
  Info,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { useTranslation } from "@/hooks/useTranslation";

const valueIcons = [Target, Heart, Zap, Sparkles];
const valueStyles = [
  { color: "from-primary/20 to-primary/5", iconColor: "text-primary", iconBg: "bg-primary/[0.08]" },
  { color: "from-secondary/20 to-secondary/5", iconColor: "text-secondary", iconBg: "bg-secondary/[0.08]" },
  { color: "from-accent/20 to-accent/5", iconColor: "text-accent", iconBg: "bg-accent/[0.08]" },
  { color: "from-glowPurple/20 to-primary/5", iconColor: "text-primary", iconBg: "bg-primary/[0.08]" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
];

export function AboutPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={t.seo.about.title}
        description={t.seo.about.description}
        keywords={t.seo.about.keywords}
        canonical="/about"
      />
      <section className="pt-28 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-24">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-sm font-medium mb-6 border border-primary/[0.1]">
              <Info className="w-4 h-4" />
              {t.about.badge}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 tracking-tight leading-tight">
              {t.about.title}{" "}
              <span className="gradient-text-static">{t.about.titleHighlight}</span>
            </h1>
            <p className="text-textSecondary max-w-2xl mx-auto text-lg leading-relaxed text-balance">
              {t.about.story}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-28">
            <AnimatedSection>
              <div className="glass-card-elevated rounded-2xl p-8 md:p-10 h-full">
                <h2 className="font-display text-2xl font-bold text-textPrimary mb-6 tracking-tight">
                  {t.about.visionTitle}
                </h2>
                <p className="text-textSecondary leading-relaxed mb-8">
                  {t.about.visionBody}
                </p>
                <div className="relative p-6 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04] rounded-xl border border-white/[0.04]">
                  <span className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none select-none">&ldquo;</span>
                  <p className="text-textPrimary italic relative z-10 pl-6 leading-relaxed">
                    {t.brand.tagline}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="glass-card-elevated rounded-2xl p-8 md:p-10 h-full">
                <h2 className="font-display text-2xl font-bold text-textPrimary mb-6 tracking-tight">
                  {t.about.missionTitle}
                </h2>
                <p className="text-textSecondary leading-relaxed mb-8">
                  {t.about.missionBody}
                </p>
                <div className="space-y-3.5">
                  {t.about.missionItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-textSecondary text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mb-24">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-textPrimary mb-4 tracking-tight">
                {t.about.valuesTitle}{" "}
                <span className="gradient-text-static">{t.about.valuesTitleHighlight}</span>
              </h2>
              <p className="text-textSecondary max-w-lg mx-auto text-balance">
                {t.about.valuesSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {t.values.map((value, index) => {
                const Icon = valueIcons[index];
                const style = valueStyles[index];
                return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="glass-card rounded-2xl p-6 md:p-7 group gradient-border-hover transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${style.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-textPrimary text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-textSecondary text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );})}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <AnimatedSection className="lg:col-span-2">
              <div className="glass-card-elevated rounded-2xl p-8 md:p-10 h-full">
                <h3 className="font-display text-xl font-bold text-textPrimary mb-8 tracking-tight">
                  {t.about.contactTitle}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-textMuted text-sm mb-1">{t.about.email}</p>
                      <a
                        href="mailto:15196771992@139.com"
                        className="text-textPrimary hover:text-primary transition-colors text-sm"
                      >
                        15196771992@139.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-textMuted text-sm mb-1">{t.about.address}</p>
                      <p className="text-textPrimary text-sm">{t.common.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-textMuted text-sm mb-4 font-medium">{t.about.followUs}</p>
                  <div className="flex gap-2.5">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary/20 hover:bg-primary/[0.04] transition-all duration-300"
                        title={social.label}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-3">
              <div className="glass-card-elevated rounded-2xl p-8 md:p-10">
                <h3 className="font-display text-xl font-bold text-textPrimary mb-8 tracking-tight">
                  {t.about.sendMessage}
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/[0.08] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-textPrimary font-semibold text-lg mb-2">
                      {t.about.formSuccessTitle}
                    </h4>
                    <p className="text-textSecondary text-sm">{t.about.formSuccessBody}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-textSecondary mb-2">
                          {t.about.formName}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm"
                          placeholder={t.about.formNamePlaceholder}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-textSecondary mb-2">
                          {t.about.formEmail}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm"
                          placeholder={t.about.formEmailPlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-textSecondary mb-2">
                        {t.about.formMessage}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm resize-none"
                        placeholder={t.about.formMessagePlaceholder}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      {t.about.formSubmit}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
