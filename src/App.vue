<template>
  <ConfigProvider :theme="theme" :locale="ANT_LOCALE">
    <router-view />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';

import { ANT_LOCALE, theme } from '@/shared/constants';
</script>
