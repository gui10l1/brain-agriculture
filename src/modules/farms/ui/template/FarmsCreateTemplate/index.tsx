import Container from "../../../../shared/ui/atoms/Container";
import FarmsForm from "../../organisms/FarmsForm";
import type { IFarmsCreateTemplateProps } from "./interfaces";

export default function FarmsCreateTemplate({
  onSubmit,
}: IFarmsCreateTemplateProps) {
  return (
    <Container>
      <FarmsForm onSubmit={onSubmit} />
    </Container>
  );
}