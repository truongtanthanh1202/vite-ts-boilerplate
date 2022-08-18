export interface IResponse {
  data?: any;
  statusCode?: number | string;
  success: boolean;
  message?: string;
}
