import React from 'react';
import Head from 'next/head';

import Page from '../../layouts/page/page';
import ContactUs from '../../sections/contact-us/contact-us';
import { PageNavigation } from '@components/page-navigation/page-navigation';

export default () => (
  <div>
    <Head>
      <title>Contact Us - UNIHACK</title>
    </Head>
    <Page>
      <PageNavigation
        backLinkTitle="Home"
        backLinkHref="/"
        underlineColor="yellow"
      >
        Contact Us
      </PageNavigation>
      <ContactUs />
    </Page>
  </div>
);
