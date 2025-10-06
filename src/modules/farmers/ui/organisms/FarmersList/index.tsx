import type { TableColumn } from "react-data-table-component";
import Card from "../../../../shared/ui/molecules/Card";
import DataTable from "../../../../shared/ui/organisms/DataTable";
import type { IFarmer, IFarmersListProps } from "./interfaces";

export default function FarmersList({ farmers }: IFarmersListProps) {
  const columns: TableColumn<IFarmer>[] = [
    {
      selector: row => row.name,
      name: "Nome",
      sortable: true
    },
    {
      selector: row => row.document,
      name: "Documento",
      sortable: true
    },
    {
      selector: row => row.created_at,
      name: "Criado em",
      sortable: true
    },
  ];

  return (
    <Card title="Lista de Agricultores">
      <DataTable
        columns={columns}
        data={farmers}
      />
    </Card>
  );
}