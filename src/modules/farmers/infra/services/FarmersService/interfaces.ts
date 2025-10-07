interface IFarm {
  id: number;
  farmer_id: number;
  name: string;
  city: string;
  state: string;
  total_area: number;
  agricultural_area: number;
  vegetation_area: number;
  created_at: string;
  updated_at: string;
}

export interface IGetFarmsResponse {
  id: number;
  name: string;
  document: string;
  created_at: string;
  updated_at: string;
  farms: IFarm[];
}

export type IGetAllFarmersResponse = Array<{
  id: number;
  name: string;
  document: string;
  created_at: string;
  updated_at: string;
}>;