import { PrizeModel } from "@components/prize/prize.model";

export type WinnerModel = {
  hack: Hack;
}

export type Hack = {
  name:  string;
  description: string
  imagePath?: string;
  videoPath?: string;
  devpostUrl: string;
  prizes: Exclude<PrizeModel, 'description' | 'contents'>[]
};