# Cloudflare Pages 部署指南

本项目为纯静态站点，构建产物位于 `dist/`，可部署到 Cloudflare Pages，无需购买服务器。

## 一、本地构建验证

```bash
npm install
npm run build
```

确认 `dist/` 中包含 `index.html` 及各路由目录（`team/`、`works/`、`projects/`、`media/`、`about/`）。

## 二、GitHub 自动部署（推荐）

### 1. 推送代码

```bash
git init
git add .
git commit -m "Initial commit: Dream of Youth site"
git branch -M main
git remote add origin https://github.com/qiufengsir/prism-mlb.git
git push -u origin main
```

### 2. 创建 Cloudflare Pages 项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. **Workers & Pages → Create → Pages → Connect to Git**
3. 选择 GitHub 仓库 **`qiufengsir/prism-mlb`**
4. 构建配置：

| 配置项 | 值 |
|--------|-----|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| **Deploy command** | `npx wrangler deploy` |
| Environment variable | `NODE_VERSION=22` |

> **说明**：新版 Cloudflare 若 **Deploy command 为必填**，应填写 `npx wrangler deploy`（不是 `wrangler pages deploy`）。项目根目录的 [`wrangler.toml`](../wrangler.toml) 已配置 `[assets] directory = "./dist"`，构建完成后 Wrangler 会上传静态文件。Wrangler 4 要求 **Node.js 22+**，请在环境变量中设置 `NODE_VERSION=22`（不影响 Vite/React 代码）。

5. **Save and Deploy**，通过 `xxx.pages.dev` 预览

### 构建失败排查

**错误：`Wrangler requires at least Node.js v22.0.0`**

- 在 Pages → **Settings** → **Environment variables** 添加 `NODE_VERSION` = `22`
- Deploy command 保持 `npx wrangler deploy`
- 重新部署

**错误：Deploy command 使用了错误的命令**

- 不要用 `npx wrangler pages deploy`（旧版 Pages CLI）
- 必填时应使用 `npx wrangler deploy`，并确保仓库内 `wrangler.toml` 含 `[assets]` 配置

## 三、绑定域名 prism-mlb.top

### 方案 A（推荐）：DNS 托管到 Cloudflare

1. Cloudflare 添加站点 `prism-mlb.top`（Free 计划）
2. 将阿里云域名 DNS 服务器改为 Cloudflare 提供的 NS
3. Pages 项目 → **Custom domains** → 添加 `prism-mlb.top` 和 `www.prism-mlb.top`
4. 等待 SSL 证书自动签发

### 方案 B：DNS 留在阿里云

1. Pages → Custom domains → 添加 `www.prism-mlb.top`
2. 阿里云 DNS 添加 CNAME：`www` → Cloudflare Pages 目标地址
3. 根域可 CNAME/ALIAS 或 301 跳转到 `www`

## 四、备选：Wrangler 直传（无需 GitHub）

```bash
npm run build
npx wrangler deploy
```

首次运行需登录 Cloudflare。部署后在 Dashboard 绑定自定义域名。

## 五、部署后检查

- [ ] `https://prism-mlb.top/` 可访问
- [ ] `/team`、`/works`、`/projects`、`/media`、`/about` 均可直接访问
- [ ] HTTPS 正常
- [ ] `/sitemap.xml`、`/robots.txt` 可访问

## 六、后续更新

修改代码后 `git push`，Cloudflare 自动重新构建（约 1~3 分钟）。

正式内容请写入 `src/data/initialData.ts` 后再部署（LocalStorage 数据不会随部署同步）。
