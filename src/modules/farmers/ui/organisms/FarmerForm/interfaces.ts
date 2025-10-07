interface IFormCropYieldsData {
  year: number;
  crops: string[];
}

interface IFormFarmData {
  name: string;
  farmerId: number;
  city: string;
  state: string;
  totalArea: number;
  agriculturalArea: number;
  vegetationArea: number;
  cropYields: IFormCropYieldsData[];
}

export interface IFormFarmerData {
  name: string;
  document: string;
  farm: IFormFarmData[];
}