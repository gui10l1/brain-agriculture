import Typography from "../../atoms/Typography";
import type { ICard } from "./interfaces";
import { Container, Content } from "./styles";

export default function Card(props: ICard) {
  return (
    <Container>
      <Typography as="h1">
        {props.title}
      </Typography>

      <Content>
        {props.children}
      </Content>
    </Container>
  )
}