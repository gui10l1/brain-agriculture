import type { ILabel } from "./interfaces";
import { Container } from "./styles";

export default function Label({ children, ...props }: ILabel) {
  return <Container {...props}>{children}</Container>
}