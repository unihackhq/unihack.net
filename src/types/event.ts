import type { StaticImageData as NextImage } from 'next/image'

export interface CommonPrize {
  type: string
  name: string
  winner: string
  devpostUrl?: string
  university?: string
}

export interface MainPrize extends CommonPrize {
  type: 'MAIN'
  place: 'FIRST' | 'SECOND' | 'THIRD'
}

export interface CategoryPrize extends CommonPrize {
  type: 'CATEGORY'
}

export interface SponsorPrize extends CommonPrize {
  type: 'SPONSOR'
  sponsor: string
}

export type Prize = MainPrize | CategoryPrize | SponsorPrize

export type PrizeNote = {
  text: string[]
  type: 'INFO' | 'WARNING' | 'ERROR'
}

export type EventBrandingBackground = {
  image: NextImage
  credit: string
  altText: string
  position?: 'top' | 'bottom' | 'center'
}

export interface EventDefinition {
  name: string
  id?: string
  type: 'IN_PERSON' | 'VIRTUAL' | 'HYBRID'
  year: number
  startDate: Date
  endDate: Date
  location?: string
  url: string
  prizes: Prize[]
  prizesNote?: PrizeNote
  video?: {
    title: string
    url: string
  }
  branding?: {
    background: EventBrandingBackground
  }
}
