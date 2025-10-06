import type { ElementType } from "react";
import type { ITypography } from "./interfaces";
import { getContainerElement } from "./styles";

export default function Typography<T extends ElementType = 'p'>({ as: Component = 'p', children, size, ...props }: ITypography<T>) {
  const Container = getContainerElement(Component, size || 'md');

  return (
    <Container {...props}>
      {children}
    </Container>
  );
}