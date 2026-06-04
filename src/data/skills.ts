import type { SkillGroup, TimelineItem } from '@/types';
/**
 * 技能组
 */
export const skillGroups: SkillGroup[] = [
  {
    label: '前端与跨端',
    type: 'frontend',
    skills: [
      'Vue 3', 'React', 'TypeScript',
      'Uniapp', 'Flutter', 'Tailwind CSS', 
      'Pinia', 'ECharts', '腾讯地图'
    ],
  },
  {
    label: '后端与数据库',
    type: 'backend',
    skills: [
      'Spring Boot 3', 'Nest.js', 'Node.js',
      'MySQL', 'Redis', 'MongoDB',"PostgreSQL",
      'MyBatis-Plus', 'RESTful API'
    ],
  },
  {
    label: 'AI 工程化',
    type: 'ai',
    skills: [
      'LangChain4j', 'RAG', 'MCP','Skill',
      'Tool Calling', 'Vector Search', 'Prompt Engineering',
      'SSE 流式传输', 'OpenSpec','SpecKit'
    ],
  },
  {
    label: '基础设施与工具',
    type: 'tool',
    skills: [
      'Git', 'Docker', 'Vercel',
      'ECS/OSS', 'Nginx'
    ],
  },
];

/**
 * 工作经历 / 学历
 */
export const timeline: TimelineItem[] = [
  {
    year: '2026-02 - 2026-05',
    title: '全栈开发实习生',
    organization: '南京普惠恒丰信息科技有限公司',
    description: '主导诊后随访核心链路开发，设计「入案→AI分组→人工审核→随访管理」状态机流转，落地模板配置、防重校验及权限隔离机制，支撑医疗业务闭环；针对AI病历引擎跨库查询瓶颈，通过Redis缓存预热+自定义线程池并行计算策略，将复杂数据聚合耗时从数秒优化至200ms级稳定响应。',
  },
  {
    year: '2025-03 - 2025-06', // 修正原时间笔误（原始简历为2025.03-2025.06）
    title: '前端负责人',
    organization: '湖科大KingCola-ICG-工作室',
    description: '作为前端负责人主导跨端小程序开发，集成腾讯地图SDK实现缺陷点位精准标注、聚合展示与轨迹回放；通过分包加载、图片懒加载、地图事件防抖等策略优化性能，使LCP稳定在2.2s以内；使用ECharts构建缺陷分布热力图/多维度统计视图，支撑道路养护决策效率提升。',
  },
  {
    year: '2024-09 - 2027-06',
    title: '本科',
    organization: '湖南科技大学',
    description: '主修软件工程、操作系统、数据库系统、机器学习等核心课程；在校期间获计算机设计大赛省二、网络技术挑战赛省三、物联网技术创新赛省二等竞赛奖项，主持大创项目获校级二等奖；持续深耕Vue/TS、SpringBoot等全栈技术，同步探索RAG、多Agent等AI工程化落地实践。',
  },
];