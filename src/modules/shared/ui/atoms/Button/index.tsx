import type { IButton } from "./interfaces";
import { Container } from "./styles";

export default function Button({ children, ...props }: IButton) {
  return <Container {...props}>{children}</Container>;
}