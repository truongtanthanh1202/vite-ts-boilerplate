import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/shared/constants';
import Homepage from '@/modules/homepage/index.vue';
import NotFound from '@/modules/notFound/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: RouteName.NOT_FOUND,
    component: NotFound,
  },
  {
    path: '',
    name: RouteName.HOMEPAGE,
    component: Homepage,
    meta: { layout: 'defaultNoHeader' },
  },
  {
    path: 'shop-lives',
    name: RouteName.SHOP_LIVES,
    component: () => import('@/modules/shopProblem/pages/Lives/index.vue'),
  },
];

export default routes;
