import Button from "../../atoms/Button";
import type { ITableButtons } from "./interfaces";
import { Container } from "./styles";

export default function TableButtons(props: ITableButtons) {
  return (
    <Container>
      {props.buttons.map((button, index) => (
        <Button key={index} onClick={button.onClick} variant={button.variant}>
          {button.label}
        </Button>
      ))}
    </Container>
  );
}