import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import { Container, Content } from "./styles";
import Back from "../../molecules/Back";
import type { IHeader } from "./interfaces";
import If from "../../atoms/If";

export default function Header(props: IHeader) {
  const navigate = useNavigate();

  const handleNavigateToCreateFarmer = () => {
    navigate("/farmers/create");
  }

  return (
    <Container>
      <Content>
        <If condition={Boolean(props.showBackButton)}>
          <Back />
        </If>

        <Typography as="h1" size="lg">
          Brain Agriculture
        </Typography>
      </Content>

      <Button onClick={handleNavigateToCreateFarmer}>
        Adicionar novo agricultor
      </Button>
    </Container>
  );
}