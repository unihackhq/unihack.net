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
                UNIHACK 2021 is a 48-hour hackathon with the mission to provide
                a creative space for engineering, design and product students to
                build innovative projects that are ready to go to market. Come
                join us in the Imagination Revolution.
              </Text>
            </Stack>
            <Text bold>Come join us in the Imagination Revolution!</Text>
          </Stack>
          <Stack size="small">
            <IconLabel icon="Calendar">5-7 March, 2021</IconLabel>
            <IconLabel icon="Location">Online</IconLabel>
          </Stack>
        </Stack>
      </div>
    </div>
  </section>
);

export default SponsorHero;
