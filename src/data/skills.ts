import type { SkillGroup, TimelineItem } from '@/types';
/**
 * 技能组
 */
export const skillGroups: SkillGroup[] = [
  {
    label: '前端与跨端',
    type: 'frontend',
    skills: [
      'Vue 3', 'React', 'TypeScript', 'Vite',
      'Vue Router', 'Pinia', 'Vuex',
      'Element Plus', 'Ant Design', 'Tailwind CSS',
      'HTML5 / CSS3', 'SCSS / Less', '响应式布局',
      'ECharts', 'GSAP', 'Lenis',
      'iOS (Swift)', 'Android', '微信小程序', 'UniApp'
    ],
  },
  {
    label: '后端与数据库',
    type: 'backend',
    skills: [
      'Node.js', 'Express', 'NestJS',
      'Spring Boot', 'SSM', 'MyBatis-Plus', 'Spring Cloud',
      'JWT 鉴权', 'RESTful API', 'WebSocket',
      'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
      'RabbitMQ', 'Prisma', 'Mongoose'
    ],
  },
  {
    label: 'AI 工程化',
    type: 'ai',
    skills: [
      'Python', 'PyTorch', '深度学习',
      'FFmpeg', '计算机视觉', '图像复原',
      'VibeCoding', 'SDD', 'HarnessEngineering',
      'Spec-Kit', 'OpenSpec', 'MCP Server',
      'Agent Skills', 'Cursor', 'Claude Code', 'Open Code'
    ],
  },
  {
    label: '基础设施与工具',
    type: 'tool',
    skills: [
      'Git', 'Docker', 'Nginx', 'Linux',
      'Axios', 'MockJS', 'SSE',
      'Webpack', 'ESLint', 'Prettier',
      'Postman', 'Figma', 'Jenkins'
    ],
  },
];

/**
 * 工作经历 / 学历
 */
export const timeline: TimelineItem[] = [
  {
    year: '2025-12 - 2026-04',
    title: 'AI 前端工程师（实习）',
    organization: '深圳市卓越智云科技有限公司',
    description: '主导 AI 短剧生成平台核心视觉交互落地，实现小说上传到视频生成的全链路交互，基于 SSE 实现生成进度异步流式实时刷新，封装 Mock 层缩短联调周期约 40%；针对 AI Box / AI Cube 管理后台封装 Axios Interceptors 过滤重复请求，引入虚拟滚动与懒加载显著缩短响应延迟；参与 AI Cube 小程序分包加载策略优化，在低配设备上提升渲染 FPS 与触控响应时间。',
  },
  {
    year: '2025-06 - 2026-06',
    title: 'KingCola-ICG工作室前端组成员&项目负责人',
    organization: '海澄视界 —— 无人机载弱深度先验浅水智能巡检与图像复原系统',
    description: '大创省级立项项目，主持基于无人机载平台与弱深度先验算法的浅水区域智能巡检系统研发；利用深度学习实现水下图像复原，提升目标检测精度；项目获 2026 年海峡两岸暨港澳地区大学生计算机创新作品三等奖。',
  },
  {
    year: '2024-09 - 2028-06',
    title: '本科 · 计算机科学与技术',
    organization: '湖南科技大学',
    description: '主修计算机科学与技术专业核心课程；主持大创项目获省级立项；获 2026 年海峡两岸暨港澳地区大学生计算机创新作品三等奖等多项竞赛荣誉；持续深耕 Vue/TS、iOS 开发及 AI 工程化实践。',
  },
];
