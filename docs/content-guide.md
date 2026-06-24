# Dream of Youth 网站内容修改指南

本文档指导你如何修改网站内容，将虚拟示例数据替换为你的真实团队信息。

## 快速定位：需要修改的文件

| 内容类型 | 文件路径 | 说明 |
|---------|---------|------|
| 团队成员 | `src/data/initialData.ts` | 名片名称、头像、职位、简介 |
| 作品 | `src/data/initialData.ts` | 作品标题、图片、描述 |
| 项目 | `src/data/initialData.ts` | 项目名称、技术栈、成员 |
| 媒体 | `src/data/initialData.ts` | 照片和视频链接 |
| 联系邮箱 | `src/pages/AboutPage.tsx` | 已改为 15196771992@139.com |
| 页脚邮箱 | `src/components/Footer.tsx` | 已改为 15196771992@139.com |
| 网站标题 | `index.html` | 浏览器标签页标题 |
| 团队介绍 | `src/pages/AboutPage.tsx` | 愿景、使命、价值观 |

---

## 1. 修改团队成员名片

**文件**: `src/data/initialData.ts`

找到 `initialTeamMembers` 数组，每个成员对象格式如下：

```typescript
{
  id: "1",                          // 唯一标识，不要重复
  name: "林晓梦",                    // 姓名（改成真实姓名）
  role: "创始人 & 创意总监",          // 职位
  avatar: "https://...",            // 头像图片URL
  bio: "热爱设计与创新...",          // 个人简介
  skills: ["品牌设计", "UI/UX"],     // 技能标签数组
  social: {
    github: "https://github.com/xxx", // GitHub链接（可选）
    email: "xxx@email.com",          // 邮箱（可选）
    website: "https://xxx.com"       // 个人网站（可选）
  },
  joinDate: "2023-01-15"            // 加入日期
}
```

### 头像图片获取方式：

**方式A - 使用网络图片链接**（最简单）
```typescript
avatar: "https://your-image-url.com/photo.jpg"
```

**方式B - 使用本地图片**（推荐）
1. 将头像图片放入 `public/images/` 目录
2. 引用路径：`"/images/avatar1.jpg"`

**方式C - 自动生成头像**（无图片时）
- 留空 avatar 字段，系统会根据姓名自动生成彩色头像

---

## 2. 修改作品集

**文件**: `src/data/initialData.ts`

找到 `initialWorks` 数组：

```typescript
{
  id: "1",
  title: "品牌视觉识别系统",          // 作品标题
  category: "设计",                  // 分类：设计/摄影/视频/其他
  cover: "https://...",              // 封面图片
  images: ["https://..."],           // 作品图片数组（可选多张）
  description: "为科技初创公司...",   // 作品描述
  author: "林晓梦",                  // 创作者姓名
  date: "2024-01-15"                // 创作日期
}
```

### 图片获取方式：

**使用本地图片**（推荐）
1. 将作品图片放入 `public/images/works/` 目录
2. 引用路径：`"/images/works/project1.jpg"`

**使用图床链接**
- 阿里云OSS、七牛云、GitHub图床等
- 直接粘贴图片URL

---

## 3. 修改项目集

**文件**: `src/data/initialData.ts`

找到 `initialProjects` 数组：

```typescript
{
  id: "1",
  title: "智能办公平台",              // 项目名称
  cover: "https://...",              // 项目封面图
  description: "基于AI技术...",       // 项目简介
  techStack: ["React", "Node.js"],   // 技术栈标签数组
  members: ["陈逸风", "张远航"],      // 参与成员姓名数组
  link: "https://github.com/...",    // 项目链接（GitHub/演示地址）
  date: "2024-01-10"                // 项目时间
}
```

---

## 4. 修改媒体库

**文件**: `src/data/initialData.ts`

找到 `initialMedia` 数组：

### 照片类型
```typescript
{
  id: "1",
  type: "photo",
  url: "https://...",                // 大图URL（点击后查看）
  thumbnail: "https://...",          // 缩略图URL（列表展示）
  title: "团队协作",                 // 照片标题
  date: "2024-01-20"                // 拍摄日期
}
```

### 视频类型
```typescript
{
  id: "6",
  type: "video",
  url: "https://...",                // 视频文件URL
  thumbnail: "https://...",          // 视频封面图
  title: "团队介绍视频",              // 视频标题
  date: "2024-03-01"
}
```

### 视频存储建议：

**当前方案**（无后端）：
- 视频上传到第三方平台（B站、YouTube、阿里云视频点播）
- 获取视频直链填入 `url` 字段

**后续扩展**（有后端后）：
- 可直接上传到服务器存储

---

## 5. 修改关于我们页面

**文件**: `src/pages/AboutPage.tsx`

### 修改团队介绍文字
找到以下部分，修改为你团队的实际介绍：

```tsx
<p className="text-textSecondary max-w-2xl mx-auto text-lg leading-relaxed">
  Dream of Youth 诞生于对创意的热爱...  // 改成你的团队故事
</p>
```

### 修改愿景和使命
找到两个 `glass-card` 区块内的文字内容，替换为真实内容。

### 修改价值观
找到 `values` 数组（文件顶部）：

```typescript
const values = [
  {
    icon: Target,
    title: "追求卓越",                // 价值观标题
    description: "不满足于平庸...",    // 描述
    ...
  },
  // 可以添加或删除价值观条目
];
```

---

## 6. 修改网站基本信息

### 网站标题（浏览器标签）
**文件**: `index.html`

```html
<title>Dream of Youth - 青春梦想团队</title>
<meta name="description" content="网站描述..." />
```

### 页脚版权信息
**文件**: `src/components/Footer.tsx`

找到底部版权文字进行修改。

---

## 7. 添加新内容的方式

除了直接修改代码，网站也支持通过界面添加内容：

### 添加团队成员
1. 打开"团队名片"页面
2. 点击右下角 **+** 按钮
3. 填写表单提交

### 添加作品/项目/媒体
目前需要通过修改 `initialData.ts` 文件添加，后续后端完成后可通过管理后台添加。

---

## 8. 图片资源管理建议

### 目录结构
```
public/
  images/
    team/          # 团队成员头像
    works/         # 作品集图片
    projects/      # 项目封面图
    media/         # 媒体库照片
    videos/        # 本地视频文件（如有）
```

### 图片尺寸建议
| 用途 | 建议尺寸 | 格式 |
|------|---------|------|
| 头像 | 400x400 | JPG/PNG |
| 作品封面 | 800x600 | JPG/WEBP |
| 项目封面 | 800x600 | JPG/WEBP |
| 照片墙 | 1200x800 | JPG |
| 视频封面 | 800x450 | JPG |

---

## 9. 修改后生效

开发服务器运行中（`npm run dev`），保存文件后浏览器会自动刷新。

如需正式部署，执行：
```bash
npm run build
```
然后将 `dist` 目录内容上传到阿里云OSS。
