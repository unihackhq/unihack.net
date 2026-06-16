import type { PropsWithChildren } from 'react'
import { mergeClassNames } from '@/utils/classnames'
import styles from './style.module.css'

interface PageContentProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {}

export const PageContent: React.FC<PageContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={mergeClassNames(styles.container, className)}>
      {children}
    </div>
  )
}
