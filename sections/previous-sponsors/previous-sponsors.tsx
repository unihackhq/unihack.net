import React from 'react';
import styles from './previous-sponsors.module.scss';
import pastSponsors from '../../content/past-sponsors.json';
import Grid from '@components/grid/grid';
import { H2, H3 } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const PreviousSponsors = () => (
  <section className={styles['previous-sponsors']}>
    <Stack size="small" className={styles['previous-sponsors-content']}>
      <H2>Previous Sponsors</H2>
      <Grid items={pastSponsors.sponsors} basePath={pastSponsors.base} />
      <H3>... and many more</H3>
    </Stack>
  </section>
);

export default PreviousSponsors;
