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
import { BRAND } from "@/data/brand";

const values = [
  {
    icon: Target,
    title: "专业落地",
    description: "用可交付的产品说话，每一次输出都追求完整与可靠",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    iconBg: "bg-primary/[0.08]",
  },
  {
    icon: Heart,
    title: "真诚协作",
    description: "从校园到职场，以真实与信任作为团队合作的基础",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/[0.08]",
  },
  {
    icon: Zap,
    title: "AI 提效",
    description: "善用 Agent、Harness、Skills 与 Memory，让创造更高效",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    iconBg: "bg-accent/[0.08]",
  },
  {
    icon: Sparkles,
    title: "持续成长",
    description: "保持学习与实践，在业余时间里不断拓展能力边界",
    color: "from-glowPurple/20 to-primary/5",
    iconColor: "text-primary",
    iconBg: "bg-primary/[0.08]",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
];

export function AboutPage() {
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
        title={`关于我们 — ${BRAND.name}`}
        description={`了解 ${BRAND.name} 的愿景与使命：${BRAND.tagline}`}
        keywords={`${BRAND.name}, Prism, 关于我们, 愿景, AI Agent`}
        canonical="/about"
      />
      <section className="pt-28 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-24">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-sm font-medium mb-6 border border-primary/[0.1]">
              <Info className="w-4 h-4" />
              关于我们
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 tracking-tight leading-tight">
              我们的 <span className="gradient-text-static">故事</span>
            </h1>
            <p className="text-textSecondary max-w-2xl mx-auto text-lg leading-relaxed text-balance">
              {BRAND.name}，{BRAND.subtitle}。我们从校园出发，在工作里继续以业余团队的方式创造。
              我们相信 AI 不是替代年轻人，而是放大年轻人的创造力——{BRAND.tagline}。
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-28">
            <AnimatedSection>
              <div className="glass-card-elevated rounded-2xl p-8 md:p-10 h-full">
                <h2 className="font-display text-2xl font-bold text-textPrimary mb-6 tracking-tight">
                  我们的愿景
                </h2>
                <p className="text-textSecondary leading-relaxed mb-8">
                  成为一支用 AI 放大青年创造力的产品团队，以专业、干净、真诚的方式，
                  将想法高效落地为真实可用的产品，用作品证明能力。
                </p>
                <div className="relative p-6 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04] rounded-xl border border-white/[0.04]">
                  <span className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none select-none">&ldquo;</span>
                  <p className="text-textPrimary italic relative z-10 pl-6 leading-relaxed">
                    {BRAND.tagline}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="glass-card-elevated rounded-2xl p-8 md:p-10 h-full">
                <h2 className="font-display text-2xl font-bold text-textPrimary mb-6 tracking-tight">
                  我们的使命
                </h2>
                <p className="text-textSecondary leading-relaxed mb-8">
                  为每一位有梦想的年轻人，提供从 AI 辅助编码到产品落地的完整能力展示。
                  我们致力于将前沿 AI 工作流与扎实的产品思维结合，打造干净、专业、可信赖的数字体验。
                </p>
                <div className="space-y-3.5">
                  {[
                    "展示 AI Agent 驱动的产品落地能力",
                    "记录从校园到职场的真实作品",
                    "持续探索 Harness、Skills 与 Memory 工作流",
                    "以真诚态度对待每一次合作与创造",
                  ].map((item, index) => (
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
                我们的 <span className="gradient-text-static">价值观</span>
              </h2>
              <p className="text-textSecondary max-w-lg mx-auto text-balance">
                这些核心价值观指引着我们每一天的工作
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="glass-card rounded-2xl p-6 md:p-7 group gradient-border-hover transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className={`w-12 h-12 rounded-xl ${value.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`w-5 h-5 ${value.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-textPrimary text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-textSecondary text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <AnimatedSection className="lg:col-span-2">
              <div className="glass-card-elevated rounded-2xl p-8 md:p-10 h-full">
                <h3 className="font-display text-xl font-bold text-textPrimary mb-8 tracking-tight">
                  联系方式
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-textMuted text-sm mb-1">邮箱</p>
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
                      <p className="text-textMuted text-sm mb-1">地址</p>
                      <p className="text-textPrimary text-sm">中国 · 上海</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-textMuted text-sm mb-4 font-medium">关注我们</p>
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
                  发送消息
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
                      消息已发送
                    </h4>
                    <p className="text-textSecondary text-sm">感谢您的留言，我们会尽快回复！</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-textSecondary mb-2">
                          姓名
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm"
                          placeholder="请输入您的姓名"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-textSecondary mb-2">
                          邮箱
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm"
                          placeholder="请输入您的邮箱"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-textSecondary mb-2">
                        留言
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm resize-none"
                        placeholder="请输入您的留言..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      发送消息
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
