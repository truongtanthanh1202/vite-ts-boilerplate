export interface IResponse {
  data?: any;
  statusCode?: number;
  success: boolean;
  errorText: string | null;
}

export interface IErrorResponse extends IResponse {
  statusCode?: number;
}
