import React from 'react';
import styles from './stats.module.scss';
import pastSponsors from '@content/sponsorship/past-sponsors.json';
import Grid from '@components/grid/grid';
import { H4, H2XL, H3 } from '@components/typography/typography';

const Stats = () => (
  <section className={styles['stats']}>
    <div className={styles['stats-wrapper']}>
      <div className={styles['stats-container']}>
        <H4>Since 2014...</H4>
      </div>
      <div className={styles['stats-flex']}>
        <div className={styles['stats-events']}>
          <H2XL>15</H2XL>
          <H3>events</H3>
        </div>
        <div className={styles['stats-students']}>
          <H2XL>500+</H2XL>
          <H3>students</H3>
        </div>
        <div className={styles['stats-ideas']}>
          <H2XL>123</H2XL>
          <H3>ideas</H3>
        </div>
        <div className={styles['stats-bike']}>
          <H2XL>1</H2XL>
          <H3>blender bike</H3>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
