<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#00904a',
      },
    }"
  >
    <router-view />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
</script>
