import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import Sponsor from '@components/sponsor/sponsor';
import Header from '@components/header/header';
import Stack from '@components/stack/stack';
import BrandHero from 'sections/brand-hero/brand-hero';


const Index = () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page>
      <Header />
      <Stack size="xxlarge" className={styles.index}>
        <BrandHero />
        <div className={styles.grid}>
          <Sponsor />
        </div>
      </Stack>
    </Page>
  </div>
);

export default Index;
