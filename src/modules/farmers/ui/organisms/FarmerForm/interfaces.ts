export interface IFormFarmerData {
  name: string;
  document: string;
}

export type IFormFarmerDefaultValues = Partial<IFormFarmerData>;

export interface IFarmerFormProps {
  defaultValues?: IFormFarmerDefaultValues;
  onSubmit?(data: IFormFarmerData): Promise<void>;
}
