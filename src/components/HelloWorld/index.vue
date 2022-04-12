<script setup lang="ts">
import { ref } from 'vue';

import { useCounterStore } from '@/store';

const counter = useCounterStore();

defineProps<{ msg: string }>();

const timer = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>Store counter: {{ counter.payload }}</p>
  <button type="button" @click="counter.increment">Increment</button>

  <button type="button" @click="timer++">timer is: {{ timer }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
