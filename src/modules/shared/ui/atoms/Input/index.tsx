import type { IInput } from "./interfaces";
import { Container } from "./styles";

export default function Input({ ...props }: IInput) {
  return <Container {...props} />;
}