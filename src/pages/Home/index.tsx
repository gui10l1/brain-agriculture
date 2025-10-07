import { useEffect, useState } from "react";
import type { IFarmer } from "../../modules/farmers/ui/organisms/FarmersList/interfaces";
import FarmersListTemplate from "../../modules/farmers/ui/templates/FarmersListTemplate";
import { farmersService } from "../../modules/farmers/infra/services/FarmersService";

export default function Home() {
  const [farmers, setFarmers] = useState<IFarmer[]>([]);

  useEffect(() => {
    async function loadFarmers() {
      const farmers = await farmersService.getAll();

      setFarmers(farmers);
    }

    loadFarmers();
  }, []);

  return (
    <>
      <FarmersListTemplate farmers={farmers} />
    </>
  )
}