import styles from './styles.module.css';
import { PageContent } from '@/components/page-content';

import { getFaqEntries } from './utils';
import { FaqEntry } from '@/components/faq-entry';

export default async function FaqsPage() {
  const pages = await getFaqEntries();
  return (
    <>
      <div className={styles.background} />
      <PageContent className={styles.container}>
        <div>
          <h1>Frequently Asked Questions</h1>
        </div>
        <section className={styles.questions}>
          {pages.map(({ content: Content, title, key }) => (
            <FaqEntry title={title} content={<Content />} id={key} key={key} />
          ))}
        </section>
      </PageContent>
    </>
  );
}
