<template>
  <div class="p-4">
    <div class="mb-3 grid gap-3 grid-cols-8">
      <Input placeholder="Tên chiến dịch" size="large" class="m-0 col-span-2 text-base"> </Input>
      <Select placeholder="Loại thông báo" size="large" class="m-0 col-span-2" />
      <Select placeholder="Trạng thái chiến dịch" size="large" class="m-0 col-span-2" />
      <Select placeholder="Tỉ lệ gửi thành công" size="large" class="m-0 col-span-2" />
    </div>

    <div class="grid gap-3 grid-cols-8">
      <DatePicker
        placeholder="Thời gian tạo từ ngày"
        size="large"
        class="m-0 col-span-2"
        format="DD-MM-YYYY"
      />
      <DatePicker
        placeholder="Thời gian tạo đến ngày"
        size="large"
        class="m-0 col-span-2"
        format="DD-MM-YYYY"
      />
      <Select placeholder="Tỉ lệ mở tin" size="large" class="m-0 col-span-2" />
      <div class="m-0 col-span-2 flex items-center gap-3">
        <Button type="primary" size="large" class="w-full shadow-none !text-base font-medium"
          >Tìm kiếm</Button
        >
        <Button
          size="large"
          class="flex items-center justify-center gap-2 w-full !text-base text-ghtk border-ghtk font-medium"
        >
          <ReloadIcon class="text-ghtk" />
          Làm mới
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input, Select, DatePicker, Button } from 'ant-design-vue';
import { ReloadIcon } from '@/shared/icons';
</script>
