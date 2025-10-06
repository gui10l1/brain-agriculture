import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Typography as="h1" size="lg">
        Brain Agriculture
      </Typography>

      <Button>Adicionar novo agricultor</Button>
    </Container>
  );
}