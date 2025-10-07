import type React from "react";

export interface IRow {
  children: React.ReactNode;
  align?: 'right' | 'center' | 'left';
}