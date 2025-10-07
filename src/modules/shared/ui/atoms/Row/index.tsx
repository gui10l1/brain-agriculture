import type { IRow } from "./interfaces";
import { Container } from "./styles";

export default function Row({ children, align }: IRow) {
  return (
    <Container align={align || 'left'}>
      {children}
    </Container>
  );
}