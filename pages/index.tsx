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
import prizesData from '@content/events/2022/prizes.json';
import judgesData from '@content/events/2022/judges.json';
import EventJudges from '@sections/event-info/judges/judges';
import Prizes from '@sections/event-info/prizes/prizes';
import Stream from '@sections/stream/stream';
import winnersData from '@content/events/2022/winners.json';
import Winners from '@sections/event-info/winners/winners';

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
            <HomeCard
              image={inspirationImage}
              title="Get the latest news about our future events"
              placeholderColor="purple"
              buttonLink="https://discord.gg/MfuzHurGpd"
              buttonText="Join our Discord"
            />
            <HomeCard
              image={faqsImage}
              title={<>Interested in joining the team?<br />We'd love to have you!</>}
              placeholderColor="pacific"
              buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScWRbp9lMacf0Xjul2y2kgLvgsTYqDo1BlrDWBkEAac0UrY0w/viewform"
              buttonText="Submit your application!"
            />
          </div>
        </div>
        <Winners data={winnersData} devpostUrl="https://unihack2022.devpost.com" />
      </div>
      <Prizes data={prizesData.prizes} />
      <EventJudges data={judgesData.judges} />
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
