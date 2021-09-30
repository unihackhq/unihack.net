import React from 'react';
import styles from './previous-sponsors.module.scss';
import pastSponsors from '../../content/past-sponsors.json';
import Grid from '@components/grid/grid';
import { H2XL } from '@components/typography/typography';

const PreviousSponsors = () => (
  <section className={styles['previous-sponsors']}>
    <div className={styles['previous-sponsors-wrapper']}>
      <div className={styles['previous-sponsors-container']}>
        <H2XL>Previous Sponsors</H2XL>
        <Grid
          items={pastSponsors.sponsors}
          basePath={pastSponsors.base}
          style={styles['previous-sponsors-grid']}
        />
      </div>
    </div>
  </section>
);

export default PreviousSponsors;
