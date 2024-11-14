<template>
  <div id="__main" class="flex w-full">
    <div>
      <LeftSideBar :isExpand="isExpand" />
    </div>
    <div id="__content">
      <Header v-model:isExpand="isExpand" />
      <router-view v-if="props.isLoaded" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Header, LeftSideBar } from './components';

import { ref } from 'vue';

interface Props {
  isLoaded: boolean;
}

const props = defineProps<Props>();
const isExpand = ref<boolean>(true);
</script>

<style scoped lang="scss" src="./styles.scss"></style>
