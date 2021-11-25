import Head from 'next/head';
import styles from './conduct.module.scss';
import Page from '@layouts/page/page';
import { HL } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import Rules from '../../content/pages/code-of-conduct.mdx';

const conductPage = () => (
  <div>
    <Head>
      <title>Code of Conduct - UNIHACK</title>
    </Head>
    <Page>
      <section className={styles['conduct']}>
        <div className={styles['conduct-content']}>
          <Stack size="medium">
            <HL>Code of Conduct</HL>
            <div className={styles['introduction']}>
              <strong>
                We believe that every single person has the right to hack in a
                safe and welcoming environment.
              </strong>{' '}
              This is why we have a code of conduct that applies to
              participants, sponsors, judges, mentors, organisers, volunteers,
              guests, observers and any other person at a UNIHACK event, or any
              online interactions in relation to a UNIHACK event (e.g. Discord,
              Slack, the UNIHACKers Facebook Group).
            </div>
            <Rules />
          </Stack>
        </div>
      </section>
    </Page>
  </div>
);

export default conductPage;
