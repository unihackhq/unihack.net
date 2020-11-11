import Head from 'next/head';

import Page from '../../layouts/page/page';
import Header from '../../components/header/header';
import AboutUs from '../../sections/about-us/about-us';
import Diversity from '../../sections/diversity/diversity';
import Privacy from '../../sections/privacy/privacy';

export default () => (
  <div>
    <Head>
      <title>About Us - UNIHACK</title>
    </Head>
    <Page featureBackground>
      <Header withLogo solid />
      <AboutUs />
      <Diversity />
      <Privacy />
    </Page>
  </div>
);
