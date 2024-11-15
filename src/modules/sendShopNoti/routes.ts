import type { RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/shared/constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/notification-config',
    meta: {
      title: 'GHTK Marketing',
    },
    children: [
      {
        path: '',
        name: RouteName.NOTIFY_CONFIG,
        component: () => import('./pages/HomeFeature/index.vue'),
      },
      {
        path: 'list/:NotiId',
        name: RouteName.NOTIFY_CONFIG_DETAIL,
        component: () => import('./pages/CampaignDetail/index.vue'),
      },
      {
        path: 'newCampaign',
        name: RouteName.NOTIFY_CONFIG_NEW,
        component: () => import('./pages/NewCampaign/index.vue'),
      },
    ],
  },
];

export default routes;
