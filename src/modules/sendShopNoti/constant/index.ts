export const PAGE_SIZE = 10;

export const DEFAULT_FILTER = {
  title: '',
  configType: [],
  successRate: [],
  openedRate: [],
  page: 1,
  limit: PAGE_SIZE,
};

export const ShopType = Object.freeze({
  0: 'Standard',
  1: 'Pro',
  2: 'VIP',
  3: 'Prime',
});

export enum CampaignStatus {
  NOT_ACTIVE = 0, // chưa kích hoạt gửi
  SCHEDULED = 1, // đã hẹn lịch
  ACTIVE = 2, // đã kích hoạt gửi
}

export const TypesNoti = [
  {
    label: 'Thông báo',
    value: 1,
  },
  {
    label: 'Tin nhắn Gchat',
    value: 2,
  },
  {
    label: 'Tin nhắn ZNS',
    value: 3,
  },
  {
    label: 'Tin nhắn SMS',
    value: 4,
  },
  {
    label: 'Email',
    value: 5,
  },
];

export const CampaignsStatus = [
  {
    label: 'Đã kích hoạt gửi',
    value: 0,
  },
  {
    label: 'Chưa kịch hoạt gửi',
    value: 1,
  },
  {
    label: 'Đã hẹn lịch gửi ',
    value: 2,
  },
];

export const SuccessRateList = [
  {
    label: 'Dưới 50%',
    value: '<50',
  },
  {
    label: 'Từ 50% đến 70%',
    value: '50-70',
  },
  {
    label: '70% đến 80%',
    value: '70-80',
  },
  {
    label: '80% đến 90%',
    value: '80-90',
  },
  {
    label: 'Trên 90%',
    value: '>90',
  },
];

export const OpenedRateList = [
  {
    label: 'Dưới 10%',
    value: '<10',
  },
  {
    label: 'Từ 10% đến 30%',
    value: '10-30',
  },
  {
    label: '30% đến 50%',
    value: '30-50',
  },
  {
    label: '50% đến 70%',
    value: '50-70',
  },
  {
    label: 'Trên 70%',
    value: '>70',
  },
];
