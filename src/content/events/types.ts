type PrizeType =
  | { type: 'MAIN' }
  | { type: 'CATEGORY' }
  | { type: 'SPONSOR'; sponsor: string }

type Prize = PrizeType & {
  name: string
  winner: string
  devpostUrl: string
}

export interface Event {
  name: string
  year: number
  startDate: Date
  endDate: Date
  location?: string
  devpostUrl: string
  prizes: Prize[]
}
