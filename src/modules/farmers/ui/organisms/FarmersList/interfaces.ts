import type { ReactNode } from "react";

export interface IFarmer {
  id: number;
  name: string;
  document: string;
  created_at: string;
  updated_at: string;
}

export interface IFarmersListProps {
  farmers: IFarmer[];
}

export interface IColumn {
  id: number;
  name: string;
  document: string;
  created_at: string;
  actions: ReactNode;
}
