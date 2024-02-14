import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Page from '@layouts/page/page';
import Sponsor from '@components/sponsor/sponsor';
import BrandHero from '@sections/brand-hero/brand-hero';
import { ComingSoon } from '@sections/homepage/coming-soon';
import { JoinDiscord } from '@sections/homepage/discord';
import Prizes from '@sections/homepage/prizes/prizes';

import { prizes } from '@content/events/2024/prizes.json';

const Index = () => (
  <Page headerless>
    <Head>
      <title>UNIHACK 2024 - March 1-3, 2024</title>
      <meta
        property="og:title"
        content={`UNIHACK 2024 - Coming Soon - March 1-3, 2024`}
        key="title"
      />
    </Head>
    <BrandHero />
    <div className={styles.homepage}>
      <JoinDiscord />
      <Prizes data={prizes} />
      <ComingSoon
        title="Sydney Hub"
        description="We will release more information about how to participate from our Sydney Hub soon."
      />
      <ComingSoon
        title="Melbourne Hub"
        description="We will release more information about how to participate from our Melbourne Hub soon."
      />
      <Sponsor />
    </div>
  </Page>
);

export default Index;
