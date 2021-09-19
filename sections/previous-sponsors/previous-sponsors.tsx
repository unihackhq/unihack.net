import React from 'react';
import styles from './previous-sponsors.module.scss';
import pastSponsors from '../../content/past-sponsors.json';
import Grid from '@components/grid/grid';
import { H2XL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const PreviousSponsors = () => (
  <section className={styles['previous-sponsors']}>
    <Stack size="small" className={styles['previous-sponsors-content']}>
      <H2XL>Previous Sponsors</H2XL>
      <Grid items={pastSponsors.sponsors} basePath={pastSponsors.base} />
      <Text>... and many more</Text>
    </Stack>
  </section>
);

export default PreviousSponsors;
