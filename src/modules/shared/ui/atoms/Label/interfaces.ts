import type { LabelHTMLAttributes } from "react";

export interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
}