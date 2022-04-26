<script setup lang="ts">
import { ref } from 'vue';
import { Button as GButton } from 'ant-design-vue';

import { useCounterStore } from '@/store';
import { authService } from '@/services';

const counter = useCounterStore();

defineProps<{ msg: string }>();

const timer = ref<any>(0);

const handleLogin = async () => {
  const res = await authService.login('vietanh@gmail.com', '12');

  console.log(res);
};
</script>

<template>
  <div class="content">
    <img alt="Vue logo" src="@/assets/logo.png" />

    <div>
      <router-link to="/about">Go to about page</router-link>
    </div>

    <h1>{{ msg }}</h1>
    <GButton type="primary">Click me</GButton>
    <h1 class="text-3xl font-bold underline flex justify-end">Hello world!</h1>

    <div class="container mx-auto">
      <div class="columns-2">
        <h1>Hello</h1>
        <h2>Haha</h2>
      </div>
    </div>

    <p>Store counter: {{ counter.payload }}</p>
    <button type="button" @click="counter.increment">Increment store</button>
    <button type="button" @click="timer++">timer is: {{ timer }}</button>

    <button type="button" @click="handleLogin">Try test service</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
