export interface IResponse {
  data?: any;
  statusCode?: number;
  success: boolean;
  message?: string;
}

export interface IErrorResponse extends IResponse {
  statusCode?: number;
}
