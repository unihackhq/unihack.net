import { PropsWithChildren } from 'react';
import styles from './style.module.css';
import { mergeClassNames } from '@/utils/classnames';

interface PageContentProps extends PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
> {}

export const PageContent: React.FC<PageContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={mergeClassNames(styles.container, className)}>
      {children}
    </div>
  );
};
