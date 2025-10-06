import BaseService from "../../../../shared/infra/service/base";
import type { IGetAllFarmersResponse, IGetFarmsResponse } from "./interfaces";

export default class FarmersService extends BaseService {
  constructor() {
    super();
  }

  public async getFarms(farmerId: string): Promise<IGetFarmsResponse> {
    return this.api.get(`/farmers/${farmerId}/farms`);
  }

  public async getAll(): Promise<IGetAllFarmersResponse> {
    return this.api.get(`/farmers`);
  }
}

export const farmersService = new FarmersService();
