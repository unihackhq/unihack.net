import Head from 'next/head';

import Page from '../layouts/page/page';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <Page>
      <p>Page content goes here</p>
    </Page>
  </div>
);
