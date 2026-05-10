# Capability: routing

## Overview

基于 vue-router 的 SPA 路由系统，支持多页面导航。

## Routes

| Path | Name | Component | Description |
|------|------|-----------|-------------|
| `/` | home | HomePage | 首页（所有 Section） |
| `/projects/:id` | project-detail | ProjectDetailPage | 项目详情页 |

## Behavior

- 页面切换带 fade 过渡动画（opacity 0.25s）
- 路由变化时自动滚动到顶部 (`scrollBehavior`)
- NavBar 在非首页点击导航链接时：先 push('/') 再 scrollIntoView 到锚点

## Architecture

```
App.vue (router-view)
├── HomePage.vue (main content only)
└── ProjectDetailPage.vue (standalone detail)
```

NavBar / AppFooter / TweaksPanel 在 App.vue 层级渲染，所有路由共享。
