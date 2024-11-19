import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ICampaignData, IFilter } from './type';
import {
  CampaignStatus,
  DEFAULT_FILTER,
  PAGE_SIZE,
  ShopType,
  TypesNoti,
} from '@/modules/sendShopNoti/constant';
import { cloneDeep, find, get, join, map } from 'lodash';
import { shopNotiService } from '@/services';
import dayjs from 'dayjs';

export const useShopNotiStore = defineStore('shopNoti', () => {
  const notiFilter = ref<IFilter>(cloneDeep(DEFAULT_FILTER));
  const campaignData = ref<ICampaignData>({
    total: 0,
    data: [],
  });
  const isFetchingData = ref<boolean>(false);

  async function getCountCampaign() {
    isFetchingData.value = true;
    const params = {
      title: notiFilter.value.title,
      configType: join(notiFilter.value.configType, ','),
      page: notiFilter.value.page,
      limit: PAGE_SIZE,
      fromDate: notiFilter.value?.fromDate
        ? dayjs(notiFilter.value?.fromDate).format('YYYY-MM-DD HH:mm:ss')
        : undefined,
      endDate: notiFilter.value?.endDate
        ? dayjs(notiFilter.value?.endDate).format('YYYY-MM-DD HH:mm:ss')
        : undefined,
    };

    const { error, data } = await shopNotiService.getCountListNotiConfig(params).finally(() => {
      isFetchingData.value = false;
    });

    if (error) return;

    campaignData.value.total = Number(data);
  }

  async function getListCampaign() {
    isFetchingData.value = true;
    const params = {
      title: notiFilter.value.title,
      configType: join(notiFilter.value.configType, ','),
      page: notiFilter.value.page,
      limit: PAGE_SIZE,
      fromDate: notiFilter.value?.fromDate
        ? dayjs(notiFilter.value?.fromDate).format('YYYY-MM-DD HH:mm:ss')
        : undefined,
      endDate: notiFilter.value?.endDate
        ? dayjs(notiFilter.value?.endDate).format('YYYY-MM-DD HH:mm:ss')
        : undefined,
    };

    const { error, data } = await shopNotiService.getListNotiConfig(params).finally(() => {
      isFetchingData.value = false;
    });

    if (error) return;

    campaignData.value.data = map(data, (item) => {
      return {
        id: get(item, 'id'),
        info: {
          name: item?.title || '--',
          createAt: dayjs(item?.created).format('HH:mm:ss DD:MM:YYYY'),
          shopInfo: {
            types: map(item?.shop_info?.shop_types, (shop) => {
              return ShopType[shop];
            }),
            counts: get(item, ['shop_info', 'shop_counts']),
          },
          status: formatStatus(Number(item?.status), item?.time_start),
        },
        notiType: find(TypesNoti, (noti) => noti.value === item?.config_type)?.label,
        successMessage: {
          total: 0,
          rate: item?.success_rate || 0,
        },
        openRate: get(item, 'opened_rate'),
        totalCost: get(item, 'total_cost'),
      };
    });
  }

  function formatStatus(status, timeStart) {
    if (status === 0) return !timeStart ? CampaignStatus.NOT_ACTIVE : CampaignStatus.NOT_ACTIVE;
    if (status === 1) return CampaignStatus.ACTIVE;
  }

  function resetFilter() {
    notiFilter.value = cloneDeep(DEFAULT_FILTER);
  }

  return {
    notiFilter,
    campaignData,
    isFetchingData,
    getCountCampaign,
    getListCampaign,
    resetFilter,
  };
});
