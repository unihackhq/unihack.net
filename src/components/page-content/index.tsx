import { PropsWithChildren } from 'react';
import styles from './style.module.css';

interface PageContentProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {}

export const PageContent: React.FC<PageContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};