import type { IIf } from "./interfaces";

export default function If({ children, condition, otherwise = null }: IIf) {
  if (condition) return children;

  return otherwise;
}