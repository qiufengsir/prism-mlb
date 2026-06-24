import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';
import path from 'path'
import prerenderStatic from 'vite-plugin-prerender-static'

const SITE_URL = 'https://prism-mlb.top'

const routeContent: Record<string, string> = {
  '/': `<main><h1>Dream of Youth — 青春梦想团队</h1><p>一支充满激情的年轻创意团队，用设计和技术为世界带来美好改变。</p></main>`,
  '/team': `<main><h1>团队介绍</h1><p>认识 Dream of Youth 团队的核心成员，了解我们的专长与故事。</p></main>`,
  '/works': `<main><h1>作品集</h1><p>浏览 Dream of Youth 精选的设计与开发项目。</p></main>`,
  '/projects': `<main><h1>项目案例</h1><p>深入了解我们最具代表性的项目案例与解决方案。</p></main>`,
  '/media': `<main><h1>媒体库</h1><p>探索 Dream of Youth 的图片、视频与品牌资源。</p></main>`,
  '/about': `<main><h1>关于我们</h1><p>了解 Dream of Youth 的愿景、使命与发展历程。</p></main>`,
}

const routes = [
  {
    path: '/',
    tags: {
      title: 'Dream of Youth — 青春梦想团队',
      description: 'Dream of Youth 是一支充满激情的年轻创意团队，致力于用设计和技术为世界带来美好改变。',
      keywords: 'Dream of Youth, 青春梦想团队, 创意团队, 设计, 开发, 作品集',
      url: `${SITE_URL}/`,
      canonical: `${SITE_URL}/`,
      author: 'Dream of Youth Team',
      robots: 'index, follow',
    },
  },
  {
    path: '/team',
    tags: {
      title: '团队介绍 — Dream of Youth',
      description: '认识 Dream of Youth 团队的核心成员，了解我们的专长、故事与创作理念。',
      keywords: 'Dream of Youth, 团队介绍, 成员, 创意团队',
      url: `${SITE_URL}/team`,
      canonical: `${SITE_URL}/team`,
      author: 'Dream of Youth Team',
      robots: 'index, follow',
    },
  },
  {
    path: '/works',
    tags: {
      title: '作品集 — Dream of Youth',
      description: '浏览 Dream of Youth 精选的设计与开发项目，发现创意与技术的完美融合。',
      keywords: 'Dream of Youth, 作品集, 设计, 开发, 项目展示',
      url: `${SITE_URL}/works`,
      canonical: `${SITE_URL}/works`,
      author: 'Dream of Youth Team',
      robots: 'index, follow',
    },
  },
  {
    path: '/projects',
    tags: {
      title: '项目案例 — Dream of Youth',
      description: '深入了解 Dream of Youth 最具代表性的项目案例与解决方案。',
      keywords: 'Dream of Youth, 项目案例, 解决方案, 创意项目',
      url: `${SITE_URL}/projects`,
      canonical: `${SITE_URL}/projects`,
      author: 'Dream of Youth Team',
      robots: 'index, follow',
    },
  },
  {
    path: '/media',
    tags: {
      title: '媒体库 — Dream of Youth',
      description: '探索 Dream of Youth 的图片、视频与品牌资源。',
      keywords: 'Dream of Youth, 媒体库, 图片, 视频, 品牌资源',
      url: `${SITE_URL}/media`,
      canonical: `${SITE_URL}/media`,
      author: 'Dream of Youth Team',
      robots: 'index, follow',
    },
  },
  {
    path: '/about',
    tags: {
      title: '关于我们 — Dream of Youth',
      description: '了解 Dream of Youth 的愿景、使命与发展历程。',
      keywords: 'Dream of Youth, 关于我们, 愿景, 使命, 团队介绍',
      url: `${SITE_URL}/about`,
      canonical: `${SITE_URL}/about`,
      author: 'Dream of Youth Team',
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
