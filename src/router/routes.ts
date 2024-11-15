import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/shared/constants';
import Homepage from '@/modules/homepage/index.vue';
import NotFound from '@/modules/notFound/index.vue';

import authRoutes from '@/modules/auth/routes';
import notiRoutes from '@/modules/sendShopNoti/routes';

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  ...notiRoutes,

  {
    path: '/:pathMatch(.*)*',
    name: RouteName.NotFound,
    component: NotFound,
  },
  {
    path: '',
    name: RouteName.Homepage,
    component: Homepage,
    meta: { layout: 'default' },
  },
];

export default routes;
