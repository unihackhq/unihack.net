import { GridItemI } from '@components/grid/grid-item.interface';

export type SponsorData = {
  base: string;
  sponsors: {
    platinum: GridItemI[];
    gold: GridItemI[];
    silver: GridItemI[];
    bronze: GridItemI[];
  };
};