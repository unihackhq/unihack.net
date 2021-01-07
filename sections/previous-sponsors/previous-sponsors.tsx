import React from 'react';
import styles from './previous-sponsors.module.scss';
import pastSponsors from '../../content/past-sponsors.json';
import Grid from '@components/grid/grid';
import { H2 } from '@components/typography/typography';

const PreviousSponsors = () => (
  <section className={styles['previous-sponsors']}>
    <div className={styles['previous-sponsors-content']}>
      <H2>Previous Sponsors</H2>
      <Grid items={pastSponsors.sponsors} basePath={pastSponsors.base} />
      <p>... and many more</p>
    </div>
  </section>
);

export default PreviousSponsors;
