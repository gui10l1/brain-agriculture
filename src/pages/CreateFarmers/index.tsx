import FarmersCreateTemplate from "../../modules/farmers/ui/templates/FarmersCreateTemplate";
import BaseTemplate from "../../modules/shared/ui/templates/Base";

export default function CreateFarmersPage() {
  return (
    <BaseTemplate showBackButton>
      <FarmersCreateTemplate />
    </BaseTemplate>
  )
}