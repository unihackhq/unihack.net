import { CustomPerkI } from './custom-perk.interface';

export interface PackageI {
  id: number;
  name: string;
  price: string;
  colour: string;
  maxCapacity: string;
  perks: number[];
  customPerks: CustomPerkI[];
}
