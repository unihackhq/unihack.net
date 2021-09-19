import React from 'react';
import styles from './sponsor-hero.module.scss';
import { H2, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { IconLabel } from '@components/icon-label/icon-label';

const SponsorHero = () => (
  <section className={styles['sponsor-hero']}>
    <div
      className={styles['sponsor-hero-content']}
      style={{
        background: 'url(/images/sponsor-hero.jpg)',
        backgroundSize: 'cover'
      }}
    >
      <div className={styles['sponsor-hero-content-left']}>
        <Stack size="medium">
          <Stack size="small">
            <Stack size="medium">
              <H2>What is UNIHACK?</H2>
              <Text>
                UNIHACK is where Australia's upcoming generation of tech
                disrupters build and showcase their innovative and market-ready
                projects over a 48-hour period. Come join us in the imagination
                revolution for the opportunity to meet and recruit amazing
                talent, undertake brand promotion, and receive live product
                feedback.
              </Text>
            </Stack>
            <Text bold>Come join us in the Imagination Revolution!</Text>
          </Stack>
          <Stack size="small">
            <IconLabel icon="Calendar">Next event TBC</IconLabel>
            <IconLabel icon="Location">TBC</IconLabel>
          </Stack>
        </Stack>
      </div>
    </div>
  </section>
);

export default SponsorHero;
