import React from 'react';
import Head from 'next/head';

import Page from '../../layouts/page/page';
import Header from '../../components/header/header';
import AboutUs from '../../sections/about-us/about-us';
import Diversity from '../../sections/diversity/diversity';
import Privacy from '../../sections/privacy/privacy';
import { PageNavigation } from '@components/page-navigation/page-navigation';

export default () => (
  <div>
    <Head>
      <title>About Us - UNIHACK</title>
    </Head>
    <Page>
      <Header />
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
