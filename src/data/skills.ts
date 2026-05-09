import type { SkillGroup, TimelineItem } from '@/types';
/**
 * 技能组
 */
export const skillGroups: SkillGroup[] = [
  {
    label: '前端',
    type: 'frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'CSS / Sass', 'Tailwind', 'Framer Motion'],
  },
  {
    label: '后端',
    type: 'backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST / GraphQL', 'FastAPI'],
  },
  {
    label: '工具与基础设施',
    type: 'tool',
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'GitHub Actions', 'Linux'],
  },
  {
    label: '设计',
    type: 'design',
    skills: ['Figma', '设计系统', '无障碍访问', '动效设计'],
  },
];

/**
 * 工作经历 / 学历
 */
export const timeline: TimelineItem[] = [
  {
    year: '2022 – 至今',
    title: '高级前端工程师',
    organization: '字节跳动 · 北京',
    description: '主导核心产品 UI 重构；通过代码分割与图片优化将首屏 LCP 降低 40%，Lighthouse 性能分达到 95+。',
  },
  {
    year: '2020 – 2022',
    title: '全栈开发工程师',
    organization: '某初创公司 · 全职',
    description: '独立负责从需求分析到产品交付的全流程；使用 Next.js + PostgreSQL 构建了服务超过 10 万用户的 SaaS 平台。',
  },
  {
    year: '2018 – 2020',
    title: '本科',
    organization: '中南大学',
    description: '主修软件工程与分布式系统，以优秀毕业生身份完成学业，毕业论文获校级优秀论文奖。',
  },
];