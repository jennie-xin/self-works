# Code Review: self-works — 项目详情页 + 路由系统

> **Review Date**: 2026-05-10
> **Branch**: `main`
> **Scope**: 全量变更（项目详情页、vue-router 集成、双主题、EmailJS、OpenSpec 规范）

---

## 📊 变更概览

| 类别 | 文件数 | 新增行 | 删除行 | 说明 |
|------|--------|--------|--------|------|
| 新增文件 | 8 | ~600 | — | router、views、ProjectDetailPage、ImageLightbox、openspec 规范 |
| 修改文件 | 14 | ~550 | ~1700 | App.vue 重构、NavBar 导航修复、样式扩展、数据补充 |
| 删除文件 | 9 | — | ~1700 | public/doc/ 下参考文件清理 |

**净效果**: +1150 / -3400（主要来自删除 doc 参考资源）

---

## ✅ 亮点与良好实践

### 1. 架构设计
- **SPA 路由拆分**：`App.vue` → `router-view` + `HomePage.vue`，布局层与内容层分离清晰
- **类型安全**：`Project` 接口增量扩展，所有新字段均为可选 (`?`)，向后兼容无破坏
- **组件职责单一**：`ImageLightbox.vue` 独立封装，可复用；`ProjectDetailPage.vue` 只负责数据组装与布局

### 2. 用户体验
- **Lightbox 交互完善**：遮罩关闭 + ESC 关闭 + body 滚动锁定（`watch` 监听 visible）
- **路由导航智能**：详情页点击 NavBar 链接 → 先 push('/') 再 scrollIntoView 到锚点
- **页面过渡动画**：`<transition mode="out-in">` fade 效果，体验流畅
- **404 兜底**：无效 ID 显示友好提示 + 返回按钮

### 3. 工程规范
- **OpenSpec 完整流程**：proposal → design → specs → tasks → archive，规范驱动开发
- **懒加载路由**：`() => import()` 动态导入，首屏不加载详情页代码
- **CSS 变量体系**：所有新增样式使用 `var(--xxx)` 双主题变量，暗色/亮色一致

---

## ⚠️ 问题与建议

### P0 — 需要关注

| # | 文件 | 问题 | 建议 |
|---|------|------|------|
| 1 | [useTheme.ts](src/composables/useTheme.ts#L6) | `localStorage.getItem('theme') as Theme` 类型断言不安全，存储值可能被篡改为非 'dark'\|'light' 值 | 添加校验：`const stored = localStorage.getItem('theme'); const theme = ref<Theme>(stored === 'dark' || stored === 'light' ? stored : 'dark')` |
| 2 | [email.ts](src/utils/email.ts#L5-L7) | 环境变量 fallback 为占位符 `'YOUR_XXX_ID'`，生产环境若未配置会静默发送失败 | 启动时或发送前校验是否为默认值，给出明确警告 |

### P1 — 建议优化

| # | 文件 | 问题 | 建议 |
|---|------|------|------|
| 3 | [ProjectDetailPage.vue](src/components/ProjectDetailPage.vue#L22-L23) | `projects.find()` 使用字符串比较 `route.params.id`，params 类型是 `string\|string[]` | 显式转为 string：`String(route.params.id)` 或在路由配置中约束 |
| 4 | [HomePage.vue](src/views/HomePage.vue#L27-L39) | 滚动监听和 IntersectionObserver 在 `onMounted` 中直接操作 DOM，且未在 `onUnmounted` 中清理 | 将 observer 和 scroll listener 提取到 composable（如 `useScrollReveal` 已存在但未在此处复用），确保内存不泄漏 |
| 5 | [router/index.ts](src/router/index.ts) | 缺少 404 catch-all 路由，访问 `/any-random-path` 会显示空白页 | 添加 `{ path: '/:pathMatch(.*)*', redirect: '/' }` 或渲染 NotFound 组件 |
| 6 | [style.css](src/style.css) | 单文件 1600+ 行，包含全局样式 + 所有组件样式 + 详情页样式 + 响应式 + 主题变量 | 考虑按组件拆分 CSS 或使用 Vue SFC `<style scoped>` 迁移组件级样式 |

### P2 — 锦上添花

| # | 文件 | 问题 | 建议 |
|---|------|------|------|
| 7 | [ImageLightbox.vue](src/components/ImageLightbox.vue) | 不支持左右切换多图（当前只能看单张） | 可扩展支持 gallery 模式，左右箭头切换 |
| 8 | [projects.ts](src/data/projects.ts) | 图片 URL 全部使用 Unsplash 外链，依赖第三方服务可用性 | 关键图片下载到 `public/project/` 目录本地托管（如 AS 封面已做） |
| 9 | [NavBar.vue](src/components/NavBar.vue#L20-L33) | `navigateTo` 中 `setTimeout(..., 100)` 是硬编码魔法数字 | 改用 `nextTick` 或等待路由过渡完成后再滚动 |
| 10 | [tsconfig.app.json](tsconfig.app.json) | `ignoreDeprecations: "6.0"` 是临时方案，TypeScript 7.0 后将失效 | 关注 TS 升级，适时迁移到推荐写法（如改用 paths-only 配置） |

---

## 🔍 安全检查

| 检查项 | 状态 | 说明 |
|--------|------|------|
| XSS 风险 | ✅ 安全 | 用户输入仅通过 EmailJS 发送，不做 DOM innerHTML 渲染 |
| 外部链接 | ✅ 安全 | 所有外部链接带 `rel="noopener noreferrer"` |
| 环境变量 | ⚠️ 注意 | EmailJS key 通过 `.env` 注入，需确保 `.env` 在 `.gitignore` 中 |
| 图片来源 | ℹ️ 信息 | Unsplash 外链图片无 CSP 限制风险，但存在可用性依赖 |

---

## 📁 文件结构总览

```
src/
├── main.ts                    # 入口，挂载 router
├── App.vue                    # 布局壳：NavBar + router-view + Footer + TweaksPanel
├── style.css                  # 全局样式 (~1600 行)
├── types/index.ts             # 类型定义 (Project 扩展)
├── router/index.ts            # vue-router 配置 (2 条路由)
├── views/
│   └── HomePage.vue           # 首页视图 (纯内容区)
├── components/
│   ├── NavBar.vue             # 导航栏 (router-aware 导航)
│   ├── HeroSection.vue        # 首屏介绍
│   ├── AboutSection.vue       # 关于我 + 时间线 + 技能
│   ├── ProjectsSection.vue    # 项目卡片网格 (可点击跳转)
│   ├── ContactSection.vue     # 联系表单 (EmailJS)
│   ├── ProjectDetailPage.vue  # 项目详情页 (画廊+视频+技术栈)
│   ├── ImageLightbox.vue      # 全屏图片预览
│   ├── AppFooter.vue          # 页脚
│   └── TweaksPanel.vue        # 设置悬浮面板
├── composables/
│   ├── useTheme.ts            # 主题切换
│   └── useScrollReveal.ts     # 滚动显示动画
├── data/
│   ├── projects.ts            # 项目数据 (含详情字段)
│   ├── self.ts                # 个人信息
│   ├── skills.ts              # 技能分组
│   ├── navs.ts                # 导航链接
│   ├── socialLinks.ts         # 社交媒体
│   └── background.ts          # 背景配置
└── utils/
    └── email.ts               # EmailJS 封装

openspec/
├── specs/
│   ├── personal-blog/         # 博客主体规范
│   ├── theme-system/          # 主题系统规范
│   ├── contact-email/         # 邮件功能规范
│   ├── ui-tweaks/             # 设置面板规范
│   ├── routing/               # 路由系统规范
│   └── project-detail/        # 项目详情规范
└── changes/archive/
    └── 2026-05-10-add-project-detail-page/  # 已归档变更
```

---

## 🎯 总结评价

| 维度 | 评分 | 说明 |
|------|------|------|
| **功能完整性** | ★★★★☆ | 详情页核心功能齐全（画廊/视频/技术栈/Lightbox/404），缺 catch-all 路由 |
| **代码质量** | ★★★★☆ | TypeScript 类型安全、Vue 3 Composition API 规范、组件拆分合理 |
| **架构设计** | ★★★★☆ | SPA 路由架构清晰，布局层与内容层分离，OpenSpec 规范驱动 |
| **可维护性** | ★★★☆☆ | CSS 单文件偏大、DOM 操作散落在多个 onMounted 中、建议提取 composables |
| **安全性** | ★★★★☆ | 无明显安全漏洞，注意 .env 文件不入库 |

**总体**: 代码质量良好，架构合理，可以作为稳定版本提交。P0/P1 建议可在后续迭代中逐步优化。
