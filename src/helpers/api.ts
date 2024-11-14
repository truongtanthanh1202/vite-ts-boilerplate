import { isEmpty } from 'lodash';

// import { isNoTokenPresent } from '@/core';
// import { useAppStore, useAuthStore } from '@/store';

export const isNotifyWhenFail = (response: any) => {
  if (response?.data?.success) {
    return false;
  }

  if (response?.config?.offNotify) {
    return false;
  }

  return !!response?.data?.message;
};

// export const fetchBeforeInitApp = async () => {
//   const isEmptyToken = isNoTokenPresent();
//   const authStore = useAuthStore();
//   const appStore = useAppStore();

//   if (isEmptyToken) {
//     return;
//   }

//   await Promise.all([authStore.fetchCurrentUser(), appStore.getMacro()]);

//   appStore.isFetchedAll = true;
//   authStore.isLogined = true;
// };

// export const waitToFetchedAppData = async (): Promise<boolean> => {
//   const appStore: any = {};
//   const authStore: any = {};

//   const isFullyAppData = () => {
//     return !isEmpty(authStore.me) && !isEmpty(appStore.macro);
//   };

//   return new Promise((resolve) => {
//     let schedule: any = 0;
//     let numberOfTried = 0;
//     const MAX_TRIED = 150;

//     if (isFullyAppData()) {
//       return resolve(true);
//     }

//     if (appStore.isFetchedAll) {
//       return resolve(false);
//     }

//     schedule = setInterval(() => {
//       if (numberOfTried > MAX_TRIED) {
//         clearInterval(schedule);
//         return resolve(false);
//       }

//       if (isFullyAppData()) {
//         clearInterval(schedule);
//         return resolve(true);
//       }

//       if (appStore.isFetchedAll) {
//         clearInterval(schedule);
//         return resolve(false);
//       }

//       numberOfTried++;
//     }, 50);
//   });
// };
