import Head from 'next/head';
import './index.scss';

import Page from '../layouts/page/page';
import Hero from '../sections/hero/hero';
import Faqs from '../sections/faqs/faqs';
import Alert from '../components/alert/alert';
import EventDescription from '../sections/event-description/event-description';
import CityBanner from '../components/city-banner/city-banner';
import Sponsor from '../components/sponsor/sponsor';

export default () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page featureBackground>
      <Alert
        link="https://www.notion.so/unihack/UNIHACK-2020-and-COVID-19-405d863cb8904b22837ecc85e577d9c9"
        message="UNIHACK 2020 has been postponed due to COVID-19. Click to read more."
      />
      <Hero />
      <EventDescription />
      <Faqs />
      <section className="cities">
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
