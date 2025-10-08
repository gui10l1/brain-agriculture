export interface IFormFarmData {
  name: string;
  city: string;
  state: string;
  totalArea: number;
  agriculturalArea: number;
  vegetationArea: number;
}

export interface IFarmsFormProps {
  defaultValues?: Partial<IFormFarmData>;
  onSubmit?(data: IFormFarmData): Promise<void>;
}
