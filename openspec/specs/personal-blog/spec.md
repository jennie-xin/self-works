# Capability: personal-blog

## Overview

个人博客/作品集展示页面，基于 Vue 3 + TypeScript 构建，采用组件化架构，支持暗色/亮色双主题切换。

## Scope

### 页面区域（Sections）

| 区域 | 组件 | 职责 |
|------|------|------|
| 导航栏 | `NavBar.vue` | 固定顶部导航，包含 Logo、导航链接、主题切换、移动端汉堡菜单 |
| 首屏 Hero | `HeroSection.vue` | 个人介绍、头像、角色标签、CTA 按钮 |
| 关于我 | `AboutSection.vue` | 个人简介、时间线经历、技能分类展示 |
| 项目展示 | `ProjectsSection.vue` | 项目卡片网格，点击跳转详情页 |
| 联系我 | `ContactSection.vue` | 邮箱复制、社交链接、EmailJS 表单 |
| 页脚 | `AppFooter.vue` | 版权信息 |
| 设置面板 | `TweaksPanel.vue` | 主题/字号/页面宽度/字体切换 |

## Data Model

- **Project**: 项目数据（标题、描述、封面图、标签、链接、画廊、视频、技术栈）
- **TimelineItem**: 经历时间线（年份、职位、组织、描述）
- **SkillGroup**: 技能分组（前端/后端/工具/AI）
- **SocialLink**: 社交媒体链接
- **SelfInfo**: 个人基本信息
- **NavLink**: 导航链接配置

## Key Behaviors

1. 滚动显示动画（Intersection Observer）
2. 导航栏滚动阴影效果
3. 响应式布局（768px 断点）
4. 双主题变量系统（CSS custom properties）

## Tech Stack

Vue 3 (Composition API) · TypeScript · Vite · vue-router · EmailJS · CSS Variables
