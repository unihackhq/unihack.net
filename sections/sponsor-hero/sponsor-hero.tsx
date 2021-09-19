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
                projects over a 48-hour period.
              </Text>
              <Text>
                Come join us in the imagination revolution for the opportunity
                to meet and recruit amazing talent, undertake brand promotion,
                and receive live product feedback.
              </Text>
            </Stack>
          </Stack>
          <Stack size="small">
            <IconLabel icon="Calendar">TBA, Early 2022</IconLabel>
            <IconLabel icon="Location">
              Remote (Australia &amp; New Zealand)
            </IconLabel>
          </Stack>
        </Stack>
      </div>
    </div>
  </section>
);

export default SponsorHero;
