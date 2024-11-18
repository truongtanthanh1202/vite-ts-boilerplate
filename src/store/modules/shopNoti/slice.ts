import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ICampaignData } from './type';

export const useShopNotiStore = defineStore('shopNoti', () => {
  const notiFilter = ref<any>({});
  const campaignData = ref<ICampaignData>({
    total: 0,
    data: [],
  });

  return {
    notiFilter,
    campaignData,
  };
});
