import DataTableBase from 'react-data-table-component';
import type { IDataTable } from './interfaces';
import Spinner from '../../atoms/Spinner';

export default function DataTable<T>({ columns, data, loading }: IDataTable<T>) {
  if (loading) return <Spinner size="small" />;

  return (
    <DataTableBase
      columns={columns}
      data={data}
      pagination
      highlightOnHover
    />
  );
};
