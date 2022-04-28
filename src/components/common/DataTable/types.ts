import type { TableColumnType, PaginationProps } from 'ant-design-vue';

export interface IColumn extends TableColumnType {
  scopedSlots?: string;
}

export interface IDataSource {
  loading?: boolean;
  noDataText?: string;
  data: any[];
  paginator: PaginationProps;
  columns: IColumn[];
}
