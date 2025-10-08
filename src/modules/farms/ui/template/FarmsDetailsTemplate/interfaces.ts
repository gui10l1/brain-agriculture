import type { IFormFarmData } from "../../organisms/FarmsForm/interfaces";

export interface IFarmsDetailsTemplateProps {
  defaultValues: Partial<IFormFarmData>;
  onSubmit(data: IFormFarmData): Promise<void>;
}