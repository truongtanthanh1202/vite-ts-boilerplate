import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/shared/constants';
import Homepage from '@/modules/homepage/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.Homepage,
    component: Homepage,
  },
  {
    path: '/about',
    name: RouteName.ABOUT,
    component: () => import('@/modules/about/index.vue'),
  },
];

export default routes;
