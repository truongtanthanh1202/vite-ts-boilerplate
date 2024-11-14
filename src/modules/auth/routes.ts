import type { RouteRecordRaw } from 'vue-router';

import { RouteName } from '@/shared/constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: RouteName.LOGIN,
    component: () => import('./pages/login/index.vue'),
    meta: {
      isPublic: true,
      layout: 'defaultNoHeader',
    },
  },
  {
    path: '/callback',
    name: RouteName.LOGIN_CALL_BACK,
    component: () => import('./pages/callback/index.vue'),
    meta: {
      layout: 'defaultNoHeader',
      isPublic: true,
    },
  },
  {
    path: '/logout',
    name: RouteName.LOGOUT,
    component: () => import('./pages/logout/index.vue'),
    meta: { isPublic: true },
  },
];

export default routes;
