import type { Project } from '@/types';
/**
 * 项目列表
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'DevBoard · 研发效能看板',
    description: '整合 GitHub、Jira 与部署系统的研发数据看板，已帮助 3 支工程团队用于追踪交付周期与质量趋势。',
    badge: 'DB',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'Chart.js', 'PostgreSQL'],
    links: [
      { label: '源码', href: '#' },
      { label: '演示', href: '#' },
    ],
  },
  {
    id: '2',
    title: '协作笔记 · Notion 仿制',
    description: '基于块编辑器的实时协作文记应用，支持嵌套页面结构，通过 Service Worker 与 IndexedDB 实现离线同步能力。',
    badge: 'NC',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Supabase', 'Tiptap', 'TypeScript'],
    links: [
      { label: '源码', href: '#' },
      { label: '演示', href: '#' },
    ],
  },
  {
    id: '3',
    title: 'ShopLight · 电商后台 API',
    description: '生产级电商后端服务，涵盖库存管理、订单处理与第三方 Webhook 集成，日均处理交易量超 1 万笔。',
    badge: 'SL',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    links: [
      { label: '源码', href: '#' },
      { label: '文档', href: '#' },
    ],
  },
  {
    id: '4',
    title: 'RefactorFlow · 代码重构助手',
    description: 'VS Code 扩展，基于 AST 分析提供自动化重构建议，支持批量重命名、提取函数等常见重构模式。',
    badge: 'RF',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
    tags: ['TypeScript', 'VS Code API', 'AST'],
    links: [
      { label: '源码', href: '#' },
      { label: '市场', href: '#' },
    ],
  },
  {
    id: '5',
    title: 'ChartCraft · 数据可视化库',
    description: '轻量级 Canvas 图表库，专注性能与可定制性，支持折线图、柱状图、散点图等 12 种图表类型。',
    badge: 'CT',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['Canvas', 'TypeScript', 'Rollup'],
    links: [
      { label: '源码', href: '#' },
      { label: '文档', href: '#' },
    ],
  },
  {
    id: '6',
    title: 'Pixel3D · WebGL 三维引擎',
    description: '面向创意编程的轻量级 WebGL 封装库，提供场景图、材质系统与物理基础集成。',
    badge: 'P3',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop',
    tags: ['WebGL', 'GLSL', 'JavaScript'],
    links: [
      { label: '源码', href: '#' },
      { label: '演示', href: '#' },
    ],
  },
];
