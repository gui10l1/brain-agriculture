import Header from "../../../../shared/ui/organisms/Header";
import FarmersList from "../../organisms/FarmersList";
import type { IFarmersHomeTemplateProps } from "./interfaces";
import { Container } from "./styles";

export default function FarmersHomeTemplate({ farmers }: IFarmersHomeTemplateProps) {
  return (
    <>
      <Header />

      <Container>
        <FarmersList farmers={farmers} />
      </Container>
    </>
  );
}