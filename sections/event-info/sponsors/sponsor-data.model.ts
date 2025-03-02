import { GridItemI } from '@components/grid/grid-item.interface';

export type SponsorTier = 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'other'

export const SPONSOR_TIER_ORDER: SponsorTier[] = ['diamond', 'platinum', 'gold', 'silver', 'bronze', 'other']

export type SponsorData = {
  base: string;
  titles?: {
    [key in SponsorTier]?: string;
  },
  sponsors: {
    [key in SponsorTier]?: GridItemI[];
  };
};
