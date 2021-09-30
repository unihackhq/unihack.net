import React from 'react';
import styles from './sponsor-hero.module.scss';
import { Text } from '@components/typography/typography';
import { IconLabelWithTitle } from '@components/icon-label/icon-label';
import ButtonLink from '@components/button/button-link';
import { event, AnalyticsCategory } from '../../lib/gtag';

const SponsorHero = () => (
  <section className={styles['sponsor-hero']}>
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
          icon="Location_White"
          title="Location"
          style={styles['sponsor-hero-event-data-content']}
        >
          Australia &amp; New Zealand
        </IconLabelWithTitle>
        <IconLabelWithTitle
          icon="Calendar_White"
          title="Date"
          style={styles['sponsor-hero-event-data-content']}
        >
          TBA, Early 2022
        </IconLabelWithTitle>
      </div>
      <ButtonLink
        className={styles['sponsor-hero-link']}
        type="primary"
        theme="dark"
        href="mailto:sponsorship@unihack.net?subject=UNIHACK 2022 Sponsorship"
        onClick={() => {
          event({
            action: 'hero_button_clicked',
            category: AnalyticsCategory.SPONSORSHIP,
            label: 'Clicked on Hero Button',
          });
        }}
      >
        Enquire Now
      </ButtonLink>
    </div>
  </section>
);

export default SponsorHero;
