import type { IFormProps } from "./interfaces";
import { Container } from "./styles";

export default function Form({ children, ...props }: IFormProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}