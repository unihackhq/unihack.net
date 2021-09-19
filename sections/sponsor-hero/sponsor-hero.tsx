import React from 'react';
import styles from './sponsor-hero.module.scss';
import Stack from '@components/stack/stack';
import { Text } from '@components/typography/typography';
import { IconLabel } from '@components/icon-label/icon-label';

const SponsorHero = () => (
  <section className={styles['sponsor-hero']}>
    <img src="/images/sponsor-hero.png" alt="Sponsorship UNIHACK" />
    <div className={styles['sponsor-hero-content']}>
      <Stack size="large">
        <h2 className={styles['sponsor-hero-content-subtitle']}>
          Come join us in the Imagination Revolution!
        </h2>
        <Text>
          UNIHACK is where Australia's upcoming generation of tech disrupters
          build and showcase their innovative and market-ready projects over a
          48-hour period.
        </Text>
        <Text>
          Come join us in the imagination revolution for the opportunity to meet
          and recruit amazing talent, undertake brand promotion, and receive
          live product feedback.
        </Text>
        <IconLabel icon="Location" title="Location">
          Remote (Australia &amp; New Zealand)
        </IconLabel>
        <IconLabel icon="Calendar" title="Date">
          TBA, Early 2022
        </IconLabel>
      </Stack>
    </div>
  </section>
);

export default SponsorHero;
