import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: () => import('@/components/ProjectDetailPage.vue'),
      props: true,
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    // hash 滚动由组件手动处理
    if (to.hash) {
      return false;
    }
    return { top: 0, left: 0 };
  },
});

export default router;
