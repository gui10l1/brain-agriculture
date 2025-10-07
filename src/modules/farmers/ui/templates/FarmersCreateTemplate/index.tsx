import Container from "../../../../shared/ui/atoms/Container";
import FarmerForm from "../../organisms/FarmerForm";
import type { IFarmersCreateTemplate } from "./interfaces";

export default function FarmersCreateTemplate({
  onSubmit,
}: IFarmersCreateTemplate) {
  return (
    <Container>
      <FarmerForm onSubmit={onSubmit} />
    </Container>
  );
}