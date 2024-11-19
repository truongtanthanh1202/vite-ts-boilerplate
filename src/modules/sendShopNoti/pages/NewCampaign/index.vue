<template>
  <div class="flex flex-col h-[calc(100vh-61px)] relative overflow-hidden">
    <div class="flex h-[68px] shrink-0 items-center px-4 gap-2 bg-[#F8F8F8]">
      <BackIcon class="text-black cursor-pointer" @click="handleBack" />
      <div class="text-xl font-medium">{{ pageTitles }}</div>
    </div>

    <div class="grow overflow-y-auto">
      <ConfigFields />
      <div class="h-1 bg-[#F6F8FA]"></div>
      <CampaignMessage />
    </div>

    <div class="flex justify-end gap-2 p-4">
      <Button size="large" class="!text-base !px-3 font-medium text-ghtk border-ghtk" @click="handleBack">
        Huỷ
      </Button>
      <Button type="primary" size="large" class="!text-base !px-3 font-medium shadow-none">
        Lưu thông tin
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BackIcon } from '@/shared/icons';
import { Button } from 'ant-design-vue';
import { CampaignMessage, ConfigFields } from '../../components';

import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const campaignID = computed<string>(() => route.query.id as string);
const isEditMode = computed<boolean>(() => !!campaignID.value);
const pageTitles = computed<string>(() => {
  return isEditMode.value ? 'Chỉnh sửa chiến dịch' : 'Tạo mới chiến dịch';
});

function handleBack() {
  router?.back();
}
</script>
