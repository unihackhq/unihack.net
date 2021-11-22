import Head from 'next/head';
import styles from './rules.module.scss';
import Page from '@layouts/page/page';
import { HL } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import Rules from '../../content/pages/rules.mdx';

const RulesPage = () => (
  <div>
    <Head>
      <title>Rules - UNIHACK</title>
    </Head>
    <Page>
      <section className={styles['rules']}>
        <div className={styles['rules-content']}>
          <Stack size="medium">
            <HL>Rules</HL>
            <div className={styles['introduction']}>
              All UNIHACK competitors must follow the following rules when
              participating in any UNIHACK event. Please read them carefully. If
              you have any questions or concerns please raise them with a
              UNIHACK organiser.
            </div>
            <Rules />
          </Stack>
        </div>
      </section>
    </Page>
  </div>
);

export default RulesPage;
