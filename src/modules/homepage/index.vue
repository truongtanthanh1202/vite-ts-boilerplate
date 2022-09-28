<script setup lang="ts">
import { Button, Foo } from 'custom-ant';

import { RouteName } from '@/shared/constants';
</script>

<template>
  <div class="p-4">
    <router-link :to="{ name: RouteName.NEW_REGISTATION }">Go go shop</router-link>
    <div class="py-4">
      <Button type="primary">Click me!</Button>
    </div>
    <Foo :msg="'Chao ban'" />
    <!-- <Foo :msg="Hello" /> -->
  </div>
</template>
