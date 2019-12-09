export interface PackageI {
  id: number;
  name: string;
  price: string;
  colour: string;
  maxCapacity: string;
  perks: number[];
  customPerks: Array<{ perkID: number; content: string }>;
}
