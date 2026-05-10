## ADDED Requirements

### Requirement: 项目详情页路由
系统 SHALL 提供 `/projects/:id` 动态路由，当用户访问有效项目 ID 时渲染项目详情页。

#### Scenario: 访问有效项目 ID
- **WHEN** 用户访问 `/projects/1`
- **THEN** 系统渲染 ID 为 "1" 的项目的详情页
- **AND** 页面显示该项目的完整信息

#### Scenario: 访问无效项目 ID
- **WHEN** 用户访问 `/projects/999`（不存在的 ID）
- **THEN** 系统显示 404 提示或返回项目列表页

### Requirement: 项目详情页内容展示
系统 SHALL 在详情页展示以下项目信息：封面大图、项目标题、标签、详细描述、图片画廊、视频演示（如有）、技术栈说明、外部链接。

#### Scenario: 完整信息展示
- **WHEN** 用户进入项目详情页
- **THEN** 页面从上到下依次展示：封面大图、标题与标签、详细描述、图片画廊（如有）、视频播放器（如有）、技术栈、操作链接、返回按钮

#### Scenario: 最小化信息展示
- **WHEN** 某个项目无图片画廊和视频数据
- **THEN** 页面跳过对应区块，仅展示有数据的部分

### Requirement: 项目卡片跳转行为
系统 SHALL 使项目列表中的每个卡片可点击，点击后导航至对应的项目详情页。

#### Scenario: 点击项目卡片
- **WHEN** 用户在项目列表页点击某个项目卡片
- **THEN** 系统使用 `router.push` 导航至 `/projects/{该项目ID}`
- **AND** 浏览器地址栏更新为目标 URL

### Requirement: 图片画廊与预览
系统 SHALL 在详情页提供图片画廊展示多张项目截图，并支持点击放大预览。

#### Scenario: 查看图片画廊
- **WHEN** 项目有 gallery 数据（多张图片）
- **THEN** 页面以网格或轮播形式展示所有图片
- **AND** 点击任意图片触发全屏放大预览

#### Scenario: 全屏图片预览
- **WHEN** 用户在全屏预览模式下
- **THEN** 显示遮罩背景 + 居中大图 + 关闭按钮
- **AND** 点击遮罩或关闭按钮退出预览
- **AND** 按 ESC 键可退出预览

### Requirement: 视频演示播放
系统 SHALL 在详情页支持嵌入视频演示（如项目有 video 数据）。

#### Scenario: 播放项目演示视频
- **WHEN** 项目有 video 数据（URL）
- **THEN** 页面渲染 HTML5 video 播放器
- **AND** 播放器样式适配当前主题（暗色/亮色）
- **AND** 支持播放/暂停/全屏等基本控制

### Requirement: 数据模型扩展
系统 SHALL 扩展 Project 类型以支持详情页所需的所有字段，同时保持与现有卡片组件的兼容性。

#### Scenario: 向后兼容的类型扩展
- **WHEN** Project 接口新增 gallery、video、fullDescription、techStack 字段
- **THEN** 所有新字段均为可选（optional）
- **AND** 现有的 ProjectsSection 组件无需修改即可正常运行
