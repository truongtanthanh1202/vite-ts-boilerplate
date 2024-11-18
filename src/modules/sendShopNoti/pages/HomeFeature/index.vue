<template>
  <div class="flex flex-col h-[calc(100vh-61px)] relative overflow-hidden">
    <div class="flex h-[68px] shrink-0 items-center px-4 justify-between bg-[#F8F8F8]">
      <div class="text-xl font-medium">Gửi thông báo cho Shop</div>
      <Button
        class="flex items-center gap-2 !px-3 !text-base font-medium shadow-none"
        size="large"
        type="primary"
        @click="handleCreateCampaign"
      >
        <PlusIcon class="text-white" />
        Chiến dịch
      </Button>
    </div>

    <div>
      <HeaderFilter />
    </div>

    <div class="grow overflow-y-auto px-4">
      <CampaignTable />
    </div>

    <div
      class="h-14 shrink-0 px-4 flex items-center justify-start border-0 border-t border-solid border-[#E8E8E8] bg-white"
    >
      <Pagination :total="100" :pageSize="10" :showSizeChanger="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Pagination } from 'ant-design-vue';
import { PlusIcon } from '@/shared/icons';
import { CampaignTable, HeaderFilter } from '../../components';

import { shopNotiService } from '@/services';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { RouteName } from '@/shared/constants';

const router = useRouter();

onMounted(() => {
  shopNotiService.getCountListNotiConfig({});
  shopNotiService.getListNotiConfig({});
});

function handleCreateCampaign() {
  router.push({ name: RouteName.NOTIFY_CONFIG_NEW });
}
</script>
