import FarmersDetailsTemplate from "../../modules/farmers/ui/templates/FarmersDetailsTemplate";
import BaseTemplate from "../../modules/shared/ui/templates/Base";
import type { IFarmersData } from "./interfaces";

export default function DetailsFarmersPage() {
  const handleDetailsFarmersFormSubmit = async (data: IFarmersData) => {
    console.log(data);
  }

  return (
    <BaseTemplate showBackButton>
      <FarmersDetailsTemplate
        onSubmit={handleDetailsFarmersFormSubmit}
        defaultValues={{
          document: 'Document',
          name: 'Name',
        }}
      />
    </BaseTemplate>
  )
}