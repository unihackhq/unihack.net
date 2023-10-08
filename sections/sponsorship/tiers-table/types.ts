export interface CustomPerk {
    perkID: number;
    content?: string;
    isChecked?: boolean;
    notes?: string;
}

export interface Package {
    id: number;
    name: string;
    price: string;
    colour: string;
    maxCapacity: string;
    maxCapacityUnit?: string;
    perks: (number | CustomPerk)[];
}

export interface Perk {
    id: number;
    name: string;
    description: string;
}
  