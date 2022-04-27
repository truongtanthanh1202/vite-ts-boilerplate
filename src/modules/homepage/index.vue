<script setup lang="ts">
import { RouteName } from '@/shared/constants';
</script>

<template>
  <div>
    <router-link :to="{ name: RouteName.SHOP_LIVES }">Go go shop</router-link>
  </div>
</template>
