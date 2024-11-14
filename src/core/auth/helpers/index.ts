import { get, isArray, isEmpty, isNil, isString } from 'lodash';
import { includes, some } from 'lodash';

import { jsonDecode, jsonEncode } from '@/helpers';
import { RouteName, IdStorageName, ID_STORAGE_ALL } from '@/shared/constants';
import config from '@/configs/app';

export const APP_ACCESS_TOKEN = 'app_access_token';
export const APP_REFRESH_TOKEN = 'app_refresh_token';

export const authGuard = async ({
  to,
}): Promise<{
  canAccess: boolean;
  redirectTo: any;
}> => {
  const isEmptyToken = isNoTokenPresent();
  console.log('isEmptyToken', isEmptyToken, to.name);

  if (to.name === RouteName.LOGIN && !isEmptyToken) {
    return {
      canAccess: false,
      redirectTo: { name: RouteName.Homepage },
    };
  }

  // Skip checking if is public route
  if (to.meta.isPublic) {
    return {
      canAccess: true,
      redirectTo: {},
    };
  }

  if (isEmptyToken) {
    return {
      canAccess: false,
      redirectTo: { name: RouteName.LOGIN, query: { returnUrl: encodeURIComponent(to.fullPath) } },
    };
  }

  // const isFetchedAppData = await waitToFetchedAppData();

  // if (!isFetchedAppData) {
  //   removeAppToken();
  //   return {
  //     canAccess: false,
  //     redirectTo: { name: RouteName.LOGIN, query: { returnUrl: encodeURIComponent(to.fullPath) } },
  //   };
  // }

  return {
    canAccess: true,
    redirectTo: {},
  };
};

export const authLogout = async (): Promise<void> => {
  spreadIdStorage();
  const oidc = config.oidc;
  const ghtkAuth = new window['gmjs'].GhtkAuth(oidc);

  try {
    await ghtkAuth.signOut({
      revokeAccessToken: true,
      postLogoutRedirectUri: `${oidc.authnUrl}/sign-out?continue=${config.appUrl}`,
    });
  } catch (e) {
    window.location.href = `${oidc.authnUrl}/sign-out?continue=${config.appUrl}`;
  } finally {
    localStorage.clear();
  }
};

export const getIdAccessToken = (): string | undefined => {
  const tokenStorage = jsonDecode(localStorage.getItem(IdStorageName.GhtkTokenStorage));

  return get(tokenStorage, 'accessToken.accessToken');
};

export const getAccessToken = (): string | undefined => {
  const tokenStorage = jsonDecode(localStorage.getItem(IdStorageName.GhtkTokenStorage));

  return get(tokenStorage, 'accessToken');
};

export const moveIdStorage = (): void => {
  const allStorage = {};

  Object.keys(IdStorageName).forEach((key) => {
    allStorage[key] = jsonDecode(localStorage.getItem(IdStorageName[key]));
    localStorage.removeItem(IdStorageName[key]);
  });

  localStorage.setItem(ID_STORAGE_ALL, jsonEncode(allStorage) || '{}');
};

export const spreadIdStorage = (): void => {
  const allStorage = jsonDecode(localStorage.getItem(ID_STORAGE_ALL));

  Object.keys(allStorage).forEach((key) => {
    localStorage.setItem(IdStorageName[key], jsonEncode(allStorage[key]) || '');
  });
};

export const getAppAccessToken = (): string | null => {
  return localStorage.getItem(APP_ACCESS_TOKEN);
};

export const getAppRefreshToken = (): string | null => {
  return localStorage.getItem(APP_REFRESH_TOKEN);
};

export const isNoTokenPresent = (): boolean => {
  const accessToken = getAppAccessToken();
  const refreshToken = getAppRefreshToken();

  return !accessToken && !refreshToken;
};

export const setAppToken = (authInfo: any): void => {
  localStorage.setItem(APP_ACCESS_TOKEN, authInfo.accessToken);
  // localStorage.setItem(APP_REFRESH_TOKEN, authInfo.refresh_token);
};

export const removeAppToken = (): void => {
  localStorage.removeItem(APP_ACCESS_TOKEN);
  // localStorage.removeItem(APP_REFRESH_TOKEN);
};

export const canUpdate = (scopes: string[], role: string) => {
  if (includes(scopes, role) || includes(scopes, `${role}.update`)) {
    return true;
  }

  return false;
};

export const onlyView = (scopes: string[], role: string) => {
  if (includes(scopes, `${role}.view`) && !includes(scopes, `${role}.update`)) {
    return true;
  }

  if (!includes(scopes, `${role}.update`)) {
    return true;
  }

  return false;
};

export const hasActionOfRole = (scopes: string[], role: string, actions: string[] = ['view', 'update']) => {
  for (const action of actions) {
    if (includes(scopes, `${role}.${action}`)) {
      return true;
    }
  }

  return false;
};

export const canPerform = (scopes: string[], role: string | string[]) => {
  if (isEmpty(scopes)) {
    return false;
  }

  if (isString(role)) {
    return scopes.includes(role);
  }

  if (isArray(scopes)) {
    for (const scope of scopes) {
      if (role.includes(scope)) {
        return true;
      }
    }

    return false;
  }

  return false;
};

export const getAccessTokenGhtk = (): string | undefined => {
  const tokenStorage = jsonDecode(localStorage.getItem(ID_STORAGE_ALL));

  return get(tokenStorage, 'GhtkTokenStorage.accessToken.accessToken');
};

export const getIdExpiredTime = (): number => {
  const tokenStorage = jsonDecode(localStorage.getItem(ID_STORAGE_ALL));

  return get(tokenStorage, 'GhtkTokenStorage.accessToken.expiresAt');
};
