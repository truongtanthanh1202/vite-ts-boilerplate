export interface IColumn {
  title: string;
  width?: string;
  key?: string;
  scopedSlots?: string;
  render?: (value: any, rowData: any, rowIndex: number) => void;
}

export interface IPaginator {
  textHint?: string;
  currentPage: number;
  total: number;
  perPage: number;
}

export interface IExtras {
  processing?: boolean;
  noDataText?: string;
}

export interface IDataSource {
  extras: IExtras;
  paginator: IPaginator;
  data: any[];
  columns: IColumn[];
}
