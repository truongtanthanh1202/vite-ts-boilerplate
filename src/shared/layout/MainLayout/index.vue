<script setup lang="ts">
import { watch, ref, markRaw } from 'vue';
import { useRoute } from 'vue-router';

import DefaultLayout from '@/layouts/default/index.vue';

const route = useRoute();
const layoutComponent = ref();

watch(
  route,
  async (to) => {
    const metaLayout = to.meta.layout || 'default';

    try {
      const component = metaLayout && (await import(`../../../layouts/${metaLayout}/index.vue`));
      layoutComponent.value = markRaw(component?.default || DefaultLayout);
    } catch (e) {
      layoutComponent.value = markRaw(DefaultLayout);
    }
  },
  { flush: 'pre', immediate: true, deep: true }
);
</script>

<template>
  <component :is="layoutComponent"></component>
</template>
