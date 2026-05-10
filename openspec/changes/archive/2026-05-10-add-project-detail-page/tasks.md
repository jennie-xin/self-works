## 1. 数据模型与路由基础

- [ ] 1.1 扩展 `src/types/index.ts` 中 Project 接口，新增可选字段：`gallery?`（图片数组）、`video?`（视频URL）、`fullDescription?`（详细描述）、`techStack?`（技术栈详情）
- [ ] 1.2 安装并配置 vue-router（如尚未安装），在 `src/router/index.ts` 创建路由实例
- [ ] 1.3 新增 `/projects/:id` 动态路由，映射到 ProjectDetailPage 组件

## 2. 项目详情数据准备

- [ ] 2.1 扩展 `src/data/projects.ts`，为每个项目补充 gallery、fullDescription、techStack 等详情数据
- [ ] 2.2 为部分项目添加 video 字段（演示视频 URL）
- [ ] 2.3 确保新增字段均为可选，不影响现有卡片展示

## 3. 项目详情页组件

- [ ] 3.1 创建 `src/components/ProjectDetailPage.vue`，实现页面整体布局（封面图 → 标题标签 → 描述 → 画廊 → 视频 → 技术栈 → 链接）
- [ ] 3.2 实现通过 route params 获取项目 ID，从 projects 数据中查找对应项目
- [ ] 3.3 实现 404 兜底逻辑：ID 不存在时显示提示并提供返回链接

## 4. 图片画廊与预览功能

- [ ] 4.1 创建 `src/components/ImageLightbox.vue` 全屏图片预览组件（遮罩 + 居中大图 + 关闭按钮 + ESC 键关闭）
- [ ] 4.2 在详情页中实现图片画廊网格布局展示 gallery 数据
- [ ] 4.3 点击画廊图片触发 ImageLightbox 预览，支持点击遮罩/关闭按钮/ESC 退出

## 5. 视频播放器

- [ ] 5.1 在详情页中使用 HTML5 `<video>` 标签渲染 video 字段数据
- [ ] 5.2 自定义播放器控件样式，适配暗色/亮色双主题

## 6. 项目列表跳转集成

- [ ] 6.1 修改 `src/components/ProjectsSection.vue`，为项目卡片添加点击事件，使用 router.push 跳转至 `/projects/:id`
- [ ] 6.2 为卡片添加 cursor: pointer 样式提示可点击

## 7. 样式与响应式

- [ ] 7.1 在 `src/style.css` 中新增详情页相关样式（封面大图、画廊网格、视频容器、技术栈展示等）
- [ ] 7.2 确保详情页在移动端（768px以下）和桌面端的响应式布局正确
- [ ] 7.3 所有样式支持双主题变量（暗色/亮色）

## 8. 入口集成与验证

- [ ] 8.1 在 `App.vue` 或主入口文件中挂载 router-view
- [ ] 8.2 手动测试：点击项目卡片 → 跳转详情页 → 查看完整信息 → 图片预览 → 返回列表
- [ ] 8.3 验证无效 ID 的 404 处理、移动端响应式、双主题切换正常
