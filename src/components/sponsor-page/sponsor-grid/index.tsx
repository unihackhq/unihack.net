import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'
import { mergeClassNames } from '@/utils/classnames'
import styles from './styles.module.css'

export type SponsorGridItem = ComponentPropsWithoutRef<typeof Image> & {
  link?: string
}

export type SponsorGridProps = {
  prefix?: React.ReactNode
  items: SponsorGridItem[]
  id?: string
  className?: string
  gridItemClassName?: string
}

export const SponsorGrid = ({
  prefix,
  items,
  id,
  className,
  gridItemClassName,
}: SponsorGridProps) => {
  return (
    <div className={styles.sponsorGridWrapper} id={id}>
      {prefix}
      <div className={mergeClassNames(styles.sponsorGrid, className)}>
        {items.map(({ link, ...item }, key) => {
          return (
            <a
              className={mergeClassNames(
                styles.sponsorGridItem,
                gridItemClassName,
              )}
              href={link}
              key={key}
            >
              <Image {...item} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
