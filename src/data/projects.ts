import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AstraStudio——多模态AI工作台',
    description: '基于RAG与Multi-Agent架构的企业级AI工作台,融合联网搜索/本地知识库双引擎与持久化记忆,通过可调用的Skills和Tools工具集实现从知识库检索到文件生成的全链路自动化创作',
    badge: 'AS',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tags: ['Langchain4j', 'SpringBoot', 'Vue', 'MySQL'],
    links: [
      { label: '源码', href: '#' },
      { label: '演示', href: '#' },
    ],
    fullDescription: 'AstraStudio 是一款面向企业场景的多模态 AI 工作台，核心解决知识管理与 AI 生成之间的断层问题。系统采用 RAG（检索增强生成）架构，融合联网搜索与本地知识库双引擎，通过 Multi-Agent 协作模式实现复杂任务的自动拆解与执行。平台内置持久化记忆模块，支持跨会话上下文延续，并暴露标准化的 Skills & Tools 接口供业务方灵活编排。',
    gallery: [
      { src: '/project/project1/as.png', alt: 'AstraStudio 主界面' },
      // { src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop', alt: 'Agent 工作流编排' },
      // { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop', alt: '知识库管理' },
      // { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop', alt: '对话交互界面' },
    ],
    techStack: [
      { name: 'Langchain4j', desc: 'RAG 检索链路与 Agent 编排框架' },
      { name: 'Spring Boot 3', desc: '后端服务与 API 网关' },
      { name: 'Vue 3 + TypeScript', desc: '前端 SPA 与实时通信' },
      { name: 'MySQL + Redis', desc: '持久化存储与缓存层' },
      { name: 'Spring AI', desc: '多模型统一接入层' },
      { name: 'Elasticsearch', desc: '向量检索与全文搜索' },
    ],
  },
  {
    id: '2',
    title: '智途安行-基于云边协同的多模态道路缺陷可视化系统',
    description: '构建了一套覆盖"边缘感知-云端分析-终端应用"的智能巡检解决方案。项目聚焦于解决道路缺陷识别依赖人工、数据分散的痛点，通过端云一体化的设计，实现了巡检数据的自动流转与可视化呈现，为道路养护提供了直观的数据决策依据',
    badge: 'ZA',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop',
    tags: ['Uniapp', 'UView', 'Echarts', 'NestJs','MongoDB','Map'],
    links: [
      { label: '源码', href: 'https://gitee.com/Shaun520/zhitu-anxing' },
      { label: '演示', href: '#' },
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
    title: '爱摆摊 ———— 您的市井“AI”合伙人',
    description: '面向地摊经济的全栈SaaS服务平台，集成AI选址、智能定价与进销存管理，助力摊主数字化经营。',
    badge: 'SS',
    image: '/project/project3/bg.png',
    tags: ['Vue3', 'UniApp', 'NestJS', 'MongoDB', 'TypeScript'],
    links: [
      { label: '源码', href: 'https://gitee.com/Shaun520/smart-stall' },
      { label: '文档', href: '#' },
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
    title: 'Shaun问卷————拟问卷调查管理系统',
    description: '基于 React + TypeScript 的全栈问卷调查平台，提供可视化编辑器、多维度数据统计与用户权限管理',
    badge: 'CT',
    image: '/project/project4/bg.jpg',
    tags: ['React', 'TypeScript', 'Zustand', 'Ant Design', 'Vite'],
    links: [
      { label: '源码', href: 'https://gitee.com/Shaun520/questionnaire-survey' },
      { label: '演示', href: '#' },
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
    id: '5',
    title: '讯聊————拟QQ聊天系统',
    description: '仿QQ即时通讯应用，基于Vue3 + Vite构建，支持单群聊、文件传输、好友管理等核心功能，集成阿里云OSS存储。',
    badge: 'IM',
    image: 'https://ts4.tc.mm.bing.net/th/id/OIP-C.h9w5ciWkzW-bM7d2gu5rBQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    tags: ['Vue 3', 'Vite', 'Element Plus', 'Pinia', 'WebSocket', '阿里云OSS'],
    links: [
      { label: '源码', href: 'https://gitee.com/Shaun520/qq_chat_forward_v2' },
      { label: '文档', href: '#' },
    ],
    fullDescription: '高度还原QQ体验的Web端即时通讯系统，采用前后端分离架构。核心功能涵盖：用户注册登录（密码/扫码双模式）、实时单聊与群聊消息收发、多媒体消息支持（文本/图片/文件）、好友关系管理（添加/申请/列表）、群组管理（创建/加入/成员管理）、消息状态追踪（已读/未读/撤回）、文件断点续传与阿里云OSS云端存储、Token自动刷新机制保障会话安全。界面完全复刻QQ经典布局，左侧导航栏包含消息、联系人、动态、更多四大模块，右侧为沉浸式聊天区域，支持表情包、拖拽上传、右键菜单等交互细节。',
    gallery: [
      { src: '/project/project5/登录.png', alt: '登录注册界面' },
      { src: '/project/project5/主界面.png', alt: '主聊天界面' },
      { src: '/project/project5/群聊.png', alt: '群聊界面' },
      { src: '/project/project5/联系人详情页.png', alt: '联系人详情页' },
    ],
    video: {
      src: 'https://qq-imitate-chat-stystem.oss-cn-shenzhen.aliyuncs.com/Vite%20App%20%E5%92%8C%E5%8F%A6%E5%A4%96%204%20%E4%B8%AA%E9%A1%B5%E9%9D%A2%20-%20%E4%B8%AA%E4%BA%BA%20-%20Microsoft%E2%80%8B%20Edge%202026-05-11%2020-12-22.mp4',
    },
    techStack: [
      { name: 'Vue 3', desc: 'Composition API构建响应式UI组件' },
      { name: 'Vite 6', desc: '极速开发服务器与生产优化打包' },
      { name: 'Element Plus', desc: '企业级UI组件库提供完整交互方案' },
      { name: 'Pinia', desc: '轻量级状态管理用户会话数据' },
      { name: 'Axios', desc: 'HTTP客户端封装请求拦截与Token刷新' },
      { name: '阿里云 OSS', desc: '对象存储实现文件图片云端托管' },
      { name: 'Spark MD5', desc: '文件分片校验确保传输完整性' },
      { name: 'SCSS', desc: 'CSS预处理器实现模块化样式管理' },
    ],
  },
  {
  "id": "6",
  "title": "美荟商城 - Flutter 电商平台",
  "description": "基于 Flutter 开发的现代化电商购物应用，集成商品展示、分类浏览、购物车管理等核心功能。",
  "badge": "P3",
  "image": "/project/project6/bg.png",
  "tags": ["Flutter", "Dart", "Mobile App", "E-commerce"],
  "links": [
    { "label": "源码", "href": "https://gitee.com/Shaun520/flutter-Ecommerce-store" },
    { "label": "演示", "href": "#" }
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
