import Container from "../../../../shared/ui/atoms/Container";
import FarmsForm from "../../organisms/FarmsForm";
import type { IFarmsDetailsTemplateProps } from "./interfaces";

export default function FarmsDetailsTemplate({
  defaultValues,
  onSubmit,
}: IFarmsDetailsTemplateProps) {
  return (
    <Container>
      <FarmsForm defaultValues={defaultValues} onSubmit={onSubmit} />
    </Container>
  );
}