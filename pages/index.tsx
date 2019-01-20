import Head from 'next/head';

import Page from '../layouts/page/page';
import Hero from '../components/hero/hero';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
    </Head>
    <Page withHeader={false}>
      <Hero/>
    </Page>
  </div>
);
