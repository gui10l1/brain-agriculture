import type { PropsWithChildren } from "react";
import { Container as ContainerStyled } from "./styles";

export default function Container({ children }: PropsWithChildren) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
}