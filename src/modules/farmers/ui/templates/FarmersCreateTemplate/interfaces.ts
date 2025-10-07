export interface IOnSubmitData {
  name: string;
  document: string;
}

export interface IFarmersCreateTemplate {
  onSubmit(data: IOnSubmitData): Promise<void>;
}