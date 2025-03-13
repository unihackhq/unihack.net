import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Page from '@layouts/page/page';
// import BrandHero from '@sections/brand-hero/brand-hero';
// import HomeCard from '@components/home-card';

// import inspirationImage from '../public/images/homepage/past.png';
// import sponsorshipImage from '../public/images/homepage/sponsorship-small.png';
import { JoinDiscord } from '@sections/homepage/discord';
import EventChecklist from '@sections/event-info/event-checklist';
import { MelbourneHub, SydneyHub } from '@sections/homepage/hubs';
import Sponsors from '@sections/event-info/sponsors/sponsors';
import sponsors from '@content/events/2025/sponsors.json';
import prizes from '@content/events/2025/prizes.json';
import schedule from '@content/events/2025/schedule.json';
import EventSchedule from '@sections/event-info/event-schedule/event-schedule';
import Prizes from '@sections/homepage/prizes/prizes';
import StreamHero from '@sections/brand-hero/stream-hero';

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
    <StreamHero />
    <div className={styles.homepage}>
      <JoinDiscord />
      <div className={styles.grid}>
        <MelbourneHub />
        <SydneyHub />
      </div>
      <div className={styles.grid}>
        <EventChecklist />
        <EventSchedule data={schedule} />
      </div>
      <Prizes data={prizes.prizes} />
      <Sponsors data={sponsors} />
    </div>
  </Page>
);

export default Index;
