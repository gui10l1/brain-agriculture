import type { ElementType } from "react";
import type { ITypography } from "./interfaces";
import { getContainerElement } from "./styles";

export default function Typography<T extends ElementType = 'p'>({ as: Component, children, size, ...props }: ITypography<T>) {
  const Container = getContainerElement(Component, size);

  return (
    <Container {...props}>
      {children}
    </Container>
  );
}