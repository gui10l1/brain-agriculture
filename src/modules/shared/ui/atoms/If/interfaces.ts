export interface IIf {
  condition: boolean;
  children: React.ReactNode;
  otherwise?: React.ReactNode;
}