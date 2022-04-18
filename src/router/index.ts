import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: () => import('@/shared/layout/DynamicLayout/index.vue'),
      children: routes,
    },
  ],
});

export default router;
