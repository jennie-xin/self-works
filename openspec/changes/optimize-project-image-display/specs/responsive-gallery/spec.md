## ADDED Requirements

### Requirement: 自适应图片展示
图片画廊组件 SHALL 根据图片的实际比例自适应调整显示方式，确保竖屏（portrait）、横屏（landscape）和方形（square）图片都能完整显示，不被裁剪。

#### Scenario: 竖屏图片完整显示
- **WHEN** 画廊中包含竖屏比例的图片（如 9:16 或 3:4）
- **THEN** 图片 SHALL 完整显示，包括顶部和底部内容，无任何裁剪

#### Scenario: 横屏图片完整显示
- **WHEN** 画廊中包含横屏比例的图片（如 16:9 或 4:3）
- **THEN** 图片 SHALL 完整显示，包括左侧和右侧内容，无任何裁剪

#### Scenario: 方形图片正常显示
- **WHEN** 画廊中包含方形比例的图片（如 1:1）
- **THEN** 图片 SHALL 完整填充容器或居中显示

### Requirement: 统一的容器比例
图片画廊中的每个图片项 SHALL 使用统一的容器宽高比，确保网格布局整齐美观。

#### Scenario: 使用正方形容器
- **WHEN** 渲染图片网格时
- **THEN** 每个 `.gallery-item` SHALL 使用 `aspect-ratio: 1/1`（正方形）或 `4/3`

#### Scenario: 响应式列数
- **WHEN** 在不同屏幕宽度下查看画廊
- **THEN** 网格列数 SHALL 自动调整（桌面端 2-4 列，移动端 1-2 列）

### Requirement: 图片缩放模式
图片在容器内的缩放模式 SHALL 保证完整性优先。

#### Scenario: 使用 contain 模式
- **WHEN** 显示任意比例的图片
- **THEN** 图片 SHALL 使用 `object-fit: contain` 保持原始比例并完整显示

#### Scenario: 背景填充
- **WHEN** 图片无法完全填满容器时（如横屏图在正方形容器中）
- **THEN** 空白区域 SHALL 显示背景色（使用 `var(--bg)` 或浅灰色）以保持视觉整洁

### Requirement: 保留交互功能
优化后的图片画廊 SHALL 保留所有现有的交互功能。

#### Scenario: Hover 效果
- **WHEN** 用户鼠标悬停在图片上
- **THEN** 图片 SHALL 显示 hover 动画效果（轻微放大、阴影、边框变化）和叠加层图标

#### Scenario: Lightbox 功能
- **WHEN** 用户点击图片
- **THEN** 系统 SHALL 打开 lightbox 组件显示原始大图

#### Scenario: 键盘支持
- **WHEN** lightbox 打开且用户按下 Escape 键
- **THEN** lightbox SHALL 关闭

### Requirement: 响应式适配
图片画廊 SHALL 在不同设备上都能良好显示。

#### Scenario: 桌面端显示
- **WHEN** 屏幕宽度 ≥ 768px
- **THEN** 画廊 SHALL 显示多列网格（2-4 列），每列最小宽度 200-260px

#### Scenario: 移动端显示
- **WHEN** 屏幕宽度 < 768px
- **THEN** 画廊 SHALL 显示 1-2 列网格，适当缩小间距和尺寸

### Requirement: 性能要求
图片画廊优化 SHALL 不影响页面加载性能。

#### Scenario: 懒加载保留
- **WHEN** 页面加载时
- **THEN** 折叠以下的图片 SHALL 保持 `loading="lazy"` 属性以延迟加载

#### Scenario: 无布局抖动
- **WHEN** 图片加载完成时
- **THEN** 页面布局 SHALL 不发生明显抖动（通过固定 aspect-ratio 保证）
