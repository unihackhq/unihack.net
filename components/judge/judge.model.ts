export type JudgeModel = {
  name: string;
  title: string;
  org: string;
  imagePath: string;
  links: JudgeLink[];
};

interface JudgeLink {
  name: string;
  href: string;
}
