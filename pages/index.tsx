import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import Hero from '../sections/hero/hero';
import Faqs from '../sections/faqs/faqs';
import CityBanner from '@components/city-banner/city-banner';
import Sponsor from '@components/sponsor/sponsor';
import Header from '@components/header/header';
import Divider from '@components/divider/divider';
import Sponsors from 'sections/melbourne-2019/sponsors/sponsors';
import Stack from '@components/stack/stack';
import EventSchedule from 'sections/melbourne-2019/event-schedule/event-schedule';
import Prizes from 'sections/melbourne-2019/prizes/prizes';

const Index = () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page>
      <Header dark />
      <Stack size="xxlarge">
        <EventSchedule />
        <Prizes />
        <Divider />
        <Sponsors />
        <Divider />
        <Faqs />
        <section className={styles.cities}>
          <CityBanner
            city="Melbourne"
            year="2019"
            href="https://unihack2019.devpost.com/"
          />
          <CityBanner
            city="Sydney"
            year="2018"
            href="https://unihack2018syd.devpost.com/"
            left
          />
        </section>
      </Stack>
      <Sponsor />
    </Page>
  </div>
);

export default Index;
