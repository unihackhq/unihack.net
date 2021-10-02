import Head from 'next/head';
import Page from '@layouts/page/page';
import Header from '@components/header/header';
import Stack from '@components/stack/stack';
import { PageNavigation } from '@components/page-navigation/page-navigation';
import styles from './events.module.scss';
import { PastEvent } from '@sections/past-events';
export default () => (
  <div>
    <Head>
      <title>Previous events</title>
    </Head>

    <Page>
      <Header />
      <PageNavigation
        backLinkTitle="Home"
        backLinkHref="/"
        underlineColor="yellow"
      >
        Previous Events.
      </PageNavigation>
      <Stack size="xxlarge" className={styles.content}>
        <PastEvent />
      </Stack>
    </Page>
  </div>
);
