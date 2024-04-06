import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/shared/constants';

const routes: RouteRecordRaw[] = [
  {
    path: 'shop-new-registation',
    name: RouteName.NewRegistation,
    component: () => import('./pages/NewRegistation/index.vue'),
  },
];

export default routes;
