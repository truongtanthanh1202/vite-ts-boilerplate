<template>
  <div>Sendshopnoti - Home feature</div>
</template>

<script setup lang="ts">
import { shopNotiService } from '@/services';
import { onMounted } from 'vue';

onMounted(() => {
  shopNotiService.getListNotiConfig({});
});
</script>
