<template>
  <NotiPopup />

  <ConfigProvider :theme="theme">
    <router-view />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import { NotiPopup } from './shared/modals';

import { theme } from '@/shared/constants';
</script>
