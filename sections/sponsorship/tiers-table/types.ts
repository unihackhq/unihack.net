export interface CustomPerk {
    perkID: number;
    content: string;
}

export interface Package {
    id: number;
    name: string;
    price: string;
    colour: string;
    maxCapacity: string;
    perks: number[];
    customPerks: CustomPerk[];
}

export interface Perk {
    id: number;
    name: string;
    description: string;
}
  