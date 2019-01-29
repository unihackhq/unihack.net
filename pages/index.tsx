import Head from 'next/head';
import './index.scss';

import Page from '../layouts/page/page';
import Hero from '../sections/hero/hero';
import EventDescription from '../sections/event-description/event-description';
import CityBanner from '../components/city-banner/city-banner';
import Sponsor from '../components/sponsor/sponsor';
import Footer from '../components/footer/footer';

export default () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page featureBackground>
      <Hero/>
      <EventDescription/>
      <section className="cities">
        <CityBanner city="Melbourne" year="2018" href="/melbourne" left={false}/>
        <CityBanner city="Sydney" year="2018" href="/sydney" left/>
      </section>
      <Sponsor/>
      <Footer/>
    </Page>
  </div>
);
