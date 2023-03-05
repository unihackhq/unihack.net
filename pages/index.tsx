import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import Sponsors from '@sections/event-info/sponsors/sponsors';
import Schedule from '@sections/event-info/event-schedule/event-schedule';

import SponsorData from '@content/events/2023/sponsors.json';
import ScheduleData from '@content/events/2023/schedule.json';
import WorkshopData from '@content/events/2023/workshops.json';
import PrizeData from '@content/events/2023/prizes.json';
import JudgesData from '@content/events/2023/judges.json';
import EventChecklist from '@sections/event-info/event-checklist';
// import { ComingSoon } from '@sections/homepage/coming-soon';
import { MelbourneHub } from '@sections/homepage/melbourne-hub';
import Workshops from '@sections/event-info/workshops';
import Prizes from '@sections/event-info/prizes/prizes';
import Stack from '@components/stack/stack';
import Stream from '@sections/stream/stream';
import Judges from '@sections/event-info/judges/judges';
import HomeCard from '@components/home-card';
import inspirationImage from '../public/images/homepage/past.png';
import faqsImage from '../public/images/homepage/faqs.png';

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
      <Stream />
      <div className={styles.index}>
        <div className={styles.grid}>
          <div className={styles.row}>
            <HomeCard
              image={inspirationImage}
              title={<>Vote for the People's Chioce Award</>}
              placeholderColor="purple"
              buttonLink="https://unihack2023.devpost.com/"
              buttonText="Vote NOW!"
            />
            <HomeCard
              image={faqsImage}
              title={
                <>We run Australia's largest university student hackathon</>
              }
              placeholderColor="pacific"
              buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScWRbp9lMacf0Xjul2y2kgLvgsTYqDo1BlrDWBkEAac0UrY0w/viewform"
              buttonText="Join the team today"
            />
          </div>
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
        <Judges data={JudgesData.judges} />
        <Sponsors data={SponsorData} />
      </Stack>
    </Page>
  </div>
);

export default Index;
