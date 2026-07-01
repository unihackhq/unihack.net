

interface CommonPrize {
  type: string;
  name: string
  winner: string
  devpostUrl?: string
  university?: string;
}

interface MainPrize extends CommonPrize {
  type: 'MAIN';
  place: 'FIRST' | 'SECOND' | 'THIRD';
}

interface CategoryPrize extends CommonPrize {
  type: 'CATEGORY';
}

interface SponsorPrize extends CommonPrize {
  type: 'SPONSOR';
  sponsor: string;
}

export type Prize = MainPrize | CategoryPrize | SponsorPrize

export interface Event {
  name: string
  id?: string;
  type: 'IN_PERSON' | 'VIRTUAL' | 'HYBRID';
  year: number
  startDate: Date
  endDate: Date
  location?: string
  url: string
  prizes: Prize[]
}

export const isSponsorPrize = (prize: Prize): prize is SponsorPrize => {
  return prize.type === 'SPONSOR';
}

export const isMainPrize = (prize: Prize): prize is MainPrize => {
  return prize.type === 'MAIN';
}

export const isCategoryPrize = (prize: Prize): prize is CategoryPrize => {
  return prize.type === 'CATEGORY';
}