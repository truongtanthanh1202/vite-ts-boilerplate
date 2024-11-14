<template>
  <div></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import { authLogout } from '@/core';

onMounted(async () => {
  authLogout();
});
</script>
