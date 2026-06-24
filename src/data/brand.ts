export const BRAND = {
  name: "Panzerknacker",
  subtitle: "Prism · 三棱镜",
  tagline: "Use AI to fulfill the dreams of young people",
  taglineZh: "用 AI，点亮年轻人的梦想",
  teamName: "Panzerknacker Team",
  siteUrl: "https://prism-mlb.top",
} as const;

export const BRAND_SEO = {
  defaultTitle: `${BRAND.name} — ${BRAND.subtitle} | AI 驱动的产品团队`,
  defaultDescription: `${BRAND.name}（${BRAND.subtitle}）是一支专注 AI Agent 高效编码与产品落地的年轻团队。${BRAND.tagline}`,
  defaultKeywords: `${BRAND.name}, Prism, 三棱镜, AI Agent, 产品落地, Harness, Skills, 作品集`,
} as const;

export const CAPABILITIES = [
  {
    title: "AI Agent 落地",
    description: "从需求到产品，用 Agent 串联设计、开发、测试与交付",
  },
  {
    title: "Harness 架构",
    description: "构建稳定、可扩展的 AI 辅助开发工作流",
  },
  {
    title: "Skills & Memory",
    description: "沉淀方法论与上下文，让每一次开发都比上一次更快",
  },
  {
    title: "全栈产品能力",
    description: "前端、架构、产品思维兼备，能独立推进项目从 0 到 1",
  },
] as const;
