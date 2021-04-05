import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import Faqs from '../sections/faqs/faqs';
import CityBanner from '@components/city-banner/city-banner';
import Sponsor from '@components/sponsor/sponsor';
import Header from '@components/header/header';
import Divider from '@components/divider/divider';
import Stack from '@components/stack/stack';
import BrandHero from 'sections/brand-hero/brand-hero';

const Index = () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page>
      <Header />
      <Stack size="xxlarge">
        <BrandHero />
        <Divider />
        <Faqs />
        <section className={styles.cities}>
          <CityBanner city="Melbourne" year="2019" href="/2019" />
          <CityBanner
            city="Sydney"
            year="2018"
            href="https://unihack2018syd.devpost.com/"
            left
          />
        </section>
      </Stack>
      <Sponsor />
    </Page>
  </div>
);

export default Index;
