import Container from "../../../../shared/ui/atoms/Container";
import Header from "../../../../shared/ui/organisms/Header";
import FarmersList from "../../organisms/FarmersList";
import type { IFarmersHomeTemplateProps } from "./interfaces";

export default function FarmersListTemplate({ farmers }: IFarmersHomeTemplateProps) {
  return (
    <>
      <Header />

      <Container>
        <FarmersList farmers={farmers} />
      </Container>
    </>
  );
}