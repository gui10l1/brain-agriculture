import { useEffect, useState } from "react";
import type { IFarmer } from "../../organisms/FarmersList/interfaces";
import FarmersHomeTemplate from "../../templates/FarmersHomeTemplate";
import { farmersService } from "../../../infra/services/FarmersService";

export default function FarmersHomePage() {
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
      <FarmersHomeTemplate farmers={farmers} />
    </>
  )
}