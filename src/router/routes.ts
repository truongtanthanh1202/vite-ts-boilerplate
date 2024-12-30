import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/shared/constants';
import Homepage from '@/modules/homepage/index.vue';
import NotFound from '@/modules/notFound/index.vue';
import shopProblemRoutes from '@/modules/shopProblem/routes';

const routes: RouteRecordRaw[] = [
  ...shopProblemRoutes,

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
];

export default routes;
