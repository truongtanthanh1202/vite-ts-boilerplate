<template>
  <Table :columns="columns" :data-source="data" :loading="isLoading" :pagination="false" :bordered="true">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'info'">
        <div class="flex flex-col gap-[5px] overflow-hidden">
          <div class="font-medium">Tên chiến dịch: {{ record.info?.name }}</div>
          <div>Thời gian tạo: {{ dayjs(record.info?.createAt).format('HH:mm:ss DD:MM:YYYY') }}</div>
          <div>
            Đối tượng: {{ record.info?.shopInfo?.counts }} shop | Loại shop:
            {{ join(record.info?.shopInfo?.types, ', ') }}
          </div>
          <div class="text-sm px-1.5 rounded-sm bg-[#ABABAB] max-w-fit text-white">Chưa kích hoạt gửi</div>
        </div>
      </template>

      <template v-if="column.key === 'notiType'">
        <div>
          {{ record.notiType }}
        </div>
      </template>

      <template v-if="column.key === 'successMessage'">
        <div>
          {{ record.successMessage }}
        </div>
      </template>

      <template v-if="column.key === 'openRate'">
        <div class="flex justify-center">{{ record.openRate }}</div>
      </template>

      <template v-if="column.key === 'totalCost'">
        <div>
          {{ record.totalCost }}
        </div>
      </template>

      <template v-if="column.key === 'action'">
        <div class="shrink-0 flex flex-col gap-3">
          <button @click="handleViewCampaign">Xem</button>
          <button @click="handleDeleteCampaign">Xoá</button>
          <button @click="handleCopyCampaign">Copy</button>
        </div>
      </template>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { Table } from 'ant-design-vue';

import { useRouter } from 'vue-router';
import { notiPopup } from '@/shared/common';
import dayjs from 'dayjs';
import { join } from 'lodash';
import { ref } from 'vue';
import { RouteName } from '@/shared/constants';

const router = useRouter();

const isLoading = ref<boolean>(false);

const columns = [
  {
    title: 'Thông tin',
    dataIndex: 'info',
    key: 'info',
  },
  {
    title: 'Loại thông báo',
    dataIndex: 'notiType',
    key: 'notiType',
    width: 200,
  },
  {
    title: 'Tin thành công',
    dataIndex: 'successMessage',
    key: 'successMessage',
    width: 200,
  },
  {
    title: 'Tỉ lệ mở tin',
    key: 'openRate',
    dataIndex: 'openRate',
    width: 160,
  },
  {
    title: 'Tổng chi phí',
    key: 'totalCost',
    dataIndex: 'totalCost',
    width: 200,
  },
  {
    title: 'Thao tác',
    key: 'action',
    width: 95,
  },
];

const data = [
  {
    info: {
      name: 'Hàng nặng cồng kềnh',
      createAt: '08:05:29 04/10/2024',
      shopInfo: {
        types: ['VIP', 'Pro'],
        counts: 350,
      },
      status: 0,
    },
    notiType: 'Tin nhắn Gchat',
    successMessage: {
      total: 500,
      rate: 90,
    },
    openRate: 90,
    totalCost: 100000,
  },
  {
    info: {
      name: 'Hàng nặng cồng kềnh',
      createAt: '08:05:29 04/10/2024',
      shopInfo: {
        types: ['VIP', 'Pro'],
        counts: 350,
      },
      status: 0,
    },
    notiType: 'Tin nhắn Gchat',
    successMessage: {
      total: 500,
      rate: 90,
    },
    openRate: 90,
    totalCost: 100000,
  },
  {
    info: {
      name: 'Hàng nặng cồng kềnh',
      createAt: '08:05:29 04/10/2024',
      shopInfo: {
        types: ['VIP', 'Pro'],
        counts: 350,
      },
      status: 0,
    },
    notiType: 'Tin nhắn Gchat',
    successMessage: {
      total: 500,
      rate: 90,
    },
    openRate: 90,
    totalCost: 100000,
  },
];

function handleViewCampaign() {
  router.push({ name: RouteName.NOTIFY_CONFIG_DETAIL, params: { notiId: 63 } });
}

function handleDeleteCampaign() {
  notiPopup.open({
    type: 'confirm',
    title: 'Xoá chiến dịch',
    message: 'Bạn có chắc chắn muốn xoá chiến dịch này không?',
    confirmText: 'Xoá',
    closeText: 'Hủy',
    confirmed: () => {
      console.log('delete campaign');
    },
  });
}

function handleCopyCampaign() {
  router.push({ name: RouteName.NOTIFY_CONFIG_NEW });
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
