export interface IFarm {
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

export interface IFarmer {
  id: number;
  name: string;
  document: string;
  created_at: string;
  updated_at: string;
}

export interface IParams {
  id?: string;
}
