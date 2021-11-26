import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import Page from '../layouts/page/page';
import Sponsor from '@components/sponsor/sponsor';
import BrandHero from 'sections/brand-hero/brand-hero';
import HomeCard from '@components/home-card';

import inspirationImage from '../public/images/homepage/past.png';
import faqsImage from '../public/images/homepage/faqs.png';

const Index = () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page>
      <div className={styles.index}>
        <BrandHero />
        <div className={styles.grid}>
          <div className={styles.row}>
            <HomeCard
              image={inspirationImage}
              title={
                <>
                  Looking for inspiration?
                  <br />
                  See what people did last year!
                </>
              }
              placeholderColor="purple"
              buttonLink="/events/2021"
              buttonText="Revisit UNIHACK 2021"
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
          <Sponsor />
        </div>
      </div>
    </Page>
  </div>
);

export default Index;
