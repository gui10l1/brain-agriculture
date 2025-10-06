import type { ButtonHTMLAttributes, ReactNode } from "react";

export type IButtonVariant = "success" | "danger" | 'warning';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>  {
  children: ReactNode;
  variant?: IButtonVariant;
}