import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Homepage from '@/modules/homepage/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/modules/about/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
