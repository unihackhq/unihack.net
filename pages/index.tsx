import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Page from '@layouts/page/page';
import BrandHero from '@sections/brand-hero/brand-hero';
// import HomeCard from '@components/home-card';

// import inspirationImage from '../public/images/homepage/past.png';
// import sponsorshipImage from '../public/images/homepage/sponsorship-small.png';
import { JoinDiscord } from '@sections/homepage/discord';
import EventChecklist from '@sections/event-info/event-checklist';
import { MelbourneHub, SydneyHub } from '@sections/homepage/hubs';
import Sponsors from '@sections/event-info/sponsors/sponsors';
import sponsors from '@content/events/2025/sponsors.json';

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
      <JoinDiscord />
      <div className={styles.grid}>
        <MelbourneHub />
        <SydneyHub />
      </div>
      <EventChecklist />
      <Sponsors data={sponsors} />
    </div>
  </Page>
);

export default Index;
