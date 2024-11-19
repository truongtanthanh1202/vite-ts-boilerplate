<template>
  <div class="p-4">
    <div class="mb-3 grid gap-3 grid-cols-8">
      <Input
        v-model:value="notiFilter.title"
        placeholder="Tên chiến dịch"
        size="large"
        class="m-0 col-span-2 text-base"
      >
        <template #prefix>
          <SearchOutlineIcon class="text-[#5C5C5C]" />
        </template>
      </Input>
      <SelectMultiCustom
        v-model:value="notiFilter.configType"
        placeholder="Loại thông báo"
        :options="TypesNoti"
        class="m-0 col-span-2"
      />
      <SelectMultiCustom
        placeholder="Trạng thái chiến dịch"
        :options="CampaignsStatus"
        class="m-0 col-span-2"
      />
      <SelectMultiCustom
        v-model:value="notiFilter.successRate"
        placeholder="Tỉ lệ gửi thành công"
        :options="SuccessRateList"
        class="m-0 col-span-2"
      />
    </div>

    <div class="grid gap-3 grid-cols-8">
      <DatePicker
        v-model:value="notiFilter.fromDate"
        placeholder="Thời gian tạo từ ngày"
        size="large"
        class="m-0 col-span-2"
        format="DD-MM-YYYY"
      />
      <DatePicker
        v-model:value="notiFilter.endDate"
        placeholder="Thời gian tạo đến ngày"
        size="large"
        class="m-0 col-span-2"
        format="DD-MM-YYYY"
      />
      <SelectMultiCustom
        v-model:value="notiFilter.openedRate"
        placeholder="Tỉ lệ mở tin"
        :options="OpenedRateList"
        class="m-0 col-span-2"
      />
      <div class="m-0 col-span-2 flex items-center gap-3">
        <Button
          type="primary"
          size="large"
          class="w-full shadow-none !text-base font-medium"
          @click="handleGetListCampaign"
        >
          Tìm kiếm
        </Button>
        <Button
          size="large"
          class="flex items-center justify-center gap-2 w-full !text-base text-ghtk border-ghtk font-medium"
          @click="resetFilter"
        >
          <ReloadIcon class="text-ghtk" />
          Làm mới
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input, DatePicker, Button } from 'ant-design-vue';
import { ReloadIcon, SearchOutlineIcon } from '@/shared/icons';
import { SelectMultiCustom } from '@/components';

import { TypesNoti, CampaignsStatus, OpenedRateList, SuccessRateList } from '../../constant';
import { useShopNotiStore } from '@/store';
import { storeToRefs } from 'pinia';

const shopNotiStore = useShopNotiStore();
const { notiFilter } = storeToRefs(shopNotiStore);

async function handleGetListCampaign() {
  notiFilter.value.page = 1;

  await shopNotiStore.getCountCampaign();
  await shopNotiStore.getListCampaign();
}

function resetFilter() {
  shopNotiStore.resetFilter();
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
