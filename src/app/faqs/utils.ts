import fs from 'fs';
import { join, extname } from 'path';

interface FaqEntry {
  key: string;
  title: string;
  content: any;
  order: number;
  highlight: boolean;
  category: string[];
}

const directory = join(process.cwd(), 'src', 'content', 'faqs');

const entries = fs
  .readdirSync(directory)
  .filter((file) => ['.md', '.mdx'].includes(extname(file)));

export const getFaqEntries = async (): Promise<FaqEntry[]> => {
  const data = entries.map(async (file) => {
    const { default: Entry, frontmatter } = await import(
      `@/content/faqs/${file}`
    );
    return {
      key: file.split('.')[0],
      title: frontmatter.title,
      content: Entry,
      order: frontmatter.order ?? 99,
      highlight: frontmatter.highlight ?? false,
      category: frontmatter.category ?? [],
    };
  });

  return (await Promise.all(data)).sort((a, b) => a.order - b.order);
};
