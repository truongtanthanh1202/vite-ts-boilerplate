<template>
  <div class="p-4 flex justify-between items-center border-0 border-b border-solid border-[#E8E8E8]">
    <div class="cursor-pointer" @click="toggleExpandSidebar">
      <HamburgerIcon class="text-black" />
    </div>
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2.5">
        <div class="text-[#5C5C5C]">Xin chào, Truong Tan Thanh</div>
        <ImageOrDefault
          class="h-6 w-6 rounded-full overflow-hidden"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ava"
        ></ImageOrDefault>
      </div>

      <router-link
        :to="{ name: RouteName.LOGOUT }"
        class="text-[#EB5757] font-medium cursor-pointer no-underline"
      >
        Đăng xuất
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImageOrDefault } from '@/components';
import { HamburgerIcon } from '@/shared/icons';

import { RouteName } from '@/shared/constants';

const isExpand = defineModel<boolean>('isExpand');

function toggleExpandSidebar() {
  isExpand.value = !isExpand.value;
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
