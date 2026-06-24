import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Palette,
  FolderGit2,
  Image,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Bot,
  Workflow,
  Brain,
  Rocket,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountUp } from "@/components/CountUp";
import { SEO } from "@/components/SEO";
import { useStore } from "@/store/useStore";
import { BRAND } from "@/data/brand";
import { useTranslation } from "@/hooks/useTranslation";

const capabilityIcons = [Bot, Workflow, Brain, Rocket];
const capabilityColors = [
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
  "from-accent/20 to-accent/5",
  "from-glowPurple/20 to-primary/5",
];
const capabilityIconColors = ["text-primary", "text-secondary", "text-accent", "text-glowPurple"];

const quickNavConfig = [
  {
    path: "/team",
    icon: Users,
    key: "team" as const,
    color: "from-glowPurple/20 to-primary/5",
    iconColor: "text-primary",
    borderColor: "group-hover:border-primary/30",
    glow: "group-hover:shadow-primary/15",
  },
  {
    path: "/works",
    icon: Palette,
    key: "works" as const,
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    borderColor: "group-hover:border-secondary/30",
    glow: "group-hover:shadow-secondary/15",
  },
  {
    path: "/projects",
    icon: FolderGit2,
    key: "projects" as const,
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    borderColor: "group-hover:border-accent/30",
    glow: "group-hover:shadow-accent/10",
  },
  {
    path: "/media",
    icon: Image,
    key: "media" as const,
    color: "from-glowPink/20 to-primary/5",
    iconColor: "text-glowPink",
    borderColor: "group-hover:border-glowPink/30",
    glow: "group-hover:shadow-glowPink/10",
  },
];

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -15, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[60%] left-[50%] w-[300px] h-[300px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -20, -40, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-[30%] right-[30%] w-[200px] h-[200px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -20, -50, 0],
          y: [0, 40, 10, 0],
          scale: [0.8, 1.2, 0.9, 0.8],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingOrbs />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-textSecondary text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            {t.home.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none tracking-tight"
        >
          <span className="gradient-text">{BRAND.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-textSecondary mb-3 font-medium tracking-wide"
        >
          {t.brand.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm md:text-base text-primary/90 mb-8 font-light italic"
        >
          {t.brand.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-12 leading-relaxed font-light text-balance"
        >
          {t.home.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/team"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary via-primary to-secondary rounded-xl text-white font-semibold transition-all duration-500 flex items-center gap-2 overflow-hidden hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              {t.home.ctaTeam}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          <Link
            to="/works"
            className="px-8 py-4 border border-white/[0.08] rounded-xl text-textPrimary font-medium hover:bg-white/[0.03] hover:border-white/[0.15] transition-all duration-300 backdrop-blur-sm"
          >
            {t.home.ctaWorks}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-textMuted" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function CapabilitiesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-textPrimary mb-4 tracking-tight">
            {t.home.capabilitiesTitle}{" "}
            <span className="gradient-text-static">{t.home.capabilitiesTitleHighlight}</span>
          </h2>
          <p className="text-textSecondary max-w-lg mx-auto text-balance">
            {t.home.capabilitiesSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.capabilities.map((item, index) => {
            const Icon = capabilityIcons[index];
            return (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="glass-card rounded-2xl p-6 md:p-7 h-full hover:-translate-y-1 transition-transform duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${capabilityColors[index]} flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-5 h-5 ${capabilityIconColors[index]}`} />
                  </div>
                  <h3 className="font-semibold text-textPrimary text-lg mb-2">{item.title}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { teamMembers, works, projects, media } = useStore();
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: teamMembers.length, label: t.home.statsTeam, suffix: "+", color: "from-primary to-glowPurple", shadow: "shadow-primary/20" },
    { icon: Palette, value: works.length, label: t.home.statsWorks, suffix: "+", color: "from-secondary to-glowPink", shadow: "shadow-secondary/20" },
    { icon: FolderGit2, value: projects.length, label: t.home.statsProjects, suffix: "+", color: "from-accent to-amber-400", shadow: "shadow-accent/15" },
    { icon: Image, value: media.length, label: t.home.statsMedia, suffix: "+", color: "from-glowPurple to-glowPink", shadow: "shadow-primary/15" },
  ];

  return (
    <section className="py-24 md:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-textPrimary mb-4 tracking-tight">
            {t.home.statsTitle}{" "}
            <span className="gradient-text-static">{t.home.statsTitleHighlight}</span>
          </h2>
          <p className="text-textSecondary max-w-lg mx-auto text-balance">
            {t.home.statsSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.12}>
              <div className="glass-card-elevated rounded-2xl p-6 md:p-8 text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center bg-gradient-to-br ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`font-display text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-textMuted text-sm font-medium tracking-wide">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const { works, projects } = useStore();
  const { t } = useTranslation();
  const featuredWorks = works.slice(0, 3);
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-textPrimary mb-4 tracking-tight">
            {t.home.featuredTitle}{" "}
            <span className="gradient-text-static">{t.home.featuredTitleHighlight}</span>
          </h2>
          <p className="text-textSecondary max-w-lg mx-auto text-balance">
            {t.home.featuredSubtitle}
          </p>
        </AnimatedSection>

        <div className="space-y-20">
          {featuredWorks.length > 0 && (
            <div>
              <AnimatedSection className="flex items-center gap-3 mb-8">
                <Palette className="w-5 h-5 text-secondary" />
                <h3 className="font-display text-xl font-bold text-textPrimary">{t.home.featuredWorks}</h3>
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredWorks.map((work, index) => (
                  <AnimatedSection key={work.id} delay={index * 0.1}>
                    <Link to="/works" className="group block">
                      <div className="glass-card rounded-2xl overflow-hidden gradient-border-hover transition-all duration-500 hover:-translate-y-1">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={work.cover}
                            alt={work.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          />
                        </div>
                        <div className="p-5">
                          <span className="text-xs font-semibold text-secondary bg-secondary/[0.08] px-2.5 py-1 rounded-full tracking-wide uppercase">
                            {work.category}
                          </span>
                          <h4 className="font-semibold text-textPrimary mt-3 group-hover:text-primary transition-colors duration-300">
                            {work.title}
                          </h4>
                          <p className="text-textSecondary text-sm mt-2 line-clamp-2 leading-relaxed">
                            {work.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}

          {featuredProjects.length > 0 && (
            <div>
              <AnimatedSection className="flex items-center gap-3 mb-8">
                <FolderGit2 className="w-5 h-5 text-accent" />
                <h3 className="font-display text-xl font-bold text-textPrimary">{t.home.featuredProjects}</h3>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {featuredProjects.map((project, index) => (
                  <AnimatedSection key={project.id} delay={index * 0.1}>
                    <Link to="/projects" className="group block">
                      <div className="glass-card rounded-2xl overflow-hidden gradient-border-hover transition-all duration-500 hover:-translate-y-1">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={project.cover}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="font-semibold text-textPrimary text-lg group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h4>
                          <p className="text-textSecondary text-sm mt-2 line-clamp-2 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.techStack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs text-textMuted bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.04]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function QuickNavSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-textPrimary mb-4 tracking-tight">
            {t.home.exploreTitle}
          </h2>
          <p className="text-textSecondary max-w-lg mx-auto text-balance">
            {t.home.exploreSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {quickNavConfig.map((item, index) => (
            <AnimatedSection key={item.path} delay={index * 0.1}>
              <Link
                to={item.path}
                className={`group block glass-card rounded-2xl p-6 md:p-7 border-white/[0.04] hover:border-white/[0.1] ${item.borderColor} transition-all duration-500 h-full hover:-translate-y-1 hover:shadow-xl ${item.glow}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <h3 className="font-semibold text-textPrimary text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {t.home.quickNav[item.key].title}
                </h3>
                <p className="text-textSecondary text-sm leading-relaxed">{t.home.quickNav[item.key].description}</p>
                <div className="mt-5 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  {t.common.viewAll}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <SEO
        title={t.seo.home.title}
        description={t.seo.home.description}
        keywords={t.seo.home.keywords}
        canonical="/"
      />
      <HeroSection />
      <CapabilitiesSection />
      <StatsSection />
      <FeaturedSection />
      <QuickNavSection />
    </div>
  );
}
