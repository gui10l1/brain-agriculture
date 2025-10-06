import type { AxiosInstance } from "axios";
import axios from "axios";

export default class API {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });
  }

  async get(path: string, params?: Record<string, string>) {
    try {
      const response = await this.client.get(path, { params });
    
      return response.data;
    } catch (err) {
      console.error(`GET request - ${path} - error:`, err);
    }
  }

  async post<T>(path: string, data: T, params?: Record<string, string>) {
    try {
      const response = await this.client.post(path, data, { params });

      return response.data;
    } catch (err) {
      console.error(`POST request - ${path} - error:`, err);
    }
  }

  async put<T>(path: string, data: T, params?: Record<string, string>) {
    try {
      const response = await this.client.put(path, data, { params });

      return response.data;
    } catch (err) {
      console.error(`PUT request - ${path} - error:`, err);
    }
  }

  async delete(path: string, params?: Record<string, string>) {
    try {
      const response = await this.client.get(path, { params });
    
      return response.data;
    } catch (err) {
      console.error(`GET request - ${path} - error:`, err);
    }
  }
}