<script setup lang="ts">
import { shallowRef, defineAsyncComponent } from 'vue';
import type { AsyncComponentOptions } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const layoutComponent = shallowRef<AsyncComponentOptions>();

router.beforeEach((to) => {
  const layoutName = to.meta.layout || 'default';

  layoutComponent.value = defineAsyncComponent(() => import(`./layouts/${layoutName}/index.vue`));
});
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>
