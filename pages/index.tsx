import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import Hero from '../sections/hero/hero';
import Faqs from '../sections/faqs/faqs';
import EventDescription from '../sections/event-description/event-description';
import CityBanner from '@components/city-banner/city-banner';
import Sponsor from '@components/sponsor/sponsor';

export default () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page featureBackground>
      <Hero />
      <EventDescription />
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
      <Sponsor />
    </Page>
  </div>
);
