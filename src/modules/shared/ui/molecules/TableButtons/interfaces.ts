import type { IButtonVariant } from "../../atoms/Button/interfaces";

interface IButtonProps {
  onClick?(): void;
  label: string;
  variant?: IButtonVariant;
}

export interface ITableButtons {
  buttons: IButtonProps[];
}