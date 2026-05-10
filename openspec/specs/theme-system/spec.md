# Capability: theme-system

## Overview

全局双主题系统，支持暗色（dark）与亮色（light）模式切换，通过 CSS 自定义属性实现运行时主题切换。

## Implementation

- **Composable**: `useTheme.ts` — 封装主题切换逻辑，读写 `[data-theme]` 属性
- **CSS 变量**: 定义在 `:root` 的 `[data-theme="dark"]` 和 `[data-theme="light"]` 选择器中
- **持久化**: 使用 localStorage 存储用户偏好
- **触发入口**: NavBar 中的主题切换按钮 + TweaksPanel 设置面板

## Theme Tokens

| Token 类别 | 暗色示例 | 亮色示例 |
|-----------|---------|---------|
| 背景 | `#0a0e1a` | `#f5f0e6` |
| 表面 | `#1a2235` | `#ffffff` |
| 边框 | `#2d3748` | `#e5ddd0` |
| 主文字 | `#f1f5f9` | `#1a1814` |
| 次文字 | `#94a3b8` | `#7a7165` |

## Customization Dimensions

- 字体大小：compact / default / comfortable
- 页面宽度：default / narrow / wide
- 字体族：default / mono / serif
