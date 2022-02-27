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
import judgesData from '@content/events/2022/judges.json';
import EventJudges from '@sections/event-info/judges/judges';
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
            <HomeCard
              image={inspirationImage}
              title={
                <>
                  Have your say <br />
                  Vote for People's Choice!
                </>
              }
              placeholderColor="purple"
              buttonLink="https://unihack2022.devpost.com"
              buttonText="Visit the Devpost"
            />
            <HomeCard
              image={faqsImage}
              title={<>Looking to skill up or give back to the community?</>}
              placeholderColor="pacific"
              buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScWRbp9lMacf0Xjul2y2kgLvgsTYqDo1BlrDWBkEAac0UrY0w/viewform"
              buttonText="Join the team today"
            />
          </div>
        </div>
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
