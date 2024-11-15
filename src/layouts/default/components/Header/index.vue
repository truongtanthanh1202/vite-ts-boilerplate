<template>
  <div class="p-4 flex justify-between items-center border-0 border-b border-solid border-[#E8E8E8]">
    <div class="cursor-pointer" @click="toggleExpandSidebar">
      <HamburgerIcon class="text-black" />
    </div>
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2.5">
        <div class="text-[#5C5C5C]">Xin chào, {{ userName || '' }}</div>
        <ImageOrDefault
          class="h-6 w-6 rounded-full overflow-hidden"
          src="/images/user-default.png"
          alt="avatar"
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

import { ID_STORAGE_ALL, RouteName } from '@/shared/constants';
import { computed } from 'vue';
import { jsonDecode } from '@/helpers';
import { get } from 'lodash';

const isExpand = defineModel<boolean>('isExpand');

const userName = computed(() => {
  const idStorageAll = jsonDecode(localStorage.getItem(ID_STORAGE_ALL));

  return get(idStorageAll, ['GhtkTokenStorage', 'idToken', 'claims', 'name']);
});

function toggleExpandSidebar() {
  isExpand.value = !isExpand.value;
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
