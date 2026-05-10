## Context

当前项目为 Vue 3 + TypeScript 个人博客，使用 Vite 构建，包含以下页面结构：
- 首页（HeroSection）+ 关于（AboutSection）+ 项目列表（ProjectsSection）+ 联系（ContactSection）
- 项目数据存储在 `src/data/projects.ts`，类型定义在 `src/types/index.ts`
- 路由目前为单页应用（SPA），无 Vue Router 动态路由
- 样式系统基于 CSS 变量实现双主题切换

用户点击项目卡片后无法查看详情，需要新增独立详情页展示完整项目信息。

## Goals / Non-Goals

**Goals:**
- 新增 `/projects/:id` 动态路由，支持通过 URL 直接访问任意项目详情
- 详情页展示项目封面大图、图片画廊、视频演示、详细描述、技术栈、外部链接
- 支持图片点击放大预览
- 响应式布局，移动端友好
- 与现有双主题系统无缝集成

**Non-Goals:**
- 不涉及后端 API 或数据库
- 不做项目管理后台（CRUD）
- 不做项目搜索/筛选功能
- 不引入新的重型依赖库（如 Lightbox 插件，用原生实现）

## Decisions

### 1. 路由方案：Vue Router 动态路由
**选择**: 使用 `vue-router` 的动态路由 `/projects/:id`
**理由**: 项目已有 SPA 架构，vue-router 是 Vue 生态标准方案；动态路由支持 SEO 友好的 URL 结构
**备选**: Hash 路由 / 页面内模态弹窗 — 弹窗不适合展示大量内容且不利于分享链接

### 2. 数据模型扩展：在 Project 接口上增量扩展
**选择**: 在现有 `Project` 类型上新增可选字段（gallery、video、fullDescription 等），保持向后兼容
**理由**: 现有卡片只需 title/description/badge/image/tags/links，新增字段均为可选，不影响已有组件
**备选**: 创建独立的 ProjectDetail 类型 — 增加复杂度且数据冗余

### 3. 图片预览：自定义 Lightbox 组件
**选择**: 自建轻量级全屏图片预览组件（CSS + Vue Transition）
**理由**: 避免引入第三方依赖包增大体积；现有项目风格统一；控制力强
**备选**: v-viewer / vue-easy-lightbox — 功能强大但增加 bundle size

### 4. 视频播放：原生 HTML5 `<video>` 标签
**选择**: 使用原生 video 元素，自定义控制栏样式匹配主题
**理由**: 无需额外依赖；浏览器原生性能最优
**备选**: Video.js / Plyr — 功能丰富但对简单演示视频过重

### 5. 页面布局：单列流式布局
**选择**: 从上到下依次排列：封面图 → 标题+标签 → 详细描述 → 图片画廊 → 视频 → 技术栈 → 外部链接 → 返回按钮
**理由**: 信息层级清晰，移动端自然适配；符合博客阅读习惯

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| 项目详情数据量大导致首屏加载慢 | 图片使用 lazy loading；视频按需加载 |
| 移动端图片画廊交互体验 | 支持手势滑动；缩略图导航 |
| 路由参数 id 为字符串类型 | 数据层做 id 匹配校验，404 兜底 |
| 视频文件体积 | 仅嵌入外部视频 URL，不打包本地视频 |
