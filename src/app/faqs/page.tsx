import { FaqEntry } from '@/components/faq-entry'
import { PageContent } from '@/components/page-content'
import styles from './styles.module.css'
import { getFaqEntries } from './utils'

export default async function FaqsPage() {
  const pages = await getFaqEntries()
  return (
    <>
      <div className={styles.background} />
      <PageContent className={styles.container}>
        <div>
          <h1>Frequently Asked Questions</h1>
        </div>
        <section className={styles.questions}>
          {pages.map(({ content: Content, title, key }) => (
            <FaqEntry content={<Content />} id={key} key={key} title={title} />
          ))}
        </section>
      </PageContent>
    </>
  )
}
