# Dream of Youth 代码阅读指南

本文档帮助你理解项目代码结构，知道哪些文件负责什么功能。

## 项目目录结构

```
Dream of Youth/
├── docs/                       # 文档目录
│   ├── content-guide.md        # 内容修改指南
│   └── code-guide.md           # 本文件
│
├── public/                     # 静态资源（图片、视频等）
│   └── images/                 # 图片资源
│
├── src/                        # 源代码目录
│   ├── components/             # 通用组件
│   │   ├── AnimatedSection.tsx  # 滚动动画包装组件
│   │   ├── CountUp.tsx         # 数字计数动画组件
│   │   ├── Footer.tsx          # 页脚组件
│   │   ├── Layout.tsx          # 页面布局框架
│   │   └── Navbar.tsx          # 顶部导航栏
│   │
│   ├── data/                   # 数据文件
│   │   └── initialData.ts      # 所有初始数据（名片、作品、项目、媒体）
│   │
│   ├── pages/                  # 页面组件
│   │   ├── HomePage.tsx        # 首页
│   │   ├── TeamPage.tsx        # 团队名片页
│   │   ├── WorksPage.tsx       # 作品集页
│   │   ├── ProjectsPage.tsx    # 项目集页
│   │   ├── MediaPage.tsx       # 媒体库页
│   │   └── AboutPage.tsx       # 关于我们页
│   │
│   ├── store/                  # 状态管理
│   │   └── useStore.ts         # Zustand 数据存储
│   │
│   ├── App.tsx                 # 路由配置
│   ├── main.tsx                # 应用入口
│   └── index.css               # 全局样式
│
├── index.html                  # HTML入口文件
├── tailwind.config.js          # Tailwind CSS配置
├── vite.config.ts              # Vite构建配置
└── package.json                # 依赖和脚本
```

---

## 文件功能详解

### 1. 数据层

#### `src/data/initialData.ts`
**作用**: 存储网站所有初始数据

**包含内容**:
- `initialTeamMembers` - 团队成员数组
- `initialWorks` - 作品集数组
- `initialProjects` - 项目集数组
- `initialMedia` - 媒体库数组

**修改场景**: 替换虚拟数据为真实内容时修改此文件

---

### 2. 状态管理

#### `src/store/useStore.ts`
**作用**: 管理网站全局状态和数据操作

**提供功能**:
```typescript
// 读取数据
const { teamMembers, works, projects, media } = useStore();

// 添加数据
addTeamMember(member);    // 添加成员
addWork(work);            // 添加作品
addProject(project);      // 添加项目
addMedia(mediaItem);      // 添加媒体

// 删除数据
removeTeamMember(id);     // 删除成员
removeWork(id);           // 删除作品
removeProject(id);        // 删除项目
removeMedia(id);          // 删除媒体
```

**特点**: 数据自动保存到浏览器 LocalStorage，刷新页面不丢失

---

### 3. 页面组件

#### `src/pages/HomePage.tsx`
**作用**: 网站首页

**包含区块**:
- `HeroSection` - 全屏欢迎区域（大标题 + 按钮）
- `StatsSection` - 数据统计卡片（成员数、作品数等）
- `FeaturedSection` - 精选作品和项目展示
- `QuickNavSection` - 快速导航入口卡片

**修改内容**: 首页文案、按钮链接

---

#### `src/pages/TeamPage.tsx`
**作用**: 团队名片展示和添加

**包含组件**:
- `TeamCard` - 单个成员名片卡片
- `AddMemberModal` - 添加成员弹窗表单

**功能**:
- 展示成员网格
- 点击"查看详情"展开更多信息
- 右下角悬浮按钮添加新成员
- 悬浮显示删除按钮

---

#### `src/pages/WorksPage.tsx`
**作用**: 作品集展示

**包含组件**:
- `WorkDetailModal` - 作品详情弹窗

**功能**:
- 分类筛选（全部/设计/摄影/视频/其他）
- 点击作品查看详情大图
- 悬浮显示删除按钮

---

#### `src/pages/ProjectsPage.tsx`
**作用**: 项目集展示

**包含组件**:
- `ProjectDetailModal` - 项目详情弹窗

**功能**:
- 展示项目卡片（封面、标题、技术栈）
- 点击查看详情（完整描述、技术栈、成员）
- 外部链接跳转

---

#### `src/pages/MediaPage.tsx`
**作用**: 媒体库（照片和视频）

**包含组件**:
- `PhotoModal` - 照片查看器
- `VideoModal` - 视频播放器

**功能**:
- 照片墙网格展示
- 点击照片查看大图
- 视频卡片带播放按钮
- 点击播放视频

---

#### `src/pages/AboutPage.tsx`
**作用**: 关于我们页面

**包含内容**:
- 团队故事介绍
- 愿景和使命卡片
- 价值观展示
- 联系信息（邮箱、地址）
- 联系表单
- 社交媒体链接

**修改内容**: 团队介绍文字、联系邮箱、价值观

---

### 4. 通用组件

#### `src/components/Navbar.tsx`
**作用**: 顶部导航栏

**功能**:
- 固定顶部显示
- 滚动时添加背景模糊效果
- 移动端汉堡菜单
- 当前页面高亮

**修改内容**: 导航项、品牌Logo文字

---

#### `src/components/Footer.tsx`
**作用**: 页脚

**包含**:
- 品牌信息
- 快速链接
- 联系方式（邮箱已改为 15196771992@139.com）
- 版权信息

---

#### `src/components/Layout.tsx`
**作用**: 页面布局框架

**功能**: 包裹所有页面，统一添加导航栏和页脚

---

#### `src/components/AnimatedSection.tsx`
**作用**: 滚动动画包装器

**用法**:
```tsx
<AnimatedSection delay={0.2}>
  <div>内容</div>
</AnimatedSection>
```

**效果**: 元素进入视口时淡入上浮

---

#### `src/components/CountUp.tsx`
**作用**: 数字计数动画

**用法**:
```tsx
<CountUp end={100} suffix="+" duration={2} />
```

**效果**: 数字从0滚动到目标值

---

### 5. 配置文件

#### `tailwind.config.js`
**作用**: Tailwind CSS 配置

**自定义内容**:
- 颜色系统（background、primary、secondary等）
- 字体（display、body）
- 动画（gradient-shift、float、pulse-glow）

**修改场景**: 调整主题颜色、添加新动画

---

#### `index.html`
**作用**: HTML入口文件

**包含**:
- 网站标题
- 字体加载（Google Fonts）
- SEO描述

**修改场景**: 修改网站标题、添加统计代码

---

## 常见修改场景速查

| 想修改什么 | 修改哪个文件 | 具体位置 |
|-----------|------------|---------|
| 团队成员信息 | `src/data/initialData.ts` | `initialTeamMembers` 数组 |
| 作品信息 | `src/data/initialData.ts` | `initialWorks` 数组 |
| 项目信息 | `src/data/initialData.ts` | `initialProjects` 数组 |
| 照片/视频 | `src/data/initialData.ts` | `initialMedia` 数组 |
| 联系邮箱 | `src/pages/AboutPage.tsx` + `src/components/Footer.tsx` | 搜索邮箱地址 |
| 团队介绍 | `src/pages/AboutPage.tsx` | 愿景/使命文字 |
| 网站标题 | `index.html` | `<title>` 标签 |
| 导航项 | `src/components/Navbar.tsx` | `navItems` 数组 |
| 页脚链接 | `src/components/Footer.tsx` | `footerLinks` 数组 |
| 主题颜色 | `tailwind.config.js` | colors 配置 |
| 首页文案 | `src/pages/HomePage.tsx` | 各Section组件内 |

---

## 技术栈说明

| 技术 | 用途 | 学习成本 |
|------|------|---------|
| React | 构建用户界面 | 中等 |
| TypeScript | 类型安全的JavaScript | 中等 |
| Tailwind CSS | 快速样式开发 | 低 |
| Framer Motion | 动画效果 | 低 |
| Zustand | 状态管理 | 低 |
| Vite | 构建工具 | 无需修改 |

---

## 开发命令

```bash
# 启动开发服务器（已运行）
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 类型检查
npm run check
```
