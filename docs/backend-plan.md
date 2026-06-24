# Dream of Youth 后端扩展方案

本文档说明当前纯前端架构的局限性，以及后续添加后端支持的方案。

## 当前架构的局限性

### 1. 数据存储问题
- 数据保存在浏览器 LocalStorage 中
- 不同设备/浏览器数据不互通
- 清除浏览器数据会丢失所有内容
- 无法做数据备份和恢复

### 2. 文件上传问题
- 无法直接上传图片/视频到服务器
- 只能使用外部图片链接（图床、CDN）
- 视频必须托管在第三方平台（B站、YouTube等）
- 无法管理文件（删除、替换）

### 3. 多用户问题
- 没有用户系统
- 无法区分管理员和普通访客
- 任何人都可以添加/删除内容（当前设计）

### 4. 性能问题
- 大量图片/视频加载慢
- 没有CDN加速
- 首屏加载时间较长

---

## 后端扩展方案

### 方案一：轻量级方案（推荐作为第一步）

**技术栈**: Node.js + Express + SQLite + 本地文件存储

**适用场景**: 团队内部使用，访问量不大

**架构**:
```
前端 (React)  <--API-->  后端 (Express)  <--->  SQLite数据库
                              |
                              v
                         本地文件系统 (图片/视频)
```

**实现内容**:
1. **REST API** - 提供数据增删改查接口
2. **文件上传** - 支持图片/视频上传到服务器
3. **SQLite数据库** - 存储团队、作品、项目、媒体数据
4. **简单认证** - 管理员登录（防止随意修改）

**优点**:
- 部署简单，成本低
- 数据持久化存储
- 支持文件上传

**缺点**:
- 单点部署，无法扩展
- 需要服务器运行

---

### 方案二：云服务方案（推荐用于生产环境）

**技术栈**: Node.js + Express + PostgreSQL + 阿里云OSS

**适用场景**: 正式对外发布，需要高可用

**架构**:
```
前端 (React)  <--API-->  后端 (Express)  <--->  阿里云RDS (PostgreSQL)
    |                         |
    v                         v
阿里云CDN              阿里云OSS (文件存储)
```

**实现内容**:
1. **REST API** - 数据接口
2. **阿里云OSS** - 图片/视频云存储
3. **阿里云RDS** - 云数据库
4. **阿里云CDN** - 静态资源加速
5. **JWT认证** - 安全的用户认证

**优点**:
- 高可用、可扩展
- 文件存储可靠
- 访问速度快（CDN）

**缺点**:
- 有一定云服务成本
- 配置相对复杂

---

### 方案三：Serverless方案（推荐成本敏感型）

**技术栈**: 阿里云函数计算 + 阿里云表格存储 + 阿里云OSS

**适用场景**: 访问量波动大，希望按需付费

**架构**:
```
前端 (React)  <--API-->  阿里云函数计算 (Node.js)
                              |
                              v
                    阿里云表格存储 (NoSQL)
                              |
                              v
                         阿里云OSS
```

**优点**:
- 按需付费，成本低
- 自动扩缩容
- 无需维护服务器

**缺点**:
- 有冷启动延迟
- 开发调试相对复杂

---

## 推荐演进路线

### 第一阶段：当前状态（已完成）
- 纯前端静态网站
- LocalStorage 存储数据
- 部署到阿里云OSS

### 第二阶段：添加后端API（建议下一步）
**目标**: 解决数据持久化和文件上传问题

**需要开发**:
1. 后端API服务（Express）
2. 数据库（SQLite/PostgreSQL）
3. 文件上传接口
4. 管理后台页面

**数据表设计**:
```sql
-- 团队成员表
CREATE TABLE team_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(100),
  avatar_url VARCHAR(500),
  bio TEXT,
  skills JSON,
  social_links JSON,
  join_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 作品表
CREATE TABLE works (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(200) NOT NULL,
  category VARCHAR(50),
  cover_url VARCHAR(500),
  images JSON,
  description TEXT,
  author VARCHAR(100),
  date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 项目表
CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(200) NOT NULL,
  cover_url VARCHAR(500),
  description TEXT,
  tech_stack JSON,
  members JSON,
  project_link VARCHAR(500),
  date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 媒体表
CREATE TABLE media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(20) NOT NULL,  -- 'photo' or 'video'
  url VARCHAR(500) NOT NULL,
  thumbnail_url VARCHAR(500),
  title VARCHAR(200),
  date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 管理员表（简单认证）
CREATE TABLE admins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**API接口设计**:
```
GET    /api/team          获取团队成员列表
POST   /api/team          添加团队成员
DELETE /api/team/:id      删除团队成员

GET    /api/works         获取作品列表
POST   /api/works         添加作品
DELETE /api/works/:id     删除作品

GET    /api/projects      获取项目列表
POST   /api/projects      添加项目
DELETE /api/projects/:id  删除项目

GET    /api/media         获取媒体列表
POST   /api/media         添加媒体
DELETE /api/media/:id     删除媒体

POST   /api/upload        上传文件
POST   /api/login         管理员登录
```

### 第三阶段：完善功能
- 富文本编辑器（作品/项目描述）
- 图片压缩和缩略图生成
- 视频转码
- 数据统计分析
- SEO优化

### 第四阶段：高级功能
- 多语言支持
- 评论系统
- 访客统计
- 内容审核

---

## 部署架构建议

### 方案A：单服务器部署（低成本）
```
阿里云ECS（1核2G）
  ├── Nginx（反向代理 + 静态文件）
  ├── Node.js API服务
  ├── SQLite数据库
  └── 本地文件存储
```

**预估成本**: 约 50-100元/月

---

### 方案B：分离部署（推荐）
```
阿里云OSS + CDN  <-- 前端静态文件
阿里云ECS（1核2G） <-- Node.js API服务
阿里云RDS          <-- PostgreSQL数据库
阿里云OSS          <-- 图片/视频文件存储
```

**预估成本**: 约 100-200元/月（根据流量）

---

## 视频上传方案详解

### 当前方案（无后端）
1. 视频上传到B站/YouTube
2. 获取视频直链或嵌入代码
3. 将链接填入 `initialData.ts`

### 有后端后的方案

**方案1：直接上传服务器**
- 前端通过API上传视频文件
- 后端保存到服务器磁盘
- 通过URL访问视频
- **限制**: 服务器带宽和存储有限

**方案2：阿里云OSS存储**（推荐）
- 前端直传视频到阿里云OSS
- 后端生成临时上传凭证
- 视频通过CDN加速访问
- **优点**: 无限扩展、速度快、成本低

**方案3：阿里云视频点播**
- 使用阿里云视频点播服务
- 自动转码（多清晰度）
- 播放器SDK
- **优点**: 专业视频处理
- **缺点**: 成本较高

---

## 下一步行动建议

如果你准备添加后端，我建议按以下顺序进行：

1. **确定需求**
   - 是否需要用户登录？
   - 视频上传频率和大小？
   - 预算范围？

2. **选择方案**
   - 初期：方案一（Express + SQLite）
   - 正式：方案二（云服务）

3. **我可以帮你**
   - 搭建Express后端框架
   - 设计数据库表结构
   - 实现REST API
   - 对接阿里云OSS上传
   - 修改前端代码调用API

需要我开始实现后端吗？
