import type { IRow } from "./interfaces";
import { Container } from "./styles";

export default function Row({ children }: IRow) {
  return (
    <Container>
      {children}
    </Container>
  );
}