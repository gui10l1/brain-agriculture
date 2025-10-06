import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import type { IInputGroup } from "./interfaces";
import { Container } from "./styles";

export default function InputGroup({ label, input }: IInputGroup) {
  return (
    <Container>
      <Label htmlFor={input.id}>{label}</Label>
      <Input {...input} />
    </Container>
  );
}