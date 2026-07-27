import type {
  Prize,
  SponsorPrize,
  MainPrize,
  CategoryPrize,
} from '@/types/event'

export const isSponsorPrize = (prize: Prize): prize is SponsorPrize => {
  return prize.type === 'SPONSOR'
}

export const isMainPrize = (prize: Prize): prize is MainPrize => {
  return prize.type === 'MAIN'
}

export const isCategoryPrize = (prize: Prize): prize is CategoryPrize => {
  return prize.type === 'CATEGORY'
}
