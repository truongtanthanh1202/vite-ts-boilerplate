<template>
  <div>
    <div>Homepage</div>
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '@/shared/constants';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  router.replace({ name: RouteName.NOTIFY_CONFIG });
});
</script>
