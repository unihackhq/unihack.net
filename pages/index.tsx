import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import Sponsors from '@sections/event-info/sponsors/sponsors';
import Sponsor from '@components/sponsor/sponsor';
import HomeCard from '@components/home-card';

import inspirationImage from '../public/images/homepage/past.png';
import faqsImage from '../public/images/homepage/faqs.png';
import sponsorData from '@content/events/2022/sponsors.json';
import scheduleData from '@content/events/2022/schedule.json';
import prizesData from '@content/events/2022/prizes.json';
import EventSchedule from '@sections/event-info/event-schedule/event-schedule';
import EventChecklist from '@sections/event-info/event-checklist';
import Prizes from '@sections/event-info/prizes/prizes';
import Stream from '@sections/stream/stream';

const Index = () => (
  <div>
    <Head>
      <title>UNIHACK 2022 - February 25-27, 2022</title>
    </Head>
    <Page>
      <div className={styles.index}>
        <Stream />
        <div className={styles.grid}>
          <div className={styles.row}>
            <EventSchedule data={scheduleData} />
            <EventChecklist />
          </div>
          <div className={styles.row}>
            <HomeCard
              image={inspirationImage}
              title={
                <>
                  Looking for team members?
                  <br />
                  Join the Discord!
                </>
              }
              placeholderColor="purple"
              buttonLink="https://discord.gg/c5WkvETkj8"
              buttonText="Visit the #team-finder channel"
            />
            <HomeCard
              image={faqsImage}
              title={
                <>
                  Questions about UNIHACK?
                  <br />
                  We have answers.
                </>
              }
              placeholderColor="pacific"
              buttonLink="/faq"
              buttonText="Our FAQs"
            />
          </div>
        </div>
      </div>
      <Prizes data={prizesData.prizes} />
      <div className={styles.sponsors}>
        <div className={styles.grid}>
          <Sponsors
            data={sponsorData}
            isHomepage={true}
            className={styles.sponsorListing}
          />
          <Sponsor />
        </div>
      </div>
    </Page>
  </div>
);

export default Index;
