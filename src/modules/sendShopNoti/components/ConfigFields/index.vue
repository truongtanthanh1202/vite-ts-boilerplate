<template>
  <div class="flex gap-4 p-4">
    <!-- left content -->
    <div class="w-[50%] overflow-hidden flex flex-col gap-4">
      <div>
        <div class="text-[#5c5c5c] font-medium mb-1">Loại shop</div>
        <Select placeholder="Chọn loại shop" class="w-full" />
      </div>
      <div>
        <div class="text-[#5c5c5c] font-medium mb-1">Khu vực</div>
        <Select placeholder="Chọn khu vực" class="w-full" />
      </div>
      <div>
        <div class="text-[#5c5c5c] font-medium mb-1">Áp dụng với shop có địa chỉ đăng ký tại Quận/Huyện</div>
        <Select placeholder="Chọn khu vực shop có địa chỉ đăng ký tại Quận/Huyện" class="w-full" />
      </div>
      <div>
        <div class="text-[#5c5c5c] font-medium mb-1">Shop có đơn lấy thành công từ ngày</div>
        <DatePicker placeholder="Chọn thời gian" class="w-full" format="DD-MM-YYYY" />
      </div>
      <div>
        <div class="text-[#5c5c5c] font-medium mb-1">Hẹn lịch</div>
        <DatePicker placeholder="Chọn thời gian" class="w-full" format="DD-MM-YYYY" />
      </div>
    </div>

    <!-- right content -->
    <div class="w-[50%] overflow-hidden flex flex-col gap-4">
      <div>
        <div class="flex items-center gap-3 mb-1">
          <div class="text-[#5c5c5c] font-medium">Chỉ định shop theo danh sách excel</div>
          <div class="font-medium text-ghtk hover:underline cursor-pointer">Tải file mẫu</div>
        </div>
        <div class="flex items-center gap-2.5">
          <Button class="text-ghtk font-medium border-ghtk">Choose file</Button>
          <div class="text-[#7A7A7A]">Chưa có file</div>
        </div>
      </div>
      <div>
        <div class="text-[#5c5c5c] font-medium mb-1">Áp dụng với shop có địa chỉ đăng ký tại Tỉnh</div>
        <Select placeholder="Chọn khu vực shop có địa chỉ đăng ký tại Tỉnh" class="w-full" />
      </div>
      <div>
        <div class="text-[#5c5c5c] font-medium mb-1">Áp dụng với shop có địa chỉ đăng ký tại Phường/Xã</div>
        <Select placeholder="Chọn khu vực shop có địa chỉ đăng ký tại Phường/Xã" class="w-full" />
      </div>
      <div>
        <div class="text-[#5c5c5c] font-medium mb-1">Áp dụng với shop đăng ký từ ngày đến ngày</div>
        <DatePicker placeholder="Chọn thời gian" class="w-full" format="DD-MM-YYYY" />
      </div>
      <div>
        <div class="text-[#5c5c5c] font-medium mb-1">Lần cuối truy cập app</div>
        <DatePicker placeholder="Chọn thời gian" class="w-full" format="DD-MM-YYYY" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Select, DatePicker, Button } from 'ant-design-vue';
</script>
