import Header from "../../organisms/Header";
import type { IBaseTemplateProps } from "./interfaces";

export default function BaseTemplate({ children, showBackButton }: IBaseTemplateProps) {
  return (
    <>
      <Header showBackButton={showBackButton} />

      {children}
    </>
  );
}