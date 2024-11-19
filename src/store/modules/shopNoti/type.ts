export interface ICampaignData {
  total: number;
  data: any[];
}

export interface IFilter {
  title: string;
  configType: any[];
  successRate?: any[];
  openedRate?: any[];
  fromDate?: string;
  endDate?: string;
  page: number;
  limit: number;
}
