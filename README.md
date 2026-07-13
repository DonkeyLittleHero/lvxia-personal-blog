# 驴驴小侠个人博客

一个可直接部署到 GitHub Pages 的 Astro 静态博客。视觉融合了深色极光粒子背景、发光球体，以及带鼠标倾斜和流动高光的液态玻璃卡片。

## 已有功能

- 响应式首页、文章、项目、关于与 404 页面
- Markdown 文章系统与草稿开关
- 文章搜索、分类筛选、阅读时长与代码复制
- 深色 / 浅色主题切换
- 鼠标视差粒子背景、液态卡片倾斜、滚动揭示
- SEO、Open Graph、站点地图、RSS、PWA manifest
- Giscus 评论入口（默认关闭，填写参数后启用）
- GitHub Actions 自动部署到 GitHub Pages
- `prefers-reduced-motion` 动画无障碍适配

## 本地运行

需要 Node.js 22 或更新版本。

```bash
npm install
npm run dev
```

打开终端显示的本地地址。提交前运行：

```bash
npm run build
```

## 修改成你自己的信息

主要信息集中在 `src/config.ts`：

- 网站名、标题和简介
- 首页主标题与描述
- GitHub、Bilibili、邮箱链接
- Giscus 评论参数

项目卡片在 `src/data/projects.ts` 中维护。

## 新增文章

在 `src/content/blog/` 新建 `.md` 文件：

```md
---
title: "文章标题"
description: "文章摘要"
publishedAt: 2026-07-13
category: "AI创作"
tags: ["标签一", "标签二"]
featured: false
draft: false
accent: cyan
---

从这里开始写正文。
```

分类只能使用：`B站投放`、`电商运营`、`AI创作`、`编程手记`。`accent` 可使用 `cyan`、`violet`、`amber`、`mint`。

## 发布到 GitHub Pages

1. 在 GitHub 新建空仓库，例如 `lvxia-personal-blog`。
2. 将本项目全部文件提交到仓库的 `main` 分支。
3. 进入仓库 `Settings → Pages`。
4. 在 `Build and deployment` 的 Source 中选择 `GitHub Actions`。
5. 打开 Actions，等待 `Deploy to GitHub Pages` 完成。

配置会自动识别仓库名：

- 普通项目仓库：发布为 `https://用户名.github.io/仓库名/`
- 名为 `用户名.github.io` 的仓库：发布为 `https://用户名.github.io/`

如需自定义域名或覆盖自动识别，可在 Actions 环境中设置：

- `SITE_URL`：例如 `https://example.com`
- `BASE_PATH`：独立域名通常设为 `/`

## 开启评论

1. 在 GitHub 仓库开启 Discussions。
2. 安装并配置 [Giscus](https://giscus.app/zh-CN)。
3. 把生成的 `repo`、`repoId`、`categoryId` 填入 `src/config.ts`，并把 `enabled` 改为 `true`。

## 交给 Codex 的发布提示词

```text
请检查这个 Astro 博客项目，先运行 npm ci 和 npm run build，修复所有构建错误。
然后在我的 GitHub 账号中新建仓库 lvxia-personal-blog，将当前项目提交到 main 分支，
确认 Settings → Pages 使用 GitHub Actions，并等待 Deploy to GitHub Pages 工作流成功。
最后把公网网址、仓库网址和本次发布的 commit 告诉我。不要改写现有文章内容与视觉设计。
```
