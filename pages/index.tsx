import Head from 'next/head';

import Page from '../layouts/page/page';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
    </Head>
    <Page>
      <p>Page content goes here</p>
    </Page>
  </div>
);
