import React from 'react';
import Head from 'next/head';

import Page from '../../layouts/page/page';
import AboutUs from '../../sections/about-us/about-us';
import Diversity from '../../sections/diversity/diversity';
import Privacy from '../../sections/privacy/privacy';
import { PageNavigation } from '@components/page-navigation/page-navigation';

export default () => (
  <div>
    <Head>
      <title>About Us - UNIHACK</title>
      <meta property="og:title" content="About UNIHACK" key="title" />
    </Head>
    <Page>
      <PageNavigation
        backLinkTitle="Home"
        backLinkHref="/"
        underlineColor="yellow"
      >
        About Us
      </PageNavigation>
      <AboutUs />
      <Diversity />
      <Privacy />
    </Page>
  </div>
);
