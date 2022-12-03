import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import Sponsor from '@components/sponsor/sponsor';
import HomeCard from '@components/home-card';

import inspirationImage from '../public/images/homepage/past.png';
import faqsImage from '../public/images/homepage/faqs.png';
import BrandHero from '@sections/brand-hero/brand-hero';

const Index = () => (
  <div>
    <Head>
      <title>UNIHACK 2023 - Coming Soon</title>
      <meta
        property="og:title"
        content={`UNIHACK 2023 - Coming Soon`}
        key="title"
      />
    </Head>
    <Page>
      <div className={styles.index}>
        <BrandHero />
        <div className={styles.grid}>
          <div className={styles.row}>
            <HomeCard
              image={inspirationImage}
              title={<>Looking to skill up or give back to the community?</>}
              placeholderColor="purple"
              buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScWRbp9lMacf0Xjul2y2kgLvgsTYqDo1BlrDWBkEAac0UrY0w/viewform"
              buttonText="Join the team today"
            />
            <HomeCard
              image={faqsImage}
              title={
                <>We run Australia's largest university student hackathon</>
              }
              placeholderColor="pacific"
              buttonLink="/about"
              buttonText="What is UNIHACK?"
            />
          </div>
          <Sponsor />
        </div>
      </div>
    </Page>
  </div>
);

export default Index;
