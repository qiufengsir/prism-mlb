import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';
import path from 'path'
import prerenderStatic from 'vite-plugin-prerender-static'

const SITE_URL = 'https://prism-mlb.top'
const BRAND_NAME = 'Panzerknacker'
const BRAND_SUBTITLE = 'Prism · 三棱镜'
const BRAND_TAGLINE = 'Use AI to fulfill the dreams of young people'
const BRAND_TEAM = 'Panzerknacker Team'
const BRAND_DESC = `${BRAND_NAME}（${BRAND_SUBTITLE}）是一支专注 AI Agent 高效编码与产品落地的年轻团队。${BRAND_TAGLINE}`

const routeContent: Record<string, string> = {
  '/': `<main><h1>${BRAND_NAME} — ${BRAND_SUBTITLE}</h1><p>${BRAND_TAGLINE}</p></main>`,
  '/team': `<main><h1>团队介绍</h1><p>认识 ${BRAND_NAME} 团队的核心成员，了解 AI 驱动的产品落地能力。</p></main>`,
  '/works': `<main><h1>作品集</h1><p>浏览 ${BRAND_NAME} 从大学到职场的精选作品。</p></main>`,
  '/projects': `<main><h1>项目案例</h1><p>深入了解 ${BRAND_NAME} 的项目案例与解决方案。</p></main>`,
  '/media': `<main><h1>媒体库</h1><p>探索 ${BRAND_NAME} 的图片、视频与品牌资源。</p></main>`,
  '/about': `<main><h1>关于我们</h1><p>了解 ${BRAND_NAME} 的愿景、使命与发展历程。</p></main>`,
}

const routes = [
  {
    path: '/',
    tags: {
      title: `${BRAND_NAME} — ${BRAND_SUBTITLE} | AI 驱动的产品团队`,
      description: BRAND_DESC,
      keywords: `${BRAND_NAME}, Prism, 三棱镜, AI Agent, 产品落地, 作品集`,
      url: `${SITE_URL}/`,
      canonical: `${SITE_URL}/`,
      author: BRAND_TEAM,
      robots: 'index, follow',
    },
  },
  {
    path: '/team',
    tags: {
      title: `团队介绍 — ${BRAND_NAME}`,
      description: `认识 ${BRAND_NAME} 核心成员：AI Agent 驱动开发、全栈落地、视觉设计与产品顾问。`,
      keywords: `${BRAND_NAME}, Prism, 团队介绍, AI Agent, 成员`,
      url: `${SITE_URL}/team`,
      canonical: `${SITE_URL}/team`,
      author: BRAND_TEAM,
      robots: 'index, follow',
    },
  },
  {
    path: '/works',
    tags: {
      title: `作品集 — ${BRAND_NAME}`,
      description: `浏览 ${BRAND_NAME} 精选作品：大学时期与职场个人创作。`,
      keywords: `${BRAND_NAME}, 作品集, 设计, 开发, 项目展示`,
      url: `${SITE_URL}/works`,
      canonical: `${SITE_URL}/works`,
      author: BRAND_TEAM,
      robots: 'index, follow',
    },
  },
  {
    path: '/projects',
    tags: {
      title: `项目案例 — ${BRAND_NAME}`,
      description: `深入了解 ${BRAND_NAME} 最具代表性的项目案例与解决方案。`,
      keywords: `${BRAND_NAME}, 项目案例, 解决方案, AI Agent`,
      url: `${SITE_URL}/projects`,
      canonical: `${SITE_URL}/projects`,
      author: BRAND_TEAM,
      robots: 'index, follow',
    },
  },
  {
    path: '/media',
    tags: {
      title: `媒体库 — ${BRAND_NAME}`,
      description: `探索 ${BRAND_NAME} 的图片、视频与品牌资源。`,
      keywords: `${BRAND_NAME}, 媒体库, 图片, 视频, 品牌资源`,
      url: `${SITE_URL}/media`,
      canonical: `${SITE_URL}/media`,
      author: BRAND_TEAM,
      robots: 'index, follow',
    },
  },
  {
    path: '/about',
    tags: {
      title: `关于我们 — ${BRAND_NAME}`,
      description: `了解 ${BRAND_NAME} 的愿景、使命与从校园到职场的发展历程。`,
      keywords: `${BRAND_NAME}, 关于我们, 愿景, 使命, Prism`,
      url: `${SITE_URL}/about`,
      canonical: `${SITE_URL}/about`,
      author: BRAND_TEAM,
      robots: 'index, follow',
    },
  },
]

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    traeBadgePlugin({
      variant: 'dark',
      position: 'bottom-right',
      prodOnly: true,
      clickable: true,
      clickUrl: 'https://www.trae.ai/solo?showJoin=1',
      autoTheme: true,
      autoThemeTarget: '#root'
    }),
    tsconfigPaths(),
    prerenderStatic({
      routes: routes as any,
      render: (route: any) => routeContent[route.path] ?? '<div></div>',
      template: path.resolve(__dirname, 'template.html'),
    } as any),
  ],
})
