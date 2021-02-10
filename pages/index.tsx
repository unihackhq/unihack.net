import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import Hero from '../sections/hero/hero';
import Faqs from '../sections/faqs/faqs';
import EventDescription from '../sections/event-description/event-description';
import CityBanner from '@components/city-banner/city-banner';
import Sponsor from '@components/sponsor/sponsor';
import Header from '@components/header/header';
import Divider from '@components/divider/divider';
import Sponsors from 'sections/melbourne-2019/sponsors/sponsors';
import EventSchedule from 'sections/melbourne-2019/event-schedule/event-schedule';
import Stack from '@components/stack/stack';

export default () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page>
      <Header />
      <Stack size="xxlarge">
        <Hero />
        <Divider />
        <Sponsors />
        <Divider />
        <EventDescription />
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
