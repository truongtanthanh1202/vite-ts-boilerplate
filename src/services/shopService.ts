import { AxiosResponse } from 'axios';

import { httpClient } from '@/core';

class ShopService {
  async getNewRegistationList(params: any) {
    const res: AxiosResponse = await httpClient.get('v1/posts', {
      params,
    });

    return res.data;
  }
}

export const shopService = new ShopService();
