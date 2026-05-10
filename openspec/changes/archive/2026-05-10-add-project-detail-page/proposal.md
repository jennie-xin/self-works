## Why

当前项目列表页（ProjectsSection）仅以卡片形式展示项目摘要信息（标题、描述、标签、封面图），用户无法查看项目的完整详情。点击卡片无跳转行为，缺少项目详情展示能力。需要新增项目详情页，让访问者能深入了解单个项目的完整信息，包括多张图片、视频演示、技术细节等。

## What Changes

- **新增** 项目详情页路由 `/projects/:id`，支持通过 URL 直接访问
- **新增** ProjectDetailPage 组件，展示项目完整信息
- **修改** ProjectsSection 中的项目卡片增加点击跳转行为
- **扩展** Project 类型定义，增加详情页所需字段（图片集、视频、详细描述、技术栈等）
- **扩展** projects.ts 数据文件，为每个项目补充详情数据

## Capabilities

### New Capabilities
- `project-detail`: 项目详情页能力，涵盖路由、组件、数据模型及页面交互

### Modified Capabilities
（无现有 spec 需求变更）

## Impact

- **路由**: 新增 Vue Router 动态路由 `/projects/:id`
- **组件**: 新增 `ProjectDetailPage.vue`，修改 `ProjectsSection.vue` 卡片点击行为
- **类型**: 扩展 `Project` 接口，新增 `gallery`（图片集）、`video`（视频）、`fullDescription`（详细描述）、`techStack`（技术栈详情）等字段
- **数据**: `src/data/projects.ts` 需要补充每个项目的详情数据
- **样式**: 新增详情页样式（图片画廊、视频播放器、响应式布局）
- **依赖**: 无新增外部依赖，使用 Vue Router（已有）+ 原生 HTML5 video
