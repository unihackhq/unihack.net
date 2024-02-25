import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Page from '@layouts/page/page';
import BrandHero from '@sections/brand-hero/brand-hero';
import { JoinDiscord } from '@sections/homepage/discord';
import Prizes from '@sections/homepage/prizes/prizes';

import EventSchedule from '@sections/event-info/event-schedule/event-schedule';
import EventChecklist from '@sections/event-info/event-checklist';
import Sponsors from '@sections/event-info/sponsors/sponsors';

import { prizes } from '@content/events/2024/prizes.json';
import schedule from '@content/events/2024/schedule.json';
import sponsors from '@content/events/2024/sponsors.json';
import { MelbourneHub, SydneyHub } from '@sections/homepage/hubs';

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
        <MelbourneHub />
        <SydneyHub />
      </div>
      <div className={styles.grid}>
        <EventSchedule data={schedule} />
        <EventChecklist />
      </div>
      <JoinDiscord />
      <Prizes data={prizes} />
      <Sponsors data={sponsors} />
    </div>
  </Page>
);

export default Index;
