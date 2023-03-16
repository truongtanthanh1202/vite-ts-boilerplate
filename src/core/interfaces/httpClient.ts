export interface IResponse {
  data?: any;
  statusCode?: number | string;
  success: boolean;
  error: boolean;
  message?: string;
  rawResponse?: any;
}
