
export type WorkshopsModel = {
  events: WorkshopModel[];
  imageBase: string;
}

export type WorkshopModel = {
  name:  string;
  address: string
  imagePath: string;
  date: string;
  link: string;
};