## Why

项目详情页的图片画廊存在显示问题：当前使用固定的 `aspect-ratio: 16/10` 和 `object-fit: cover` 样式，导致竖屏（ portrait ）照片被严重裁剪，无法完整展示；而横屏（landscape）照片可以正常显示。这影响了用户查看项目截图的体验，特别是移动端应用等竖屏截图为主的场景。

## What Changes

- 优化图片画廊布局，支持自适应不同比例的图片（竖屏、横屏、方形）
- 移除固定宽高比限制，改用更灵活的展示方式
- 确保所有图片都能完整显示，不被裁剪
- 保持视觉美观性和响应式设计
- 保留现有的 lightbox 点击放大功能

## Capabilities

### New Capabilities
- `responsive-gallery`: 自适应图片画廊组件，能够根据图片实际比例动态调整展示方式，确保竖屏和横屏照片都能完整显示

### Modified Capabilities
（无现有能力需要修改）

## Impact

- **受影响代码**：
  - `src/components/ProjectDetailPage.vue` - 图片画廊模板结构
  - `src/style.css` - `.gallery-grid`、`.gallery-item` 及相关样式（约第1366-1413行）
- **用户体验**：提升项目详情页图片浏览体验，特别是移动应用类项目的竖屏截图展示
- **兼容性**：需确保在不同屏幕尺寸下都能正常显示（响应式适配）
- **无API变更**：纯前端样式和结构优化，不影响数据结构和后端接口
