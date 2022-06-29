import { IResponse } from '@/core';

import { httpClient } from '@/core';

class ShopService {
  async getNewRegistationList(params: any) {
    const res: IResponse = await httpClient.get('v1/posts', {
      params,
    });

    return res;
  }
}

export const shopService = new ShopService();
