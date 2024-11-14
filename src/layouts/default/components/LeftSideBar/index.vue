<template>
  <div class="sideBar bg-[#2E323A] h-full w-[72px]" :class="{ '!w-[256px]': isExpand }">
    <div class="flex items-center gap-2 p-4 border-0 border-b border-solid border-[#E8E8E833] cursor-pointer">
      <img src="/logo.ico" alt="logo" class="h-8" />
      <div v-if="isExpand" class="shrink-0 text-base font-bold text-white">GHTK MARKETING</div>
    </div>
    <div
      v-for="tab in tabList"
      :key="tab.id"
      class="p-4 flex flex-col gap-6 border-0 border-b border-solid border-[#E8E8E833]"
    >
      <div v-for="(item, index) in tab.group" :key="index" class="cursor-pointer">
        <router-link
          :to="{ name: item.nameUrl }"
          class="flex items-center gap-3 h-7 text-[#bec7db] hover:text-[#EDF7FF] no-underline"
          :class="{ 'justify-center': !isExpand }"
        >
          <component :is="item.icon" class="shrink-0"></component>
          <div v-if="isExpand" class="shrink-0 tracking-tight">{{ item.name || '--' }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AddSquareIcon, MenuListIcon, PinFilledIcon } from '@/shared/icons';

import { RouteName } from '@/shared/constants';

interface IProps {
  isExpand: boolean;
}

const props = defineProps<IProps>();

const tabList = [
  {
    id: 1,
    group: [
      {
        name: 'DANH SÁCH CAMPAIGN',
        nameUrl: RouteName.Homepage,
        icon: MenuListIcon,
      },
      {
        name: 'TẠO MỚI CAMPAIGN',
        nameUrl: RouteName.Homepage,
        icon: AddSquareIcon,
      },
      {
        name: 'GỬI THÔNG BÁO CHO SHOP',
        nameUrl: RouteName.Homepage,
        icon: MenuListIcon,
      },
      {
        name: 'DANH SÁCH HUY HIỆU',
        nameUrl: RouteName.Homepage,
        icon: MenuListIcon,
      },
      {
        name: 'GÁN HUY HIỆU SHOP',
        nameUrl: RouteName.Homepage,
        icon: AddSquareIcon,
      },
    ],
  },
  {
    id: 2,
    group: [
      {
        name: 'CONFIG BBS CAPACITY',
        nameUrl: RouteName.Homepage,
        icon: AddSquareIcon,
      },
    ],
  },
  {
    id: 3,
    group: [
      {
        name: 'MOBILE VERSION',
        nameUrl: RouteName.Homepage,
        icon: AddSquareIcon,
      },
    ],
  },
  {
    id: 4,
    group: [
      {
        name: 'AREAS MANAGER',
        nameUrl: RouteName.Homepage,
        icon: PinFilledIcon,
      },
    ],
  },
];
</script>

<style scoped lang="scss" src="./styles.scss"></style>
