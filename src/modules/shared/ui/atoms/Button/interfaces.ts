import type { HTMLAttributes, ReactNode } from "react";

export interface IButton extends HTMLAttributes<HTMLButtonElement>  {
  children: ReactNode;
}