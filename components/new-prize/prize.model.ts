export type PrizeModel = {
  title: string;
  description?: string;
  subtext?: string;
  individual?: boolean;
  imagePath?: string;
  links?: PrizeLinksModel[];
  contents?: string[];
}

export type PrizeLinksModel = {
  title: string;
  link: string
}