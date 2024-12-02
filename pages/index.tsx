import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Page from '@layouts/page/page';
import BrandHero from '@sections/brand-hero/brand-hero';
import HomeCard from '@components/home-card';

import inspirationImage from '../public/images/homepage/past.png';
import sponsorshipImage from '../public/images/homepage/sponsorship-small.png';

const Index = () => (
  <Page headerless>
    <Head>
      <title>UNIHACK 2025 - 14-16 March 2025 - The Imagination Hackathon</title>
      <meta
        property="og:title"
        content={`UNIHACK 2025 - The Imagination Hackathon - 14-16 March 2025`}
        key="title"
      />
    </Head>
    <BrandHero />
    <div className={styles.homepage}>
      <div className={styles.grid}>
        <HomeCard
          image={inspirationImage}
          title={<>Want to see what won last year?</>}
          placeholderColor="purple"
          buttonLink="https://unihack2024.devpost.com/"
          buttonText="Visit 2024 DevPost!"
        />
        <HomeCard
          image={sponsorshipImage}
          title={<>Interested in partnering?</>}
          placeholderColor="midori"
          buttonLink="/sponsorship"
          buttonText="Sponsor UNIHACK 2025"
        />
      </div>
    </div>
  </Page>
);

export default Index;
