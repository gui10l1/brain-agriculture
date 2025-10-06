import type { TableColumn } from "react-data-table-component";
import Card from "../../../../shared/ui/molecules/Card";
import DataTable from "../../../../shared/ui/organisms/DataTable";
import type { IColumn, IFarmersListProps } from "./interfaces";
import { useNavigate } from "react-router-dom";
import TableButtons from "../../../../shared/ui/molecules/TableButtons";

export default function FarmersList({ farmers }: IFarmersListProps) {
  const navigate = useNavigate();

  const handleNavigateToDetails = (id: number) => {
    navigate(`/farmers/${id}`);
  }

  const columns: TableColumn<IColumn>[] = [
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
    {
      cell: (row) => row.actions,
      name: "Ações",
      sortable: true
    },
  ];

  const data = farmers.map((farmer) => ({
    id: farmer.id,
    name: farmer.name,
    document: farmer.document,
    created_at: farmer.created_at,
    actions: (
      <TableButtons
        buttons={[
          { label: 'Detalhes', onClick: () => handleNavigateToDetails(farmer.id) },
          { label: 'Remover', variant: 'danger', onClick: () => alert('Removido!') }
        ]}
      />
    )
  }));

  return (
    <Card title="Lista de Agricultores">
      <DataTable
        columns={columns}
        data={data}
      />
    </Card>
  );
}