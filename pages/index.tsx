import Head from 'next/head';
import './index.scss';

import Page from '../layouts/page/page';
import Hero from '../sections/hero/hero';
import Faqs from '../sections/faqs/faqs';
import EventDescription from '../sections/event-description/event-description';
import CityBanner from '../components/city-banner/city-banner';
import Sponsor from '../components/sponsor/sponsor';

export default () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page featureBackground>
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
    <a
      id="mlh-trust-badge"
      href="https://mlh.io/seasons/apac-2020/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
      target="_blank"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-apac-black.svg"
        alt="Major League Hacking 2020 Hackathon Season"
        style={{ width: '100%' }}
      />
    </a>
  </div>
);
