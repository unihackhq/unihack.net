import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import BrandHero from '@sections/brand-hero/brand-hero';
import { JoinDiscord } from '@sections/homepage/discord';
import Sponsors from '@sections/event-info/sponsors/sponsors';
import Schedule from '@sections/event-info/event-schedule/event-schedule';

import SponsorData from '@content/events/2023/sponsors.json';
import ScheduleData from '@content/events/2023/schedule.json';
import WorkshopData from '@content/events/2023/workshops.json';
import PrizeData from '@content/events/2023/prizes.json';
import EventChecklist from '@sections/event-info/event-checklist';
// import { ComingSoon } from '@sections/homepage/coming-soon';
import { MelbourneHub } from '@sections/homepage/melbourne-hub';
import Workshops from '@sections/event-info/workshops';
import Prizes from '@sections/event-info/prizes/prizes';
import Stack from '@components/stack/stack';

const Index = () => (
  <div>
    <Head>
      <title>UNIHACK 2023 - March 3-5, 2023</title>
      <meta
        property="og:title"
        content={`UNIHACK 2023 - March 3-5, 2023`}
        key="title"
      />
    </Head>
    <Page>
      <BrandHero />
      <div className={styles.index}>
        <div className={styles.grid}>
          <JoinDiscord />
          <div className={styles.row}>
            <Schedule data={ScheduleData} />
            <EventChecklist />
          </div>
          <Workshops data={WorkshopData} />
          <MelbourneHub />
        </div>
      </div>
      <Stack size="xlarge">
        <Prizes data={PrizeData.prizes} />
        <Sponsors data={SponsorData} />
      </Stack>
    </Page>
  </div>
);

export default Index;
