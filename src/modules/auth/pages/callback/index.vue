<template>
  <div class="m-auto h-screen w-full flex justify-center items-center">
    <a-spin></a-spin>
  </div>
</template>

<script setup lang="ts">
import { Spin as ASpin } from 'ant-design-vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import config from '@/configs/app';
import { authService } from '@/services';
// import { fetchBeforeInitApp } from '@/utils';
import { getIdAccessToken, moveIdStorage, setAppToken, authLogout, getAccessToken } from '@/core';

const router = useRouter();

onMounted(async () => {
  try {
    const handler = window['gmjs'].OAuth2CallbackHandler(config.oidc);
    const isSuccess = await handler.handle();
    const refererPath = handler.getRefererPath();
    const accessToken = getAccessToken();
    moveIdStorage();

    if (!isSuccess) {
      return;
    }

    setAppToken(accessToken);
    router.push(refererPath || '/');
  } catch (e) {
    console.error(e);
    authLogout();
  }
});
</script>
