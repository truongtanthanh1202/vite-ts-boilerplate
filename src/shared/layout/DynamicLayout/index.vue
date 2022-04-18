<script setup lang="ts">
import { shallowRef, watch, defineAsyncComponent } from 'vue';
import type { AsyncComponentOptions } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layoutComponent = shallowRef<AsyncComponentOptions>();

watch(
  route,
  (to) => {
    const layoutName = to.meta.layout || 'default';

    layoutComponent.value = defineAsyncComponent(() => import(`../../../layouts/${layoutName}/index.vue`));
  },
  { flush: 'pre', immediate: true, deep: true }
);
</script>

<template>
  <component :is="layoutComponent" />
</template>
