import API from "../api/base";

export default class BaseService {
  public readonly api: API;

  constructor() {
    this.api = new API();
  }
}