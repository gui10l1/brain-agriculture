interface IDefaultValues {
  name: string;
  document: string;
}

export interface IOnSubmitData {
  name: string;
  document: string;
}

export interface IFarmersDetailsTemplateProps {
  defaultValues: IDefaultValues;
  onSubmit(data: IOnSubmitData): Promise<void>;
}