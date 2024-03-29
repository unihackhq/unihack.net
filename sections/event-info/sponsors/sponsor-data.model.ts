import { GridItemI } from '@components/grid/grid-item.interface';

type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze' | 'other'

export type SponsorData = {
  base: string;
  titles?: {
    [key in SponsorTier]?: string;
  },
  sponsors: {
    [key in SponsorTier]?: GridItemI[];
  };
};