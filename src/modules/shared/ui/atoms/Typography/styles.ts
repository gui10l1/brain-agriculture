import type { ElementType } from "react";
import styled, { type WebTarget } from "styled-components";
import type { ISize } from "./interfaces";

export const getContainerElement = (type: WebTarget, size: ISize) => {
  const sizes: Record<ISize, number> = {
    xl: 32,
    lg: 24,
    md: 16,
    sm: 14,
    xs: 12,
  } 

  return styled(type as ElementType)`
    font-family: 'Inter', sans-serif;
    font-size: ${sizes[size]}px;
  `;
} 