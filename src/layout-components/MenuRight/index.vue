<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import { RightOutlined } from '@ant-design/icons-vue';

const MENUS = [
  { name: 'Shop có lỗi phát sinh' },
  { name: 'Shop thiếu thông tin', active: true },
  { name: 'Shop Lives' },
  { name: 'Shop dùng tính năng mới' },
  { name: 'Shop giảm tần suất sử dụng' },
  { name: 'Shop ngưng sử dụng' },
];

const SHOPS = [
  { name: 'Bùi Hà Phương', tel: '096***2931' },
  { name: 'Bùi Hà Phương', tel: '096***2931' },
  { name: 'Bùi Hà Phương', tel: '096***2931' },
  { name: 'Bùi Hà Phương', tel: '096***2931' },
];
</script>

<template>
  <div class="menu flex flex-col overflow-hidden h-full">
    <div class="shrink-0">
      <div class="headline menuItemBorder px-2 flex justify-between items-center">
        <h3 class="font-bold mb-0 text-[18px]">Công việc CS moshop</h3>
        <Button type="primary" class="rounded-md">Chốt ca</Button>
      </div>

      <div class="headlineHandle menuItemBorder px-2 flex items-center">
        <h3 class="font-bold mb-0 text-[18px]">Cần xử lý</h3>
      </div>

      <div class="shopIssue">
        <div
          v-for="(menu, menuIndex) in MENUS"
          :key="menuIndex"
          class="issueItem px-2 py-3 cursor-pointer flex justify-between items-center"
          :class="{ 'issueItem--active': menu.active }"
        >
          <div class="mr-1">{{ menu.name }}</div>
          <div class="issueItem__icon shrink-0">
            10
            <RightOutlined class="text-gray-400" />
          </div>
        </div>
      </div>

      <div class="shopTitle menuItemBorder px-2 flex items-center">
        <h3 class="font-bold mb-0 text-[18px]">Tình hình shop (159 shop)</h3>
      </div>
    </div>

    <div class="shopList overflow-auto">
      <div
        v-for="(shop, shopIndex) in SHOPS"
        :key="shopIndex"
        class="shopItem flex items-center px-2 py-2 cursor-pointer"
      >
        <div class="shopItem__avatar mr-2">
          <img class="rounded-full object-cover" src="@/assets/images/avatar.jpg" />
        </div>
        <div class="min-w-0">
          <div class="font-medium">{{ shop.name }} | {{ shop.tel }}</div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-red-500 rounded-full mr-1 shrink-0"></div>
            <div class="text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
              Gửi tin nhắn đến KH Mỹ Hoa từ pa
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
