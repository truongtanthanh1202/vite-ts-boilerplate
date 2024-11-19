<template>
  <div class="flex flex-col h-[calc(100vh-61px)] relative overflow-hidden">
    <div class="flex h-[68px] shrink-0 items-center px-4 gap-2 bg-[#F8F8F8]">
      <BackIcon class="text-black cursor-pointer" @click="handleBack" />
      <div class="text-xl font-medium">Chi tiết chiến dịch</div>
    </div>

    <div class="grow overflow-y-auto p-4 pb-0">
      <div class="content-item !pt-0">
        <div class="left">Tên chiến dịch</div>
        <div class="right font-medium">Hàng nặng cồng kềnh</div>
      </div>

      <div class="content-item">
        <div class="left">Loại shop</div>
        <div class="right">Vip</div>
      </div>

      <div class="content-item">
        <div class="left">Khu vực</div>
        <div class="right">Miền Bắc</div>
      </div>

      <div class="content-item">
        <div class="left">Địa chỉ đăng kí tại tỉnh</div>
        <div class="right">Hà Nội</div>
      </div>

      <div class="content-item">
        <div class="left">Địa chỉ đăng kí tại quận/huyện</div>
        <div class="right">Quận Cầu Giấy</div>
      </div>

      <div class="content-item">
        <div class="left">Địa chỉ đăng kí tại phường/xã</div>
        <div class="right">Phường Dịch Vọng</div>
      </div>

      <div class="content-item">
        <div class="left">Đơn lấy thành công từ ngày</div>
        <div class="right">05/10/2024</div>
      </div>

      <div class="content-item">
        <div class="left">Nội dung tin nhắn</div>
        <div class="right">
          HÀNG NẶNG CỒNG KỀNH, ECO BBS GIAO NHÀN TÊNH 📦. Hưởng trọn đặc quyền giảm 40% phí ship khi sử dụng
          dịch vụ ECO BBS. Thoải mái lên đơn từ 20kg chỉ từ 40k cho đơn nội tỉnh, nội miền 💥 ✨ Tiết kiệm chi
          phí ship hàng tối đa ✨ Theo dõi đơn hàng dễ dàng ✨ Miễn phí bốc xếp hàng hóa 2 chiều 📲 Đăng ký
          ngay tại đây: https://i.ghtk.vn/s/kNyHPz82
        </div>
      </div>

      <div class="content-item">
        <div class="left">Loại thông báo</div>
        <div class="right">SMS</div>
      </div>

      <div class="content-item">
        <div class="left">Thời gian tạo</div>
        <div class="right">08:05:29 04/10/2024</div>
      </div>

      <div class="content-item">
        <div class="left">Lần cuối truy cập</div>
        <div class="right">01/10/2024</div>
      </div>

      <div class="content-item">
        <div class="left">Thời gian hẹn lịch</div>
        <div class="right">08:05 - 04/10/2024</div>
      </div>

      <div class="content-item">
        <div class="left">Đối tượng</div>
        <div class="right">30 shop | Danh sách shop.exe</div>
      </div>

      <div class="content-item">
        <div class="left">Trạng thái chiến dịch</div>
        <div class="right text-[#5c5c5c]">Chưa kích hoạt gửi tin</div>
      </div>

      <div class="content-item">
        <div class="left">Thống kê thông báo</div>
        <div class="right">
          <div class="mb-1">Tổng tin đã gửi: 100 | Tin thành công: 90 | Tin thất bại: 10</div>
          <div class="cursor-pointer text-ghtk hover:underline">Xem chi tiết</div>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-2 p-4">
      <Button
        size="large"
        class="!text-base !px-3 font-medium text-ghtk border-ghtk"
        @click="handleEditCampaign"
        >Chỉnh sửa</Button
      >
      <Button type="primary" size="large" class="!text-base !px-3 font-medium shadow-none">Gửi thử</Button>
      <Button type="primary" size="large" class="!text-base !px-3 font-medium shadow-none">
        Hủy hẹn lịch
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BackIcon } from '@/shared/icons';
import { Button } from 'ant-design-vue';

import { shopNotiService } from '@/services';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { RouteName } from '@/shared/constants';

const route = useRoute();
const router = useRouter();

const notiId = route.params?.notiId;

onMounted(() => {
  shopNotiService.getDetailNotiConfig(notiId);
});

function handleBack() {
  router?.back();
}

function handleEditCampaign() {
  router.push({ name: RouteName.NOTIFY_CONFIG_NEW, query: { id: notiId } });
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
