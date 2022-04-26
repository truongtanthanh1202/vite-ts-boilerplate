<script lang="ts" setup>
import { Button } from 'ant-design-vue';

const MENUS = [
  'Shop có lỗi phát sinh',
  'Shop thiếu thông tin',
  'Shop Lives',
  'Shop dùng tính năng mới',
  'Shop giảm tần suất sử dụng',
  'Shop ngưng sử dụng',
];
</script>

<template>
  <div class="headline menuItemBorder px-4 flex justify-between items-center">
    <h3 class="font-bold mb-0 text-[18px]">Công việc CS moshop</h3>
    <Button type="primary" class="rounded-md">Chốt ca</Button>
  </div>

  <div class="headlineHandle menuItemBorder px-4 flex items-center">
    <h3 class="font-bold mb-0 text-[18px]">Cần xử lý</h3>
  </div>

  <div class="shopIssue">
    <div v-for="menu in MENUS" class="shopIssue__item px-4 py-3 cursor-pointer">{{ menu }}</div>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
