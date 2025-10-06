import type { TableColumn } from "react-data-table-component";

export interface IDataTable<T> {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
}