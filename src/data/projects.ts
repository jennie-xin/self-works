import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AstraStudio —— 多模态AI工作台',
    description: '基于RAG与Multi-Agent架构的企业级AI工作台,融合联网搜索/本地知识库双引擎与持久化记忆,通过可调用的Skills和Tools工具集实现从知识库检索到文件生成的全链路自动化创作',
    badge: 'AS',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tags: ['RAG', 'Langchain4j', 'SpringBoot', 'Vue', 'PostgreSQL', 'Redis'],
    links: [
      { label: '源码', href: 'https://github.com/Shaun520/Astra-Studio' },
      // { label: '演示', href: '#' },
    ],
    fullDescription: 'AstraStudio 是一款面向企业场景的多模态 AI 工作台，核心解决知识管理与 AI 生成之间的断层问题。系统采用 RAG（检索增强生成）架构，融合联网搜索与本地知识库双引擎，通过 Multi-Agent 协作模式实现复杂任务的自动拆解与执行。平台内置持久化记忆模块，支持跨会话上下文延续，并暴露标准化的 Skills & Tools 接口供业务方灵活编排。',
    gallery: [
      // { src: '/project/project1/as.png', alt: 'AstraStudio 主界面' },
      { src: 'https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/fa172baa0ab4567d956b2f9e8bd440c2.png', alt: 'AstraStudio 主界面 - 知识库' },
      { src: 'https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/4d4dc33d700b10a772c2075fd2002489.png', alt: 'AstraStudio 主界面 - AI参数设置' },
    ],
    video:{
      src:"https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/Astra%20Studio%20%E2%80%94%20%E5%A4%9A%E6%A8%A1%E6%80%81%20AI%20%E5%B7%A5%E4%BD%9C%E5%8F%B0%20-%20Google%20Chrome%202026-06-04%2019-12-46.mp4"
    },
    techStack: [
      { name: 'RAG', desc: '检索增强生成架构' },
      { name: 'Langchain4j', desc: 'RAG 检索链路与 Agent 编排框架' },
      { name: 'Spring Boot 3', desc: '后端服务与 API 网关' },
      { name: 'Vue 3 + TypeScript', desc: '前端 SPA 与实时通信' },
      { name: 'PostgreSQL + Redis', desc: '持久化存储与缓存层' },
      { name: 'Elasticsearch', desc: '向量检索与全文搜索' },
    ],
  },
  {
  id: '2',
  title: 'ShaunResume —— 智能简历制作平台',
  description: '是一个由 AI 驱动的智能简历制作平台，面向求职者提供从内容创建、模板定制到智能优化的全流程服务。',
  badge: 'RM',
  image: 'https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/85e87d7fe28410afba7ca5ec82e8ec25.png',
  tags: ['React', 'Ant Design', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
  links: [
    { label: '源码', href: 'https://github.com/Shaun520/Shaun_Resume' },
  ],
  fullDescription: 'ShaunResume 是一款 AI 驱动的在线简历制作平台，提供结构化简历编辑、模板实时切换、PDF/图片一键导出等能力，并逐步引入 AI 智能生成、岗位匹配、自动润色等高级特性，让每个人都能在几分钟内产出一份专业、有竞争力的简历。',
  gallery: [
    { src: 'https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/85e87d7fe28410afba7ca5ec82e8ec25.png', alt: 'ShaunResume 首页' },
    { src: 'https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/d7fda1f8ac33d307e87ac752c35a5ff3.png', alt: '登录注册界面' },
    { src: 'https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/d00769a2f278eb0d1fd2957f83d3a71c.png', alt: '简历编辑器三栏布局' },
    { src: 'https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/00b881409111bb473849396e46e51719.png', alt: '模板选择面板' },
    { src: 'https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/395df13904a671dc21ab896c36c4a7c7.png', alt: '模板预览' },
  ],
  video: {
    src: 'https://astra-agent.oss-cn-beijing.aliyuncs.com/chat/Shaun%20Resume%20-%20%E5%9C%A8%E7%BA%BF%E7%AE%80%E5%8E%86%E5%88%B6%E4%BD%9C%E5%B9%B3%E5%8F%B0%20-%20Google%20Chrome%202026-06-04%2023-20-36.mp4',
  },
 techStack: [
    { name: 'React + TypeScript', desc: '函数式组件与全量类型约束构建响应式界面' },
    { name: 'Ant Design 5', desc: '企业级 UI 组件库提供完整表单与交互方案' },
    { name: 'Tailwind CSS', desc: 'CSS 优先配置体系实现灵活样式定制' },
    { name: 'Express + Prisma', desc: '轻量级后端框架与类型安全 ORM 数据访问层' },
    { name: 'PostgreSQL', desc: '关系型数据库存储用户、简历及模板数据' },
    { name: 'html2canvas + jsPDF', desc: '可视化快照与一键 PDF 导出能力' },
  ],
  },
  {
    id: '5',
    title: '智途安行 —— 基于云边协同的多模态道路缺陷可视化系统',
    description: '构建了一套覆盖"边缘感知-云端分析-终端应用"的智能巡检解决方案。项目聚焦于解决道路缺陷识别依赖人工、数据分散的痛点，通过端云一体化的设计，实现了巡检数据的自动流转与可视化呈现，为道路养护提供了直观的数据决策依据',
    badge: 'ZA',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop',
    tags: ['Uniapp', 'UView', 'Echarts', 'NestJs','MongoDB','Map'],
    links: [
      { label: '源码', href: 'https://gitee.com/Shaun520/zhitu-anxing' },
      // { label: '演示', href: '#' },
    ],
    fullDescription: '本项目针对传统道路维护中人工巡查效率低、成本高、安全风险大、大规模道路网络检测覆盖不足、检测结果使用效率低下等核心问题，开发了一种基于人工智能、物联网和嵌入式技术的智能化解决方案，能够在多种环境下进行高效检测并且以地图的可视化形式展现出来，最终服务于司机和道路运营部门。重点研究内容：数据采集层面开发基于 Raspberry Pi 4B和深度相机的智能巡检车作为数据采集层，实地采集道路的视频信息，并且在本地进行数据剪切等操作，提高传输视频的质量；在算法层，通过在阿里云服务器部署改进过的 yolo11算法对数据采集层传输的视频进行检测，并且将检测结果传输至后端数据库进行存储管理，最终由前端小程序与网页端进行展示，完“采集→传输→云端推理→结果存储”的云-边协同体系。项目预期成果为产出适用于多种环境下道路缺陷检测的高精度 ',
    gallery: [
      { src: '/project/project2/structure.png', alt: '系统架构' },
      { src: '/project/project2/road.png', alt: '边缘硬件（树莓派）采集' },
      { src: '/project/project2/home.png', alt: '算法层' },
      { src: '/project/project2/data.png', alt: '数据可视化' },
      { src: '/project/project2/map.png', alt: 'GIS地图可视化' },
    ],
    techStack: [
      { name: 'Vue3', desc: '前端 SPA 与实时通信' },
      { name: 'UView', desc: '组件库与样式框架' },
      { name: 'Echarts', desc: '数据可视化图表库' },
      { name: 'Map', desc: '地图可视化' },
      { name: 'NestJs', desc: '后端服务与 API 网关' },
      { name: 'MongoDB', desc: '文档型数据库' },
      { name: 'Redis', desc: '缓存、分布式锁与消息队列' },
    ],
  },
  {
    id: '3',
    title: '爱摆摊 ——— 您的市井“AI”合伙人',
    description: '面向地摊经济的全栈SaaS服务平台，集成AI选址、智能定价与进销存管理，助力摊主数字化经营。',
    badge: 'SS',
    image: '/project/project3/bg.png',
    tags: ['Vue3', 'UniApp', 'NestJS', 'MongoDB', 'TypeScript'],
    links: [
      { label: '源码', href: 'https://gitee.com/Shaun520/smart-stall' },
      // { label: '文档', href: '#' },
    ],
    fullDescription: '“爱摆摊”是一款专为线下流动摊主打造的一站式经营助手。项目采用现代化的全栈 TypeScript 架构，前端基于 UniApp + Vue3 实现一套代码多端发布（iOS、Android、小程序），覆盖摊主从“找位置”到“管库存”的全流程。后端采用高性能的 NestJS 框架，结合 Mongoose 操作 MongoDB，处理高并发的地摊热点数据。系统特色在于引入了轻量级的 AI 算法模型，为摊主提供基于人流热力图的选址建议及动态定价策略，真正实现“用AI助力，一直赚不停”。',
    gallery: [
      { src: '/project/project3/首页.jpg', alt: '首页' },
      { src: '/project/project3/找位置-上.jpg', alt: '找位置-上' },
      { src: '/project/project3/找位置-下.jpg', alt: '找位置-下' },
      { src: '/project/project3/我的.jpg', alt: '我的' },
      { src: '/project/project3/商品管理.png', alt: '商品管理' },
      { src: '/project/project3/一键推广.png', alt: '一键推广' },
    ],
    techStack: [
      { name: 'UniApp', desc: '跨平台前端框架，支持多端部署' },
      { name: 'Pinia / UniUI', desc: '状态管理与 UI 组件库' },
      { name: 'NestJS / TypeScript', desc: '企业级 Node.js 后端框架' },
      { name: 'MongoDB / Mongoose', desc: 'NoSQL 数据库与对象建模' },
      { name: 'Apache ECharts', desc: '经营数据可视化图表' },
    ],
  },
  {
    id: '4',
    title: 'Shaun问卷 ——— 拟问卷调查管理系统',
    description: '基于 React + TypeScript 的全栈问卷调查平台，提供可视化编辑器、多维度数据统计与用户权限管理',
    badge: 'CT',
    image: '/project/project4/bg.jpg',
    tags: ['React', 'TypeScript', 'Zustand', 'Ant Design', 'Vite'],
    links: [
      { label: '源码', href: 'https://gitee.com/Shaun520/questionnaire-survey' },
      // { label: '演示', href: '#' },
    ],
    fullDescription: '一款面向企业级场景的在线问卷调查管理系统。采用 React 19 + TypeScript 构建，集成可视化拖拽编辑器，支持 7 种题型组件的灵活编排；内置 Zustand 状态管理与时间旅行功能（zundo），实现组件级撤销/重做；提供完整的数据统计面板，结合 @ant-design/charts 与 Recharts 实现多维度图表分析；具备用户认证体系、问卷生命周期管理（草稿/发布/归档）及二维码分享功能。适用于市场调研、用户反馈、在线投票等多种业务场景。',
    gallery: [
      { src: '/project/project4/home.png', alt: '主界面' },
      { src: '/project/project4/layout.png', alt: '布局设计' },
      { src: '/project/project4/edit.png', alt: '问卷表单结构' },
      { src: '/project/project4/publish.png', alt: '发布问卷' },
    ],
    video:{
      src: 'https://qq-imitate-chat-stystem.oss-cn-shenzhen.aliyuncs.com/Shaun%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A5%20%E5%92%8C%E5%8F%A6%E5%A4%96%205%20%E4%B8%AA%E9%A1%B5%E9%9D%A2%20-%20%E4%B8%AA%E4%BA%BA%20-%20Microsoft%E2%80%8B%20Edge%202026-05-11%2019-44-07.mp4',
    },
    techStack: [
      { name: 'React 19 + TypeScript', desc: '现代化前端开发框架，类型安全与组件化架构' },
      { name: 'Vite 7', desc: '极速构建工具，支持 HMR 与优化打包' },
      { name: 'Ant Design 5', desc: '企业级 UI 组件库，提供丰富交互组件' },
      { name: 'Zustand + Zundo', desc: '轻量级状态管理，支持时间旅行与撤销重做' },
      { name: '@dnd-kit', desc: '现代化拖拽库，实现组件拖拽排序与画布交互' },
      { name: 'React Router 7', desc: '声明式路由管理，支持嵌套路由与懒加载' },
      { name: '@ant-design/charts + Recharts', desc: '数据可视化方案，提供统计图表渲染能力' },
      { name: 'SCSS Modules', desc: '模块化样式方案，避免样式冲突' },
    ],
  },
  {
  "id": "6",
  "title": "美荟商城 —— Flutter 电商平台",
  "description": "基于 Flutter 开发的现代化电商购物应用，集成商品展示、分类浏览、购物车管理等核心功能。",
  "badge": "P3",
  "image": "/project/project6/bg.png",
  "tags": ["Flutter", "Dart", "Mobile App", "E-commerce"],
  "links": [
    { "label": "源码", "href": "https://gitee.com/Shaun520/flutter-Ecommerce-store" },
    // { "label": "演示", "href": "#" }
  ],
  "fullDescription": "一款采用 Flutter 框架构建的跨平台电商购物应用。实现了完整的购物流程，包括首页商品推荐、多级分类导航、购物车管理、个人中心等模块。采用 Material Design 设计语言，支持商品搜索、收藏、加购等核心功能，提供流畅的用户体验和现代化的界面设计。",
  "gallery": [
    {
      "src": "/project/project6/home1.png",
      "alt": "首页商品展示1"
    },
    {
      "src": "/project/project6/home2.png",
      "alt": "首页商品展示2"
    },
    {
      "src": "/project/project6/category.png",
      "alt": "分类浏览页面"
    },
    {
      "src": "/project/project6/cart.png",
      "alt": "购物车结算"
    },
    {
      "src": "/project/project6/my.png",
      "alt": "个人中心页面"
    }
  ],
  "techStack": [
    { "name": "Flutter / Dart", "desc": "跨平台UI框架与编程语言" },
    { "name": "Material Design", "desc": "Google设计规范实现" },
    { "name": "RESTful API", "desc": "后端数据接口交互" }
  ]
  }
];
