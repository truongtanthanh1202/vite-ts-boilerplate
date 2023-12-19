<script lang="ts" setup>
import { MenuRight } from '@/layout-components';

interface Props {
  isLoaded: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <div id="__main" class="flex w-full">
    <div id="__content">
      <router-view v-if="props.isLoaded" />
    </div>

    <div id="__menu" class="w-80">
      <MenuRight />
    </div>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
