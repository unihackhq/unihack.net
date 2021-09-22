import React from 'react';
import styles from './sponsor-hero.module.scss';
import Stack from '@components/stack/stack';
import { H2, Text } from '@components/typography/typography';
import { IconLabel } from '@components/icon-label/icon-label';
import Grid from '@components/grid/grid';
import pastSponsors from '@content/past-sponsors.json';

const PostItNote = () => (
  <div className={styles['post-it-note']}>
    <div className={styles['post-it-note-text']}>
      <h1>Come join us in the Imagination Revolution!</h1>
      <Text>
        UNIHACK is where Australia's upcoming generation of tech disrupters
        build and showcase their innovative and market-ready projects over a
        48-hour period.
      </Text>
      <ul>
        <li>Meet and recruit amazing talent</li>
        <li>Undertake brand promotion</li>
        <li>Receive live product feedback</li>
      </ul>
    </div>
    <Stack size="large">
      <IconLabel
        icon="Location"
        title="Location"
        style={styles['sponsor-stack-content']}
      >
        Remote (Australia &amp; New Zealand)
      </IconLabel>
      <IconLabel
        icon="Calendar"
        title="Date"
        style={styles['sponsor-stack-content']}
      >
        TBA, Early 2022
      </IconLabel>
    </Stack>
  </div>
);

const SponsorHero = () => (
  <section className={styles['sponsor-hero']}>
    <div className={styles['sponsor-hero-container']}>
      <div className={styles['sponsor-event-info']}>
        <PostItNote />
      </div>
      <div className={styles['sponsor-previous-sponsors']}>
        <Stack size="small" className={styles['previous-sponsors-content']}>
          <H2>Previous Sponsors</H2>
          <Grid
            small
            items={pastSponsors.sponsors}
            basePath={pastSponsors.base}
          />
        </Stack>
      </div>
    </div>
  </section>
);

export default SponsorHero;
