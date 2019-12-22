import { CellI } from '../cell/cell.interface';

export interface ColumnI {
  id: number;
  title: string;
  subtitle: string;
  accentColour: string;
  footerText: string;
  cellData: CellI[];
}
