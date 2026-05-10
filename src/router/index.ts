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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
