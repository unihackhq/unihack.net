import React from 'react';
import styles from './sponsor-hero.module.scss';
import Stack from '@components/stack/stack';
import { IconLabel } from '@components/icon-label/icon-label';

const SponsorHero = () => (
  <section className={styles['sponsor-hero']}>
    <img src="/images/sponsor-hero.png" alt="Sponsorship UNIHACK" />
    <div className={styles['sponsor-hero-content']}>
      <Stack size="large">
        <p className={styles['sponsor-hero-content-subtitle']}>
          Come join us in the Imagination Revolution!
        </p>
        <IconLabel icon="Location" title="Location">
          Australia &amp; New Zealand
        </IconLabel>
        <IconLabel icon="Calendar" title="Date">
          TBA, Early 2022
        </IconLabel>
      </Stack>
    </div>
  </section>
);

export default SponsorHero;
