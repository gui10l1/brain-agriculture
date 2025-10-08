import type { IFormFarmData } from "../../organisms/FarmsForm/interfaces";

export interface IFarmsCreateTemplateProps {
  onSubmit(data: IFormFarmData): Promise<void>;
}