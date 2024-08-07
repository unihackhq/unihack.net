import React from 'react';
import styles from './sponsor-hero.module.scss';
import { Text } from '@components/typography/typography';
import { IconLabelWithTitle } from '@components/icon-label/icon-label';
import ButtonLink from '@components/button/button-link';
import { event, AnalyticsCategory } from '@lib/gtag';
import { SPONSORSHIP_FILE } from '@lib/constants';
import Image from 'next/image';
import sponsorHero from '../../../public/images/sponsor-hero.png';

const SponsorHero = () => (
  <section className={styles['sponsor-hero']}>
    <Image
      src={sponsorHero}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
    />
    <div className={styles['sponsor-hero-container']}>
      <h1>
        Join us in the <span>imagination revolution</span>
      </h1>
      <Text>
        UNIHACK is where Australia’s upcoming generation of tech disrupters
        build and showcase their innovative and market-ready projects over a
        48-hour period.
      </Text>
      <div className={styles['sponsor-hero-event-data']}>
        <IconLabelWithTitle
          icon="Calendar_White"
          title="Date"
          style={styles['sponsor-hero-event-data-content']}
        >
          14-16 March 2025
        </IconLabelWithTitle>
        <IconLabelWithTitle
          icon="Location_White"
          title="Location"
          style={styles['sponsor-hero-event-data-content']}
        >
          Australia &amp; New Zealand
        </IconLabelWithTitle>
      </div>
      <ButtonLink
        className={styles['sponsor-hero-link']}
        type="primary"
        theme="transparent"
        href={SPONSORSHIP_FILE}
        onClick={() => {
          event({
            action: 'sponsorship.sponsor_hero.button.click',
            category: AnalyticsCategory.SPONSORSHIP,
            label: 'Sponsorship - Sponsor Hero - Click on Button',
          });
        }}
      >
        Download Prospectus
      </ButtonLink>
    </div>
  </section>
);

export default SponsorHero;
