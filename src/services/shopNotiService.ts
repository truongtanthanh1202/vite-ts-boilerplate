import { marketingClient, IResponse } from '@/core';

class ShopNotiService {
  async getListNotiConfig(filter): Promise<IResponse> {
    return await marketingClient.get('api/v1/notification-configs', { params: filter });
  }
}

export const shopNotiService = new ShopNotiService();
