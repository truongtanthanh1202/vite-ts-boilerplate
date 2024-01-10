import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/shared/constants';
import Homepage from '@/modules/homepage/index.vue';
import NotFound from '@/modules/notFound/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: RouteName.NotFound,
    component: NotFound,
  },
  {
    path: '',
    name: RouteName.Homepage,
    component: Homepage,
    meta: { layout: 'defaultNoHeader' },
  },
  {
    path: 'shop-lives',
    name: RouteName.ShopLives,
    component: () => import('@/modules/shopProblem/pages/Lives/index.vue'),
  },
  {
    path: 'shop-new-registation',
    name: RouteName.NewRegistation,
    component: () => import('@/modules/shopProblem/pages/NewRegistation/index.vue'),
  },
];

export default routes;
