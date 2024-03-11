import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Page from '@layouts/page/page';
import BrandHero from '@sections/brand-hero/stream-hero';
import { JoinDiscord } from '@sections/homepage/discord';
import Prizes from '@sections/homepage/prizes/prizes';
import Sponsors from '@sections/event-info/sponsors/sponsors';

import { prizes } from '@content/events/2024/prizes.json';
import sponsors from '@content/events/2024/sponsors.json';
import HomeCard from '@components/home-card';

import faqsImage from '../public/images/homepage/faqs.png';
import inspirationImage from '../public/images/homepage/past.png';

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
      <div className={styles.grid}>
        
        <HomeCard
          image={faqsImage}
          title={
            <>We run Australia's largest university student hackathon</>
          }
          placeholderColor="pacific"
          buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScWRbp9lMacf0Xjul2y2kgLvgsTYqDo1BlrDWBkEAac0UrY0w/viewform"
          buttonText="Join the team today"
        />
        <HomeCard
          image={inspirationImage}
          title={<>Interested to see what this year's participants built?</>}
          placeholderColor="purple"
          buttonLink="https://unihack2024.devpost.com/"
          buttonText="Visit DevPost!"
        />
      </div>
      <JoinDiscord />
      <Prizes data={prizes} />
      <Sponsors data={sponsors} />
    </div>
  </Page>
);

export default Index;
