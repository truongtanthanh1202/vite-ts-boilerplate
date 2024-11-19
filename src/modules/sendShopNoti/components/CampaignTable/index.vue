<template>
  <Table
    :columns="columns"
    :data-source="campaignData.data"
    :loading="isFetchingData"
    :pagination="false"
    :bordered="false"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'info'">
        <div class="flex flex-col gap-[5px] overflow-hidden">
          <div class="font-medium">Tên chiến dịch: {{ record.info?.name }}</div>
          <div>Thời gian tạo: {{ record.info?.createAt }}</div>
          <div>
            Đối tượng: {{ record.info?.shopInfo?.counts || '--' }} shop | Loại shop:
            {{ !size(record.info?.shopInfo?.types) ? '--' : join(record.info?.shopInfo?.types, ', ') }}
          </div>
          <div
            class="text-sm px-1.5 rounded-sm bg-[#ABABAB] max-w-fit text-white"
            :class="{
              'bg-[#F18E32]': record.info?.status === CampaignStatus.SCHEDULED,
              'bg-ghtk': record.info?.status === CampaignStatus.ACTIVE,
            }"
          >
            {{ getTitleStatus(record.info?.status) }}
          </div>
        </div>
      </template>

      <template v-if="column.key === 'notiType'">
        <div>
          {{ record.notiType }}
        </div>
      </template>

      <template v-if="column.key === 'successMessage'">
        <div>{{ record.successMessage.total }} tin | {{ record.successMessage.rate }} %</div>
      </template>

      <template v-if="column.key === 'openRate'">
        <div>{{ record.openRate ? `${record.openRate} %` : '--' }}</div>
      </template>

      <template v-if="column.key === 'totalCost'">
        <div>
          {{ record.totalCost ? formatMoney(record.totalCost) : '--' }}
        </div>
      </template>

      <template v-if="column.key === 'action'">
        <div class="shrink-0 flex flex-col gap-3">
          <button @click="handleViewCampaign(record?.id)">Xem</button>
          <button
            v-if="record.info?.status !== CampaignStatus.ACTIVE"
            @click="handleEditCampaign(record?.id)"
          >
            Sửa
          </button>
          <button @click="handleDeleteCampaign(record?.id)">Xoá</button>
          <button @click="handleCopyCampaign(record?.id)">Copy</button>
        </div>
      </template>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { Table } from 'ant-design-vue';

import { useRouter } from 'vue-router';
import { notiPopup } from '@/shared/common';
import { join, size } from 'lodash';
import { RouteName } from '@/shared/constants';
import { useShopNotiStore } from '@/store';
import { storeToRefs } from 'pinia';
import { formatMoney } from '@/utils';
import { CampaignStatus } from '../../constant';

const router = useRouter();
const shopNotiStore = useShopNotiStore();

const { isFetchingData, campaignData } = storeToRefs(shopNotiStore);

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

function getTitleStatus(value: number) {
  if (value === CampaignStatus.NOT_ACTIVE) return 'Chưa kích hoạt gửi';
  if (value === CampaignStatus.SCHEDULED) return 'Đã hẹn lịch';
  if (value === CampaignStatus.ACTIVE) return 'Đã kích hoạt gửi';
}

function handleViewCampaign(id) {
  router.push({ name: RouteName.NOTIFY_CONFIG_DETAIL, params: { notiId: 63 } });
}

function handleEditCampaign(id) {}

function handleDeleteCampaign(id) {
  notiPopup.open({
    type: 'confirm',
    title: 'Xoá chiến dịch',
    message: 'Bạn có chắc chắn muốn xoá chiến dịch này không?',
    confirmText: 'Xoá',
    closeText: 'Hủy',
    confirmed: () => {
      console.log('delete campaign', id);
    },
  });
}

function handleCopyCampaign(id) {
  router.push({ name: RouteName.NOTIFY_CONFIG_NEW });
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
