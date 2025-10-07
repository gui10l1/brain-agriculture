import Container from "../../../../shared/ui/atoms/Container";
import FarmersForm from "../../organisms/FarmerForm";
import type { IFarmersDetailsTemplateProps } from "./interfaces";

export default function FarmersDetailsTemplate({
  defaultValues,
  onSubmit,
}: IFarmersDetailsTemplateProps) {
  return (
    <Container>
      <FarmersForm defaultValues={defaultValues} onSubmit={onSubmit} />
    </Container>
  );
}