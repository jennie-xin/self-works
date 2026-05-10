# Capability: ui-tweaks

## Overview

悬浮设置面板，允许用户在运行时自定义页面的视觉表现。

## Component: TweaksPanel.vue

### 功能模块

| 模块 | 选项 | 作用 |
|------|------|------|
| 主题切换 | 🌙 / ☀️ | 暗色 ↔ 亮色 |
| 字号调节 | 紧凑 / 默认 / 舒适 | 全局 font-size 缩放 |
| 页面宽度 | 默认 / 窄 / 宽 | .container max-width 调整 |
| 字体族 | 默认 / 等宽 / 衬线 | body font-family 切换 |

### Interaction

- 点击浮动按钮展开/收起弹窗
- 点击弹窗外部区域关闭
- 所有变更通过 `[data-*]` 属性驱动 CSS 变量切换
