import Head from 'next/head';
import styles from './faqs.module.scss';
import Page from '@layouts/page/page';
import { HXL } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import FAQContent from '../../content/pages/faqs.mdx';

const FAQPage = () => (
  <>
    <Head>
      <title>FAQs - UNIHACK</title>
    </Head>
    <Page>
      <section className={styles['faqs']}>
        <div className={styles['faqs-title']}>
          <HXL>FAQs</HXL>
        </div>
        <div className={styles['faqs-content']}>
          <Stack size="small">
            <FAQContent />
          </Stack>
        </div>
      </section>
    </Page>
  </>
);

export default FAQPage;
