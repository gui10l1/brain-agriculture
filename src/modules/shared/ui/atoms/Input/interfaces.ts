import type { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
}