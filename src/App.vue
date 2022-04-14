<script setup lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

import DefaultLayout from '@/layouts/default/index.vue';
const route = useRoute();
console.log(route.meta.layout);

const layoutComponent = defineComponent(DefaultLayout);
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>
