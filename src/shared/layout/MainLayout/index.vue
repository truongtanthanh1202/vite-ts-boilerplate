<script setup lang="ts">
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/default/index.vue';
import DefaultNoHeaderLayout from '@/layouts/defaultNoHeader/index.vue';

const route = useRoute();

const layoutName = ref<string>('default');

watch(
  route,
  (to) => {
    const layout = to.meta.layout || 'default';
    layoutName.value = layout;
  },
  { flush: 'pre', immediate: true, deep: true }
);
</script>

<template>
  <DefaultLayout v-if="layoutName === 'default'" />
  <DefaultNoHeaderLayout v-else />
</template>
