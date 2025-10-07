import FarmersCreateTemplate from "../../modules/farmers/ui/templates/FarmersCreateTemplate";
import BaseTemplate from "../../modules/shared/ui/templates/Base";
import type { IFarmersData } from "./interfaces";

export default function CreateFarmersPage() {
  const handleCreateFarmersFormSubmit = async (data: IFarmersData) => {
    console.log(data);
  }

  return (
    <BaseTemplate showBackButton>
      <FarmersCreateTemplate
        onSubmit={handleCreateFarmersFormSubmit}
      />
    </BaseTemplate>
  )
}