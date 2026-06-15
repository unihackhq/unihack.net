import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { mergeClassNames } from '@/utils/classnames';

export type SponsorGridItem = ComponentPropsWithoutRef<typeof Image> & {
  link?: string;
};

export type SponsorGridProps = {
  prefix?: React.ReactNode;
  items: SponsorGridItem[];
  id?: string;
  className?: string;
  gridItemClassName?: string;
};

export const SponsorGrid = ({
  prefix,
  items,
  id,
  className,
  gridItemClassName,
}: SponsorGridProps) => {
  return (
    <div id={id} className={styles.sponsorGridWrapper}>
      {prefix}
      <div className={mergeClassNames(styles.sponsorGrid, className)}>
        {items.map(({ link, ...item }, key) => {
          return (
            <a
              key={key}
              className={mergeClassNames(
                styles.sponsorGridItem,
                gridItemClassName,
              )}
              href={link}
            >
              <Image {...item} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
