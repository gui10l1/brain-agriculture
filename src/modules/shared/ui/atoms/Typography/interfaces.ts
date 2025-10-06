import type { ComponentProps, ElementType } from "react";

export type ISize = 'xl' | 'lg' | 'sm' | 'md' | 'xs';

export type ITypography<T extends ElementType> = {
  as?: T;
  children: string;
  size?: ISize;
} & ComponentProps<T>;