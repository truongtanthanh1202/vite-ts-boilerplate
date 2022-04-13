import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/shared/constants';
import Homepage from '@/modules/homepage/index.vue';
import NotFound from '@/modules/notFound/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.HOMEPAGE,
    component: Homepage,
  },
  {
    path: '/about',
    name: RouteName.ABOUT,
    component: () => import('@/modules/about/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteName.NOT_FOUND,
    component: NotFound,
  },
];

export default routes;
