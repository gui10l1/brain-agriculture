import type { TableColumn } from "react-data-table-component";
import DataTable from "../../../../shared/ui/organisms/DataTable";
import type { IFarm, IFarmer } from "./interfaces";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { farmersService } from "../../../infra/services/FarmersService";
import Card from "../../../../shared/ui/molecules/Card";

export default function FarmersFarmsList() {
  const { id } = useParams<Record<string, string>>();
  const [farms, setFarms] = useState<IFarm[]>([]);
  const [, setFarmer] = useState<IFarmer | null>(null);

  useEffect(() => {
    async function getFarms() {
      if (!id) return;

      const { farms, ...farmer } = await farmersService.getFarms(id);

      setFarms(farms);
      setFarmer(farmer);
    }

    getFarms();
  }, [id]);

  const columns: TableColumn<IFarm>[] = [
    {
      selector: row => row.name,
      name: "Nome",
      sortable: true
    },
    {
      selector: row => row.city,
      name: "Cidade",
      sortable: true
    },
    {
      selector: row => row.state,
      name: "Estado",
      sortable: true
    },
    {
      selector: row => row.total_area,
      name: "Área",
      sortable: true
    },
  ]

  return (
    <Card title="Fazendas">
      <DataTable columns={columns} data={farms} />
    </Card>
  );
}