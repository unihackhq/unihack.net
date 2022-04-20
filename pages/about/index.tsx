import React from 'react';
import Head from 'next/head';

import Page from '../../layouts/page/page';
import AboutUs from '../../sections/about-us/about-us';
import Diversity from '../../sections/diversity/diversity';
import Stats from '../../sections/stats/stats';
import AboutHero from '../../sections/about-hero/about-hero';
import MeetTheTeam from '../../sections/meet-the-team/meet-the-team';


export default () => (
  <div>
    <Head>
      <title>About Us - UNIHACK</title>
    </Head>
    <Page>
      <AboutHero />
      <Stats />
      <AboutUs />
      <MeetTheTeam />
      <Diversity />
    </Page>
  </div>
);
