import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'
import { mergeClassNames } from '@/utils/classnames'
import styles from './styles.module.css'

type QuoteLink = {
  href: string
  text: string
  target?: ComponentPropsWithoutRef<'a'>['target']
  rel?: ComponentPropsWithoutRef<'a'>['rel']
}

export type QuoteProps = {
  quote: string
  author?: string
  image?: ComponentPropsWithoutRef<typeof Image>['src']
  imageAlt?: string
  link?: QuoteLink
}

export const Quote = ({ quote, author, image, imageAlt, link }: QuoteProps) => {
  return (
    <div className={styles.quote}>
      {image && (
        <div className={styles.logo}>
          <Image alt={imageAlt ?? ''} src={image} />
        </div>
      )}
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      {author && <p>{author}</p>}
      {link && (
        <p>
          <a href={link.href} rel={link.rel} target={link.target}>
            {link.text}
          </a>
        </p>
      )}
    </div>
  )
}

export const BlockQuote = (props: QuoteProps & { className?: string }) => {
  return (
    <section className={mergeClassNames(styles.blockquote, props.className)}>
      <div>
        <Quote {...props} />
      </div>
    </section>
  )
}
