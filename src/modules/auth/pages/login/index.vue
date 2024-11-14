<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import config from '@/configs/app';

const route = useRoute();

onMounted(() => {
  loginWithId();
});

async function loginWithId() {
  const authRedirectGuardMiddleware = window['gmjs'].AuthRedirectGuardMiddleware(config.oidc);
  try {
    await authRedirectGuardMiddleware.run(
      route.query.returnUrl ? decodeURIComponent(route.query.returnUrl as string) : '/',
    );
  } catch (e) {
    console.log(e);
  }
}
</script>
<!-- eslint-disable -->
<template>
  <div class="m-auto h-screen w-full flex justify-center items-center">
    <a-spin></a-spin>
  </div>
</template>
