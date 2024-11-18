import { marketingClient, IResponse } from '@/core';

class ShopNotiService {
  async getCountListNotiConfig(filter): Promise<IResponse> {
    return await marketingClient.get('api/v1/notification-configs/count', { params: filter });
  }

  async getListNotiConfig(filter): Promise<IResponse> {
    return await marketingClient.get('api/v1/notification-configs', { params: filter });
  }

  async getDetailNotiConfig(id): Promise<IResponse> {
    return await marketingClient.get(`api/v1/notification-configs/${id}`);
  }
}

export const shopNotiService = new ShopNotiService();
