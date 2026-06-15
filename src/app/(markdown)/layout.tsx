import type React from 'react'
import { PageContent } from '@/components/page-content'
import styles from './styles.module.css'

export default function MarkdownPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className={styles.background} />
      <PageContent className={styles.container}>{children}</PageContent>
    </>
  )
}
